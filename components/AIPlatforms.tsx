'use client';

import { Sparkles } from 'lucide-react';

export default function AIPlatforms() {
  const platforms = [
    {
      name: 'Claude',
      logo: (
        <div className="flex items-center">
          <div className="w-8 h-8 mr-3">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path
                fill="#FF6B35"
                d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2L18.8 8 12 11.8 5.2 8 12 4.2zM5 9.5l6 3.5v7l-6-3.5v-7zm8 10.5v-7l6-3.5v7L13 20z"
              />
            </svg>
          </div>
          <span className="font-semibold text-gray-800">Claude</span>
        </div>
      ),
    },
    {
      name: 'Gemini',
      logo: (
        <div className="flex items-center">
          <div className="w-8 h-8 mr-3">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <defs>
                <linearGradient id="gemini-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4285F4" />
                  <stop offset="25%" stopColor="#9C27B0" />
                  <stop offset="50%" stopColor="#15803D" />
                  <stop offset="75%" stopColor="#F9AB00" />
                  <stop offset="100%" stopColor="#EA4335" />
                </linearGradient>
              </defs>
              <path
                fill="url(#gemini-gradient)"
                d="M12 2l3.09 6.26L22 9.27l-5.18 4.73L18.18 22 12 18.77 5.82 22l1.36-7.73L2 9.27l6.91-1.01L12 2z"
              />
            </svg>
          </div>
          <span className="font-semibold text-gray-800">Gemini</span>
        </div>
      ),
    },
    {
      name: 'Perplexity',
      logo: (
        <div className="flex items-center">
          <div className="w-8 h-8 mr-3">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path
                fill="#20B2AA"
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="#20B2AA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="font-semibold text-gray-800">perplexity</span>
        </div>
      ),
    },
    {
      name: 'ChatGPT',
      logo: (
        <div className="flex items-center">
          <div className="w-8 h-8 mr-3 bg-green-500 rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v-.07zM17.9 17.39c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
              />
            </svg>
          </div>
          <span className="font-semibold text-gray-800">ChatGPT</span>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/90 font-medium text-sm mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            AI Platform Monitoring
          </div>
          <h2 className="text-3xl font-bold bricolage text-white mb-4">
            Get your brand visible on:
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Monitor and optimize your brand presence across leading AI platforms where your customers are searching
          </p>
        </div>

        {/* Scrolling Platform Logos */}
        <div className="relative">
          <div className="flex space-x-12 animate-scroll">
            {/* First set */}
            {platforms.map((platform, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                {platform.logo}
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {platforms.map((platform, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                {platform.logo}
              </div>
            ))}
            
            {/* Third set for seamless loop */}
            {platforms.map((platform, index) => (
              <div 
                key={`third-${index}`}
                className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                {platform.logo}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Track your brand mentions and optimize your presence across all major AI platforms
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Start Monitoring
            </button>
            <button className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}