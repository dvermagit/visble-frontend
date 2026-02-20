// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowRight, TrendingUp } from 'lucide-react';
// import { getAllCaseStudies } from '@/lib/case-studies';
// import type { Metadata } from 'next';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// export const metadata: Metadata = {
//   title: 'Case Studies | Visble - AI Search Optimization Results',
//   description: 'Discover how companies achieved remarkable results with Visble\'s AI search optimization. Real case studies showing growth in source mentions, rankings, and brand visibility.',
// };

// export default function CaseStudiesPage() {
//   const caseStudies = getAllCaseStudies();

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       <Header/>
//       {/* Header */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
//         <div className="text-center max-w-3xl mx-auto">
//           <h1 className="text-5xl md:text-6xl font-bold bricolage text-gray-900 mb-6">
//             Case Studies
//           </h1>
//           <p className="text-xl text-gray-600">
//             Real results from companies that transformed their AI search visibility with Visble
//           </p>
//         </div>
//       </section>

//       {/* Case Studies Grid */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {caseStudies.map((study) => (
//             <Link 
//               key={study.slug} 
//               href={`/case-studies/${study.slug}`}
//               className="group"
//             >
//               <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
//                 {/* Card Header with gradient */}
//                 <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden p-2 shadow-sm">
//                       {study.avatar ? (
//                         <Image 
//                           src={study.avatar} 
//                           alt={`${study.company} logo`}
//                           width={48}
//                           height={48}
//                           className="object-contain"
//                         />
//                       ) : (
//                         <span className="text-lg font-bold text-gray-700 bricolage">
//                           {study.company[0]}
//                         </span>
//                       )}
//                     </div>
//                     <div>
//                       <div className="font-semibold text-gray-900">{study.company}</div>
//                       <div className="text-xs text-gray-500">{study.location}</div>
//                     </div>
//                   </div>
                  
//                   <h3 className="text-xl font-bold bricolage text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
//                     {study.title}
//                   </h3>
                  
//                   <p className="text-sm text-gray-600 line-clamp-2">
//                     {study.shortDescription}
//                   </p>
//                 </div>

//                 {/* Card Body */}
//                 <div className="p-6 flex-grow flex flex-col">
//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {study.tags.slice(0, 3).map((tag, index) => (
//                       <span 
//                         key={index}
//                         className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Key Metrics Preview */}
//                   <div className="grid grid-cols-2 gap-3 mb-4">
//                     {study.results.metrics.slice(0, 2).map((metric, index) => (
//                       <div key={index} className="bg-gray-50 rounded-lg p-3">
//                         <div className="text-2xl font-bold bricolage text-purple-600 mb-1">
//                           {metric.value}
//                         </div>
//                         <div className="text-xs text-gray-600">{metric.label}</div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Meta Info */}
//                   <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4 border-t border-gray-100">
//                     <div className="flex items-center gap-4">
//                       <span>{study.industry}</span>
//                       <span>•</span>
//                       <span>{study.timeline}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Card Footer */}
//                 <div className="px-6 pb-6">
//                   <div className="flex items-center text-indigo-600 font-medium text-sm group-hover:gap-3 gap-2 transition-all">
//                     Read Case Study
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
//         <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-center text-white shadow-xl">
//           <h2 className="text-3xl font-bold bricolage mb-4">
//             Ready to Be Our Next Success Story?
//           </h2>
//           <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
//             Join these companies in transforming your AI search visibility and driving real business results
//           </p>
//           <Link 
//             href="/llms-txt-generator"
//             className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
//           >
//             Get Started Today
//             <ArrowRight className="w-5 h-5" />
//           </Link>
//         </div>
//       </section>
//       <Footer/>
//     </div>
//   );
// }

//
//
//
//
//
//
//
//
//
// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowRight, TrendingUp } from 'lucide-react';
// import { getAllCaseStudies } from '@/lib/case-studies';
// import type { Metadata } from 'next';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import CalendlyButton from '@/components/CalendlyButton';


// export const metadata: Metadata = {
//   title: 'Case Studies | Visble - AI Search Optimization Results',
//   description: 'Discover how companies achieved remarkable results with Visble\'s AI search optimization. Real case studies showing growth in source mentions, rankings, and brand visibility.',
// };

// export default function CaseStudiesPage() {
//   const caseStudies = getAllCaseStudies();

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       <Header/>
//       {/* Header */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
//         <div className="text-center max-w-3xl mx-auto">
//           <h1 className="text-5xl md:text-6xl font-bold bricolage text-gray-900 mb-6">
//             Case Studies
//           </h1>
//           <p className="text-xl text-gray-600">
//             Real results from companies that transformed their AI search visibility with Visble
//           </p>
//         </div>
//       </section>

