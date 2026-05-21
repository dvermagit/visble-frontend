// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { Download, Copy, CheckCircle, AlertCircle, FileText, Zap, Shield, TrendingUp, ChevronDown, Search, ArrowRight } from 'lucide-react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// export default function LlmsTxtGeneratorPage() {
//   const [url, setUrl] = useState('');
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [generatedContent, setGeneratedContent] = useState('');
//   const [copied, setCopied] = useState(false);

//   const handleGenerate = async () => {
//     if (!url) return;
    
//     setIsGenerating(true);
    
//     // Simulate generation (replace with actual API call)
//     setTimeout(() => {
//       const content = `# ${url}

// > A comprehensive resource for AI and machine learning topics

// ## Company Information
// - **Name**: ${url.replace('https://', '').replace('http://', '').split('/')[0]}
// - **Domain**: ${url}
// - **Industry**: Technology
// - **Description**: Leading provider of AI solutions and services

// ## Key Resources

// ### Documentation
// - [Getting Started Guide](${url}/docs/getting-started)
// - [API Reference](${url}/api)
// - [Best Practices](${url}/best-practices)

// ### Blog Posts
// - [Understanding AI Search Optimization](${url}/blog/ai-search-optimization)
// - [GEO Strategy Guide](${url}/blog/geo-strategy)
// - [Content Optimization Tips](${url}/blog/content-optimization)

// ### Case Studies
// - [How We Achieved 500% Growth](${url}/case-studies/growth)
// - [AI Implementation Success Story](${url}/case-studies/ai-success)

// ## Contact
// - **Support**: support@${url.replace('https://', '').replace('http://', '').split('/')[0]}
// - **Sales**: sales@${url.replace('https://', '').replace('http://', '').split('/')[0]}

// ## Technical Details
// - **Last Updated**: ${new Date().toISOString().split('T')[0]}
// - **Format**: Markdown
// - **Encoding**: UTF-8`;

//       setGeneratedContent(content);
//       setIsGenerating(false);
//     }, 2000);
//   };

//   const handleCopy = () => {
//     navigator.clipboard.writeText(generatedContent);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const handleDownload = () => {
//     const blob = new Blob([generatedContent], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'llms.txt';
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-32 pb-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-3xl mx-auto text-center">
//             <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-semibold text-purple-600 mb-6 shadow-sm border border-purple-100">
//               <FileText className="w-4 h-4" />
//               Free Tool
//             </div>
            
//             <h1 className="text-5xl md:text-6xl font-bold bricolage text-gray-900 mb-6 leading-tight">
//               llms.txt Generator
//             </h1>
            
//             <p className="text-xl text-gray-600 mb-12 leading-relaxed">
//               Build the foundation for AI SEO. Generate an llms.txt file that guides AI models to your best content and turns every crawl into a citation.
//             </p>

//             {/* Wayback Machine Style Input */}
//             <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
//                   <div className="w-2 h-2 rounded-full bg-green-500"></div>
//                   <span>Live</span>
//                 </div>
//               </div>

//               <div className="flex flex-col md:flex-row gap-4">
//                 <div className="flex-1 relative">
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                     <Search className="w-5 h-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="url"
//                     value={url}
//                     onChange={(e) => setUrl(e.target.value)}
//                     placeholder="Enter your website URL (e.g., https://example.com)"
//                     className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-gray-900 font-medium"
//                     onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
//                   />
//                 </div>
                
//                 <button
//                   onClick={handleGenerate}
//                   disabled={!url || isGenerating}
//                   className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
//                 >
//                   {isGenerating ? (
//                     <>
//                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                       Generating...
//                     </>
//                   ) : (
//                     <>
//                       <Zap className="w-5 h-5" />
//                       Generate
//                     </>
//                   )}
//                 </button>
//               </div>

