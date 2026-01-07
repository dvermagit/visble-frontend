'use client';

import { useEffect, useState } from 'react';

const workflowSteps = [
  { 
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    ), 
    label: 'Google', 
    color: 'bg-blue-500', 
    delay: 0 
  },
  { 
    logo: (
      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
        <span className="text-white text-xs font-bold">AI</span>
      </div>
    ), 
    label: 'AI Overview', 
    color: 'bg-purple-500', 
    delay: 1000 
  },
  { 
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#20B2AA" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#20B2AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ), 
    label: 'Perplexity', 
    color: 'bg-teal-500', 
    delay: 2000 
  },
  { 
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <defs>
          <linearGradient id="gemini-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4285F4" />
            <stop offset="25%" stopColor="#9C27B0" />
            <stop offset="50%" stopColor="#15803D" />
            <stop offset="75%" stopColor="#F9AB00" />
            <stop offset="100%" stopColor="#EA4335" />
          </linearGradient>
        </defs>
        <path fill="url(#gemini-gradient)" d="M12 2l3.09 6.26L22 9.27l-5.18 4.73L18.18 22 12 18.77 5.82 22l1.36-7.73L2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ), 
    label: 'Gemini', 
    color: 'bg-gradient-to-r from-blue-500 to-purple-500', 
    delay: 3000 
  },
  { 
    logo: (
      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v-.07zM17.9 17.39c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      </div>
    ), 
    label: 'ChatGPT', 
    color: 'bg-green-500', 
    delay: 4000 
  },
  { 
    logo: (
      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
          <path fill="currentColor" d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2L18.8 8 12 11.8 5.2 8 12 4.2zM5 9.5l6 3.5v7l-6-3.5v-7zm8 10.5v-7l6-3.5v7L13 20z"/>
        </svg>
      </div>
    ), 
    label: 'Claude', 
    color: 'bg-orange-500', 
    delay: 5000 
  },
];

export default function WorkflowVisualization() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Central Hub */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-2xl ">
          <div className="w-8 h-8 bg-white rounded-lg" ></div>
        </div>
        <div className="absolute -bottom-4 text-center">
          <div className="bricolage font-bold text-lg"></div>
        </div>
      </div> */}
      <img src="/favicon.png" alt="Visble" className="w-20 h-20" />

      {/* Workflow Nodes */}
      {workflowSteps.map((step, index) => {
        const angle = (index * 60) - 90; // 6 steps around a circle
        const radius = 140;
        const x = Math.cos(angle * Math.PI / 180) * radius;
        const y = Math.sin(angle * Math.PI / 180) * radius;
        const isActive = index === activeStep;

        return (
          <div
            key={index}
            className={`absolute transition-all duration-500 workflow-node ${
              isActive ? 'scale-110 z-10' : 'scale-100'
            }`}
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            {/* Connection Line */}
            <div 
              className={`absolute w-0.5 h-20 bg-gradient-to-r from-gray-200 to-transparent transform-gpu transition-all duration-500 ${
                isActive ? 'from-primary to-primary/20' : ''
              }`}
              style={{
                transformOrigin: 'bottom center',
                transform: `rotate(${angle + 90}deg)`,
                bottom: '50%',
                left: '50%',
                marginLeft: '-1px',
              }}
            />
            
            {/* Node */}
            <div className={`
              w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-500
              bg-white ${isActive ? 'ring-4 ring-primary shadow-2xl scale-110' : ''}
            `}>
              {step.logo}
            </div>
            
            {/* Label */}
            <div className={`
              absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center transition-all duration-500
              ${isActive ? 'text-primary font-bold scale-110' : 'text-gray-600'}
            `}>
              <div className="text-xs whitespace-nowrap">{step.label}</div>
            </div>

            {/* Animated Pulse */}
            {isActive && (
              <div className="absolute inset-0 w-16 h-16 rounded-full bg-primary/20 animate-ping"></div>
            )}
          </div>
        );
      })}

      {/* Floating Elements */}
      <div className="absolute top-8 right-8 w-3 h-3 bg-blue-400 rounded-full animate-float"></div>
      <div className="absolute bottom-12 left-12 w-2 h-2 bg-purple-400 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-16 left-16 w-4 h-4 bg-orange-400 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
    </div>
  );
}