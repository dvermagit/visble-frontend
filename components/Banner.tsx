'use client';

import { Sparkles } from 'lucide-react';

export default function Banner() {
  return (
    <section className="py-4 bg-gradient-to-r from-primary to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-3">
          <Sparkles className="w-5 h-5" />
          <p className="font-medium">
            <span className="font-bold">New:</span> Advanced GEO Tracker with 99.2% accuracy now available
          </p>
          <Sparkles className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}