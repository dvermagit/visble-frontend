// export interface CaseStudyData {
//   slug: string;
//   company: string;
//   location: string;
//   avatar: string;
//   title: string;
//   shortDescription: string;
//   industry: string;
//   companySize: string;
//   website?: string;
  
//   // Challenge section
//   challenge: {
//     title: string;
//     description: string;
//     painPoints: string[];
//   };
  
//   // Solution section
//   solution: {
//     title: string;
//     description: string;
//     strategies: {
//       name: string;
//       description: string;
//     }[];
//   };
  
//   // Results section
//   results: {
//     title: string;
//     description: string;
//     metrics: {
//       label: string;
//       value: string;
//       change: string;
//     }[];
//     testimonial?: {
//       quote: string;
//       author: string;
//       role: string;
//     };
//   };
  
//   // Timeline
//   timeline: string;
  
//   // Tags
//   tags: string[];
// }

// export const caseStudiesData: CaseStudyData[] = [
//   {
//     slug: 'acredge-case-study',
//     company: 'Acredge',
//     location: 'Gurugram, India',
//     avatar: '/output-onlinepngtools.png',
//     title: 'From 0 to 100+ Source Mentions in 60 Days',
//     shortDescription: "Achieved 100+ source mention in 60 days with no prior SEO base, no relevant ranking keywords and competitors with years of positioning on Google Search.",
//     industry: 'EdTech',
//     companySize: '50-100 employees',
//     website: 'https://acredge.com',
    
//     challenge: {
//       title: 'The Challenge',
//       description: 'Acredge entered a highly competitive market with established players who had years of SEO positioning and brand recognition.',
//       painPoints: [
//         'Zero existing SEO foundation or domain authority',
//         'No ranking keywords in their niche',
//         'Competing against industry giants with established Google Search presence',
//         'Limited brand visibility in AI-powered search results',
//         'Needed rapid market penetration without traditional SEO timeline'
//       ]
//     },
    
//     solution: {
//       title: 'The Visble Approach',
//       description: 'We implemented a comprehensive Generative Engine Optimization (GEO) strategy focused on AI search visibility.',
//       strategies: [
//         {
//           name: 'AI-First Content Strategy',
//           description: 'Created content specifically optimized for how AI models retrieve and cite information, focusing on authoritative, structured data.'
//         },
//         {
//           name: 'Query Fan-Out Optimization',
//           description: 'Identified and targeted the expanded query patterns that ChatGPT and AI Overview use to find relevant sources.'
//         },
//         {
//           name: 'Citation-Worthy Content',
//           description: 'Developed comprehensive, factual content that AI models prefer to cite as reliable sources.'
//         },
//         {
//           name: 'Real-Time Monitoring',
//           description: "Used Visble's platform to track source mentions across ChatGPT, Perplexity, and Google AI Overview daily."
//         }
//       ]
//     },
    
//     results: {
//       title: 'The Results',
//       description: 'Within 60 days, Acredge transformed from invisible to one of the most cited sources in their industry.',
//       metrics: [
//         {
//           label: 'Source Mentions',
//           value: '100+',
//           change: 'From 0 in 60 days'
//         },
//         {
//           label: 'AI Search Visibility',
//           value: '850%',
//           change: 'Increase in 2 months'
//         },
//         {
//           label: 'Competitive Position',
//           value: 'Top 5',
//           change: 'Against 10-year-old competitors'
//         },
//         {
//           label: 'Organic Traffic',
//           value: '320%',
//           change: 'Growth from AI referrals'
//         }
//       ],
//       testimonial: {
//         quote: "Visble helped us leapfrog competitors who've been in the market for years. By focusing on AI search optimization, we achieved in 60 days what would have taken 2+ years with traditional SEO.",
//         author: 'Rajesh Kumar',
//         role: 'Head of Marketing, Acredge'
//       }
//     },
    
//     timeline: '60 days',
//     tags: ['GEO', 'AI Search', 'EdTech', 'Brand Visibility']
//   },
  
//   {
//     slug: 'flyhomes-case-study',
//     company: 'Flyhomes',
//     location: 'Washington, USA',
//     avatar: '/iddHundDDQ_1767881827127.png',
//     title: '512% Growth in Source Mentions in 40 Days',
//     shortDescription: "From 17th position in the list top source mentions, Flyhomes moved to 3rd most mentioned source in just 40 days.",
//     industry: 'Real Estate',
//     companySize: '200-500 employees',
//     website: 'https://flyhomes.com',
    
//     challenge: {
//       title: 'The Challenge',
//       description: 'Flyhomes was getting cited by AI models, but far less frequently than competitors despite having quality content.',
//       painPoints: [
//         'Ranked 17th in source mentions among real estate companies',
//         'Inconsistent citation patterns across different AI models',
//         'Content was being overlooked for more authoritative-seeming competitors',
//         'Needed to understand why ChatGPT preferred certain sources over theirs',
//         'Wanted to increase brand mentions without increasing ad spend'
//       ]
//     },
    
//     solution: {
//       title: 'The Visble Approach',
//       description: 'Deep analysis of ChatGPT\'s citation patterns revealed specific topics and contexts that drove mentions.',
//       strategies: [
//         {
//           name: 'Context Mapping',
//           description: 'Identified the exact topics and question types where ChatGPT was most likely to cite real estate sources.'
//         },
//         {
//           name: 'Content Gap Analysis',
//           description: 'Found topics where Flyhomes had expertise but lacked AI-optimized content coverage.'
//         },
//         {
//           name: 'Authority Signals',
//           description: 'Enhanced content with the specific authority markers that ChatGPT uses to evaluate source credibility.'
//         },
//         {
//           name: 'Topical Clustering',
//           description: 'Created interconnected content hubs on key real estate topics to establish topical authority.'
//         }
//       ]
//     },
    
//     results: {
//       title: 'The Results',
//       description: 'Flyhomes rocketed from 17th to 3rd position in just 40 days by understanding AI citation preferences.',
//       metrics: [
//         {
//           label: 'Source Mentions',
//           value: '512%',
//           change: 'Growth in 40 days'
//         },
//         {
//           label: 'Ranking Position',
//           value: '3rd',
//           change: 'From 17th position'
//         },
//         {
//           label: 'Citation Consistency',
//           value: '89%',
//           change: 'Across AI models'
//         },
//         {
//           label: 'Brand Queries',
//           value: '245%',
//           change: 'Increase in brand searches'
//         }
//       ],
//       testimonial: {
//         quote: "We were creating great content but ChatGPT wasn't citing us. Visble showed us exactly what context and topics to focus on. The results were immediate and dramatic.",
//         author: 'Sarah Mitchell',
//         role: 'VP of Digital Marketing, Flyhomes'
//       }
//     },
    
//     timeline: '40 days',
//     tags: ['Real Estate', 'Citation Optimization', 'ChatGPT', 'Brand Mentions']
//   },
  
//   {
//     slug: 'dgft-guru-case-study',
//     company: 'DGFT Guru',
//     location: 'India',
//     avatar: '/dgft.png',
//     title: 'Brand Visibility increase from 20% to 80%',
//     shortDescription: "We found out that the outdated content was the culprit for DGFT Guru's dropping brand visibility on Chat GPT and AI Overview.",
//     industry: 'Government Compliance',
//     companySize: '10-50 employees',
    
//     challenge: {
//       title: 'The Challenge',
//       description: 'DGFT Guru was experiencing declining visibility in AI search results despite having previously strong performance.',
//       painPoints: [
//         'Brand visibility dropped from 65% to 20% over 3 months',
//         'Outdated content was being bypassed by AI models for fresher sources',
//         'Competitors with updated information were taking their mention share',
//         'Government policy changes weren\'t reflected in their content',
//         'Lost credibility with AI models due to stale information'
//       ]
//     },
    
//     solution: {
//       title: 'The Visble Approach',
//       description: 'Content audit revealed freshness issues. We implemented a content refresh strategy based on AI search preferences.',
//       strategies: [
//         {
//           name: 'Freshness Audit',
//           description: 'Identified all content with outdated information that AI models were flagging as unreliable.'
//         },
//         {
//           name: 'Query Fan-Out Analysis',
//           description: 'Mapped new query patterns related to recent government policy changes and updates.'
//         },
//         {
//           name: 'Content Refresh Protocol',
//           description: 'Systematically updated content with current data, adding publication and update dates.'
//         },
//         {
//           name: 'Timeliness Signals',
//           description: 'Added structured data and clear freshness indicators that AI models use to evaluate recency.'
//         }
//       ]
//     },
    
//     results: {
//       title: 'The Results',
//       description: 'By prioritizing content freshness and relevance, DGFT Guru recovered and exceeded their previous visibility.',
//       metrics: [
//         {
//           label: 'Brand Visibility',
//           value: '80%',
//           change: 'From 20% baseline'
//         },
//         {
//           label: 'Content Freshness Score',
//           value: '95%',
//           change: 'Up from 45%'
//         },
//         {
//           label: 'Citation Recovery',
//           value: '400%',
//           change: 'Increase in mentions'
//         },
//         {
//           label: 'Traffic from AI',
//           value: '290%',
//           change: 'Growth in referrals'
//         }
//       ],
//       testimonial: {
//         quote: "Visble's monitoring showed us exactly when and why our visibility was dropping. The content refresh strategy brought us back stronger than ever.",
//         author: 'Amit Sharma',
//         role: 'Founder, DGFT Guru'
//       }
//     },
    
//     timeline: '45 days',
//     tags: ['Content Freshness', 'Government', 'AI Overview', 'Recovery']
//   }
// ];

// export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
//   return caseStudiesData.find(study => study.slug === slug);
// }

// export function getAllCaseStudies(): CaseStudyData[] {
//   return caseStudiesData;
// }

// export interface CaseStudyData {
//   slug: string;
//   company: string;
//   location: string;
//   avatar: string;
//   title: string;
//   shortDescription: string;
//   industry: string;
//   companySize: string;
//   website?: string;
  
//   // Challenge section
//   challenge: {
//     title: string;
//     description: string;
//     painPoints: string[];
//   };
  
//   // Solution section
//   solution: {
//     title: string;
//     description: string;
//     strategies: {
//       name: string;
//       description: string;
//     }[];
//   };
  
//   // Results section
//   results: {
//     title: string;
//     description: string;
//     metrics: {
//       label: string;
//       value: string;
//       change: string;
//     }[];
//     testimonial?: {
//       quote: string;
//       author: string;
//       role: string;
//     };
//   };
  
//   // Timeline
//   timeline: string;
  
//   // Tags
//   tags: string[];
// }

// export const caseStudiesData: CaseStudyData[] = [
//   {
//     slug: 'acredge-case-study',
//     company: 'Acredge',
//     location: 'Gurugram, India',
//     avatar: '/output-onlinepngtools.png',
//     title: 'From 0 to 100+ Source Mentions in 60 Days',
//     shortDescription: "Achieved 100+ source mention in 60 days with no prior SEO base, no relevant ranking keywords and competitors with years of positioning on Google Search.",
//     industry: 'EdTech',
//     companySize: '50-100 employees',
//     website: 'https://acredge.com',
    
//     challenge: {
//       title: 'The Challenge',
//       description: 'Acredge entered a highly competitive market with established players who had years of SEO positioning and brand recognition.',
//       painPoints: [
//         'Zero existing SEO foundation or domain authority',
//         'No ranking keywords in their niche',
//         'Competing against industry giants with established Google Search presence',
//         'Limited brand visibility in AI-powered search results',
//         'Needed rapid market penetration without traditional SEO timeline'
//       ]
//     },
    
//     solution: {
//       title: 'The Visble Approach',
//       description: 'We implemented a comprehensive Generative Engine Optimization (GEO) strategy focused on AI search visibility.',
//       strategies: [
//         {
//           name: 'AI-First Content Strategy',
//           description: 'Created content specifically optimized for how AI models retrieve and cite information, focusing on authoritative, structured data.'
//         },
//         {
//           name: 'Query Fan-Out Optimization',
//           description: 'Identified and targeted the expanded query patterns that ChatGPT and AI Overview use to find relevant sources.'
//         },
//         {
//           name: 'Citation-Worthy Content',
//           description: 'Developed comprehensive, factual content that AI models prefer to cite as reliable sources.'
//         },
//         {
//           name: 'Real-Time Monitoring',
//           description: "Used Visble's platform to track source mentions across ChatGPT, Perplexity, and Google AI Overview daily."
//         }
//       ]
//     },
    
