'use client';

import { useState, FormEvent } from 'react';

export default function PartnerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [selectedInterest, setSelectedInterest] = useState('CSR Implementation');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const interestOptions = ['CSR Implementation', 'Co-Funding', 'Knowledge Partnership', 'Other'];

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
          <span className="material-symbols-outlined text-[32px]" style={{ color: 'white' }}>check_circle</span>
        </div>
        <h3 className="text-section-header-mobile mb-4" style={{ fontFamily: 'var(--font-section-header)', color: 'var(--color-primary)' }}>Inquiry Received</h3>
        <p className="text-body-md" style={{ color: 'var(--color-stone)' }}>
          Thank you for your interest in partnering with us. Our partnership team will review your inquiry and contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-label-caps" style={{ color: 'var(--color-stone)' }}>
          Organization Name
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
          Official Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full bg-transparent border-b p-3 focus:outline-none transition-colors"
          style={{ borderColor: 'var(--color-alabaster)', color: 'var(--color-primary)' }}
          required
        />
      </div>
      <div className="flex flex-col gap-2 relative">
        <label className="text-label-caps" style={{ color: 'var(--color-stone)' }}>
          Area of Interest
        </label>
        <div 
          className="w-full bg-transparent border-b p-3 flex justify-between items-center cursor-pointer transition-colors"
          style={{ borderColor: 'var(--color-alabaster)', color: 'var(--color-primary)' }}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span>{selectedInterest}</span>
          <span className="material-symbols-outlined transition-transform duration-200" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            expand_more
          </span>
        </div>
        
        {isDropdownOpen && (
          <div 
            className="absolute top-[100%] left-0 w-full z-10 mt-1 rounded-[6px] shadow-lg border overflow-hidden bg-white"
            style={{ borderColor: 'var(--color-alabaster)' }}
          >
            {interestOptions.map((option) => (
              <div
                key={option}
                className="p-4 cursor-pointer transition-colors"
                style={{ 
                  color: selectedInterest === option ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
                  fontWeight: selectedInterest === option ? 600 : 400,
                  backgroundColor: selectedInterest === option ? 'var(--color-surface)' : 'transparent'
                }}
                onClick={() => {
                  setSelectedInterest(option);
                  setIsDropdownOpen(false);
                }}
                onMouseEnter={(e) => {
                  if (selectedInterest !== option) {
                    e.currentTarget.style.backgroundColor = 'var(--color-surface-linen)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedInterest !== option) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
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
            Submitting...
          </>
        ) : 'Submit Inquiry'}
      </button>
    </form>
  );
}
