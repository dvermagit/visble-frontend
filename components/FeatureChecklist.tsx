// 'use client';

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import DashedGridBackground from './DashedGridBackground';

// // --- Data for the workflow steps ---
// const workflowSteps = [
//   { num: 1, text: 'Conduct large Scale Prompt Analytics' },
//   { num: 2, text: 'Analyse performance gap for each target page/topic' },
//   { num: 3, text: 'Build a strategy that solve for both SEO and GEO' },
//   { num: 4, text: 'Analyse Contexts and Semantics to write content' },
//   { num: 5, text: 'Build Share of Voice by gaining positive brand mentions' },
//   { num: 6, text: 'Track Performance' },
//   { num: 7, text: 'Iterate Strategy' },
// ];

// // --- Main Component ---
// export default function CenteredAnimatedWorkflow() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const [isInView, setIsInView] = useState(false); // State to track if the component is visible

//   // This effect runs a timer to cycle through the active index
//   useEffect(() => {
//     // Only start the interval if the component is in view and the user is not hovering
//     if (!isInView || isHovering) return;

//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % workflowSteps.length);
//     }, 1000); // Speed of the loop (2.5 seconds)

//     // Cleanup function to clear the interval
//     return () => clearInterval(interval);
//   }, [isInView, isHovering]); // Effect dependencies

//   // Handlers to pause the animation on user interaction
// //   const handleMouseEnter = (index: number) => {
// //     setIsHovering(true);
// //     setActiveIndex(index);
// //   };

//   const handleMouseLeave = () => {
//     setIsHovering(false);
//   };

//   return (
//     <section className="relative bg-white text-gray-900 py-20 sm:py-28 font-sans">
//         <DashedGridBackground />
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="text-center mb-16 max-w-3xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold bricolage">Measure. Optimize. Iterate.</h2>
//           <p className="mt-4 text-lg text-gray-600">
//             Turn your AEO efforts into actionable, data-driven results with a seamless workflow.
//           </p>
//         </div>

//         {/* Centered Workflow Container */}
//         {/* This motion.div triggers the animation when it enters the viewport */}
//         <motion.div
//           className="max-w-2xl mx-auto"
//           onViewportEnter={() => setIsInView(true)}
//         >
//           <div 
//             className="flex flex-col gap-4"
//             onMouseLeave={handleMouseLeave}
//           >
//             {workflowSteps.map((step, index) => (
//               <div
//                 key={step.num}
//                 // onMouseEnter={() => handleMouseEnter(index)}
//                 className={`relative flex items-center p-5 rounded-2xl w-full cursor-pointer transition-colors
//                   ${index % 2 !== 0 ? 'self-end' : 'self-start'} // Aligns left/right
//                   ${activeIndex === index ? '' : 'bg-gray-100 hover:bg-gray-200'}`
//                 }
//               >
//                 {/* The Animated Highlight Element */}
//                 {activeIndex === index && (
//                   <motion.div
//                     layoutId="highlight-white" // Unique layoutId for this component
//                     className="absolute inset-0 bg-gray-900 rounded-2xl z-0"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//                   />
//                 )}
                
//                 {/* Content sits on a higher z-index */}
//                 <div className="relative z-10 flex items-center w-full">
//                     <div className={`flex-shrink-0 w-10 h-10 rounded-md flex items-center justify-center mr-4 
//                         transition-colors duration-300
//                         ${activeIndex === index ? 'bg-white text-black' : 'bg-black text-white'}`
//                     }>
//                         <span className="text-xl font-bold">{step.num}</span>
//                     </div>
//                     <p className={`text-lg font-medium transition-colors duration-300
//                         ${activeIndex === index ? 'text-white' : 'text-gray-800'}`
//                     }>
//                         {step.text}
//                     </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// 'use client';

// import { useState, useEffect } from 'react';

// const workflowSteps = [
//   { num: 1, text: 'Conduct large Scale Prompt Analytics' },
//   { num: 2, text: 'Analyse performance gap for each target page/topic' },
//   { num: 3, text: 'Build a strategy that solve for both SEO and GEO' },
//   { num: 4, text: 'Analyse Contexts and Semantics to write content' },
//   { num: 5, text: 'Build Share of Voice by gaining positive brand mentions' },
//   { num: 6, text: 'Track Performance' },
//   { num: 7, text: 'Iterate Strategy' },
// ];

// export default function OptimizedWorkflow() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     if (isPaused) return;

//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % workflowSteps.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [isPaused]);