//     results: {
//       title: 'The Results',
//       description: 'Within 60 days, Acredge transformed from invisible to one of the most cited sources in their industry.',
//       metrics: [
//         {
//           label: 'Source Mentions',
//           value: '100+',
//           change: 'From 0 in 60 days'
//         },
//         {
//           label: 'AI Search Visibility',
//           value: '850%',
//           change: 'Increase in 2 months'
//         },
//         {
//           label: 'Competitive Position',
//           value: 'Top 5',
//           change: 'Against 10-year-old competitors'
//         },
//         {
//           label: 'Organic Traffic',
//           value: '320%',
//           change: 'Growth from AI referrals'
//         }
//       ],
//       testimonial: {
//         quote: "Visble helped us leapfrog competitors who've been in the market for years. By focusing on AI search optimization, we achieved in 60 days what would have taken 2+ years with traditional SEO.",
//         author: 'Rajesh Kumar',
//         role: 'Head of Marketing, Acredge'
//       }
//     },
    
//     timeline: '60 days',
//     tags: ['GEO', 'AI Search', 'EdTech', 'Brand Visibility']
//   },
  
//   {
//     slug: 'flyhomes-case-study',
//     company: 'Flyhomes',
//     location: 'Washington, USA',
//     avatar: '/iddHundDDQ_1767881827127.png',
//     title: '512% Growth in Source Mentions in 40 Days',
//     shortDescription: "From 17th position in the list top source mentions, Flyhomes moved to 3rd most mentioned source in just 40 days.",
//     industry: 'Real Estate',
//     companySize: '200-500 employees',
//     website: 'https://flyhomes.com',
    
//     challenge: {
//       title: 'The Challenge',
//       description: 'Flyhomes was getting cited by AI models, but far less frequently than competitors despite having quality content.',
//       painPoints: [
//         'Ranked 17th in source mentions among real estate companies',
//         'Inconsistent citation patterns across different AI models',
//         'Content was being overlooked for more authoritative-seeming competitors',
//         'Needed to understand why ChatGPT preferred certain sources over theirs',
//         'Wanted to increase brand mentions without increasing ad spend'
//       ]
//     },
    
//     solution: {
//       title: 'The Visble Approach',
//       description: 'Deep analysis of ChatGPT\'s citation patterns revealed specific topics and contexts that drove mentions.',
//       strategies: [
//         {
//           name: 'Context Mapping',
//           description: 'Identified the exact topics and question types where ChatGPT was most likely to cite real estate sources.'
//         },
//         {
//           name: 'Content Gap Analysis',
//           description: 'Found topics where Flyhomes had expertise but lacked AI-optimized content coverage.'
//         },
//         {
//           name: 'Authority Signals',
//           description: 'Enhanced content with the specific authority markers that ChatGPT uses to evaluate source credibility.'
//         },
//         {
//           name: 'Topical Clustering',
//           description: 'Created interconnected content hubs on key real estate topics to establish topical authority.'
//         }
//       ]
//     },
    
//     results: {
//       title: 'The Results',
//       description: 'Flyhomes rocketed from 17th to 3rd position in just 40 days by understanding AI citation preferences.',
//       metrics: [
//         {
//           label: 'Source Mentions',
//           value: '512%',
//           change: 'Growth in 40 days'
//         },
//         {
//           label: 'Ranking Position',
//           value: '3rd',
//           change: 'From 17th position'
//         },
//         {
//           label: 'Citation Consistency',
//           value: '89%',
//           change: 'Across AI models'
//         },
//         {
//           label: 'Brand Queries',
//           value: '245%',
//           change: 'Increase in brand searches'
//         }
//       ],
//       testimonial: {
//         quote: "We were creating great content but ChatGPT wasn't citing us. Visble showed us exactly what context and topics to focus on. The results were immediate and dramatic.",
//         author: 'Sarah Mitchell',
//         role: 'VP of Digital Marketing, Flyhomes'
//       }
//     },
    
//     timeline: '40 days',
//     tags: ['Real Estate', 'Citation Optimization', 'ChatGPT', 'Brand Mentions']
//   },
  
//   {
//     slug: 'dgft-guru-case-study',
//     company: 'DGFT Guru',
//     location: 'India',
//     avatar: '/dgft.png',
//     title: 'Brand Visibility increase from 20% to 80%',
//     shortDescription: "We found out that the outdated content was the culprit for DGFT Guru's dropping brand visibility on Chat GPT and AI Overview.",
//     industry: 'Government Compliance',
//     companySize: '10-50 employees',
    
//     challenge: {
//       title: 'The Challenge',
//       description: 'DGFT Guru was experiencing declining visibility in AI search results despite having previously strong performance.',
//       painPoints: [
//         'Brand visibility dropped from 65% to 20% over 3 months',
//         'Outdated content was being bypassed by AI models for fresher sources',
//         'Competitors with updated information were taking their mention share',
//         'Government policy changes weren\'t reflected in their content',
//         'Lost credibility with AI models due to stale information'
//       ]
//     },
    
//     solution: {
//       title: 'The Visble Approach',
//       description: 'Content audit revealed freshness issues. We implemented a content refresh strategy based on AI search preferences.',
//       strategies: [
//         {
//           name: 'Freshness Audit',
//           description: 'Identified all content with outdated information that AI models were flagging as unreliable.'
//         },
//         {
//           name: 'Query Fan-Out Analysis',
//           description: 'Mapped new query patterns related to recent government policy changes and updates.'
//         },
//         {
//           name: 'Content Refresh Protocol',
//           description: 'Systematically updated content with current data, adding publication and update dates.'
//         },
//         {
//           name: 'Timeliness Signals',
//           description: 'Added structured data and clear freshness indicators that AI models use to evaluate recency.'
//         }
//       ]
//     },
    
//     results: {
//       title: 'The Results',
//       description: 'By prioritizing content freshness and relevance, DGFT Guru recovered and exceeded their previous visibility.',
//       metrics: [
//         {
//           label: 'Brand Visibility',
//           value: '80%',
//           change: 'From 20% baseline'
//         },
//         {
//           label: 'Content Freshness Score',
//           value: '95%',
//           change: 'Up from 45%'
//         },
//         {
//           label: 'Citation Recovery',
//           value: '400%',
//           change: 'Increase in mentions'
//         },
//         {
//           label: 'Traffic from AI',
//           value: '290%',
//           change: 'Growth in referrals'
//         }
//       ],
//       testimonial: {
//         quote: "Visble's monitoring showed us exactly when and why our visibility was dropping. The content refresh strategy brought us back stronger than ever.",
//         author: 'Amit Sharma',
//         role: 'Founder, DGFT Guru'
//       }
//     },
    
//     timeline: '45 days',
//     tags: ['Content Freshness', 'Government', 'AI Overview', 'Recovery']
//   }
// ];

// export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
//   return caseStudiesData.find(study => study.slug === slug);
// }

// export function getAllCaseStudies(): CaseStudyData[] {
//   return caseStudiesData;
// }

// export interface CaseStudyData {
//   slug: string;
//   company: string;
//   location: string;
//   avatar: string;
//   title: string;
//   shortDescription: string;
//   industry: string;
//   companySize: string;
//   website?: string;
//   color: string; // Brand color for this case study
  
//   // Graph data for progress visualization
//   graphData: {
//     week: string;
//     value: number; // 0-100 scale
//     label: string;
//   }[];
  
//   // Challenge section
//   challenge: {
//     title: string;
//     description: string;
//     painPoints: string[];
//   };
  
//   // Solution section
//   solution: {
//     title: string;
//     description: string;
//     strategies: {
//       name: string;
//       description: string;
//     }[];
//   };
  
//   // Results section
//   results: {
//     title: string;
//     description: string;
//     metrics: {
//       label: string;
//       value: string;
//       change: string;
//     }[];
//     testimonial?: {
//       quote: string;
//       author: string;
//       role: string;
//     };
//   };
  
//   // Timeline
//   timeline: string;
  
//   // Tags
//   tags: string[];
// }

// export const caseStudiesData: CaseStudyData[] = [
//   {
//     slug: 'acredge-case-study',
//     company: 'Acredge',
//     location: 'Gurugram, India',
//     avatar: '/output-onlinepngtools.png',
//     title: 'From 0 to 100+ Source Mentions in 60 Days',
//     shortDescription: "Achieved 100+ source mention in 60 days with no prior SEO base, no relevant ranking keywords and competitors with years of positioning on Google Search.",
//     industry: 'EdTech',
//     companySize: '50-100 employees',
//     website: 'https://acredge.com',
//     color: '#3B82F6', // Blue
    
//     // Graph data - Exponential growth from 0
//     graphData: [
//       { week: 'Start', value: 0, label: '0' },
//       { week: 'Week 2', value: 8, label: '8' },
//       { week: 'Week 4', value: 35, label: '35' },
//       { week: 'Week 6', value: 68, label: '68' },
//       { week: 'Week 8', value: 100, label: '100+' }
//     ],
    
//     challenge: {
//       title: 'The Challenge',
//       description: 'Acredge entered a highly competitive market with established players who had years of SEO positioning and brand recognition.',
//       painPoints: [
//         'Zero existing SEO foundation or domain authority',
//         'No ranking keywords in their niche',
//         'Competing against industry giants with established Google Search presence',
//         'Limited brand visibility in AI-powered search results',
//         'Needed rapid market penetration without traditional SEO timeline'
//       ]
//     },
    
//     solution: {
//       title: 'The Visble Approach',
//       description: 'We implemented a comprehensive Generative Engine Optimization (GEO) strategy focused on AI search visibility.',
//       strategies: [
//         {
//           name: 'AI-First Content Strategy',
//           description: 'Created content specifically optimized for how AI models retrieve and cite information, focusing on authoritative, structured data.'
//         },
//         {
//           name: 'Query Fan-Out Optimization',
//           description: 'Identified and targeted the expanded query patterns that ChatGPT and AI Overview use to find relevant sources.'
//         },
//         {
//           name: 'Citation-Worthy Content',
//           description: 'Developed comprehensive, factual content that AI models prefer to cite as reliable sources.'
//         },
//         {
//           name: 'Real-Time Monitoring',
//           description: "Used Visble's platform to track source mentions across ChatGPT, Perplexity, and Google AI Overview daily."
//         }
//       ]
//     },
    
//     results: {
//       title: 'The Results',
//       description: 'Within 60 days, Acredge transformed from invisible to one of the most cited sources in their industry.',
//       metrics: [
//         {
//           label: 'Source Mentions',
//           value: '100+',
//           change: 'From 0 in 60 days'
//         },
//         {
//           label: 'AI Search Visibility',
//           value: '850%',
//           change: 'Increase in 2 months'
//         },
//         {
//           label: 'Competitive Position',
//           value: 'Top 5',
//           change: 'Against 10-year-old competitors'
//         },
//         {
//           label: 'Organic Traffic',
//           value: '320%',
//           change: 'Growth from AI referrals'
//         }
//       ],
//       testimonial: {
//         quote: "Visble helped us leapfrog competitors who've been in the market for years. By focusing on AI search optimization, we achieved in 60 days what would have taken 2+ years with traditional SEO.",
//         author: 'Rajesh Kumar',
//         role: 'Head of Marketing, Acredge'
//       }
//     },
    
//     timeline: '60 days',
//     tags: ['GEO', 'AI Search', 'EdTech', 'Brand Visibility']
//   },
  
//   {
//     slug: 'flyhomes-case-study',
//     company: 'Flyhomes',
//     location: 'Washington, USA',
//     avatar: '/iddHundDDQ_1767881827127.png',
//     title: '512% Growth in Source Mentions in 40 Days',
//     shortDescription: "From 17th position in the list top source mentions, Flyhomes moved to 3rd most mentioned source in just 40 days.",
//     industry: 'Real Estate',
//     companySize: '200-500 employees',
//     website: 'https://flyhomes.com',
//     color: '#22C55E', // Green
    
//     // Graph data - Sharp climb from 17th to 3rd
//     graphData: [
//       { week: 'Start', value: 15, label: '17th' },
//       { week: 'Week 1', value: 25, label: '15th' },
//       { week: 'Week 2', value: 45, label: '10th' },
//       { week: 'Week 3', value: 70, label: '5th' },
//       { week: 'Week 4', value: 92, label: '3rd' }
//     ],
    
