'use client';

import { ArrowRight, Play, TrendingUp, Bell, ChartBar as BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WorkflowVisualization from './WorkflowVisualization';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              AI-Powered Brand Intelligence
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold bricolage text-gray-900 leading-tight mb-6">
              Monitor Your Brand 
              <span className="text-primary block">Everywhere</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Track mentions, analyze sentiment, and gain competitive insights across all platforms with real-time AI monitoring.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Book a Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                Try Visble Login
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold bricolage text-gray-900">500M+</div>
                <div className="text-sm text-gray-600">Daily Mentions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bricolage text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bricolage text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Real-time Monitor</div>
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