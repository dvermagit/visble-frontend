'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/favicon.png" alt="Visble" className="w-8 h-8" />
            <img src="/visble_logo.png" alt="Visble" className="w-15 h-10 pl-2" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#our-story" className="text-gray-600 hover:text-gray-900 transition-colors">Our Story</a>
            <a href="#case-studies" className="text-gray-600 hover:text-gray-900 transition-colors">Case Studies</a>
            
            {/* Tools Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsToolsOpen(!isToolsOpen)}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                Tools
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isToolsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  <a href="#brand-monitoring" className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                    Brand Monitoring
                  </a>
                  <a href="#sentiment-analysis" className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                    Sentiment Analysis
                  </a>
                  <a href="#competitor-tracking" className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                    Competitor Tracking
                  </a>
                  <a href="#ai-insights" className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                    AI Insights
                  </a>
                  <a href="#crisis-detection" className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors">
                    Crisis Detection
                  </a>
                </div>
              )}
            </div>
            
            <a href="#blogs" className="text-gray-600 hover:text-gray-900 transition-colors">Blogs</a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              Try Visble Login
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white px-6">
              Book a Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#our-story" className="text-gray-600 hover:text-gray-900 transition-colors">Our Story</a>
              <a href="#case-studies" className="text-gray-600 hover:text-gray-900 transition-colors">Case Studies</a>
              
              {/* Mobile Tools Section */}
              <div>
                <button
                  onClick={() => setIsToolsOpen(!isToolsOpen)}
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors w-full text-left"
                >
                  Tools
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isToolsOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a href="#brand-monitoring" className="block text-gray-500 hover:text-gray-700 transition-colors">
                      Brand Monitoring
                    </a>
                    <a href="#sentiment-analysis" className="block text-gray-500 hover:text-gray-700 transition-colors">
                      Sentiment Analysis
                    </a>
                    <a href="#competitor-tracking" className="block text-gray-500 hover:text-gray-700 transition-colors">
                      Competitor Tracking
                    </a>
                    <a href="#ai-insights" className="block text-gray-500 hover:text-gray-700 transition-colors">
                      AI Insights
                    </a>
                    <a href="#crisis-detection" className="block text-gray-500 hover:text-gray-700 transition-colors">
                      Crisis Detection
                    </a>
                  </div>
                )}
              </div>
              
              <a href="#blogs" className="text-gray-600 hover:text-gray-900 transition-colors">Blogs</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="justify-start">
                  Try Visble Login
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-white justify-start">
                  Book a Demo
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}