import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <div id="about" className="w-full relative py-8 md:py-8 px-[7%] md:px-[10%] lg:px-[10%]">
      <h4 className="text-center mb-2 text-sm uppercase tracking-widest text-gray-700 dark:text-gray-400">
        Introduction
      </h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 mt-20">
        <div className="w-80 sm:w-90 sm:w-72 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl text-base text-center text-gray-800 dark:text-gray-300 md:text-justify lg:text-justify">
            I build modern and scalable applications with a focus on clean
            structure, good user experience, and strong performance. I work with
            JavaScript, React, Next.js, Tailwind CSS, Node and RESTful
            API—bringing ideas to life from concept to production with robust
            APIs and smooth interfaces.
          </p>

          <ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:shadow-white dark:hover:bg-darkHover/50"
                key={index}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3
                  className="my-4 font-semibold text-gray-700 dark:text-white"
                >
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </li>
            ))}
          </ul>

          <h4 className="my-4 mt-8 text-xl font-semibold font-Outfit text-gray-800 dark:text-white">
            Tools I use
          </h4>

          <ul className="flex items-center gap-3 md:gap-3 lg:gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-14 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-300"
                key={index}
              >
                <Image
                  src={tool}
                  alt="Tool"
                  className="w-6 sm:w-7"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
