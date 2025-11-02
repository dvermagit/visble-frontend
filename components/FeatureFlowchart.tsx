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
  const [isAnimating, setIsAnimating] = useState(false);

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

  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Workflow</h4>
      
      <div className="space-y-3">
        {workflow.map((step, index) => {
          const isActive = index === activeStep;
          const isCompleted = index < activeStep;
          
          return (
            <div 
              key={index}
              className={`flex items-center p-3 rounded-lg transition-all duration-500 ${
                isActive 
                  ? 'bg-primary/10 border-2 border-primary/20 scale-105' 
                  : isCompleted
                  ? 'bg-gray-50 border border-gray-200'
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              {/* Step Number */}
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                ${isActive 
                  ? color.replace('bg-', 'bg-') + ' text-white shadow-lg' 
                  : isCompleted
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-300 text-gray-600'
                }
              `}>
                {isCompleted ? '✓' : step.step}
              </div>

              {/* Step Label */}
              <div className={`ml-3 font-medium transition-colors duration-300 ${
                isActive ? 'text-primary' : 'text-gray-700'
              }`}>
                {step.label}
              </div>

              {/* Arrow */}
              {index < workflow.length - 1 && (
                <ChevronRight className={`ml-auto w-4 h-4 transition-colors duration-300 ${
                  isActive ? 'text-primary' : 'text-gray-400'
                }`} />
              )}

              {/* Animated Pulse */}
              {isActive && (
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-lg animate-ping"></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
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