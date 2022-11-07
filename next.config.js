/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    transpilePackages: ["@next-auth/firebase-adapter"],
  },
};

module.exports = nextConfig;
