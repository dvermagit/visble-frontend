// // import Link from "next/link";
// // import { ArrowRight } from "lucide-react";

// // const blogPosts = [
// //   {
// //     slug: "how-to-get-our-website-cited-by-ai",
// //     title: "How to Get Your Website Cited by AI",
// //     description:
// //       "Between May 2024 and May 2025, overall web crawl traffic grew by 18%, while AI-only crawlers surged from 5% to 30%.",
// //     image:
// //       "https://visble.ai/wp-content/uploads/2025/12/How-to-Get-Your-Website-Cited-by-AI.png",
// //     readTime: "8 min read",
// //   },
// //   {
// //     slug: "what-is-query-fan-out-and-how-to-use-it-to-improve-ai-search-visibility",
// //     title:
// //       "What is Query Fan Out and How to Use it to Improve AI Search Visibility?",
// //     description:
// //       "Learn about Query Fan Out and how it impacts your AI search visibility strategy.",
// //     image:
// //       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
// //     readTime: "6 min read",
// //   },
// // ];

// // export default function BlogsPage() {
// //   return (
// //     <div className="min-h-screen bg-background text-foreground">
// //       <div className="max-w-7xl mx-auto px-6 py-16">
// //         <h1 className="text-5xl font-bold mb-12">
// //           Articles & tutorials to help you understand GEO & AEO
// //         </h1>

// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {blogPosts.map((post) => (
// //             <Link
// //               key={post.slug}
// //               href={`/blog/${post.slug}`}
// //               className="group block"
// //             >
// //               <div className="border rounded-2xl overflow-hidden hover:border-primary transition">
// //                 <img
// //                   src={post.image}
// //                   alt={post.title}
// //                   className="aspect-video w-full object-cover"
// //                 />
// //                 <div className="p-6">
// //                   <h2 className="text-xl font-bold mb-2">
// //                     {post.title}
// //                   </h2>
// //                   <p className="text-sm text-muted-foreground mb-4">
// //                     {post.description}
// //                   </p>
// //                   <div className="flex justify-between items-center">
// //                     <span className="text-xs">{post.readTime}</span>
// //                     <ArrowRight className="w-4 h-4" />
// //                   </div>
// //                 </div>
// //               </div>
// //             </Link>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // "use client";
// // import React, { useState } from 'react';
// // import { Clock, ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';

// // const blogPosts = [
// //   {
// //     id: 1,
// //     title: "How to Get Your Website Cited by AI",
// //     description: "Between May 2024 and May 2025, overall web crawl traffic grew by 18%, while AI-only crawlers have surged from 5% to 30%.",
// //     image: "https://visble.ai/wp-content/uploads/2025/12/How-to-Get-Your-Website-Cited-by-AI.png",
// //     readTime: "8 min read"
// //   },
// //   {
// //     id: 2,
// //     title: "What is Query Fan Out and How to Use it to Improve AI Search Visibility?",
// //     description: "Learn about Query Fan Out and how it impacts your AI search visibility strategy.",
// //     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
// //     readTime: "6 min read"
// //   },
// //   {
// //     id: 3,
// //     title: "Types of Sources in AI Search Response",
// //     description: "Understanding different source types that AI systems use in their responses.",
// //     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
// //     readTime: "5 min read"
// //   },
// //   {
// //     id: 4,
// //     title: "7 Must-Track Metrics for Generative Engine Optimization (GEO)",
// //     description: "Essential metrics to measure and optimize your GEO performance.",
// //     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
// //     readTime: "7 min read"
// //   },
// //   {
// //     id: 5,
// //     title: "Source Mention Benchmark 2025- Are You Winning the AI Search Visibility Race?",
// //     description: "Comprehensive benchmarking data for AI search visibility in 2025.",
// //     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
// //     readTime: "10 min read"
// //   },
// //   {
// //     id: 6,
// //     title: "What Do Google's SGE, Bing CoPilot & ChatGPT Have in Common?",
// //     description: "Exploring the similarities between major AI search platforms.",
// //     image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
// //     readTime: "8 min read"
// //   }
// // ];

// // export default function BlogComponent() {
// //   const [selectedPost, setSelectedPost] = useState(null);
// //   const [activeSection, setActiveSection] = useState('');

// //   React.useEffect(() => {
// //     if (!selectedPost) return;

// //     const handleScroll = () => {
// //       const sections = ['technical', 'quotability', 'authority', 'visble', 'conclusion'];
// //       const scrollPosition = window.scrollY + 200;

// //       for (const sectionId of sections) {
// //         const element = document.getElementById(sectionId);
// //         if (element) {
// //           const { offsetTop, offsetHeight } = element;
// //           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
// //             setActiveSection(sectionId);
// //             break;
// //           }
// //         }
// //       }
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, [selectedPost]);

// //   const scrollToSection = (id) => {
// //     const element = document.getElementById(id);
// //     if (element) {
// //       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
// //     }
// //   };

// //   if (selectedPost === null) {
// //     // Blog Listing Page
// //     return (
// //       <div className="min-h-screen bg-black text-white">
// //         <div className="max-w-7xl mx-auto px-6 py-16">
// //           <div className="mb-16">
// //             <h1 className="text-5xl md:text-6xl font-bold mb-6">
// //               Articles & tutorials to help you understand the GEO & AEO.
// //             </h1>
// //           </div>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {blogPosts.map((post) => (
// //               <article
// //                 key={post.id}
// //                 onClick={() => setSelectedPost(post.id)}
// //                 className="group cursor-pointer"
// //               >
// //                 <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all">
// //                   <div className="aspect-video overflow-hidden bg-gray-800">
// //                     <img
// //                       src={post.image}
// //                       alt={post.title}
// //                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
// //                     />
// //                   </div>
// //                   <div className="p-6">
// //                     <h2 className="text-xl font-bold mb-3 text-white group-hover:text-gray-300 transition-colors">
// //                       {post.title}
// //                     </h2>
// //                     <p className="text-gray-400 text-sm mb-4 line-clamp-2">
// //                       {post.description}
// //                     </p>
// //                     <div className="flex items-center justify-between">
// //                       <span className="text-xs text-gray-500">{post.readTime}</span>
// //                       <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </article>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // Full Blog Article Page (only showing the first blog post content)
// //   if (selectedPost === 1) {
// //     return (
// //       <div className="min-h-screen bg-white">
// //         {/* Back Button */}
// //         <div className="border-b border-gray-200">
// //           <div className="max-w-7xl mx-auto px-6 py-4">
// //             <button
// //               onClick={() => setSelectedPost(null)}
// //               className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
// //             >
// //               <ArrowLeft className="w-5 h-5" />
// //               <span>Back to Articles</span>
// //             </button>
// //           </div>
// //         </div>

