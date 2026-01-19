// 'use client';

// import { useState, useEffect } from 'react';

// export default function StatsCarousel() {
//   const stats = [
//     "20% of total Google Searches are leading to AI Overview.",
//     "Zero Click Searches on Google has increased to 60% since 2024",
//     "Vercel Receives 10% of its signups through ChatGPT",
//     "Business Insider's Traffic Dropped by 55% because of Zero Searches"
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const fadeOutTimer = setTimeout(() => {
//       setIsVisible(false);
//     }, 3000); // Show for 3 seconds

//     const changeTextTimer = setTimeout(() => {
//       setCurrentIndex((prev) => (prev + 1) % stats.length);
//       setIsVisible(true);
//     }, 3500); // Wait 0.5s for fade out, then change

//     return () => {
//       clearTimeout(fadeOutTimer);
//       clearTimeout(changeTextTimer);
//     };
//   }, [currentIndex]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
//       <div className="max-w-4xl w-full">
//         <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 shadow-2xl border border-white/20">
//           <div className="relative h-32 flex items-center justify-center">
//             <p
//               className={`text-3xl md:text-4xl font-bold text-white text-center transition-opacity duration-500 ${
//                 isVisible ? 'opacity-100' : 'opacity-0'
//               }`}
//             >
//               {stats[currentIndex]}
//             </p>
//           </div>
          
//           <div className="flex justify-center gap-2 mt-8">
//             {stats.map((_, index) => (
//               <div
//                 key={index}
//                 className={`h-2 rounded-full transition-all duration-300 ${
//                   index === currentIndex
//                     ? 'w-8 bg-purple-400'
//                     : 'w-2 bg-white/30'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import { useState, useEffect } from 'react';

const stats = [
  "20% OF TOTAL GOOGLE SEARCHES ARE LEADING TO AI OVERVIEW.",
  "ZERO CLICK SEARCHES ON GOOGLE HAS INCREASED TO 60% SINCE 2024",
  "VERCEL RECEIVES 10% OF ITS SIGNUPS THROUGH CHATGPT",
  "BUSINESS INSIDER'S TRAFFIC DROPPED BY 55% BECAUSE OF ZERO SEARCHES"
];

export default function StatsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    const changeTextTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % stats.length);
      setIsVisible(true);
    }, 2500);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(changeTextTimer);
    };
  }, [currentIndex]); // Keeping currentIndex as dep ensures loop continues

  return (
    <section 
      className="w-full py-16 px-4 sm:px-6 lg:px-8" 
      aria-label="Market Statistics"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          
          {/* --- SEO & ACCESSIBILITY LAYER --- */}
          {/* 
            This div is visually hidden but visible to Search Engines (Googlebot) 
            and Screen Readers. This ensures ALL keywords are indexed immediately.
          */}
          <div className="sr-only">
            <h2>Key Market Insights</h2>
            <ul>
              {stats.map((stat, index) => (
                <li key={index}>{stat}</li>
              ))}
            </ul>
          </div>
          {/* ---------------------------------- */}

          {/* Background Elements (Decorative) */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20" aria-hidden="true"></div>
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          <div className="absolute top-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
          
          {/* Visual Content (Hidden from Screen Readers to prevent duplicate reading) */}
          <div 
            className="relative px-8 sm:px-12 lg:px-16 py-20 rounded-3xl border border-border/5 bg-background/50 backdrop-blur-sm"
            aria-hidden="true" 
          >
            <div className="relative h-40 flex items-center justify-center">
              <p
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground text-center transition-opacity duration-500 bricolage tracking-tight ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ letterSpacing: '-0.08em', wordSpacing: '0.1em' }}
              >
                {stats[currentIndex]}
              </p>
            </div>
            
            <div className="flex justify-center gap-3 mt-12">
              {stats.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-12 bg-primary shadow-lg shadow-primary/50'
                      : 'w-1.5 bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}