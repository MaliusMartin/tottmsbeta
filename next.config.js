/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    experimental: {
      serverActions: true,
    },
    images: {
      domains: ['localhost'], // Add 'localhost' to the list of valid domains
    },
  }