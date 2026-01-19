import { Sparkles } from 'lucide-react';

export default function Banner() {
  return (
    <section 
      role="banner" 
      className="py-4 bg-gradient-to-r from-primary to-purple-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-3 text-center">
          <Sparkles className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
          
          <p className="font-medium text-sm sm:text-base">
            <span className="font-bold bg-white/20 px-2 py-0.5 rounded mr-2">New</span>
             Advanced GEO Tracker with 99.2% accuracy now available
          </p>
          
          <Sparkles className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}