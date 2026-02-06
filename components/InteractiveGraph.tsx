// 'use client';

// import { useState } from 'react';

// interface GraphData {
//   week: string;
//   sourceMentions: number;
//   rankingPosition: number;
//   citationConsistency: number;
//   brandQueries: number;
// }

// interface InteractiveGraphProps {
//   graphData: GraphData[];
// }

// export default function InteractiveGraph({ graphData }: InteractiveGraphProps) {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const getSmoothPath = (pts: {x: number, y: number}[]) => {
//     let d = `M ${pts[0].x} ${pts[0].y}`;
//     for (let i = 0; i < pts.length - 1; i++) {
//       const cp1x = pts[i].x + (pts[i+1].x - pts[i].x) / 2;
//       d += ` C ${cp1x} ${pts[i].y}, ${cp1x} ${pts[i+1].y}, ${pts[i+1].x} ${pts[i+1].y}`;
//     }
//     return d;
//   };

//   const sourceMentionPoints = graphData.map((d, i) => ({
//     x: (i / (graphData.length - 1)) * 100,
//     y: 100 - d.sourceMentions
//   }));

//   const brandQueryPoints = graphData.map((d, i) => ({
//     x: (i / (graphData.length - 1)) * 100,
//     y: 100 - d.brandQueries
//   }));

//   return (
//     <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-white rounded-3xl border border-purple-100 p-8 pt-12 shadow-lg overflow-visible mb-8">
      
//       {/* Y-Axis Labels */}
//       <div className="absolute left-6 top-12 bottom-20 flex flex-col justify-between text-[10px] font-bold text-gray-400/80">
//         <span>100</span>
//         <span>50</span>
//         <span>0</span>
//       </div>

//       {/* Horizontal Dashed Grid */}
//       <div className="absolute left-16 right-8 top-12 bottom-20 flex flex-col justify-between pointer-events-none">
//         <div className="w-full border-t border-dashed border-gray-300/40" />
//         <div className="w-full border-t border-dashed border-gray-300/40" />
//         <div className="w-full border-t border-gray-300/40" />
//       </div>

//       <div className="relative h-64 ml-8 mr-4">
//         <svg 
//           className="w-full h-full overflow-visible" 
//           viewBox="0 0 100 100" 
//           preserveAspectRatio="none"
//         >
//           <g>
//             {/* Brand Queries - Indigo */}
//             <path 
//               d={getSmoothPath(brandQueryPoints)} 
//               fill="none" 
//               stroke={activeIndex !== null ? '#818CF8' : '#4F46E5'}
//               strokeWidth={activeIndex !== null ? '4' : '3.5'}
//               strokeLinecap="round" 
//               vectorEffect="non-scaling-stroke"
//               className="transition-all duration-300"
//               style={{
//                 filter: activeIndex !== null ? 'drop-shadow(0 0 8px rgba(79, 70, 229, 0.6))' : 'none'
//               }}
//             />

//             {/* Source Mentions - Purple */}
//             <path 
//               d={getSmoothPath(sourceMentionPoints)} 
//               fill="none" 
//               stroke={activeIndex !== null ? '#C084FC' : '#A855F7'}
//               strokeWidth={activeIndex !== null ? '4' : '3.5'}
//               strokeLinecap="round" 
//               vectorEffect="non-scaling-stroke"
//               className="transition-all duration-300"
//               style={{
//                 filter: activeIndex !== null ? 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.6))' : 'none'
//               }}
//             />

//             {/* Data Points - Source Mentions (tiny dots only) */}
//             {sourceMentionPoints.map((p, i) => {
//               const isActive = activeIndex === i;
//               return (
//                 <circle 
//                   key={`sm-${i}`}
//                   cx={p.x} 
//                   cy={p.y} 
//                   r={isActive ? '2' : '1.5'}
//                   fill="#A855F7" 
//                   vectorEffect="non-scaling-stroke"
//                   className="transition-all duration-300"
//                 />
//               );
//             })}

//             {/* Data Points - Brand Queries (tiny dots only) */}
//             {brandQueryPoints.map((p, i) => {
//               const isActive = activeIndex === i;
//               return (
//                 <circle 
//                   key={`bq-${i}`}
//                   cx={p.x} 
//                   cy={p.y} 
//                   r={isActive ? '2' : '1.5'}
//                   fill="#4F46E5" 
//                   vectorEffect="non-scaling-stroke"
//                   className="transition-all duration-300"
//                 />
//               );
//             })}

//             {/* Vertical hover line */}
//             {activeIndex !== null && (
//               <line
//                 x1={(activeIndex / (graphData.length - 1)) * 100}
//                 y1="0"
//                 x2={(activeIndex / (graphData.length - 1)) * 100}
//                 y2="100"
//                 stroke="#A855F7"
//                 strokeWidth="1"
//                 strokeDasharray="4 2"
//                 opacity="0.3"
//                 vectorEffect="non-scaling-stroke"
//                 className="transition-opacity duration-300"
//               />
//             )}

