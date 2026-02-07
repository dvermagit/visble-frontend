// import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/case-studies';
// import type { Metadata } from 'next';

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
//     return {
//       title: 'Case Study Not Found',
//     };
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
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Back Button */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
//         <Link href="/#case-studies" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back to Case Studies
//         </Link>
//       </div>

//       {/* Hero Section */}
//       <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
//           <div className="p-8 md:p-12">
//             {/* Company Info */}
//             <div className="flex items-center mb-8">
//               <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mr-6 overflow-hidden p-3">
//                 {caseStudy.avatar ? (
//                   <Image 
//                     src={caseStudy.avatar} 
//                     alt={`${caseStudy.company} logo`}
//                     width={80}
//                     height={80}
//                     className="object-contain"
//                   />
//                 ) : (
//                   <span className="text-2xl font-bold text-gray-700 bricolage">
//                     {caseStudy.company[0]}
//                   </span>
//                 )}
//               </div>
//               <div>
//                 <h1 className="text-3xl md:text-4xl font-bold bricolage text-gray-900">
//                   {caseStudy.company}
//                 </h1>
//                 <p className="text-gray-600 mt-1">{caseStudy.location}</p>
//               </div>
//             </div>

//             {/* Title */}
//             <h2 className="text-4xl md:text-5xl font-bold bricolage text-gray-900 mb-6">
//               {caseStudy.title}
//             </h2>

//             {/* Meta Info */}
//             <div className="flex flex-wrap gap-6 mb-8">
//               <div>
//                 <div className="text-sm text-gray-500">Industry</div>
//                 <div className="font-semibold text-gray-900">{caseStudy.industry}</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-500">Company Size</div>
//                 <div className="font-semibold text-gray-900">{caseStudy.companySize}</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-500">Timeline</div>
//                 <div className="font-semibold text-gray-900">{caseStudy.timeline}</div>
//               </div>
//             </div>

//             {/* Tags */}
//             <div className="flex flex-wrap gap-2">
//               {caseStudy.tags.map((tag, index) => (
//                 <span 
//                   key={index}
//                   className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Challenge Section */}
//       <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
//           <h3 className="text-3xl font-bold bricolage text-gray-900 mb-6">
//             {caseStudy.challenge.title}
//           </h3>
//           <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//             {caseStudy.challenge.description}
//           </p>
          
//           <div className="space-y-4">
//             {caseStudy.challenge.painPoints.map((point, index) => (
//               <div key={index} className="flex items-start">
//                 <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
//                   <div className="w-2 h-2 rounded-full bg-red-500"></div>
//                 </div>
//                 <p className="text-gray-700">{point}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Solution Section */}
//       <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-lg p-8 md:p-12">
//           <h3 className="text-3xl font-bold bricolage text-gray-900 mb-6">
//             {caseStudy.solution.title}
//           </h3>
//           <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//             {caseStudy.solution.description}
//           </p>
          
//           <div className="grid md:grid-cols-2 gap-6">
//             {caseStudy.solution.strategies.map((strategy, index) => (
//               <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
//                 <div className="flex items-center mb-3">
//                   <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
//                   <h4 className="font-bold text-gray-900 bricolage">{strategy.name}</h4>
//                 </div>
//                 <p className="text-gray-600">{strategy.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Results Section */}
//       <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
//           <h3 className="text-3xl font-bold bricolage text-gray-900 mb-6">
//             {caseStudy.results.title}
//           </h3>
//           <p className="text-lg text-gray-700 mb-12 leading-relaxed">
//             {caseStudy.results.description}
//           </p>
          
//           {/* Metrics Grid */}
//           <div className="grid md:grid-cols-4 gap-6 mb-12">
//             {caseStudy.results.metrics.map((metric, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-5xl font-bold bricolage text-blue-600 mb-2">
//                   {metric.value}
//                 </div>
//                 <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
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
//       <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-xl p-12 text-center text-white">
//           <h3 className="text-3xl font-bold bricolage mb-4">
//             Ready to Achieve Similar Results?
//           </h3>
//           <p className="text-xl mb-8 opacity-90">
//             See how Visble can transform your AI search visibility
//           </p>
//           <Link href="/llms-txt-generator">
//             <Button 
//               size="lg"
//               className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg bricolage"
//             >
//               Get Started Today
//             </Button>
//           </Link>
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
//     return {
//       title: 'Case Study Not Found',
//     };
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
//     <div className="min-h-screen bg-white">
//       {/* Back Button */}
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
//         <Link href="/#case-studies" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors">
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back to Case Studies
//         </Link>
//       </div>

//       {/* Hero Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Main Title First */}
//         <h1 className="text-4xl md:text-5xl font-bold bricolage text-gray-900 mb-6 leading-tight">
//           {caseStudy.title}
//         </h1>

//         {/* Company Info - Small and Subtle */}
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
//             <div className="text-sm font-medium text-gray-900">{caseStudy.company}</div>
//             <div className="text-xs text-gray-500">{caseStudy.location} • {caseStudy.industry}</div>
//           </div>
//           <div className="ml-auto flex items-center gap-4 text-xs text-gray-500">
//             <div>
//               <span className="font-medium text-gray-700">{caseStudy.timeline}</span> timeline
//             </div>
//           </div>
//         </div>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 mb-8">
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

//       {/* Solution Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">
//           {caseStudy.solution.title}
//         </h3>
//         <p className="text-base text-gray-700 mb-6 leading-relaxed">
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
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">
//           {caseStudy.results.title}
//         </h3>
//         <p className="text-base text-gray-700 mb-8 leading-relaxed">
//           {caseStudy.results.description}
//         </p>
        
//         {/* Metrics Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//           {caseStudy.results.metrics.map((metric, index) => (
//             <div key={index} className="text-center">
//               <div className="text-3xl font-bold bricolage text-blue-600 mb-1">
//                 {metric.value}
//               </div>
//               <div className="text-xs text-gray-600 mb-1">{metric.label}</div>
//               <div className="text-xs text-green-600 font-medium flex items-center justify-center">
//                 <TrendingUp className="w-3 h-3 mr-1" />
//                 {metric.change}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Testimonial */}
//         {caseStudy.results.testimonial && (
//           <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600">
//             <p className="text-base text-gray-800 mb-4 leading-relaxed">
//               "{caseStudy.results.testimonial.quote}"
//             </p>
//             <div className="flex items-center">
//               <div>
//                 <div className="font-semibold text-gray-900 text-sm">
//                   {caseStudy.results.testimonial.author}
//                 </div>
//                 <div className="text-gray-600 text-xs">
//                   {caseStudy.results.testimonial.role}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </section>