//               {/* Quick Examples */}
//               <div className="mt-6 flex flex-wrap gap-2 justify-center">
//                 <span className="text-xs text-gray-500">Try:</span>
//                 {['https://stripe.com', 'https://anthropic.com', 'https://openai.com'].map((example) => (
//                   <button
//                     key={example}
//                     onClick={() => setUrl(example)}
//                     className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 font-medium transition-colors"
//                   >
//                     {example.replace('https://', '')}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Generated Output Section */}
//       {generatedContent && (
//         <section className="py-20 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="max-w-4xl mx-auto">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-2xl font-bold bricolage text-gray-900">Your llms.txt File</h2>
//                 <div className="flex gap-3">
//                   <button
//                     onClick={handleCopy}
//                     className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors"
//                   >
//                     {copied ? (
//                       <>
//                         <CheckCircle className="w-4 h-4 text-green-600" />
//                         Copied!
//                       </>
//                     ) : (
//                       <>
//                         <Copy className="w-4 h-4" />
//                         Copy
//                       </>
//                     )}
//                   </button>
//                   <button
//                     onClick={handleDownload}
//                     className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
//                   >
//                     <Download className="w-4 h-4" />
//                     Download
//                   </button>
//                 </div>
//               </div>

//               <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl">
//                 <div className="bg-gray-800 px-6 py-3 flex items-center justify-between border-b border-gray-700">
//                   <div className="flex items-center gap-3">
//                     <div className="flex gap-1.5">
//                       <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                       <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                     </div>
//                     <span className="text-gray-400 text-sm font-mono">llms.txt</span>
//                   </div>
//                   <span className="text-xs text-gray-500">{generatedContent.split('\n').length} lines</span>
//                 </div>
//                 <pre className="p-6 text-sm text-gray-100 font-mono overflow-x-auto max-h-96 overflow-y-auto">
//                   {generatedContent}
//                 </pre>
//               </div>

//               {/* Installation Instructions */}
//               <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
//                 <div className="flex items-start gap-3">
//                   <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
//                   <div>
//                     <h3 className="font-semibold text-gray-900 mb-2">Next Steps</h3>
//                     <ol className="space-y-2 text-sm text-gray-700">
//                       <li className="flex items-start gap-2">
//                         <span className="font-bold text-blue-600">1.</span>
//                         <span>Download the generated file or copy its contents</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <span className="font-bold text-blue-600">2.</span>
//                         <span>Place it in your website's root directory as <code className="bg-white px-2 py-0.5 rounded font-mono text-xs">llms.txt</code></span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <span className="font-bold text-blue-600">3.</span>
//                         <span>Verify it's accessible at <code className="bg-white px-2 py-0.5 rounded font-mono text-xs">yoursite.com/llms.txt</code></span>
//                       </li>
//                     </ol>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* What is llms.txt Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold bricolage text-gray-900 mb-8 text-center">
//             What is llms.txt?
//           </h2>
          
//           <div className="prose prose-lg max-w-none">
//             <p className="text-gray-700 leading-relaxed mb-6">
//               An <strong>llms.txt</strong> file provides a clean, Markdown-formatted map of your site, helping AI models interpret your data with precision. This roadmap complements your AI SEO by highlighting key documentation and site structure. It’s exactly what engines like ChatGPT and Perplexity need to deliver accurate, high-quality citations that put your brand first.
//             </p>

//             <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 mb-8 border border-purple-100">
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Why Your Website Needs It:</h3>
//               <ul className="space-y-3">
//                 {[
//                   'Precise Context: Ensure AI represents your brand accurately.',
//                   'Rapid Discovery: Guide agents directly to key resources',
//                   'Topical Authority: Help AI recognise your content clusters.',
//                   'Verified Trust: Boost credibility and reduce AI hallucinations.',
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
//                     <span className="text-gray-700">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <p className="text-gray-700 leading-relaxed">
//               By implementing llms.txt, you increase the likelihood that AI models like ChatGPT, Claude, and Perplexity will accurately cite your content when answering user queries.
//             </p>
//           </div>
//         </div>
//       </section>
      