//             {/* Interactive overlay */}
//             {graphData.map((_, i) => (
//               <rect 
//                 key={i}
//                 x={(i / (graphData.length - 1)) * 100 - 3}
//                 y="0"
//                 width="6"
//                 height="100"
//                 fill="transparent"
//                 className="cursor-pointer"
//                 onMouseEnter={() => setActiveIndex(i)}
//                 onMouseLeave={() => setActiveIndex(null)}
//               />
//             ))}
//           </g>
//         </svg>

//         {/* Tooltip */}
//         {activeIndex !== null && (
//           <div 
//             className="absolute bg-white rounded-2xl shadow-2xl border border-purple-100 p-5 z-50 w-64 pointer-events-none transition-all duration-300 animate-fadeIn"
//             style={{ 
//               left: `${(activeIndex / (graphData.length - 1)) * 100}%`,
//               top: '-10%',
//               transform: 'translate(-50%, -100%)'
//             }}
//           >
//             <div className="text-xs font-black text-gray-900 mb-4 border-b border-purple-50 pb-2 uppercase tracking-wide">
//               {graphData[activeIndex].week}
//             </div>
//             <div className="space-y-3">
//               <div className="flex items-center justify-between group">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-0.5 bg-purple-600 rounded-full group-hover:w-4 transition-all" />
//                   <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">Source Mentions</span>
//                 </div>
//                 <span className="text-sm font-black text-purple-600">{graphData[activeIndex].sourceMentions}%</span>
//               </div>
//               <div className="flex items-center justify-between group">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-0.5 bg-indigo-600 rounded-full group-hover:w-4 transition-all" />
//                   <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">Brand Queries</span>
//                 </div>
//                 <span className="text-sm font-black text-indigo-600">{graphData[activeIndex].brandQueries}%</span>
//               </div>
//               <div className="flex items-center justify-between group">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-0.5 bg-green-600 rounded-full group-hover:w-4 transition-all" />
//                   <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">Citation Rate</span>
//                 </div>
//                 <span className="text-sm font-black text-green-600">{graphData[activeIndex].citationConsistency}%</span>
//               </div>
//               <div className="flex items-center justify-between group">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-0.5 bg-blue-600 rounded-full group-hover:w-4 transition-all" />
//                   <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">Ranking Pos.</span>
//                 </div>
//                 <span className="text-sm font-black text-blue-600">{100 - graphData[activeIndex].rankingPosition}</span>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* X-Axis Labels */}
//       <div className="flex justify-between mt-8 ml-8 mr-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
//         {graphData.map((d, i) => (
//           <span 
//             key={i}
//             className={`transition-all duration-300 ${activeIndex === i ? 'text-purple-600 scale-110' : ''}`}
//           >
//             {d.week}
//           </span>
//         ))}
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translate(-50%, -100%) scale(0.95); }
//           to { opacity: 1; transform: translate(-50%, -100%) scale(1); }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.2s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';

interface GraphData {
  week: string;
  sourceMentions: number;
  rankingPosition: number;
  citationConsistency: number;
  brandQueries: number;
}

interface InteractiveGraphProps {
  graphData: GraphData[];
}

