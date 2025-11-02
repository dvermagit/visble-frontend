'use client';

import { TrendingUp, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    company: 'Lago',
    person: 'Finn Lobsien, Growth Lead',
    avatar: 'L',
    title: '50% increase in demos from AI Search',
    description: 'Lago achieved a 50% increase in demos from AI Search after implementing Athena. With 11x growth in AI Overview impressions and exploding citations, Athena became their command center for GEO.',
    metrics: [
      { label: 'AI Overview impressions growth', value: '11x', subtext: '(3% → 33%)' },
      { label: 'Citation rate growth', value: '2x', subtext: '(3.5% → 17%)' },
    ],
    icon: TrendingUp,
    color: 'bg-blue-500',
  },
  {
    company: 'Grüns',
    person: 'Connor Dault, CMO',
    avatar: 'G',
    title: '6x Share of Voice Lift in 60 Days',
    description: 'Grüns grew Share of Voice from 2.0% to 12.6% in 60 days, with 19% brand mentions and 23x citation rate driven by a prompt-led pillar-and-cluster strategy.',
    metrics: [
      { label: 'Brand mention rate growth', value: '+19%', subtext: '(4% → 25%)' },
      { label: 'Citation rate growth', value: '23x', subtext: '(0.3% → 7.0%)' },
    ],
    icon: Users,
    color: 'bg-green-500',
  },
  {
    company: 'Popl',
    person: 'Bryce Alsten, VP of Marketing',
    avatar: 'P',
    title: '38% MoM Increase in Leads From AI Search',
    description: '"We moved from 5th to 1st position in AI Search rankings and saw 38.85% monthly growth in leads from AI Search. The 1,561% ROI with 18-day payback exceeded our expectations."',
    metrics: [
      { label: 'in AI Search Share of Voice', value: '5th to 1st', subtext: 'position ranking' },
      { label: 'ROI with 18-day payback period', value: '1,561%', subtext: 'exceeded expectations' },
    ],
    icon: Target,
    color: 'bg-purple-500',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bricolage text-gray-900 mb-4">
            Updates & Customer Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading companies are achieving remarkable results with Visble's AI-powered brand monitoring
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg font-bold text-gray-700 bricolage">
                      {study.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 bricolage">{study.company}</div>
                    <div className="text-sm text-gray-600">{study.person}</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold bricolage text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="space-y-4 mb-6">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <div className="text-3xl font-bold bricolage text-gray-900">
                        {metric.value}
                      </div>
                      <div className="text-right text-sm">
                        <div className="text-gray-900 font-medium">{metric.label}</div>
                        <div className="text-gray-500">{metric.subtext}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                >
                  Read the full story
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}