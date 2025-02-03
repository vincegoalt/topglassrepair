/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization configuration
  images: {
    domains: ['topglassrepairs.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Build optimization
  swcMinify: true,
  reactStrictMode: true,
  compress: true,

  // Increased timeout for large number of pages
  staticPageGenerationTimeout: 600,
  experimental: {
    scrollRestoration: true
  }
};

export default nextConfig;
