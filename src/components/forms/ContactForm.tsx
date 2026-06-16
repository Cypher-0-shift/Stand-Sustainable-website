'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center py-12">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--color-surface-tint)' }}>
          <span className="material-symbols-outlined text-[32px]" style={{ color: 'white' }}>check</span>
        </div>
        <h3 className="text-section-header-mobile mb-4" style={{ fontFamily: 'var(--font-section-header)', color: 'var(--color-primary)' }}>Message Sent</h3>
        <p className="text-body-md" style={{ color: 'var(--color-stone)' }}>
          Thank you for reaching out. A member of our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-label-caps" style={{ color: 'var(--color-stone)' }}>
          Full Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full bg-transparent border-b p-3 focus:outline-none transition-colors"
          style={{ borderColor: 'var(--color-alabaster)', color: 'var(--color-primary)' }}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-label-caps" style={{ color: 'var(--color-stone)' }}>
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="w-full bg-transparent border-b p-3 focus:outline-none transition-colors"
          style={{ borderColor: 'var(--color-alabaster)', color: 'var(--color-primary)' }}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-label-caps" style={{ color: 'var(--color-stone)' }}>
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="w-full bg-transparent border-b p-3 focus:outline-none transition-colors"
          style={{ borderColor: 'var(--color-alabaster)', color: 'var(--color-primary)' }}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-label-caps" style={{ color: 'var(--color-stone)' }}>
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full bg-transparent border-b p-3 focus:outline-none transition-colors resize-none"
          style={{ borderColor: 'var(--color-alabaster)', color: 'var(--color-primary)' }}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full flex items-center justify-center text-label-caps rounded-[6px] py-4 transition-opacity hover:opacity-90 disabled:opacity-50"
        style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-on-primary)' }}
      >
        {isSubmitting ? (
          <>
            <span className="material-symbols-outlined animate-spin mr-2" style={{ fontSize: '18px' }}>autorenew</span>
            Sending...
          </>
        ) : 'Send Message'}
      </button>
    </form>
  );
}
