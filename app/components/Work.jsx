// import { assets, workData } from "@/assets/assets";
// import React from "react";
// import Image from "next/image";
// import { ExternalLink, Github } from "lucide-react";

// const Work = ({ isDarkMode }) => {
//   return (
//     <section
//       id="work"
//       className="w-full relative py-20 md:py-24 px-[7%] md:px-[10%] lg:px-[10%] bg-transparent"
//     >
//       {/* Section Heading */}
//       <div className="text-center space-y-3">
//         <h4 className="text-center mb-2 text-sm uppercase tracking-widest text-gray-700 dark:text-gray-400">
//           My Projects
//         </h4>
//         <h2 className="text-4xl sm:text-5xl font-Ovo font-semibold text-gray-900 dark:text-white">
//           My Latest Work
//         </h2>
//         <p className="max-w-2xl mx-auto mt-3 text-gray-600 dark:text-gray-300 font-Ovo leading-relaxed">
//           A selection of projects showcasing my full-stack and front-end
//           expertise — each built with passion and precision.
//         </p>
//       </div>

//       {/* Project Cards */}
//       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
//         {workData.map((project, index) => (
//           <div
//             key={index}
//             className="bg-white dark:bg-[#11111127] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-500 hover:shadow-black cursor-pointer hover:bg-lightHover
//             hover:-translate-y-1 dark:hover:bg-darkHover dark:hover:shadow-white
// "
//           >
//             {/* Project Image */}
//             <div className="w-full h-44 relative">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-full object-cover rounded-t-xl"
//               />
//             </div>

//             {/* Project Details */}
//             <div className="p-4 flex flex-col justify-between h-auto">
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
//                   {project.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
//                   {project.description}
//                 </p>

//                 {/* Tags */}
//                 <div className="flex flex-wrap gap-2 mt-3">
//                   {project.tags.map((tag, i) => (
//                     <span
//                       key={i}
//                       className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Buttons */}
//               <div className="flex items-center justify-between  mt-6 px-0">
//                 <a
//                   href={project.githubUrl}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:underline transition"
//                 >
//                   <Github size={18} /> Code
//                 </a>
//                 <a
//                   href={project.demoUrl}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:underline transition"
//                 >
//                   <ExternalLink size={18} /> Live Demo
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Show More Button */}
//       {/* <p className="w-max flex items-center justify-center gap-2 border border-gray-500 text-gray-800 dark:text-white rounded-full py-3 px-8 mx-auto mt-16 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
//         Show More
//         <Image
//           src={
//             isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
//           }
//           alt="Right arrow"
//           className="w-4"
//         />
//       </p> */}
//     </section>
//   );
// };

// export default Work;

















import { assets, workData } from "@/assets/assets";
import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, ArrowUpRight, Sparkles } from "lucide-react";

const Work = ({ isDarkMode }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="work"
      className="w-full relative py-20 md:py-24 px-[7%] md:px-[10%] lg:px-[10%] scroll-mt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h4 className="mb-2 text-sm uppercase tracking-widest text-gray-700 dark:text-gray-400 font-medium">
            My Projects
          </h4>
          <h2 className="text-5xl font-Ovo font-semibold text-gray-800 dark:text-white mb-6">
            My Latest Work
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 font-Ovo leading-relaxed">
            A selection of projects showcasing my full-stack and front-end
            expertise — each built with passion and precision.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {workData.map((project, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-white dark:bg-gray-900/50 rounded-xl overflow-hidden 
                  border border-gray-400 dark:border-gray-700
                  hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10
                  hover:bg-lightHover dark:hover:bg-darkHover
                  hover:-translate-y-2 duration-500 cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-900/90 
                          backdrop-blur-sm rounded-lg text-sm font-medium 
                          text-gray-800 dark:text-white
                          hover:bg-white dark:hover:bg-gray-900 transition-all
                          shadow-lg hover:shadow-xl hover:scale-105 duration-300"
                      >
                        <Github size={16} /> Code
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-4 py-2 
                          bg-gradient-to-r from-blue-600 to-purple-600
                          backdrop-blur-sm rounded-lg text-sm font-medium text-white
                          hover:from-blue-700 hover:to-purple-700 transition-all
                          shadow-lg hover:shadow-xl hover:scale-105 duration-300"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    </div>
                  </div>

                  {/* Featured badge */}
                  {index === 0 && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 
                        text-white text-xs font-semibold rounded-full shadow-lg">
                        <Sparkles size={12} />
                        Featured
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-5">
                  {/* Title with arrow */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white 
                      group-hover:text-transparent group-hover:bg-clip-text 
                      group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600
                      transition-all duration-500 flex-1">
                      {project.title}
                    </h3>
                    <ArrowUpRight 
                      className={`w-5 h-5 text-gray-400 dark:text-gray-500 
                        transition-all duration-300 flex-shrink-0
                        ${isHovered ? 'opacity-100 translate-x-1 -translate-y-1' : 'opacity-0'}`}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-white/80 leading-relaxed mb-4 font-Ovo line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-medium
                          bg-gray-100 dark:bg-gray-800/50 
                          border border-gray-300 dark:border-gray-700
                          rounded-lg text-gray-700 dark:text-gray-300
                          hover:border-gray-400 dark:hover:border-gray-600
                          hover:bg-gray-200 dark:hover:bg-gray-800
                          transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 
                  scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;