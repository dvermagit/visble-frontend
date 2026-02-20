// import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/case-studies';
// import type { Metadata } from 'next';
// import InteractiveGraph from '@/components/InteractiveGraph';
// import WorkflowTimeline from '@/components/WorkflowTimeline';
// import CalendlyButton from '@/components/CalendlyButton';
// import Header from '@/components/Header';

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// // Generate static params for all case studies
// export async function generateStaticParams() {
//   const caseStudies = getAllCaseStudies();
//   return caseStudies.map((study) => ({
//     slug: study.slug,
//   }));
// }

// // Generate metadata for SEO
// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const caseStudy = getCaseStudyBySlug(params.slug);

//   if (!caseStudy) {
//     return { title: 'Case Study Not Found' };
//   }

//   return {
//     title: `${caseStudy.title} | ${caseStudy.company} Case Study`,
//     description: caseStudy.shortDescription,
//     openGraph: {
//       title: `${caseStudy.title} | ${caseStudy.company}`,
//       description: caseStudy.shortDescription,
//       type: 'article',
//       images: caseStudy.avatar ? [caseStudy.avatar] : [],
//     },
//   };
// }

// export default function CaseStudyPage({ params }: PageProps) {
//   const caseStudy = getCaseStudyBySlug(params.slug);

//   if (!caseStudy) {
//     notFound();
//   }

//   return (
//     <div className="min-h-screen bg-white pt-16">
//       <Header/>
//       {/* Back Button */}
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
//         <Link
//           href="/#case-studies"
//           className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors"
//         >
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back to Case Studies
//         </Link>
//       </div>

//       {/* Hero Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <h1 className="text-4xl md:text-5xl font-bold bricolage text-gray-900 mb-6 leading-tight">
//           {caseStudy.title}
//         </h1>

//         <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-200">
          // <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden p-1.5">
          //   {caseStudy.avatar ? (
          //     <Image
          //       src={caseStudy.avatar}
          //       alt={`${caseStudy.company} logo`}
          //       width={40}
          //       height={40}
          //       className="object-contain"
          //     />
          //   ) : (
          //     <span className="text-sm font-semibold text-gray-600 bricolage">
          //       {caseStudy.company[0]}
          //     </span>
          //   )}
          // </div>

//           <div>
//             <div className="text-sm font-medium text-gray-900">
//               {caseStudy.company}
//             </div>
//             <div className="text-xs text-gray-500">
//               {caseStudy.location} • {caseStudy.industry}
//             </div>
//           </div>

//           <div className="ml-auto text-xs text-gray-500">
//             <span className="font-medium text-gray-700">
//               {caseStudy.timeline}
//             </span>{' '}
//             timeline
//           </div>
//         </div>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2">
//           {caseStudy.tags.map((tag, index) => (
//             <span
//               key={index}
//               className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* Results Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="flex items-end justify-between mb-6">
//           <div className="flex gap-4">
//             <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
//               <div className="w-2.5 h-2.5 rounded-full bg-purple-600" />
//               Source Mentions
//             </div>
//             <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
//               <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
//               Brand Queries
//             </div>
//           </div>
//         </div>

//         <InteractiveGraph graphData={caseStudy.graphData} />
//       </section>

//       {/* Challenge Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">
//           {caseStudy.challenge.title}
//         </h3>
//         <p className="text-base text-gray-700 mb-6 leading-relaxed">
//           {caseStudy.challenge.description}
//         </p>
        
//         <div className="space-y-3 bg-gray-50 rounded-lg p-6">
//           {caseStudy.challenge.painPoints.map((point, index) => (
//             <div key={index} className="flex items-start">
//               <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
//                 <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
//               </div>
//               <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Workflow Section - Added after Challenge */}
//       {caseStudy.workflow && (
//         <WorkflowTimeline workflow={caseStudy.workflow} />
//       )}

//       {/* Solution Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">
//           {caseStudy.solution.title}
//         </h3>
//         <p className="text-base text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
//           {caseStudy.solution.description}
//         </p>
        