//       {/* CTA Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
//           <h3 className="text-2xl font-bold bricolage mb-3">
//             Ready to Achieve Similar Results?
//           </h3>
//           <p className="text-base mb-6 opacity-90">
//             See how Visble can transform your AI search visibility
//           </p>
//           <Link href="/llms-txt-generator">
//             <Button 
//               size="lg"
//               className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-base bricolage"
//             >
//               Get Started Today
//             </Button>
//           </Link>
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
//     return {
//       title: 'Case Study Not Found',
//     };
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
//     <div className="min-h-screen bg-white">
//       {/* Back Button */}
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
//         <Link href="/#case-studies" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors">
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back to Case Studies
//         </Link>
//       </div>

//       {/* Hero Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Main Title First */}
//         <h1 className="text-4xl md:text-5xl font-bold bricolage text-gray-900 mb-6 leading-tight">
//           {caseStudy.title}
//         </h1>

//         {/* Company Info - Small and Subtle */}
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
//             <div className="text-sm font-medium text-gray-900">{caseStudy.company}</div>
//             <div className="text-xs text-gray-500">{caseStudy.location} • {caseStudy.industry}</div>
//           </div>
//           <div className="ml-auto flex items-center gap-4 text-xs text-gray-500">
//             <div>
//               <span className="font-medium text-gray-700">{caseStudy.timeline}</span> timeline
//             </div>
//           </div>
//         </div>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 mb-8">
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

//       {/* Solution Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">
//           {caseStudy.solution.title}
//         </h3>
//         <p className="text-base text-gray-700 mb-6 leading-relaxed">
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
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">
//           {caseStudy.results.title}
//         </h3>
//         <p className="text-base text-gray-700 mb-8 leading-relaxed">
//           {caseStudy.results.description}
//         </p>

//         {/* Progress Graph */}
//         <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
//           <div className="flex items-center justify-between mb-4">
//             <h4 className="text-sm font-semibold text-gray-900">Source Mentions Over Time</h4>
//             <div className="text-xs text-gray-500">{caseStudy.timeline}</div>
//           </div>
          
//           {/* Graph Container */}
//           <div className="relative h-64 bg-white rounded-lg p-4">
//             {/* Y-axis labels */}
//             <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 pr-2">
//               <span>100</span>
//               <span>75</span>
//               <span>50</span>
//               <span>25</span>
//               <span>0</span>
//             </div>
            
//             {/* Grid lines */}
//             <div className="absolute left-10 right-4 top-4 bottom-8">
//               <div className="relative h-full">
//                 {[0, 1, 2, 3, 4].map((i) => (
//                   <div 
//                     key={i} 
//                     className="absolute w-full border-b border-gray-200"
//                     style={{ top: `${i * 25}%` }}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Graph line and area */}
//             <svg 
//               className="absolute left-10 right-4 top-4 bottom-8" 
//               style={{ width: 'calc(100% - 3.5rem)', height: 'calc(100% - 3rem)' }}
//               preserveAspectRatio="none"
//               viewBox="0 0 100 100"
//             >
//               {/* Gradient for area fill */}
//               <defs>
//                 <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                   <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
//                   <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
//                 </linearGradient>
//               </defs>
              
//               {/* Area under the curve */}
//               <path
//                 d="M 0 100 L 0 95 C 20 90, 30 85, 40 75 C 50 65, 60 50, 70 35 C 80 20, 90 10, 100 5 L 100 100 Z"
//                 fill="url(#areaGradient)"
//               />
              
//               {/* Main line */}
//               <path
//                 d="M 0 95 C 20 90, 30 85, 40 75 C 50 65, 60 50, 70 35 C 80 20, 90 10, 100 5"
//                 fill="none"
//                 stroke="#3B82F6"
//                 strokeWidth="2"
//                 vectorEffect="non-scaling-stroke"
//               />
              
//               {/* Data points */}
//               {[
//                 { x: 0, y: 95 },
//                 { x: 25, y: 85 },
//                 { x: 50, y: 65 },
//                 { x: 75, y: 30 },
//                 { x: 100, y: 5 }
//               ].map((point, i) => (
//                 <circle
//                   key={i}
//                   cx={point.x}
//                   cy={point.y}
//                   r="2"
//                   fill="#3B82F6"
//                   vectorEffect="non-scaling-stroke"
//                 />
//               ))}
//             </svg>

//             {/* X-axis labels */}
//             <div className="absolute left-10 right-4 bottom-0 flex justify-between text-xs text-gray-500">
//               <span>Start</span>
//               <span>Week 2</span>
//               <span>Week 4</span>
//               <span>Week 6</span>
//               <span>End</span>
//             </div>
//           </div>

//           {/* Legend */}
//           <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-600">
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 rounded-full bg-blue-600"></div>
//               <span>Source Mentions Growth</span>
//             </div>
//           </div>
//         </div>
        
//         {/* Metrics Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//           {caseStudy.results.metrics.map((metric, index) => (
//             <div key={index} className="text-center">
//               <div className="text-3xl font-bold bricolage text-blue-600 mb-1">
//                 {metric.value}
//               </div>
//               <div className="text-xs text-gray-600 mb-1">{metric.label}</div>
//               <div className="text-xs text-green-600 font-medium flex items-center justify-center">
//                 <TrendingUp className="w-3 h-3 mr-1" />
//                 {metric.change}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Testimonial */}
//         {caseStudy.results.testimonial && (
//           <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600">
//             <p className="text-base text-gray-800 mb-4 leading-relaxed">
//               "{caseStudy.results.testimonial.quote}"
//             </p>
//             <div className="flex items-center">
//               <div>
//                 <div className="font-semibold text-gray-900 text-sm">
//                   {caseStudy.results.testimonial.author}
//                 </div>
//                 <div className="text-gray-600 text-xs">
//                   {caseStudy.results.testimonial.role}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </section>