// //         <div className="max-w-7xl mx-auto px-6 py-16">
// //           <div className="flex gap-12">
// //             {/* Main Content */}
// //             <article className="flex-1 max-w-3xl">
// //               {/* Author & Meta */}
// //               <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
// //                 <div className="flex items-center gap-4">
// //                   <img 
// //                     src="https://visble.ai/wp-content/uploads/2025/06/IMG_5768-e1751266201560.webp" 
// //                     alt="Isha Sachdeva" 
// //                     className="w-14 h-14 rounded-full"
// //                   />
// //                   <div>
// //                     <p className="font-semibold text-gray-900">Isha Sachdeva</p>
// //                     <p className="text-sm text-gray-600">Founder, visble.ai</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-center gap-2 text-sm text-gray-600">
// //                   <Clock className="w-4 h-4" />
// //                   <span>8 min read</span>
// //                 </div>
// //               </div>
              
// //               {/* Title */}
// //               <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
// //                 How to Get Your Website Cited by AI
// //               </h1>
              
// //               {/* Featured Image */}
// //               <div className="relative rounded-xl overflow-hidden mb-8 shadow-lg">
// //                 <img 
// //                   src="https://visble.ai/wp-content/uploads/2025/12/How-to-Get-Your-Website-Cited-by-AI.png" 
// //                   alt="How to Get Your Website Cited by AI"
// //                   className="w-full"
// //                 />
// //               </div>

// //               {/* Intro Text */}
// //               <p className="text-xl text-gray-700 leading-relaxed mb-12">
// //                 Between May 2024 and May 2025, overall web crawl traffic grew by 18%, while AI-only crawlers have surged from 5% to 30%. Learn how to optimize your content for AI citations.
// //               </p>

// //               {/* Stats Cards */}
// //               <div className="grid grid-cols-3 gap-4 mb-16">
// //                 <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
// //                   <p className="text-3xl font-bold text-gray-900 mb-1">18%</p>
// //                   <p className="text-sm text-gray-600">Crawl Growth</p>
// //                 </div>
// //                 <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
// //                   <p className="text-3xl font-bold text-gray-900 mb-1">1,702</p>
// //                   <p className="text-sm text-gray-600">Citations Analyzed</p>
// //                 </div>
// //                 <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
// //                   <p className="text-3xl font-bold text-gray-900 mb-1">900:1</p>
// //                   <p className="text-sm text-gray-600">Bot to Human</p>
// //                 </div>
// //               </div>

// //               {/* Introduction */}
// //               <div className="mb-16">
// //                 <p className="text-gray-800 leading-relaxed mb-6 text-lg">
// //                   But many of those crawls never result in user visits. Some sites report nearly 900 bot crawls for every single human referral. So, being crawled is not enough. To get your website noticed and cited by AI, your content must be structured, quotable, and authoritative.
// //                 </p>
// //                 <div className="bg-gray-50 border-l-4 border-gray-900 rounded-r-lg p-6 my-8">
// //                   <p className="text-gray-800 leading-relaxed m-0 text-lg">
// //                     That's where <strong>Generative Engine Optimization (GEO)</strong> steps in. Your focus must be to excel in <strong>Crawlability</strong>, <strong>Quotability</strong>, and <strong>Authority</strong>. That's what AI search engines reward.
// //                   </p>
// //                 </div>
// //               </div>

// //               {/* Section 1: Technical Accessibility */}
// //               <section id="technical" className="mb-20 scroll-mt-24">
// //                 <div className="mb-8">
// //                   <h2 className="text-4xl font-bold text-gray-900 mb-2">
// //                     Technical Accessibility
// //                   </h2>
// //                   <p className="text-lg text-gray-600">Ensuring AI Can Read You</p>
// //                 </div>

// //                 <div className="space-y-12">
// //                   {/* Step 1 */}
// //                   <div>
// //                     <div className="flex gap-6">
// //                       <div className="flex-shrink-0">
// //                         <div className="w-10 h-10 rounded-lg bg-gray-900 text-white font-bold text-lg flex items-center justify-center">
// //                           1
// //                         </div>
// //                       </div>
// //                       <div className="flex-1">
// //                         <h3 className="text-2xl font-bold text-gray-900 mb-4">
// //                           Check Your Host/CDN for AI Blocks
// //                         </h3>
// //                         <p className="text-gray-700 leading-relaxed mb-4 text-lg">
// //                           Many popular Content Delivery Networks (CDNs), such as Cloudflare, or certain web hosting providers, have blanket security settings. This automatically blocks known AI crawlers to manage bandwidth or prevent scraping.
// //                         </p>
// //                         <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
// //                           <p className="font-semibold text-gray-900 mb-2">Action:</p>
// //                           <p className="text-gray-700">
// //                             Contact your hosting provider or review your CDN security settings immediately. Verify that specific AI user agents (e.g., GPTBot, OAI-Searchbot) are explicitly allowed access to your website.
// //                           </p>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Step 2 */}
// //                   <div>
// //                     <div className="flex gap-6">
// //                       <div className="flex-shrink-0">
// //                         <div className="w-10 h-10 rounded-lg bg-gray-900 text-white font-bold text-lg flex items-center justify-center">
// //                           2
// //                         </div>
// //                       </div>
// //                       <div className="flex-1">
// //                         <h3 className="text-2xl font-bold text-gray-900 mb-4">
// //                           Configure Your robots.txt Explicitly
// //                         </h3>
// //                         <p className="text-gray-700 leading-relaxed mb-4 text-lg">
// //                           Don't rely on implicit rules. While you may want to restrict general crawlers from low-value pages, you must proactively grant access to your authoritative content for AI models.
// //                         </p>
// //                         <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-4">
// //                           <p className="font-semibold text-gray-900 mb-2">Action:</p>
// //                           <p className="text-gray-700">
// //                             Allow specific AI agents to crawl your most valuable sections in your robots.txt file.
// //                           </p>
// //                         </div>
// //                         <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
// //                           <pre className="text-sm text-green-400 font-mono">
// // {`User-agent: GPTBot
// // Allow: /blog/
// // Allow: /research/`}
// //                           </pre>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Step 3 */}
// //                   <div>
// //                     <div className="flex gap-6">
// //                       <div className="flex-shrink-0">
// //                         <div className="w-10 h-10 rounded-lg bg-gray-900 text-white font-bold text-lg flex items-center justify-center">
// //                           3
// //                         </div>
// //                       </div>
// //                       <div className="flex-1">
// //                         <h3 className="text-2xl font-bold text-gray-900 mb-4">
// //                           Reduce JavaScript-Only Content
// //                         </h3>
// //                         <p className="text-gray-700 leading-relaxed mb-4 text-lg">
// //                           While Googlebot is highly capable of executing client-side JavaScript (JS), many AI crawlers and LLM data pipelines are not. Content rendered dynamically via JS often appears to them as an empty or incomplete page.
// //                         </p>
// //                         <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
// //                           <p className="font-semibold text-gray-900 mb-2">Action:</p>
// //                           <p className="text-gray-700">
// //                             Prioritize static HTML rendering for all key informational elements: headings, lists, definitions, and core data points.
// //                           </p>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </section>

