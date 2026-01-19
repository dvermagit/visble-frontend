'use client';

import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface WorkflowStep {
  step: number;
  label: string;
  active: boolean;
}

interface FeatureFlowchartProps {
  workflow: WorkflowStep[];
  color: string;
}

export default function FeatureFlowchart({ workflow, color }: FeatureFlowchartProps) {
  const [activeStep, setActiveStep] = useState(0);
  // Unused state removed or kept if you plan to use it later
  const [, setIsAnimating] = useState(false); 

  const colorName = color.replace('bg-', '');

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveStep((prev) => (prev + 1) % workflow.length);
        setIsAnimating(false);
      }, 200);
    }, 2000);

    return () => clearInterval(interval);
  }, [workflow.length]);

  // SEO: Generate Schema for this workflow
  const workflowSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Feature Workflow",
    "step": workflow.map((item) => ({
      "@type": "HowToStep",
      "position": item.step,
      "text": item.label
    }))
  };

  return (
    <div className="space-y-4">
      {/* Inject Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workflowSchema) }}
      />

      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
        Workflow
      </h4>
      
      {/* SEO: Use <ol> for ordered lists */}
      <ol className="space-y-3 list-none p-0 m-0">
        {workflow.map((step, index) => {
          const isActive = index === activeStep;
          const isCompleted = index < activeStep;
          
          return (
            <li 
              key={index}
              aria-current={isActive ? 'step' : undefined}
              className={`relative flex items-center p-3 rounded-lg transition-all duration-500 ${
                isActive 
                  ? `bg-${colorName}/10 border-2 border-${colorName}/20 scale-105` 
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              {/* Step Number */}
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 flex-shrink-0
                ${isActive 
                  ? `${color} text-white shadow-lg` 
                  : isCompleted
                  ? 'bg-black text-white'
                  : 'bg-gray-300 text-gray-600'
                }
              `}>
                {isCompleted ? '✓' : step.step}
              </div>

              {/* Step Label */}
              <div className={`ml-3 font-medium transition-colors duration-300 ${
                isActive ? `text-${colorName}` : 'text-gray-700'
              }`}>
                {step.label}
              </div>

              {/* Arrow */}
              {index < workflow.length - 1 && (
                <ChevronRight className={`ml-auto w-4 h-4 transition-colors duration-300 ${
                  isActive ? `text-${colorName}` : 'text-gray-400'
                }`} />
              )}

              {/* Animated Pulse (Visuals don't affect SEO) */}
              {isActive && (
                <div className={`absolute -inset-1 bg-gradient-to-r from-${colorName}/20 to-transparent rounded-lg animate-ping pointer-events-none`}></div>
              )}
            </li>
          );
        })}
      </ol>

      {/* Progress Bar */}
      <div className="mt-4" aria-hidden="true">
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          <span>Progress</span>
          <span>{Math.round(((activeStep + 1) / workflow.length) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-1000 ${color}`}
            style={{ width: `${((activeStep + 1) / workflow.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}