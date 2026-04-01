import React from "react";
import { cn } from "@/lib/utils";

interface FeaturesProps {
  id: string;
}

const Features: React.FC<FeaturesProps> = ({ id }) => {
  return (
    <section id={id} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold">Feature 1</h3>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold">Feature 2</h3>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold">Feature 3</h3>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;