//         <div className="grid md:grid-cols-2 gap-4">
//           {caseStudy.solution.strategies.map((strategy, index) => (
//             <div key={index} className="bg-blue-50 rounded-lg p-5">
//               <div className="flex items-start mb-2">
//                 <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
//                 <h4 className="font-semibold text-gray-900 text-sm">{strategy.name}</h4>
//               </div>
//               <p className="text-sm text-gray-600 leading-relaxed">{strategy.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>
        
//       {/* Results Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
//           <h3 className="text-3xl font-bold bricolage text-gray-900 mb-6">
//             {caseStudy.results.title}
//           </h3>
//           <p className="text-lg text-gray-700 mb-12 leading-relaxed">
//             {caseStudy.results.description}
//           </p>
          
//           {/* Metrics Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8">
//             {caseStudy.results.metrics.map((metric, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl font-bold bricolage text-purple-600 mb-1">
//                   {metric.value}
//                 </div>
//                 <div className="text-xs text-gray-600 mb-1">
//                   {metric.label}
//                 </div>
//                 <div className="text-xs text-green-600 font-medium flex items-center justify-center">
//                   <TrendingUp className="w-3 h-3 mr-1" />
//                   {metric.change}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Testimonial */}
//           {caseStudy.results.testimonial && (
//             <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
//               <div className="text-4xl text-blue-600 mb-4">"</div>
//               <p className="text-xl text-gray-800 italic mb-6 leading-relaxed">
//                 {caseStudy.results.testimonial.quote}
//               </p>
//               <div className="flex items-center">
//                 <div>
//                   <div className="font-bold text-gray-900">
//                     {caseStudy.results.testimonial.author}
//                   </div>
//                   <div className="text-gray-600 text-sm">
//                     {caseStudy.results.testimonial.role}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
        
//       {/* CTA Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
//         <div className="bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl p-8 text-center text-white">
//           <h3 className="text-2xl font-bold bricolage mb-3">
//             Ready to Achieve Similar Results?
//           </h3>
//           <p className="text-base mb-6 opacity-90">
//             See how Visble can transform your AI search visibility
//           </p>
//           <CalendlyButton variant="case-study" />
//         </div>
//       </section>
//     </div>
//   );
// }


// app/case-studies/[slug]/page.tsx


/////
// Real
////





// import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/case-studies';
// import type { Metadata } from 'next';
// import InteractiveGraph from '@/components/InteractiveGraph';
// import WorkflowTimeline from '@/components/WorkflowTimeline';
// import CalendlyButton from '@/components/CalendlyButton';
// import Header from '@/components/Header';

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// // Generate static params for all case studies
// export async function generateStaticParams() {
//   const caseStudies = getAllCaseStudies();
//   return caseStudies.map((study) => ({
//     slug: study.slug,
//   }));
// }

// // Generate metadata for SEO
// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const caseStudy = getCaseStudyBySlug(params.slug);

//   if (!caseStudy) {
//     return { title: 'Case Study Not Found' };
//   }

//   // Map specific metadata for each case study based on slug
//   const metadataMap: Record<string, { title: string; description: string }> = {
//     'acredge-case-study': {
//       title: 'How Acredge Went From 0 to 100+ Source Mentions within 60 Days',
//       description: 'Learn how a DA 8 website, with no keywords ranking on the first page, gained AI source mentions using topical authority, GEO strategy, and semantic SEO, backed by real data and Visble AI insights.',
//     },
//     'dgft-guru-case-study': {
//       title: 'DGFT Guru Gained Visibility from 20% to 80% by Revamping Content for AI',
//       description: 'Here\'s how Visble used SEO and GEO strategies to achieve a 400% citation recovery and a 290% surge in AI-driven traffic by optimising pre-existing content.',
//     },
//     'flyhomes-case-study': {
//       title: 'How Flyhomes Gained 512% Growth in Source Mentions Within 40 days',
//       description: 'Flyhomes achieved AI source mentions and a top-3 ranking for citations with Visble. See how our SEO and GEO strategies rebuilt ChatGPT\'s trust in just 40 days.',
//     },
//   };

//   const customMeta = metadataMap[params.slug] || {
//     title: caseStudy.title,
//     description: caseStudy.shortDescription,
//   };