//     challenge: {
//       title: 'The Challenge',
//       description: 'Flyhomes was getting cited by AI models, but far less frequently than competitors despite having quality content.',
//       painPoints: [
//         'Ranked 17th in source mentions among real estate companies',
//         'Inconsistent citation patterns across different AI models',
//         'Content was being overlooked for more authoritative-seeming competitors',
//         'Needed to understand why ChatGPT preferred certain sources over theirs',
//         'Wanted to increase brand mentions without increasing ad spend'
//       ]
//     },
    
//     solution: {
//       title: 'The Visble Approach',
//       description: 'Deep analysis of ChatGPT\'s citation patterns revealed specific topics and contexts that drove mentions.',
//       strategies: [
//         {
//           name: 'Context Mapping',
//           description: 'Identified the exact topics and question types where ChatGPT was most likely to cite real estate sources.'
//         },
//         {
//           name: 'Content Gap Analysis',
//           description: 'Found topics where Flyhomes had expertise but lacked AI-optimized content coverage.'
//         },
//         {
//           name: 'Authority Signals',
//           description: 'Enhanced content with the specific authority markers that ChatGPT uses to evaluate source credibility.'
//         },
//         {
//           name: 'Topical Clustering',
//           description: 'Created interconnected content hubs on key real estate topics to establish topical authority.'
//         }
//       ]
//     },
    
//     results: {
//       title: 'The Results',
//       description: 'Flyhomes rocketed from 17th to 3rd position in just 40 days by understanding AI citation preferences.',
//       metrics: [
//         {
//           label: 'Source Mentions',
//           value: '512%',
//           change: 'Growth in 40 days'
//         },
//         {
//           label: 'Ranking Position',
//           value: '3rd',
//           change: 'From 17th position'
//         },
//         {
//           label: 'Citation Consistency',
//           value: '89%',
//           change: 'Across AI models'
//         },
//         {
//           label: 'Brand Queries',
//           value: '245%',
//           change: 'Increase in brand searches'
//         }
//       ],
//       testimonial: {
//         quote: "We were creating great content but ChatGPT wasn't citing us. Visble showed us exactly what context and topics to focus on. The results were immediate and dramatic.",
//         author: 'Sarah Mitchell',
//         role: 'VP of Digital Marketing, Flyhomes'
//       }
//     },
    
//     timeline: '40 days',
//     tags: ['Real Estate', 'Citation Optimization', 'ChatGPT', 'Brand Mentions']
//   },
  
//   {
//     slug: 'dgft-guru-case-study',
//     company: 'DGFT Guru',
//     location: 'India',
//     avatar: '/dgft.png',
//     title: 'Brand Visibility increase from 20% to 80%',
//     shortDescription: "We found out that the outdated content was the culprit for DGFT Guru's dropping brand visibility on Chat GPT and AI Overview.",
//     industry: 'Government Compliance',
//     companySize: '10-50 employees',
//     color: '#A855F7', // Purple
    
//     // Graph data - Recovery curve (drop then rise)
//     graphData: [
//       { week: 'Month 1', value: 65, label: '65%' },
//       { week: 'Month 2', value: 35, label: '35%' },
//       { week: 'Month 3', value: 20, label: '20%' },
//       { week: 'Refresh', value: 45, label: '45%' },
//       { week: 'Month 6', value: 80, label: '80%' }
//     ],
    
//     challenge: {
//       title: 'The Challenge',
//       description: 'DGFT Guru was experiencing declining visibility in AI search results despite having previously strong performance.',
//       painPoints: [
//         'Brand visibility dropped from 65% to 20% over 3 months',
//         'Outdated content was being bypassed by AI models for fresher sources',
//         'Competitors with updated information were taking their mention share',
//         'Government policy changes weren\'t reflected in their content',
//         'Lost credibility with AI models due to stale information'
//       ]
//     },
    
//     solution: {
//       title: 'The Visble Approach',
//       description: 'Content audit revealed freshness issues. We implemented a content refresh strategy based on AI search preferences.',
//       strategies: [
//         {
//           name: 'Freshness Audit',
//           description: 'Identified all content with outdated information that AI models were flagging as unreliable.'
//         },
//         {
//           name: 'Query Fan-Out Analysis',
//           description: 'Mapped new query patterns related to recent government policy changes and updates.'
//         },
//         {
//           name: 'Content Refresh Protocol',
//           description: 'Systematically updated content with current data, adding publication and update dates.'
//         },
//         {
//           name: 'Timeliness Signals',
//           description: 'Added structured data and clear freshness indicators that AI models use to evaluate recency.'
//         }
//       ]
//     },
    
//     results: {
//       title: 'The Results',
//       description: 'By prioritizing content freshness and relevance, DGFT Guru recovered and exceeded their previous visibility.',
//       metrics: [
//         {
//           label: 'Brand Visibility',
//           value: '80%',
//           change: 'From 20% baseline'
//         },
//         {
//           label: 'Content Freshness Score',
//           value: '95%',
//           change: 'Up from 45%'
//         },
//         {
//           label: 'Citation Recovery',
//           value: '400%',
//           change: 'Increase in mentions'
//         },
//         {
//           label: 'Traffic from AI',
//           value: '290%',
//           change: 'Growth in referrals'
//         }
//       ],
//       testimonial: {
//         quote: "Visble's monitoring showed us exactly when and why our visibility was dropping. The content refresh strategy brought us back stronger than ever.",
//         author: 'Amit Sharma',
//         role: 'Founder, DGFT Guru'
//       }
//     },
    
//     timeline: '45 days',
//     tags: ['Content Freshness', 'Government', 'AI Overview', 'Recovery']
//   }
// ];

// export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
//   return caseStudiesData.find(study => study.slug === slug);
// }

// export function getAllCaseStudies(): CaseStudyData[] {
//   return caseStudiesData;
// }



// export interface CaseStudyData {
//   slug: string;
//   company: string;
//   location: string;
//   avatar: string;
//   title: string;
//   shortDescription: string;
//   industry: string;
//   companySize: string;
//   website?: string;
//   color: string; // Brand color for this case study
  
//   // Graph data for progress visualization
//   graphData: {
//     week: string;
//     value: number; // 0-100 scale
//     label: string;
//   }[];
  
//   // Challenge section
//   challenge: {
//     title: string;
//     description: string;
//     painPoints: string[];
//   };
  
//   // Solution section
//   solution: {
//     title: string;
//     description: string;
//     strategies: {
//       name: string;
//       description: string;
//     }[];
//   };
  
//   // Results section
//   results: {
//     title: string;
//     description: string;
//     metrics: {
//       label: string;
//       value: string;
//       change: string;
//     }[];
//     testimonial?: {
//       quote: string;
//       author: string;
//       role: string;
//     };
//   };
  
//   // Timeline
//   timeline: string;
  
//   // Tags
//   tags: string[];
// }

// export const caseStudiesData: CaseStudyData[] = [
//   {
//     slug: 'acredge-case-study',
//     company: 'Acredge',
//     location: 'Gurugram, India',
//     avatar: '/output-onlinepngtools.png',
//     title: 'From 0 to 100+ Source Mentions in 60 Days',
//     shortDescription: "Achieved 100+ source mention in 60 days with no prior SEO base, no relevant ranking keywords and competitors with years of positioning on Google Search.",
//     industry: 'EdTech',
//     companySize: '50-100 employees',
//     website: 'https://acredge.com',
//     color: '#3B82F6', // Blue
    
//     // Graph data - Exponential growth from 0
//     graphData: [
//       { week: 'Start', value: 0, label: '0' },
//       { week: 'Week 2', value: 8, label: '8' },
//       { week: 'Week 4', value: 35, label: '35' },
//       { week: 'Week 6', value: 68, label: '68' },
//       { week: 'Week 8', value: 100, label: '100+' }
//     ],
    
//     challenge: {
//       title: 'The Challenge',
//       description: 'Acredge entered a highly competitive market with established players who had years of SEO positioning and brand recognition.',
//       painPoints: [
//         'Zero existing SEO foundation or domain authority',
//         'No ranking keywords in their niche',
//         'Competing against industry giants with established Google Search presence',
//         'Limited brand visibility in AI-powered search results',
//         'Needed rapid market penetration without traditional SEO timeline'
//       ]
//     },
    
//     solution: {
//       title: 'The Visble Approach',
//       description: 'We implemented a comprehensive Generative Engine Optimization (GEO) strategy focused on AI search visibility.',
//       strategies: [
//         {
//           name: 'AI-First Content Strategy',
//           description: 'Created content specifically optimized for how AI models retrieve and cite information, focusing on authoritative, structured data.'
//         },
//         {
//           name: 'Query Fan-Out Optimization',
//           description: 'Identified and targeted the expanded query patterns that ChatGPT and AI Overview use to find relevant sources.'
//         },
//         {
//           name: 'Citation-Worthy Content',
//           description: 'Developed comprehensive, factual content that AI models prefer to cite as reliable sources.'
//         },
//         {
//           name: 'Real-Time Monitoring',
//           description: "Used Visble's platform to track source mentions across ChatGPT, Perplexity, and Google AI Overview daily."
//         }
//       ]
//     },
    
//     results: {
//       title: 'The Results',
//       description: 'Within 60 days, Acredge transformed from invisible to one of the most cited sources in their industry.',
//       metrics: [
//         {
//           label: 'Source Mentions',
//           value: '100+',
//           change: 'From 0 in 60 days'
//         },
//         {
//           label: 'AI Search Visibility',
//           value: '850%',
//           change: 'Increase in 2 months'
//         },
//         {
//           label: 'Competitive Position',
//           value: 'Top 5',
//           change: 'Against 10-year-old competitors'
//         },
//         {
//           label: 'Organic Traffic',
//           value: '320%',
//           change: 'Growth from AI referrals'
//         }
//       ],
//       testimonial: {
//         quote: "Visble helped us leapfrog competitors who've been in the market for years. By focusing on AI search optimization, we achieved in 60 days what would have taken 2+ years with traditional SEO.",
//         author: 'Rajesh Kumar',
//         role: 'Head of Marketing, Acredge'
//       }
//     },
    
//     timeline: '60 days',
//     tags: ['GEO', 'AI Search', 'EdTech', 'Brand Visibility']
//   },
  
//   {
//     slug: 'flyhomes-case-study',
//     company: 'Flyhomes',
//     location: 'Washington, USA',
//     avatar: '/iddHundDDQ_1767881827127.png',
//     title: '512% Growth in Source Mentions in 40 Days',
//     shortDescription: "From 17th position in the list top source mentions, Flyhomes moved to 3rd most mentioned source in just 40 days.",
//     industry: 'Real Estate',
//     companySize: '200-500 employees',
//     website: 'https://flyhomes.com',
//     color: '#22C55E', // Green
    
//     // Graph data - Sharp climb from 17th to 3rd
//     graphData: [
//       { week: 'Start', value: 15, label: '17th' },
//       { week: 'Week 1', value: 25, label: '15th' },
//       { week: 'Week 2', value: 45, label: '10th' },
//       { week: 'Week 3', value: 70, label: '5th' },
//       { week: 'Week 4', value: 92, label: '3rd' }
//     ],
    
//     challenge: {
//       title: 'The Challenge',
//       description: 'Flyhomes was getting cited by AI models, but far less frequently than competitors despite having quality content.',
//       painPoints: [
//         'Ranked 17th in source mentions among real estate companies',
//         'Inconsistent citation patterns across different AI models',
//         'Content was being overlooked for more authoritative-seeming competitors',
//         'Needed to understand why ChatGPT preferred certain sources over theirs',
//         'Wanted to increase brand mentions without increasing ad spend'
//       ]
//     },
    
//     solution: {
//       title: 'The Visble Approach',
//       description: 'Deep analysis of ChatGPT\'s citation patterns revealed specific topics and contexts that drove mentions.',
//       strategies: [
//         {
//           name: 'Context Mapping',
//           description: 'Identified the exact topics and question types where ChatGPT was most likely to cite real estate sources.'
//         },
//         {
//           name: 'Content Gap Analysis',
//           description: 'Found topics where Flyhomes had expertise but lacked AI-optimized content coverage.'
//         },
//         {
//           name: 'Authority Signals',
//           description: 'Enhanced content with the specific authority markers that ChatGPT uses to evaluate source credibility.'
//         },
//         {
//           name: 'Topical Clustering',
//           description: 'Created interconnected content hubs on key real estate topics to establish topical authority.'
//         }
//       ]
//     },
    