//       {/* Benefits Section */}
//       <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold bricolage text-gray-900 mb-4">
//               How it Works?
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Creating a machine-readable roadmap for AI crawlers doesn't require manual coding. Visble simplifies the workflow:
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <TrendingUp className="w-8 h-8" />,
//                 title: 'Input Core Context:',
//                 description: 'Provide your company name, industry, and a concise summary of your brand.',
//                 color: 'from-blue-500 to-blue-600',
//               },
//               {
//                 icon: <Shield className="w-8 h-8" />,
//                 title: 'Map Canonical Resources:',
//                 description: 'Add your highest-value links, prioritising documentation, API references, and core product pages.',
//                 color: 'from-purple-500 to-purple-600',
//               },
//               {
//                 icon: <Zap className="w-8 h-8" />,
//                 title: 'Generate & Download:',
//                 description: 'Our tool instantly formats your data into standard Markdown. Download your llms.txt in seconds.',
//                 color: 'from-blue-400 to-purple-500',
//               },
//             ].map((benefit, i) => (
//               <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all">
//                 <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center text-white mb-6`}>
//                   {benefit.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Example Section */}
//       <section className="py-20">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold bricolage text-gray-900 mb-8 text-center">
//             Example of llms.txt File
//           </h2>

//           <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl">
//             <div className="bg-gray-800 px-6 py-3 border-b border-gray-700">
//               <span className="text-gray-400 text-sm font-mono">example.com/llms.txt</span>
//             </div>
//             <pre className="p-6 text-sm text-gray-100 font-mono overflow-x-auto">
//                 {`# Example Company

//                 > Leading provider of AI solutions

//                 ## About
//                 - **Industry**: Technology
//                 - **Founded**: 2020
//                 - **Location**: San Francisco, CA

//                 ## Resources
//                 - [Documentation](https://example.com/docs)
//                 - [API Reference](https://example.com/api)
//                 - [Blog](https://example.com/blog)

//                 ## Contact
//                 - Email: hello@example.com
//                 - Support: support@example.com`}
//             </pre>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold bricolage text-gray-900 mb-12 text-center">
//             Frequently Asked Questions
//           </h2>
          
//           <div className="space-y-4">
//             {[
//               {
//                 q: 'What is an llms.txt file?',
//                 a: "An llms.txt file is a standardised, Markdown-formatted file placed in your website’s root directory. It serves as a dedicated guide for Large Language Models (LLMs), providing them with a clean, structured summary of your site's content and context, free from the noise of traditional web code.",
//               },
//               {
//                 q: 'How does the llms.txt generator benefit my brand?',
//                 a: 'Our generator ensures your file is perfectly compliant with current AI standards. By providing a structured roadmap, the tool helps your brand achieve higher AI SEO rankings, reduces hallucinations about your services, and makes it "irresistible" for models like ChatGPT to cite you as a primary source.',
//               },
//               {
//                 q: 'Will this file help prevent AI "hallucinations" about my brand?',
//                 a: 'Directly. Hallucinations often happen when an AI "guesses" information because it can’t find a clear source. An llms.txt file provides verified brand summaries and direct links to documentation, giving the AI the factual data it needs to represent you accurately.',
//               },
//               {
//                 q: 'Where should I host my llms.txt file??',
//                 a: 'Just like a robots.txt file, you should upload your llms.txt to the root directory of your website (e.g., https://yourwebsite.com/llms.txt). This is the standard location where AI crawlers are programmed to look for it.',
//               },
//               {
//                 q: 'Can I generate a "Full" version for technical documentation?',
//                 a: 'Absolutely. Many brands use llms.txt for a brief overview and a second file, llms-full.txt, to provide the complete, in-depth documentation for AI models that need deeper technical context. Our generator can help you structure both.',
//               },
//               {
//                 q: 'Do I need technical skills to use this generator?',
//                 a: 'Not at all. Our tool is designed to turn a complex technical requirement into a seconds-long process. Simply input your brand details and key resources, and the generator will produce a perfectly formatted, Markdown-ready file that you can immediately upload to your server.',
//               },
//             ].map((faq, i) => (
//               <details key={i} className="bg-white rounded-lg border border-purple-100 p-6 group">
//                 <summary className="flex items-center justify-between cursor-pointer list-none">
//                   <span className="text-lg font-semibold text-gray-900">{faq.q}</span>
//                   <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
//                 </summary>
//                 <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
//               </details>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl p-12 text-center text-white shadow-2xl">
//             <h2 className="text-4xl font-bold bricolage mb-4">Is Your Brand Winning in AI?</h2>
//             <p className="text-xl mb-8 opacity-90">Deploy your llms.txt file today and get the data you need to see exactly how often you're mentioned across ChatGPT, AI Overviews, Perplexity, and other AI search engines.</p>
//             <a
//                 href="/geo-analysis"
//                 className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
//             >
//                 Try GEO Analysis Tools
//                 <ArrowRight className="w-5 h-5" />
//             </a>
//             </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
'use client';