//   return {
//     title: customMeta.title,
//     description: customMeta.description,
//     publisher: 'Isha Sachdeva',
//     robots: {
//       index: true,
//       follow: true,
//       'max-snippet': -1,
//       'max-image-preview': 'large',
//       'max-video-preview': -1,
//     },
//     openGraph: {
//       type: 'article',
//       title: customMeta.title,
//       description: customMeta.description,
//       siteName: 'Visble AI',
//       url: `https://www.visble.ai/case-studies/${params.slug}`,
//       images: caseStudy.avatar ? [caseStudy.avatar] : [],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: customMeta.title,
//       description: customMeta.description,
//     },
//     alternates: {
//       canonical: 'https://www.visble.ai/',
//     },
//   };
// }

// export default function CaseStudyPage({ params }: PageProps) {
//   const caseStudy = getCaseStudyBySlug(params.slug);

//   if (!caseStudy) {
//     notFound();
//   }

//   return (
//     <div className="min-h-screen bg-white pt-16">
//       <Header/>
//       {/* Back Button */}
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
//         <Link
//           href="/#case-studies"
//           className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors"
//         >
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back to Case Studies
//         </Link>
//       </div>

//       {/* Hero Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <h1 className="text-4xl md:text-5xl font-bold bricolage text-gray-900 mb-6 leading-tight">
//           {caseStudy.title}
//         </h1>

//         <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-200">
//           <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden p-1.5">
//             {caseStudy.avatar ? (
//               <Image
//                 src={caseStudy.avatar}
//                 alt={`${caseStudy.company} logo`}
//                 width={40}
//                 height={40}
//                 className="object-contain"
//               />
//             ) : (
//               <span className="text-sm font-semibold text-gray-600 bricolage">
//                 {caseStudy.company[0]}
//               </span>
//             )}
//           </div>

//           <div>
//             <div className="text-sm font-medium text-gray-900">
//               {caseStudy.company}
//             </div>
//             <div className="text-xs text-gray-500">
//               {caseStudy.location} • {caseStudy.industry}
//             </div>
//           </div>

//           <div className="ml-auto text-xs text-gray-500">
//             <span className="font-medium text-gray-700">
//               {caseStudy.timeline}
//             </span>{' '}
//             timeline
//           </div>
//         </div>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2">
//           {caseStudy.tags.map((tag, index) => (
//             <span
//               key={index}
//               className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* Results Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="flex items-end justify-between mb-6">
//           <div className="flex gap-4">
//             <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
//               <div className="w-2.5 h-2.5 rounded-full bg-purple-600" />
//               Source Mentions
//             </div>
//             <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
//               <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
//               Brand Queries
//             </div>
//           </div>
//         </div>

//         <InteractiveGraph graphData={caseStudy.graphData} />
//       </section>

//       {/* Challenge Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">
//           {caseStudy.challenge.title}
//         </h3>
//         <p className="text-base text-gray-700 mb-6 leading-relaxed">
//           {caseStudy.challenge.description}
//         </p>
        
//         <div className="space-y-3 bg-gray-50 rounded-lg p-6">
//           {caseStudy.challenge.painPoints.map((point, index) => (
//             <div key={index} className="flex items-start">
//               <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
//                 <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
//               </div>
//               <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Workflow Section - Added after Challenge */}
//       {caseStudy.workflow && (
//         <WorkflowTimeline workflow={caseStudy.workflow} />
//       )}

//       {/* Solution Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">
//           {caseStudy.solution.title}
//         </h3>
//         <p className="text-base text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
//           {caseStudy.solution.description}
//         </p>
        
//         <div className="grid md:grid-cols-2 gap-4">
//           {caseStudy.solution.strategies.map((strategy, index) => (
//             <div key={index} className="bg-blue-50 rounded-lg p-5">
//               <div className="flex items-start mb-2">
//                 <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
//                 <h4 className="font-semibold text-gray-900 text-sm">{strategy.name}</h4>
//               </div>
//               <p className="text-sm text-gray-600 leading-relaxed">{strategy.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>
        
//       {/* Results Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
//           <h3 className="text-3xl font-bold bricolage text-gray-900 mb-6">
//             {caseStudy.results.title}
//           </h3>
//           <p className="text-lg text-gray-700 mb-12 leading-relaxed">
//             {caseStudy.results.description}
//           </p>
          