//     results: {
//       title: 'The Results',
//       description: 'Flyhomes rocketed from 17th to 3rd position in just 40 days by understanding AI citation preferences.',
//       metrics: [
//         {
//           label: 'Source Mentions',
//           value: '512%',
//           change: 'Growth in 40 days'
//         },
//         {
//           label: 'Ranking Position',
//           value: '3rd',
//           change: 'From 17th position'
//         },
//         {
//           label: 'Citation Consistency',
//           value: '89%',
//           change: 'Across AI models'
//         },
//         {
//           label: 'Brand Queries',
//           value: '245%',
//           change: 'Increase in brand searches'
//         }
//       ],
//       testimonial: {
//         quote: "We were creating great content but ChatGPT wasn't citing us. Visble showed us exactly what context and topics to focus on. The results were immediate and dramatic.",
//         author: 'Sarah Mitchell',
//         role: 'VP of Digital Marketing, Flyhomes'
//       }
//     },
    
//     timeline: '40 days',
//     tags: ['Real Estate', 'Citation Optimization', 'ChatGPT', 'Brand Mentions']
//   },
  
//   {
//     slug: 'dgft-guru-case-study',
//     company: 'DGFT Guru',
//     location: 'India',
//     avatar: '/dgft.png',
//     title: 'Brand Visibility increase from 20% to 80%',
//     shortDescription: "We found out that the outdated content was the culprit for DGFT Guru's dropping brand visibility on Chat GPT and AI Overview.",
//     industry: 'Government Compliance',
//     companySize: '10-50 employees',
//     color: '#A855F7', // Purple
    
//     // Graph data - Recovery curve (drop then rise)
//     graphData: [
//       { week: 'Month 1', value: 65, label: '65%' },
//       { week: 'Month 2', value: 35, label: '35%' },
//       { week: 'Month 3', value: 20, label: '20%' },
//       { week: 'Refresh', value: 45, label: '45%' },
//       { week: 'Month 6', value: 80, label: '80%' }
//     ],
    
//     challenge: {
//       title: 'The Challenge',
//       description: 'DGFT Guru was experiencing declining visibility in AI search results despite having previously strong performance.',
//       painPoints: [
//         'Brand visibility dropped from 65% to 20% over 3 months',
//         'Outdated content was being bypassed by AI models for fresher sources',
//         'Competitors with updated information were taking their mention share',
//         'Government policy changes weren\'t reflected in their content',
//         'Lost credibility with AI models due to stale information'
//       ]
//     },
    
//     solution: {
//       title: 'The Visble Approach',
//       description: 'Content audit revealed freshness issues. We implemented a content refresh strategy based on AI search preferences.',
//       strategies: [
//         {
//           name: 'Freshness Audit',
//           description: 'Identified all content with outdated information that AI models were flagging as unreliable.'
//         },
//         {
//           name: 'Query Fan-Out Analysis',
//           description: 'Mapped new query patterns related to recent government policy changes and updates.'
//         },
//         {
//           name: 'Content Refresh Protocol',
//           description: 'Systematically updated content with current data, adding publication and update dates.'
//         },
//         {
//           name: 'Timeliness Signals',
//           description: 'Added structured data and clear freshness indicators that AI models use to evaluate recency.'
//         }
//       ]
//     },
    
//     results: {
//       title: 'The Results',
//       description: 'By prioritizing content freshness and relevance, DGFT Guru recovered and exceeded their previous visibility.',
//       metrics: [
//         {
//           label: 'Brand Visibility',
//           value: '80%',
//           change: 'From 20% baseline'
//         },
//         {
//           label: 'Content Freshness Score',
//           value: '95%',
//           change: 'Up from 45%'
//         },
//         {
//           label: 'Citation Recovery',
//           value: '400%',
//           change: 'Increase in mentions'
//         },
//         {
//           label: 'Traffic from AI',
//           value: '290%',
//           change: 'Growth in referrals'
//         }
//       ],
//       testimonial: {
//         quote: "Visble's monitoring showed us exactly when and why our visibility was dropping. The content refresh strategy brought us back stronger than ever.",
//         author: 'Amit Sharma',
//         role: 'Founder, DGFT Guru'
//       }
//     },
    
//     timeline: '45 days',
//     tags: ['Content Freshness', 'Government', 'AI Overview', 'Recovery']
//   }
// ];

// export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
//   return caseStudiesData.find(study => study.slug === slug);
// }

// export function getAllCaseStudies(): CaseStudyData[] {
//   return caseStudiesData;
// }


// export interface CaseStudyData {
//   slug: string;
//   company: string;
//   location: string;
//   avatar: string;
//   title: string;
//   shortDescription: string;
//   industry: string;
//   companySize: string;
//   website?: string;
//   color: string; // Brand color for this case study
  
//   // Multi-metric graph data for progress visualization
//   graphData: {
//     week: string;
//     sourceMentions: number; // 0-100 scale
//     rankingPosition: number; // 0-100 scale (inverted - lower is better)
//     citationConsistency: number; // 0-100 scale
//     brandQueries: number; // 0-100 scale
//   }[];
  
//   // Challenge section
//   challenge: {
//     title: string;
//     description: string;
//     painPoints: string[];
//   };
  
//   // Solution section
//   solution: {
//     title: string;
//     description: string;
//     strategies: {
//       name: string;
//       description: string;
//     }[];
//   };
  
//   // Results section
//   results: {
//     title: string;
//     description: string;
//     metrics: {
//       label: string;
//       value: string;
//       change: string;
//     }[];
//     testimonial?: {
//       quote: string;
//       author: string;
//       role: string;
//     };
//   };
  
//   // Timeline
//   timeline: string;
  
//   // Tags
//   tags: string[];
// }

// export const caseStudiesData: CaseStudyData[] = [
//   {
//     slug: 'acredge-case-study',
//     company: 'Acredge',
//     location: 'Gurugram, India',
//     avatar: '/output-onlinepngtools.png',
//     title: 'From 0 to 100+ Source Mentions in 60 Days',
//     shortDescription: "Achieved 100+ source mention in 60 days with no prior SEO base, no relevant ranking keywords and competitors with years of positioning on Google Search.",
//     industry: 'EdTech',
//     companySize: '50-100 employees',
//     website: 'https://acredge.com',
//     color: '#3B82F6', // Blue
    
//     // Multi-metric graph data
//     graphData: [
//       { week: 'Start', sourceMentions: 0, rankingPosition: 100, citationConsistency: 0, brandQueries: 5 },
//       { week: 'Week 2', sourceMentions: 8, rankingPosition: 85, citationConsistency: 15, brandQueries: 12 },
//       { week: 'Week 4', sourceMentions: 35, rankingPosition: 60, citationConsistency: 45, brandQueries: 35 },
//       { week: 'Week 6', sourceMentions: 68, rankingPosition: 35, citationConsistency: 70, brandQueries: 65 },
//       { week: 'Week 8', sourceMentions: 100, rankingPosition: 15, citationConsistency: 89, brandQueries: 95 }
//     ],
    
//     challenge: {
//       title: 'The Challenge',
//       description: 'Acredge entered a highly competitive market with established players who had years of SEO positioning and brand recognition.',
//       painPoints: [
//         'Zero existing SEO foundation or domain authority',
//         'No ranking keywords in their niche',
//         'Competing against industry giants with established Google Search presence',
//         'Limited brand visibility in AI-powered search results',
//         'Needed rapid market penetration without traditional SEO timeline'
//       ]
//     },
    
//     solution: {
//       title: 'The Visble Approach',
//       description: 'We implemented a comprehensive Generative Engine Optimization (GEO) strategy focused on AI search visibility.',
//       strategies: [
//         {
//           name: 'AI-First Content Strategy',
//           description: 'Created content specifically optimized for how AI models retrieve and cite information, focusing on authoritative, structured data.'
//         },
//         {
//           name: 'Query Fan-Out Optimization',
//           description: 'Identified and targeted the expanded query patterns that ChatGPT and AI Overview use to find relevant sources.'
//         },
//         {
//           name: 'Citation-Worthy Content',
//           description: 'Developed comprehensive, factual content that AI models prefer to cite as reliable sources.'
//         },
//         {
//           name: 'Real-Time Monitoring',
//           description: "Used Visble's platform to track source mentions across ChatGPT, Perplexity, and Google AI Overview daily."
//         }
//       ]
//     },
    
//     results: {
//       title: 'The Results',
//       description: 'Within 60 days, Acredge transformed from invisible to one of the most cited sources in their industry.',
//       metrics: [
//         {
//           label: 'Source Mentions',
//           value: '100+',
//           change: 'From 0 in 60 days'
//         },
//         {
//           label: 'AI Search Visibility',
//           value: '850%',
//           change: 'Increase in 2 months'
//         },
//         {
//           label: 'Competitive Position',
//           value: 'Top 5',
//           change: 'Against 10-year-old competitors'
//         },
//         {
//           label: 'Organic Traffic',
//           value: '320%',
//           change: 'Growth from AI referrals'
//         }
//       ],
//       testimonial: {
//         quote: "Visble helped us leapfrog competitors who've been in the market for years. By focusing on AI search optimization, we achieved in 60 days what would have taken 2+ years with traditional SEO.",
//         author: 'Rajesh Kumar',
//         role: 'Head of Marketing, Acredge'
//       }
//     },
    
//     timeline: '60 days',
//     tags: ['GEO', 'AI Search', 'EdTech', 'Brand Visibility']
//   },
  
//   {
//     slug: 'flyhomes-case-study',
//     company: 'Flyhomes',
//     location: 'Washington, USA',
//     avatar: '/iddHundDDQ_1767881827127.png',
//     title: '512% Growth in Source Mentions in 40 Days',
//     shortDescription: "From 17th position in the list top source mentions, Flyhomes moved to 3rd most mentioned source in just 40 days.",
//     industry: 'Real Estate',
//     companySize: '200-500 employees',
//     website: 'https://flyhomes.com',
//     color: '#22C55E', // Green
    
//     // Multi-metric graph data
//     graphData: [
//       { week: 'Start', sourceMentions: 15, rankingPosition: 85, citationConsistency: 30, brandQueries: 20 },
//       { week: 'Week 1', sourceMentions: 25, rankingPosition: 75, citationConsistency: 45, brandQueries: 35 },
//       { week: 'Week 2', sourceMentions: 45, rankingPosition: 55, citationConsistency: 65, brandQueries: 55 },
//       { week: 'Week 3', sourceMentions: 70, rankingPosition: 30, citationConsistency: 80, brandQueries: 75 },
//       { week: 'Week 4', sourceMentions: 92, rankingPosition: 8, citationConsistency: 89, brandQueries: 90 }
//     ],
    
//     challenge: {
//       title: 'The Challenge',
//       description: 'Flyhomes was getting cited by AI models, but far less frequently than competitors despite having quality content.',
//       painPoints: [
//         'Ranked 17th in source mentions among real estate companies',
//         'Inconsistent citation patterns across different AI models',
//         'Content was being overlooked for more authoritative-seeming competitors',
//         'Needed to understand why ChatGPT preferred certain sources over theirs',
//         'Wanted to increase brand mentions without increasing ad spend'
//       ]
//     },
    
//     solution: {
//       title: 'The Visble Approach',
//       description: 'Deep analysis of ChatGPT\'s citation patterns revealed specific topics and contexts that drove mentions.',
//       strategies: [
//         {
//           name: 'Context Mapping',
//           description: 'Identified the exact topics and question types where ChatGPT was most likely to cite real estate sources.'
//         },
//         {
//           name: 'Content Gap Analysis',
//           description: 'Found topics where Flyhomes had expertise but lacked AI-optimized content coverage.'
//         },
//         {
//           name: 'Authority Signals',
//           description: 'Enhanced content with the specific authority markers that ChatGPT uses to evaluate source credibility.'
//         },
//         {
//           name: 'Topical Clustering',
//           description: 'Created interconnected content hubs on key real estate topics to establish topical authority.'
//         }
//       ]
//     },
    
