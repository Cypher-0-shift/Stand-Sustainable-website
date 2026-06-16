import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Static export for maximum performance — deployable anywhere */
  output: 'export',

  /* Image optimization with external domains */
  images: {
    unoptimized: true, // Required for static export
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
};

export default nextConfig;