//       {/* CTA Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
//           <h3 className="text-2xl font-bold bricolage mb-3">
//             Ready to Achieve Similar Results?
//           </h3>
//           <p className="text-base mb-6 opacity-90">
//             See how Visble can transform your AI search visibility
//           </p>
//           <Link href="/llms-txt-generator">
//             <Button 
//               size="lg"
//               className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-base bricolage"
//             >
//               Get Started Today
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

// 'use client';

// import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react';
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/case-studies';

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// export default function CaseStudyPage({ params }: PageProps) {
//   const caseStudy = getCaseStudyBySlug(params.slug);
//   const [hoveredPoint, setHoveredPoint] = useState<{ type: string; index: number } | null>(null);

//   if (!caseStudy) {
//     notFound();
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Back Button */}
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
//         <Link href="/#case-studies" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors">
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back to Case Studies
//         </Link>
//       </div>

//       {/* Hero Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Main Title First */}
//         <h1 className="text-4xl md:text-5xl font-bold bricolage text-gray-900 mb-6 leading-tight">
//           {caseStudy.title}
//         </h1>

//         {/* Company Info - Small and Subtle */}
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
//             <div className="text-sm font-medium text-gray-900">{caseStudy.company}</div>
//             <div className="text-xs text-gray-500">{caseStudy.location} • {caseStudy.industry}</div>
//           </div>
//           <div className="ml-auto flex items-center gap-4 text-xs text-gray-500">
//             <div>
//               <span className="font-medium text-gray-700">{caseStudy.timeline}</span> timeline
//             </div>
//           </div>
//         </div>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 mb-8">
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

//       {/* Solution Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">
//           {caseStudy.solution.title}
//         </h3>
//         <p className="text-base text-gray-700 mb-6 leading-relaxed">
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
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">
//           {caseStudy.results.title}
//         </h3>
//         <p className="text-base text-gray-700 mb-8 leading-relaxed">
//           {caseStudy.results.description}
//         </p>

//         {/* Enhanced Progress Graph */}
//         <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl p-6 mb-8">
//           <div className="flex items-center justify-between mb-6">
//             <h4 className="text-sm font-semibold text-gray-900">Progress Over Time</h4>
//             <div className="text-xs text-gray-500">{caseStudy.timeline}</div>
//           </div>
          
//           {/* Graph Container */}
//           <div className="relative h-80 bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/50">
//             {/* Y-axis percentage labels */}
//             <div className="absolute left-2 top-6 bottom-12 flex flex-col justify-between text-xs text-gray-400 font-medium">
//               <span>100%</span>
//               <span>75%</span>
//               <span>50%</span>
//               <span>25%</span>
//               <span>0%</span>
//             </div>

//             {/* Grid lines */}
//             <div className="absolute left-14 right-6 top-6 bottom-12">
//               <div className="relative h-full w-full">
//                 {[0, 1, 2, 3, 4].map((i) => (
//                   <div 
//                     key={i} 
//                     className="absolute w-full border-b border-gray-200/60"
//                     style={{ top: `${i * 25}%` }}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Graph lines */}
//             <svg 
//               className="absolute left-14 right-6 top-6 bottom-12" 
//               style={{ width: 'calc(100% - 5rem)', height: 'calc(100% - 4.5rem)' }}
//               preserveAspectRatio="none"
//               viewBox="0 0 100 100"
//             >
//               <defs>
//                 {/* Gradient fills for areas */}
//                 <linearGradient id={`primaryGradient-${caseStudy.slug}`} x1="0%" y1="0%" x2="0%" y2="100%">
//                   <stop offset="0%" stopColor="#6366F1" stopOpacity="0.25" />
//                   <stop offset="100%" stopColor="#6366F1" stopOpacity="0.03" />
//                 </linearGradient>
                
//                 <linearGradient id={`secondaryGradient-${caseStudy.slug}`} x1="0%" y1="0%" x2="0%" y2="100%">
//                   <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.25" />
//                   <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.03" />
//                 </linearGradient>
                
//                 <linearGradient id={`accentGradient-${caseStudy.slug}`} x1="0%" y1="0%" x2="0%" y2="100%">
//                   <stop offset="0%" stopColor="#A855F7" stopOpacity="0.25" />
//                   <stop offset="100%" stopColor="#A855F7" stopOpacity="0.03" />
//                 </linearGradient>
//               </defs>
              
//               {(() => {
//                 const points = caseStudy.graphData.map((d, i) => ({
//                   x: (i / (caseStudy.graphData.length - 1)) * 100,
//                   y: 100 - d.value
//                 }));
                
//                 // Generate additional lines with variations (simulating multiple metrics)
//                 const secondaryPoints = points.map((p, i) => ({
//                   x: p.x,
//                   y: Math.max(5, p.y + 5 + Math.sin(i * 0.8) * 3)
//                 }));
                
//                 const accentPoints = points.map((p, i) => ({
//                   x: p.x,
//                   y: Math.max(2, p.y + 12 + Math.cos(i * 0.6) * 4)
//                 }));
                
//                 const createSmoothPath = (pts: { x: number; y: number }[]) => {
//                   if (pts.length < 2) return '';
//                   let path = `M ${pts[0].x} ${pts[0].y}`;
//                   for (let i = 0; i < pts.length - 1; i++) {
//                     const curr = pts[i];
//                     const next = pts[i + 1];
//                     const prev = pts[i - 1] || curr;
//                     const afterNext = pts[i + 2] || next;
//                     const cp1x = curr.x + (next.x - prev.x) / 6;
//                     const cp1y = curr.y + (next.y - prev.y) / 6;
//                     const cp2x = next.x - (afterNext.x - curr.x) / 6;
//                     const cp2y = next.y - (afterNext.y - curr.y) / 6;
//                     path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
//                   }
//                   return path;
//                 };
                
//                 const primaryPath = createSmoothPath(points);
//                 const secondaryPath = createSmoothPath(secondaryPoints);
//                 const accentPath = createSmoothPath(accentPoints);
                
