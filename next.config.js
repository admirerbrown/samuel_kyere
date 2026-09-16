/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/samuel_kyere' : '',
  images: {
    unoptimized: true,
  },
  experimental: {
    typedRoutes: false,
  },
};

module.exports = nextConfig;
