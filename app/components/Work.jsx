import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const Work = ({ isDarkMode }) => {
  return (
    <section
      id="work"
      className="w-full px-[10%] py-20 scroll-mt-20 bg-transparent"
    >
      {/* Section Heading */}
      <div className="text-center space-y-3">
        <h4 className="text-center mb-2 text-sm uppercase tracking-widest text-gray-700 dark:text-gray-400">
          My Projects
        </h4>
        <h2 className="text-4xl sm:text-5xl font-Ovo font-semibold text-gray-900 dark:text-white">
          My Latest Work
        </h2>
        <p className="max-w-2xl mx-auto mt-3 text-gray-600 dark:text-gray-300 font-Ovo leading-relaxed">
          A selection of projects showcasing my full-stack and front-end
          expertise — each built with passion and precision.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-16">
        {workData.map((project, index) => (
          <div
            key={index}
            // className="bg-white dark:bg-[#111] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-800"
            className="bg-white dark:bg-[#11111127] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-500 hover:shadow-black cursor-pointer hover:bg-lightHover
            hover:-translate-y-1 dark:hover:bg-darkHover dark:hover:shadow-white
"
          >
            {/* Project Image */}
            <div className="w-full h-44 relative">
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
              <div className="flex items-center justify-between mt-8">
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
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <p className="w-max flex items-center justify-center gap-2 border border-gray-500 text-gray-800 dark:text-white rounded-full py-3 px-8 mx-auto mt-16 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
        Show More
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="Right arrow"
          className="w-4"
        />
      </p>
    </section>
  );
};

export default Work;
