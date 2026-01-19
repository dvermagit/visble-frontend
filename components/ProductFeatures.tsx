import { Monitor, Brain, BarChart3 } from 'lucide-react';
// The interactive logic stays inside this component
import FeatureFlowchart from './FeatureFlowchart'; 

const features = [
  {
    title: 'Real-time AI Mention Tracking',
    description: 'Monitor brand mentions across all major platforms with AI-powered accuracy and instant notifications.',
    icon: Monitor,
    color: 'bg-blue-500',
    workflow: [
      { step: 1, label: 'Scan Platforms', active: false },
      { step: 2, label: 'Detect Mentions', active: false },
      { step: 3, label: 'Filter Relevance', active: false },
      { step: 4, label: 'Real-time Alert', active: false },
    ]
  },
  {
    title: 'Sentiment Analysis & Brand Perception',
    description: 'Advanced AI analyzes sentiment, context, and brand perception across all mentions with 99.2% accuracy.',
    icon: Brain,
    color: 'bg-purple-500',
    workflow: [
      { step: 1, label: 'Collect Data', active: false },
      { step: 2, label: 'AI Analysis', active: false },
      { step: 3, label: 'Sentiment Score', active: false },
      { step: 4, label: 'Insight Report', active: false },
    ]
  },
  {
    title: 'Competitive Intelligence & Insights',
    description: 'Track competitors, identify market opportunities, and stay ahead with comprehensive competitive analysis.',
    icon: BarChart3,
    color: 'bg-green-500',
    workflow: [
      { step: 1, label: 'Monitor Competitors', active: false },
      { step: 2, label: 'Compare Metrics', active: false },
      { step: 3, label: 'Identify Gaps', active: false },
      { step: 4, label: 'Strategic Recommendations', active: false },
    ]
  },
];

export default function ProductFeatures() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bricolage text-gray-900 mb-4">
            Powerful Features for Complete Brand Control
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience next-generation brand monitoring with AI-powered insights, real-time tracking, and automated workflows.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
              >
                {/* Icon Header */}
                <div 
                  className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  aria-hidden="true"
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4 mb-8 min-h-[140px]">
                  <h3 className="text-xl font-bold bricolage text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* 
                  Client Component Island:
                  The animation logic lives inside FeatureFlowchart.
                  Because FeatureFlowchart has 'use client' inside its file,
                  it works perfectly nested here.
                */}
                <FeatureFlowchart workflow={feature.workflow} color={feature.color} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}