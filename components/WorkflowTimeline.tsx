// "use client";
// import React, { useState } from 'react';
// import { Globe, Users, FileText, Bot, TrendingUp, Award, CheckCircle, ArrowRight } from 'lucide-react';

// export default function WorkflowTimeline() {
//   const [activeStep, setActiveStep] = useState(null);

//   const workflowSteps = [
//     {
//       id: 1,
//       days: "Day 1-10",
//       title: "Restructuring Website & URLs",
//       description: "Reorganised 100,000+ scattered pages into clean topical hierarchies, optimising URL structures for seamless Google and LLM index coverage.",
//       icon: Globe,
//       color: "purple",
//       metrics: "100,000+ pages restructured"
//     },
//     {
//       id: 2,
//       days: "Day 11-17",
//       title: "Gaining Domain Expertise",
//       description: "Interviewed Acredge's professionals to extract unique on-ground insights, identifying critical knowledge gaps that search engines and AI lacked.",
//       icon: Users,
//       color: "blue",
//       metrics: "Deep industry insights"
//     },
//     {
//       id: 3,
//       days: "Day 18-30",
//       title: "Crafting Semantic Content",
//       description: "Developed skimmable, structured content using tables and FAQs, specifically designed for high readability by both users and LLM crawlers.",
//       icon: FileText,
//       color: "indigo",
//       metrics: "Optimized for LLM crawlers"
//     },
//     {
//       id: 4,
//       days: "Day 31-40",
//       title: "Optimising for AI",
//       description: "Implemented LLM.txt protocols to direct AI agents toward high-value data, ensuring our most authoritative content was prioritised for citations.",
//       icon: Bot,
//       color: "cyan",
//       metrics: "LLM.txt implemented"
//     },
//     {
//       id: 5,
//       days: "Day 41-50",
//       title: "Building Authority for SERPs",
//       description: "Published 30 deep-research assets, combining niche expertise with strategic backlinking to force entry into the top 5 SERP positions.",
//       icon: TrendingUp,
//       color: "green",
//       metrics: "30 research assets published"
//     },
//     {
//       id: 6,
//       days: "Day 60",
//       title: "Celebrating Excellence",
//       description: "And that's how Acredge got 100+ Source Mentions, 850% AI Search Visibility, top 5 Competitive Position, and 320% Organic Traffic!",
//       icon: Award,
//       color: "amber",
//       metrics: "Mission accomplished! 🎉"
//     }
//   ];

//   const getColorClasses = (color) => {
//     const colors = {
//       purple: {
//         bg: "bg-purple-100",
//         text: "text-purple-700",
//         border: "border-purple-300",
//         gradient: "from-purple-500 to-blue-500",
//         iconBg: "bg-purple-600"
//       },
//       blue: {
//         bg: "bg-blue-100",
//         text: "text-blue-700",
//         border: "border-blue-300",
//         gradient: "from-blue-500 to-indigo-500",
//         iconBg: "bg-blue-600"
//       },
//       indigo: {
//         bg: "bg-indigo-100",
//         text: "text-indigo-700",
//         border: "border-indigo-300",
//         gradient: "from-indigo-500 to-cyan-500",
//         iconBg: "bg-indigo-600"
//       },
//       cyan: {
//         bg: "bg-cyan-100",
//         text: "text-cyan-700",
//         border: "border-cyan-300",
//         gradient: "from-cyan-500 to-green-500",
//         iconBg: "bg-cyan-600"
//       },
//       green: {
//         bg: "bg-green-100",
//         text: "text-green-700",
//         border: "border-green-300",
//         gradient: "from-green-500 to-amber-500",
//         iconBg: "bg-green-600"
//       },
//       amber: {
//         bg: "bg-amber-100",
//         text: "text-amber-700",
//         border: "border-amber-300",
//         gradient: "from-amber-500 to-yellow-500",
//         iconBg: "bg-amber-600"
//       }
//     };
//     return colors[color];
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
//       <div className="max-w-6xl mx-auto">
        
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             The Workflow: Behind The Scenes
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             A 60-day journey transforming AI search visibility through strategic implementation
//           </p>
//         </div>

//         {/* Timeline */}
//         <div className="relative">
//           {/* Central Timeline Line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 via-blue-400 via-indigo-400 via-cyan-400 via-green-400 to-amber-400 hidden md:block"></div>

//           {/* Workflow Steps */}
//           <div className="space-y-12">
//             {workflowSteps.map((step, index) => {
//               const colors = getColorClasses(step.color);
//               const Icon = step.icon;
//               const isLeft = index % 2 === 0;

