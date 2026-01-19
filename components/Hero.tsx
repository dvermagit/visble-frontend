// 1. Remove 'use client' to make this a Server Component
import { Play, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WorkflowVisualization from './WorkflowVisualization'; 
import DashedGridBackground from './DashedGridBackground'; 

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 bg-white overflow-hidden">
      {/* 
        If DashedGridBackground needs JS, keep 'use client' INSIDE that file. 
        It works perfectly fine imported here.
      */}
      <DashedGridBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content - Renders as pure HTML now (Great for SEO) */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              <TrendingUp className="w-4 h-4 mr-2" aria-hidden="true" />
              <span>Tech Enabled Generative Engine Optimization Service</span>
            </div>
            
            {/* H1: The most important tag on the page */}
            <h1 className="text-5xl lg:text-6xl font-bold bricolage text-gray-900 leading-tight mb-6">
              SEO for LLMs and 
              <span className="text-primary block">Google</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Control your brand’s narrative on AI Search while improving your organic rankings on Google.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {/* 
                 SEO FIX: Use 'asChild'. 
                 This renders a clean <a href="..."> tag instead of <button><a>...</a></button> (which is invalid HTML).
              */}
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
                asChild
              >
                <a href="https://app.visble.ai/signup">
                  <Play className="w-5 h-5 mr-2" aria-hidden="true" />
                  Book a Demo
                </a>
              </Button>
            </div>

            {/* Quick Stats - Semantic Definition List for clarity */}
            <dl className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              <div className="text-center">
                <dt className="text-sm text-gray-600 order-2">Traffic Growth</dt>
                <dd className="text-2xl font-bold bricolage text-gray-900 order-1 mb-1">100%</dd>
              </div>
              <div className="text-center">
                <dt className="text-sm text-gray-600 order-2">Success Stories</dt>
                <dd className="text-2xl font-bold bricolage text-gray-900 order-1 mb-1">10+</dd>
              </div>
              <div className="text-center">
                <dt className="text-sm text-gray-600 order-2">Prompts Tracked</dt>
                <dd className="text-2xl font-bold bricolage text-gray-900 order-1 mb-1">1M+</dd>
              </div>
            </dl>
          </div>

          {/* 
            Client Component Island:
            WorkflowVisualization keeps its 'use client' directive inside its own file.
            This allows the complex animation to run on the client without blocking the H1 from loading on the server.
          */}
          <div className="relative">
            <WorkflowVisualization />
          </div>
        </div>
      </div>
    </section>
  );
}