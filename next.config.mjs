/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable static optimization
  output: 'export',
  // Disable server components since we're doing static export
  experimental: {
    serverActions: false,
  },
  // Optimize production builds
  swcMinify: true,
  // Enable React strict mode for better development
  reactStrictMode: true,
  // Compress assets in production
  compress: true,
};

export default nextConfig;
