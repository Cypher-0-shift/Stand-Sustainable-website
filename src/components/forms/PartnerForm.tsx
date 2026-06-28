'use client';

import { useState } from 'react';
import { sendPartnerEmail } from '@/actions/sendEmail';
import { InputField, TextAreaField } from './FormFields';

const INTEREST_OPTIONS = ['CSR Implementation', 'Co-Funding', 'Knowledge Partnership', 'Other'] as const;

export default function PartnerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [selectedInterest, setSelectedInterest] = useState(INTEREST_OPTIONS[0]);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setErrorMessage('');
    
    const response = await sendPartnerEmail(formData);
    
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
          <span className="material-symbols-outlined text-[32px]" aria-hidden="true" style={{ color: 'white' }}>check_circle</span>
        </div>
        <h3 className="text-section-header-mobile mb-4" style={{ fontFamily: 'var(--font-section-header)', color: 'var(--color-primary)' }}>Inquiry Received</h3>
        <p className="text-body-md" style={{ color: 'var(--color-stone)' }}>
          Thank you for your interest in partnering with us. Our partnership team will review your inquiry and contact you shortly.
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
        label="Organization Name"
        type="text"
        id="name"
        name="name"
        required
      />
      <InputField
        label="Official Email"
        type="email"
        id="email"
        name="email"
        required
      />
      <div className="flex flex-col gap-2 relative">
        <label htmlFor="interest" className="text-label-caps" style={{ color: 'var(--color-stone)' }}>
          Area of Interest
        </label>
        <div className="relative w-full">
          <select
            id="interest"
            name="interest"
            value={selectedInterest}
            onChange={(e) => setSelectedInterest(e.target.value)}
            className="w-full bg-transparent border-b p-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent rounded-sm transition-colors appearance-none cursor-pointer"
            style={{ borderColor: 'var(--color-alabaster)', color: 'var(--color-primary)' }}
            required
          >
            {INTEREST_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" style={{ color: 'var(--color-primary)' }}>
            expand_more
          </span>
        </div>
      </div>
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
          I agree to the <a href="/privacy" className="underline hover:opacity-80" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and consent to the processing of my personal data for the purpose of handling this inquiry in accordance with the DPDP Act 2023.
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
            Submitting...
          </>
        ) : 'Submit Inquiry'}
      </button>
    </form>
  );
}
