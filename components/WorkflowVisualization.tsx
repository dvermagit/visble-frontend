'use client';

import { useEffect, useState } from 'react';
import { Monitor, Brain, CircleAlert as AlertCircle, ChartBar as BarChart, Users, Shield } from 'lucide-react';

const workflowSteps = [
  { icon: Monitor, label: 'Track Mentions', color: 'bg-blue-500', delay: 0 },
  { icon: Brain, label: 'AI Analysis', color: 'bg-purple-500', delay: 1000 },
  { icon: AlertCircle, label: 'Smart Alerts', color: 'bg-orange-500', delay: 2000 },
  { icon: BarChart, label: 'Insights', color: 'bg-green-500', delay: 3000 },
  { icon: Users, label: 'Engage', color: 'bg-pink-500', delay: 4000 },
  { icon: Shield, label: 'Protect Brand', color: 'bg-indigo-500', delay: 5000 },
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
        const Icon = step.icon;
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
              ${step.color} ${isActive ? 'ring-4 ring-white shadow-2xl' : ''}
            `}>
              <Icon className="w-8 h-8 text-white" />
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