//                 return (
//                   <g>
//                     {/* Accent line (top) with fill */}
//                     <path
//                       d={`${accentPath} L 100 100 L 0 100 Z`}
//                       fill={`url(#accentGradient-${caseStudy.slug})`}
//                     />
//                     <path
//                       d={accentPath}
//                       fill="none"
//                       stroke="#A855F7"
//                       strokeWidth="2.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       vectorEffect="non-scaling-stroke"
//                       opacity="0.75"
//                     />
                    
//                     {/* Secondary line (middle) with fill */}
//                     <path
//                       d={`${secondaryPath} L 100 100 L 0 100 Z`}
//                       fill={`url(#secondaryGradient-${caseStudy.slug})`}
//                     />
//                     <path
//                       d={secondaryPath}
//                       fill="none"
//                       stroke="#8B5CF6"
//                       strokeWidth="2.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       vectorEffect="non-scaling-stroke"
//                       opacity="0.85"
//                     />
                    
//                     {/* Primary line (main) with fill */}
//                     <path
//                       d={`${primaryPath} L 100 100 L 0 100 Z`}
//                       fill={`url(#primaryGradient-${caseStudy.slug})`}
//                     />
//                     <path
//                       d={primaryPath}
//                       fill="none"
//                       stroke="#6366F1"
//                       strokeWidth="3"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       vectorEffect="non-scaling-stroke"
//                     />
                    
//                     {/* Data points on primary line - point sized */}
//                     {points.map((point, i) => (
//                       <g key={i}>
//                         {/* Invisible larger circle for easier hover */}
//                         <circle
//                           cx={point.x}
//                           cy={point.y}
//                           r="10"
//                           fill="transparent"
//                           className="cursor-pointer"
//                           onMouseEnter={() => setHoveredPoint({ type: 'primary', index: i })}
//                           onMouseLeave={() => setHoveredPoint(null)}
//                         />
//                         {/* Visible point */}
//                         <circle
//                           cx={point.x}
//                           cy={point.y}
//                           r="1.5"
//                           fill="#FFFFFF"
//                           stroke="#6366F1"
//                           strokeWidth="1.5"
//                           vectorEffect="non-scaling-stroke"
//                           className="pointer-events-none"
//                         />
//                       </g>
//                     ))}
                    
//                     {/* Data points on secondary line */}
//                     {secondaryPoints.map((point, i) => (
//                       <g key={`sec-${i}`}>
//                         <circle
//                           cx={point.x}
//                           cy={point.y}
//                           r="10"
//                           fill="transparent"
//                           className="cursor-pointer"
//                           onMouseEnter={() => setHoveredPoint({ type: 'secondary', index: i })}
//                           onMouseLeave={() => setHoveredPoint(null)}
//                         />
//                         <circle
//                           cx={point.x}
//                           cy={point.y}
//                           r="1.5"
//                           fill="#FFFFFF"
//                           stroke="#8B5CF6"
//                           strokeWidth="1.5"
//                           vectorEffect="non-scaling-stroke"
//                           opacity="0.9"
//                           className="pointer-events-none"
//                         />
//                       </g>
//                     ))}
                    
//                     {/* Data points on accent line */}
//                     {accentPoints.map((point, i) => (
//                       <g key={`acc-${i}`}>
//                         <circle
//                           cx={point.x}
//                           cy={point.y}
//                           r="10"
//                           fill="transparent"
//                           className="cursor-pointer"
//                           onMouseEnter={() => setHoveredPoint({ type: 'accent', index: i })}
//                           onMouseLeave={() => setHoveredPoint(null)}
//                         />
//                         <circle
//                           cx={point.x}
//                           cy={point.y}
//                           r="1.5"
//                           fill="#FFFFFF"
//                           stroke="#A855F7"
//                           strokeWidth="1.5"
//                           vectorEffect="non-scaling-stroke"
//                           opacity="0.9"
//                           className="pointer-events-none"
//                         />
//                       </g>
//                     ))}
//                   </g>
//                 );
//               })()}
//             </svg>

//             {/* Tooltips for data points */}
//             {hoveredPoint && caseStudy.graphData[hoveredPoint.index] && (() => {
//               const data = caseStudy.graphData[hoveredPoint.index];
//               const citationRate = data.value;
//               const aiOverview = Math.round(citationRate * 0.6);
//               const organicGrowth = Math.round(citationRate * 0.45);
              
//               let yPosition = 100 - citationRate;
//               let label = '';
//               let value = '';
//               let colorClass = '';
//               let colorDot = '';
              
//               if (hoveredPoint.type === 'primary') {
//                 label = 'Citation Rate';
//                 value = `${citationRate}%`;
//                 colorClass = 'text-indigo-600';
//                 colorDot = 'bg-indigo-500';
//               } else if (hoveredPoint.type === 'secondary') {
//                 yPosition = 100 - (citationRate + 5 + Math.sin(hoveredPoint.index * 0.8) * 3);
//                 label = 'AI Overview';
//                 value = `${aiOverview}%`;
//                 colorClass = 'text-violet-600';
//                 colorDot = 'bg-violet-500';
//               } else {
//                 yPosition = 100 - (citationRate + 12 + Math.cos(hoveredPoint.index * 0.6) * 4);
//                 label = 'Organic Growth';
//                 value = `${organicGrowth}%`;
//                 colorClass = 'text-purple-600';
//                 colorDot = 'bg-purple-500';
//               }
              
//               return (
//                 <div
//                   className="absolute bg-white rounded-lg shadow-xl p-3 border border-gray-200 z-50 pointer-events-none"
//                   style={{
//                     left: `${14 + (hoveredPoint.index / (caseStudy.graphData.length - 1)) * (100 - 19)}%`,
//                     top: `${6 + yPosition * 0.68}%`,
//                     transform: 'translate(-50%, -120%)'
//                   }}
//                 >
//                   <div className="text-xs font-semibold text-gray-900 mb-1">{data.week}</div>
//                   <div className="flex items-center gap-2 text-xs whitespace-nowrap">
//                     <div className={`w-2 h-2 rounded-full ${colorDot}`}></div>
//                     <span className="text-gray-600">{label}:</span>
//                     <span className={`font-bold ${colorClass}`}>{value}</span>
//                   </div>
//                 </div>
//               );
//             })()}