// //               {/* Section 2: Content Quotability */}
// //               <section id="quotability" className="mb-20 scroll-mt-24">
// //                 <div className="mb-8">
// //                   <h2 className="text-4xl font-bold text-gray-900 mb-2">
// //                     Content Quotability
// //                   </h2>
// //                   <p className="text-lg text-gray-600">Making Your Facts Irresistible</p>
// //                 </div>

// //                 <div className="space-y-12">
// //                   {/* Step 4 */}
// //                   <div>
// //                     <div className="flex gap-6">
// //                       <div className="flex-shrink-0">
// //                         <div className="w-10 h-10 rounded-lg bg-gray-900 text-white font-bold text-lg flex items-center justify-center">
// //                           4
// //                         </div>
// //                       </div>
// //                       <div className="flex-1">
// //                         <h3 className="text-2xl font-bold text-gray-900 mb-4">
// //                           The E-E-A-T Foundation: Build Trust for the AI
// //                         </h3>
// //                         <p className="text-gray-700 leading-relaxed mb-6 text-lg">
// //                           AI models look for trusted and reliable sources. A fact from a high-E-E-A-T source is what LLMs value.
// //                         </p>
// //                         <div className="space-y-3">
// //                           <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
// //                             <p className="font-semibold text-gray-900 mb-2">Expert Credentials</p>
// //                             <p className="text-gray-700">Ensure every cited piece has a clear Author Bio with verifiable experience and expertise.</p>
// //                           </div>
// //                           <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
// //                             <p className="font-semibold text-gray-900 mb-2">Internal Citations</p>
// //                             <p className="text-gray-700">Actively cite and interlink authoritative, third-party sources within your text.</p>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Step 5 */}
// //                   <div>
// //                     <div className="flex gap-6">
// //                       <div className="flex-shrink-0">
// //                         <div className="w-10 h-10 rounded-lg bg-gray-900 text-white font-bold text-lg flex items-center justify-center">
// //                           5
// //                         </div>
// //                       </div>
// //                       <div className="flex-1">
// //                         <h3 className="text-2xl font-bold text-gray-900 mb-4">
// //                           Format for Instant Extraction: The Direct Answer Rule
// //                         </h3>
// //                         <p className="text-gray-700 leading-relaxed mb-4 text-lg">
// //                           AI does not have time for stories. It needs concise, self-contained answers.
// //                         </p>
// //                         <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-4">
// //                           <p className="font-semibold text-gray-900 mb-2">Action:</p>
// //                           <p className="text-gray-700">
// //                             Adopt a journalistic, AI-friendly writing style. Start every major section or question with a concise, direct, 1-2 sentence answer.
// //                           </p>
// //                         </div>
                        
// //                         <div className="space-y-3">
// //                           <div className="border-2 border-red-200 bg-red-50 rounded-lg p-5">
// //                             <div className="flex items-center gap-2 mb-3">
// //                               <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">BAD</span>
// //                             </div>
// //                             <p className="text-gray-800 italic">"Before we discuss the steps, let's look at the history of schema…"</p>
// //                           </div>
// //                           <div className="border-2 border-green-200 bg-green-50 rounded-lg p-5">
// //                             <div className="flex items-center gap-2 mb-3">
// //                               <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">GOOD</span>
// //                             </div>
// //                             <p className="text-gray-800">"Schema Markup is machine code that tells search engines exactly what your content means, making it highly valuable for AI citations."</p>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Step 6 */}
// //                   <div>
// //                     <div className="flex gap-6">
// //                       <div className="flex-shrink-0">
// //                         <div className="w-10 h-10 rounded-lg bg-gray-900 text-white font-bold text-lg flex items-center justify-center">
// //                           6
// //                         </div>
// //                       </div>
// //                       <div className="flex-1">
// //                         <h3 className="text-2xl font-bold text-gray-900 mb-4">
// //                           Publish Original Data & "Metrics Pieces"
// //                         </h3>
// //                         <p className="text-gray-700 leading-relaxed mb-4 text-lg">
// //                           AI prioritizes unique, non-duplicative data. If you have the only source for a specific statistic, the AI must cite you to include that data in its summary.
// //                         </p>
// //                         <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
// //                           <p className="font-semibold text-gray-900 mb-2">Value:</p>
// //                           <p className="text-gray-700">
// //                             Studies show that pages containing exclusive metrics and charts have an average of <strong>2.7% higher cite rate</strong> in AI overviews compared to informational articles lacking original data.
// //                           </p>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </section>

// //               {/* Section 3: Authority Signals */}
// //               <section id="authority" className="mb-20 scroll-mt-24">
// //                 <div className="mb-8">
// //                   <h2 className="text-4xl font-bold text-gray-900 mb-2">
// //                     Authority Signals
// //                   </h2>
// //                   <p className="text-lg text-gray-600">Boosting Your Brand's Trust Score</p>
// //                 </div>