//               return (
//                 <div
//                   key={step.id}
//                   className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}
//                   onMouseEnter={() => setActiveStep(step.id)}
//                   onMouseLeave={() => setActiveStep(null)}
//                 >
//                   {/* Content Card */}
//                   <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
//                     <div
//                       className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
//                         activeStep === step.id ? `${colors.border} scale-105` : 'border-gray-200'
//                       }`}
//                     >
//                       {/* Days Badge */}
//                       <div className={`inline-block px-4 py-1.5 ${colors.bg} ${colors.text} rounded-full text-sm font-bold mb-3`}>
//                         {step.days}
//                       </div>

//                       {/* Title */}
//                       <h3 className="text-xl font-bold text-gray-900 mb-3">
//                         {step.title}
//                       </h3>

//                       {/* Description */}
//                       <p className="text-gray-600 leading-relaxed mb-4">
//                         {step.description}
//                       </p>

//                       {/* Metrics */}
//                       <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${colors.bg} rounded-lg`}>
//                         <CheckCircle className={`w-4 h-4 ${colors.text}`} />
//                         <span className={`text-xs font-semibold ${colors.text}`}>
//                           {step.metrics}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Center Icon */}
//                   <div className="relative z-10 flex-shrink-0">
//                     <div
//                       className={`w-16 h-16 rounded-full ${colors.iconBg} flex items-center justify-center shadow-lg ring-4 ring-white`}
//                     >
//                       <Icon className="w-8 h-8 text-white" />
//                     </div>
//                   </div>

//                   {/* Empty Space (for alternating layout) */}
//                   <div className="hidden md:block w-5/12"></div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Observation Box */}
//         <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
//           <div className="flex items-start gap-4">
//             <div className="flex-shrink-0 mt-1">
//               <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
//                 <span className="text-2xl">💡</span>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold mb-3">Our Observation</h3>
//               <p className="text-lg leading-relaxed opacity-95">
//                 Traditional SEO rankings and quality backlinks remain the primary trust signals that trigger AI models to grant source mentions. So, SEO is still in the game. In fact, it builds a strong base for GEO strategies to perform well.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Progress Bar */}
//         <div className="mt-12 bg-white rounded-xl p-6 shadow-lg">
//           <div className="flex items-center justify-between mb-3">
//             <span className="text-sm font-semibold text-gray-700">Project Timeline</span>
//             <span className="text-sm font-semibold text-gray-700">60 Days</span>
//           </div>
//           <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
//             <div className="h-full bg-gradient-to-r from-purple-500 via-blue-500 via-indigo-500 via-cyan-500 via-green-500 to-amber-500 rounded-full"></div>
//           </div>
//           <div className="flex justify-between mt-2 text-xs text-gray-500">
//             <span>Day 1</span>
//             <span>Day 30</span>
//             <span>Day 60</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client';

// import React, { useState } from 'react';
// import { 
//   Globe, 
//   Users, 
//   FileText, 
//   Bot, 
//   TrendingUp, 
//   Award, 
//   CheckCircle,
//   Search,
//   Map,
//   Shield,
//   Network,
//   Zap,
//   Trophy,
//   AlertCircle,
//   Calendar,
//   RefreshCw,
//   Clock
// } from 'lucide-react';

// interface WorkflowStep {
//   id: number;
//   days: string;
//   title: string;
//   description: string;
//   icon: string;
//   color: string;
//   metrics: string;
// }

// interface WorkflowData {
//   title: string;
//   subtitle: string;
//   steps: WorkflowStep[];
//   observation?: {
//     title: string;
//     description: string;
//   };
// }

// interface WorkflowTimelineProps {
//   workflow: WorkflowData;
// }

// const iconMap: { [key: string]: React.ElementType } = {
//   Globe,
//   Users,
//   FileText,
//   Bot,
//   TrendingUp,
//   Award,
//   Search,
//   Map,
//   Shield,
//   Network,
//   Zap,
//   Trophy,
//   AlertCircle,
//   Calendar,
//   RefreshCw,
//   Clock,
//   CheckCircle,
// };

// const getColorClasses = (color: string) => {
//   const colors: { [key: string]: any } = {
//     purple: {
//       bg: "bg-purple-100",
//       text: "text-purple-700",
//       border: "border-purple-300",
//       iconBg: "bg-purple-600"
//     },
//     blue: {
//       bg: "bg-blue-100",
//       text: "text-blue-700",
//       border: "border-blue-300",
//       iconBg: "bg-blue-600"
//     },
//     indigo: {
//       bg: "bg-indigo-100",
//       text: "text-indigo-700",
//       border: "border-indigo-300",
//       iconBg: "bg-indigo-600"
//     },
//     cyan: {
//       bg: "bg-cyan-100",
//       text: "text-cyan-700",
//       border: "border-cyan-300",
//       iconBg: "bg-cyan-600"
//     },
//     green: {
//       bg: "bg-green-100",
//       text: "text-green-700",
//       border: "border-green-300",
//       iconBg: "bg-green-600"
//     },
//     amber: {
//       bg: "bg-amber-100",
//       text: "text-amber-700",
//       border: "border-amber-300",
//       iconBg: "bg-amber-600"
//     }
//   };
//   return colors[color] || colors.purple;
// };

