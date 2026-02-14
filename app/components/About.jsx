import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

const About = ({ isDarkMode }) => {
  return (
    <section
      id="about"
      className="w-full relative py-16 md:py-20 px-[7%] md:px-[10%] lg:px-[10%] overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent dark:via-blue-950/10 pointer-events-none" />
      
      {/* Decorative blur elements */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl" />

      <div
        className="relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-gray-500 dark:text-gray-400 font-medium mb-3">
            Introduction
          </p>
          
          <h2 className="text-4xl md:text-5xl font-bold font-Ovo text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Main content */}
        <div className="flex w-full flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          
          {/* Profile Image */}
          <div
            className="w-80 sm:w-96 lg:w-[380px] flex-shrink-0"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              
              <Image
                src={assets.user_image}
                alt="Sahil Kourav - Full Stack Developer"
                className="w-full rounded-3xl relative z-10 shadow-xl border border-gray-200 dark:border-gray-700"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 max-w-3xl">
            
            {/* Description */}
            <p className="mb-12 text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-center lg:text-left">
              I build modern and scalable applications with a strong focus on clean architecture, performance, and reliability. I work with Node.js, JavaScript, RESTful APIs, databases, and backend system design—turning ideas into production-ready solutions with robust, scalable backends.
            </p>

            {/* Info Cards */}
            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12"
              variants={containerVariants}
            >
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <motion.li
                  custom={index}
                  variants={cardVariants}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.2 },
                  }}
                  className="group relative border border-gray-200 dark:border-gray-700 rounded-2xl p-6 cursor-pointer
                  bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm
                  hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5
                  hover:border-blue-300 dark:hover:border-blue-600
                  transition-all duration-300"
                  key={index}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 
                    flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={isDarkMode ? iconDark : icon}
                        alt={title}
                        className="w-6 h-6"
                      />
                    </div>
                    
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                      {title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            {/* Tools Section */}
            <motion.div variants={itemVariants}>
              <h4 className="mb-6 text-xl font-semibold font-Outfit text-gray-900 dark:text-white">
                Tools I Use
              </h4>

              <motion.ul
                className="flex flex-wrap items-center gap-3"
                variants={containerVariants}
              >
                {toolsData.map((tool, index) => (
                  <motion.li
                    custom={index}
                    variants={cardVariants}
                    whileHover={{
                      y: -3,
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-14 h-14 
                    border border-gray-200 dark:border-gray-700 rounded-xl cursor-pointer
                    bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm
                    hover:border-blue-400 dark:hover:border-blue-500
                    hover:shadow-md hover:shadow-blue-500/10
                    transition-all duration-300"
                    key={index}
                  >
                    <Image src={tool} alt="Technology" className="w-7 h-7" />
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;