// //                 <div className="space-y-12">
// //                   {/* Step 7 */}
// //                   <div>
// //                     <div className="flex gap-6">
// //                       <div className="flex-shrink-0">
// //                         <div className="w-10 h-10 rounded-lg bg-gray-900 text-white font-bold text-lg flex items-center justify-center">
// //                           7
// //                         </div>
// //                       </div>
// //                       <div className="flex-1">
// //                         <h3 className="text-2xl font-bold text-gray-900 mb-4">
// //                           Schema Markup Mastery for Structured Answers
// //                         </h3>
// //                         <p className="text-gray-700 leading-relaxed mb-6 text-lg">
// //                           Schema is the direct line to the AI's processing layer. It tells the machine, "This is a question, and this is the answer," streamlining the synthesis process.
// //                         </p>
// //                         <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
// //                           <p className="font-semibold text-gray-900 mb-4">Implement advanced schema types:</p>
// //                           <div className="space-y-3">
// //                             <div className="flex items-start gap-3">
// //                               <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
// //                               <div>
// //                                 <p className="font-medium text-gray-900">HowTo Schema</p>
// //                                 <p className="text-sm text-gray-700">Essential for step-by-step guides</p>
// //                               </div>
// //                             </div>
// //                             <div className="flex items-start gap-3">
// //                               <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
// //                               <div>
// //                                 <p className="font-medium text-gray-900">FAQ Page Schema</p>
// //                                 <p className="text-sm text-gray-700">Explicitly label Q&A pairs</p>
// //                               </div>
// //                             </div>
// //                             <div className="flex items-start gap-3">
// //                               <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
// //                               <div>
// //                                 <p className="font-medium text-gray-900">Entity Schema</p>
// //                                 <p className="text-sm text-gray-700">Connect your brand and authors to knowledge graphs</p>
// //                               </div>
// //                             </div>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Step 8 */}
// //                   <div>
// //                     <div className="flex gap-6">
// //                       <div className="flex-shrink-0">
// //                         <div className="w-10 h-10 rounded-lg bg-gray-900 text-white font-bold text-lg flex items-center justify-center">
// //                           8
// //                         </div>
// //                       </div>
// //                       <div className="flex-1">
// //                         <h3 className="text-2xl font-bold text-gray-900 mb-4">
// //                           Off-Site Trust: Optimizing Brand Mentions
// //                         </h3>
// //                         <p className="text-gray-700 leading-relaxed mb-6 text-lg">
// //                           GEO is not just about your site. It's about your entity across the web. AI models prioritize brands with known, consistent public profiles.
// //                         </p>
// //                         <div className="space-y-3">
// //                           <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
// //                             <p className="font-semibold text-gray-900 mb-2">Wikipedia & Knowledge Panel</p>
// //                             <p className="text-gray-700">Ensure your company has entries on these high-trust platforms</p>
// //                           </div>
// //                           <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
// //                             <p className="font-semibold text-gray-900 mb-2">Authority Directories</p>
// //                             <p className="text-gray-700">Secure placement on authoritative review sites</p>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* Step 9 */}
// //                   <div>
// //                     <div className="flex gap-6">
// //                       <div className="flex-shrink-0">
// //                         <div className="w-10 h-10 rounded-lg bg-gray-900 text-white font-bold text-lg flex items-center justify-center">
// //                           9
// //                         </div>
// //                       </div>
// //                       <div className="flex-1">
// //                         <h3 className="text-2xl font-bold text-gray-900 mb-4">
// //                           Consistent Messaging (Entity Alignment)
// //                         </h3>
// //                         <p className="text-gray-700 leading-relaxed mb-4 text-lg">
// //                           The AI needs to recognize that your website, your social media, and your directory listings all refer to the same authoritative entity.
// //                         </p>
// //                         <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
// //                           <p className="font-semibold text-gray-900 mb-2">Action:</p>
// //                           <p className="text-gray-700">
// //                             Ensure your brand name, official product names, and core claims are identical across your website, social profiles, and directory listings.
// //                           </p>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </section>

// //               {/* Conclusion Section */}
// //               <section id="visble" className="border-t-2 border-gray-200 pt-16 mb-16 scroll-mt-24">
// //                 <h2 className="text-4xl font-bold text-gray-900 mb-6">
// //                   How Visble.ai Helps Measure Your AI Success
// //                 </h2>
// //                 <p className="text-xl text-gray-700 leading-relaxed mb-12">
// //                   Optimizing for AI citation requires specialized measurement. When doing everything systematically, tracking your progress must also be systematic. That's what Visble.ai is built for.
// //                 </p>

// //                 <div className="space-y-6 mb-16">
// //                   <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
// //                     <h3 className="text-xl font-bold text-gray-900 mb-3">Citation Tracking</h3>
// //                     <p className="text-gray-700 leading-relaxed">
// //                       Monitor your brand's Citation Share. See how often you are cited compared to your competitors in AI Overviews and LLM responses.
// //                     </p>
// //                   </div>

// //                   <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
// //                     <h3 className="text-xl font-bold text-gray-900 mb-3">Prompt Tracking</h3>
// //                     <p className="text-gray-700 leading-relaxed">
// //                       Identify the exact, long-tail questions and conversational prompts users are asking AI in your niche.
// //                     </p>
// //                   </div>

// //                   <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
// //                     <h3 className="text-xl font-bold text-gray-900 mb-3">Competitor Analysis</h3>
// //                     <p className="text-gray-700 leading-relaxed">
// //                       Analyze which competitors are winning citations, allowing you to reverse-engineer their strategies.
// //                     </p>
// //                   </div>
// //                 </div>

// //                 {/* CTA */}
// //                 <div id="conclusion" className="bg-gray-900 rounded-2xl p-12 text-center scroll-mt-24">
// //                   <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
// //                     Ready to Track Your GEO Metrics?
// //                   </h3>
// //                   <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
// //                     Start measuring your brand's AI visibility today with Visble.ai
// //                   </p>
// //                   <button className="bg-white text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center gap-3 group">
// //                     Track GEO Metrics Now
// //                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
// //                   </button>
// //                 </div>
// //               </section>
// //             </article>

// //             {/* Sticky Sidebar TOC */}
// //             <aside className="hidden lg:block w-80">
// //               <div className="sticky top-24">
// //                 <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
// //                   <h3 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wide">Table of Contents</h3>
// //                   <nav className="space-y-3">
// //                     <button
// //                       onClick={() => scrollToSection('technical')}
// //                       className={`block w-full text-left text-sm transition-colors py-2 px-3 rounded-lg ${
// //                         activeSection === 'technical'
// //                           ? 'bg-gray-900 text-white font-medium'
// //                           : 'text-gray-700 hover:bg-gray-100'
// //                       }`}
// //                     >
// //                       Technical Accessibility (Ensuring AI Can Read You)
// //                     </button>
// //                     <button
// //                       onClick={() => scrollToSection('quotability')}
// //                       className={`block w-full text-left text-sm transition-colors py-2 px-3 rounded-lg ${
// //                         activeSection === 'quotability'
// //                           ? 'bg-gray-900 text-white font-medium'
// //                           : 'text-gray-700 hover:bg-gray-100'
// //                       }`}
// //                     >
// //                       Content Quotability (Making Your Facts Irresistible)
// //                     </button>
// //                     <button
// //                       onClick={() => scrollToSection('authority')}
// //                       className={`block w-full text-left text-sm transition-colors py-2 px-3 rounded-lg ${
// //                         activeSection === 'authority'
// //                           ? 'bg-gray-900 text-white font-medium'
// //                           : 'text-gray-700 hover:bg-gray-100'
// //                       }`}
// //                     >
// //                       Authority Signals (Boosting Your Brand's Trust Score)
// //                     </button>
// //                     <button
// //                       onClick={() => scrollToSection('visble')}
// //                       className={`block w-full text-left text-sm transition-colors py-2 px-3 rounded-lg ${
// //                         activeSection === 'visble'
// //                           ? 'bg-gray-900 text-white font-medium'
// //                           : 'text-gray-700 hover:bg-gray-100'
// //                       }`}
// //                     >
// //                       How Visble.ai Helps Measure Your AI Success
// //                     </button>
// //                     <button
// //                       onClick={() => scrollToSection('conclusion')}
// //                       className={`block w-full text-left text-sm transition-colors py-2 px-3 rounded-lg ${
// //                         activeSection === 'conclusion'
// //                           ? 'bg-gray-900 text-white font-medium'
// //                           : 'text-gray-700 hover:bg-gray-100'
// //                       }`}
// //                     >
// //                       Conclusion
// //                     </button>
// //                   </nav>
// //                 </div>
// //               </div>
// //             </aside>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // For other blog posts, show a placeholder
// //   return (
// //     <div className="min-h-screen bg-white">
// //       <div className="border-b border-gray-200">
// //         <div className="max-w-7xl mx-auto px-6 py-4">
// //           <button
// //             onClick={() => setSelectedPost(null)}
// //             className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
// //           >
// //             <ArrowLeft className="w-5 h-5" />
// //             <span>Back to Articles</span>
// //           </button>
// //         </div>
// //       </div>
      