//             {/* X-axis labels */}
//             <div className="absolute left-14 right-6 bottom-2 flex justify-between text-xs text-gray-500 font-medium">
//               {caseStudy.graphData.map((d, i) => (
//                 <span key={i} className="text-center">
//                   {d.week}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Legend with metrics */}
//           <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
//             <div className="bg-white/60 rounded-lg p-3">
//               <div className="flex items-center gap-2 mb-1">
//                 <div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
//                 <span className="text-gray-600 text-xs font-medium">Citation Rate</span>
//               </div>
//               <div className="text-lg font-bold text-gray-900">
//                 {caseStudy.graphData[caseStudy.graphData.length - 1].label}
//               </div>
//             </div>
//             <div className="bg-white/60 rounded-lg p-3">
//               <div className="flex items-center gap-2 mb-1">
//                 <div className="w-2.5 h-2.5 rounded-full bg-violet-500"></div>
//                 <span className="text-gray-600 text-xs font-medium">AI Overview Impressions</span>
//               </div>
//               <div className="text-lg font-bold text-gray-900">
//                 {Math.round(parseInt(caseStudy.graphData[caseStudy.graphData.length - 1].label) * 0.6)}%
//               </div>
//             </div>
//             <div className="bg-white/60 rounded-lg p-3">
//               <div className="flex items-center gap-2 mb-1">
//                 <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
//                 <span className="text-gray-600 text-xs font-medium">Organic Growth</span>
//               </div>
//               <div className="text-lg font-bold text-gray-900">
//                 {Math.round(parseInt(caseStudy.graphData[caseStudy.graphData.length - 1].label) * 0.45)}%
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Metrics Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//           {caseStudy.results.metrics.map((metric, index) => (
//             <div key={index} className="text-center">
//               <div className="text-3xl font-bold bricolage text-purple-600 mb-1">
//                 {metric.value}
//               </div>
//               <div className="text-xs text-gray-600 mb-1">{metric.label}</div>
//               <div className="text-xs text-green-600 font-medium flex items-center justify-center">
//                 <TrendingUp className="w-3 h-3 mr-1" />
//                 {metric.change}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Testimonial */}
//         {caseStudy.results.testimonial && (
//           <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-purple-600">
//             <p className="text-base text-gray-800 mb-4 leading-relaxed">
//               "{caseStudy.results.testimonial.quote}"
//             </p>
//             <div className="flex items-center">
//               <div>
//                 <div className="font-semibold text-gray-900 text-sm">
//                   {caseStudy.results.testimonial.author}
//                 </div>
//                 <div className="text-gray-600 text-xs">
//                   {caseStudy.results.testimonial.role}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </section>

//       {/* CTA Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
//           <h3 className="text-2xl font-bold bricolage mb-3">
//             Ready to Achieve Similar Results?
//           </h3>
//           <p className="text-base mb-6 opacity-90">
//             See how Visble can transform your AI search visibility
//           </p>
//           <Link href="/llms-txt-generator">
//             <Button 
//               size="lg"
//               className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-base bricolage"
//             >
//               Get Started Today
//             </Button>
//           </Link>
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

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// // Add shimmer animation to globals.css or tailwind.config.js
// // @keyframes shimmer {
// //   0% { transform: translateX(-100%); }
// //   100% { transform: translateX(100%); }
// // }
// // .animate-shimmer { animation: shimmer 2s infinite; }

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
//     return {
//       title: 'Case Study Not Found',
//     };
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
//     <div className="min-h-screen bg-white">
//       {/* Back Button */}
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
//         <Link href="/#case-studies" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors">
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back to Case Studies
//         </Link>
//       </div>

//       {/* Hero Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Main Title First */}
//         <h1 className="text-4xl md:text-5xl font-bold bricolage text-gray-900 mb-6 leading-tight">
//           {caseStudy.title}
//         </h1>

//         {/* Company Info - Small and Subtle */}
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
//             <div className="text-sm font-medium text-gray-900">{caseStudy.company}</div>
//             <div className="text-xs text-gray-500">{caseStudy.location} • {caseStudy.industry}</div>
//           </div>
//           <div className="ml-auto flex items-center gap-4 text-xs text-gray-500">
//             <div>
//               <span className="font-medium text-gray-700">{caseStudy.timeline}</span> timeline
//             </div>
//           </div>
//         </div>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 mb-8">
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

//       {/* Solution Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">
//           {caseStudy.solution.title}
//         </h3>
//         <p className="text-base text-gray-700 mb-6 leading-relaxed">
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
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">
//           {caseStudy.results.title}
//         </h3>
//         <p className="text-base text-gray-700 mb-8 leading-relaxed">
//           {caseStudy.results.description}
//         </p>

//         {/* Modern Line Graph */}
//         <div className="relative overflow-hidden bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-2xl p-8 mb-8">
//           {/* Subtle dot pattern background */}
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute inset-0" style={{
//               backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
//               backgroundSize: '32px 32px'
//             }}></div>
//           </div>

//           <div className="relative z-10">
//             <div className="flex items-center justify-between mb-6">
//               <h4 className="text-lg font-bold text-white bricolage">Growth Journey</h4>
//               <div className="text-sm text-white/80">{caseStudy.timeline}</div>
//             </div>
            
//             {/* Graph Container */}
//             <div className="relative h-64 bg-white/10 backdrop-blur-md rounded-xl p-6">
//               {/* Subtle grid lines */}
//               <div className="absolute inset-6 flex flex-col justify-between">
//                 {[0, 1, 2, 3, 4].map((i) => (
//                   <div key={i} className="w-full border-b border-white/10"></div>
//                 ))}
//               </div>

//               {/* SVG Graph */}
//               <svg 
//                 className="absolute inset-6" 
//                 style={{ width: 'calc(100% - 3rem)', height: 'calc(100% - 3rem)' }}
//                 preserveAspectRatio="none"
//                 viewBox="0 0 100 100"
//               >
//                 <defs>
//                   {/* Gradient for area fill */}
//                   <linearGradient id={`lineGradient-${caseStudy.slug}`} x1="0%" y1="0%" x2="0%" y2="100%">
//                     <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
//                     <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
//                   </linearGradient>
                  
