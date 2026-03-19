/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  images: { remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
    unoptimized: true },
  // trailingSlash: true,
  compress: true,
};

module.exports = nextConfig;

