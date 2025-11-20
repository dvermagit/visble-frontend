'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, Eye, ChartBar as BarChart3, ArrowUp, ArrowDown } from 'lucide-react';

interface AnimatedValues {
  brandMentions: number;
  geoScore: number;
  brandMentionRate: number;
  overallPresence: number;
  marketShare: number;
}

const BrandMentionsWidget = ({ animatedValues }: { animatedValues: AnimatedValues }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-lg font-bold text-gray-800">Brand Mentions</h3>
      <span className="text-xs text-gray-500">Full Scale</span>
    </div>
    <div className="text-3xl font-bold text-gray-900 mb-2">
      {animatedValues.brandMentions.toFixed(1)}%
    </div>
    <div className="h-20 relative">
      <svg className="w-full h-full" viewBox="0 0 300 80">
        <defs>
          <linearGradient id="trendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <path
          d="M0,60 Q75,45 150,35 T300,20"
          stroke="url(#trendGradient)"
          strokeWidth="3"
          fill="none"
          className="animate-pulse"
        />
        <circle cx="300" cy="20" r="4" fill="#3B82F6" className="animate-pulse" />
      </svg>
    </div>
    <div className="flex items-center text-sm text-gray-600">
      <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
      <span>+12.3% from last month</span>
    </div>
  </div>
);

const GeoScoreWidget = ({ animatedValues }: { animatedValues: AnimatedValues }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-lg font-bold text-gray-800">Overall GEO Score</h3>
      <span className="text-xs text-gray-500">weighted visibility score</span>
    </div>
    <div className="text-3xl font-bold text-gray-900 mb-4">
      {animatedValues.geoScore.toFixed(1)}%
    </div>
    
    <div className="space-y-4">
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Brand Mention Rate</span>
          <span className="font-medium">{animatedValues.brandMentionRate.toFixed(1)}/100%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-1000"
            style={{ width: `${animatedValues.brandMentionRate}%` }}
          />
        </div>
      </div>
      
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Overall Presence</span>
          <span className="font-medium">{animatedValues.overallPresence.toFixed(1)}/100%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
            style={{ width: `${animatedValues.overallPresence}%` }}
          />
        </div>
      </div>
    </div>
  </div>
);

const MarketShareWidget = ({ animatedValues }: { animatedValues: AnimatedValues }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-lg font-bold text-gray-800">AI Brand Mentions Market Share</h3>
      <span className="text-xs text-gray-500">{animatedValues.marketShare.toFixed(1)}%</span>
    </div>
    
    <div className="flex items-center mb-4">
      <div className="w-3 h-3 bg-primary rounded-full mr-2" />
      <span className="text-sm text-gray-600">Your Brand</span>
    </div>
    
    <p className="text-sm text-gray-500 mb-4">
      Distribution of AI-related brand mentions across competitors
    </p>
    
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">Market Position</span>
        <span className="text-lg font-bold text-primary">#2</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">Share Growth</span>
        <div className="flex items-center">
          <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
          <span className="text-sm font-medium text-green-600">+5.2%</span>
        </div>
      </div>
    </div>
  </div>
);

export default function WorkingSnippets() {
  const [activeWidget, setActiveWidget] = useState(0);
  const [animatedValues, setAnimatedValues] = useState<AnimatedValues>({
    brandMentions: 0,
    geoScore: 0,
    brandMentionRate: 0,
    overallPresence: 0,
    marketShare: 0,
  });

  const widgets = [
    { component: BrandMentionsWidget, title: 'Brand Mentions Tracking', icon: TrendingUp },
    { component: GeoScoreWidget, title: 'GEO Visibility Score', icon: Eye },
    { component: MarketShareWidget, title: 'Market Share Analysis', icon: BarChart3 },
  ];

  const targetValues = {
    brandMentions: 67.3,
    geoScore: 31.9,
    brandMentionRate: 32.1,
    overallPresence: 19.4,
    marketShare: 15.8,
  };

  // Animate values on mount and widget change
  useEffect(() => {
    const animateValues = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        
        setAnimatedValues({
          brandMentions: targetValues.brandMentions * easeProgress,
          geoScore: targetValues.geoScore * easeProgress,
          brandMentionRate: targetValues.brandMentionRate * easeProgress,
          overallPresence: targetValues.overallPresence * easeProgress,
          marketShare: targetValues.marketShare * easeProgress,
        });
        
        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    };

    animateValues();
  }, [activeWidget]);

  // Auto-cycle through widgets
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWidget((prev) => (prev + 1) % widgets.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: 'Real-time Dashboard',
      description: 'Live monitoring with instant updates and interactive visualizations',
      icon: TrendingUp,
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Advanced sentiment analysis and brand perception scoring',
      icon: Eye,
    },
    {
      title: 'Competitive Intelligence',
      description: 'Track market share and competitor performance metrics',
      icon: BarChart3,
    },
  ];

  const ActiveWidget = widgets[activeWidget].component;

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bricolage text-gray-900 mb-4">
            See Visble in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our live dashboard with real-time brand monitoring data and AI-powered insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Demo */}
          <div className="relative">
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-float" />
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-400/10 rounded-full animate-float" style={{animationDelay: '1s'}} />
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-purple-400/10 rounded-full animate-float" style={{animationDelay: '2s'}} />
            
            {/* Main Widget Display */}
            <div className="relative z-10">
              <ActiveWidget animatedValues={animatedValues} />
            </div>

            {/* Widget Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {widgets.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveWidget(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeWidget ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === activeWidget;
              
              return (
                <div
                  key={index}
                  onClick={() => setActiveWidget(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? 'bg-white shadow-xl border-2 border-primary/20 scale-105' 
                      : 'bg-white/60 hover:bg-white/80 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isActive ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold bricolage mb-2 transition-colors ${
                        isActive ? 'text-primary' : 'text-gray-900'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {isActive && (
                    <div className="mt-4 flex items-center text-sm text-primary font-medium">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                      Currently viewing
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}