//                   {/* Glow filter */}
//                   <filter id={`lineGlow-${caseStudy.slug}`} x="-50%" y="-50%" width="200%" height="200%">
//                     <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
//                   </filter>
//                 </defs>
                
//                 {(() => {
//                   const points = caseStudy.graphData.map((d, i) => ({
//                     x: (i / (caseStudy.graphData.length - 1)) * 100,
//                     y: 100 - d.value
//                   }));
                  
//                   // Create smooth bezier curve
//                   let pathD = `M ${points[0].x} ${points[0].y}`;
                  
//                   for (let i = 0; i < points.length - 1; i++) {
//                     const curr = points[i];
//                     const next = points[i + 1];
//                     const midX = (curr.x + next.x) / 2;
                    
//                     pathD += ` C ${midX} ${curr.y}, ${midX} ${next.y}, ${next.x} ${next.y}`;
//                   }
                  
//                   const areaD = `${pathD} L 100 100 L 0 100 Z`;
                  
//                   return (
//                     <>
//                       {/* Glow effect under line */}
//                       <path
//                         d={pathD}
//                         fill="none"
//                         stroke="#FFFFFF"
//                         strokeWidth="6"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         opacity="0.2"
//                         filter={`url(#lineGlow-${caseStudy.slug})`}
//                         vectorEffect="non-scaling-stroke"
//                       />
                      
//                       {/* Area fill */}
//                       <path
//                         d={areaD}
//                         fill={`url(#lineGradient-${caseStudy.slug})`}
//                       />
                      
//                       {/* Main line */}
//                       <path
//                         d={pathD}
//                         fill="none"
//                         stroke="#FFFFFF"
//                         strokeWidth="3"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         vectorEffect="non-scaling-stroke"
//                       />
                      
//                       {/* Data points */}
//                       {points.map((point, i) => (
//                         <g key={i}>
//                           {/* Outer glow circle */}
//                           <circle
//                             cx={point.x}
//                             cy={point.y}
//                             r="5"
//                             fill="#FFFFFF"
//                             opacity="0.3"
//                             vectorEffect="non-scaling-stroke"
//                           />
//                           {/* Main point */}
//                           <circle
//                             cx={point.x}
//                             cy={point.y}
//                             r="3"
//                             fill="#FFFFFF"
//                             vectorEffect="non-scaling-stroke"
//                           />
//                         </g>
//                       ))}
//                     </>
//                   );
//                 })()}
//               </svg>

//               {/* X-axis labels */}
//               <div className="absolute inset-x-6 bottom-0 flex justify-between text-xs text-white/70 font-medium">
//                 {caseStudy.graphData.map((d, i) => (
//                   <span key={i}>{d.week}</span>
//                 ))}
//               </div>
//             </div>

//             {/* Progress summary */}
          //   <div className="mt-6 pt-6 border-t border-white/20">
          //     <div className="flex items-center justify-center gap-8">
          //       <div className="text-center">
          //         <div className="text-2xl font-bold text-white bricolage">
          //           {caseStudy.graphData[0].label}
          //         </div>
          //         <div className="text-xs text-white/70 mt-1">Start</div>
          //       </div>
          //       <div className="text-white/50 text-xl">→</div>
          //       <div className="text-center">
          //         <div className="text-2xl font-bold text-white bricolage">
          //           {caseStudy.graphData[caseStudy.graphData.length - 1].label}
          //         </div>
          //         <div className="text-xs text-white/70 mt-1">Achieved</div>
          //       </div>
          //     </div>
          //   </div>
          // </div>
//         </div>
        
//         {/* Metrics Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//           {caseStudy.results.metrics.map((metric, index) => (
//             <div key={index} className="text-center">
//               <div className="text-3xl font-bold bricolage text-purple-600 mb-1">
//                 {metric.value}
//               </div>
//               <div className="text-xs text-gray-600 mb-1">{metric.label}</div>
//               <div className="text-xs text-green-600 font-medium flex items-center justify-center">
//                 <TrendingUp className="w-3 h-3 mr-1" />
//                 {metric.change}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Testimonial */}
//         {caseStudy.results.testimonial && (
//           <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-purple-600">
//             <p className="text-base text-gray-800 mb-4 leading-relaxed">
//               "{caseStudy.results.testimonial.quote}"
//             </p>
//             <div className="flex items-center">
//               <div>
//                 <div className="font-semibold text-gray-900 text-sm">
//                   {caseStudy.results.testimonial.author}
//                 </div>
//                 <div className="text-gray-600 text-xs">
//                   {caseStudy.results.testimonial.role}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </section>

//       {/* CTA Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
//           <h3 className="text-2xl font-bold bricolage mb-3">
//             Ready to Achieve Similar Results?
//           </h3>
//           <p className="text-base mb-6 opacity-90">
//             See how Visble can transform your AI search visibility
//           </p>
//           <Link href="/llms-txt-generator">
//             <Button 
//               size="lg"
//               className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-base bricolage"
//             >
//               Get Started Today
//             </Button>
//           </Link>
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

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// // Add shimmer animation to globals.css or tailwind.config.js
// // @keyframes shimmer {
// //   0% { transform: translateX(-100%); }
// //   100% { transform: translateX(100%); }
// // }
// // .animate-shimmer { animation: shimmer 2s infinite; }

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
//     return {
//       title: 'Case Study Not Found',
//     };
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
//     <div className="min-h-screen bg-white">
//       {/* Back Button */}
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
//         <Link href="/#case-studies" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors">
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Back to Case Studies
//         </Link>
//       </div>

//       {/* Hero Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Main Title First */}
//         <h1 className="text-4xl md:text-5xl font-bold bricolage text-gray-900 mb-6 leading-tight">
//           {caseStudy.title}
//         </h1>