import { useState } from 'react';
import { Download, Copy, CheckCircle, AlertCircle, FileText, Zap, Shield, TrendingUp, ChevronDown, Search, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';

export default function LlmsTxtGeneratorPage() {
  const [url, setUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [generatedFullContent, setGeneratedFullContent] = useState('');
  const [activeTab, setActiveTab] = useState<'llms' | 'full'>('llms');
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!url) return;

    setIsGenerating(true);
    setGeneratedContent('');
    setGeneratedFullContent('');
    setError('');
    setStatusMessage('Starting pipeline...');
    setActiveTab('llms');

    try {
      const response = await fetch(`${BACKEND_URL}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, max_pages: 20 }),
      });

      if (!response.ok) throw new Error(`Backend error: ${response.status}`);

      const reader = response.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const event = JSON.parse(line.slice(6));
              if (event.message) {
                setStatusMessage(`Step ${event.step}/15: ${event.message}`);
              }
              if (event.status === 'error') {
                setError(event.message || 'Something went wrong');
              }
              if (event.data?.llms_txt) {
                setGeneratedContent(event.data.llms_txt);
              }
              if (event.data?.llms_full_txt) {
                setGeneratedFullContent(event.data.llms_full_txt);
              }
            } catch { /* skip malformed lines */ }
          }
        }
      }
    } catch (err: any) {
      console.error('Generation failed:', err);
      setError(err.message || 'Generation failed. Please try again.');
    } finally {
      setIsGenerating(false);
      setStatusMessage('');
    }
  };

  const activeContent = activeTab === 'llms' ? generatedContent : generatedFullContent;
  const activeFilename = activeTab === 'llms' ? 'llms.txt' : 'llms-full.txt';

  const handleCopy = () => {
    navigator.clipboard.writeText(activeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([activeContent], { type: 'text/plain' });
    const downloadUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = activeFilename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(downloadUrl);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-semibold text-purple-600 mb-6 shadow-sm border border-purple-100">
              <FileText className="w-4 h-4" />
              Free Tool
            </div>

            <h1 className="text-5xl md:text-6xl font-bold bricolage text-gray-900 mb-6 leading-tight">
              llms.txt Generator
            </h1>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Build the foundation for AI SEO. Generate an llms.txt file that guides AI models to your best content and turns every crawl into a citation.
            </p>

            {/* Input Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Live</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter your website URL (e.g., https://example.com)"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-gray-900 font-medium"
                    onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
                    disabled={isGenerating}
                  />
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={!url || isGenerating}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap min-w-[160px]"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin flex-shrink-0"></div>
                      <span className="truncate">Generating...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      Generate
                    </>
                  )}
                </button>
              </div>

              {/* Live status message */}
              {statusMessage && (
                <div className="mt-4 flex items-center gap-2 text-sm text-purple-700 bg-purple-50 border border-purple-100 rounded-lg px-4 py-2">
                  <div className="w-3 h-3 border-2 border-purple-500 border-t-transparent rounded-full animate-spin flex-shrink-0"></div>
                  <span className="truncate">{statusMessage}</span>
                </div>
              )}

              {/* Error message */}
              {error && (
                <div className="mt-4 flex items-center gap-2 text-sm text-red-700 bg-red-50 border border-red-100 rounded-lg px-4 py-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Quick Examples */}
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                <span className="text-xs text-gray-500">Try:</span>
                {['https://stripe.com', 'https://anthropic.com', 'https://openai.com'].map((example) => (
                  <button
                    key={example}
                    onClick={() => setUrl(example)}
                    disabled={isGenerating}
                    className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 font-medium transition-colors disabled:opacity-50"
                  >
                    {example.replace('https://', '')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generated Output Section */}
      {generatedContent && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

              {/* Tab Switcher + Actions */}
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                {/* Tabs */}
                <div className="flex bg-gray-100 rounded-xl p-1 gap-1">
                  <button
                    onClick={() => setActiveTab('llms')}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      activeTab === 'llms'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    llms.txt
                  </button>
                  {generatedFullContent && (
                    <button
                      onClick={() => setActiveTab('full')}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                        activeTab === 'full'
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      llms-full.txt
                      <span className="ml-2 text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">Full</span>
                    </button>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Download {activeFilename}
                  </button>
                </div>
              </div>

              {/* Tab description */}
              {activeTab === 'full' && (
                <p className="text-sm text-gray-500 mb-4 bg-purple-50 border border-purple-100 rounded-lg px-4 py-2">
                  📄 <strong>llms-full.txt</strong> contains the complete, expanded content with full page descriptions — ideal for technical documentation and deeper AI context.
                </p>
              )}

              {/* Code Block */}
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl">
                <div className="bg-gray-800 px-6 py-3 flex items-center justify-between border-b border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-gray-400 text-sm font-mono">{activeFilename}</span>
                  </div>
                  <span className="text-xs text-gray-500">{activeContent.split('\n').length} lines</span>
                </div>
                <pre className="p-6 text-sm text-gray-100 font-mono overflow-x-auto max-h-96 overflow-y-auto whitespace-pre-wrap">
                  {activeContent}
                </pre>
              </div>

              {/* Next Steps */}
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Next Steps</h3>
                    <ol className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-blue-600">1.</span>
                        <span>Download <code className="bg-white px-1.5 py-0.5 rounded font-mono text-xs">llms.txt</code> and place it in your website's root directory</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-blue-600">2.</span>
                        <span>Optionally download <code className="bg-white px-1.5 py-0.5 rounded font-mono text-xs">llms-full.txt</code> for expanded AI context</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold text-blue-600">3.</span>
                        <span>Verify at <code className="bg-white px-1.5 py-0.5 rounded font-mono text-xs">yoursite.com/llms.txt</code></span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* What is llms.txt Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold bricolage text-gray-900 mb-8 text-center">
            What is llms.txt?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              An <strong>llms.txt</strong> file provides a clean, Markdown-formatted map of your site, helping AI models interpret your data with precision. This roadmap complements your AI SEO by highlighting key documentation and site structure. It's exactly what engines like ChatGPT and Perplexity need to deliver accurate, high-quality citations that put your brand first.
            </p>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 mb-8 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Your Website Needs It:</h3>
              <ul className="space-y-3">
                {[
                  'Precise Context: Ensure AI represents your brand accurately.',
                  'Rapid Discovery: Guide agents directly to key resources',
                  'Topical Authority: Help AI recognise your content clusters.',
                  'Verified Trust: Boost credibility and reduce AI hallucinations.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              By implementing llms.txt, you increase the likelihood that AI models like ChatGPT, Claude, and Perplexity will accurately cite your content when answering user queries.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bricolage text-gray-900 mb-4">How it Works?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Creating a machine-readable roadmap for AI crawlers doesn't require manual coding. Visble simplifies the workflow:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <TrendingUp className="w-8 h-8" />, title: 'Input Core Context:', description: 'Provide your company name, industry, and a concise summary of your brand.', color: 'from-blue-500 to-blue-600' },
              { icon: <Shield className="w-8 h-8" />, title: 'Map Canonical Resources:', description: 'Add your highest-value links, prioritising documentation, API references, and core product pages.', color: 'from-purple-500 to-purple-600' },
              { icon: <Zap className="w-8 h-8" />, title: 'Generate & Download:', description: 'Our tool instantly formats your data into standard Markdown. Download your llms.txt in seconds.', color: 'from-blue-400 to-purple-500' },
            ].map((benefit, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center text-white mb-6`}>{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold bricolage text-gray-900 mb-8 text-center">Example of llms.txt File</h2>
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl">
            <div className="bg-gray-800 px-6 py-3 border-b border-gray-700">
              <span className="text-gray-400 text-sm font-mono">example.com/llms.txt</span>
            </div>
            <pre className="p-6 text-sm text-gray-100 font-mono overflow-x-auto">
{`# Example Company

> Leading provider of AI solutions

## About
- **Industry**: Technology
- **Founded**: 2020
- **Location**: San Francisco, CA

## Resources
- [Documentation](https://example.com/docs)
- [API Reference](https://example.com/api)
- [Blog](https://example.com/blog)

## Contact
- Email: hello@example.com
- Support: support@example.com`}
            </pre>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold bricolage text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'What is an llms.txt file?', a: "An llms.txt file is a standardised, Markdown-formatted file placed in your website's root directory. It serves as a dedicated guide for Large Language Models (LLMs), providing them with a clean, structured summary of your site's content and context, free from the noise of traditional web code." },
              { q: 'How does the llms.txt generator benefit my brand?', a: 'Our generator ensures your file is perfectly compliant with current AI standards. By providing a structured roadmap, the tool helps your brand achieve higher AI SEO rankings, reduces hallucinations about your services, and makes it "irresistible" for models like ChatGPT to cite you as a primary source.' },
              { q: 'Will this file help prevent AI "hallucinations" about my brand?', a: "Directly. Hallucinations often happen when an AI \"guesses\" information because it can't find a clear source. An llms.txt file provides verified brand summaries and direct links to documentation, giving the AI the factual data it needs to represent you accurately." },
              { q: 'Where should I host my llms.txt file?', a: 'Just like a robots.txt file, you should upload your llms.txt to the root directory of your website (e.g., https://yourwebsite.com/llms.txt). This is the standard location where AI crawlers are programmed to look for it.' },
              { q: 'Can I generate a "Full" version for technical documentation?', a: 'Absolutely. Many brands use llms.txt for a brief overview and a second file, llms-full.txt, to provide the complete, in-depth documentation for AI models that need deeper technical context. Our generator can help you structure both.' },
              { q: 'Do I need technical skills to use this generator?', a: 'Not at all. Our tool is designed to turn a complex technical requirement into a seconds-long process. Simply input your brand details and key resources, and the generator will produce a perfectly formatted, Markdown-ready file that you can immediately upload to your server.' },
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-lg border border-purple-100 p-6 group">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-lg font-semibold text-gray-900">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold bricolage mb-4">Is Your Brand Winning in AI?</h2>
            <p className="text-xl mb-8 opacity-90">Deploy your llms.txt file today and get the data you need to see exactly how often you're mentioned across ChatGPT, AI Overviews, Perplexity, and other AI search engines.</p>
            <a href="/geo-analysis" className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]">
              Try GEO Analysis Tools
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
