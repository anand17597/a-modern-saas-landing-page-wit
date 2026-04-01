import React from 'react';
import { cn } from '@/lib/utils';
import { LayoutDashboard, BarChart2, Users, CloudUpload, Zap, LifeBuoy } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface FeaturesProps {
  id: string;
}

const features = [
  {
    icon: LayoutDashboard,
    title: 'Intuitive Dashboard',
    description: 'Gain a clear overview of your business with our easy-to-use and customizable dashboard.',
  },
  {
    icon: BarChart2,
    title: 'Advanced Analytics',
    description: 'Make data-driven decisions with comprehensive reports and real-time insights.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Facilitate seamless teamwork with shared workspaces and communication tools.',
  },
  {
    icon: CloudUpload,
    title: 'Secure Cloud Storage',
    description: 'Keep your data safe and accessible from anywhere with our robust cloud infrastructure.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast Performance',
    description: 'Experience unparalleled speed and responsiveness across all features and modules.',
  },
  {
    icon: LifeBuoy,
    title: '24/7 Premium Support',
    description: 'Our dedicated team is always ready to assist you with any questions or issues.',
  },
];

const Features: React.FC<FeaturesProps> = ({ id }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id={id} className="section-padding bg-white">
      <div ref={ref} className="max-w-7xl mx-auto text-center">
        <h2 className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold mb-6",
          "transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          Powerful Features to Boost Your Productivity
        </h2>
        <p className={cn(
          "text-lg text-gray-600 mb-12 max-w-3xl mx-auto",
          "transition-all duration-700 ease-out delay-100",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          Discover how SaasFlow can transform your workflow and help you achieve your business goals faster and more efficiently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "p-8 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300",
                "transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                `delay-${100 * (index + 2)}` // Staggered animation
              )}
            >
              <div className="text-indigo-600 mb-4 inline-block p-3 bg-indigo-100 rounded-full">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;