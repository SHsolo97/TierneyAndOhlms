/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enable static export
  trailingSlash: true, // Add trailing slashes to routes
  skipTrailingSlashRedirect: true,
  // Always set basePath for GitHub Pages - Next.js will handle this correctly
  basePath: '/TierneyAndOhlms',
  assetPrefix: '/TierneyAndOhlms',
}

module.exports = nextConfig