//     results: {
//       title: 'The Results',
//       description: 'Flyhomes rocketed from 17th to 3rd position in just 40 days by understanding AI citation preferences.',
//       metrics: [
//         {
//           label: 'Source Mentions',
//           value: '512%',
//           change: 'Growth in 40 days'
//         },
//         {
//           label: 'Ranking Position',
//           value: '3rd',
//           change: 'From 17th position'
//         },
//         {
//           label: 'Citation Consistency',
//           value: '89%',
//           change: 'Across AI models'
//         },
//         {
//           label: 'Brand Queries',
//           value: '245%',
//           change: 'Increase in brand searches'
//         }
//       ],
//       testimonial: {
//         quote: "We were creating great content but ChatGPT wasn't citing us. Visble showed us exactly what context and topics to focus on. The results were immediate and dramatic.",
//         author: 'Sarah Mitchell',
//         role: 'VP of Digital Marketing, Flyhomes'
//       }
//     },
    
//     timeline: '40 days',
//     tags: ['Real Estate', 'Citation Optimization', 'ChatGPT', 'Brand Mentions']
//   },
  
//   {
//     slug: 'dgft-guru-case-study',
//     company: 'DGFT Guru',
//     location: 'India',
//     avatar: '/dgft.png',
//     title: 'Brand Visibility increase from 20% to 80%',
//     shortDescription: "We found out that the outdated content was the culprit for DGFT Guru's dropping brand visibility on Chat GPT and AI Overview.",
//     industry: 'Government Compliance',
//     companySize: '10-50 employees',
//     color: '#A855F7', // Purple
    
//     // Multi-metric graph data - Recovery curve
//     graphData: [
//       { week: 'Month 1', sourceMentions: 65, rankingPosition: 35, citationConsistency: 70, brandQueries: 60 },
//       { week: 'Month 2', sourceMentions: 35, rankingPosition: 65, citationConsistency: 40, brandQueries: 35 },
//       { week: 'Month 3', sourceMentions: 20, rankingPosition: 80, citationConsistency: 25, brandQueries: 22 },
//       { week: 'Refresh', sourceMentions: 45, rankingPosition: 55, citationConsistency: 50, brandQueries: 48 },
//       { week: 'Month 6', sourceMentions: 80, rankingPosition: 20, citationConsistency: 85, brandQueries: 82 }
//     ],
    
//     challenge: {
//       title: 'The Challenge',
//       description: 'DGFT Guru was experiencing declining visibility in AI search results despite having previously strong performance.',
//       painPoints: [
//         'Brand visibility dropped from 65% to 20% over 3 months',
//         'Outdated content was being bypassed by AI models for fresher sources',
//         'Competitors with updated information were taking their mention share',
//         'Government policy changes weren\'t reflected in their content',
//         'Lost credibility with AI models due to stale information'
//       ]
//     },
    
//     solution: {
//       title: 'The Visble Approach',
//       description: 'Content audit revealed freshness issues. We implemented a content refresh strategy based on AI search preferences.',
//       strategies: [
//         {
//           name: 'Freshness Audit',
//           description: 'Identified all content with outdated information that AI models were flagging as unreliable.'
//         },
//         {
//           name: 'Query Fan-Out Analysis',
//           description: 'Mapped new query patterns related to recent government policy changes and updates.'
//         },
//         {
//           name: 'Content Refresh Protocol',
//           description: 'Systematically updated content with current data, adding publication and update dates.'
//         },
//         {
//           name: 'Timeliness Signals',
//           description: 'Added structured data and clear freshness indicators that AI models use to evaluate recency.'
//         }
//       ]
//     },
    
//     results: {
//       title: 'The Results',
//       description: 'By prioritizing content freshness and relevance, DGFT Guru recovered and exceeded their previous visibility.',
//       metrics: [
//         {
//           label: 'Brand Visibility',
//           value: '80%',
//           change: 'From 20% baseline'
//         },
//         {
//           label: 'Content Freshness Score',
//           value: '95%',
//           change: 'Up from 45%'
//         },
//         {
//           label: 'Citation Recovery',
//           value: '400%',
//           change: 'Increase in mentions'
//         },
//         {
//           label: 'Traffic from AI',
//           value: '290%',
//           change: 'Growth in referrals'
//         }
//       ],
//       testimonial: {
//         quote: "Visble's monitoring showed us exactly when and why our visibility was dropping. The content refresh strategy brought us back stronger than ever.",
//         author: 'Amit Sharma',
//         role: 'Founder, DGFT Guru'
//       }
//     },
    
//     timeline: '45 days',
//     tags: ['Content Freshness', 'Government', 'AI Overview', 'Recovery']
//   }
// ];

// export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
//   return caseStudiesData.find(study => study.slug === slug);
// }

// export function getAllCaseStudies(): CaseStudyData[] {
//   return caseStudiesData;
// }

// export interface CaseStudyData {
//   slug: string;
//   company: string;
//   location: string;
//   avatar: string;
//   title: string;
//   shortDescription: string;
//   industry: string;
//   companySize: string;
//   website?: string;
//   color: string; // Brand color for this case study
  
//   // Multi-metric graph data for progress visualization
//   graphData: {
//     week: string;
//     sourceMentions: number; // 0-100 scale
//     rankingPosition: number; // 0-100 scale (inverted - lower is better)
//     citationConsistency: number; // 0-100 scale
//     brandQueries: number; // 0-100 scale
//   }[];
  
//   // Challenge section
//   challenge: {
//     title: string;
//     description: string;
//     painPoints: string[];
//   };
  
//   // Solution section
//   solution: {
//     title: string;
//     description: string;
//     strategies: {
//       name: string;
//       description: string;
//     }[];
//   };
  
//   // Results section
//   results: {
//     title: string;
//     description: string;
//     metrics: {
//       label: string;
//       value: string;
//       change: string;
//     }[];
//     testimonial?: {
//       quote: string;
//       author: string;
//       role: string;
//     };
//   };
  
//   // Timeline
//   timeline: string;
  
//   // Tags
//   tags: string[];
// }

// export const caseStudiesData: CaseStudyData[] = [
//   {
//     slug: 'acredge-case-study',
//     company: 'Acredge',
//     location: 'Gurugram, India',
//     avatar: '/output-onlinepngtools.png',
//     title: 'From 0 to 100+ Source Mentions in 60 Days',
//     shortDescription: "Achieved 100+ source mention in 60 days with no prior SEO base, no relevant ranking keywords and competitors with years of positioning on Google Search.",
//     industry: 'EdTech',
//     companySize: '50-100 employees',
//     website: 'https://acredge.com',
//     color: '#3B82F6', // Blue
    
//     // Multi-metric graph data
//     graphData: [
//       { week: 'Start', sourceMentions: 0, rankingPosition: 100, citationConsistency: 0, brandQueries: 5 },
//       { week: 'Week 2', sourceMentions: 8, rankingPosition: 85, citationConsistency: 15, brandQueries: 12 },
//       { week: 'Week 4', sourceMentions: 35, rankingPosition: 60, citationConsistency: 45, brandQueries: 35 },
//       { week: 'Week 6', sourceMentions: 68, rankingPosition: 35, citationConsistency: 70, brandQueries: 65 },
//       { week: 'Week 8', sourceMentions: 100, rankingPosition: 15, citationConsistency: 89, brandQueries: 95 }
//     ],
    
//     challenge: {
//       title: 'The Challenge',
//       description: 'Acredge entered a highly competitive market with established players who had years of SEO positioning and brand recognition.',
//       painPoints: [
//         'Zero existing SEO foundation or domain authority',
//         'No ranking keywords in their niche',
//         'Competing against industry giants with established Google Search presence',
//         'Limited brand visibility in AI-powered search results',
//         'Needed rapid market penetration without traditional SEO timeline'
//       ]
//     },
    
//     solution: {
//       title: 'The Visble Approach',
//       description: 'We implemented a comprehensive Generative Engine Optimization (GEO) strategy focused on AI search visibility.',
//       strategies: [
//         {
//           name: 'AI-First Content Strategy',
//           description: 'Created content specifically optimized for how AI models retrieve and cite information, focusing on authoritative, structured data.'
//         },
//         {
//           name: 'Query Fan-Out Optimization',
//           description: 'Identified and targeted the expanded query patterns that ChatGPT and AI Overview use to find relevant sources.'
//         },
//         {
//           name: 'Citation-Worthy Content',
//           description: 'Developed comprehensive, factual content that AI models prefer to cite as reliable sources.'
//         },
//         {
//           name: 'Real-Time Monitoring',
//           description: "Used Visble's platform to track source mentions across ChatGPT, Perplexity, and Google AI Overview daily."
//         }
//       ]
//     },
    
//     results: {
//       title: 'The Results',
//       description: 'Within 60 days, Acredge transformed from invisible to one of the most cited sources in their industry.',
//       metrics: [
//         {
//           label: 'Source Mentions',
//           value: '100+',
//           change: 'From 0 in 60 days'
//         },
//         {
//           label: 'AI Search Visibility',
//           value: '850%',
//           change: 'Increase in 2 months'
//         },
//         {
//           label: 'Competitive Position',
//           value: 'Top 5',
//           change: 'Against 10-year-old competitors'
//         },
//         {
//           label: 'Organic Traffic',
//           value: '320%',
//           change: 'Growth from AI referrals'
//         }
//       ],
//       testimonial: {
//         quote: "Visble helped us leapfrog competitors who've been in the market for years. By focusing on AI search optimization, we achieved in 60 days what would have taken 2+ years with traditional SEO.",
//         author: 'Rajesh Kumar',
//         role: 'Head of Marketing, Acredge'
//       }
//     },
    
//     timeline: '60 days',
//     tags: ['GEO', 'AI Search', 'EdTech', 'Brand Visibility']
//   },
  
//   {
//     slug: 'flyhomes-case-study',
//     company: 'Flyhomes',
//     location: 'Washington, USA',
//     avatar: '/iddHundDDQ_1767881827127.png',
//     title: '512% Growth in Source Mentions in 40 Days',
//     shortDescription: "From 17th position in the list top source mentions, Flyhomes moved to 3rd most mentioned source in just 40 days.",
//     industry: 'Real Estate',
//     companySize: '200-500 employees',
//     website: 'https://flyhomes.com',
//     color: '#22C55E', // Green
    
//     // Multi-metric graph data
//     graphData: [
//       { week: 'Start', sourceMentions: 15, rankingPosition: 85, citationConsistency: 30, brandQueries: 20 },
//       { week: 'Week 1', sourceMentions: 25, rankingPosition: 75, citationConsistency: 45, brandQueries: 35 },
//       { week: 'Week 2', sourceMentions: 45, rankingPosition: 55, citationConsistency: 65, brandQueries: 55 },
//       { week: 'Week 3', sourceMentions: 70, rankingPosition: 30, citationConsistency: 80, brandQueries: 75 },
//       { week: 'Week 4', sourceMentions: 92, rankingPosition: 8, citationConsistency: 89, brandQueries: 90 }
//     ],
    
//     challenge: {
//       title: 'The Challenge',
//       description: 'Flyhomes was getting cited by AI models, but far less frequently than competitors despite having quality content.',
//       painPoints: [
//         'Ranked 17th in source mentions among real estate companies',
//         'Inconsistent citation patterns across different AI models',
//         'Content was being overlooked for more authoritative-seeming competitors',
//         'Needed to understand why ChatGPT preferred certain sources over theirs',
//         'Wanted to increase brand mentions without increasing ad spend'
//       ]
//     },
    
//     solution: {
//       title: 'The Visble Approach',
//       description: 'Deep analysis of ChatGPT\'s citation patterns revealed specific topics and contexts that drove mentions.',
//       strategies: [
//         {
//           name: 'Context Mapping',
//           description: 'Identified the exact topics and question types where ChatGPT was most likely to cite real estate sources.'
//         },
//         {
//           name: 'Content Gap Analysis',
//           description: 'Found topics where Flyhomes had expertise but lacked AI-optimized content coverage.'
//         },
//         {
//           name: 'Authority Signals',
//           description: 'Enhanced content with the specific authority markers that ChatGPT uses to evaluate source credibility.'
//         },
//         {
//           name: 'Topical Clustering',
//           description: 'Created interconnected content hubs on key real estate topics to establish topical authority.'
//         }
//       ]
//     },
    
//     results: {
//       title: 'The Results',
//       description: 'Flyhomes rocketed from 17th to 3rd position in just 40 days by understanding AI citation preferences.',
//       metrics: [
//         {
//           label: 'Source Mentions',
//           value: '512%',
//           change: 'Growth in 40 days'
//         },
//         {
//           label: 'Ranking Position',
//           value: '3rd',
//           change: 'From 17th position'
//         },
//         {
//           label: 'Citation Consistency',
//           value: '89%',
//           change: 'Across AI models'
//         },
//         {
//           label: 'Brand Queries',
//           value: '245%',
//           change: 'Increase in brand searches'
//         }
//       ],
//       testimonial: {
//         quote: "We were creating great content but ChatGPT wasn't citing us. Visble showed us exactly what context and topics to focus on. The results were immediate and dramatic.",
//         author: 'Sarah Mitchell',
//         role: 'VP of Digital Marketing, Flyhomes'
//       }
//     },
    
//     timeline: '40 days',
//     tags: ['Real Estate', 'Citation Optimization', 'ChatGPT', 'Brand Mentions']
//   },
  
//   {
//     slug: 'dgft-guru-case-study',
//     company: 'DGFT Guru',
//     location: 'India',
//     avatar: '/dgft.png',
//     title: 'Brand Visibility increase from 20% to 80%',
//     shortDescription: "We found out that the outdated content was the culprit for DGFT Guru's dropping brand visibility on Chat GPT and AI Overview.",
//     industry: 'Government Compliance',
//     companySize: '10-50 employees',
//     color: '#A855F7', // Purple
    
//     // Multi-metric graph data - Recovery curve
//     graphData: [
//       { week: 'Month 1', sourceMentions: 65, rankingPosition: 35, citationConsistency: 70, brandQueries: 60 },
//       { week: 'Month 2', sourceMentions: 35, rankingPosition: 65, citationConsistency: 40, brandQueries: 35 },
//       { week: 'Month 3', sourceMentions: 20, rankingPosition: 80, citationConsistency: 25, brandQueries: 22 },
//       { week: 'Refresh', sourceMentions: 45, rankingPosition: 55, citationConsistency: 50, brandQueries: 48 },
//       { week: 'Month 6', sourceMentions: 80, rankingPosition: 20, citationConsistency: 85, brandQueries: 82 }
//     ],
    
//     challenge: {
//       title: 'The Challenge',
//       description: 'DGFT Guru was experiencing declining visibility in AI search results despite having previously strong performance.',
//       painPoints: [
//         'Brand visibility dropped from 65% to 20% over 3 months',
//         'Outdated content was being bypassed by AI models for fresher sources',
//         'Competitors with updated information were taking their mention share',
//         'Government policy changes weren\'t reflected in their content',
//         'Lost credibility with AI models due to stale information'
//       ]
//     },
    
//     solution: {
//       title: 'The Visble Approach',
//       description: 'Content audit revealed freshness issues. We implemented a content refresh strategy based on AI search preferences.',
//       strategies: [
//         {
//           name: 'Freshness Audit',
//           description: 'Identified all content with outdated information that AI models were flagging as unreliable.'
//         },
//         {
//           name: 'Query Fan-Out Analysis',
//           description: 'Mapped new query patterns related to recent government policy changes and updates.'
//         },
//         {
//           name: 'Content Refresh Protocol',
//           description: 'Systematically updated content with current data, adding publication and update dates.'
//         },
//         {
//           name: 'Timeliness Signals',
//           description: 'Added structured data and clear freshness indicators that AI models use to evaluate recency.'
//         }
//       ]
//     },
    
//     results: {
//       title: 'The Results',
//       description: 'By prioritizing content freshness and relevance, DGFT Guru recovered and exceeded their previous visibility.',
//       metrics: [
//         {
//           label: 'Brand Visibility',
//           value: '80%',
//           change: 'From 20% baseline'
//         },
//         {
//           label: 'Content Freshness Score',
//           value: '95%',
//           change: 'Up from 45%'
//         },
//         {
//           label: 'Citation Recovery',
//           value: '400%',
//           change: 'Increase in mentions'
//         },
//         {
//           label: 'Traffic from AI',
//           value: '290%',
//           change: 'Growth in referrals'
//         }
//       ],
//       testimonial: {
//         quote: "Visble's monitoring showed us exactly when and why our visibility was dropping. The content refresh strategy brought us back stronger than ever.",
//         author: 'Amit Sharma',
//         role: 'Founder, DGFT Guru'
//       }
//     },
    
//     timeline: '45 days',
//     tags: ['Content Freshness', 'Government', 'AI Overview', 'Recovery']
//   }
// ];

// export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
//   return caseStudiesData.find(study => study.slug === slug);
// }

// export function getAllCaseStudies(): CaseStudyData[] {
//   return caseStudiesData;
// }

// export interface CaseStudyData {
//   slug: string;
//   company: string;
//   location: string;
//   avatar: string;
//   title: string;
//   shortDescription: string;
//   industry: string;
//   companySize: string;
//   website?: string;
//   color: string; // Brand color for this case study
  
//   // Multi-metric graph data for progress visualization
//   graphData: {
//     week: string;
//     sourceMentions: number; // 0-100 scale
//     rankingPosition: number; // 0-100 scale (inverted - lower is better)
//     citationConsistency: number; // 0-100 scale
//     brandQueries: number; // 0-100 scale
//   }[];
  
//   // Challenge section
//   challenge: {
//     title: string;
//     description: string;
//     painPoints: string[];
//   };
  
//   // Solution section
//   solution: {
//     title: string;
//     description: string;
//     strategies: {
//       name: string;
//       description: string;
//     }[];
//   };
  
//   // Results section
//   results: {
//     title: string;
//     description: string;
//     metrics: {
//       label: string;
//       value: string;
//       change: string;
//     }[];
//     testimonial?: {
//       quote: string;
//       author: string;
//       role: string;
//     };
//   };
  
//   // Timeline
//   timeline: string;
  
//   // Tags
//   tags: string[];
// }

// export const caseStudiesData: CaseStudyData[] = [
//   {
//     slug: 'acredge-case-study',
//     company: 'Acredge',
//     location: 'Gurugram, India',
//     avatar: '/output-onlinepngtools.png',
//     title: 'How Acredge Went From 0 to 100+ Source Mentions within 60 Days',
//     shortDescription: "Learn how a DA 8 website, with no keywords ranking on the first page, gained AI source mentions using topical authority, GEO strategy, and semantic SEO, backed by real data and Visble AI insights.",
//     industry: 'EdTech',
//     companySize: '50-100 employees',
//     website: 'https://acredge.com',
//     color: '#3B82F6', // Blue
    
//     // Multi-metric graph data
//     graphData: [
//       { week: 'Start', sourceMentions: 0, rankingPosition: 100, citationConsistency: 0, brandQueries: 5 },
//       { week: 'Week 2', sourceMentions: 8, rankingPosition: 85, citationConsistency: 15, brandQueries: 12 },
//       { week: 'Week 4', sourceMentions: 35, rankingPosition: 60, citationConsistency: 45, brandQueries: 35 },
//       { week: 'Week 6', sourceMentions: 68, rankingPosition: 35, citationConsistency: 70, brandQueries: 65 },
//       { week: 'Week 8', sourceMentions: 100, rankingPosition: 15, citationConsistency: 89, brandQueries: 95 }
//     ],
    
//     challenge: {
//       title: 'The Challenge',
//       description: "Acredge wasn't just racing for SERP positions; we were taking over AI Search by increasing Source Mention and visibility on AI Answers. We needed an immediate Topical Authority to drive organic traffic while simultaneously structuring data to capture brand citations in a highly competitive market.",
//       painPoints: [
//         'Zero existing SEO foundation or domain authority',
//         'No ranking keywords in their niche',
//         'Needed rapid market penetration without traditional SEO timeline',
//         'Competing against industry giants with deep-rooted Topical Clusters',
//       ]
//     },
    
//     solution: {
//       title: 'The Visble Approach',
//       description: "A GEO strategy that drives results has to start with the fundamentals of SEO. We had to set the SEO core strong before moving to aggressive GEO strategies." + 
//       "For that, we divided our strategy into two phases- Basic SEO Optimisation for every blog and in the next phase, we went an extra mile to make the AI Search Engines trust and obsess over our content.",
//       strategies: [
//         {
//           name: 'Semantic Cluster Strategy',
//           description: 'Developed interconnected topical clusters using high-intent entities to bridge knowledge gaps with data-driven niche content.'
//         },
//         {
//           name: 'Query Fan-Out Optimization',
//           description: 'Mapped and targeted expanded query patterns used by LLMs and AI Overviews to discover authoritative sources.'
//         },
//         {
//           name: 'Citation-Worthy Content',
//           description: 'Published Acredge’s unique expert insights in structured formats to enhance semantic crawlability and earn primary source citations.'
//         },
//         {
//           name: 'Real-Time Monitoring',
//           description: "Used Visble's platform to track source mentions across ChatGPT, Perplexity, and Google AI Overview daily."
//         }
//       ]
//     },
    
//     results: {
//       title: 'The Results',
//       description: 'Within 60 days, Acredge transformed from invisible to one of the most cited sources in its industry.',
//       metrics: [
//         {
//           label: 'Source Mentions',
//           value: '100+',
//           change: 'From 0 in 60 days'
//         },
//         {
//           label: 'AI Search Visibility',
//           value: '850%',
//           change: 'Increase in 2 months'
//         },
//         {
//           label: 'Competitive Position',
//           value: 'Top 5',
//           change: 'Against 10-year-old competitors'
//         },
//         {
//           label: 'Organic Traffic',
//           value: '320%',
//           change: 'Growth from AI referrals'
//         }
//       ],
//       testimonial: {
//         quote: "Visble helped us leapfrog competitors who've been in the market for years. By focusing on AI search optimization, we achieved in 60 days what would have taken 2+ years with traditional SEO.",
//         author: 'Rajesh Kumar',
//         role: 'Head of Marketing, Acredge'
//       }
//     },
    
//     timeline: '60 days',
//     tags: ['GEO', 'AI Search', 'EdTech', 'Brand Visibility']
//   },
  
//   {
//     slug: 'flyhomes-case-study',
//     company: 'Flyhomes',
//     location: 'Washington, USA',
//     avatar: '/iddHundDDQ_1767881827127.png',
//     title: '512% Growth in Source Mentions in 40 Days',
//     shortDescription: "From 17th position in the list top source mentions, Flyhomes moved to 3rd most mentioned source in just 40 days.",
//     industry: 'Real Estate',
//     companySize: '200-500 employees',
//     website: 'https://flyhomes.com',
//     color: '#22C55E', // Green
    
//     // Multi-metric graph data
//     graphData: [
//       { week: 'Start', sourceMentions: 15, rankingPosition: 85, citationConsistency: 30, brandQueries: 20 },
//       { week: 'Week 1', sourceMentions: 25, rankingPosition: 75, citationConsistency: 45, brandQueries: 35 },
//       { week: 'Week 2', sourceMentions: 45, rankingPosition: 55, citationConsistency: 65, brandQueries: 55 },
//       { week: 'Week 3', sourceMentions: 70, rankingPosition: 30, citationConsistency: 80, brandQueries: 75 },
//       { week: 'Week 4', sourceMentions: 92, rankingPosition: 8, citationConsistency: 89, brandQueries: 90 }
//     ],
    
//     challenge: {
//       title: 'The Challenge',
//       description: 'Flyhomes was getting cited by AI models, but far less frequently than competitors despite having quality content.',
//       painPoints: [
//         'Ranked 17th in source mentions among real estate companies',
//         'Inconsistent citation patterns across different AI models',
//         'Content was being overlooked for more authoritative-seeming competitors',
//         'Needed to understand why ChatGPT preferred certain sources over theirs',
//         'Wanted to increase brand mentions without increasing ad spend'
//       ]
//     },
    
//     solution: {
//       title: 'The Visble Approach',
//       description: 'Deep analysis of ChatGPT\'s citation patterns revealed specific topics and contexts that drove mentions.',
//       strategies: [
//         {
//           name: 'Context Mapping',
//           description: 'Identified the exact topics and question types where ChatGPT was most likely to cite real estate sources.'
//         },
//         {
//           name: 'Content Gap Analysis',
//           description: 'Found topics where Flyhomes had expertise but lacked AI-optimized content coverage.'
//         },
//         {
//           name: 'Authority Signals',
//           description: 'Enhanced content with the specific authority markers that ChatGPT uses to evaluate source credibility.'
//         },
//         {
//           name: 'Topical Clustering',
//           description: 'Created interconnected content hubs on key real estate topics to establish topical authority.'
//         }
//       ]
//     },
    
//     results: {
//       title: 'The Results',
//       description: 'Flyhomes rocketed from 17th to 3rd position in just 40 days by understanding AI citation preferences.',
//       metrics: [
//         {
//           label: 'Source Mentions',
//           value: '512%',
//           change: 'Growth in 40 days'
//         },
//         {
//           label: 'Ranking Position',
//           value: '3rd',
//           change: 'From 17th position'
//         },
//         {
//           label: 'Citation Consistency',
//           value: '89%',
//           change: 'Across AI models'
//         },
//         {
//           label: 'Brand Queries',
//           value: '245%',
//           change: 'Increase in brand searches'
//         }
//       ],
//       testimonial: {
//         quote: "We were creating great content but ChatGPT wasn't citing us. Visble showed us exactly what context and topics to focus on. The results were immediate and dramatic.",
//         author: 'Sarah Mitchell',
//         role: 'VP of Digital Marketing, Flyhomes'
//       }
//     },
    
//     timeline: '40 days',
//     tags: ['Real Estate', 'Citation Optimization', 'ChatGPT', 'Brand Mentions']
//   },
  
//   {
//     slug: 'dgft-guru-case-study',
//     company: 'DGFT Guru',
//     location: 'India',
//     avatar: '/dgft.png',
//     title: 'Brand Visibility increase from 20% to 80%',
//     shortDescription: "We found out that the outdated content was the culprit for DGFT Guru's dropping brand visibility on Chat GPT and AI Overview.",
//     industry: 'Government Compliance',
//     companySize: '10-50 employees',
//     color: '#A855F7', // Purple
    
//     // Multi-metric graph data - Recovery curve
//     graphData: [
//       { week: 'Month 1', sourceMentions: 65, rankingPosition: 35, citationConsistency: 70, brandQueries: 60 },
//       { week: 'Month 2', sourceMentions: 35, rankingPosition: 65, citationConsistency: 40, brandQueries: 35 },
//       { week: 'Month 3', sourceMentions: 20, rankingPosition: 80, citationConsistency: 25, brandQueries: 22 },
//       { week: 'Refresh', sourceMentions: 45, rankingPosition: 55, citationConsistency: 50, brandQueries: 48 },
//       { week: 'Month 6', sourceMentions: 80, rankingPosition: 20, citationConsistency: 85, brandQueries: 82 }
//     ],
    
//     challenge: {
//       title: 'The Challenge',
//       description: 'DGFT Guru was experiencing declining visibility in AI search results despite having previously strong performance.',
//       painPoints: [
//         'Brand visibility dropped from 65% to 20% over 3 months',
//         'Outdated content was being bypassed by AI models for fresher sources',
//         'Competitors with updated information were taking their mention share',
//         'Government policy changes weren\'t reflected in their content',
//         'Lost credibility with AI models due to stale information'
//       ]
//     },
    
//     solution: {
//       title: 'The Visble Approach',
//       description: 'Content audit revealed freshness issues. We implemented a content refresh strategy based on AI search preferences.',
//       strategies: [
//         {
//           name: 'Freshness Audit',
//           description: 'Identified all content with outdated information that AI models were flagging as unreliable.'
//         },
//         {
//           name: 'Query Fan-Out Analysis',
//           description: 'Mapped new query patterns related to recent government policy changes and updates.'
//         },
//         {
//           name: 'Content Refresh Protocol',
//           description: 'Systematically updated content with current data, adding publication and update dates.'
//         },
//         {
//           name: 'Timeliness Signals',
//           description: 'Added structured data and clear freshness indicators that AI models use to evaluate recency.'
//         }
//       ]
//     },
    
//     results: {
//       title: 'The Results',
//       description: 'By prioritizing content freshness and relevance, DGFT Guru recovered and exceeded their previous visibility.',
//       metrics: [
//         {
//           label: 'Brand Visibility',
//           value: '80%',
//           change: 'From 20% baseline'
//         },
//         {
//           label: 'Content Freshness Score',
//           value: '95%',
//           change: 'Up from 45%'
//         },
//         {
//           label: 'Citation Recovery',
//           value: '400%',
//           change: 'Increase in mentions'
//         },
//         {
//           label: 'Traffic from AI',
//           value: '290%',
//           change: 'Growth in referrals'
//         }
//       ],
//       testimonial: {
//         quote: "Visble's monitoring showed us exactly when and why our visibility was dropping. The content refresh strategy brought us back stronger than ever.",
//         author: 'Amit Sharma',
//         role: 'Founder, DGFT Guru'
//       }
//     },
    
//     timeline: '45 days',
//     tags: ['Content Freshness', 'Government', 'AI Overview', 'Recovery']
//   }
// ];

// export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
//   return caseStudiesData.find(study => study.slug === slug);
// }

// export function getAllCaseStudies(): CaseStudyData[] {
//   return caseStudiesData;
// }

export interface CaseStudyData {
  slug: string;
  company: string;
  location: string;
  avatar: string;
  title: string;
  shortDescription: string;
  industry: string;
  companySize: string;
  website?: string;
  color: string; // Brand color for this case study
  
  // Multi-metric graph data for progress visualization
  graphData: {
    week: string;
    sourceMentions: number; // 0-100 scale
    rankingPosition: number; // 0-100 scale (inverted - lower is better)
    citationConsistency: number; // 0-100 scale
    brandQueries: number; // 0-100 scale
  }[];
  
  // Challenge section
  challenge: {
    title: string;
    description: string;
    painPoints: string[];
  };
  
  // Workflow section
  workflow?: {
    title: string;
    subtitle: string;
    steps: {
      id: number;
      days: string;
      title: string;
      description: string;
      icon: string; // Icon name as string
      color: string;
      metrics: string;
    }[];
    observation?: {
      title: string;
      description: string;
    };
  };
  
  // Solution section
  solution: {
    title: string;
    description: string;
    strategies: {
      name: string;
      description: string;
    }[];
  };
  
  // Results section
  results: {
    title: string;
    description: string;
    metrics: {
      label: string;
      value: string;
      change: string;
    }[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
  };
  
  // Timeline
  timeline: string;
  
  // Tags
  tags: string[];
}

export const caseStudiesData: CaseStudyData[] = [
  {
    slug: 'acredge-case-study',
    company: 'Acredge',
    location: 'Gurugram, India',
    avatar: '/output-onlinepngtools.png',
    title: 'How Acredge Went From 0 to 100+ Source Mentions within 60 Days',
    shortDescription: "Learn how a DA 8 website, with no keywords ranking on the first page, gained AI source mentions using topical authority, GEO strategy, and semantic SEO, backed by real data and Visble AI insights.",
    industry: 'EdTech',
    companySize: '50-100 employees',
    website: 'https://acredge.com',
    color: '#3B82F6', // Blue
    
    // Multi-metric graph data
    graphData: [
      { week: 'Start', sourceMentions: 0, rankingPosition: 100, citationConsistency: 0, brandQueries: 5 },
      { week: 'Week 2', sourceMentions: 8, rankingPosition: 85, citationConsistency: 15, brandQueries: 12 },
      { week: 'Week 4', sourceMentions: 35, rankingPosition: 60, citationConsistency: 45, brandQueries: 35 },
      { week: 'Week 6', sourceMentions: 68, rankingPosition: 35, citationConsistency: 70, brandQueries: 65 },
      { week: 'Week 8', sourceMentions: 100, rankingPosition: 15, citationConsistency: 89, brandQueries: 95 }
    ],
    
    challenge: {
      title: 'The Challenge',
      description: "Acredge wasn't just racing for SERP positions; we were taking over AI Search by increasing Source Mention and visibility on AI Answers. We needed an immediate Topical Authority to drive organic traffic while simultaneously structuring data to capture brand citations in a highly competitive market.",
      painPoints: [
        'Zero existing SEO foundation or domain authority',
        'No ranking keywords in their niche',
        'Needed rapid market penetration without traditional SEO timeline',
        'Competing against industry giants with deep-rooted Topical Clusters',
      ]
    },
    
    // Workflow for Acredge
    workflow: {
      title: 'The Workflow: BTS',
      subtitle: 'A 60-day journey transforming AI search visibility through strategic implementation',
      steps: [
        {
          id: 1,
          days: 'Day 1-10',
          title: 'Restructuring Website & URLs',
          description: 'Reorganised 100,000+ scattered pages into clean topical hierarchies, optimising URL structures for seamless Google and LLM index coverage.',
          icon: 'Globe',
          color: 'purple',
          metrics: '100,000+ pages restructured'
        },
        {
          id: 2,
          days: 'Day 11-17',
          title: 'Gaining Domain Expertise',
          description: "Interviewed Acredge's professionals to extract unique on-ground insights, identifying critical knowledge gaps that search engines and AI lacked.",
          icon: 'Users',
          color: 'blue',
          metrics: 'Deep industry insights'
        },
        {
          id: 3,
          days: 'Day 18-30',
          title: 'Crafting Semantic Content',
          description: 'Developed skimmable, structured content using tables and FAQs, specifically designed for high readability by both users and LLM crawlers.',
          icon: 'FileText',
          color: 'indigo',
          metrics: 'Optimized for LLM crawlers'
        },
        {
          id: 4,
          days: 'Day 31-40',
          title: 'Optimising for AI',
          description: 'Implemented LLM.txt protocols to direct AI agents toward high-value data, ensuring our most authoritative content was prioritised for citations.',
          icon: 'Bot',
          color: 'cyan',
          metrics: 'LLM.txt implemented'
        },
        {
          id: 5,
          days: 'Day 41-50',
          title: 'Building Authority for SERPs',
          description: 'Published 30 deep-research assets, combining niche expertise with strategic backlinking to force entry into the top 5 SERP positions.',
          icon: 'TrendingUp',
          color: 'green',
          metrics: '30 research assets published'
        },
        {
          id: 6,
          days: 'Day 60',
          title: 'Celebrating Excellence',
          description: "And that's how Acredge got 100+ Source Mentions, 850% AI Search Visibility, top 5 Competitive Position, and 320% Organic Traffic!",
          icon: 'Award',
          color: 'amber',
          metrics: 'Mission accomplished!'
        }
      ],
      observation: {
        title: 'Our Observation',
        description: 'Traditional SEO rankings and quality backlinks remain the primary trust signals that trigger AI models to grant source mentions. So, SEO is still in the game. In fact, it builds a strong base for GEO strategies to perform well.'
      }
    },
    
    solution: {
      title: 'The Visble Approach',
      description: "A GEO strategy that drives results has to start with the fundamentals of SEO. We had to set the SEO core strong before moving to aggressive GEO strategies.\n\nFor that, we divided our strategy into two phases—Basic SEO Optimisation for every blog and in the next phase, we went an extra mile to make the AI Search Engines trust and obsess over our content.",
      strategies: [
        {
          name: 'Semantic Cluster Strategy',
          description: 'Developed interconnected topical clusters using high-intent entities to bridge knowledge gaps with data-driven niche content.'
        },
        {
          name: 'Query Fan-Out Optimization',
          description: 'Mapped and targeted expanded query patterns used by LLMs and AI Overviews to discover authoritative sources.'
        },
        {
          name: 'Citation-Worthy Content',
          description: "Published Acredge's unique expert insights in structured formats to enhance semantic crawlability and earn primary source citations."
        },
        {
          name: 'Real-Time Monitoring',
          description: "Used Visble's platform to track source mentions across ChatGPT, Perplexity, and Google AI Overview daily."
        }
      ]
    },
    
    results: {
      title: 'The Results',
      description: 'Within 60 days, Acredge transformed from invisible to one of the most cited sources in its industry.',
      metrics: [
        {
          label: 'Source Mentions',
          value: '100+',
          change: 'From 0 in 60 days'
        },
        {
          label: 'AI Search Visibility',
          value: '850%',
          change: 'Increase in 2 months'
        },
        {
          label: 'Competitive Position',
          value: 'Top 5',
          change: 'Against 10-year-old competitors'
        },
        {
          label: 'Organic Traffic',
          value: '320%',
          change: 'Growth from AI referrals'
        }
      ],
      testimonial: {
        quote: "Visble helped us leapfrog competitors who've been in the market for years. By focusing on AI search optimization, we achieved in 60 days what would have taken 2+ years with traditional SEO.",
        author: 'Agam',
        role: 'Founder, Acredge'
      }
    },
    
    timeline: '60 days',
    tags: ['GEO', 'AI Search', 'EdTech', 'Brand Visibility']
  },
  
  {
    slug: 'flyhomes-case-study',
    company: 'Flyhomes',
    location: 'Washington, USA',
    avatar: '/iddHundDDQ_1767881827127.png',
    title: 'How Flyhomes Gained 512% Growth in Source Mentions Within 40 days',
    shortDescription: "Flyhomes achieved AI source mentions and a top-3 ranking for citations with Visble. See how our SEO and GEO strategies rebuilt ChatGPT’s trust in just 40 days.",
    industry: 'Real Estate',
    companySize: '200-500 employees',
    website: 'https://flyhomes.com',
    color: '#22C55E', // Green
    
    // Multi-metric graph data
    graphData: [
      { week: 'Start', sourceMentions: 15, rankingPosition: 85, citationConsistency: 30, brandQueries: 20 },
      { week: 'Week 1', sourceMentions: 25, rankingPosition: 75, citationConsistency: 45, brandQueries: 35 },
      { week: 'Week 2', sourceMentions: 45, rankingPosition: 55, citationConsistency: 65, brandQueries: 55 },
      { week: 'Week 3', sourceMentions: 70, rankingPosition: 30, citationConsistency: 80, brandQueries: 75 },
      { week: 'Week 4', sourceMentions: 92, rankingPosition: 8, citationConsistency: 89, brandQueries: 90 }
    ],
    
    challenge: {
      title: 'The Challenge',
      description: 'Flyhomes was getting cited by AI models, but far less frequently than competitors, despite having quality content.',
      painPoints: [
        'Ranked 17th in source mentions among real estate companies',
        'Inconsistent citation patterns across different AI models',
        'ChatGPT prioritised external sources over Flyhomes.',
        'The goal was to increase brand mentions without increasing ad spend.',
      ]
    },
    
    // Workflow for Flyhomes
    workflow: {
      title: 'The Workflow: BTS',
      subtitle: 'A 40-day sprint to dominate AI search citations in real estate',
      steps: [
        {
          id: 1,
          days: 'Day 1-5',
          title: 'Assessing Keyword and Intent',
          description: 'Analysed high-volume informative keywords to identify gaps where AI models lacked credible source citations.',
          icon: 'Search',
          color: 'purple',
          metrics: '500+ queries analyzed'
        },
        {
          id: 2,
          days: 'Day 6-12',
          title: 'Step 2: Running Informative Campaigns',
          description: 'Used large number of  prompts to target keywords and cover all possible queries with Visible Analytics tool.',
          icon: 'Map',
          color: 'blue',
          metrics: '20+ content gaps identified'
        },
        {
          id: 3,
          days: 'Day 13-22',
          title: 'Building Topical Authority',
          description: 'Developed content for fifteen specialised GEO-focused topics to establish dominance in the real estate niche.',
          icon: 'Shield',
          color: 'indigo',
          metrics: '50+ pages optimized'
        },
        {
          id: 4,
          days: 'Day 23-32',
          title: 'Tracking Performance',
          description: 'Monitored citation growth across major LLMs while measuring significant increases in organic brand search queries',
          icon: 'Network',
          color: 'cyan',
          metrics: '8 topical clusters created'
        },
        {
          id: 5,
          days: 'Day 33-40',
          title: 'Witnessed Strategic Excellence',
          description: 'Achieved top 3 positioning, 512% more mentions, 89% citation consistency, and a 245% brand query surge.',
          icon: 'Zap',
          color: 'green',
          metrics: '15+ quick wins implemented'
        },
        {
          id: 6,
          days: 'Day 40',
          title: 'Achievement Unlocked',
          description: 'Flyhomes rocketed from 17th to 3rd position with 512% growth in source mentions and 89% citation consistency!',
          icon: 'Trophy',
          color: 'amber',
          metrics: '3rd position achieved!'
        }
      ],
      observation: {
        title: 'Our Observation',
        description: 'AI models heavily favor sources that demonstrate clear topical expertise within specific contexts. Understanding the exact topics and question types that trigger citations is more important than general content quality. Context-specific optimization beats broad content strategies.'
      }
    },
    
    solution: {
      title: 'The Visble Approach',
      description: 'We moved beyond standard SEO to perform Generative Engine Optimisation (GEO). By understanding how ChatGPT evaluates credibility, we bridged the gap between "having information" and "being the source."',
      strategies: [
        {
          name: 'Context Mapping',
          description: 'Identified the exact topics and question types where ChatGPT was most likely to cite real estate sources.'
        },
        {
          name: 'Content Gap Analysis',
          description: 'Found topics where Flyhomes had expertise but lacked AI-optimised content coverage.'
        },
        {
          name: 'Authority Signals',
          description: 'Revamped content with the specific technical markers and data structures that LLMs prioritise.'
        },
        {
          name: 'Topical Clustering',
          description: 'Created interconnected hubs that proved Flyhomes’ depth of knowledge across all real estate queries.'
        }
      ]
    },
    
    results: {
      title: 'The Results',
      description: 'We stopped treating content as static pages and started treating it as training-ready data. By feeding the AI exactly what it needed to see: authority signals, schema-rich indicators, and semantic depth, we turned Flyhomes from a "result" into a "source.',
      metrics: [
        {
          label: 'Source Mentions',
          value: '512%',
          change: 'Growth in 40 days'
        },
        {
          label: 'Ranking Position',
          value: '3rd',
          change: 'From 17th position'
        },
        {
          label: 'Citation Consistency',
          value: '89%',
          change: 'Across AI models'
        },
        {
          label: 'Brand Queries',
          value: '245%',
          change: 'Increase in brand searches'
        }
      ],
      testimonial: {
        quote: "We were creating great content but ChatGPT wasn't citing us. Visble showed us exactly what context and topics to focus on. The results were immediate and dramatic.",
        author: 'Vaibhav',
        role: 'Marketing Director, Flyhomes'
      }
    },
    
    timeline: '40 days',
    tags: ['Real Estate', 'Citation Optimization', 'ChatGPT', 'Brand Mentions']
  },
  
  {
    slug: 'dgft-guru-case-study',
    company: 'DGFT Guru',
    location: 'India',
    avatar: '/dgft.png',
    title: 'DGFT Guru Gained Visibility from 20% to 80% by Revamping Content for AI',
    shortDescription: "Here’s how Visble used SEO and GEO strategies to achieve a 400% citation recovery and a 290% surge in AI-driven traffic by optimising pre-existing content.",
    industry: 'Government Compliance',
    companySize: '10-50 employees',
    color: '#A855F7', // Purple
    
    // Multi-metric graph data - Recovery curve
    graphData: [
      { week: 'Month 1', sourceMentions: 65, rankingPosition: 35, citationConsistency: 70, brandQueries: 60 },
      { week: 'Month 2', sourceMentions: 35, rankingPosition: 65, citationConsistency: 40, brandQueries: 35 },
      { week: 'Month 3', sourceMentions: 20, rankingPosition: 80, citationConsistency: 25, brandQueries: 22 },
      { week: 'Refresh', sourceMentions: 45, rankingPosition: 55, citationConsistency: 50, brandQueries: 48 },
      { week: 'Month 6', sourceMentions: 80, rankingPosition: 20, citationConsistency: 85, brandQueries: 82 }
    ],
    
    challenge: {
      title: 'The Challenge',
      description: 'Despite a strong performance previously, DGFT Guru saw a declining visibility in AI search results.',
      painPoints: [
        'Despite a strong performance previously, DGFT Guru saw a declining visibility in AI search results.',
        'Outdated and unstructured content was being ignored by AI crawlers.',
        'New players with updated (though less authoritative) info were stealing mention share.',
        "Recent changes in government export-import policies weren't reflected in real-time.",
      ]
    },
    
    // Workflow for DGFT Guru
    workflow: {
      title: 'The Workflow: BTS',
      subtitle: 'A 45-day recovery journey from 20% to 80% brand visibility',
      steps: [
        {
          id: 1,
          days: 'Day 1-7',
          title: 'Auditing Existing Content',
          description: 'Identified unreliable data flagging systemic trust issues to restore core domain authority and crawler confidence.',
          icon: 'AlertCircle',
          color: 'purple',
          metrics: 'Root cause identified'
        },
        {
          id: 2,
          days: 'Day 8-15',
          title: 'Restructuring Core Pages',
          description: 'Systematically reviewed all content to flag outdated information, expired data, and government policy changes not reflected on site.',
          icon: 'Calendar',
          color: 'blue',
          metrics: '150+ pages flagged as stale'
        },
        {
          id: 3,
          days: 'Day 16-25',
          title: 'Revamping Blog Content',
          description: 'Recreated top-performing blogs by adding unique expert insights and high-volume keywords for maximum search reach.',
          icon: 'RefreshCw',
          color: 'indigo',
          metrics: '150+ pages refreshed'
        },
        {
          id: 4,
          days: 'Day 26-35',
          title: 'Getting GEO Strategies at Work',
          description: 'Restructured technical expertise into precise, scannable formats prioritised by AI search engines and generative models.',
          icon: 'Clock',
          color: 'cyan',
          metrics: 'Freshness protocol implemented'
        },
        {
          id: 5,
          days: 'Day 36-42',
          title: 'Realising Strategic Success',
          description: 'Our SEO+GEO implementation delivered 80% visibility, 400% citation recovery, and massive AI-driven traffic surges.',
          icon: 'FileText',
          color: 'green',
          metrics: '25 new guides published'
        },
        {
          id: 6,
          days: 'Day 45',
          title: 'Full Recovery Achieved',
          description: 'DGFT Guru recovered to 80% visibility with 400% citation increase, exceeding previous peak performance!',
          icon: 'CheckCircle',
          color: 'amber',
          metrics: '80% visibility achieved!'
        }
      ],
      observation: {
        title: 'Our Observation',
        description: 'Content freshness is a critical ranking factor for AI models, especially in rapidly changing domains like government compliance. AI models actively penalize outdated information and favor sources that demonstrate timeliness. Regular content updates with clear date signals are essential for maintaining AI visibility.'
      }
    },
    
    solution: {
      title: 'The Visble Approach',
      description: "Our strategy moved beyond keywords to semantic relevance and freshness. We didn't just update the existing content; we restructured it to make it skimmable by AI models. The right combo of SEO and GEO resulted in regaining traffic and solidifying authority in AI search.",
      strategies: [
        {
          name: 'Freshness Audit',
          description: 'Scanned existing content for outdated information that AI models were flagging as unreliable.'
        },
        {
          name: 'Query Fan-Out Analysis',
          description: 'Mapped new query patterns related to recent government policy changes for high-intent queries.'
        },
        {
          name: 'Content Refresh Protocol',
          description: 'Systematically updated content with current data, adding publication and update dates for crawlability'
        },
        {
          name: 'Timeline Signals',
          description: 'Integrated schema-rich freshness indicators prioritised by AI models for authority and source reliability.'
        }
      ]
    },
    
    results: {
      title: 'The Results',
      description: "By prioritising content freshness and semantic relevance, DGFT Guru didn't just recover; they redefined their market presence. Moving beyond simple rankings, the Gurus are now the primary cited source for almost every significant industry query across AI search platforms.",
      metrics: [
        {
          label: 'Brand Visibility',
          value: '80%',
          change: 'From 20% baseline'
        },
        {
          label: 'Content Freshness Score',
          value: '95%',
          change: 'Up from 45%'
        },
        {
          label: 'Citation Recovery',
          value: '400%',
          change: 'Increase in mentions'
        },
        {
          label: 'Traffic from AI',
          value: '290%',
          change: 'Growth in referrals'
        }
      ],
      testimonial: {
        quote: "Visble's monitoring showed us exactly when and why our visibility was dropping. The content refresh strategy brought us back stronger than ever.",
        author: 'Mehul',
        role: 'Founder, DGFT Guru'
      }
    },
    
    timeline: '45 days',
    tags: ['Content Freshness', 'Government', 'AI Overview', 'Recovery']
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
  return caseStudiesData.find(study => study.slug === slug);
}

export function getAllCaseStudies(): CaseStudyData[] {
  return caseStudiesData;
}