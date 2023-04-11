/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn3.xsolla.com"],
  },
};

module.exports = nextConfig;