// //       <div className="max-w-4xl mx-auto px-6 py-16">
// //         <h1 className="text-5xl font-bold text-gray-900 mb-6">
// //           {blogPosts.find(p => p.id === selectedPost)?.title}
// //         </h1>
// //         <p className="text-xl text-gray-700">
// //           Content for this article is coming soon...
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }




// /////////// /////////// /////////// ///////
// "use client"
// import React, { useState } from 'react';
// import { Clock, ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';

// const blogPosts = [
//   {
//     id: 1,
//     title: "How to Get Your Website Cited by AI",
//     description: "Between May 2024 and May 2025, overall web crawl traffic grew by 18%, while AI-only crawlers have surged from 5% to 30%.",
//     image: "https://visble.ai/wp-content/uploads/2025/12/How-to-Get-Your-Website-Cited-by-AI.png",
//     readTime: "8 min read"
//   },
//   {
//     id: 2,
//     title: "What is Query Fan Out and How to Use it to Improve AI Search Visibility?",
//     description: "Learn about Query Fan Out and how it impacts your AI search visibility strategy.",
//     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
//     readTime: "6 min read"
//   },
//   {
//     id: 3,
//     title: "Types of Sources in AI Search Response",
//     description: "Understanding different source types that AI systems use in their responses.",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
//     readTime: "5 min read"
//   },
//   {
//     id: 4,
//     title: "7 Must-Track Metrics for Generative Engine Optimization (GEO)",
//     description: "Essential metrics to measure and optimize your GEO performance.",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
//     readTime: "7 min read"
//   },
//   {
//     id: 5,
//     title: "Source Mention Benchmark 2025- Are You Winning the AI Search Visibility Race?",
//     description: "Comprehensive benchmarking data for AI search visibility in 2025.",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
//     readTime: "10 min read"
//   },
//   {
//     id: 6,
//     title: "What Do Google's SGE, Bing CoPilot & ChatGPT Have in Common?",
//     description: "Exploring the similarities between major AI search platforms.",
//     image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
//     readTime: "8 min read"
//   }
// ];

// export default function BlogComponent() {
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [activeSection, setActiveSection] = useState('');

//   React.useEffect(() => {
//     if (!selectedPost) return;

//     const handleScroll = () => {
//       const sections = ['technical', 'quotability', 'authority', 'visble', 'conclusion'];
//       const scrollPosition = window.scrollY + 200;

//       for (const sectionId of sections) {
//         const element = document.getElementById(sectionId);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(sectionId);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [selectedPost]);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   if (selectedPost === null) {
//     // Blog Listing Page
//     return (
//       <div className="min-h-screen bg-background text-foreground relative">
//         {/* Grid pattern background */}
//         <div className="absolute inset-0 opacity-5">
//           <div 
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `
//                 linear-gradient(to right, currentColor 1px, transparent 1px),
//                 linear-gradient(to bottom, currentColor 1px, transparent 1px)
//               `,
//               backgroundSize: '60px 60px'
//             }}
//           />
//         </div>

//         {/* Glowing accent corners */}
//         <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

//         <div className="relative max-w-7xl mx-auto px-6 py-16">
//           <div className="mb-16">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 bricolage">
//               Articles & tutorials to help you understand the GEO & AEO.
//             </h1>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {blogPosts.map((post) => (
//               <article
//                 key={post.id}
//                 onClick={() => setSelectedPost(post.id)}
//                 className="group cursor-pointer flex"
//               >
//                 <div className="bg-background/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/30 hover:border-primary/50 transition-all shadow-lg hover:shadow-primary/10 flex flex-col w-full">
//                   <div className="aspect-video overflow-hidden bg-muted flex-shrink-0">
//                     <img
//                       src={post.image}
//                       alt={post.title}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>
//                   <div className="p-6 flex flex-col flex-grow">
//                     <h2 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors bricolage line-clamp-2 min-h-[3.5rem]">
//                       {post.title}
//                     </h2>
//                     <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
//                       {post.description}
//                     </p>
//                     <div className="flex items-center justify-between mt-auto">
//                       <span className="text-xs text-muted-foreground">{post.readTime}</span>
//                       <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
//                     </div>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Full Blog Article Page (only showing the first blog post content)
//   if (selectedPost === 1) {
//     return (
//       <div className="min-h-screen bg-white">
//         {/* Back Button */}
//         <div className="border-b border-gray-200">
//           <div className="max-w-7xl mx-auto px-6 py-4">
//             <button
//               onClick={() => setSelectedPost(null)}
//               className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
//             >
//               <ArrowLeft className="w-5 h-5" />
//               <span>Back to Articles</span>
//             </button>
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto px-6 py-16">
//           <div className="flex gap-12">
//             {/* Main Content */}
//             <article className="flex-1 max-w-3xl">
//               {/* Author & Meta */}
//               <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
//                 <div className="flex items-center gap-4">
//                   <img 
//                     src="https://visble.ai/wp-content/uploads/2025/06/IMG_5768-e1751266201560.webp" 
//                     alt="Isha Sachdeva" 
//                     className="w-14 h-14 rounded-full"
//                   />
//                   <div>
//                     <p className="font-semibold text-gray-900">Isha Sachdeva</p>
//                     <p className="text-sm text-gray-600">Founder, visble.ai</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <Clock className="w-4 h-4" />
//                   <span>8 min read</span>
//                 </div>
//               </div>
              
//               {/* Title */}
//               <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
//                 How to Get Your Website Cited by AI
//               </h1>
              
//               {/* Featured Image */}
//               <div className="relative rounded-xl overflow-hidden mb-8 shadow-lg">
//                 <img 
//                   src="https://visble.ai/wp-content/uploads/2025/12/How-to-Get-Your-Website-Cited-by-AI.png" 
//                   alt="How to Get Your Website Cited by AI"
//                   className="w-full"
//                 />
//               </div>

//               {/* Intro Text */}
//               <p className="text-xl text-gray-700 leading-relaxed mb-12">
//                 Between May 2024 and May 2025, overall web crawl traffic grew by 18%, while AI-only crawlers have surged from 5% to 30%. Learn how to optimize your content for AI citations.
//               </p>

