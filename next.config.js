/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enable static export
  trailingSlash: true, // Add trailing slashes to routes
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig