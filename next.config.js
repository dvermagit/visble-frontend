// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: { remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cdn.sanity.io',
//       },
//     ],
//     unoptimized: true },
//   // trailingSlash: true,
//   compress: true,
//   async headers() {
//     return [
//       {
//         source: '/blogs',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, s-maxage=60, stale-while-revalidate=120',
//           },
//         ],
//       },
//     ]
//   },
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
    unoptimized: true },
  // trailingSlash: true,
  compress: true,
  async headers() {
    return [
      {
        source: '/blogs',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=60, stale-while-revalidate=120',
          },
        ],
      },
    ]
  },
};

module.exports = nextConfig;