export default function InteractiveGraph({ graphData }: InteractiveGraphProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const getSmoothPath = (pts: {x: number, y: number}[]) => {
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const cp1x = pts[i].x + (pts[i+1].x - pts[i].x) / 2;
      d += ` C ${cp1x} ${pts[i].y}, ${cp1x} ${pts[i+1].y}, ${pts[i+1].x} ${pts[i+1].y}`;
    }
    return d;
  };

  const sourceMentionPoints = graphData.map((d, i) => ({
    x: (i / (graphData.length - 1)) * 100,
    y: 100 - d.sourceMentions
  }));

  const brandQueryPoints = graphData.map((d, i) => ({
    x: (i / (graphData.length - 1)) * 100,
    y: 100 - d.brandQueries
  }));

  return (
    <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-white rounded-3xl border border-purple-100 p-8 pt-12 shadow-lg overflow-visible mb-8">
      
      {/* Y-Axis Labels */}
      <div className="absolute left-6 top-12 bottom-20 flex flex-col justify-between text-[10px] font-bold text-gray-400/80">
        <span>100</span>
        <span>50</span>
        <span>0</span>
      </div>

      {/* Horizontal Dashed Grid */}
      <div className="absolute left-16 right-8 top-12 bottom-20 flex flex-col justify-between pointer-events-none">
        <div className="w-full border-t border-dashed border-gray-300/40" />
        <div className="w-full border-t border-dashed border-gray-300/40" />
        <div className="w-full border-t border-gray-300/40" />
      </div>

      <div className="relative h-64 ml-8 mr-4">
        <svg 
          className="w-full h-full overflow-visible" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <g>
            {/* Brand Queries - Indigo */}
            <path 
              d={getSmoothPath(brandQueryPoints)} 
              fill="none" 
              stroke={activeIndex !== null ? '#818CF8' : '#4F46E5'}
              strokeWidth={activeIndex !== null ? '4' : '3.5'}
              strokeLinecap="round" 
              vectorEffect="non-scaling-stroke"
              className="transition-all duration-300"
              style={{
                filter: activeIndex !== null ? 'drop-shadow(0 0 8px rgba(79, 70, 229, 0.6))' : 'none'
              }}
            />

            {/* Source Mentions - Purple */}
            <path 
              d={getSmoothPath(sourceMentionPoints)} 
              fill="none" 
              stroke={activeIndex !== null ? '#C084FC' : '#A855F7'}
              strokeWidth={activeIndex !== null ? '4' : '3.5'}
              strokeLinecap="round" 
              vectorEffect="non-scaling-stroke"
              className="transition-all duration-300"
              style={{
                filter: activeIndex !== null ? 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.6))' : 'none'
              }}
            />

            {/* Data Points - Source Mentions (only on hover) */}
            {activeIndex !== null && (
              <circle 
                cx={sourceMentionPoints[activeIndex].x} 
                cy={sourceMentionPoints[activeIndex].y} 
                r="2"
                fill="#A855F7" 
                vectorEffect="non-scaling-stroke"
                className="transition-all duration-300"
              />
            )}

            {/* Data Points - Brand Queries (only on hover) */}
            {activeIndex !== null && (
              <circle 
                cx={brandQueryPoints[activeIndex].x} 
                cy={brandQueryPoints[activeIndex].y} 
                r="2"
                fill="#4F46E5" 
                vectorEffect="non-scaling-stroke"
                className="transition-all duration-300"
              />
            )}

            {/* Vertical hover line */}
            {activeIndex !== null && (
              <line
                x1={(activeIndex / (graphData.length - 1)) * 100}
                y1="0"
                x2={(activeIndex / (graphData.length - 1)) * 100}
                y2="100"
                stroke="#A855F7"
                strokeWidth="1"
                strokeDasharray="4 2"
                opacity="0.3"
                vectorEffect="non-scaling-stroke"
                className="transition-opacity duration-300"
              />
            )}

            {/* Interactive overlay */}
            {graphData.map((_, i) => (
              <rect 
                key={i}
                x={(i / (graphData.length - 1)) * 100 - 3}
                y="0"
                width="6"
                height="100"
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
              />
            ))}
          </g>
        </svg>

        {/* Tooltip */}
        {activeIndex !== null && (
          <div 
            className="absolute bg-white rounded-2xl shadow-2xl border border-purple-100 p-5 z-50 w-64 pointer-events-none transition-all duration-300 animate-fadeIn"
            style={{ 
              left: `${(activeIndex / (graphData.length - 1)) * 100}%`,
              top: '-10%',
              transform: 'translate(-50%, -100%)'
            }}
          >
            <div className="text-xs font-black text-gray-900 mb-4 border-b border-purple-50 pb-2 uppercase tracking-wide">
              {graphData[activeIndex].week}
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-0.5 bg-purple-600 rounded-full group-hover:w-4 transition-all" />
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">Source Mentions</span>
                </div>
                <span className="text-sm font-black text-purple-600">{graphData[activeIndex].sourceMentions}%</span>
              </div>
              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-0.5 bg-indigo-600 rounded-full group-hover:w-4 transition-all" />
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">Brand Queries</span>
                </div>
                <span className="text-sm font-black text-indigo-600">{graphData[activeIndex].brandQueries}%</span>
              </div>
              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-0.5 bg-green-600 rounded-full group-hover:w-4 transition-all" />
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">Citation Rate</span>
                </div>
                <span className="text-sm font-black text-green-600">{graphData[activeIndex].citationConsistency}%</span>
              </div>
              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-0.5 bg-blue-600 rounded-full group-hover:w-4 transition-all" />
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">Ranking Pos.</span>
                </div>
                <span className="text-sm font-black text-blue-600">{100 - graphData[activeIndex].rankingPosition}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* X-Axis Labels */}
      <div className="flex justify-between mt-8 ml-8 mr-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
        {graphData.map((d, i) => (
          <span 
            key={i}
            className={`transition-all duration-300 ${activeIndex === i ? 'text-purple-600 scale-110' : ''}`}
          >
            {d.week}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, -100%) scale(0.95); }
          to { opacity: 1; transform: translate(-50%, -100%) scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}