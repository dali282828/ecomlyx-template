/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [
      'storage.googleapis.com',
      'lh3.googleusercontent.com',
    ],
  },
  experimental: {
    // add any experimental flags here
  }
};

module.exports = nextConfig; 