//           {/* Metrics Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8">
//             {caseStudy.results.metrics.map((metric, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl font-bold bricolage text-purple-600 mb-1">
//                   {metric.value}
//                 </div>
//                 <div className="text-xs text-gray-600 mb-1">
//                   {metric.label}
//                 </div>
//                 <div className="text-xs text-green-600 font-medium flex items-center justify-center">
//                   <TrendingUp className="w-3 h-3 mr-1" />
//                   {metric.change}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Testimonial */}
//           {caseStudy.results.testimonial && (
//             <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
//               <div className="text-4xl text-blue-600 mb-4">"</div>
//               <p className="text-xl text-gray-800 italic mb-6 leading-relaxed">
//                 {caseStudy.results.testimonial.quote}
//               </p>
//               <div className="flex items-center">
//                 <div>
//                   <div className="font-bold text-gray-900">
//                     {caseStudy.results.testimonial.author}
//                   </div>
//                   <div className="text-gray-600 text-sm">
//                     {caseStudy.results.testimonial.role}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
        
//       {/* CTA Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
//         <div className="bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl p-8 text-center text-white">
//           <h3 className="text-2xl font-bold bricolage mb-3">
//             Ready to Achieve Similar Results?
//           </h3>
//           <p className="text-base mb-6 opacity-90">
//             See how Visble can transform your AI search visibility
//           </p>
//           <CalendlyButton variant="case-study" />
//         </div>
//       </section>
//     </div>
//   );
// }

// import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/case-studies';
// import type { Metadata } from 'next';
// import InteractiveGraph from '@/components/InteractiveGraph';
// import WorkflowTimeline from '@/components/WorkflowTimeline';
// import CalendlyButton from '@/components/CalendlyButton';
// import Header from '@/components/Header';

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// // Generate static params for all case studies
// export async function generateStaticParams() {
//   const caseStudies = getAllCaseStudies();
//   return caseStudies.map((study) => ({
//     slug: study.slug,
//   }));
// }

// // Generate metadata for SEO
// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const caseStudy = getCaseStudyBySlug(params.slug);

//   if (!caseStudy) {
//     return { title: 'Case Study Not Found' };
//   }

//   return {
//     title: `${caseStudy.title} | ${caseStudy.company} Case Study`,
//     description: caseStudy.shortDescription,
//     openGraph: {
//       title: `${caseStudy.title} | ${caseStudy.company}`,
//       description: caseStudy.shortDescription,
//       type: 'article',
//       images: caseStudy.avatar ? [caseStudy.avatar] : [],
//     },
//   };
// }

// export default function CaseStudyPage({ params }: PageProps) {
//   const caseStudy = getCaseStudyBySlug(params.slug);

//   if (!caseStudy) {
//     notFound();
//   }

//   return (
//     <div className="min-h-screen bg-white pt-16">
//       <Header/>
//       {/* Back Button */}
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
//         <Link
//           href="/#case-studies"
//           className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors"
//         >
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back to Case Studies
//         </Link>
//       </div>

//       {/* Hero Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <h1 className="text-4xl md:text-5xl font-bold bricolage text-gray-900 mb-6 leading-tight">
//           {caseStudy.title}
//         </h1>

//         <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-200">
//           <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden p-1.5">
//             {caseStudy.avatar ? (
            //   <Image
            //     src={caseStudy.avatar}
            //     alt={`${caseStudy.company} logo`}
            //     width={40}
            //     height={40}
            //     className="object-contain"
            //   />
            // ) : (
            //   <span className="text-sm font-semibold text-gray-600 bricolage">
            //     {caseStudy.company[0]}
            //   </span>
            // )}
//           </div>

//           <div>
//             <div className="text-sm font-medium text-gray-900">
//               {caseStudy.company}
//             </div>
//             <div className="text-xs text-gray-500">
//               {caseStudy.location} • {caseStudy.industry}
//             </div>
//           </div>

