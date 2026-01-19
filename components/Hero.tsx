'use client';

import { ArrowRight, Play, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WorkflowVisualization from './WorkflowVisualization'; 
import DashedGridBackground from './DashedGridBackground'; 

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 bg-white overflow-hidden">
      <DashedGridBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Tech Enabled Generative Engine Optimization Service
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold bricolage text-gray-900 leading-tight mb-6">
            {/* <h1 className="text-5xl lg:text-6xl font-bold bricolage text-gray-900 leading-tight mb-24"> */}
              SEO for LLMs and 
              <span className="text-primary block">Google</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Control your brand’s narrative on AI Search while improving your organic rankings on Google
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                <a href="https://app.visble.ai/signup">
                  Book a Demo
                </a>
              </Button>
              {/* <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                Try Visble Login
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button> */}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold bricolage text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Traffic Growth</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bricolage text-gray-900">10+</div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bricolage text-gray-900">1M+</div>
                <div className="text-sm text-gray-600">Prompts Tracked</div>
              </div>
            </div>
          </div>

          {/* Animated Workflow Visualization */}
          <div className="relative">
            <WorkflowVisualization />
          </div>
        </div>
      </div>
    </section>
  );
}