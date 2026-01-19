// import { getPostBySlug, getAllPosts } from '@/lib/posts';
// import { remark } from 'remark';
// import html from 'remark-html';
// import { notFound } from 'next/navigation';
// // Remove: import Image from 'next/image';

// // Generate static params for all blog posts
// export async function generateStaticParams() {
//   const posts = getAllPosts();
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// // Generate metadata for SEO
// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const post = getPostBySlug(params.slug);
  
//   if (!post) {
//     return {
//       title: 'Post Not Found',
//     };
//   }

//   return {
//     title: post.title,
//     description: post.excerpt || post.title,
//     openGraph: {
//       title: post.title,
//       description: post.excerpt || post.title,
//       type: 'article',
//       publishedTime: post.date,
//       images: post.coverImage ? [`/images/blog/${post.coverImage}`] : [],
//     },
//   };
// }

// export default async function BlogPost({ params }: { params: { slug: string } }) {
//   const post = getPostBySlug(params.slug);

//   if (!post) {
//     notFound();
//   }

//   // Convert markdown to HTML
//   const processedContent = await remark()
//     .use(html)
//     .process(post.content);
//   const contentHtml = processedContent.toString();

//   return (
//     <article className="max-w-4xl mx-auto px-4 py-8">
//       {/* Cover Image - Using regular img tag */}
//       {post.coverImage && (
//         <div className="mb-8">
//           <img
//             src={`/images/blog/${post.coverImage}`}
//             alt={post.title}
//             className="w-full h-auto rounded-lg"
//           />
//         </div>
//       )}

//       {/* Header */}
//       <header className="mb-8">
//         <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
//         <div className="flex flex-wrap gap-4 text-gray-600">
//           <time dateTime={post.date}>
//             {new Date(post.date).toLocaleDateString('en-US', {
//               year: 'numeric',
//               month: 'long',
//               day: 'numeric',
//             })}
//           </time>
//           {post.categories && post.categories.length > 0 && (
//             <div className="flex gap-2">
//               {post.categories.map((cat) => (
//                 <span key={cat} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
//                   {cat}
//                 </span>
//               ))}
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Content */}
//       <div 
//         className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-lg"
//         dangerouslySetInnerHTML={{ __html: contentHtml }} 
//       />
//     </article>
//   );
// }
////////////real real code /////////
// import { getPostBySlug, getAllPosts } from '@/lib/posts';
// import { remark } from 'remark';
// import html from 'remark-html';
// import { notFound } from 'next/navigation';
// import Link from 'next/link';
// import Header from '@/components/Header';

// export async function generateStaticParams() {
//   const posts = getAllPosts();
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const post = getPostBySlug(params.slug);
  
//   if (!post) {
//     return {
//       title: 'Post Not Found',
//     };
//   }

//   return {
//     title: `${post.title} - Visble AI Blog`,
//     description: post.excerpt || post.title,
//     openGraph: {
//       title: post.title,
//       description: post.excerpt || post.title,
//       type: 'article',
//       publishedTime: post.date,
//       images: post.coverImage ? [`/images/blog/${post.coverImage}`] : [],
//     },
//   };
// }

// export default async function BlogPost({ params }: { params: { slug: string } }) {
//   const post = getPostBySlug(params.slug);

//   if (!post) {
//     notFound();
//   }

//   const processedContent = await remark()
//     .use(html)
//     .process(post.content);
//   const contentHtml = processedContent.toString();

//   const contentNoTitle = contentHtml.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/i, '');

//  function addOrAppendClass(imgTag: string, className: string) {
//    if (/class\s*=/.test(imgTag)) {
//      return imgTag.replace(/class\s*=\s*"([^"]*)"/, (_m, existing) => `class="${existing} ${className}"`);
//    }
//    return imgTag.replace('<img', `<img class="${className}"`);
//  }

//  // Target specific image filename and give it a short height
//  const contentWithSizedImages = contentNoTitle.replace(/<img[^>]*src="([^"]+)"[^>]*>/g, (imgTag, src) => {
//    if (src.includes('IMG_5768-e1751266201560.webp')) {
//      // make this image short (constrain height), center it, keep aspect/crop via object-cover
//      return addOrAppendClass(imgTag, 'w-14 h-14 rounded-full object-cover');
//    }
//    // default sizing for other images
//    return addOrAppendClass(imgTag, 'mx-auto w-full max-w-[900px] object-contain');
//  });

//   return (  
//     <div className="min-h-screen bg-white">
//         <Header/>
//       {/* Back Button */}
//       <div className="bg-gray-50 border-b">
//         <div className="max-w-4xl mx-auto px-4 py-4">
//           <Link 
//             href="/blogs" 
//             className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
//           >
//             <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//             Back to Blog
//           </Link>
//         </div>
//       </div>

//       <article className="max-w-4xl mx-auto px-4 py-12">
//         {/* Header */}
//         <header className="mb-12">
//           {/* Categories */}
//           {post.categories && post.categories.length > 0 && (
//             <div className="flex gap-2 mb-6">
//               {post.categories.map((cat) => (
//                 <Link
//                   key={cat}
//                   href={`/blog/category/${cat.toLowerCase()}`}
//                   className="text-sm font-semibold text-purple-600 bg-purple-50 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors"
//                 >
//                   {cat}
//                 </Link>
//               ))}
//             </div>
//           )}

//           {/* Title */}
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//             {post.title}
//           </h1>

//           {/* Meta */}
//           <div className="flex items-center gap-4 text-gray-600 pb-8 border-b">
//             <time dateTime={post.date} className="text-sm">
//               {new Date(post.date).toLocaleDateString('en-US', {
//                 year: 'numeric',
//                 month: 'long',
//                 day: 'numeric',
//               })}
//             </time>
//             <span className="text-gray-400">•</span>
//             <span className="text-sm">
//               {Math.ceil(post.content.split(' ').length / 200)} min read
//             </span>
//           </div>
//         </header>

//         {/* Cover Image */}
//         {/* {post.coverImage && (
//           <div className="mb-12 -mx-4 md:mx-0">
//             <img
//               src={`/images/blog/${post.coverImage}`}
//               alt={post.title}
//               className="w-full h-auto rounded-lg shadow-lg"
//             />
//           </div>
//         )} */}

//         {/* Content */}
//         <div 
//           className="prose prose-lg prose-purple max-w-none
//             prose-headings:font-bold prose-headings:text-gray-900
//             prose-p:text-gray-700 prose-p:leading-relaxed
//             prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline
//             prose-strong:text-gray-900 prose-strong:font-semibold
//             prose-ul:text-gray-700 prose-ol:text-gray-700
//             prose-blockquote:border-l-purple-500 prose-blockquote:bg-purple-50 prose-blockquote:py-1
//             prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
//             prose-pre:bg-gray-900 prose-pre:text-gray-100
//             prose-img:rounded-lg prose-img:shadow-md"
//         //   dangerouslySetInnerHTML={{ __html: contentHtml }} 
//         dangerouslySetInnerHTML={{ __html: contentWithSizedImages  }} 
//         />

//         {/* Footer CTA */}
//         <div className="mt-16 pt-8 border-t">
//           <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 text-center">
//             <h3 className="text-2xl font-bold text-gray-900 mb-3">
//               Ready to boost your AI visibility?
//             </h3>
//             <p className="text-gray-600 mb-6">
//               Get your website optimized for AI search engines like ChatGPT, Perplexity, and Gemini.
//             </p>
//             <Link 
//               href="/"
//               className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
//             >
//               Try Visble.ai
//             </Link>
//           </div>
//         </div>
//       </article>
//     </div>
//   );
// }

































// import { getPostBySlug, getAllPosts } from '@/lib/posts';
// import { remark } from 'remark';
// import remarkGfm from 'remark-gfm';
// import html from 'remark-html';
// import { notFound } from 'next/navigation';
// import Link from 'next/link';
// import Header from '@/components/Header';

// export async function generateStaticParams() {
//   const posts = getAllPosts();
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const post = getPostBySlug(params.slug);
  
//   if (!post) {
//     return {
//       title: 'Post Not Found',
//     };
//   }

//   const description = post.excerpt || post.content
//     .replace(/<[^>]*>/g, '')
//     .replace(/[#*`]/g, '')
//     .substring(0, 160)
//     .trim();

//   const baseUrl = 'https://visble.ai';

//   return {
//     title: `${post.title} | Visble.ai Blog`,
//     description: description,
//     keywords: post.categories?.join(', '),
    
//     openGraph: {
//       title: post.title,
//       description: description,
//       url: `${baseUrl}/blog/${params.slug}`,
//       siteName: 'Visble.ai',
//       images: post.coverImage 
//         ? [{
//             url: `${baseUrl}/images/blog/${post.coverImage}`,
//             width: 1200,
//             height: 630,
//             alt: post.title,
//           }]
//         : [],
//       type: 'article',
//       publishedTime: new Date(post.date).toISOString(),
//     },

//     twitter: {
//       card: 'summary_large_image',
//       title: post.title,
//       description: description,
//       images: post.coverImage 
//         ? [`${baseUrl}/images/blog/${post.coverImage}`]
//         : [],
//     },

//     alternates: {
//       canonical: `${baseUrl}/blog/${params.slug}`,
//     },

//     robots: {
//       index: true,
//       follow: true,
//     },
//   };
// }

// // Extract headings for Table of Contents
// function extractHeadings(content: string) {
//   const headingRegex = /^(#{2,3})\s+(.+)$/gm;
//   const headings: { level: number; text: string; id: string }[] = [];
//   let match;

//   while ((match = headingRegex.exec(content)) !== null) {
//     const level = match[1].length;
//     const text = match[2]
//       .trim()
//       .replace(/\*\*/g, '')
//       .replace(/\\/g, '')
//       .replace(/\*/g, '')
//       .replace(/`/g, '')
//       .trim();
    
//     const id = text
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, '-')
//       .replace(/(^-|-$)/g, '');
    
//     headings.push({ level, text, id });
//   }

//   return headings;
// }

// // Add IDs to headings for anchor links
// function addHeadingIds(html: string, headings: { level: number; text: string; id: string }[]) {
//   let result = html;
  
//   headings.forEach(({ text, id }) => {
//     const escapedText = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//     const regex = new RegExp(`<h[23]>\\s*${escapedText}\\s*</h[23]>`, 'i');
//     result = result.replace(regex, (match) => {
//       return match.replace(/^<h([23])>/, `<h$1 id="${id}">`);
//     });
//   });
  
//   return result;
// }

// export default async function BlogPost({ params }: { params: { slug: string } }) {
//   const post = getPostBySlug(params.slug);

//   if (!post) {
//     notFound();
//   }

//   // Extract headings before processing
//   const headings = extractHeadings(post.content);

