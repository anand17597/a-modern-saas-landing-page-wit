import React from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

interface HeroProps {
  id: string;
  scrollTo: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ id, scrollTo }) => {
  const { ref: headlineRef, isVisible: headlineVisible } = useScrollAnimation(0.1);

  return (
    <section
      id={id}
      ref={headlineRef}
      className={cn(
        "bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28 pt-24 md:pt-32 lg:pt-40",
        "bg-[url('https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=1600&q=90')] bg-cover bg-center bg-blend-overlay"
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1
            className={cn(
              "text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight mb-6",
              "transition-all duration-700 ease-out",
              headlineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Unlock Your Business Potential with <span className="text-indigo-200">SaasFlow</span>
          </h1>
          <p
            className={cn(
              "text-lg sm:text-xl lg:text-2xl text-indigo-100 mb-10 max-w-2xl mx-auto lg:mx-0",
              "transition-all duration-700 ease-out delay-200",
              headlineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Powerful tools and intuitive design to streamline your operations and drive growth.
          </p>
          <div
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4",
              "transition-all duration-700 ease-out delay-400",
              headlineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <button
              onClick={() => scrollTo("contact")}
              className="bg-white text-indigo-700 hover:bg-indigo-50 hover:text-indigo-800 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-75 min-w-[180px]"
            >
              Get Started
            </button>
            <button
              onClick={() => scrollTo("features")}
              className="bg-transparent border border-white text-white hover:bg-white hover:text-indigo-700 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 min-w-[180px]"
            >
              Learn More
            </button>
          </div>
        </div>
        <div
          className={cn(
            "lg:w-1/2 mt-12 lg:mt-0 relative",
            "transition-all duration-700 ease-out delay-600",
            headlineVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          )}
        >
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0cfaee1d?auto=format&fit=crop&w=800&q=80"
            alt="Dashboard screenshot"
            className="rounded-lg shadow-2xl w-full max-w-xl mx-auto transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-indigo-500 rounded-lg opacity-20 transform scale-95 translate-x-2 translate-y-2 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;