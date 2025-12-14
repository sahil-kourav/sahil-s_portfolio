import { serviceData } from "@/assets/assets";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
const Services = () => {
  return (
    <section id="services" className="w-full relative py-20 md:py-24 px-[7%] md:px-[10%] lg:px-[10%]">
      <h4 className="text-center mb-2 text-sm uppercase tracking-widest text-gray-700 dark:text-gray-400">
        What I Offer
      </h4>

      <h2 className="text-center text-5xl font-Ovo">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-16 font-Ovo leading-6 text-gray-700 dark:text-gray-300">
       An overview of the backend services I offer to build and support scalable web applications.
      </p>

      <div className="grid grid-cols-auto gap-6">
        {serviceData.map(({ title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-10
            hover:shadow-black cursor-pointer hover:bg-lightHover
            hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>
            <p className="flex items-center gap-2 text-sm mt-5">
              Read more{" "}
              <Image alt="" src={assets.right_arrow} className="w-4" />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
