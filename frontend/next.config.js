/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  async redirects() {
    return []
  },
  async rewrites() {
    return []
  }
}

module.exports = nextConfig;
