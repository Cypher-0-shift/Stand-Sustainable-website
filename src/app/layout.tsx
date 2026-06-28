import type { Metadata } from 'next';
import { Source_Serif_4, Public_Sans } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/layout/SmoothScroll';
import CookieBanner from '@/components/layout/CookieBanner';
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Stand Sustainable Foundation — Lets Stand Together.',
    template: '%s | Stand Sustainable Foundation',
  },
  description: 'Working for sustainability',
  authors: [{ name: 'Stand Sustainable' }],
  openGraph: {
    title: 'Lets Stand Together.',
    description: 'Working for sustainability',
    url: 'https://standsustainable.org/',
    siteName: 'Stand Sustainable Foundation',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/content/stock-8609.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@standsustain',
    creator: '@standsustain',
    title: 'Stand Sustainable Foundation',
    description: 'Lets Stand Together.',
    images: [{ url: '/images/content/stock-8609.jpg', alt: 'Stand Sustainable Foundation' }],
  },
  other: {
    'theme-color': '#008390',
  },
  metadataBase: new URL('https://standsustainable.org'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${publicSans.variable}`}>
      <head>
        {/* Preconnect hints for external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Material Symbols Outlined */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />

        {/* PWA Manifest and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Schema.org JSON-LD for NGO and WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["NGO", "Organization"],
                  "@id": "https://standsustainable.org/#organization",
                  "name": "Stand Sustainable Foundation",
                  "url": "https://standsustainable.org",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://standsustainable.org/images/logo.png"
                  },
                  "description": "We are working on a social project to ensure sustainability among all vulnerable and marginalised communities, with a key focus on the Sustainable Development Goals.",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "contact@standsustainable.org",
                    "contactType": "customer support"
                  },
                  "sameAs": [
                    "https://twitter.com/standsustain",
                    "https://www.linkedin.com/company/stand-sustainable-foundation"
                  ],
                  "areaServed": "IN"
                },
                {
                  "@type": "WebSite",
                  "@id": "https://standsustainable.org/#website",
                  "url": "https://standsustainable.org",
                  "name": "Stand Sustainable Foundation",
                  "publisher": {
                    "@id": "https://standsustainable.org/#organization"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
        <CookieBanner />
      </body>
    </html>
  );
}
