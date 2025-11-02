'use client';

import { Check, Zap, Shield, Clock, Globe, Users, ChartBar as BarChart, Bell } from 'lucide-react';

const features = [
  {
    category: 'Monitoring & Tracking',
    items: [
      'Real-time mention detection across 500M+ sources',
      'Social media, news, blogs, forums, and review platforms',
      'Custom keyword and hashtag tracking',
      '24/7 automated monitoring with instant alerts',
    ],
    icon: Globe,
    color: 'text-blue-500',
  },
  {
    category: 'AI-Powered Analytics',
    items: [
      '99.2% accurate sentiment analysis',
      'Emotion detection and context understanding',
      'Brand perception scoring and trends',
      'Competitor benchmarking and analysis',
    ],
    icon: BarChart,
    color: 'text-purple-500',
  },
  {
    category: 'Smart Alerts & Notifications',
    items: [
      'Customizable alert thresholds and conditions',
      'Multi-channel notifications (email, SMS, Slack)',
      'Crisis detection and escalation protocols',
      'Priority scoring for critical mentions',
    ],
    icon: Bell,
    color: 'text-orange-500',
  },
  {
    category: 'Enterprise Security',
    items: [
      'SOC 2 Type II compliance',
      'End-to-end data encryption',
      'Role-based access controls',
      'Audit logs and compliance reporting',
    ],
    icon: Shield,
    color: 'text-green-500',
  },
];

export default function FeaturesList() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bricolage text-gray-900 mb-4">
            Complete Brand Monitoring Suite
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to monitor, analyze, and protect your brand reputation in one powerful platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm`}>
                    <Icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold bricolage text-gray-900 ml-4">
                    {category.category}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}