// export default function WorkflowTimeline({ workflow }: WorkflowTimelineProps) {
//   const [activeStep, setActiveStep] = useState<number | null>(null);

//   return (
//     <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       {/* Header */}
//       <div className="mb-12">
//         <h3 className="text-3xl font-bold bricolage text-gray-900 mb-3">
//           {workflow.title}
//         </h3>
//         <p className="text-base text-gray-600">
//           {workflow.subtitle}
//         </p>
//       </div>

//       {/* Timeline */}
//       <div className="relative">
//         {/* Central Timeline Line - Hidden on mobile, visible on desktop */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 via-blue-400 via-indigo-400 via-cyan-400 via-green-300 to-green-400 hidden md:block"></div>

//         {/* Workflow Steps */}
//         <div className="space-y-12">
//           {workflow.steps.map((step, index) => {
//             const colors = getColorClasses(step.color);
//             const Icon = iconMap[step.icon] || Globe;
//             const isLeft = index % 2 === 0;

//             return (
//               <div
//                 key={step.id}
//                 className={`relative flex items-center ${
//                   isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
//                 } flex-col gap-8`}
//                 onMouseEnter={() => setActiveStep(step.id)}
//                 onMouseLeave={() => setActiveStep(null)}
//               >
//                 {/* Content Card */}
//                 <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
//                   <div
//                     className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
//                       activeStep === step.id ? `${colors.border} scale-105` : 'border-gray-200'
//                     }`}
//                   >
//                     {/* Days Badge */}
//                     <div className={`inline-block px-4 py-1.5 ${colors.bg} ${colors.text} rounded-full text-sm font-bold mb-3`}>
//                       {step.days}
//                     </div>

//                     {/* Title */}
//                     <h4 className="text-xl font-bold text-gray-900 mb-3">
//                       {step.title}
//                     </h4>

//                     {/* Description */}
//                     <p className="text-gray-600 leading-relaxed mb-4 text-sm">
//                       {step.description}
//                     </p>

//                     {/* Metrics */}
//                     <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${colors.bg} rounded-lg`}>
//                       <CheckCircle className={`w-4 h-4 ${colors.text}`} />
//                       <span className={`text-xs font-semibold ${colors.text}`}>
//                         {step.metrics}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Center Icon */}
//                 <div className="relative z-10 flex-shrink-0">
//                   <div
//                     className={`w-16 h-16 rounded-full ${colors.iconBg} flex items-center justify-center shadow-lg ring-4 ring-white`}
//                   >
//                     <Icon className="w-8 h-8 text-white" />
//                   </div>
//                 </div>

//                 {/* Empty Space (for alternating layout) */}
//                 <div className="hidden md:block w-5/12"></div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Observation Box */}
//       {workflow.observation && (
//         <div className="mt-16 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
//           <div className="flex items-start gap-4">
//             <div className="flex-shrink-0 mt-1">
//               <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
//                 <span className="text-2xl">💡</span>
//               </div>
//             </div>
//             <div>
//               <h4 className="text-2xl font-bold mb-3">{workflow.observation.title}</h4>
//               <p className="text-lg leading-relaxed opacity-95">
//                 {workflow.observation.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Progress Bar */}
//       <div className="mt-12 bg-white rounded-xl p-6 shadow-lg">
//         <div className="flex items-center justify-between mb-3">
//           <span className="text-sm font-semibold text-gray-700">Project Timeline</span>
//           <span className="text-sm font-semibold text-gray-700">
//             {workflow.steps[workflow.steps.length - 1].days.replace('Day ', '')}
//           </span>
//         </div>
//         <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
//           <div className="h-full bg-gradient-to-r from-purple-500 via-blue-500 via-indigo-500 via-cyan-500 via-green-300 to-green-500 rounded-full"></div>
//         </div>
//         <div className="flex justify-between mt-2 text-xs text-gray-500">
//           <span>Start</span>
//           <span>Midpoint</span>
//           <span>Complete</span>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import React, { useState } from 'react';
import {
  Globe,
  Users,
  FileText,
  Bot,
  TrendingUp,
  Award,
  CheckCircle,
  Search,
  Map,
  Shield,
  Network,
  Zap,
  Trophy,
  AlertCircle,
  Calendar,
  RefreshCw,
  Clock,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Types */
/* ------------------------------------------------------------------ */

interface WorkflowStep {
  id: number;
  days: string;
  title: string;
  description: string;
  icon: string;
  metrics: string;
}

interface WorkflowData {
  title: string;
  subtitle: string;
  steps: WorkflowStep[];
  observation?: {
    title: string;
    description: string;
  };
}

interface WorkflowTimelineProps {
  workflow: WorkflowData;
}

/* ------------------------------------------------------------------ */
/* Icon Map */
/* ------------------------------------------------------------------ */

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Users,
  FileText,
  Bot,
  TrendingUp,
  Award,
  Search,
  Map,
  Shield,
  Network,
  Zap,
  Trophy,
  AlertCircle,
  Calendar,
  RefreshCw,
  Clock,
  CheckCircle,
};