//               {/* Stats Cards */}
//               <div className="grid grid-cols-3 gap-4 mb-16">
//                 <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
//                   <p className="text-3xl font-bold text-gray-900 mb-1">18%</p>
//                   <p className="text-sm text-gray-600">Crawl Growth</p>
//                 </div>
//                 <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
//                   <p className="text-3xl font-bold text-gray-900 mb-1">1,702</p>
//                   <p className="text-sm text-gray-600">Citations Analyzed</p>
//                 </div>
//                 <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
//                   <p className="text-3xl font-bold text-gray-900 mb-1">900:1</p>
//                   <p className="text-sm text-gray-600">Bot to Human</p>
//                 </div>
//               </div>

//               {/* Introduction */}
//               <div className="mb-16">
//                 <p className="text-gray-800 leading-relaxed mb-6 text-lg">
//                   But many of those crawls never result in user visits. Some sites report nearly 900 bot crawls for every single human referral. So, being crawled is not enough. To get your website noticed and cited by AI, your content must be structured, quotable, and authoritative.
//                 </p>
//                 <div className="bg-gray-50 border-l-4 border-gray-900 rounded-r-lg p-6 my-8">
//                   <p className="text-gray-800 leading-relaxed m-0 text-lg">
//                     That's where <strong>Generative Engine Optimization (GEO)</strong> steps in. Your focus must be to excel in <strong>Crawlability</strong>, <strong>Quotability</strong>, and <strong>Authority</strong>. That's what AI search engines reward.
//                   </p>
//                 </div>
//               </div>

//               {/* Section 1: Technical Accessibility */}
//               <section id="technical" className="mb-20 scroll-mt-24">
//                 <div className="mb-8">
//                   <h2 className="text-4xl font-bold text-gray-900 mb-2">
//                     Technical Accessibility
//                   </h2>
//                   <p className="text-lg text-gray-600">Ensuring AI Can Read You</p>
//                 </div>

//                 <div className="space-y-12">
//                   {/* Step 1 */}
//                   <div>
//                     <div className="flex gap-6">
//                       <div className="flex-shrink-0">
//                         <div className="w-10 h-10 rounded-lg bg-gray-900 text-white font-bold text-lg flex items-center justify-center">
//                           1
//                         </div>
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                           Check Your Host/CDN for AI Blocks
//                         </h3>
//                         <p className="text-gray-700 leading-relaxed mb-4 text-lg">
//                           Many popular Content Delivery Networks (CDNs), such as Cloudflare, or certain web hosting providers, have blanket security settings. This automatically blocks known AI crawlers to manage bandwidth or prevent scraping.
//                         </p>
//                         <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
//                           <p className="font-semibold text-gray-900 mb-2">Action:</p>
//                           <p className="text-gray-700">
//                             Contact your hosting provider or review your CDN security settings immediately. Verify that specific AI user agents (e.g., GPTBot, OAI-Searchbot) are explicitly allowed access to your website.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Step 2 */}
//                   <div>
//                     <div className="flex gap-6">
//                       <div className="flex-shrink-0">
//                         <div className="w-10 h-10 rounded-lg bg-gray-900 text-white font-bold text-lg flex items-center justify-center">
//                           2
//                         </div>
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                           Configure Your robots.txt Explicitly
//                         </h3>
//                         <p className="text-gray-700 leading-relaxed mb-4 text-lg">
//                           Don't rely on implicit rules. While you may want to restrict general crawlers from low-value pages, you must proactively grant access to your authoritative content for AI models.
//                         </p>
//                         <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-4">
//                           <p className="font-semibold text-gray-900 mb-2">Action:</p>
//                           <p className="text-gray-700">
//                             Allow specific AI agents to crawl your most valuable sections in your robots.txt file.
//                           </p>
//                         </div>
//                         <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
//                           <pre className="text-sm text-green-400 font-mono">
// {`User-agent: GPTBot
// Allow: /blog/
// Allow: /research/`}
//                           </pre>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Step 3 */}
//                   <div>
//                     <div className="flex gap-6">
//                       <div className="flex-shrink-0">
//                         <div className="w-10 h-10 rounded-lg bg-gray-900 text-white font-bold text-lg flex items-center justify-center">
//                           3
//                         </div>
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                           Reduce JavaScript-Only Content
//                         </h3>
//                         <p className="text-gray-700 leading-relaxed mb-4 text-lg">
//                           While Googlebot is highly capable of executing client-side JavaScript (JS), many AI crawlers and LLM data pipelines are not. Content rendered dynamically via JS often appears to them as an empty or incomplete page.
//                         </p>
//                         <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
//                           <p className="font-semibold text-gray-900 mb-2">Action:</p>
//                           <p className="text-gray-700">
//                             Prioritize static HTML rendering for all key informational elements: headings, lists, definitions, and core data points.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </section>

//               {/* Section 2: Content Quotability */}
//               <section id="quotability" className="mb-20 scroll-mt-24">
//                 <div className="mb-8">
//                   <h2 className="text-4xl font-bold text-gray-900 mb-2">
//                     Content Quotability
//                   </h2>
//                   <p className="text-lg text-gray-600">Making Your Facts Irresistible</p>
//                 </div>

//                 <div className="space-y-12">
//                   {/* Step 4 */}
//                   <div>
//                     <div className="flex gap-6">
//                       <div className="flex-shrink-0">
//                         <div className="w-10 h-10 rounded-lg bg-gray-900 text-white font-bold text-lg flex items-center justify-center">
//                           4
//                         </div>
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                           The E-E-A-T Foundation: Build Trust for the AI
//                         </h3>
//                         <p className="text-gray-700 leading-relaxed mb-6 text-lg">
//                           AI models look for trusted and reliable sources. A fact from a high-E-E-A-T source is what LLMs value.
//                         </p>
//                         <div className="space-y-3">
//                           <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
//                             <p className="font-semibold text-gray-900 mb-2">Expert Credentials</p>
//                             <p className="text-gray-700">Ensure every cited piece has a clear Author Bio with verifiable experience and expertise.</p>
//                           </div>
//                           <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
//                             <p className="font-semibold text-gray-900 mb-2">Internal Citations</p>
//                             <p className="text-gray-700">Actively cite and interlink authoritative, third-party sources within your text.</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Step 5 */}
//                   <div>
//                     <div className="flex gap-6">
//                       <div className="flex-shrink-0">
//                         <div className="w-10 h-10 rounded-lg bg-gray-900 text-white font-bold text-lg flex items-center justify-center">
//                           5
//                         </div>
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                           Format for Instant Extraction: The Direct Answer Rule
//                         </h3>
//                         <p className="text-gray-700 leading-relaxed mb-4 text-lg">
//                           AI does not have time for stories. It needs concise, self-contained answers.
//                         </p>
//                         <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-4">
//                           <p className="font-semibold text-gray-900 mb-2">Action:</p>
//                           <p className="text-gray-700">
//                             Adopt a journalistic, AI-friendly writing style. Start every major section or question with a concise, direct, 1-2 sentence answer.
//                           </p>
//                         </div>
                        
