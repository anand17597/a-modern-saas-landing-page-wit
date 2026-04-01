import React from "react";
import { cn } from "@/lib/utils";

interface HeroProps {
  id: string;
  scrollTo: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ id, scrollTo }) => {
  return (
    <section
      id={id}
      className={cn(
        "bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28 pt-24 md:pt-32 lg:pt-40",
        "bg-[url('https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=1600&q=90')] bg-cover bg-center bg-blend-overlay"
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">Welcome to SaasFlow</h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl">Your solution for seamless business operations.</p>
          <button onClick={() => scrollTo("features")} className="mt-8 px-8 py-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;