/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "cdn3.xsolla.com",
      "cdn.akamai.steamstatic.com",
      "img.icons8.com",
    ],
  },
};

module.exports = nextConfig;
