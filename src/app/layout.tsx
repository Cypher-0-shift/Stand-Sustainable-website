import type { Metadata } from 'next';
import { Source_Serif_4, Public_Sans } from 'next/font/google';
import './globals.css';

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
    default: 'Stand Sustainable Foundation — Dignity for Every Community, Forever',
    template: '%s | Stand Sustainable Foundation',
  },
  description: 'Building a better architecture for poverty alleviation through structural change, community capacity building, and institutional transparency across India.',
  openGraph: {
    title: 'Stand Sustainable Foundation',
    description: 'Building a better architecture for poverty alleviation.',
    url: 'https://standsustainable.org',
    siteName: 'Stand Sustainable Foundation',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stand Sustainable Foundation',
    description: 'Building a better architecture for poverty alleviation.',
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
        {/* Material Symbols Outlined */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
