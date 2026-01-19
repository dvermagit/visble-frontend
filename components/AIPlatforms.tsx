// 'use client';

// import { Sparkles } from 'lucide-react';

// export default function AIPlatforms() {
//   const platforms = [
//     {
//       name: 'Claude',
//       logo: (
//         <div className="flex items-center">
//           <div className="w-8 h-8 mr-3 rounded-lg flex items-center justify-center">
//             <img src="/icons8-claude-96 copy.png" alt="Claude Logo" className="w-18 h-11" />
//           </div>
//           <span className="font-semibold text-gray-800">Claude</span>
//         </div>
//       ),
//     },
//     {
//       name: 'Gemini',
//       logo: (
//         <div className="flex items-center">
//           <div className="w-8 h-8 mr-3 rounded-lg flex items-center justify-center">
//             <img src="/icons8-gemini-ai-96 copy.png" alt="Claude Logo" className="w-18 h-11" />
//           </div>
//           <span className="font-semibold text-gray-800">Gemini</span>
//         </div>
//       ),
//     },
//     {
//       name: 'Perplexity',
//       logo: (
//         <div className="flex items-center">
//           <div className="w-8 h-8 mr-3 rounded-lg flex items-center justify-center">
//             <img src="/icons8-perplexity-ai-96 copy.png" alt="Perplexity Logo" className="w-18 h-11" />
//           </div>
//           <span className="font-semibold text-gray-800">perplexity</span>
//         </div>
//       ),
//     },
//     {
//       name: 'ChatGPT',
//       logo: (
//         <div className="flex items-center">
//           <div className="w-8 h-8 mr-3 rounded-lg flex items-center justify-center">
//             <img src="/icons8-chatgpt-100 copy.png" alt="ChatGPT Logo" className="w-18 h-11" />
//           </div>
//           <span className="font-semibold text-gray-800">ChatGPT</span>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-900 text-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/90 font-medium text-sm mb-6">
//             <Sparkles className="w-4 h-4 mr-2" />
//             AI Platform Monitoring
//           </div>
//           <h2 className="text-3xl font-bold bricolage text-white mb-4">
//             Get your brand visible on:
//           </h2>
//         </div>

//         {/* Scrolling Platform Logos */}
//         <div className="relative">
//           <div className="flex space-x-12 animate-scroll">
//             {/* First set */}
//             {platforms.map((platform, index) => (
//               <div 
//                 key={`first-${index}`}
//                 className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[200px]"
//               >
//                 {platform.logo}
//               </div>
//             ))}
            
//             {/* Duplicate set for seamless loop */}
//             {platforms.map((platform, index) => (
//               <div 
//                 key={`second-${index}`}
//                 className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[200px]"
//               >
//                 {platform.logo}
//               </div>
//             ))}
            
//             {/* Third set for seamless loop */}
//             {platforms.map((platform, index) => (
//               <div 
//                 key={`third-${index}`}
//                 className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[200px]"
//               >
//                 {platform.logo}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Call to Action */}
//         {/* <div className="text-center mt-12">
//           <p className="text-gray-300 mb-6">
//             Track your brand mentions and optimize your presence across all major AI platforms
//           </p> */}
//           {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
//               Start Monitoring
//             </button>
//             <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
//               Learn More
//             </button>
//           </div> */}
//         {/* </div> */}
//       </div>
//     </section>
//   );
// }
'use client'

import { Sparkles } from 'lucide-react';

export default function AIPlatforms() {
  const platforms = [
    {
      name: 'Claude',
      logo: (
        <div className="flex items-center">
          <div className="w-16 h-16 mr-4 rounded-xl flex items-center justify-center bg-gray-100 p-2 shadow-md flex-shrink-0">
            <img src="/icons8-claude-96 copy.png" alt="Claude Logo" className="w-12 h-12 object-contain" />
          </div>
          <span className="font-bold text-gray-900 text-xl tracking-tight">Claude</span>
        </div>
      ),
    },
    {
      name: 'Gemini',
      logo: (
        <div className="flex items-center">
          <div className="w-16 h-16 mr-4 rounded-xl flex items-center justify-center bg-gray-100 p-2 shadow-md flex-shrink-0">
            <img src="/icons8-gemini-ai-96 copy.png" alt="Gemini Logo" className="w-12 h-12 object-contain" />
          </div>
          <span className="font-bold text-gray-900 text-xl tracking-tight">Gemini</span>
        </div>
      ),
    },
    {
      name: 'Perplexity',
      logo: (
        <div className="flex items-center">
          <div className="w-16 h-16 mr-4 rounded-xl flex items-center justify-center bg-gray-100 p-2 shadow-md flex-shrink-0">
            <img src="/icons8-perplexity-ai-96 copy.png" alt="Perplexity Logo" className="w-12 h-12 object-contain" />
          </div>
          <span className="font-bold text-gray-900 text-xl tracking-tight">Perplexity</span>
        </div>
      ),
    },
    {
      name: 'ChatGPT',
      logo: (
        <div className="flex items-center">
          <div className="w-16 h-16 mr-4 rounded-xl flex items-center justify-center bg-gray-100 p-2 shadow-md flex-shrink-0">
            <img src="/icons8-chatgpt-100 copy.png" alt="ChatGPT Logo" className="w-12 h-12 object-contain" />
          </div>
          <span className="font-bold text-gray-900 text-xl tracking-tight">ChatGPT</span>
        </div>
      ),
    },
  ];

  return (
    <section className="py-10 bg-gray-200 text-gray-800 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-2">
          <div className="inline-flex items-center px-6 py-2 bg-gray-100 backdrop-blur-sm rounded-full text-gray-700 font-semibold text-sm mb-3 border border-gray-200">
            <Sparkles className="w-5 h-5 mr-3" />
            AI Platform Monitoring
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bricolage text-gray-900  leading-tight">
            Get your brand visible on:
          </h2>
        </div>
      </div>

      {/* Full Width Scrolling Platform Logos */}
      <div className="w-full">
        <div className="relative overflow-hidden bg-gray-200 h-80">
          <div className="px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="flex space-x-16 animate-scroll">
              {/* First set */}
              {platforms.map((platform, index) => (
                <div 
                  key={`first-${index}`}
                  className="flex-shrink-0 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 min-w-[320px] border border-gray-200 flex items-center justify-center"
                >
                  {platform.logo}
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {platforms.map((platform, index) => (
                <div 
                  key={`second-${index}`}
                  className="flex-shrink-0 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 min-w-[320px] border border-gray-200 flex items-center justify-center"
                >
                  {platform.logo}
                </div>
              ))}
              
              {/* Third set for seamless loop */}
              {platforms.map((platform, index) => (
                <div 
                  key={`third-${index}`}
                  className="flex-shrink-0 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 min-w-[320px] border border-gray-200 flex items-center justify-center"
                >
                  {platform.logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Track your brand mentions and optimize your presence across all major AI platforms
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
              Start Monitoring
            </button>
            <button className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div> */}
    </section>
  );
}