//                         <div className="space-y-3">
//                           <div className="border-2 border-red-200 bg-red-50 rounded-lg p-5">
//                             <div className="flex items-center gap-2 mb-3">
//                               <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">BAD</span>
//                             </div>
//                             <p className="text-gray-800 italic">"Before we discuss the steps, let's look at the history of schema…"</p>
//                           </div>
//                           <div className="border-2 border-green-200 bg-green-50 rounded-lg p-5">
//                             <div className="flex items-center gap-2 mb-3">
//                               <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">GOOD</span>
//                             </div>
//                             <p className="text-gray-800">"Schema Markup is machine code that tells search engines exactly what your content means, making it highly valuable for AI citations."</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Step 6 */}
//                   <div>
//                     <div className="flex gap-6">
//                       <div className="flex-shrink-0">
//                         <div className="w-10 h-10 rounded-lg bg-gray-900 text-white font-bold text-lg flex items-center justify-center">
//                           6
//                         </div>
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                           Publish Original Data & "Metrics Pieces"
//                         </h3>
//                         <p className="text-gray-700 leading-relaxed mb-4 text-lg">
//                           AI prioritizes unique, non-duplicative data. If you have the only source for a specific statistic, the AI must cite you to include that data in its summary.
//                         </p>
//                         <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
//                           <p className="font-semibold text-gray-900 mb-2">Value:</p>
//                           <p className="text-gray-700">
//                             Studies show that pages containing exclusive metrics and charts have an average of <strong>2.7% higher cite rate</strong> in AI overviews compared to informational articles lacking original data.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </section>

//               {/* Section 3: Authority Signals */}
//               <section id="authority" className="mb-20 scroll-mt-24">
//                 <div className="mb-8">
//                   <h2 className="text-4xl font-bold text-gray-900 mb-2">
//                     Authority Signals
//                   </h2>
//                   <p className="text-lg text-gray-600">Boosting Your Brand's Trust Score</p>
//                 </div>

//                 <div className="space-y-12">
//                   {/* Step 7 */}
//                   <div>
//                     <div className="flex gap-6">
//                       <div className="flex-shrink-0">
//                         <div className="w-10 h-10 rounded-lg bg-gray-900 text-white font-bold text-lg flex items-center justify-center">
//                           7
//                         </div>
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                           Schema Markup Mastery for Structured Answers
//                         </h3>
//                         <p className="text-gray-700 leading-relaxed mb-6 text-lg">
//                           Schema is the direct line to the AI's processing layer. It tells the machine, "This is a question, and this is the answer," streamlining the synthesis process.
//                         </p>
//                         <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
//                           <p className="font-semibold text-gray-900 mb-4">Implement advanced schema types:</p>
//                           <div className="space-y-3">
//                             <div className="flex items-start gap-3">
//                               <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
//                               <div>
//                                 <p className="font-medium text-gray-900">HowTo Schema</p>
//                                 <p className="text-sm text-gray-700">Essential for step-by-step guides</p>
//                               </div>
//                             </div>
//                             <div className="flex items-start gap-3">
//                               <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
//                               <div>
//                                 <p className="font-medium text-gray-900">FAQ Page Schema</p>
//                                 <p className="text-sm text-gray-700">Explicitly label Q&A pairs</p>
//                               </div>
//                             </div>
//                             <div className="flex items-start gap-3">
//                               <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
//                               <div>
//                                 <p className="font-medium text-gray-900">Entity Schema</p>
//                                 <p className="text-sm text-gray-700">Connect your brand and authors to knowledge graphs</p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Step 8 */}
//                   <div>
//                     <div className="flex gap-6">
//                       <div className="flex-shrink-0">
//                         <div className="w-10 h-10 rounded-lg bg-gray-900 text-white font-bold text-lg flex items-center justify-center">
//                           8
//                         </div>
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                           Off-Site Trust: Optimizing Brand Mentions
//                         </h3>
//                         <p className="text-gray-700 leading-relaxed mb-6 text-lg">
//                           GEO is not just about your site. It's about your entity across the web. AI models prioritize brands with known, consistent public profiles.
//                         </p>
//                         <div className="space-y-3">
//                           <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
//                             <p className="font-semibold text-gray-900 mb-2">Wikipedia & Knowledge Panel</p>
//                             <p className="text-gray-700">Ensure your company has entries on these high-trust platforms</p>
//                           </div>
//                           <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
//                             <p className="font-semibold text-gray-900 mb-2">Authority Directories</p>
//                             <p className="text-gray-700">Secure placement on authoritative review sites</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Step 9 */}
//                   <div>
//                     <div className="flex gap-6">
//                       <div className="flex-shrink-0">
//                         <div className="w-10 h-10 rounded-lg bg-gray-900 text-white font-bold text-lg flex items-center justify-center">
//                           9
//                         </div>
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                           Consistent Messaging (Entity Alignment)
//                         </h3>
//                         <p className="text-gray-700 leading-relaxed mb-4 text-lg">
//                           The AI needs to recognize that your website, your social media, and your directory listings all refer to the same authoritative entity.
//                         </p>
//                         <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
//                           <p className="font-semibold text-gray-900 mb-2">Action:</p>
//                           <p className="text-gray-700">
//                             Ensure your brand name, official product names, and core claims are identical across your website, social profiles, and directory listings.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </section>

//               {/* Conclusion Section */}
//               <section id="visble" className="border-t-2 border-gray-200 pt-16 mb-16 scroll-mt-24">
//                 <h2 className="text-4xl font-bold text-gray-900 mb-6">
//                   How Visble.ai Helps Measure Your AI Success
//                 </h2>
//                 <p className="text-xl text-gray-700 leading-relaxed mb-12">
//                   Optimizing for AI citation requires specialized measurement. When doing everything systematically, tracking your progress must also be systematic. That's what Visble.ai is built for.
//                 </p>

//                 <div className="space-y-6 mb-16">
//                   <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
//                     <h3 className="text-xl font-bold text-gray-900 mb-3">Citation Tracking</h3>
//                     <p className="text-gray-700 leading-relaxed">
//                       Monitor your brand's Citation Share. See how often you are cited compared to your competitors in AI Overviews and LLM responses.
//                     </p>
//                   </div>

//                   <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
//                     <h3 className="text-xl font-bold text-gray-900 mb-3">Prompt Tracking</h3>
//                     <p className="text-gray-700 leading-relaxed">
//                       Identify the exact, long-tail questions and conversational prompts users are asking AI in your niche.
//                     </p>
//                   </div>

//                   <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
//                     <h3 className="text-xl font-bold text-gray-900 mb-3">Competitor Analysis</h3>
//                     <p className="text-gray-700 leading-relaxed">
//                       Analyze which competitors are winning citations, allowing you to reverse-engineer their strategies.
//                     </p>
//                   </div>
//                 </div>

