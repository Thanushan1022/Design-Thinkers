import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Check, Zap, Star } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Basic',
    subtitle: 'Core hiring only',
    badge: null,
    color: '#0B6B3A',
    bgGradient: 'from-[#0B6B3A]/5 to-white',
    borderColor: 'border-gray-200',
    features: [
      'AI JD Generator',
      'Job Posting',
      'CV Upload / AI Builder',
      'AI Screening',
      'HR Review',
      'Candidate Dashboard',
      'Email + WhatsApp Notifications'
    ]
  },
  {
    name: 'Standard',
    subtitle: 'Advanced recruitment workflow',
    badge: 'Most Popular',
    color: '#0B2A6F',
    bgGradient: 'from-[#0B2A6F]/5 via-[#D4A017]/5 to-white',
    borderColor: 'border-[#D4A017] shadow-lg shadow-[#D4A017]/20',
    popular: true,
    features: [
      'Everything in Basic',
      'Interview Scheduling',
      'Multi-user HR Access',
      'Recruitment Pipeline Tracking',
      'Candidate Ranking',
      'Workflow Automation',
      'Analytics Dashboard',
      'Team Collaboration'
    ]
  },
  {
    name: 'Premium',
    subtitle: 'Enterprise AI recruitment suite',
    badge: null,
    color: '#D4A017',
    bgGradient: 'from-[#D4A017]/10 to-white',
    borderColor: 'border-[#D4A017]',
    features: [
      'Everything in Standard',
      'AI Recruitment Insights',
      'Advanced Analytics',
      'API Integrations',
      'Custom HR Workflows',
      'Enterprise Management',
      'Dedicated Support',
      'Unlimited Candidate Processing',
      'Full Automation Suite'
    ]
  }
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A017]/10 rounded-full mb-4">
            <Star className="h-4 w-4 text-[#D4A017]" />
            <span className="text-sm font-medium text-[#D4A017]">Flexible Pricing</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B2A6F] mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Select the subscription tier that best fits your recruitment needs and scale as you grow.
          </p>

          <div className="inline-flex items-center gap-3 p-1 bg-gray-100 rounded-full">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white shadow-sm text-[#0B2A6F] font-medium'
                  : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-white shadow-sm text-[#0B2A6F] font-medium'
                  : 'text-gray-600'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-[#0B6B3A] text-white px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? 'border-2 scale-105 shadow-2xl hover:shadow-[#D4A017]/20'
                  : 'hover:shadow-xl hover:-translate-y-1'
              } ${plan.borderColor}`}
            >
              {plan.badge && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#0B2A6F] to-[#D4A017] text-white text-xs font-semibold px-4 py-1 rounded-bl-lg">
                  {plan.badge}
                </div>
              )}

              <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} -z-10`} />

              <CardHeader className="text-center pb-8 pt-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br flex items-center justify-center`}
                  style={{
                    background: `linear-gradient(135deg, ${plan.color}15, ${plan.color}05)`
                  }}
                >
                  {plan.name === 'Basic' && <Zap className="h-8 w-8" style={{ color: plan.color }} />}
                  {plan.name === 'Standard' && <Star className="h-8 w-8" style={{ color: plan.color }} />}
                  {plan.name === 'Premium' && <Star className="h-8 w-8 fill-current" style={{ color: plan.color }} />}
                </div>

                <h3 className="text-2xl font-bold mb-1" style={{ color: plan.color }}>
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600 mb-6">{plan.subtitle}</p>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#0B2A6F] to-[#D4A017] hover:opacity-90'
                      : ''
                  }`}
                  style={!plan.popular ? {
                    backgroundColor: plan.color,
                    color: 'white'
                  } : {}}
                >
                  Get Started
                </Button>
              </CardHeader>

              <CardContent className="space-y-3 pb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5`}
                      style={{ backgroundColor: `${plan.color}15` }}
                    >
                      <Check className="h-3 w-3" style={{ color: plan.color }} />
                    </div>
                    <span className={`text-sm ${
                      feature.startsWith('Everything in')
                        ? 'font-semibold'
                        : ''
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          All plans include 14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}
