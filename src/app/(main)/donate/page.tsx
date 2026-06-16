'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  donateHero,
  donationAmounts,
  frequencyOptions,
  trustBadges,
  thankYouContent,
  feeCoverOption,
} from '@/content/donate';

/**
 * Donate Page — Now uses standard navigation from (main) layout.
 * Matches Stitch commitment screen transactional focus.
 */
export default function DonatePage() {
  const [frequency, setFrequency] = useState('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate payment gateway routing / network request
    setTimeout(() => {
      setIsSubmitting(false);
      setShowThankYou(true);
    }, 2000);
  };

  return (
    <>
      {/* Main Content */}
      <div
        className="flex-grow flex flex-col items-center justify-center px-6 md:px-16 pb-16 md:pb-24 pt-[var(--spacing-nav-height)] relative"
      >
        {/* Emotive Intro */}
        <section className="max-w-4xl w-full text-center mb-16 mt-12 md:mt-24">
          <h1
            className="text-display-mobile md:text-display italic"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-primary)',
            }}
          >
            {donateHero.headline}
          </h1>
        </section>

        {/* Donation Flow Container */}
        <section
          className="w-full max-w-2xl rounded-xl shadow-sm border relative z-10"
          style={{
            backgroundColor: 'var(--color-surface-container-lowest)',
            borderColor: 'var(--color-alabaster)',
            padding: '24px',
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-10" id="commitment-form">
            {/* Frequency Toggle */}
            <div
              className="flex justify-center gap-4 border-b pb-8"
              style={{ borderColor: 'var(--color-alabaster)' }}
            >
              {frequencyOptions.map((option) => (
                <label key={option.value} className="cursor-pointer relative flex-1 text-center">
                  <input
                    type="radio"
                    name="frequency"
                    value={option.value}
                    checked={frequency === option.value}
                    onChange={() => setFrequency(option.value)}
                    className="peer sr-only"
                  />
                  <span
                    className="block py-3 px-6 text-label-caps transition-colors"
                    style={{
                      color: frequency === option.value
                        ? 'var(--color-primary)'
                        : 'var(--color-on-surface-variant)',
                      fontWeight: frequency === option.value ? 700 : 600,
                    }}
                  >
                    {option.label}
                  </span>
                  <div
                    className="absolute bottom-0 left-0 w-full h-0.5 transition-transform origin-center"
                    style={{
                      backgroundColor: 'var(--color-primary)',
                      transform: frequency === option.value ? 'scaleX(1)' : 'scaleX(0)',
                    }}
                  />
                </label>
              ))}
            </div>

            {/* Amount Grid */}
            <div>
              <h2
                className="text-label-caps mb-4 tracking-widest"
                style={{ color: 'var(--color-stone)' }}
              >
                Select Amount
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {donationAmounts.map((amount) => (
                  <label key={amount.value} className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="amount"
                      value={amount.value}
                      checked={selectedAmount === amount.value}
                      onChange={() => setSelectedAmount(amount.value)}
                      className="sr-only"
                    />
                    <div
                      className="border rounded-xl p-4 text-center transition-colors group"
                      style={{
                        borderColor: selectedAmount === amount.value
                          ? 'var(--color-primary)'
                          : 'var(--color-alabaster)',
                        backgroundColor: selectedAmount === amount.value
                          ? 'var(--color-surface-linen)'
                          : 'transparent',
                      }}
                    >
                      <span
                        className="block text-impact-number mb-2"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        {amount.currency}{amount.value.toLocaleString('en-IN')}
                      </span>
                      <span
                        className="block text-label-caps"
                        style={{ fontSize: '11px', color: 'var(--color-on-surface-variant)' }}
                      >
                        {amount.label}
                      </span>
                      {/* Radio dot */}
                      <div
                        className="w-4 h-4 rounded-full border mx-auto mt-3 flex items-center justify-center"
                        style={{ borderColor: 'var(--color-outline)' }}
                      >
                        <div
                          className="w-2 h-2 rounded-full transition-colors"
                          style={{
                            backgroundColor: selectedAmount === amount.value
                              ? 'var(--color-primary)'
                              : 'transparent',
                          }}
                        />
                      </div>
                    </div>
                  </label>
                ))}

                {/* Custom Amount */}
                <label className="relative cursor-pointer col-span-2">
                  <input
                    type="radio"
                    name="amount"
                    value="custom"
                    checked={selectedAmount === 'custom'}
                    onChange={() => setSelectedAmount('custom')}
                    className="sr-only"
                  />
                  <div
                    className="border rounded-xl p-4 h-full flex flex-col justify-center items-center transition-colors group"
                    style={{
                      borderColor: selectedAmount === 'custom'
                        ? 'var(--color-primary)'
                        : 'var(--color-alabaster)',
                      backgroundColor: selectedAmount === 'custom'
                        ? 'var(--color-surface-linen)'
                        : 'transparent',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="text-2xl"
                        style={{
                          fontFamily: 'var(--font-impact-number)',
                          color: 'var(--color-primary)',
                        }}
                      >
                        ₹
                      </span>
                      <input
                        type="number"
                        placeholder="Custom"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount('custom');
                        }}
                        onFocus={() => setSelectedAmount('custom')}
                        className="bg-transparent border-b focus:ring-0 text-xl w-24 text-center outline-none"
                        style={{
                          fontFamily: 'var(--font-impact-number)',
                          color: 'var(--color-primary)',
                          borderColor: 'var(--color-alabaster)',
                        }}
                      />
                    </div>
                    <span
                      className="block text-label-caps mt-2"
                      style={{ fontSize: '11px', color: 'var(--color-on-surface-variant)' }}
                    >
                      Any amount helps
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Personal Details */}
            <div
              className="space-y-6 pt-6 border-t"
              style={{ borderColor: 'var(--color-alabaster)' }}
            >
              <h2
                className="text-label-caps tracking-widest"
                style={{ color: 'var(--color-stone)' }}
              >
                Your Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fname"
                    className="block text-label-caps mb-2"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    First Name
                  </label>
                  <input
                    id="fname"
                    type="text"
                    required
                    className="w-full border rounded-xl px-4 py-3 text-body-md outline-none transition-shadow"
                    style={{
                      backgroundColor: 'var(--color-surface-linen)',
                      borderColor: 'var(--color-alabaster)',
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lname"
                    className="block text-label-caps mb-2"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    Last Name
                  </label>
                  <input
                    id="lname"
                    type="text"
                    required
                    className="w-full border rounded-xl px-4 py-3 text-body-md outline-none transition-shadow"
                    style={{
                      backgroundColor: 'var(--color-surface-linen)',
                      borderColor: 'var(--color-alabaster)',
                    }}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-label-caps mb-2"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full border rounded-xl px-4 py-3 text-body-md outline-none transition-shadow"
                  style={{
                    backgroundColor: 'var(--color-surface-linen)',
                    borderColor: 'var(--color-alabaster)',
                  }}
                />
              </div>
              <div className="pt-4 flex items-center gap-3">
                <input
                  id="cover-fees"
                  type="checkbox"
                  className="w-5 h-5"
                  style={{ borderColor: 'var(--color-alabaster)' }}
                />
                <label
                  htmlFor="cover-fees"
                  className="text-body-md cursor-pointer"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  {feeCoverOption.label}
                </label>
              </div>
            </div>

            {/* Payment Placeholder */}
            <div
              className="space-y-6 pt-6 border-t"
              style={{ borderColor: 'var(--color-alabaster)' }}
            >
              <h2
                className="text-label-caps tracking-widest"
                style={{ color: 'var(--color-stone)' }}
              >
                Payment Method
              </h2>
              <div
                className="p-4 border rounded-xl flex items-center justify-between"
                style={{
                  borderColor: 'var(--color-alabaster)',
                  backgroundColor: 'var(--color-surface-linen)',
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    credit_card
                  </span>
                  <span className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
                    Card details...
                  </span>
                </div>
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ color: 'var(--color-stone)' }}
                >
                  lock
                </span>
              </div>
            </div>

            {/* CTA & Trust */}
            <div className="pt-8 flex flex-col items-center gap-6">
              <button
                type="submit"
                className="w-full py-4 text-label-caps rounded-xl shadow-sm flex justify-center items-center gap-2 transition-colors duration-300 hover:opacity-90"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: 'var(--color-on-primary)',
                }}
              >
                <span>Make a Commitment</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>

              <div className="flex items-center gap-6 text-label-caps" style={{ fontSize: '11px', color: 'var(--color-stone)' }}>
                {trustBadges.map((badge) => (
                  <div key={badge.label} className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">{badge.icon}</span>
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </section>

        {/* Background decorative element */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{ backgroundColor: 'rgba(0, 64, 31, 0.02)' }}
          aria-hidden="true"
        />
      </div>

      {/* Thank You Modal */}
      {showThankYou && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          style={{
            backgroundColor: 'rgba(250, 247, 242, 0.95)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <div
            className="max-w-xl w-full p-12 rounded-xl shadow-lg border text-center"
            style={{
              backgroundColor: 'var(--color-surface-container-lowest)',
              borderColor: 'var(--color-alabaster)',
            }}
          >
            {/* Portrait */}
            <div
              className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-8 border-4 shadow-sm"
              style={{ borderColor: 'var(--color-surface-linen)' }}
            >
              <Image
                src={thankYouContent.image}
                alt={thankYouContent.imageAlt}
                width={128}
                height={128}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <h2
              className="text-section-header-mobile mb-4"
              style={{
                fontFamily: 'var(--font-section-header)',
                color: 'var(--color-primary)',
              }}
            >
              {thankYouContent.headline}
            </h2>
            <p
              className="text-body-lg mb-8"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              {thankYouContent.body}
            </p>
            <Link
              href={thankYouContent.ctaHref}
              className="inline-block px-8 py-3 border text-label-caps rounded-xl transition-colors"
              style={{
                borderColor: 'var(--color-primary)',
                color: 'var(--color-primary)',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-surface-linen)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              {thankYouContent.ctaLabel}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