//   // Process markdown with GitHub Flavored Markdown support
//   const processedContent = await remark()
//     .use(remarkGfm)
//     .use(html, { sanitize: false })
//     .process(post.content);
    
//   let contentHtml = processedContent.toString();

//   // Remove duplicate title (h1)
//   const contentNoTitle = contentHtml.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/i, '');

//   // Add IDs to headings for TOC
//   let contentWithIds = addHeadingIds(contentNoTitle, headings);

//   // Helper function to add/append classes
//   function addOrAppendClass(tag: string, className: string) {
//     if (/class\s*=/.test(tag)) {
//       return tag.replace(/class\s*=\s*"([^"]*)"/, (_m, existing) => `class="${existing} ${className}"`);
//     }
//     return tag.replace(/<(img|table|a)/, `<$1 class="${className}"`);
//   }

//   // ===== IMPROVED AUTHOR SECTION HANDLING =====
// // First, handle the author section BEFORE general image styling
// // This handles multiple variations of author markup

// // First, remove any existing classes from the author image to start clean
// contentWithIds = contentWithIds.replace(
//   /<img([^>]*IMG_5768[^>]*)class="[^"]*"([^>]*)>/gi,
//   '<img$1$2>'
// );

// contentWithIds = contentWithIds
//   // Pattern 1: Image and text in separate paragraphs
//   .replace(
//     /<p[^>]*>\s*<img[^>]*src="([^"]*IMG_5768[^"]*)"[^>]*>\s*<\/p>\s*<p[^>]*>\s*Isha\s+Sachdeva\s*<br\s*\/?>\s*Founder,\s*visble\.ai\s*<\/p>/gi,
//     '<div class="flex items-center gap-3 my-6 not-prose"><img src="$1" alt="Isha Sachdeva" class="w-12 h-12 rounded-full object-cover flex-shrink-0" /><div><div class="font-semibold text-gray-900 text-base">Isha Sachdeva</div><div class="text-sm text-gray-600">Founder, visble.ai</div></div></div>'
//   )
//   // Pattern 2: Image in paragraph, then two separate paragraphs for name and title
//   .replace(
//     /<p[^>]*>\s*<img[^>]*src="([^"]*IMG_5768[^"]*)"[^>]*>\s*<\/p>\s*<p[^>]*>\s*Isha\s+Sachdeva\s*<\/p>\s*<p[^>]*>\s*Founder,\s*visble\.ai\s*<\/p>/gi,
//     '<div class="flex items-center gap-3 my-6 not-prose"><img src="$1" alt="Isha Sachdeva" class="w-12 h-12 rounded-full object-cover flex-shrink-0" /><div><div class="font-semibold text-gray-900 text-base">Isha Sachdeva</div><div class="text-sm text-gray-600">Founder, visble.ai</div></div></div>'
//   )
//   // Pattern 3: All in one paragraph
//   .replace(
//     /<p[^>]*>\s*<img[^>]*src="([^"]*IMG_5768[^"]*)"[^>]*>\s*Isha\s+Sachdeva\s*<br\s*\/?>\s*Founder,\s*visble\.ai\s*<\/p>/gi,
//     '<div class="flex items-center gap-3 my-6 not-prose"><img src="$1" alt="Isha Sachdeva" class="w-12 h-12 rounded-full object-cover flex-shrink-0" /><div><div class="font-semibold text-gray-900 text-base">Isha Sachdeva</div><div class="text-sm text-gray-600">Founder, visble.ai</div></div></div>'
//   )
//   // Pattern 4: Just image in paragraph (standalone)
//   .replace(
//     /<p[^>]*>\s*<img[^>]*src="([^"]*IMG_5768[^"]*)"[^>]*>\s*<\/p>/gi,
//     '<div class="flex items-center gap-3 my-6 not-prose"><img src="$1" alt="Isha Sachdeva" class="w-12 h-12 rounded-full object-cover flex-shrink-0" /></div>'
//   );

// // Style remaining images (but skip if already processed in author section)
// contentWithIds = contentWithIds.replace(/<img[^>]*src="([^"]+)"[^>]*>/g, (imgTag, src) => {
//   // Skip if this image is already part of a flex container (author section)
//   if (imgTag.includes('flex-shrink-0') || imgTag.includes('not-prose')) {
//     return imgTag;
//   }
  
//   // Skip styling the author image if it wasn't caught by the author section regex
//   if (src.includes('IMG_5768')) {
//     return imgTag; // Return as-is, should not happen if patterns above work
//   }
  
//   // Style all other images as full-width centered images
//   return addOrAppendClass(imgTag, 'mx-auto w-full max-w-4xl rounded-lg shadow-md my-8 block');
// });



//   // Style tables
//   contentWithIds = contentWithIds.replace(/<table[^>]*>/g, () => {
//     return `<div class="overflow-x-auto my-8"><table class="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-lg">`;
//   });
//   contentWithIds = contentWithIds.replace(/<\/table>/g, '</table></div>');
//   contentWithIds = contentWithIds.replace(/<thead>/g, '<thead class="bg-gray-50">');
//   contentWithIds = contentWithIds.replace(/<th[^>]*>/g, '<th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">');
//   contentWithIds = contentWithIds.replace(/<tbody>/g, '<tbody class="bg-white divide-y divide-gray-200">');
//   contentWithIds = contentWithIds.replace(/<td[^>]*>/g, '<td class="px-6 py-4 text-sm text-gray-700 border-b">');
//   contentWithIds = contentWithIds.replace(/<tr[^>]*>/g, '<tr class="hover:bg-gray-50 transition-colors">');

//   // Enhance links with external icon
//   contentWithIds = contentWithIds.replace(/<a\s+href="([^"]+)"[^>]*>([^<]+)<\/a>/g, (match, href, text) => {
//     const isExternal = href.startsWith('http') && !href.includes('visble.ai');
//     const externalIcon = isExternal 
//       ? '<svg class="inline-block w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>'
//       : '';
    
//     return `<a href="${href}" class="text-purple-600 hover:text-purple-700 font-medium underline decoration-2 underline-offset-2 transition-colors" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''}>${text}${externalIcon}</a>`;
//   });

//   // JSON-LD structured data
//   const jsonLd = {
//     '@context': 'https://schema.org',
//     '@type': 'BlogPosting',
//     headline: post.title,
//     description: post.excerpt || post.content.substring(0, 160),
//     image: post.coverImage 
//       ? `https://visble.ai/images/blog/${post.coverImage}`
//       : 'https://visble.ai/visble_logo.png',
//     datePublished: new Date(post.date).toISOString(),
//     dateModified: new Date(post.date).toISOString(),
//     author: {
//       '@type': 'Person',
//       name: 'Isha Sachdeva',
//       url: 'https://visble.ai',
//     },
//     publisher: {
//       '@type': 'Organization',
//       name: 'Visble.ai',
//       logo: {
//         '@type': 'ImageObject',
//         url: 'https://visble.ai/visble_logo.png',
//       },
//     },
//     mainEntityOfPage: {
//       '@type': 'WebPage',
//       '@id': `https://visble.ai/blog/${params.slug}`,
//     },
//   };

//   return (
//     <>
//       {/* JSON-LD Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//       />
      
//       <div className="min-h-screen bg-white pt-16">
//         <Header/>
//         {/* Back Button */}
//         <div className="bg-gray-50 border-b">
//           <div className="max-w-7xl mx-auto px-4 py-4">
//             <Link 
//               href="/blogs" 
//               className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
//             >
//               <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//               Back to Blog
//             </Link>
//           </div>
//         </div>

