// 'use client';

// import { TrendingUp, Users, Target } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const caseStudies = [
//   {
//     company: 'Acredge',
//     person: 'Gurugram, India',
//     avatar: '/image.png',
//     title: 'From 0 to 100+ Source Mentions in 60 Days',
//     description: "Achieved 100+ source mention in 60 days with no prior SEO base, no relevant ranking keywords and competitors with years of positioning on Google Search. Read more to see how we used GEO to beat industrial giants.",
//     metrics: [
//       { label: 'AI Overview impressions growth', value: '11x', subtext: '(3% → 33%)' },
//       { label: 'Citation rate growth', value: '2x', subtext: '(3.5% → 17%)' },
//     ],
//     icon: TrendingUp,
//     color: 'bg-blue-500',
//   },
//   {
//     company: 'Flyhomes',
//     person: 'Washington, USA',
//     avatar: '/iddHundDDQ_1767881827127.png',
//     title: '512% Growth in Source Mentions',
//     description: "From 17th position in the list top source mentions, Flyhomes moved to 3rd most mentioned source in just 40 days by identifying the topics and context within the topics that Chat GPT emphasises on.",
//     metrics: [
//       { label: 'Brand mention rate growth', value: '+19%', subtext: '(4% → 25%)' },
//       { label: 'Citation rate growth', value: '23x', subtext: '(0.3% → 7.0%)' },
//     ],
//     icon: Users,
//     color: 'bg-green-500',
//   },
//   {
//     company: 'DGFT Guru',
//     person: 'India',
//     avatar: '/id8O32bVFz_logos.png',
//     title: 'Brand Visibility increase from 20% to 80%',
//     description: "We found out that the outdated content was the culprit for DGFT Guru’s dropping brand visibility on Chat GPT and AI Overview. We reworked on keywords as per fanout query and updated the content to maintain freshness.",
//     metrics: [
//       { label: 'in AI Search Share of Voice', value: '5th to 1st', subtext: 'position ranking' },
//       { label: 'ROI with 18-day payback period', value: '1,561%', subtext: 'exceeded expectations' },
//     ],
//     icon: Target,
//     color: 'bg-purple-500',
//   },
// ];

// export default function CaseStudies() {
//   return (
//     <section id="case-studies" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold bricolage text-gray-900 mb-4">
//             Customer Stories
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             See how leading companies are achieving remarkable results with Visble's AI-powered brand monitoring
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8 mb-12">
//           {caseStudies.map((study, index) => {
//             const Icon = study.icon;
//             return (
//               <div 
//                 key={index}
//                 className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group"
//               >
//                 {/* Header */}
//                 <div className="flex items-center mb-6">
//                   <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4 overflow-hidden p-2">
//                     {study.avatar ? (
//                       <img 
//                         src={study.avatar} 
//                         alt={study.company}
//                         className="w-full h-full object-contain"
//                       />
//                     ) : (
//                       <span className="text-lg font-bold text-gray-700 bricolage">
//                         {study.company[0]}
//                       </span>
//                     )}
//                   </div>
//                   <div>
//                     <div className="font-bold text-gray-900 bricolage">{study.company}</div>
//                     <div className="text-sm text-gray-600">{study.person}</div>
//                   </div>
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-bold bricolage text-gray-900 mb-4 group-hover:text-primary transition-colors">
//                   {study.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-600 mb-8 leading-relaxed">
//                   {study.description}
//                 </p>

//                 {/* Metrics */}
//                 <div className="space-y-4">
//                   {study.metrics.map((metric, idx) => (
//                     <div key={idx} className="flex justify-between items-center">
//                       <div className="text-3xl font-bold bricolage text-gray-900">
//                         {metric.value}
//                       </div>
//                       <div className="text-right text-sm">
//                         <div className="text-gray-900 font-medium">{metric.label}</div>
//                         <div className="text-gray-500">{metric.subtext}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Read Full Story CTA at bottom */}
//         <div className="text-center">
//           <Button 
//             size="lg"
//             className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg bricolage"
//           >
//             Read the Full Story
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }
import { TrendingUp, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image'; // Optimized Images
import Link from 'next/link';   // SEO Friendly Links

const caseStudies = [
  {
    company: 'Acredge',
    person: 'Gurugram, India',
    avatar: '/output-onlinepngtools.png',
    title: 'From 0 to 100+ Source Mentions in 60 Days',
    description: "Achieved 100+ source mention in 60 days with no prior SEO base, no relevant ranking keywords and competitors with years of positioning on Google Search. Read more to see how we used GEO to beat industrial giants.",
    icon: TrendingUp,
    color: 'bg-blue-500',
    slug: 'acredge-case-study' // Added for linking
  },
  {
    company: 'Flyhomes',
    person: 'Washington, USA',
    avatar: '/iddHundDDQ_1767881827127.png',
    title: '512% Growth in Source Mentions in 40 Days',
    description: "From 17th position in the list top source mentions, Flyhomes moved to 3rd most mentioned source in just 40 days by identifying the topics and context within the topics that Chat GPT emphasises on.",
    icon: Users,
    color: 'bg-green-500',
    slug: 'flyhomes-case-study'
  },
  {
    company: 'DGFT Guru',
    person: 'India',
    avatar: '/dgft.png',
    title: 'Brand Visibility increase from 20% to 80%',
    description: "We found out that the outdated content was the culprit for DGFT Guru’s dropping brand visibility on Chat GPT and AI Overview. We reworked on keywords as per fanout query and updated the content to maintain freshness.",
    icon: Target,
    color: 'bg-purple-500',
    slug: 'dgft-guru-case-study'
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bricolage text-gray-900 mb-4">
            Customer Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading companies are achieving remarkable results with Visble's AI-powered brand monitoring
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => {
            return (
              <article 
                key={index}
                className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
              >
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4 overflow-hidden p-2 relative">
                    {study.avatar ? (
                      // SEO: Use Next/Image for Core Web Vitals (LCP/CLS)
                      <Image 
                        src={study.avatar} 
                        alt={`${study.company} logo`}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-lg font-bold text-gray-700 bricolage">
                        {study.company[0]}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 bricolage">{study.company}</h3>
                    <div className="text-sm text-gray-600">{study.person}</div>
                  </div>
                </div>

                {/* Title - Using H3 for semantic hierarchy */}
                <h4 className="text-xl font-bold bricolage text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {study.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed flex-1">
                  {study.description}
                </p>

                {/* 
                  SEO FIX: Use <Link> instead of <Button> alone. 
                  Search engines crawl <a href="...">, they don't click buttons.
                */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link href={`/case-studies/${study.slug}`} className="w-full block" tabIndex={-1}>
                    <Button 
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg bricolage w-full cursor-pointer"
                    >
                      Read the Full Story
                    </Button>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}