/* ------------------------------------------------------------------ */
/* Color System */
/* ------------------------------------------------------------------ */

const getColorClasses = (color: string) => {
  const colors: Record<string, any> = {
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-700',
      border: 'border-purple-300',
      iconBg: 'bg-purple-600',
    },
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      border: 'border-blue-300',
      iconBg: 'bg-blue-600',
    },
    indigo: {
      bg: 'bg-indigo-100',
      text: 'text-indigo-700',
      border: 'border-indigo-300',
      iconBg: 'bg-indigo-600',
    },
    cyan: {
      bg: 'bg-cyan-100',
      text: 'text-cyan-700',
      border: 'border-cyan-300',
      iconBg: 'bg-cyan-600',
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-700',
      border: 'border-green-300',
      iconBg: 'bg-green-600',
    },
    amber: {
      bg: 'bg-amber-100',
      text: 'text-amber-700',
      border: 'border-amber-300',
      iconBg: 'bg-amber-600',
    },
  };

  return colors[color] || colors.purple;
};

/* ------------------------------------------------------------------ */
/* Timeline → Color Logic */
/* ------------------------------------------------------------------ */

const getColorByTimeline = (index: number, total: number) => {
  const progress = index / (total - 1 || 1);

  if (progress <= 0.2) return getColorClasses('purple');
  if (progress <= 0.4) return getColorClasses('blue');
  if (progress <= 0.6) return getColorClasses('indigo');
  if (progress <= 0.8) return getColorClasses('cyan');
  return getColorClasses('green');
};

/* ------------------------------------------------------------------ */
/* Component */
/* ------------------------------------------------------------------ */

export default function WorkflowTimeline({ workflow }: WorkflowTimelineProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold bricolage text-gray-900 mb-3">
          {workflow.title}
        </h3>
        <p className="text-base text-gray-600">{workflow.subtitle}</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 via-blue-400 via-indigo-400 via-cyan-400 to-green-400 hidden md:block" />

        <div className="space-y-12">
          {workflow.steps.map((step, index) => {
            const colors = getColorByTimeline(index, workflow.steps.length);
            const Icon = iconMap[step.icon] || Globe;
            const isLeft = index % 2 === 0;
            const isActive = activeStep === step.id;

            return (
              <div
                key={step.id}
                className={`relative flex items-center ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col gap-8`}
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Card */}
                <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right' : ''}`}>
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 border-2
                      ${
                        isActive
                          ? `${colors.border} scale-[1.03]`
                          : 'border-gray-200'
                      }`}
                  >
                    {/* Days */}
                    <div
                      className={`inline-block px-4 py-1.5 ${colors.bg} ${colors.text} rounded-full text-sm font-bold mb-3`}
                    >
                      {step.days}
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h4>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1.5 ${colors.bg} rounded-lg`}
                    >
                      <CheckCircle className={`w-4 h-4 ${colors.text}`} />
                      <span className={`text-xs font-semibold ${colors.text}`}>
                        {step.metrics}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-full ${colors.iconBg} flex items-center justify-center shadow-lg ring-4 ring-white`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-5/12" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Observation */}
      {workflow.observation && (
        <div className="mt-16 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
          <h4 className="text-2xl font-bold mb-3">
            {workflow.observation.title}
          </h4>
          <p className="text-lg opacity-95">
            {workflow.observation.description}
          </p>
        </div>
      )}

      {/* Progress Bar */}
      <div className="mt-12 bg-white rounded-xl p-6 shadow-lg">
        <div className="flex justify-between mb-3 text-sm font-semibold text-gray-700">
          <span>Project Timeline</span>
          <span>
            {workflow.steps[workflow.steps.length - 1].days.replace('Day ', '')}
          </span>
        </div>

        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 via-blue-500 via-indigo-500 via-cyan-500 to-green-500" />
        </div>

        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>Start</span>
          <span>Mid</span>
          <span>Complete</span>
        </div>
      </div>
    </section>
  );
}
