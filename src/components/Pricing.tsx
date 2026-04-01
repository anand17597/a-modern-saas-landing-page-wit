import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface PricingProps {
  id: string;
}

interface Plan {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number; // 20% off
  features: string[];
  isRecommended?: boolean;
  cta: string;
}

const pricingPlans: Plan[] = [
  {
    name: 'Basic',
    monthlyPrice: 29,
    yearlyPrice: 23,
    features: ['10 GB Storage', '5 Projects', 'Basic Analytics', 'Email Support'],
    cta: 'Choose Basic',
  },
  {
    name: 'Pro',
    monthlyPrice: 59,
    yearlyPrice: 47,
    features: ['100 GB Storage', 'Unlimited Projects', 'Advanced Analytics', 'Priority Email Support', 'Team Collaboration Tools'],
    isRecommended: true,
    cta: 'Choose Pro',
  },
  {
    name: 'Enterprise',
    monthlyPrice: 129,
    yearlyPrice: 103,
    features: ['Unlimited Storage', 'Unlimited Projects', 'Custom Analytics', 'Dedicated Support Manager', 'Onboarding & Training', 'Custom Integrations'],
    cta: 'Contact Sales',
  },
];

const Pricing: React.FC<PricingProps> = ({ id }) => {
  const [isMonthly, setIsMonthly] = useState(true);
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id={id} className="section-padding bg-gray-50">
      <div ref={ref} className="max-w-7xl mx-auto text-center">
        <h2 className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold mb-6",
          "transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          Flexible Pricing Plans for Every Business
        </h2>
        <p className={cn(
          "text-lg text-gray-600 mb-12 max-w-3xl mx-auto",
          "transition-all duration-700 ease-out delay-100",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          Choose the plan that best fits your needs, with transparent pricing and no hidden fees.
        </p>

        {/* Pricing Toggle */}
        <div className={cn(
          "flex justify-center mb-12",
          "transition-all duration-700 ease-out delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-flex p-1 bg-gray-200 rounded-full">
            <button
              onClick={() => setIsMonthly(true)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300",
                isMonthly ? "bg-indigo-600 text-white shadow-md" : "text-gray-700 hover:text-indigo-600"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsMonthly(false)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300",
                !isMonthly ? "bg-indigo-600 text-white shadow-md" : "text-gray-700 hover:text-indigo-600"
              )}
            >
              Annually <span className="text-indigo-500 font-semibold">(20% off)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "bg-white p-8 rounded-xl shadow-lg border border-gray-200 flex flex-col",
                plan.isRecommended && "border-2 border-indigo-600 transform scale-105",
                "transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                `delay-${100 * (index + 3)}` // Staggered animation
              )}
            >
              <h3 className="text-2xl font-bold mb-4">
                {plan.name}
                {plan.isRecommended && (
                  <span className="ml-2 text-xs bg-indigo-600 text-white px-3 py-1 rounded-full">Recommended</span>
                )}
              </h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-indigo-600">
                  ${isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
                </span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="text-left space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="text-green-500 mr-2" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;