//                 {/* CTA */}
//                 <div id="conclusion" className="bg-gray-900 rounded-2xl p-12 text-center scroll-mt-24">
//                   <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
//                     Ready to Track Your GEO Metrics?
//                   </h3>
//                   <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//                     Start measuring your brand's AI visibility today with Visble.ai
//                   </p>
//                   <button className="bg-white text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center gap-3 group">
//                     Track GEO Metrics Now
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </div>
//               </section>
//             </article>

//             {/* Sticky Sidebar TOC */}
//             <aside className="hidden lg:block w-80">
//               <div className="sticky top-24">
//                 <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
//                   <h3 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wide">Table of Contents</h3>
//                   <nav className="space-y-3">
//                     <button
//                       onClick={() => scrollToSection('technical')}
//                       className={`block w-full text-left text-sm transition-colors py-2 px-3 rounded-lg ${
//                         activeSection === 'technical'
//                           ? 'bg-gray-900 text-white font-medium'
//                           : 'text-gray-700 hover:bg-gray-100'
//                       }`}
//                     >
//                       Technical Accessibility (Ensuring AI Can Read You)
//                     </button>
//                     <button
//                       onClick={() => scrollToSection('quotability')}
//                       className={`block w-full text-left text-sm transition-colors py-2 px-3 rounded-lg ${
//                         activeSection === 'quotability'
//                           ? 'bg-gray-900 text-white font-medium'
//                           : 'text-gray-700 hover:bg-gray-100'
//                       }`}
//                     >
//                       Content Quotability (Making Your Facts Irresistible)
//                     </button>
//                     <button
//                       onClick={() => scrollToSection('authority')}
//                       className={`block w-full text-left text-sm transition-colors py-2 px-3 rounded-lg ${
//                         activeSection === 'authority'
//                           ? 'bg-gray-900 text-white font-medium'
//                           : 'text-gray-700 hover:bg-gray-100'
//                       }`}
//                     >
//                       Authority Signals (Boosting Your Brand's Trust Score)
//                     </button>
//                     <button
//                       onClick={() => scrollToSection('visble')}
//                       className={`block w-full text-left text-sm transition-colors py-2 px-3 rounded-lg ${
//                         activeSection === 'visble'
//                           ? 'bg-gray-900 text-white font-medium'
//                           : 'text-gray-700 hover:bg-gray-100'
//                       }`}
//                     >
//                       How Visble.ai Helps Measure Your AI Success
//                     </button>
//                     <button
//                       onClick={() => scrollToSection('conclusion')}
//                       className={`block w-full text-left text-sm transition-colors py-2 px-3 rounded-lg ${
//                         activeSection === 'conclusion'
//                           ? 'bg-gray-900 text-white font-medium'
//                           : 'text-gray-700 hover:bg-gray-100'
//                       }`}
//                     >
//                       Conclusion
//                     </button>
//                   </nav>
//                 </div>
//               </div>
//             </aside>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // For other blog posts, show a placeholder
//   return (
//     <div className="min-h-screen bg-white">
//       <div className="border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <button
//             onClick={() => setSelectedPost(null)}
//             className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             <span>Back to Articles</span>
//           </button>
//         </div>
//       </div>
      
//       <div className="max-w-4xl mx-auto px-6 py-16">
//         <h1 className="text-5xl font-bold text-gray-900 mb-6">
//           {blogPosts.find(p => p.id === selectedPost)?.title}
//         </h1>
//         <p className="text-xl text-gray-700">
//           Content for this article is coming soon...
//         </p>
//       </div>
//     </div>
//   );
// }

// import { getAllPosts } from '@/lib/posts';
// import Link from 'next/link';
// // Remove: import Image from 'next/image';

// export const metadata = {
//   title: 'Blog - Visble AI',
//   description: 'Latest articles and insights about AI, SEO, and generative engine optimization',
// };

// export default function BlogsPage() {
//   const posts = getAllPosts();

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <h1 className="text-5xl font-bold mb-12">Blog</h1>
      
//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {posts.map((post) => (
//           <Link 
//             key={post.slug} 
//             href={`/blog/${post.slug}`}
//             className="group block"
//           >
//             <article className="border rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
//               {/* Cover Image - Using regular img tag */}
//               {post.coverImage && (
//                 <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
//                   <img
//                     src={`/images/blog/${post.coverImage}`}
//                     alt={post.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//               )}
              
//               {/* Content */}
//               <div className="p-6">
//                 <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
//                   {post.title}
//                 </h2>
                
//                 <time className="text-gray-600 text-sm block mb-3">
//                   {new Date(post.date).toLocaleDateString('en-US', {
//                     year: 'numeric',
//                     month: 'long',
//                     day: 'numeric',
//                   })}
//                 </time>
                
//                 {post.excerpt && (
//                   <p className="text-gray-700 line-clamp-3 mb-4">{post.excerpt}</p>
//                 )}
                
//                 <span className="text-blue-600 font-medium group-hover:underline">
//                   Read more →
//                 </span>
//               </div>
//             </article>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }


import Header from '@/components/Header';
import { getAllPosts } from '@/lib/posts';
import { Metadata } from 'next';
import Link from 'next/link';

// export const metadata = {
//   title: 'Blog - Visble AI',
//   description: 'Latest articles and insights about AI, SEO, and generative engine optimization',
// };
export const metadata: Metadata = {
  title: 'Blog - AI Search Optimization Insights',
  description: 'Expert insights on AI search optimization, generative engine optimization (GEO), and getting cited by ChatGPT, Perplexity, and other AI engines.',
  keywords: 'AI SEO blog, GEO insights, AI search optimization tips, ChatGPT optimization',
  alternates: {
    canonical: 'https://visble.ai/blogs',
  },
  openGraph: {
    title: 'Blog - AI Search Optimization Insights | Visble.ai',
    description: 'Expert insights on AI search optimization and GEO',
    url: 'https://visble.ai/blogs',
    type: 'website',
  },
};

export default function BlogsPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header/>
      {/* Header Section */}
      <div className="bg-white border-b p-5">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Insights, guides, and the latest updates on AI search optimization and generative engine visibility.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group"
            >
              <article className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
                {/* Cover Image */}
                {post.coverImage && (
                  <div className="relative h-56 w-full bg-gradient-to-br from-purple-100 to-blue-100 overflow-hidden">
                    <img
                      src={`/images/blog/${post.coverImage}`}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Categories */}
                  {post.categories && post.categories.length > 0 && (
                    <div className="flex gap-2 mb-3">
                      {post.categories.slice(0, 2).map((cat) => (
                        <span 
                          key={cat} 
                          className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  {/* Date */}
                  <time className="text-sm text-gray-500 mb-3 block">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  
                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
                      {post.excerpt}
                    </p>
                  )}
                  
                  {/* Read More Link */}
                  <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    <span>Read article</span>
                    <svg 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* No posts message */}
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts found.</p>
          </div>
        )}
      </div>
    </div>
  );
}