import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface FaqProps {
  id: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: 'What is SaasFlow?',
    answer: 'SaasFlow is a comprehensive SaaS platform designed to streamline business operations, enhance team collaboration, and provide powerful analytics for data-driven decision-making.',
  },
  {
    question: 'How do I get started with SaasFlow?',
    answer: 'Getting started is easy! Simply sign up for a free trial, choose your desired plan, and follow our guided setup to configure your account and integrate your data.',
  },
  {
    question: 'Is my data secure with SaasFlow?',
    answer: 'Absolutely. We prioritize your data security with industry-leading encryption, regular backups, and compliance with global data protection standards.',
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes, you can easily upgrade or downgrade your plan at any time directly from your account settings. Changes will be prorated.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer 24/7 premium support via email and an extensive knowledge base. Enterprise plans include a dedicated support manager.',
  },
];

const Faq: React.FC<FaqProps> = ({ id }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation(0.1);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={id} className="section-padding bg-white">
      <div ref={ref} className="max-w-7xl mx-auto text-center">
        <h2 className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold mb-6",
          "transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          Frequently Asked Questions
        </h2>
        <p className={cn(
          "text-lg text-gray-600 mb-12 max-w-3xl mx-auto",
          "transition-all duration-700 ease-out delay-100",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          Find quick answers to the most common questions about SaasFlow.
        </p>
        <div className="max-w-3xl mx-auto space-y-4 text-left">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                "bg-gray-100 p-6 rounded-xl shadow-sm",
                "transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                `delay-${100 * (index + 2)}` // Staggered animation
              )}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-200 focus:outline-none"
                aria-expanded={openIndex === index ? "true" : "false"}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 transform transition-transform duration-300",
                    openIndex === index ? "rotate-180" : "rotate-0"
                  )}
                />
              </button>
              <div
                className={cn(
                  "mt-4 text-gray-600 transition-all duration-300 ease-in-out overflow-hidden",
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;