//         {/* Main Content Area with Sidebar */}
//         <div className="max-w-7xl mx-auto px-4 py-12">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
//             {/* Main Article - 8 columns */}
//             <article className="lg:col-span-8">
//               {/* Header */}
//               <header className="mb-12">
//                 {/* Categories */}
//                 {post.categories && post.categories.length > 0 && (
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {post.categories.map((cat) => (
//                       <Link
//                         key={cat}
//                         href={`/blog/category/${cat.toLowerCase()}`}
//                         className="text-sm font-semibold text-purple-600 bg-purple-50 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors"
//                       >
//                         {cat}
//                       </Link>
//                     ))}
//                   </div>
//                 )}

//                 {/* Title */}
//                 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
//                   {post.title}
//                 </h1>

//                 {/* Meta */}
//                 <div className="flex items-center gap-4 text-gray-600 pb-8 border-b">
//                   <time dateTime={post.date} className="text-sm font-medium">
//                     {new Date(post.date).toLocaleDateString('en-US', {
//                       year: 'numeric',
//                       month: 'long',
//                       day: 'numeric',
//                     })}
//                   </time>
//                   <span className="text-gray-400">•</span>
//                   <span className="text-sm">
//                     {Math.ceil(post.content.split(' ').length / 200)} min read
//                   </span>
//                 </div>
//               </header>

//               {/* Content with Enhanced Styling */}
//               <div 
//                 className="prose prose-lg max-w-none
//                   prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mt-12 prose-headings:mb-4
//                   prose-h2:text-3xl prose-h2:mt-16 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-200 prose-h2:scroll-mt-24
//                   prose-h3:text-2xl prose-h3:mt-10 prose-h3:scroll-mt-24
//                   prose-h4:text-xl prose-h4:mt-8 prose-h4:text-gray-800
//                   prose-h5:text-lg prose-h5:mt-6 prose-h5:text-gray-700
//                   prose-h6:text-base prose-h6:mt-6 prose-h6:font-semibold prose-h6:text-gray-600
//                   prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
//                   prose-strong:text-gray-900 prose-strong:font-semibold
//                   prose-em:text-gray-700 prose-em:italic
//                   prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
//                   prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
//                   prose-li:text-gray-700 prose-li:leading-relaxed
//                   prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:bg-purple-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic prose-blockquote:my-8 prose-blockquote:rounded-r
//                   prose-code:text-purple-700 prose-code:bg-purple-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
//                   prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-8 prose-pre:shadow-lg
//                   prose-hr:my-12 prose-hr:border-gray-200
//                   prose-img:block prose-img:mx-auto prose-img:my-4"
//                 dangerouslySetInnerHTML={{ __html: contentWithIds }} 
//               />

//               {/* Footer CTA */}
//               <div className="mt-16 pt-8 border-t border-gray-200">
//                 <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 rounded-2xl p-8 text-center shadow-sm border border-purple-100">
//                   <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//                     Ready to boost your AI visibility?
//                   </h3>
//                   <p className="text-gray-600 mb-6 text-lg">
//                     Get your website optimized for AI search engines like ChatGPT, Perplexity, and Gemini.
//                   </p>
//                   <div className="flex gap-4 justify-center flex-wrap">
//                     <a 
//                       href="https://app.visble.ai/signup"
//                       className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-md hover:shadow-lg"
//                     >
//                       Get Started Free
//                     </a>
//                     <a 
//                       href="https://app.visble.ai/login"
//                       className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all"
//                     >
//                       Log In
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </article>

//             {/* Table of Contents Sidebar - 4 columns */}
//             {headings.length > 0 && (
//               <aside className="hidden lg:block lg:col-span-4">
//                 <div className="sticky top-24">
//                   <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
//                     <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
//                       <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
//                       </svg>
//                       Table of Contents
//                     </h3>
//                     <nav className="space-y-2">
//                       {headings.map((heading, index) => (
//                         <a
//                           key={index}
//                           href={`#${heading.id}`}
//                           className={`block text-sm hover:text-purple-600 transition-colors py-1 ${
//                             heading.level === 2 
//                               ? 'font-semibold text-gray-900 hover:translate-x-1' 
//                               : 'ml-4 text-gray-600 hover:translate-x-1'
//                           } transition-transform`}
//                         >
//                           {heading.text}
//                         </a>
//                       ))}
//                     </nav>
//                   </div>
                  
//                   {/* Share Section */}
//                   <div className="mt-6 bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100 shadow-sm">
//                     <h4 className="text-sm font-bold text-gray-900 mb-3">Share this article</h4>
//                     <div className="flex gap-2">
//                       <a 
//                         href={`https://twitter.com/intent/tweet?url=https://visble.ai/blog/${params.slug}&text=${encodeURIComponent(post.title)}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex-1 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors text-center text-sm font-medium"
//                       >
//                         Twitter
//                       </a>
//                       <a 
//                         href={`https://www.linkedin.com/sharing/share-offsite/?url=https://visble.ai/blog/${params.slug}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex-1 bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800 transition-colors text-center text-sm font-medium"
//                       >
//                         LinkedIn
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </aside>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



////////////////////////////////////////////////////////////////this is the final one //////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////down there
// import { getPostBySlug, getAllPosts } from '@/lib/posts';
// import { remark } from 'remark';
// import remarkGfm from 'remark-gfm';
// import html from 'remark-html';
// import { notFound } from 'next/navigation';
// import Link from 'next/link';
// import Header from '@/components/Header';

// export async function generateStaticParams() {
//   const posts = getAllPosts();
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const post = getPostBySlug(params.slug);
  
//   if (!post) {
//     return {
//       title: 'Post Not Found',
//     };
//   }

//   const description = post.excerpt || post.content
//     .replace(/<[^>]*>/g, '')
//     .replace(/[#*`]/g, '')
//     .substring(0, 160)
//     .trim();

//   const baseUrl = 'https://visble.ai';

//   return {
//     title: `${post.title} | Visble.ai Blog`,
//     description: description,
//     keywords: post.categories?.join(', '),
    
//     openGraph: {
//       title: post.title,
//       description: description,
//       url: `${baseUrl}/blog/${params.slug}`,
//       siteName: 'Visble.ai',
//       images: post.coverImage 
//         ? [{
//             url: `${baseUrl}/images/blog/${post.coverImage}`,
//             width: 1200,
//             height: 630,
//             alt: post.title,
//           }]
//         : [],
//       type: 'article',
//       publishedTime: new Date(post.date).toISOString(),
//     },

//     twitter: {
//       card: 'summary_large_image',
//       title: post.title,
//       description: description,
//       images: post.coverImage 
//         ? [`${baseUrl}/images/blog/${post.coverImage}`]
//         : [],
//     },

//     alternates: {
//       canonical: `${baseUrl}/blog/${params.slug}`,
//     },

//     robots: {
//       index: true,
//       follow: true,
//     },
//   };
// }

// // Extract headings for Table of Contents - KEEP LEVEL INFO
// function extractHeadings(content: string) {
//   const headingRegex = /^(#{2,6})\s+(.+)$/gm;
//   const headings: { level: number; text: string; id: string }[] = [];
//   let match;

//   while ((match = headingRegex.exec(content)) !== null) {
//     const level = match[1].length;
//     const text = match[2]
//       .trim()
//       .replace(/\*\*/g, '')
//       .replace(/\\/g, '')
//       .replace(/\*/g, '')
//       .replace(/`/g, '')
//       .trim();
    
//     const id = text
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, '-')
//       .replace(/(^-|-$)/g, '');
    
//     headings.push({ level, text, id });
//   }

//   return headings;
// }

// // Add IDs and INLINE STYLES to headings
// function addHeadingIdsAndStyles(html: string, headings: { level: number; text: string; id: string }[]) {
//   let result = html;
  
//   headings.forEach(({ level, text, id }) => {
//     const escapedText = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
//     if (level === 2) {
//       // H2 - BIG and BOLD
//       const h2Regex = new RegExp(`<h2>\\s*${escapedText}\\s*</h2>`, 'gi');
//       result = result.replace(h2Regex, 
//         `<h2 id="${id}" style="font-size: 2.5rem; font-weight: 700; margin-top: 3rem; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 3px solid #e5e7eb; line-height: 1.2; color: #111827;">${text}</h2>`
//       );
//     } else if (level === 3) {
//       // H3 - Slightly smaller
//       const h3Regex = new RegExp(`<h3>\\s*${escapedText}\\s*</h3>`, 'gi');
//       result = result.replace(h3Regex, 
//         `<h3 id="${id}" style="font-size: 2rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; line-height: 1.3; color: #111827;">${text}</h3>`
//       );
//     }
//   });
  
//   return result;
// }

// export default async function BlogPost({ params }: { params: { slug: string } }) {
//   const post = getPostBySlug(params.slug);

//   if (!post) {
//     notFound();
//   }

//   // Clean the content before processing
//   let cleanedContent = post.content;

//   // Remove the duplicate H1 title at the beginning
//   cleanedContent = cleanedContent.replace(/^#\s+.+$/m, '');

//   // Remove ALL images from content (we'll display cover image separately)
//   cleanedContent = cleanedContent.replace(/!\[.*?\]\([^)]+\)/g, '');

//   // Remove author section completely (H6 + name + title)
//   cleanedContent = cleanedContent.replace(/#{6}\s*Isha Sachdeva\s*Founder,\s*visble\.ai/gi, '');

//   // Extract headings before processing (WITH LEVEL INFO)
//   const headings = extractHeadings(cleanedContent);

//   // Process markdown with GitHub Flavored Markdown support
//   const processedContent = await remark()
//     .use(remarkGfm)
//     .use(html, { sanitize: false })
//     .process(cleanedContent);
    
//   let contentHtml = processedContent.toString();

//   // Add IDs AND INLINE STYLES to headings
//   let contentWithIds = addHeadingIdsAndStyles(contentHtml, headings);

//   // Style tables
//   contentWithIds = contentWithIds.replace(/<table[^>]*>/g, () => {
//     return `<div class="overflow-x-auto my-8"><table class="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-lg">`;
//   });
//   contentWithIds = contentWithIds.replace(/<\/table>/g, '</table></div>');
//   contentWithIds = contentWithIds.replace(/<thead>/g, '<thead class="bg-gray-50">');
//   contentWithIds = contentWithIds.replace(/<th[^>]*>/g, '<th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">');
//   contentWithIds = contentWithIds.replace(/<tbody>/g, '<tbody class="bg-white divide-y divide-gray-200">');
//   contentWithIds = contentWithIds.replace(/<td[^>]*>/g, '<td class="px-6 py-4 text-sm text-gray-700 border-b">');
//   contentWithIds = contentWithIds.replace(/<tr[^>]*>/g, '<tr class="hover:bg-gray-50 transition-colors">');

//   // Enhance links with external icon
//   contentWithIds = contentWithIds.replace(/<a\s+href="([^"]+)"[^>]*>([^<]+)<\/a>/g, (match, href, text) => {
//     const isExternal = href.startsWith('http') && !href.includes('visble.ai');
//     const externalIcon = isExternal 
//       ? '<svg class="inline-block w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>'
//       : '';
    
//     return `<a href="${href}" class="text-purple-600 hover:text-purple-700 font-medium underline decoration-2 underline-offset-2 transition-colors" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''}>${text}${externalIcon}</a>`;
//   });

//   // JSON-LD structured data
//   const jsonLd = {
//     '@context': 'https://schema.org',
//     '@type': 'BlogPosting',
//     headline: post.title,
//     description: post.excerpt || post.content.substring(0, 160),
//     image: post.coverImage 
//       ? `https://visble.ai/images/blog/${post.coverImage}`
//       : 'https://visble.ai/visble_logo.png',
//     datePublished: new Date(post.date).toISOString(),
//     dateModified: new Date(post.date).toISOString(),
//     author: {
//       '@type': 'Person',
//       name: 'Isha Sachdeva',
//       jobTitle: 'Founder',
//       worksFor: {
//         '@type': 'Organization',
//         name: 'Visble.ai',
//       },
//     },
//     publisher: {
//       '@type': 'Organization',
//       name: 'Visble.ai',
//       logo: {
//         '@type': 'ImageObject',
//         url: 'https://visble.ai/visble_logo.png',
//       },
//     },
//     mainEntityOfPage: {
//       '@type': 'WebPage',
//       '@id': `https://visble.ai/blog/${params.slug}`,
//     },
//   };

//   // Breadcrumb Schema
//   const breadcrumbSchema = {
//     '@context': 'https://schema.org',
//     '@type': 'BreadcrumbList',
//     itemListElement: [
//       {
//         '@type': 'ListItem',
//         position: 1,
//         name: 'Home',
//         item: 'https://visble.ai',
//       },
//       {
//         '@type': 'ListItem',
//         position: 2,
//         name: 'Blog',
//         item: 'https://visble.ai/blogs',
//       },
//       {
//         '@type': 'ListItem',
//         position: 3,
//         name: post.title,
//         item: `https://visble.ai/blog/${params.slug}`,
//       },
//     ],
//   };

//   return (
//     <>
//       {/* JSON-LD Schemas */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
//       />
      
//       <div className="min-h-screen bg-white pt-16">
//         <Header/>
        
//         {/* Back Button */}
//         <div className="bg-gray-50 border-b">
//           <div className="max-w-7xl mx-auto px-4 py-4">
//             <Link 
//               href="/blogs" 
//               className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
//             >
//               <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//               Back to Blog
//             </Link>
//           </div>
//         </div>

//         {/* Main Content Area with Sidebar */}
//         <div className="max-w-7xl mx-auto px-4 py-12">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
//             {/* Main Article - 8 columns */}
//             <article className="lg:col-span-8">
//               {/* Header */}
//               <header className="mb-12">
//                 {/* Categories */}
//                 {post.categories && post.categories.length > 0 && (
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {post.categories.map((cat) => (
//                       <Link
//                         key={cat}
//                         href={`/blog/category/${cat.toLowerCase()}`}
//                         className="text-sm font-semibold text-purple-600 bg-purple-50 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors"
//                       >
//                         {cat}
//                       </Link>
//                     ))}
//                   </div>
//                 )}

//                 {/* Title */}
//                 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
//                   {post.title}
//                 </h1>

//                 {/* Author Info */}
//                 <div className="flex items-center gap-4 mb-8 pb-8 border-b">
//                   <img 
//                     src="/images/blog/IMG_5768-e1751266201560.webp" 
//                     alt="Isha Sachdeva" 
//                     className="w-14 h-14 rounded-full object-cover"
//                   />
//                   <div className="flex-1">
//                     <div className="font-semibold text-gray-900">Isha Sachdeva</div>
//                     <div className="text-sm text-gray-600">Founder, visble.ai</div>
//                   </div>
//                   <div className="flex items-center gap-4 text-gray-600 text-sm">
//                     <time dateTime={post.date}>
//                       {new Date(post.date).toLocaleDateString('en-US', {
//                         year: 'numeric',
//                         month: 'long',
//                         day: 'numeric',
//                       })}
//                     </time>
//                     <span className="text-gray-400">•</span>
//                     <span>
//                       {Math.ceil(post.content.split(' ').length / 200)} min read
//                     </span>
//                   </div>
//                 </div>
//               </header>

//               {/* Cover Image */}
//               {post.coverImage && (
//                 <div className="mb-12">
//                   <img
//                     src={`/images/blog/${post.coverImage}`}
//                     alt={post.title}
//                     className="w-full h-auto rounded-lg shadow-lg"
//                   />
//                 </div>
//               )}

//               {/* Content - Headings now have INLINE STYLES for bigger size */}
//               <div 
//                 className="prose prose-lg max-w-none
//                   prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
//                   prose-strong:text-gray-900 prose-strong:font-semibold
//                   prose-em:text-gray-700 prose-em:italic
//                   prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
//                   prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
//                   prose-li:text-gray-700 prose-li:leading-relaxed
//                   prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:bg-purple-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic prose-blockquote:my-8 prose-blockquote:rounded-r
//                   prose-code:text-purple-700 prose-code:bg-purple-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
//                   prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-8 prose-pre:shadow-lg
//                   prose-hr:my-12 prose-hr:border-gray-200"
//                 dangerouslySetInnerHTML={{ __html: contentWithIds }} 
//               />

//               {/* Footer CTA */}
//               <div className="mt-16 pt-8 border-t border-gray-200">
//                 <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 rounded-2xl p-8 text-center shadow-sm border border-purple-100">
//                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//                     Ready to boost your AI visibility?
//                   </h2>
//                   <p className="text-gray-600 mb-6 text-lg">
//                     Get your website optimized for AI search engines like ChatGPT, Perplexity, and Gemini.
//                   </p>
//                   <div className="flex gap-4 justify-center flex-wrap">
//                     <a 
//                       href="https://app.visble.ai/signup"
//                       className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-md hover:shadow-lg"
//                     >
//                       Get Started Free
//                     </a>
//                     <a 
//                       href="https://app.visble.ai/login"
//                       className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all"
//                     >
//                       Log In
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </article>

//             {/* Table of Contents Sidebar - WITH LEVEL-BASED STYLING */}
//             {headings.length > 0 && (
//               <aside className="hidden lg:block lg:col-span-4">
//                 <div className="sticky top-24">
//                   <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
//                     <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
//                       <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
//                       </svg>
//                       Table of Contents
//                     </h2>
//                     <nav className="space-y-2">
//                       {headings.map((heading, index) => (
//                         <a
//                           key={index}
//                           href={`#${heading.id}`}
//                           className={`block text-sm hover:text-purple-600 transition-all py-1 ${
//                             heading.level === 2 
//                               ? 'font-bold text-gray-900 hover:translate-x-1' 
//                               : 'ml-4 text-gray-600 font-medium hover:translate-x-1'
//                           } transition-transform`}
//                         >
//                           {heading.text}
//                         </a>
//                       ))}
//                     </nav>
//                   </div>
                  
//                   {/* Share Section */}
//                   <div className="mt-6 bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100 shadow-sm">
//                     <h3 className="text-sm font-bold text-gray-900 mb-3">Share this article</h3>
//                     <div className="flex gap-2">
//                       <a 
//                         href={`https://twitter.com/intent/tweet?url=https://visble.ai/blog/${params.slug}&text=${encodeURIComponent(post.title)}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex-1 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors text-center text-sm font-medium"
//                         aria-label="Share on Twitter"
//                       >
//                         Twitter
//                       </a>
//                       <a 
//                         href={`https://www.linkedin.com/sharing/share-offsite/?url=https://visble.ai/blog/${params.slug}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex-1 bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800 transition-colors text-center text-sm font-medium"
//                         aria-label="Share on LinkedIn"
//                       >
//                         LinkedIn
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </aside>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


///////////////////////////////////////////////////////////////////////////////this is it ////////////////////////////////////////////////////////////////////////////////
// import { getPostBySlug, getAllPosts } from '@/lib/posts';
// import { remark } from 'remark';
// import remarkGfm from 'remark-gfm';
// import html from 'remark-html';
// import { notFound } from 'next/navigation';
// import Link from 'next/link';
// import Header from '@/components/Header';

// export async function generateStaticParams() {
//   const posts = getAllPosts();
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const post = getPostBySlug(params.slug);
  
//   if (!post) {
//     return {
//       title: 'Post Not Found',
//     };
//   }

//   const description = post.excerpt || post.content
//     .replace(/<[^>]*>/g, '')
//     .replace(/[#*`]/g, '')
//     .substring(0, 160)
//     .trim();

//   const baseUrl = 'https://visble.ai';

//   return {
//     title: `${post.title} | Visble.ai Blog`,
//     description: description,
//     keywords: post.categories?.join(', '),
    
//     openGraph: {
//       title: post.title,
//       description: description,
//       url: `${baseUrl}/blog/${params.slug}`,
//       siteName: 'Visble.ai',
//       images: post.coverImage 
//         ? [{
//             url: `${baseUrl}/images/blog/${post.coverImage}`,
//             width: 1200,
//             height: 630,
//             alt: post.title,
//           }]
//         : [],
//       type: 'article',
//       publishedTime: new Date(post.date).toISOString(),
//     },

//     twitter: {
//       card: 'summary_large_image',
//       title: post.title,
//       description: description,
//       images: post.coverImage 
//         ? [`${baseUrl}/images/blog/${post.coverImage}`]
//         : [],
//     },

//     alternates: {
//       canonical: `${baseUrl}/blog/${params.slug}`,
//     },

//     robots: {
//       index: true,
//       follow: true,
//     },
//   };
// }

// // Extract headings for Table of Contents (using H2 and H3)
// function extractHeadings(content: string) {
//   const headingRegex = /^(#{2,3})\s+(.+)$/gm;
//   const headings: { level: number; text: string; id: string }[] = [];
//   let match;

//   while ((match = headingRegex.exec(content)) !== null) {
//     const level = match[1].length;
//     const text = match[2]
//       .trim()
//       .replace(/\*\*/g, '')
//       .replace(/\\/g, '')
//       .replace(/\*/g, '')
//       .replace(/`/g, '')
//       .trim();
    
//     const id = text
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, '-')
//       .replace(/(^-|-$)/g, '');
    
//     headings.push({ level, text, id });
//   }

//   return headings;
// }

// // Add IDs to headings for anchor links
// function addHeadingIds(html: string, headings: { level: number; text: string; id: string }[]) {
//   let result = html;
  
//   headings.forEach(({ text, id }) => {
//     const escapedText = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//     // Match h2 or h3 tags
//     const regex = new RegExp(`<h([23])>\\s*${escapedText}\\s*</h\\1>`, 'gi');
//     result = result.replace(regex, (match, level) => {
//       return `<h${level} id="${id}">${text}</h${level}>`;
//     });
//   });
  
//   return result;
// }

// export default async function BlogPost({ params }: { params: { slug: string } }) {
//   const post = getPostBySlug(params.slug);

//   if (!post) {
//     notFound();
//   }

//   // Clean the content before processing
//   let cleanedContent = post.content;

//   // Remove the duplicate H1 title at the beginning
//   cleanedContent = cleanedContent.replace(/^#\s+.+$/m, '');

//   // Remove ALL images from content (we'll display cover image separately)
//   cleanedContent = cleanedContent.replace(/!\[.*?\]\([^)]+\)/g, '');

//   // Remove author section completely (H6 + name + title)
//   cleanedContent = cleanedContent.replace(/#{6}\s*Isha Sachdeva\s*Founder,\s*visble\.ai/gi, '');

//   // Extract headings before processing
//   const headings = extractHeadings(cleanedContent);

//   // Process markdown with GitHub Flavored Markdown support
//   const processedContent = await remark()
//     .use(remarkGfm)
//     .use(html, { sanitize: false })
//     .process(cleanedContent);
    
//   let contentHtml = processedContent.toString();

//   // Add IDs to headings for TOC
//   let contentWithIds = addHeadingIds(contentHtml, headings);

//   // Helper function to add/append classes
//   function addOrAppendClass(tag: string, className: string) {
//     if (/class\s*=/.test(tag)) {
//       return tag.replace(/class\s*=\s*"([^"]*)"/, (_m, existing) => `class="${existing} ${className}"`);
//     }
//     return tag.replace(/<(table|a)/, `<$1 class="${className}"`);
//   }

//   // Style tables
//   contentWithIds = contentWithIds.replace(/<table[^>]*>/g, () => {
//     return `<div class="overflow-x-auto my-8"><table class="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-lg">`;
//   });
//   contentWithIds = contentWithIds.replace(/<\/table>/g, '</table></div>');
//   contentWithIds = contentWithIds.replace(/<thead>/g, '<thead class="bg-gray-50">');
//   contentWithIds = contentWithIds.replace(/<th[^>]*>/g, '<th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">');
//   contentWithIds = contentWithIds.replace(/<tbody>/g, '<tbody class="bg-white divide-y divide-gray-200">');
//   contentWithIds = contentWithIds.replace(/<td[^>]*>/g, '<td class="px-6 py-4 text-sm text-gray-700 border-b">');
//   contentWithIds = contentWithIds.replace(/<tr[^>]*>/g, '<tr class="hover:bg-gray-50 transition-colors">');

//   // Enhance links with external icon
//   contentWithIds = contentWithIds.replace(/<a\s+href="([^"]+)"[^>]*>([^<]+)<\/a>/g, (match, href, text) => {
//     const isExternal = href.startsWith('http') && !href.includes('visble.ai');
//     const externalIcon = isExternal 
//       ? '<svg class="inline-block w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>'
//       : '';
    
//     return `<a href="${href}" class="text-purple-600 hover:text-purple-700 font-medium underline decoration-2 underline-offset-2 transition-colors" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''}>${text}${externalIcon}</a>`;
//   });

//   // JSON-LD structured data
//   const jsonLd = {
//     '@context': 'https://schema.org',
//     '@type': 'BlogPosting',
//     headline: post.title,
//     description: post.excerpt || post.content.substring(0, 160),
//     image: post.coverImage 
//       ? `https://visble.ai/images/blog/${post.coverImage}`
//       : 'https://visble.ai/visble_logo.png',
//     datePublished: new Date(post.date).toISOString(),
//     dateModified: new Date(post.date).toISOString(),
//     author: {
//       '@type': 'Person',
//       name: 'Isha Sachdeva',
//       jobTitle: 'Founder',
//       worksFor: {
//         '@type': 'Organization',
//         name: 'Visble.ai',
//       },
//     },
//     publisher: {
//       '@type': 'Organization',
//       name: 'Visble.ai',
//       logo: {
//         '@type': 'ImageObject',
//         url: 'https://visble.ai/visble_logo.png',
//       },
//     },
//     mainEntityOfPage: {
//       '@type': 'WebPage',
//       '@id': `https://visble.ai/blog/${params.slug}`,
//     },
//   };

//   return (
//     <>
//       {/* JSON-LD Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//       />
      
//       <div className="min-h-screen bg-white">
//         <Header/>
        
//         {/* Back Button */}
//         <div className="bg-gray-50 border-b">
//           <div className="max-w-7xl mx-auto px-4 py-4">
//             <Link 
//               href="/blogs" 
//               className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
//             >
//               <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//               Back to Blog
//             </Link>
//           </div>
//         </div>

//         {/* Main Content Area with Sidebar */}
//         <div className="max-w-7xl mx-auto px-4 py-12">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
//             {/* Main Article - 8 columns */}
//             <article className="lg:col-span-8">
//               {/* Header */}
//               <header className="mb-12">
//                 {/* Categories */}
//                 {post.categories && post.categories.length > 0 && (
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {post.categories.map((cat) => (
//                       <Link
//                         key={cat}
//                         href={`/blog/category/${cat.toLowerCase()}`}
//                         className="text-sm font-semibold text-purple-600 bg-purple-50 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors"
//                       >
//                         {cat}
//                       </Link>
//                     ))}
//                   </div>
//                 )}

//                 {/* Title */}
//                 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
//                   {post.title}
//                 </h1>

//                 {/* Author Info */}
//                 <div className="flex items-center gap-4 mb-8 pb-8 border-b">
//                   <img 
//                     src="/images/blog/IMG_5768-e1751266201560.webp" 
//                     alt="Isha Sachdeva" 
//                     className="w-14 h-14 rounded-full object-cover"
//                   />
//                   <div className="flex-1">
//                     <div className="font-semibold text-gray-900">Isha Sachdeva</div>
//                     <div className="text-sm text-gray-600">Founder, visble.ai</div>
//                   </div>
//                   <div className="flex items-center gap-4 text-gray-600 text-sm">
//                     <time dateTime={post.date}>
//                       {new Date(post.date).toLocaleDateString('en-US', {
//                         year: 'numeric',
//                         month: 'long',
//                         day: 'numeric',
//                       })}
//                     </time>
//                     <span className="text-gray-400">•</span>
//                     <span>
//                       {Math.ceil(post.content.split(' ').length / 200)} min read
//                     </span>
//                   </div>
//                 </div>
//               </header>

//               {/* Cover Image */}
//               {post.coverImage && (
//                 <div className="mb-12">
//                   <img
//                     src={`/images/blog/${post.coverImage}`}
//                     alt={post.title}
//                     className="w-full h-auto rounded-lg shadow-lg"
//                   />
//                 </div>
//               )}

//               {/* Content with Enhanced Styling */}
//               <div 
//                 className="prose prose-lg max-w-none
//                   prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mt-12 prose-headings:mb-4
//                   prose-h2:text-3xl prose-h2:mt-16 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-200 prose-h2:scroll-mt-24
//                   prose-h3:text-2xl prose-h3:mt-10 prose-h3:scroll-mt-24
//                   prose-h4:text-xl prose-h4:mt-8 prose-h4:text-gray-800
//                   prose-h5:text-lg prose-h5:mt-6 prose-h5:text-gray-700
//                   prose-h6:text-base prose-h6:mt-6 prose-h6:font-semibold prose-h6:text-gray-600
//                   prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
//                   prose-strong:text-gray-900 prose-strong:font-semibold
//                   prose-em:text-gray-700 prose-em:italic
//                   prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
//                   prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
//                   prose-li:text-gray-700 prose-li:leading-relaxed
//                   prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:bg-purple-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic prose-blockquote:my-8 prose-blockquote:rounded-r
//                   prose-code:text-purple-700 prose-code:bg-purple-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
//                   prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-8 prose-pre:shadow-lg
//                   prose-hr:my-12 prose-hr:border-gray-200"
//                 dangerouslySetInnerHTML={{ __html: contentWithIds }} 
//               />

//               {/* Footer CTA */}
//               <div className="mt-16 pt-8 border-t border-gray-200">
//                 <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 rounded-2xl p-8 text-center shadow-sm border border-purple-100">
//                   <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//                     Ready to boost your AI visibility?
//                   </h3>
//                   <p className="text-gray-600 mb-6 text-lg">
//                     Get your website optimized for AI search engines like ChatGPT, Perplexity, and Gemini.
//                   </p>
//                   <div className="flex gap-4 justify-center flex-wrap">
//                     <a 
//                       href="https://app.visble.ai/signup"
//                       className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-md hover:shadow-lg"
//                     >
//                       Get Started Free
//                     </a>
//                     <a 
//                       href="https://app.visble.ai/login"
//                       className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all"
//                     >
//                       Log In
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </article>

//             {/* Table of Contents Sidebar - 4 columns */}
//             {headings.length > 0 && (
//               <aside className="hidden lg:block lg:col-span-4">
//                 <div className="sticky top-24">
//                   <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
//                     <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
//                       <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
//                       </svg>
//                       Table of Contents
//                     </h3>
//                     <nav className="space-y-2">
//                       {headings.map((heading, index) => (
//                         <a
//                           key={index}
//                           href={`#${heading.id}`}
//                           className={`block text-sm hover:text-purple-600 transition-colors py-1 ${
//                             heading.level === 2 
//                               ? 'font-semibold text-gray-900 hover:translate-x-1' 
//                               : 'ml-4 text-gray-600 hover:translate-x-1'
//                           } transition-transform`}
//                         >
//                           {heading.text}
//                         </a>
//                       ))}
//                     </nav>
//                   </div>
                  
//                   {/* Share Section */}
//                   <div className="mt-6 bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100 shadow-sm">
//                     <h4 className="text-sm font-bold text-gray-900 mb-3">Share this article</h4>
//                     <div className="flex gap-2">
//                       <a 
//                         href={`https://twitter.com/intent/tweet?url=https://visble.ai/blog/${params.slug}&text=${encodeURIComponent(post.title)}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex-1 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors text-center text-sm font-medium"
//                       >
//                         Twitter
//                       </a>
//                       <a 
//                         href={`https://www.linkedin.com/sharing/share-offsite/?url=https://visble.ai/blog/${params.slug}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex-1 bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800 transition-colors text-center text-sm font-medium"
//                       >
//                         LinkedIn
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </aside>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import { getPostBySlug, getAllPosts } from '@/lib/posts';
// import { remark } from 'remark';
// import remarkGfm from 'remark-gfm';
// import html from 'remark-html';
// import { notFound } from 'next/navigation';
// import Link from 'next/link';
// import Header from '@/components/Header';

// export async function generateStaticParams() {
//   const posts = getAllPosts();
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const post = getPostBySlug(params.slug);
  
//   if (!post) {
//     return {
//       title: 'Post Not Found',
//     };
//   }

//   // Enhanced metadata
//   const description = post.excerpt || post.content
//     .replace(/<[^>]*>/g, '')
//     .replace(/[#*`]/g, '')
//     .substring(0, 160)
//     .trim();

//   const baseUrl = 'https://visble.ai';

//   return {
//     title: `${post.title} | Visble.ai Blog`,
//     description: description,
//     keywords: post.categories?.join(', '),
    
//     openGraph: {
//       title: post.title,
//       description: description,
//       url: `${baseUrl}/blog/${params.slug}`,
//       siteName: 'Visble.ai',
//       images: post.coverImage 
//         ? [{
//             url: `${baseUrl}/images/blog/${post.coverImage}`,
//             width: 1200,
//             height: 630,
//             alt: post.title,
//           }]
//         : [],
//       type: 'article',
//       publishedTime: new Date(post.date).toISOString(),
//     },

//     twitter: {
//       card: 'summary_large_image',
//       title: post.title,
//       description: description,
//       images: post.coverImage 
//         ? [`${baseUrl}/images/blog/${post.coverImage}`]
//         : [],
//     },

//     alternates: {
//       canonical: `${baseUrl}/blog/${params.slug}`,
//     },

//     robots: {
//       index: true,
//       follow: true,
//     },
//   };
// }

// // Extract headings for Table of Contents
// function extractHeadings(content: string) {
//   const headingRegex = /^(#{2,3})\s+(.+)$/gm;
//   const headings: { level: number; text: string; id: string }[] = [];
//   let match;

//   while ((match = headingRegex.exec(content)) !== null) {
//     const level = match[1].length;
//     // Clean the text by removing markdown artifacts
//     const text = match[2]
//       .trim()
//       .replace(/\*\*/g, '') // Remove **
//       .replace(/\\/g, '')   // Remove \
//       .replace(/\*/g, '')   // Remove single *
//       .replace(/`/g, '')    // Remove backticks
//       .trim();
    
//     const id = text
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, '-')
//       .replace(/(^-|-$)/g, '');
    
//     headings.push({ level, text, id });
//   }

//   return headings;
// }

// // Add IDs to headings for anchor links
// function addHeadingIds(html: string, headings: { level: number; text: string; id: string }[]) {
//   let result = html;
  
//   headings.forEach(({ text, id }) => {
//     const escapedText = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//     const regex = new RegExp(`<h[23]>\\s*${escapedText}\\s*</h[23]>`, 'i');
//     result = result.replace(regex, (match) => {
//       return match.replace(/^<h([23])>/, `<h$1 id="${id}">`);
//     });
//   });
  
//   return result;
// }

// export default async function BlogPost({ params }: { params: { slug: string } }) {
//   const post = getPostBySlug(params.slug);

//   if (!post) {
//     notFound();
//   }

//   // Extract headings before processing
//   const headings = extractHeadings(post.content);

//   // Process markdown with GitHub Flavored Markdown support
//   const processedContent = await remark()
//     .use(remarkGfm) // Adds support for tables, strikethrough, task lists
//     .use(html, { sanitize: false })
//     .process(post.content);
    
//   let contentHtml = processedContent.toString();

//   // Remove duplicate title (h1)
//   const contentNoTitle = contentHtml.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/i, '');

//   // Add IDs to headings for TOC
//   let contentWithIds = addHeadingIds(contentNoTitle, headings);

//   // Helper function to add/append classes
//   function addOrAppendClass(tag: string, className: string) {
//     if (/class\s*=/.test(tag)) {
//       return tag.replace(/class\s*=\s*"([^"]*)"/, (_m, existing) => `class="${existing} ${className}"`);
//     }
//     return tag.replace(/<(img|table|a)/, `<$1 class="${className}"`);
//   }

//   // Style images
// //   contentWithIds = contentWithIds.replace(
// //     /<img[^>]*src="([^"]+IMG_5768-e1751266201560\.webp)"[^>]*>/g,
// //     (_match, src) => {
// //         return `
// //         <div class="flex items-center gap-3 my-6">
// //             <img 
// //             src="${src}" 
// //             class="w-14 h-14 rounded-full object-cover"
// //             alt="Isha Sachdeva"
// //             />
// //             <div class="leading-tight">
// //             <p class="text-sm font-semibold text-gray-900">Isha Sachdeva</p>
// //             <p class="text-xs text-gray-500">Founder, visble.ai</p>
// //             </div>
// //         </div>
// //         `;
// //     }
// //  );


//   // Style tables (add responsive wrapper and Tailwind classes)
//   contentWithIds = contentWithIds.replace(/<table[^>]*>/g, (tableTag) => {
//     return `<div class="overflow-x-auto my-8"><table class="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-lg">`;
//   });
//   contentWithIds = contentWithIds.replace(/<\/table>/g, '</table></div>');
  
//   // Style table headers
//   contentWithIds = contentWithIds.replace(/<thead>/g, '<thead class="bg-gray-50">');
//   contentWithIds = contentWithIds.replace(/<th[^>]*>/g, '<th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">');
  
//   // Style table body
//   contentWithIds = contentWithIds.replace(/<tbody>/g, '<tbody class="bg-white divide-y divide-gray-200">');
//   contentWithIds = contentWithIds.replace(/<td[^>]*>/g, '<td class="px-6 py-4 text-sm text-gray-700 border-b">');
//   contentWithIds = contentWithIds.replace(/<tr[^>]*>/g, '<tr class="hover:bg-gray-50 transition-colors">');

//   // Enhance links - add external link icon and styling
//   contentWithIds = contentWithIds.replace(/<a\s+href="([^"]+)"[^>]*>([^<]+)<\/a>/g, (match, href, text) => {
//     const isExternal = href.startsWith('http') && !href.includes('visble.ai');
//     const externalIcon = isExternal 
//       ? '<svg class="inline-block w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>'
//       : '';
    
//     return `<a href="${href}" class="text-purple-600 hover:text-purple-700 font-medium underline decoration-2 underline-offset-2 transition-colors" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''}>${text}${externalIcon}</a>`;
//   });

//   // JSON-LD structured data
//   const jsonLd = {
//     '@context': 'https://schema.org',
//     '@type': 'BlogPosting',
//     headline: post.title,
//     description: post.excerpt || post.content.substring(0, 160),
//     image: post.coverImage 
//       ? `https://visble.ai/images/blog/${post.coverImage}`
//       : 'https://visble.ai/visble_logo.png',
//     datePublished: new Date(post.date).toISOString(),
//     dateModified: new Date(post.date).toISOString(),
//     author: {
//       '@type': 'Organization',
//       name: 'Visble.ai',
//       url: 'https://visble.ai',
//     },
//     publisher: {
//       '@type': 'Organization',
//       name: 'Visble.ai',
//       logo: {
//         '@type': 'ImageObject',
//         url: 'https://visble.ai/visble_logo.png',
//       },
//     },
//     mainEntityOfPage: {
//       '@type': 'WebPage',
//       '@id': `https://visble.ai/blog/${params.slug}`,
//     },
//   };

//   return (
//     <>
//       {/* JSON-LD Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//       />
      
//       <div className="min-h-screen bg-white">
//         <Header/>
        
//         {/* Back Button */}
//         <div className="bg-gray-50 border-b">
//           <div className="max-w-7xl mx-auto px-4 py-4">
//             <Link 
//               href="/blogs" 
//               className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
//             >
//               <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//               Back to Blog
//             </Link>
//           </div>
//         </div>

//         {/* Main Content Area with Sidebar */}
//         <div className="max-w-7xl mx-auto px-4 py-12">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
//             {/* Main Article - 8 columns */}
//             <article className="lg:col-span-8">
//               {/* Header */}
//               <header className="mb-12">
//                 {/* Categories */}
//                 {post.categories && post.categories.length > 0 && (
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {post.categories.map((cat) => (
//                       <Link
//                         key={cat}
//                         href={`/blog/category/${cat.toLowerCase()}`}
//                         className="text-sm font-semibold text-purple-600 bg-purple-50 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors"
//                       >
//                         {cat}
//                       </Link>
//                     ))}
//                   </div>
//                 )}

//                 {/* Title */}
//                 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
//                   {post.title}
//                 </h1>

//                 {/* Meta */}
//                 <div className="flex items-center gap-4 text-gray-600 pb-8 border-b">
//                   <time dateTime={post.date} className="text-sm font-medium">
//                     {new Date(post.date).toLocaleDateString('en-US', {
//                       year: 'numeric',
//                       month: 'long',
//                       day: 'numeric',
//                     })}
//                   </time>
//                   <span className="text-gray-400">•</span>
//                   <span className="text-sm">
//                     {Math.ceil(post.content.split(' ').length / 200)} min read
//                   </span>
//                 </div>
//               </header>

//               {/* Content with Enhanced Styling */}
//               <div 
//                 className="prose prose-lg max-w-none
//                   prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mt-12 prose-headings:mb-4
//                   prose-h2:text-3xl prose-h2:mt-16 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-200 prose-h2:scroll-mt-24
//                   prose-h3:text-2xl prose-h3:mt-10 prose-h3:scroll-mt-24
//                   prose-h4:text-xl prose-h4:mt-8 prose-h4:text-gray-800
//                   prose-h5:text-lg prose-h5:mt-6 prose-h5:text-gray-700
//                   prose-h6:text-base prose-h6:mt-6 prose-h6:font-semibold prose-h6:text-gray-600
//                   prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
//                   prose-strong:text-gray-900 prose-strong:font-semibold
//                   prose-em:text-gray-700 prose-em:italic
//                   prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
//                   prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
//                   prose-li:text-gray-700 prose-li:leading-relaxed
//                   prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:bg-purple-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic prose-blockquote:my-8 prose-blockquote:rounded-r
//                   prose-code:text-purple-700 prose-code:bg-purple-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
//                   prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-8 prose-pre:shadow-lg
//                   prose-hr:my-12 prose-hr:border-gray-200"
//                 dangerouslySetInnerHTML={{ __html: contentWithIds }} 
//               />

//               {/* Footer CTA */}
//               <div className="mt-16 pt-8 border-t border-gray-200">
//                 <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 rounded-2xl p-8 text-center shadow-sm border border-purple-100">
//                   <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//                     Ready to boost your AI visibility?
//                   </h3>
//                   <p className="text-gray-600 mb-6 text-lg">
//                     Get your website optimized for AI search engines like ChatGPT, Perplexity, and Gemini.
//                   </p>
//                   <div className="flex gap-4 justify-center flex-wrap">
//                     <a 
//                       href="https://app.visble.ai/signup"
//                       className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-md hover:shadow-lg"
//                     >
//                       Get Started Free
//                     </a>
//                     <a 
//                       href="https://app.visble.ai/login"
//                       className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all"
//                     >
//                       Log In
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </article>

//             {/* Table of Contents Sidebar - 4 columns */}
//             {headings.length > 0 && (
//               <aside className="hidden lg:block lg:col-span-4">
//                 <div className="sticky top-24">
//                   <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
//                     <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
//                       <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
//                       </svg>
//                       Table of Contents
//                     </h3>
//                     <nav className="space-y-2">
//                       {headings.map((heading, index) => (
//                         <a
//                           key={index}
//                           href={`#${heading.id}`}
//                           className={`block text-sm hover:text-purple-600 transition-colors py-1 ${
//                             heading.level === 2 
//                               ? 'font-semibold text-gray-900 hover:translate-x-1' 
//                               : 'ml-4 text-gray-600 hover:translate-x-1'
//                           } transition-transform`}
//                         >
//                           {heading.text}
//                         </a>
//                       ))}
//                     </nav>
//                   </div>
                  
//                   {/* Share Section */}
//                   <div className="mt-6 bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100 shadow-sm">
//                     <h4 className="text-sm font-bold text-gray-900 mb-3">Share this article</h4>
//                     <div className="flex gap-2">
//                       <a 
//                         href={`https://twitter.com/intent/tweet?url=https://visble.ai/blog/${params.slug}&text=${encodeURIComponent(post.title)}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex-1 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors text-center text-sm font-medium"
//                       >
//                         Twitter
//                       </a>
//                       <a 
//                         href={`https://www.linkedin.com/sharing/share-offsite/?url=https://visble.ai/blog/${params.slug}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex-1 bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800 transition-colors text-center text-sm font-medium"
//                       >
//                         LinkedIn
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </aside>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// import { getPostBySlug, getAllPosts } from '@/lib/posts';
// import { remark } from 'remark';
// import remarkGfm from 'remark-gfm';
// import html from 'remark-html';
// import { notFound } from 'next/navigation';
// import Link from 'next/link';
// import Header from '@/components/Header';

// export async function generateStaticParams() {
//   const posts = getAllPosts();
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const post = getPostBySlug(params.slug);
  
//   if (!post) {
//     return {
//       title: 'Post Not Found',
//     };
//   }

//   const description = post.excerpt || post.content
//     .replace(/<[^>]*>/g, '')
//     .replace(/[#*`]/g, '')
//     .substring(0, 160)
//     .trim();

//   const baseUrl = 'https://visble.ai';

//   return {
//     title: `${post.title} | Visble.ai Blog`,
//     description: description,
//     keywords: post.categories?.join(', '),
    
//     openGraph: {
//       title: post.title,
//       description: description,
//       url: `${baseUrl}/blog/${params.slug}`,
//       siteName: 'Visble.ai',
//       images: post.coverImage 
//         ? [{
//             url: `${baseUrl}/images/blog/${post.coverImage}`,
//             width: 1200,
//             height: 630,
//             alt: post.title,
//           }]
//         : [],
//       type: 'article',
//       publishedTime: new Date(post.date).toISOString(),
//     },

//     twitter: {
//       card: 'summary_large_image',
//       title: post.title,
//       description: description,
//       images: post.coverImage 
//         ? [`${baseUrl}/images/blog/${post.coverImage}`]
//         : [],
//     },

//     alternates: {
//       canonical: `${baseUrl}/blog/${params.slug}`,
//     },

//     robots: {
//       index: true,
//       follow: true,
//     },
//   };
// }

// // Extract headings for Table of Contents
// function extractHeadings(content: string) {
//   const headingRegex = /^(#{2,6})\s+(.+)$/gm;
//   const headings: { level: number; text: string; id: string }[] = [];
//   let match;

//   while ((match = headingRegex.exec(content)) !== null) {
//     const level = match[1].length;
//     const text = match[2]
//       .trim()
//       .replace(/\*\*/g, '')
//       .replace(/\\/g, '')
//       .replace(/\*/g, '')
//       .replace(/`/g, '')
//       .trim();
    
//     const id = text
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, '-')
//       .replace(/(^-|-$)/g, '');
    
//     headings.push({ level, text, id });
//   }

//   return headings;
// }

// // Only add IDs to headings for anchor links (No inline styles)
// function addHeadingIds(html: string, headings: { level: number; text: string; id: string }[]) {
//   let result = html;
  
//   headings.forEach(({ level, text, id }) => {
//     const escapedText = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//     const regex = new RegExp(`<h${level}>\\s*${escapedText}\\s*</h${level}>`, 'gi');
//     // We only inject the ID here. Styling is handled by Tailwind classes in the JSX.
//     result = result.replace(regex, `<h${level} id="${id}">${text}</h${level}>`);
//   });
  
//   return result;
// }

// export default async function BlogPost({ params }: { params: { slug: string } }) {
//   const post = getPostBySlug(params.slug);

//   if (!post) {
//     notFound();
//   }

//   // 1. EXTRACT HEADINGS (For Table of Contents)
//   const headings = extractHeadings(post.content);

//   // 2. PROCESS MARKDOWN
//   // We process the raw content directly without stripping H1s or Images manually
//   const processedContent = await remark()
//     .use(remarkGfm)
//     .use(html, { sanitize: false })
//     .process(post.content);
    
//   let contentHtml = processedContent.toString();

//   // 3. INJECT IDs
//   let contentWithIds = addHeadingIds(contentHtml, headings);

//   // 4. TAILWIND UTILITY TRANSFORMATIONS 
//   // (Adds classes to tables/links instead of hardcoded styles)
  
//   // Wrap tables for responsiveness
//   contentWithIds = contentWithIds.replace(/<table[^>]*>/g, () => {
//     return `<div class="overflow-x-auto my-8"><table class="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-lg">`;
//   });
//   contentWithIds = contentWithIds.replace(/<\/table>/g, '</table></div>');
//   contentWithIds = contentWithIds.replace(/<thead>/g, '<thead class="bg-gray-50">');
//   contentWithIds = contentWithIds.replace(/<th[^>]*>/g, '<th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">');
//   contentWithIds = contentWithIds.replace(/<tbody>/g, '<tbody class="bg-white divide-y divide-gray-200">');
//   contentWithIds = contentWithIds.replace(/<td[^>]*>/g, '<td class="px-6 py-4 text-sm text-gray-700 border-b">');
//   contentWithIds = contentWithIds.replace(/<tr[^>]*>/g, '<tr class="hover:bg-gray-50 transition-colors">');

//   // Add external link icons
//   contentWithIds = contentWithIds.replace(/<a\s+href="([^"]+)"[^>]*>([^<]+)<\/a>/g, (match, href, text) => {
//     const isExternal = href.startsWith('http') && !href.includes('visble.ai');
//     const externalIcon = isExternal 
//       ? '<svg class="inline-block w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>'
//       : '';
    
//     return `<a href="${href}" class="text-purple-600 hover:text-purple-700 font-medium underline decoration-2 underline-offset-2 transition-colors" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''}>${text}${externalIcon}</a>`;
//   });

//   const jsonLd = {
//     '@context': 'https://schema.org',
//     '@type': 'BlogPosting',
//     headline: post.title,
//     description: post.excerpt || post.content.substring(0, 160),
//     image: post.coverImage 
//       ? `https://visble.ai/images/blog/${post.coverImage}`
//       : 'https://visble.ai/visble_logo.png',
//     datePublished: new Date(post.date).toISOString(),
//     dateModified: new Date(post.date).toISOString(),
//     author: {
//       '@type': 'Person',
//       name: 'Isha Sachdeva',
//       jobTitle: 'Founder',
//       worksFor: {
//         '@type': 'Organization',
//         name: 'Visble.ai',
//       },
//     },
//     publisher: {
//       '@type': 'Organization',
//       name: 'Visble.ai',
//       logo: {
//         '@type': 'ImageObject',
//         url: 'https://visble.ai/visble_logo.png',
//       },
//     },
//     mainEntityOfPage: {
//       '@type': 'WebPage',
//       '@id': `https://visble.ai/blog/${params.slug}`,
//     },
//   };

//   const breadcrumbSchema = {
//     '@context': 'https://schema.org',
//     '@type': 'BreadcrumbList',
//     itemListElement: [
//       {
//         '@type': 'ListItem',
//         position: 1,
//         name: 'Home',
//         item: 'https://visble.ai',
//       },
//       {
//         '@type': 'ListItem',
//         position: 2,
//         name: 'Blog',
//         item: 'https://visble.ai/blogs',
//       },
//       {
//         '@type': 'ListItem',
//         position: 3,
//         name: post.title,
//         item: `https://visble.ai/blog/${params.slug}`,
//       },
//     ],
//   };

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
//       />
      
//       <div className="min-h-screen bg-white pt-16">
//         <Header/>
        
//         <div className="bg-gray-50 border-b">
//           <div className="max-w-7xl mx-auto px-4 py-4">
//             <Link 
//               href="/blogs" 
//               className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
//             >
//               <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//               Back to Blog
//             </Link>
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 py-12">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
//             <article className="lg:col-span-8">
//               <header className="mb-12">
//                 {post.categories && post.categories.length > 0 && (
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {post.categories.map((cat) => (
//                       <Link
//                         key={cat}
//                         href={`/blog/category/${cat.toLowerCase()}`}
//                         className="text-sm font-semibold text-purple-600 bg-purple-50 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors"
//                       >
//                         {cat}
//                       </Link>
//                     ))}
//                   </div>
//                 )}

//                 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
//                   {post.title}
//                 </h1>

//                 <div className="flex items-center gap-4 mb-8 pb-8 border-b">
//                   <img 
//                     src="/images/blog/IMG_5768-e1751266201560.webp" 
//                     alt="Isha Sachdeva" 
//                     className="w-14 h-14 rounded-full object-cover"
//                   />
//                   <div className="flex-1">
//                     <div className="font-semibold text-gray-900">Isha Sachdeva</div>
//                     <div className="text-sm text-gray-600">Founder, visble.ai</div>
//                   </div>
//                   <div className="flex items-center gap-4 text-gray-600 text-sm">
//                     <time dateTime={post.date}>
//                       {new Date(post.date).toLocaleDateString('en-US', {
//                         year: 'numeric',
//                         month: 'long',
//                         day: 'numeric',
//                       })}
//                     </time>
//                     <span className="text-gray-400">•</span>
//                     <span>
//                       {Math.ceil(post.content.split(' ').length / 200)} min read
//                     </span>
//                   </div>
//                 </div>
//               </header>

//               {post.coverImage && (
//                 <div className="mb-12">
//                   <img
//                     src={`/images/blog/${post.coverImage}`}
//                     alt={post.title}
//                     className="w-full h-auto rounded-lg shadow-lg"
//                   />
//                 </div>
//               )}

//               {/* 
//                 We use prose-h classes here to replace the hardcoded inline styles.
//                 This allows you to change the look globally using Tailwind config.
//               */}
//               <div 
//                 className="prose prose-lg max-w-none
//                   prose-headings:text-gray-900 prose-headings:font-bold
//                   prose-h1:text-4xl prose-h1:mb-6
//                   prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-gray-200
//                   prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
//                   prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
//                   prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline
//                   prose-strong:text-gray-900 prose-strong:font-semibold
//                   prose-li:text-gray-700 prose-li:leading-relaxed
//                   prose-img:rounded-lg prose-img:shadow-md
//                   prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:bg-purple-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic prose-blockquote:rounded-r"
//                 dangerouslySetInnerHTML={{ __html: contentWithIds }} 
//               />

//               <div className="mt-16 pt-8 border-t border-gray-200">
//                 <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 rounded-2xl p-8 text-center shadow-sm border border-purple-100">
//                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//                     Ready to boost your AI visibility?
//                   </h2>
//                   <p className="text-gray-600 mb-6 text-lg">
//                     Get your website optimized for AI search engines like ChatGPT, Perplexity, and Gemini.
//                   </p>
//                   <div className="flex gap-4 justify-center flex-wrap">
//                     <a 
//                       href="https://app.visble.ai/signup"
//                       className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-md hover:shadow-lg"
//                     >
//                       Get Started Free
//                     </a>
//                     <a 
//                       href="https://app.visble.ai/login"
//                       className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all"
//                     >
//                       Log In
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </article>

//             {headings.length > 0 && (
//               <aside className="hidden lg:block lg:col-span-4">
//                 <div className="sticky top-24">
//                   <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
//                     <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
//                       <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
//                       </svg>
//                       Table of Contents
//                     </h2>
//                     <nav className="space-y-2">
//                       {headings.map((heading, index) => (
//                         <a
//                           key={index}
//                           href={`#${heading.id}`}
//                           className={`block text-sm hover:text-purple-600 transition-all py-1 ${
//                             heading.level === 2 
//                               ? 'font-bold text-gray-900 hover:translate-x-1' 
//                               : 'ml-4 text-gray-600 font-medium hover:translate-x-1'
//                           } transition-transform`}
//                         >
//                           {heading.text}
//                         </a>
//                       ))}
//                     </nav>
//                   </div>
                  
//                   <div className="mt-6 bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100 shadow-sm">
//                     <h3 className="text-sm font-bold text-gray-900 mb-3">Share this article</h3>
//                     <div className="flex gap-2">
//                       <a 
//                         href={`https://twitter.com/intent/tweet?url=https://visble.ai/blog/${params.slug}&text=${encodeURIComponent(post.title)}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex-1 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors text-center text-sm font-medium"
//                         aria-label="Share on Twitter"
//                       >
//                         Twitter
//                       </a>
//                       <a 
//                         href={`https://www.linkedin.com/sharing/share-offsite/?url=https://visble.ai/blog/${params.slug}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex-1 bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800 transition-colors text-center text-sm font-medium"
//                         aria-label="Share on LinkedIn"
//                       >
//                         LinkedIn
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </aside>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import html from 'remark-html';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';

// 1. Generate Static Params
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. Generate Metadata
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  const description = post.excerpt || post.content
    .replace(/<[^>]*>/g, '')
    .replace(/[#*`]/g, '')
    .substring(0, 160)
    .trim();

  const baseUrl = 'https://visble.ai';

  return {
    title: `${post.title} | Visble.ai Blog`,
    description: description,
    keywords: post.categories?.join(', '),
    openGraph: {
      title: post.title,
      description: description,
      url: `${baseUrl}/blog/${params.slug}`,
      siteName: 'Visble.ai',
      images: post.coverImage 
        ? [{ url: `${baseUrl}/images/blog/${post.coverImage}`, width: 1200, height: 630, alt: post.title }]
        : [],
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: description,
      images: post.coverImage ? [`${baseUrl}/images/blog/${post.coverImage}`] : [],
    },
    alternates: { canonical: `${baseUrl}/blog/${params.slug}` },
    robots: { index: true, follow: true },
  };
}

// 3. Helper: Extract headings (Strict Filtering)
function extractHeadings(content: string) {
  const headingRegex = /^(#{2,6})\s+(.+)$/gm;
  const headings: { level: number; text: string; id: string }[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2]
      .trim()
      .replace(/\*\*/g, '')
      .replace(/`/g, '')
      .trim();
    
    // STRICT FILTER: Skip known unwanted headers
    if (text.includes("Isha Sachdeva") || text.includes("Founder, visble.ai")) {
      continue;
    }

    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    headings.push({ level, text, id });
  }

  return headings;
}

// 4. Helper: Add IDs to HTML headings
function addHeadingIds(htmlContent: string, headings: { level: number; text: string; id: string }[]) {
  let result = htmlContent;
  headings.forEach(({ level, text, id }) => {
    const escapedText = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`<h${level}>\\s*${escapedText}\\s*</h${level}>`, 'gi');
    result = result.replace(regex, `<h${level} id="${id}">${text}</h${level}>`);
  });
  return result;
}

// =========================================================
// 5. HARDCODED CLEANER
// =========================================================
function cleanHtmlContent(htmlContent: string, coverImage: string | undefined) {
  let cleanHtml = htmlContent;

  // --- HARDCODED REMOVAL LIST ---
  // Add any part of a filename or keyword you want to NUKE from the content.
  const REMOVE_LIST = [
    'IMG_5768',          // The specific Author Image ID
    'Isha Sachdeva',     // Author Name
    'Founder, visble.ai',// Author Title
  ];

  // If there is a cover image, add its filename (without extension) to the kill list
  if (coverImage) {
    const filename = coverImage.split('/').pop()?.split('.')[0]; // e.g. "my-image"
    if (filename && filename.length > 2) {
      REMOVE_LIST.push(filename);
    }
  }

  // 1. EXECUTE REMOVAL LIST on Images
  // This finds any <img> tag containing ANY string from the list and deletes it.
  cleanHtml = cleanHtml.replace(/<img[^>]+>/gi, (imgTag) => {
    // Check if this image tag contains any of our blacklisted words
    const shouldRemove = REMOVE_LIST.some(term => imgTag.toLowerCase().includes(term.toLowerCase()));
    
    if (shouldRemove) {
      return ''; // Delete the image
    }
    return imgTag; // Keep the image
  });

  // 2. EXECUTE REMOVAL LIST on Text (Paragraphs/Headings)
  // This looks for <p>Isha Sachdeva</p> etc.
  cleanHtml = cleanHtml.replace(/<(p|h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi, (fullTag, tagName, innerText) => {
    const shouldRemove = REMOVE_LIST.some(term => innerText.includes(term));
    if (shouldRemove) {
      return '';
    }
    return fullTag;
  });

  // 3. REMOVE H1 TAGS (Title is in Header)
  cleanHtml = cleanHtml.replace(/<h1[^>]*>[\s\S]*?<\/h1>/gi, '');

  // 4. OPTIONAL: "NUCLEAR OPTION" - REMOVE THE VERY FIRST IMAGE
  // If the cover image is always the first image in your markdown, 
  // this code simply finds the first <img> tag in the entire content and deletes it.
  // Uncomment the line below if the list above still misses the cover image.
  
  cleanHtml = cleanHtml.replace(/<img[^>]+>/i, ''); // <--- REMOVES THE FIRST IMAGE FOUND

  // 5. CLEANUP EMPTY TAGS
  // Remove empty <p></p> left behind by deleted images
  cleanHtml = cleanHtml.replace(/<p[^>]*>[\s\r\n]*<\/p>/gi, '');

  return cleanHtml;
}

// 6. MAIN COMPONENT
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // A. Extract Headings (TOC)
  const headings = extractHeadings(post.content);

  // B. Convert to HTML
  const processedContent = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(post.content);
    
  let contentHtml = processedContent.toString();

  // C. CLEAN THE HTML
  contentHtml = cleanHtmlContent(contentHtml, post.coverImage);

  // D. Final Polish
  let contentWithIds = addHeadingIds(contentHtml, headings);

  // Responsive Tables
  contentWithIds = contentWithIds.replace(/<table[^>]*>/g, () => 
    `<div class="overflow-x-auto my-8"><table class="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-lg">`
  );
  contentWithIds = contentWithIds.replace(/<\/table>/g, '</table></div>');
  contentWithIds = contentWithIds.replace(/<thead>/g, '<thead class="bg-gray-50">');
  contentWithIds = contentWithIds.replace(/<th[^>]*>/g, '<th class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">');
  contentWithIds = contentWithIds.replace(/<tbody>/g, '<tbody class="bg-white divide-y divide-gray-200">');
  contentWithIds = contentWithIds.replace(/<td[^>]*>/g, '<td class="px-6 py-4 text-sm text-gray-700 border-b">');
  contentWithIds = contentWithIds.replace(/<tr[^>]*>/g, '<tr class="hover:bg-gray-50 transition-colors">');

  // External Links
  contentWithIds = contentWithIds.replace(/<a\s+href="([^"]+)"[^>]*>([^<]+)<\/a>/g, (match, href, text) => {
    const isExternal = href.startsWith('http') && !href.includes('visble.ai');
    const externalIcon = isExternal 
      ? '<svg class="inline-block w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>'
      : '';
    return `<a href="${href}" class="text-purple-600 hover:text-purple-700 font-medium underline decoration-2 underline-offset-2 transition-colors" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''}>${text}${externalIcon}</a>`;
  });

  // JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || post.content.substring(0, 160),
    image: post.coverImage ? `https://visble.ai/images/blog/${post.coverImage}` : 'https://visble.ai/visble_logo.png',
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: 'Isha Sachdeva',
      jobTitle: 'Founder',
      worksFor: { '@type': 'Organization', name: 'Visble.ai' },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Visble.ai',
      logo: { '@type': 'ImageObject', url: 'https://visble.ai/visble_logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://visble.ai/blog/${params.slug}` },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://visble.ai' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://visble.ai/blogs' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://visble.ai/blog/${params.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <div className="min-h-screen bg-white pt-16">
        <Header/>
        
        <div className="bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link href="/blogs" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <article className="lg:col-span-8">
              <header className="mb-12">
                {post.categories && post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.categories.map((cat) => (
                      <Link key={cat} href={`/blog/category/${cat.toLowerCase()}`} className="text-sm font-semibold text-purple-600 bg-purple-50 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors">
                        {cat}
                      </Link>
                    ))}
                  </div>
                )}

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">{post.title}</h1>

                <div className="flex items-center gap-4 mb-8 pb-8 border-b">
                  <img src="/images/blog/IMG_5768-e1751266201560.webp" alt="Isha Sachdeva" className="w-14 h-14 rounded-full object-cover"/>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Isha Sachdeva</div>
                    <div className="text-sm text-gray-600">Founder, visble.ai</div>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600 text-sm">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    <span className="text-gray-400">•</span>
                    <span>{Math.ceil(post.content.split(' ').length / 200)} min read</span>
                  </div>
                </div>
              </header>

              {post.coverImage && (
                <div className="mb-12">
                  <img src={`/images/blog/${post.coverImage}`} alt={post.title} className="w-full h-auto rounded-lg shadow-lg"/>
                </div>
              )}

              <div 
                className="prose prose-lg max-w-none
                  prose-headings:text-gray-900 prose-headings:font-bold
                  prose-h1:text-4xl prose-h1:mb-6
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-gray-200
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
                  prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900 prose-strong:font-semibold
                  prose-li:text-gray-700 prose-li:leading-relaxed
                  prose-img:rounded-lg prose-img:shadow-md
                  prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:bg-purple-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic prose-blockquote:rounded-r"
                dangerouslySetInnerHTML={{ __html: contentWithIds }} 
              />

              <div className="mt-16 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 rounded-2xl p-8 text-center shadow-sm border border-purple-100">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Ready to boost your AI visibility?</h2>
                  <p className="text-gray-600 mb-6 text-lg">Get your website optimized for AI search engines like ChatGPT, Perplexity, and Gemini.</p>
                  <div className="flex gap-4 justify-center flex-wrap">
                    <a href="https://app.visble.ai/signup" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-md hover:shadow-lg">Get Started Free</a>
                    <a href="https://app.visble.ai/login" className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all">Log In</a>
                  </div>
                </div>
              </div>
            </article>

            {headings.length > 0 && (
              <aside className="hidden lg:block lg:col-span-4">
                <div className="sticky top-24">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                      </svg>
                      Table of Contents
                    </h2>
                    <nav className="space-y-2">
                      {headings.map((heading, index) => (
                        <a key={index} href={`#${heading.id}`} className={`block text-sm hover:text-purple-600 transition-all py-1 ${heading.level === 2 ? 'font-bold text-gray-900 hover:translate-x-1' : 'ml-4 text-gray-600 font-medium hover:translate-x-1'} transition-transform`}>
                          {heading.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                  
                  <div className="mt-6 bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100 shadow-sm">
                    <h3 className="text-sm font-bold text-gray-900 mb-3">Share this article</h3>
                    <div className="flex gap-2">
                      <a href={`https://twitter.com/intent/tweet?url=https://visble.ai/blog/${params.slug}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors text-center text-sm font-medium">Twitter</a>
                      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://visble.ai/blog/${params.slug}`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800 transition-colors text-center text-sm font-medium">LinkedIn</a>
                    </div>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>
      </div>
    </>
  );
}