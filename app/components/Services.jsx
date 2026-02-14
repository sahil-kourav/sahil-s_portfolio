import { serviceData } from "@/assets/assets";
import React, { useState } from "react";
import {
  ArrowRight,
  Code,
  Database,
  Server,
  Cloud,
  Zap,
  Shield,
} from "lucide-react";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Icon mapping for different service types
  const iconMap = {
    0: Code,
    1: Database,
    2: Server,
    3: Cloud,
    4: Zap,
    5: Shield,
  };

  return (
    <section
      id="services"
      className="w-full relative py-20 md:py-24 px-[7%] md:px-[10%] lg:px-[10%] scroll-mt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-xs mb-3 tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
            What I Offer
          </p>

          <h2 className="text-5xl font-Ovo text-gray-800 dark:text-white mb-6">
            My Services
          </h2>

          <p className="max-w-2xl mx-auto font-Ovo leading-relaxed text-gray-700 dark:text-gray-300">
            An overview of the backend services I offer to build and support
            scalable web applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.map(({ title, description, link }, index) => {
            const IconComponent = iconMap[index] || Code;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative border border-gray-400 dark:border-gray-700 rounded-xl px-8 py-10
                  bg-white dark:bg-transparent
                  hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/5
                  hover:bg-lightHover dark:hover:bg-darkHover
                  hover:-translate-y-2 duration-500 cursor-pointer
                  overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-300 
                      flex items-center justify-center
                      group-hover:scale-110 group-hover:rotate-3 transition-all duration-500
                      shadow-lg shadow-blue-500/20 dark:shadow-blue-500/30"
                    >
                      <IconComponent
                        className="w-7 h-7 text-white"
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-semibold mb-4 text-gray-800 dark:text-white
                   
                    transition-all duration-500"
                  >
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-Ovo">
                    {description}
                  </p>

                  {/* Read More Link */}
                  <div
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300
                    transition-colors duration-300"
                  >
                    <span>Read more</span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isHovered ? "translate-x-1" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                  rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
