'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Visble transformed how our team collaborates on data insights. What used to take hours of back-and-forth emails now happens in real-time. The ROI has been incredible.",
    author: 'Sarah Chen',
    title: 'VP of Analytics, TechCorp',
    avatar: 'SC',
    rating: 5,
  },
  {
    quote: "As a data analyst constantly on the move, Visble's mobile experience is a game-changer. I can review dashboards, share insights with clients, and make data-driven decisions from anywhere.",
    author: 'Michael Rodriguez',
    title: 'Senior Data Analyst, DataFlow Inc',
    avatar: 'MR',
    rating: 5,
  },
  {
    quote: "The AI-powered insights have helped us understand our brand perception better than ever. We've seen a 6x increase in our share of voice in just 60 days. Visble is now essential to our workflow.",
    author: 'Emily Park',
    title: 'Chief Marketing Officer, Growth Labs',
    avatar: 'EP',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bricolage text-gray-900 mb-4">
            Loved by data teams worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about their experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary mb-6 opacity-50" />

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold bricolage">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 bricolage">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.title}
                  </div>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute left-0 top-8 w-1 h-16 bg-primary rounded-r"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}