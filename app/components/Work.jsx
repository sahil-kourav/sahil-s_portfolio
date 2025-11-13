// import { assets, workData } from "@/assets/assets";
// import React from "react";
// import Image from "next/image";
// import { motion } from "motion/react";
// import { ExternalLink, Github } from "lucide-react";

// const Work = ({ isDarkMode }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       id="work"
//       className="w-full px-[12%] py-10 scroll-mt-20"
//     >
//       <motion.h4
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.5 }}
//         className="text-center mb-2 text-lg font-Ovo"
//       >
//         My portfolio
//       </motion.h4>
//       <motion.h2
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.5, duration: 0.5 }}
//         className="text-center text-5xl font-Ovo"
//       >
//         My latest work
//       </motion.h2>
//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.7, duration: 0.5 }}
//         className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
//       >
//         Welcome to my web development portfolio! Explore a collection of
//         projects showcasing my expertise in front-end development.
//       </motion.p>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.9, duration: 0.6 }}
//         className="grid grid-cols-auto my-10 gap-5 dark:text-black"
//       >
//         {workData.map((project, index) => (
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//             key={index}
//             className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg
//             relative cursor-pointer group"
//             style={{ backgroundImage: `url(${project.bgImage})` }}
//           >
//             <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
//               <div>
//                 <h2>{project.title}</h2>
//                 <p>{project.description}</p>
//               </div>
//                <div className="flex flex-wrap gap-2">
//                     {project.tags.map((tag, i) => (
//                       <span
//                         key={i}
//                         className="px-2.5 py-1 text-xs bg-[#1b1b1b] border border-gray-700 rounded-full text-gray-300"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                    <div className="flex justify-between items-center mt-2 mb-1 px-1">
//                  <a
//                     href={project.githubUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-blue-400 transition"
//                   >
//                     <Github size={18} /> Source Code
//                   </a>
//                    <a
//                     href={project.demoUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-blue-400 transition"
//                   >
//                     <ExternalLink size={18} /> Live Demo
//                   </a>
//                 </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       <motion.a
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 1.1, duration: 0.5 }}
//         href=""
//         className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10
//         mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:white dark:hover:bg-darkHover"
//       >
//         Show more{" "}
//         <Image
//           src={
//             isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
//           }
//           alt="Right arrow"
//           className="w-4"
//         />
//       </motion.a>
//     </motion.div>
//   );
// };

// export default Work;












import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.section
      id="work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[10%] py-20 scroll-mt-20 bg-transparent"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3"
      >
        <h4 className="text-lg font-Ovo text-gray-500 dark:text-gray-400">
          My Portfolio
        </h4>
        <h2 className="text-4xl sm:text-5xl font-Ovo font-semibold text-gray-900 dark:text-white">
          My Latest Work
        </h2>
        <p className="max-w-2xl mx-auto mt-3 text-gray-600 dark:text-gray-300 font-Ovo leading-relaxed">
          A selection of projects showcasing my full-stack and front-end
          expertise — each built with passion and precision.
        </p>
      </motion.div>

      {/* Project Cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-16"
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            // className="bg-white dark:bg-[#111] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-800"
            className="
  bg-white dark:bg-[#111]
  rounded-xl overflow-hidden
  border border-gray-200 dark:border-gray-800
  transition-all duration-500
  hover:-translate-y-2 hover:bg-gray-50 dark:hover:bg-[#1a1a1a]
"
          >
            {/* Project Image */}
            <div className="w-full h-48 relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-t-xl"
              />
            </div>

            {/* Project Details */}
            <div className="p-4 flex flex-col justify-between h-auto">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-between mt-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:underline transition"
                >
                  <Github size={18} /> Code
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:underline transition"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More Button */}
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        href="#"
        className="w-max flex items-center justify-center gap-2 border border-gray-500 text-gray-800 dark:text-white rounded-full py-3 px-8 mx-auto mt-16 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
      >
        Show More
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="Right arrow"
          className="w-4"
        />
      </motion.a>
    </motion.section>
  );
};

export default Work;