//           <div className="ml-auto text-xs text-gray-500">
//             <span className="font-medium text-gray-700">
//               {caseStudy.timeline}
//             </span>{' '}
//             timeline
//           </div>
//         </div>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2">
//           {caseStudy.tags.map((tag, index) => (
//             <span
//               key={index}
//               className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* Results Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="flex items-end justify-between mb-6">
//           <div className="flex gap-4">
//             <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
//               <div className="w-2.5 h-2.5 rounded-full bg-purple-600" />
//               Source Mentions
//             </div>
//             <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
//               <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
//               Brand Queries
//             </div>
//           </div>
//         </div>

//         <InteractiveGraph graphData={caseStudy.graphData} />
//       </section>

//       {/* Challenge Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">
//           {caseStudy.challenge.title}
//         </h3>
//         <p className="text-base text-gray-700 mb-6 leading-relaxed">
//           {caseStudy.challenge.description}
//         </p>
        
//         <div className="space-y-3 bg-gray-50 rounded-lg p-6">
//           {caseStudy.challenge.painPoints.map((point, index) => (
//             <div key={index} className="flex items-start">
//               <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
//                 <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
//               </div>
//               <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Workflow Section - Added after Challenge */}
//       {caseStudy.workflow && (
//         <WorkflowTimeline workflow={caseStudy.workflow} />
//       )}

//       {/* Solution Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">
//           {caseStudy.solution.title}
//         </h3>
//         <p className="text-base text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
//           {caseStudy.solution.description}
//         </p>
        
//         <div className="grid md:grid-cols-2 gap-4">
//           {caseStudy.solution.strategies.map((strategy, index) => (
//             <div key={index} className="bg-blue-50 rounded-lg p-5">
//               <div className="flex items-start mb-2">
//                 <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
//                 <h4 className="font-semibold text-gray-900 text-sm">{strategy.name}</h4>
//               </div>
//               <p className="text-sm text-gray-600 leading-relaxed">{strategy.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>
        
//       {/* Results Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
//           <h3 className="text-3xl font-bold bricolage text-gray-900 mb-6">
//             {caseStudy.results.title}
//           </h3>
//           <p className="text-lg text-gray-700 mb-12 leading-relaxed">
//             {caseStudy.results.description}
//           </p>
          
//           {/* Metrics Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8">
//             {caseStudy.results.metrics.map((metric, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl font-bold bricolage text-purple-600 mb-1">
//                   {metric.value}
//                 </div>
//                 <div className="text-xs text-gray-600 mb-1">
//                   {metric.label}
//                 </div>
//                 <div className="text-xs text-green-600 font-medium flex items-center justify-center">
//                   <TrendingUp className="w-3 h-3 mr-1" />
//                   {metric.change}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Testimonial */}
//           {caseStudy.results.testimonial && (
//             <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
//               <div className="text-4xl text-blue-600 mb-4">"</div>
//               <p className="text-xl text-gray-800 italic mb-6 leading-relaxed">
//                 {caseStudy.results.testimonial.quote}
//               </p>
//               <div className="flex items-center">
//                 <div>
//                   <div className="font-bold text-gray-900">
//                     {caseStudy.results.testimonial.author}
//                   </div>
//                   <div className="text-gray-600 text-sm">
//                     {caseStudy.results.testimonial.role}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
        
//       {/* CTA Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
//         <div className="bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl p-8 text-center text-white">
//           <h3 className="text-2xl font-bold bricolage mb-3">
//             Ready to Achieve Similar Results?
//           </h3>
//           <p className="text-base mb-6 opacity-90">
//             See how Visble can transform your AI search visibility
//           </p>
//           <CalendlyButton variant="case-study" />
//         </div>
//       </section>
//     </div>
//   );
// }

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react';
import { sanityClient, urlFor } from '@/lib/sanity.client';
import { caseStudyBySlugQuery, allCaseStudySlugsQuery } from '@/lib/queries';
import type { Metadata } from 'next';
import InteractiveGraph from '@/components/InteractiveGraph';
import WorkflowTimeline from '@/components/WorkflowTimeline';
import CalendlyButton from '@/components/CalendlyButton';
import Header from '@/components/Header';
import Image from 'next/image';

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all case studies
export async function generateStaticParams() {
  const slugs: { slug: string }[] = await sanityClient.fetch(allCaseStudySlugsQuery);
  return slugs.map((s) => ({
    slug: s.slug,
  }));
}