//   return (
//     <section className="relative bg-[#0a0a0a] py-20 sm:py-28">
//       {/* Grid Background */}
//       <div className="absolute inset-0 opacity-10">
//         <div 
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, #ffffff 1px, transparent 1px),
//               linear-gradient(to bottom, #ffffff 1px, transparent 1px)
//             `,
//             backgroundSize: '60px 60px'
//           }}
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16 max-w-3xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold bricolage text-white mb-4">
//             Measure. Optimize. Iterate.
//           </h2>
//           <p className="text-lg text-gray-400">
//             Turn your AEO efforts into actionable, data-driven results with a seamless workflow.
//           </p>
//         </div>

//         {/* Workflow Steps - Zigzag Layout */}
//         <div className="max-w-5xl mx-auto">
//           <div 
//             className="space-y-6"
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//           >
//             {workflowSteps.map((step, index) => (
//               <div
//                 key={step.num}
//                 className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
//               >
//                 <div
//                   onClick={() => setActiveIndex(index)}
//                   className={`flex items-center p-6 rounded-3xl transition-all duration-300 cursor-pointer w-full md:w-[70%] lg:w-[60%] ${
//                     activeIndex === index
//                       ? 'bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary shadow-xl shadow-primary/20 scale-[1.02]'
//                       : 'bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 hover:shadow-lg'
//                   }`}
//                 >
//                   <div
//                     className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center mr-5 transition-all duration-300 ${
//                       activeIndex === index
//                         ? 'bg-black text-white shadow-lg'
//                         : 'bg-black text-white'
//                     }`}
//                   >
//                     <span className="text-2xl font-bold bricolage">{step.num}</span>
//                   </div>
//                   <p
//                     className={`text-lg font-medium transition-colors duration-300 ${
//                       activeIndex === index ? 'text-white' : 'text-gray-300'
//                     }`}
//                   >
//                     {step.text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Progress Indicator */}
//         <div className="flex justify-center gap-2 mt-12">
//           {workflowSteps.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 index === activeIndex
//                   ? 'w-12 bg-primary'
//                   : 'w-2 bg-gray-600 hover:bg-gray-500'
//               }`}
//               aria-label={`Go to step ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useState, useEffect } from 'react';

const workflowSteps = [
  { num: 1, text: 'Conduct large Scale Prompt Analytics' },
  { num: 2, text: 'Analyse performance gap for each target page/topic' },
  { num: 3, text: 'Build an integrated strategy to solve for SEO and GEO' },
  { num: 4, text: 'Write content backed by Semantic Analysis' },
  { num: 5, text: 'Build Share of Voice with earned brand mentions' },
  { num: 6, text: 'Track Performance Results' },
  { num: 7, text: 'Iterate Strategy for Growth' },
];

export default function OptimizedWorkflow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % workflowSteps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative bg-[#0a0a0a] py-12 sm:py-16">
      {/* Grid Background stays removed */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold bricolage text-white mb-2">
            Measure. Optimize. Iterate.
          </h2>
          <p className="text-sm text-gray-400">
            Turn your AEO efforts into actionable, data-driven results with a seamless workflow.
          </p>
        </div>

        {/* Workflow Steps - Zigzag Layout */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="space-y-4" 
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {workflowSteps.map((step, index) => (
              <div
                key={step.num}
                className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  onClick={() => setActiveIndex(index)}
                  /* 
                     - Fixed Width: max-w-[450px] ensures all boxes are the same width
                     - Fixed Min-Height: min-h-[72px] ensures all boxes are the same height 
                  */
                  className={`flex items-center px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer w-full max-w-[450px] min-h-[72px] ${
                    activeIndex === index
                      ? 'bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary shadow-xl shadow-primary/20 scale-[1.02]'
                      : 'bg-gray-800/50 border border-gray-700/50 hover:border-gray-600'
                  }`}
                >
                  {/* Step Number */}
                  <div
                    className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mr-4 transition-all duration-300 ${
                      activeIndex === index
                        ? 'bg-black text-white'
                        : 'bg-black text-white'
                    }`}
                  >
                    <span className="text-lg font-bold bricolage">{step.num}</span>
                  </div>
                  
                  {/* Text size remains text-lg */}
                  <p
                    className={`text-base md:text-lg font-medium leading-tight transition-colors duration-300 ${
                      activeIndex === index ? 'text-white' : 'text-gray-300'
                    }`}
                  >
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {workflowSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-10 bg-primary'
                  : 'w-1.5 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}