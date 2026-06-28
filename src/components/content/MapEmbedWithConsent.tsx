'use client';

import { useState } from 'react';

interface MapEmbedWithConsentProps {
  mapEmbedUrl: string;
  city: string;
}

export default function MapEmbedWithConsent({ mapEmbedUrl, city }: MapEmbedWithConsentProps) {
  const [consentGiven, setConsentGiven] = useState(false);

  if (consentGiven) {
    return (
      <iframe
        src={mapEmbedUrl}
        width="100%"
        height="250"
        style={{ border: 0, borderRadius: '6px' }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map of ${city} office`}
      ></iframe>
    );
  }

  return (
    <div
      className="flex flex-col items-center justify-center p-6 text-center rounded-[6px] border"
      style={{
        height: '250px',
        backgroundColor: 'var(--color-surface-container-low)',
        borderColor: 'var(--color-outline-variant)',
      }}
    >
      <span className="material-symbols-outlined text-[32px] mb-2" aria-hidden="true" style={{ color: 'var(--color-outline)' }}>
        map
      </span>
      <p className="text-body-sm mb-4" style={{ color: 'var(--color-on-surface-variant)' }}>
        We use Google Maps to display our office location. By loading the map, you agree to Google's Privacy Policy and the processing of your data by Google.
      </p>
      <button
        onClick={() => setConsentGiven(true)}
        className="inline-flex items-center justify-center py-2 px-4 rounded-[4px] font-bold text-[14px] transition-opacity hover:opacity-90"
        style={{
          backgroundColor: 'var(--color-outline)',
          color: 'white',
        }}
      >
        Load Map
      </button>
    </div>
  );
}