// Generate metadata for SEO original one 
// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const caseStudy = await sanityClient.fetch(caseStudyBySlugQuery, { slug: params.slug });

//   if (!caseStudy) {
//     return { title: 'Case Study Not Found' };
//   }

//   return {
//     title: `${caseStudy.title} | ${caseStudy.company} Case Study`,
//     description: caseStudy.shortDescription,
//     openGraph: {
//       title: `${caseStudy.title} | ${caseStudy.company}`,
//       description: caseStudy.shortDescription,
//       type: 'article',
//       images: caseStudy.avatar ? [urlFor(caseStudy.avatar).width(600).height(400).url()] : [],
//     },
//   };
// }

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const caseStudy = await sanityClient.fetch(caseStudyBySlugQuery, { slug: params.slug });

  if (!caseStudy) {
    return { title: 'Case Study Not Found' };
  }

  // Map specific metadata for each case study based on slug
  const metadataMap: Record<string, { title: string; description: string }> = {
    'acredge-case-study': {
      title: 'How Acredge Went From 0 to 100+ Source Mentions within 60 Days',
      description: 'Learn how a DA 8 website, with no keywords ranking on the first page, gained AI source mentions using topical authority, GEO strategy, and semantic SEO, backed by real data and Visble AI insights.',
    },
    'dgft-guru-case-study': {
      title: 'DGFT Guru Gained Visibility from 20% to 80% by Revamping Content for AI',
      description: 'Here\'s how Visble used SEO and GEO strategies to achieve a 400% citation recovery and a 290% surge in AI-driven traffic by optimising pre-existing content.',
    },
    'flyhomes-case-study': {
      title: 'How Flyhomes Gained 512% Growth in Source Mentions Within 40 days',
      description: 'Flyhomes achieved AI source mentions and a top-3 ranking for citations with Visble. See how our SEO and GEO strategies rebuilt ChatGPT\'s trust in just 40 days.',
    },
  };

  const customMeta = metadataMap[params.slug] || {
    title: caseStudy.title,
    description: caseStudy.shortDescription,
  };

  return {
    title: customMeta.title,
    description: customMeta.description,
    publisher: 'Isha Sachdeva',
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
    openGraph: {
      type: 'article',
      title: customMeta.title,
      description: customMeta.description,
      siteName: 'Visble AI',
      url: `https://www.visble.ai/case-studies/${params.slug}`,
      // images: caseStudy.avatar ? [caseStudy.avatar] : [],
      images: caseStudy.avatar ? [urlFor(caseStudy.avatar).width(1200).height(630).url()] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: customMeta.title,
      description: customMeta.description,
    },
    alternates: {
      canonical: 'https://www.visble.ai/',
    },
  };
}