//         {/* Company Info - Small and Subtle */}
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
//             <div className="text-sm font-medium text-gray-900">{caseStudy.company}</div>
//             <div className="text-xs text-gray-500">{caseStudy.location} • {caseStudy.industry}</div>
//           </div>
//           <div className="ml-auto flex items-center gap-4 text-xs text-gray-500">
//             <div>
//               <span className="font-medium text-gray-700">{caseStudy.timeline}</span> timeline
//             </div>
//           </div>
//         </div>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 mb-8">
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

      // {/* Challenge Section */}
      // <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      //   <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">
      //     {caseStudy.challenge.title}
      //   </h3>
      //   <p className="text-base text-gray-700 mb-6 leading-relaxed">
      //     {caseStudy.challenge.description}
      //   </p>
        
      //   <div className="space-y-3 bg-gray-50 rounded-lg p-6">
      //     {caseStudy.challenge.painPoints.map((point, index) => (
      //       <div key={index} className="flex items-start">
      //         <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
      //           <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
      //         </div>
      //         <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
      //       </div>
      //     ))}
      //   </div>
      // </section>

      // {/* Solution Section */}
      // <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      //   <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">
      //     {caseStudy.solution.title}
      //   </h3>
      //   <p className="text-base text-gray-700 mb-6 leading-relaxed">
      //     {caseStudy.solution.description}
      //   </p>
        
      //   <div className="grid md:grid-cols-2 gap-4">
      //     {caseStudy.solution.strategies.map((strategy, index) => (
      //       <div key={index} className="bg-blue-50 rounded-lg p-5">
      //         <div className="flex items-start mb-2">
      //           <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
      //           <h4 className="font-semibold text-gray-900 text-sm">{strategy.name}</h4>
      //         </div>
      //         <p className="text-sm text-gray-600 leading-relaxed">{strategy.description}</p>
      //       </div>
      //     ))}
      //   </div>
      // </section>

//       {/* Results Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="flex items-end justify-between mb-6">
//           <div>
//             <h3 className="text-2xl font-bold bricolage text-gray-900 tracking-tight">Impact Analysis</h3>
//             <p className="text-sm text-gray-500">Performance across core AI visibility metrics</p>
//           </div>
//           <div className="flex gap-4">
//             <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
//               <div className="w-2.5 h-2.5 rounded-full bg-black" /> Source Mentions
//             </div>
//             <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
//               <div className="w-2.5 h-2.5 rounded-full bg-[#4F46E5]" /> Brand Queries
//             </div>
//           </div>
//         </div>

//         {/* Graph Container with Lavender Gradient */}
//         <div className="relative bg-gradient-to-br from-[#E0E7FF] via-[#F3E8FF] to-white rounded-3xl border border-blue-100 p-8 pt-12 shadow-sm overflow-visible mb-8">
          
//           {/* Y-Axis Labels */}
//           <div className="absolute left-6 top-12 bottom-20 flex flex-col justify-between text-[10px] font-bold text-gray-400/80">
//             <span>100</span>
//             <span>50</span>
//             <span>0</span>
//           </div>

//           {/* Horizontal Dashed Grid */}
//           <div className="absolute left-16 right-8 top-12 bottom-20 flex flex-col justify-between pointer-events-none">
//             <div className="w-full border-t border-dashed border-gray-300/40" />
//             <div className="w-full border-t border-dashed border-gray-300/40" />
//             <div className="w-full border-t border-gray-300/40" />
//           </div>

//           <div className="relative h-64 ml-8 mr-4">
//             <svg 
//               className="w-full h-full overflow-visible" 
//               viewBox="0 0 100 100" 
//               preserveAspectRatio="none"
//             >
//               {(() => {
//                 const data = caseStudy.graphData;
                
//                 // Get smooth bezier path
//                 const getSmoothPath = (pts: {x: number, y: number}[]) => {
//                   let d = `M ${pts[0].x} ${pts[0].y}`;
//                   for (let i = 0; i < pts.length - 1; i++) {
//                     const cp1x = pts[i].x + (pts[i+1].x - pts[i].x) / 2;
//                     d += ` C ${cp1x} ${pts[i].y}, ${cp1x} ${pts[i+1].y}, ${pts[i+1].x} ${pts[i+1].y}`;
//                   }
//                   return d;
//                 };

//                 // Source Mentions - Black line
//                 const sourceMentionPoints = data.map((d, i) => ({
//                   x: (i / (data.length - 1)) * 100,
//                   y: 100 - d.sourceMentions
//                 }));

//                 // Brand Queries - Indigo line  
//                 const brandQueryPoints = data.map((d, i) => ({
//                   x: (i / (data.length - 1)) * 100,
//                   y: 100 - d.brandQueries
//                 }));

//                 const graphLines = [
//                   { pts: brandQueryPoints, color: '#4F46E5', label: 'Brand Queries' },
//                   { pts: sourceMentionPoints, color: '#000000', label: 'Source Mentions' }
//                 ];

//                 return (
//                   <g>
//                     {graphLines.map((line, idx) => (
//                       <g key={idx}>
//                         {/* Line path */}
//                         <path 
//                           d={getSmoothPath(line.pts)} 
//                           fill="none" 
//                           stroke={line.color} 
//                           strokeWidth="3.5" 
//                           strokeLinecap="round" 
//                           vectorEffect="non-scaling-stroke" 
//                         />
//                         {/* Points - only show last point */}
//                         {line.pts.map((p, i) => {
//                           const isLast = i === line.pts.length - 1;
//                           if (!isLast) return null;
//                           return (
//                             <circle 
//                               key={i} 
//                               cx={p.x} 
//                               cy={p.y} 
//                               r="2.5" 
//                               fill={line.color} 
//                               stroke="white" 
//                               strokeWidth="1" 
//                               vectorEffect="non-scaling-stroke" 
//                             />
//                           );
//                         })}
//                       </g>
//                     ))}
//                   </g>
//                 );
//               })()}
//             </svg>
//           </div>

//           {/* X-Axis Labels */}
//           <div className="flex justify-between mt-8 ml-8 mr-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
//             {caseStudy.graphData.map((d, i) => (
//               <span key={i}>{d.week}</span>
//             ))}
//           </div>
//         </div>
        
