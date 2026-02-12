// import { assets, infoList, toolsData } from "@/assets/assets";
// import Image from "next/image";
// import React from "react";
// import { motion } from "motion/react";

// const About = ({ isDarkMode }) => {
//   return (
//     <div id="about" className="w-full relative py-8 md:py-8 px-[7%] md:px-[10%] lg:px-[10%]">
//       <h4 className="text-center mb-2 text-sm uppercase tracking-widest text-gray-700 dark:text-gray-400">
//         Introduction
//       </h4>
//       <h2 className="text-center text-5xl font-Ovo">About me</h2>

//       <div className="flex w-full flex-col lg:flex-row items-center gap-20 mt-20">
//         <div className="w-80 sm:w-90 sm:w-72 rounded-3xl max-w-none">
//           <Image
//             src={assets.user_image}
//             alt="user"
//             className="w-full rounded-3xl"
//           />
//         </div>
//         <div className="flex-1">
//           <p className="mb-10 max-w-2xl text-base text-center text-gray-800 dark:text-gray-300 md:text-justify lg:text-justify">
//             I build modern and scalable applications with a focus on clean
//             structure, good user experience, and strong performance. I work with
//             JavaScript, React, Next.js, Tailwind CSS, Node and RESTful
//             API—bringing ideas to life from concept to production with robust
//             APIs and smooth interfaces.
//           </p>

//           <ul
//             className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
//           >
//             {infoList.map(({ icon, iconDark, title, description }, index) => (
//               <li
//                 className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:shadow-white dark:hover:bg-darkHover/50"
//                 key={index}
//               >
//                 <Image
//                   src={isDarkMode ? iconDark : icon}
//                   alt={title}
//                   className="w-7 mt-3"
//                 />
//                 <h3
//                   className="my-4 font-semibold text-gray-700 dark:text-white"
//                 >
//                   {title}
//                 </h3>
//                 <p className="text-gray-600 text-sm dark:text-white/80">
//                   {description}
//                 </p>
//               </li>
//             ))}
//           </ul>

//           <h4 className="my-4 mt-8 text-xl font-semibold font-Outfit text-gray-800 dark:text-white">
//             Tools I use
//           </h4>

//           <ul className="flex items-center gap-3 md:gap-3 lg:gap-3 sm:gap-5">
//             {toolsData.map((tool, index) => (
//               <li
//                 className="flex items-center justify-center w-14 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-300"
//                 key={index}
//               >
//                 <Image
//                   src={tool}
//                   alt="Tool"
//                   className="w-6 sm:w-7"
//                 />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;












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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
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

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
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
          <motion.div
            variants={imageVariants}
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
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="flex-1 max-w-3xl">
            
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
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;