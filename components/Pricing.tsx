'use client';

import { useState } from 'react';
import { Check, Zap, Crown, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const monthlyPlans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    originalPrice: null,
    description: 'Perfect for businesses and startups with 4-5 core product/services',
    features: [
      'Up to 1,000 mentions/month',
      'Basic sentiment analysis',
      'Email alerts',
      '5 keywords tracking',
      'Standard support',
    ],
    cta: 'Start Free Trial',
    popular: false,
    icon: Zap,
  },
  {
    name: 'Professional',
    price: '$199',
    period: '/month',
    originalPrice: null,
    description: 'Ideal for growing companies and agencies',
    features: [
      'Up to 10,000 mentions/month',
      'Advanced AI sentiment analysis',
      'Multi-channel alerts',
      'Unlimited keywords',
      'Competitor tracking (5 brands)',
      'Custom reporting',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    popular: true,
    icon: Star,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    originalPrice: null,
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited mentions',
      'White-label solution',
      'Custom AI models',
      'API access',
      'Unlimited competitor tracking',
      'Custom integrations',
      'Dedicated account manager',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    popular: false,
    icon: Crown,
  },
];

const annualPlans = [
  {
    name: 'Starter',
    price: '$37',
    period: '/month',
    originalPrice: '$49',
    description: 'Perfect for businesses and startups with 4-5 core product/services',
    features: [
      'Up to 1,000 mentions/month',
      'Basic sentiment analysis',
      'Email alerts',
      '5 keywords tracking',
      'Standard support',
    ],
    cta: 'Start Free Trial',
    popular: false,
    icon: Zap,
  },
  {
    name: 'Professional',
    price: '$149',
    period: '/month',
    originalPrice: '$199',
    description: 'Ideal for growing companies and agencies',
    features: [
      'Up to 10,000 mentions/month',
      'Advanced AI sentiment analysis',
      'Multi-channel alerts',
      'Unlimited keywords',
      'Competitor tracking (5 brands)',
      'Custom reporting',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    popular: true,
    icon: Star,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    originalPrice: null,
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited mentions',
      'White-label solution',
      'Custom AI models',
      'API access',
      'Unlimited competitor tracking',
      'Custom integrations',
      'Dedicated account manager',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    popular: false,
    icon: Crown,
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const plans = isAnnual ? annualPlans : monthlyPlans;

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bricolage text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your brand monitoring needs. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-lg">
            <div className="flex items-center">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  !isAnnual ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center ${
                  isAnnual ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Annual
                <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Save 25%
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div 
                key={index}
                className={`
                  relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl
                  ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}
                `}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`
                    w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4
                    ${plan.popular ? 'bg-primary' : 'bg-gray-100'}
                  `}>
                    <Icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold bricolage text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center">
                    {plan.originalPrice && isAnnual && (
                      <span className="text-lg text-gray-400 line-through mr-2">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className="text-4xl font-bold bricolage text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  {isAnnual && plan.originalPrice && (
                    <div className="text-sm text-green-600 font-medium mt-1">
                      Save 25% with annual billing
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  className={`
                    w-full py-3 text-lg font-semibold
                    ${plan.popular 
                      ? 'bg-primary hover:bg-primary/90 text-white' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }
                  `}
                >
                  {plan.cta}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span>✓ Cancel anytime</span>
            <span>✓ No setup fees</span>
            <span>✓ 24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  );
}