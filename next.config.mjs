/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization configuration
  images: {
    domains: ['topglassrepairs.com', 'portageglassandmirror.com', 'abcglassandmirror.com', 'images.squarespace-cdn.com', 'www.araxwindows.com', 'tnglassinstall.com'],
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
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'topglassrepairs.com'
          }
        ],
        destination: 'https://www.topglassrepairs.com/:path*',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
