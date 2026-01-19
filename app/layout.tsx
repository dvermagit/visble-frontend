// // @ts-ignore: allow side-effect CSS import without type declarations
// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Visble - AI-Powered Brand Monitoring Platform',
//   description: 'Monitor your brand across all platforms with AI-powered insights, sentiment analysis, and real-time alerts.',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
//         <link 
//           href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200;12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&display=swap" 
//           rel="stylesheet" 
//         />
//       </head>
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

// @ts-ignore: allow side-effect CSS import without type declarations
// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import Header from '@/components/Header';

// const inter = Inter({ subsets: ['latin'] });

// // COMPLETE SEO METADATA
// export const metadata: Metadata = {
//   metadataBase: new URL('https://visble.ai'),
  
//   title: {
//     default: 'Visble.ai - AI Search Optimization Platform',
//     template: '%s | Visble.ai',
//   },
  
//   description: 'Optimize your website for AI search engines like ChatGPT, Perplexity, and Gemini. Track brand mentions, source citations, and AI visibility with Visble.ai.',
  
//   keywords: [
//     'AI SEO',
//     'AI search optimization',
//     'GEO',
//     'generative engine optimization',
//     'ChatGPT SEO',
//     'AI visibility',
//     'Perplexity AI',
//     'Gemini AI',
//     'brand monitoring',
//     'AI citations',
//     'source mentions',
//     'AI brand visibility'
//   ],
  
//   authors: [
//     { name: 'Visble.ai', url: 'https://visble.ai' }
//   ],
  
//   creator: 'Visble.ai',
//   publisher: 'Visble.ai',
  
//   // Open Graph (Facebook, LinkedIn
//   openGraph: {
//     type: 'website',
//     locale: 'en_US',
//     url: 'https://visble.ai',
//     siteName: 'Visble.ai',
//     title: 'Visble.ai - AI Search Optimization Platform',
//     description: 'Optimize your website for AI search engines like ChatGPT, Perplexity, and Gemini. Track your AI visibility and get cited in AI-generated answers.',
//     images: [
//       {
//         url: '/visble_logo.png',
//         width: 1200,
//         height: 630,
//         alt: 'Visble.ai - AI Search Optimization Platform',
//       },
//     ],
//   },

//   // Twitter Card
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Visble.ai - AI Search Optimization Platform',
//     description: 'Optimize your website for AI search engines. Track brand mentions and AI visibility.',
//     creator: '@visbleai', // Update with your actual Twitter handle
//     images: ['/visble_logo.png'],
//   },

//   // Robots meta
//   robots: {
//     index: true,
//     follow: true,
//     nocache: false,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },

//   // Verification tags (replace with your actual codes)
//   verification: {
//     google: 'your-google-site-verification-code', // Get from Google Search Console
//   },

//   // Canonical
//   alternates: {
//     canonical: 'https://visble.ai',
//   },

//   // Additional metadata
//   category: 'Technology',
//   classification: 'AI Search Optimization',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   // Organization Schema (JSON-LD)
//   const organizationSchema = {
//     '@context': 'https://schema.org',
//     '@type': 'Organization',
//     name: 'Visble.ai',
//     url: 'https://visble.ai',
//     logo: 'https://visble.ai/visble_logo.png',
//     description: 'AI Search Optimization Platform for tracking brand visibility in AI-generated answers',
//     sameAs: [
//       'https://twitter.com/visbleai', // Update with your actual social links
//       'https://linkedin.com/company/visble',
//       // Add more social profiles
//     ],
//     contactPoint: {
//       '@type': 'ContactPoint',
//       contactType: 'Customer Support',
//       email: 'support@visble.ai',
//       availableLanguage: ['English'],
//     },
//     foundingDate: '2024',
//     founders: [
//       {
//         '@type': 'Person',
//         name: 'Isha Sachdeva',
//         jobTitle: 'Founder',
//       },
//     ],
//   };

//   return (
//     <html lang="en">
//       <head>
//         {/* Preconnect for performance */}
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
//         {/* Custom fonts */}
//         <link 
//           href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200;12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&display=swap" 
//           rel="stylesheet" 
//         />

//         {/* Organization Schema */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(organizationSchema),
//           }}
//         />
//       </head>
//       <body className={inter.className}>
//         <Header />
//         <main>{children}</main>
//       </body>
//     </html>
//   );
// }

// @ts-ignore: allow side-effect CSS import without type declarations
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Bricolage_Grotesque } from 'next/font/google';
import Header from '@/components/Header';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://visble.ai'),
  
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#ffffff',
  
  title: {
    default: 'Visble.ai', 
    template: '%s | Visble.ai', 
  },

  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/site.webmanifest',

  // ✅ KEEP: Google Verification
  verification: {
    google: 'your-google-site-verification-code',
  },

  alternates: {
    canonical: './', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://visble.ai/#organization',
        name: 'Visble.ai',
        url: 'https://visble.ai',
        logo: {
          '@type': 'ImageObject',
          url: 'https://visble.ai/visble_logo.png',
          width: 512,
          height: 512
        },
        sameAs: [
          'https://twitter.com/visbleai',
          'https://linkedin.com/company/visble',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Support',
          email: 'hello@visble.ai',
          availableLanguage: ['English'],
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://visble.ai/#website',
        url: 'https://visble.ai',
        name: 'Visble.ai',
        publisher: {
          '@id': 'https://visble.ai/#organization'
        },
        inLanguage: 'en-US'
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}