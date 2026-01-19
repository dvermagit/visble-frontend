import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://visble.ai';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}


// import { MetadataRoute } from 'next';

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: [
//       {
//         userAgent: '*',
//         allow: '/',
//         disallow: ['/api/', '/admin/', '/private/'],
//       },
//       {
//         userAgent: 'GPTBot', // OpenAI's crawler
//         allow: '/',
//       },
//       {
//         userAgent: 'ChatGPT-User', // ChatGPT browsing
//         allow: '/',
//       },
//       {
//         userAgent: 'Google-Extended', // Google's AI training crawler
//         allow: '/', // or disallow: '/' if you don't want Google to train on your content
//       },
//     ],
//     sitemap: 'https://visble.ai/sitemap.xml',
//   };
// }