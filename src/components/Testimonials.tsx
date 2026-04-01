import React from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface TestimonialsProps {
  id: string;
}

const testimonials = [
  {
    quote: "SaasFlow has revolutionized how we manage our projects. The intuitive interface and powerful analytics are a game-changer!",
    name: "Jane Doe",
    title: "CEO of TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29329?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80",
  },
  {
    quote: "Our team collaboration has never been better. SaasFlow's shared workspaces have significantly boosted our productivity.",
    name: "John Smith",
    title: "Marketing Director at Innovate Ltd.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80",
  },
  {
    quote: "The customer support is exceptional! Any issue we've had was resolved quickly and efficiently. Highly recommend SaasFlow.",
    name: "Emily White",
    title: "Operations Manager at Growth Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-e69adba4c536?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80",
  },
];

const Testimonials: React.FC<TestimonialsProps> = ({ id }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id={id} className="section-padding bg-white">
      <div ref={ref} className="max-w-7xl mx-auto text-center">
        <h2 className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold mb-6",
          "transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          What Our Customers Say
        </h2>
        <p className={cn(
          "text-lg text-gray-600 mb-12 max-w-3xl mx-auto",
          "transition-all duration-700 ease-out delay-100",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          Hear directly from businesses that have transformed their operations with SaasFlow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "bg-gray-100 p-8 rounded-xl shadow-md flex flex-col items-center text-center",
                "transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                `delay-${100 * (index + 2)}` // Staggered animation
              )}
            >
              <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-white shadow-sm" />
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-indigo-600">- {testimonial.name}, {testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;