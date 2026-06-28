import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=()',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // unsafe-inline required for Next.js inline styles; unsafe-eval removed.
      // TODO: Migrate to nonce-based CSP to eliminate unsafe-inline.
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      // img-src covers all used external image sources
      "img-src 'self' data: blob: https://images.unsplash.com https://maps.googleapis.com https://maps.gstatic.com https://streetviewpixels-pa.googleapis.com",
      // frame-src for Google Maps consent iframe
      "frame-src 'self' https://www.google.com https://maps.google.com",
      // connect-src for Resend API calls from server actions
      "connect-src 'self' https://api.resend.com",
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  /* Static export disabled to allow Resend Server Actions */
  // output: 'export',

  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/aida-public/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },

  /* Trailing slashes for clean URLs on static hosts */
  trailingSlash: true,

  /* Security headers on all routes */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

