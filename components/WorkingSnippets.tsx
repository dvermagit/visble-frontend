'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, Eye, BarChart3, Target, Play, Code, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const snippets = [
  {
    id: 'brand-mentions',
    title: 'Brand Mentions Tracker',
    description: 'Real-time brand mention tracking with sentiment analysis',
    category: 'Analytics',
    icon: TrendingUp,
    color: 'bg-blue-500',
    data: {
      percentage: 67.3,
      trend: 'up',
      label: 'Brand Mentions',
      subtitle: 'Full Scale'
    }
  },
  {
    id: 'geo-score',
    title: 'GEO Visibility Score',
    description: 'Overall brand visibility and presence metrics',
    category: 'Visibility',
    icon: Eye,
    color: 'bg-purple-500',
    data: {
      score: 31.9,
      brandMentionRate: 32.1,
      overallPresence: 19.4,
      label: 'Overall GEO Score',
      subtitle: 'weighted visibility score'
    }
  },
  {
    id: 'market-share',
    title: 'AI Brand Market Share',
    description: 'Distribution of AI-related brand mentions across competitors',
    category: 'Competition',
    icon: BarChart3,
    color: 'bg-green-500',
    data: {
      brand: 'Nestle',
      percentage: 0.0,
      label: 'AI Brand Mentions Market Share',
      subtitle: 'Distribution of AI-related brand mentions across competitors'
    }
  }
];

export default function WorkingSnippets() {
  const [activeSnippet, setActiveSnippet] = useState(0);
  const [animatedValues, setAnimatedValues] = useState({
    brandMentions: 0,
    geoScore: 0,
    brandMentionRate: 0,
    overallPresence: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSnippet((prev) => (prev + 1) % snippets.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate values when component mounts
    const timer = setTimeout(() => {
      setAnimatedValues({
        brandMentions: 67.3,
        geoScore: 31.9,
        brandMentionRate: 32.1,
        overallPresence: 19.4
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const BrandMentionsWidget = () => (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-1">Brand Mentions</h3>
          <p className="text-sm text-gray-600">Full Scale</p>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="text-3xl font-bold text-gray-900 mb-2">
          {animatedValues.brandMentions.toFixed(1)}%
        </div>
        
        {/* Trend Line Chart */}
        <div className="relative h-20 mb-4">
          <svg className="w-full h-full" viewBox="0 0 300 80">
            <defs>
              <linearGradient id="trendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 Q75,50 150,45 T300,30"
              stroke="url(#trendGradient)"
              strokeWidth="3"
              fill="none"
              className="animate-pulse"
            />
            <circle cx="300" cy="30" r="4" fill="#6366f1" className="animate-pulse" />
          </svg>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
            50%
          </div>
          <div className="flex items-center ml-6">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
            70%
          </div>
        </div>
      </div>
    </div>
  );

  const GeoScoreWidget = () => (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold text-gray-800">Overall GEO Score</h3>
          <span className="text-sm text-gray-600">weighted visibility score</span>
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-4">
          {animatedValues.geoScore.toFixed(1)}%
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Brand Mention Rate</span>
            <span className="text-sm font-bold text-gray-900">
              {animatedValues.brandMentionRate.toFixed(1)}/100%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-2000 ease-out"
              style={{ width: `${(animatedValues.brandMentionRate / 100) * 100}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Overall Presence</span>
            <span className="text-sm font-bold text-gray-900">
              {animatedValues.overallPresence.toFixed(1)}/100%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-2000 ease-out"
              style={{ width: `${(animatedValues.overallPresence / 100) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );

  const MarketShareWidget = () => (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-800 mb-1">AI Brand Mentions Market Share</h3>
        <p className="text-sm text-gray-600">Distribution of AI-related brand mentions across competitors</p>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-purple-600 rounded-full mr-3"></div>
          <span className="font-medium text-gray-800">Nestle</span>
        </div>
        <span className="text-sm text-gray-600">00.0%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div className="bg-purple-600 h-2 rounded-full w-0 transition-all duration-1000"></div>
      </div>

      <div className="text-xs text-gray-500">
        Market share analysis updates in real-time
      </div>
    </div>
  );

  const renderWidget = (snippet: typeof snippets[0]) => {
    switch (snippet.id) {
      case 'brand-mentions':
        return <BrandMentionsWidget />;
      case 'geo-score':
        return <GeoScoreWidget />;
      case 'market-share':
        return <MarketShareWidget />;
      default:
        return <BrandMentionsWidget />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bricolage text-gray-900 mb-4">
            See Visble in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive dashboard components that provide real-time insights into your brand performance
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Demo */}
          <div className="relative">
            {/* Background Decorations */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
            
            {/* Main Widget Display */}
            <div className="relative z-10">
              {renderWidget(snippets[activeSnippet])}
            </div>

            {/* Floating Mini Widgets */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg animate-float" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-gray-700">Live Data</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg animate-float" style={{animationDelay: '1.5s'}}>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <span className="text-xs font-medium text-gray-700">+12.3%</span>
              </div>
            </div>
          </div>

          {/* Feature List */}
          <div className="space-y-6">
            {snippets.map((snippet, index) => {
              const Icon = snippet.icon;
              const isActive = index === activeSnippet;
              
              return (
                <div 
                  key={snippet.id}
                  className={`
                    p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer
                    ${isActive 
                      ? 'bg-white border-primary shadow-xl scale-105' 
                      : 'bg-white/50 border-gray-200 hover:bg-white hover:shadow-lg'
                    }
                  `}
                  onClick={() => setActiveSnippet(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
                      ${isActive ? snippet.color : 'bg-gray-100'}
                    `}>
                      <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`font-bold bricolage transition-colors ${
                          isActive ? 'text-primary' : 'text-gray-900'
                        }`}>
                          {snippet.title}
                        </h3>
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                          {snippet.category}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {snippet.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  {isActive && (
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-1">
                        <div className="bg-primary h-1 rounded-full animate-pulse" style={{width: '60%'}}></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Play className="w-5 h-5 mr-2" />
                Try Interactive Demo
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                <Code className="w-5 h-5 mr-2" />
                View Code Examples
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold bricolage text-gray-900">500M+</div>
            <div className="text-sm text-gray-600">Data Points Processed</div>
          </div>
          <div>
            <div className="text-2xl font-bold bricolage text-gray-900">99.2%</div>
            <div className="text-sm text-gray-600">Analysis Accuracy</div>
          </div>
          <div>
            <div className="text-2xl font-bold bricolage text-gray-900">24/7</div>
            <div className="text-sm text-gray-600">Real-time Monitoring</div>
          </div>
          <div>
            <div className="text-2xl font-bold bricolage text-gray-900">< 1s</div>
            <div className="text-sm text-gray-600">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}