/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: '/Users/han-yeonho/Desktop/cqbm-website',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      }
    ],
  },
}

module.exports = nextConfig