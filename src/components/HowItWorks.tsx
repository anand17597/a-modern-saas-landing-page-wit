import React from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface HowItWorksProps {
  id: string;
}

const steps = [
  {
    number: 1,
    title: 'Sign Up & Configure',
    description: 'Create your account in minutes and easily set up your preferences and team details.',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=300&q=80',
  },
  {
    number: 2,
    title: 'Integrate Your Data',
    description: 'Seamlessly connect your existing tools and import your data with our powerful integrations.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80',
  },
  {
    number: 3,
    title: 'Optimize & Grow',
    description: 'Leverage SaasFlow\'s insights and features to optimize operations and drive growth.',
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=300&q=80',
  },
];

const HowItWorks: React.FC<HowItWorksProps> = ({ id }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id={id} className="section-padding bg-gray-50">
      <div ref={ref} className="max-w-7xl mx-auto text-center">
        <h2 className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold mb-6",
          "transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          Simple Steps to Get Started
        </h2>
        <p className={cn(
          "text-lg text-gray-600 mb-12 max-w-3xl mx-auto",
          "transition-all duration-700 ease-out delay-100",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          SaasFlow is designed for ease of use. Follow these simple steps to integrate it into your workflow.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={cn(
                "flex flex-col items-center text-center",
                "transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                `delay-${100 * (index + 2)}` // Staggered animation
              )}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600 text-3xl font-bold border-4 border-indigo-200 shadow-lg">
                  {step.number}
                </div>
                <img
                  src={step.image}
                  alt={step.title}
                  className="absolute -bottom-8 -right-8 w-24 h-24 object-cover rounded-full shadow-xl border-4 border-white hidden md:block"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;