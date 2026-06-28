'use server';

import { headers } from 'next/headers';
import { Resend } from 'resend';

/* ============================================================
   CONFIGURATION (all secrets live in env vars, never hardcoded)
   ============================================================ */
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const RECIPIENT = process.env.RECIPIENT_EMAIL ?? '';
const FROM_ADDRESS =
  process.env.RESEND_FROM ?? 'Stand Sustainable Website <onboarding@resend.dev>';
const IS_DEV = process.env.NODE_ENV === 'development';

/* ============================================================
   RATE LIMITER  (in-memory, per-IP window)
   — 5 submissions per IP per 15 minutes
   ============================================================ */
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT = 5;

// ⚠️ PRODUCTION TODO: Replace this in-memory rate limiter with Upstash Redis
// or Vercel KV before launch. See: https://upstash.com/docs/redis/sdks/ratelimit-ts/overview
// Required env vars: UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN

// In-memory map retained as best-effort for single-instance deployments.
// For production serverless deployments, replace with Upstash Redis:
// https://upstash.com/docs/redis/sdks/ratelimit-ts/overview
// Environment variables needed: UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN
const submissions = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(ip: string): boolean {
  // Purge stale entries to prevent unbounded memory growth
  const now = Date.now();
  for (const [key, entry] of submissions.entries()) {
    if (now - entry.windowStart > RATE_WINDOW_MS) {
      submissions.delete(key);
    }
  }

  const entry = submissions.get(ip);
  if (!entry || now - entry.windowStart > RATE_WINDOW_MS) {
    submissions.set(ip, { count: 1, windowStart: now });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

/* ============================================================
   INPUT HELPERS
   ============================================================ */

/** Strip HTML tags to prevent injection in outgoing emails. */
function sanitize(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateString(
  raw: FormDataEntryValue | null,
  maxLength: number,
): string | null {
  if (typeof raw !== 'string' || raw.trim().length === 0) return null;
  const trimmed = raw.trim();
  if (trimmed.length > maxLength) return null;
  return trimmed;
}

/* ============================================================
   RESPONSE TYPE
   ============================================================ */
export type EmailResponse = {
  success: boolean;
  message: string;
};

/* ============================================================
   CONTACT FORM ACTION
   ============================================================ */
export async function sendContactEmail(
  formData: FormData,
): Promise<EmailResponse> {
  /* --- honeypot: hidden field should be empty --- */
  const honeypot = formData.get('website') as string | null;
  if (honeypot) {
    // Bots fill hidden fields; silently pretend success
    return { success: true, message: 'Message sent successfully.' };
  }

  /* --- consent validation --- */
  const consent = formData.get('consent');
  if (!consent) {
    return {
      success: false,
      message: 'You must consent to the processing of your personal data to submit this form.',
    };
  }

  /* --- rate limit (IP from server headers, not client) --- */
  const headersList = await headers();
  const ip = headersList.get('x-forwarded-for')?.split(',')[0].trim()
    ?? headersList.get('x-real-ip')
    ?? 'unknown';
  if (isRateLimited(ip)) {
    return {
      success: false,
      message: 'Too many submissions. Please try again later.',
    };
  }

  /* --- validate --- */
  const name = validateString(formData.get('name'), 200);
  const email = validateString(formData.get('email'), 320);
  const subject = validateString(formData.get('subject'), 500);
  const message = validateString(formData.get('message'), 5000);

  if (!name || !email || !subject || !message) {
    return { success: false, message: 'All fields are required and must not exceed length limits.' };
  }

  if (!EMAIL_RE.test(email)) {
    return { success: false, message: 'Please provide a valid email address.' };
  }

  /* --- send (or simulate in dev) --- */
  if (!resend || !RECIPIENT) {
    if (IS_DEV) {
      console.warn('[DEV] RESEND_API_KEY or RECIPIENT_EMAIL is not set. Simulating success.');
      return { success: true, message: 'Simulated success (development mode).' };
    }
    console.error('[PROD] RESEND_API_KEY or RECIPIENT_EMAIL is not configured. Submission dropped.');
    return { success: false, message: 'The contact form is temporarily unavailable. Please email us directly.' };
  }

  try {
    const data = await resend.emails.send({
      from: FROM_ADDRESS,
      to: RECIPIENT,
      replyTo: email,
      subject: `New Contact Form Submission: ${sanitize(subject)}`,
      html: `
        <h2>New Message from ${sanitize(name)}</h2>
        <p><strong>Email:</strong> ${sanitize(email)}</p>
        <p><strong>Subject:</strong> ${sanitize(subject)}</p>
        <hr />
        <p>${sanitize(message).replace(/\n/g, '<br>')}</p>
      `,
    });

    if (data.error) {
      console.error('Resend error:', data.error);
      return { success: false, message: 'Failed to send message. Please try again.' };
    }

    return { success: true, message: 'Message sent successfully.' };
  } catch (error: unknown) {
    console.error('Error sending email:', error instanceof Error ? error.message : error);
    return { success: false, message: 'An unexpected error occurred.' };
  }
}

/* ============================================================
   PARTNER FORM ACTION
   ============================================================ */
export async function sendPartnerEmail(
  formData: FormData,
): Promise<EmailResponse> {
  /* --- honeypot --- */
  const honeypot = formData.get('website') as string | null;
  if (honeypot) {
    return { success: true, message: 'Message sent successfully.' };
  }

  /* --- consent validation --- */
  const consent = formData.get('consent');
  if (!consent) {
    return {
      success: false,
      message: 'You must consent to the processing of your personal data to submit this form.',
    };
  }

  /* --- rate limit (IP from server headers, not client) --- */
  const headersList = await headers();
  const ip = headersList.get('x-forwarded-for')?.split(',')[0].trim()
    ?? headersList.get('x-real-ip')
    ?? 'unknown';
  if (isRateLimited(ip)) {
    return {
      success: false,
      message: 'Too many submissions. Please try again later.',
    };
  }

  /* --- validate --- */
  const name = validateString(formData.get('name'), 200);
  const email = validateString(formData.get('email'), 320);
  const interest = validateString(formData.get('interest'), 200);
  const message = validateString(formData.get('message'), 5000);

  if (!name || !email || !interest || !message) {
    return { success: false, message: 'All fields are required and must not exceed length limits.' };
  }

  if (!EMAIL_RE.test(email)) {
    return { success: false, message: 'Please provide a valid email address.' };
  }

  /* --- send (or simulate in dev) --- */
  if (!resend || !RECIPIENT) {
    if (IS_DEV) {
      console.warn('[DEV] RESEND_API_KEY or RECIPIENT_EMAIL is not set. Simulating success.');
      return { success: true, message: 'Simulated success (development mode).' };
    }
    console.error('[PROD] RESEND_API_KEY or RECIPIENT_EMAIL is not configured. Submission dropped.');
    return { success: false, message: 'The contact form is temporarily unavailable. Please email us directly.' };
  }

  try {
    const data = await resend.emails.send({
      from: FROM_ADDRESS,
      to: RECIPIENT,
      replyTo: email,
      subject: `New Partnership Inquiry: ${sanitize(name)}`,
      html: `
        <h2>New Partnership Inquiry from ${sanitize(name)}</h2>
        <p><strong>Email:</strong> ${sanitize(email)}</p>
        <p><strong>Area of Interest:</strong> ${sanitize(interest)}</p>
        <hr />
        <p>${sanitize(message).replace(/\n/g, '<br>')}</p>
      `,
    });

    if (data.error) {
      console.error('Resend error:', data.error);
      return { success: false, message: 'Failed to send message. Please try again.' };
    }

    return { success: true, message: 'Message sent successfully.' };
  } catch (error: unknown) {
    console.error('Error sending email:', error instanceof Error ? error.message : error);
    return { success: false, message: 'An unexpected error occurred.' };
  }
}
