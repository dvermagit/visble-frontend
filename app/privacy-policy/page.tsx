
// import { remark } from 'remark';
// import html from 'remark-html';
// import { notFound } from 'next/navigation';
// import { getPageBySlug } from '@/lib/page';

// export const metadata = {
//   title: 'Privacy Policy - Visble AI',
//   description: 'Privacy Policy for Visble AI',
// };

// export default async function PrivacyPolicyPage() {
//   const page = getPageBySlug('privacy-policy');

//   if (!page) {
//     notFound();
//   }

//   const processedContent = await remark()
//     .use(html)
//     .process(page.content);
//   const contentHtml = processedContent.toString();

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold mb-8">{page.title}</h1>
//       <div 
//         className="prose prose-lg max-w-none"
//         dangerouslySetInnerHTML={{ __html: contentHtml }} 
//       />
//     </div>
//   );
// }

import { getPageBySlug } from '@/lib/page';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import html from 'remark-html';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Visble.ai',
  description: 'Privacy policy for Visble.ai - Learn how we collect, use, and protect your data.',
  alternates: {
    canonical: 'https://visble.ai/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function PrivacyPolicyPage() {
  const page = getPageBySlug('privacy-policy');

  if (!page) {
    notFound();
  }

  // Process markdown
  const processedContent = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(page.content);
  
  const contentHtml = processedContent.toString();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {page.title}
          </h1>
          
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-200
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-gray-700 prose-li:my-2
              prose-a:text-purple-600 prose-a:underline hover:prose-a:text-purple-700
              prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: contentHtml }} 
          />
        </div>
      </div>
    </>
  );
}