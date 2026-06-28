'use client';

import { useState } from 'react';
import { sendContactEmail } from '@/actions/sendEmail';
import { InputField, TextAreaField } from './FormFields';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setErrorMessage('');
    
    const response = await sendContactEmail(formData);
    
    setIsSubmitting(false);
    
    if (response.success) {
      setIsSuccess(true);
    } else {
      setErrorMessage(response.message || 'Something went wrong. Please try again.');
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center py-12">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--color-surface-tint)' }}>
          <span className="material-symbols-outlined text-[32px]" aria-hidden="true" style={{ color: 'white' }}>check</span>
        </div>
        <h3 className="text-section-header-mobile mb-4" style={{ fontFamily: 'var(--font-section-header)', color: 'var(--color-primary)' }}>Message Sent</h3>
        <p className="text-body-md" style={{ color: 'var(--color-stone)' }}>
          Thank you for reaching out. A member of our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-6" action={handleSubmit}>
      {errorMessage && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md text-sm">
          {errorMessage}
        </div>
      )}
      {/* Honeypot — invisible to humans, bots fill it and get silently rejected */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <InputField
        label="Full Name"
        type="text"
        id="name"
        name="name"
        required
      />
      <InputField
        label="Email Address"
        type="email"
        id="email"
        name="email"
        required
      />
      <InputField
        label="Subject"
        type="text"
        id="subject"
        name="subject"
        required
      />
      <TextAreaField
        label="Message"
        id="message"
        name="message"
        rows={4}
        required
      />
      
      <div className="flex items-start gap-3 mt-2">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          className="mt-1"
        />
        <label htmlFor="consent" className="text-body-sm" style={{ color: 'var(--color-on-surface-variant)' }}>
          I agree to the <a href="/privacy/" className="underline hover:opacity-80" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and consent to the processing of my personal data for the purpose of handling this inquiry in accordance with the DPDP Act 2023.
        </label>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full flex items-center justify-center text-label-caps rounded-[6px] py-4 transition-opacity hover:opacity-90 disabled:opacity-50"
        style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-on-primary)' }}
      >
        {isSubmitting ? (
          <>
            <span className="material-symbols-outlined animate-spin mr-2" aria-hidden="true" style={{ fontSize: '18px' }}>autorenew</span>
            Sending...
          </>
        ) : 'Send Message'}
      </button>
    </form>
  );
}
