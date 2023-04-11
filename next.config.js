/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: ['pages', 'app', 'public']
};

module.exports = nextConfig;
