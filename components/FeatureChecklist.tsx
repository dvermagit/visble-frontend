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
    }, 1500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // SEO: Create HowTo Schema
  const workflowSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Visble.ai GEO Workflow",
    "description": "A 7-step process to optimize your brand for Generative Engines.",
    "step": workflowSteps.map((step) => ({
      "@type": "HowToStep",
      "position": step.num,
      "text": step.text,
      "name": `Step ${step.num}`
    }))
  };

  return (
    <section className="relative bg-[#0a0a0a] py-12 sm:py-16">
      {/* Inject Schema for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workflowSchema) }}
      />

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

        {/* 
           SEO UPDATE: Changed <div> to <ol> (Ordered List) 
           This tells Google "Order matters here".
        */}
        <div className="max-w-4xl mx-auto">
          <ol 
            className="space-y-4 list-none m-0 p-0" 
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {workflowSteps.map((step, index) => (
              <li
                key={step.num}
                className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer w-full max-w-[450px] min-h-[72px] ${
                    activeIndex === index
                      ? 'bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary shadow-xl shadow-primary/20 scale-[1.02]'
                      : 'bg-gray-800/50 border border-gray-700/50 hover:border-gray-600'
                  }`}
                  // Accessibility: Indicates which step is currently active
                  aria-current={activeIndex === index ? 'step' : undefined}
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
                  
                  {/* Text */}
                  <h3
                    className={`text-base md:text-lg font-medium leading-tight transition-colors duration-300 ${
                      activeIndex === index ? 'text-white' : 'text-gray-300'
                    }`}
                  >
                    {step.text}
                  </h3>
                </div>
              </li>
            ))}
          </ol>
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