export default async function CaseStudyPage({ params }: PageProps) {
  const caseStudy = await sanityClient.fetch(caseStudyBySlugQuery, { slug: params.slug });

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-16">
      <Header/>
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          href="/#case-studies"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Case Studies
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl md:text-5xl font-bold bricolage text-gray-900 mb-6 leading-tight">
          {caseStudy.title}
        </h1>

        <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-200">
          <div className="h-10 w-10 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden px-2 py-1 shadow-sm min-w-[40px] max-w-[120px]">
            {caseStudy.avatar ? (
              <img
                src={urlFor(caseStudy.avatar).height(36).url()}
                alt={`${caseStudy.company} logo`}
                className="h-full w-auto object-contain"
                style={{ maxHeight: '36px' }}
              />
            ) : (
              <span className="text-lg font-bold text-gray-700 bricolage">
                {caseStudy.company[0]}
              </span>
            )}
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900">
              {caseStudy.company}
            </div>
            <div className="text-xs text-gray-500">
              {caseStudy.location} • {caseStudy.industry}
            </div>
          </div>

          <div className="ml-auto text-xs text-gray-500">
            <span className="font-medium text-gray-700">
              {caseStudy.timeline}
            </span>{' '}
            timeline
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {caseStudy.tags?.map((tag: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Graph Section */}
      {caseStudy.graphData && caseStudy.graphData.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-end justify-between mb-6">
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                Source Mentions
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                Brand Queries
              </div>
            </div>
          </div>

          <InteractiveGraph graphData={caseStudy.graphData} />
        </section>
      )}

      {/* Challenge Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">
          {caseStudy.challenge?.title}
        </h3>
        <p className="text-base text-gray-700 mb-6 leading-relaxed">
          {caseStudy.challenge?.description}
        </p>
        
        <div className="space-y-3 bg-gray-50 rounded-lg p-6">
          {caseStudy.challenge?.painPoints?.map((point: string, index: number) => (
            <div key={index} className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Section */}
      {caseStudy.workflow && (
        <WorkflowTimeline workflow={caseStudy.workflow} />
      )}

      {/* Solution Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">
          {caseStudy.solution?.title}
        </h3>
        <p className="text-base text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
          {caseStudy.solution?.description}
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          {caseStudy.solution?.strategies?.map((strategy: any, index: number) => (
            <div key={index} className="bg-blue-50 rounded-lg p-5">
              <div className="flex items-start mb-2">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <h4 className="font-semibold text-gray-900 text-sm">{strategy.name}</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{strategy.description}</p>
            </div>
          ))}
        </div>
      </section>
        
      {/* Results Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold bricolage text-gray-900 mb-6">
            {caseStudy.results?.title}
          </h3>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            {caseStudy.results?.description}
          </p>
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8">
            {caseStudy.results?.metrics?.map((metric: any, index: number) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold bricolage text-purple-600 mb-1">
                  {metric.value}
                </div>
                <div className="text-xs text-gray-600 mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-green-600 font-medium flex items-center justify-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {metric.change}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          {caseStudy.results?.testimonial && (
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="text-4xl text-blue-600 mb-4">"</div>
              <p className="text-xl text-gray-800 italic mb-6 leading-relaxed">
                {caseStudy.results.testimonial.quote}
              </p>
              <div className="flex items-center">
                <div>
                  <div className="font-bold text-gray-900">
                    {caseStudy.results.testimonial.author}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {caseStudy.results.testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
        
      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
        <div className="bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold bricolage mb-3">
            Ready to Achieve Similar Results?
          </h3>
          <p className="text-base mb-6 opacity-90">
            See how Visble can transform your AI search visibility
          </p>
          <CalendlyButton variant="case-study" />
        </div>
      </section>
    </div>
  );
}

// import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/case-studies';
// import type { Metadata } from 'next';
// import InteractiveGraph from '@/components/InteractiveGraph';
// import WorkflowTimeline from '@/components/WorkflowTimeline';
// import CalendlyButton from '@/components/CalendlyButton';
// import Header from '@/components/Header';

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// // Generate static params for all case studies
// export async function generateStaticParams() {
//   const caseStudies = getAllCaseStudies();
//   return caseStudies.map((study) => ({
//     slug: study.slug,
//   }));
// }

// // Generate metadata for SEO
// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const caseStudy = getCaseStudyBySlug(params.slug);

//   if (!caseStudy) {
//     return { title: 'Case Study Not Found' };
//   }

//   return {
//     title: `${caseStudy.title} | ${caseStudy.company} Case Study`,
//     description: caseStudy.shortDescription,
//     openGraph: {
//       title: `${caseStudy.title} | ${caseStudy.company}`,
//       description: caseStudy.shortDescription,
//       type: 'article',
//       images: caseStudy.avatar ? [caseStudy.avatar] : [],
//     },
//   };
// }

// export default function CaseStudyPage({ params }: PageProps) {
//   const caseStudy = getCaseStudyBySlug(params.slug);

//   if (!caseStudy) {
//     notFound();
//   }

//   return (
//     <div className="min-h-screen bg-white pt-16">
//       <Header/>
//       {/* Back Button */}
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
//         <Link
//           href="/#case-studies"
//           className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors"
//         >
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back to Case Studies
//         </Link>
//       </div>

//       {/* Hero Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <h1 className="text-4xl md:text-5xl font-bold bricolage text-gray-900 mb-6 leading-tight">
//           {caseStudy.title}
//         </h1>

//         <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-200">
//           <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden p-1.5">
//             {caseStudy.avatar ? (
//               <Image
//                 src={caseStudy.avatar}
//                 alt={`${caseStudy.company} logo`}
//                 width={40}
//                 height={40}
//                 className="object-contain"
//               />
//             ) : (
//               <span className="text-sm font-semibold text-gray-600 bricolage">
//                 {caseStudy.company[0]}
//               </span>
//             )}
//           </div>

//           <div>
//             <div className="text-sm font-medium text-gray-900">
//               {caseStudy.company}
//             </div>
//             <div className="text-xs text-gray-500">
//               {caseStudy.location} • {caseStudy.industry}
//             </div>
//           </div>

//           <div className="ml-auto text-xs text-gray-500">
//             <span className="font-medium text-gray-700">
//               {caseStudy.timeline}
//             </span>{' '}
//             timeline
//           </div>
//         </div>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2">
//           {caseStudy.tags.map((tag, index) => (
//             <span
//               key={index}
//               className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* Results Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="flex items-end justify-between mb-6">
//           <div className="flex gap-4">
//             <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
//               <div className="w-2.5 h-2.5 rounded-full bg-purple-600" />
//               Source Mentions
//             </div>
//             <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
//               <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
//               Brand Queries
//             </div>
//           </div>
//         </div>

//         <InteractiveGraph graphData={caseStudy.graphData} />
//       </section>

//       {/* Challenge Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">
//           {caseStudy.challenge.title}
//         </h3>
//         <p className="text-base text-gray-700 mb-6 leading-relaxed">
//           {caseStudy.challenge.description}
//         </p>
        
//         <div className="space-y-3 bg-gray-50 rounded-lg p-6">
//           {caseStudy.challenge.painPoints.map((point, index) => (
//             <div key={index} className="flex items-start">
//               <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
//                 <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
//               </div>
//               <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Workflow Section - Added after Challenge */}
//       {caseStudy.workflow && (
//         <WorkflowTimeline workflow={caseStudy.workflow} />
//       )}

//       {/* Solution Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">
//           {caseStudy.solution.title}
//         </h3>
//         <p className="text-base text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
//           {caseStudy.solution.description}
//         </p>
        
//         <div className="grid md:grid-cols-2 gap-4">
//           {caseStudy.solution.strategies.map((strategy, index) => (
//             <div key={index} className="bg-blue-50 rounded-lg p-5">
//               <div className="flex items-start mb-2">
//                 <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
//                 <h4 className="font-semibold text-gray-900 text-sm">{strategy.name}</h4>
//               </div>
//               <p className="text-sm text-gray-600 leading-relaxed">{strategy.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>
        
//       {/* Results Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
//           <h3 className="text-3xl font-bold bricolage text-gray-900 mb-6">
//             {caseStudy.results.title}
//           </h3>
//           <p className="text-lg text-gray-700 mb-12 leading-relaxed">
//             {caseStudy.results.description}
//           </p>
          
//           {/* Metrics Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8">
//             {caseStudy.results.metrics.map((metric, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl font-bold bricolage text-purple-600 mb-1">
//                   {metric.value}
//                 </div>
//                 <div className="text-xs text-gray-600 mb-1">
//                   {metric.label}
//                 </div>
//                 <div className="text-xs text-green-600 font-medium flex items-center justify-center">
//                   <TrendingUp className="w-3 h-3 mr-1" />
//                   {metric.change}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Testimonial */}
//           {caseStudy.results.testimonial && (
//             <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
//               <div className="text-4xl text-blue-600 mb-4">"</div>
//               <p className="text-xl text-gray-800 italic mb-6 leading-relaxed">
//                 {caseStudy.results.testimonial.quote}
//               </p>
//               <div className="flex items-center">
//                 <div>
//                   <div className="font-bold text-gray-900">
//                     {caseStudy.results.testimonial.author}
//                   </div>
//                   <div className="text-gray-600 text-sm">
//                     {caseStudy.results.testimonial.role}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
        
//       {/* CTA Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
//         <div className="bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl p-8 text-center text-white">
//           <h3 className="text-2xl font-bold bricolage mb-3">
//             Ready to Achieve Similar Results?
//           </h3>
//           <p className="text-base mb-6 opacity-90">
//             See how Visble can transform your AI search visibility
//           </p>
//           <CalendlyButton variant="case-study" />
//         </div>
//       </section>
//     </div>
//   );
// }