//       {/* Case Studies Grid */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {caseStudies.map((study) => (
//             <Link 
//               key={study.slug} 
//               href={`/case-studies/${study.slug}`}
//               className="group"
//             >
//               <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
//                 {/* Card Header with gradient */}
//                 <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden p-2 shadow-sm">
//                       {study.avatar ? (
//                         <Image 
//                           src={study.avatar} 
//                           alt={`${study.company} logo`}
//                           width={48}
//                           height={48}
//                           className="object-contain"
//                         />
//                       ) : (
//                         <span className="text-lg font-bold text-gray-700 bricolage">
//                           {study.company[0]}
//                         </span>
//                       )}
//                     </div>
//                     <div>
//                       <div className="font-semibold text-gray-900">{study.company}</div>
//                       <div className="text-xs text-gray-500">{study.location}</div>
//                     </div>
//                   </div>
                  
//                   <h3 className="text-xl font-bold bricolage text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
//                     {study.title}
//                   </h3>
                  
//                   <p className="text-sm text-gray-600 line-clamp-2">
//                     {study.shortDescription}
//                   </p>
//                 </div>

//                 {/* Card Body */}
//                 <div className="p-6 flex-grow flex flex-col">
//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {study.tags.slice(0, 3).map((tag, index) => (
//                       <span 
//                         key={index}
//                         className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Key Metrics Preview */}
//                   <div className="grid grid-cols-2 gap-3 mb-4">
//                     {study.results.metrics.slice(0, 2).map((metric, index) => (
//                       <div key={index} className="bg-gray-50 rounded-lg p-3">
//                         <div className="text-2xl font-bold bricolage text-purple-600 mb-1">
//                           {metric.value}
//                         </div>
//                         <div className="text-xs text-gray-600">{metric.label}</div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Meta Info */}
//                   <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4 border-t border-gray-100">
//                     <div className="flex items-center gap-4">
//                       <span>{study.industry}</span>
//                       <span>•</span>
//                       <span>{study.timeline}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Card Footer */}
//                 <div className="px-6 pb-6">
//                   <div className="flex items-center text-indigo-600 font-medium text-sm group-hover:gap-3 gap-2 transition-all">
//                     Read Case Study
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
//         <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-center text-white shadow-xl">
//           <h2 className="text-3xl font-bold bricolage mb-4">
//             Ready to Be Our Next Success Story?
//           </h2>
//           <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
//             Join these companies in transforming your AI search visibility and driving real business results
//           </p>
//           <CalendlyButton variant='cta'/>
//         </div>
//       </section>
//       <Footer/>
//     </div>
//   );
// }

// app/case-studies/page.tsx

// app/case-studies/page.tsx

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { sanityClient, urlFor } from '@/lib/sanity.client';
import { allCaseStudiesQuery } from '@/lib/queries';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CalendlyButton from '@/components/CalendlyButton';

export const metadata: Metadata = {
  title: 'Case Studies | Visble - AI Search Optimization Results',
  description: 'Discover how companies achieved remarkable results with Visble\'s AI search optimization. Real case studies showing growth in source mentions, rankings, and brand visibility.',
};

export default async function CaseStudiesPage() {
  // ✅ Fetch from Sanity instead of hardcoded data
  const caseStudies: any[] = await sanityClient.fetch(allCaseStudiesQuery);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bricolage text-gray-900 mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600">
            Real results from companies that transformed their AI search visibility with Visble
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {caseStudies.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            No case studies yet. Add one in Sanity Studio!
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Link 
                key={study._id} 
                href={`/case-studies/${study.slug}`}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
                  {/* Card Header with gradient */}
                  <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden p-2 shadow-sm">
                        {study.avatar ? (
                         <img
                          src={urlFor(study.avatar).height(36).url()}
                          alt={`${study.company} logo`}
                          className="h-full w-auto object-contain"
                          style={{ maxHeight: '36px' }}
                        />
                        ) : (
                          <span className="text-lg font-bold text-gray-700 bricolage">
                            {study.company[0]}
                          </span>
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{study.company}</div>
                        <div className="text-xs text-gray-500">{study.location || study.industry}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold bricolage text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {study.shortDescription}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-grow flex flex-col">
                    {/* Tags */}
                    {study.tags && study.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.slice(0, 3).map((tag: string, index: number) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Key Metrics Preview */}
                    {study.metrics && study.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {study.metrics.slice(0, 2).map((metric: any, index: number) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-3">
                            <div className="text-2xl font-bold bricolage text-purple-600 mb-1">
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-600">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4">
                        <span>{study.industry}</span>
                        {study.timeline && (
                          <>
                            <span>•</span>
                            <span>{study.timeline}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-6">
                    <div className="flex items-center text-indigo-600 font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                      Read Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold bricolage mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join these companies in transforming your AI search visibility and driving real business results
          </p>
          <CalendlyButton variant='cta'/>
        </div>
      </section>
      <Footer/>
    </div>
  );
}