//         {/* Metrics Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//           {caseStudy.results.metrics.map((metric, index) => (
//             <div key={index} className="text-center">
//               <div className="text-3xl font-bold bricolage text-purple-600 mb-1">
//                 {metric.value}
//               </div>
//               <div className="text-xs text-gray-600 mb-1">{metric.label}</div>
//               <div className="text-xs text-green-600 font-medium flex items-center justify-center">
//                 <TrendingUp className="w-3 h-3 mr-1" />
//                 {metric.change}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Testimonial */}
//         {caseStudy.results.testimonial && (
//           <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-purple-600">
//             <p className="text-base text-gray-800 mb-4 leading-relaxed">
//               "{caseStudy.results.testimonial.quote}"
//             </p>
//             <div className="flex items-center">
//               <div>
//                 <div className="font-semibold text-gray-900 text-sm">
//                   {caseStudy.results.testimonial.author}
//                 </div>
//                 <div className="text-gray-600 text-xs">
//                   {caseStudy.results.testimonial.role}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </section>

//       {/* CTA Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
//           <h3 className="text-2xl font-bold bricolage mb-3">
//             Ready to Achieve Similar Results?
//           </h3>
//           <p className="text-base mb-6 opacity-90">
//             See how Visble can transform your AI search visibility
//           </p>
//           <Link href="/llms-txt-generator">
//             <Button 
//               size="lg"
//               className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-base bricolage"
//             >
//               Get Started Today
//             </Button>
//           </Link>
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
//     <div className="min-h-screen bg-white">
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
//           {/* <div>
//             <h3 className="text-2xl font-bold bricolage text-gray-900">
//               Impact Analysis
//             </h3>
//             <p className="text-sm text-gray-500">
//               Performance across core AI visibility metrics
//             </p>
//           </div> */}

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

//         {/* Metrics Grid */}
//         {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8">
//           {caseStudy.results.metrics.map((metric, index) => (
//             <div key={index} className="text-center">
//               <div className="text-3xl font-bold bricolage text-purple-600 mb-1">
//                 {metric.value}
//               </div>
//               <div className="text-xs text-gray-600 mb-1">
//                 {metric.label}
//               </div>
//               <div className="text-xs text-green-600 font-medium flex items-center justify-center">
//                 <TrendingUp className="w-3 h-3 mr-1" />
//                 {metric.change}
//               </div>
//             </div>
//           ))}
//         </div> */}

//              {/* Challenge Section */}
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

//       {/* Solution Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">
//           {caseStudy.solution.title}
//         </h3>
//         <p className="text-base text-gray-700 mb-6 leading-relaxed">
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

//         {/* Testimonial
//         {caseStudy.results.testimonial && (
//           <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-purple-600">
//             <p className="text-base text-gray-800 mb-4 leading-relaxed">
//               “{caseStudy.results.testimonial.quote}”
//             </p>
//             <div className="text-sm font-semibold text-gray-900">
//               {caseStudy.results.testimonial.author}
//             </div>
//             <div className="text-xs text-gray-600">
//               {caseStudy.results.testimonial.role}
//             </div>
//           </div>
//         )} */}
//       </section>
        
//             {/* Results Section */}
//       <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
//           <h3 className="text-3xl font-bold bricolage text-gray-900 mb-6">
//             {caseStudy.results.title}
//           </h3>
//           <p className="text-lg text-gray-700 mb-12 leading-relaxed">
//             {caseStudy.results.description}
//           </p>
          
//           {/* Metrics Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8">
//           {caseStudy.results.metrics.map((metric, index) => (
//             <div key={index} className="text-center">
//               <div className="text-3xl font-bold bricolage text-purple-600 mb-1">
//                 {metric.value}
//               </div>
//               <div className="text-xs text-gray-600 mb-1">
//                 {metric.label}
//               </div>
//               <div className="text-xs text-green-600 font-medium flex items-center justify-center">
//                 <TrendingUp className="w-3 h-3 mr-1" />
//                 {metric.change}
//               </div>
//             </div>
//           ))}
//         </div>

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

//           <Link href="/llms-txt-generator">
//             <Button
//               size="lg"
//               className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 text-base bricolage"
//             >
//               Get Started Today
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/case-studies';
import type { Metadata } from 'next';
import InteractiveGraph from '@/components/InteractiveGraph';
import WorkflowTimeline from '@/components/WorkflowTimeline';
import CalendlyButton from '@/components/CalendlyButton';
import Header from '@/components/Header';

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all case studies
export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    return { title: 'Case Study Not Found' };
  }

  return {
    title: `${caseStudy.title} | ${caseStudy.company} Case Study`,
    description: caseStudy.shortDescription,
    openGraph: {
      title: `${caseStudy.title} | ${caseStudy.company}`,
      description: caseStudy.shortDescription,
      type: 'article',
      images: caseStudy.avatar ? [caseStudy.avatar] : [],
    },
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);

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
          <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden p-1.5">
            {caseStudy.avatar ? (
              <Image
                src={caseStudy.avatar}
                alt={`${caseStudy.company} logo`}
                width={40}
                height={40}
                className="object-contain"
              />
            ) : (
              <span className="text-sm font-semibold text-gray-600 bricolage">
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
          {caseStudy.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Results Section */}
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

      {/* Challenge Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">
          {caseStudy.challenge.title}
        </h3>
        <p className="text-base text-gray-700 mb-6 leading-relaxed">
          {caseStudy.challenge.description}
        </p>
        
        <div className="space-y-3 bg-gray-50 rounded-lg p-6">
          {caseStudy.challenge.painPoints.map((point, index) => (
            <div key={index} className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Section - Added after Challenge */}
      {caseStudy.workflow && (
        <WorkflowTimeline workflow={caseStudy.workflow} />
      )}

      {/* Solution Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h3 className="text-2xl font-bold bricolage text-gray-900 mb-4">
          {caseStudy.solution.title}
        </h3>
        <p className="text-base text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
          {caseStudy.solution.description}
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          {caseStudy.solution.strategies.map((strategy, index) => (
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
            {caseStudy.results.title}
          </h3>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            {caseStudy.results.description}
          </p>
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8">
            {caseStudy.results.metrics.map((metric, index) => (
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
          {caseStudy.results.testimonial && (
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