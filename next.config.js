/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  // Basic optimizations
  poweredByHeader: false,
  compress: true,
  trailingSlash: false,
  // Output configuration
  output: 'standalone',
  distDir: 'dist',
}

export default nextConfig
