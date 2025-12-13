import { motion } from "framer-motion";
import React, { useState } from "react";
import { skills, categories } from "@/assets/assets";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  return (
    <section
      id="skills"
      className="py-24 px-4 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* CONTENT CONTAINER */}
      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* HEADING */}
        <h4 className="text-center mb-2 text-sm uppercase tracking-widest text-gray-700 dark:text-gray-400">
          What I Know
        </h4>
        <h2 className="text-center text-5xl font-Ovo ">My Skills</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-300">
          A set of technologies I use to build modern, responsive, and
          high-quality applications.
        </p>

        {/* CATEGORY BUTTONS (FIXED CLASSNAME) */}
        <div className="flex flex-wrap justify-center gap-4 mb-24">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 border 
            ${
              activeCategory === category
                ? "bg-gray-300 text-black border-gray-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                : "bg-transparent text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500"
            }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills
            .filter(
              (skill) =>
                activeCategory === "all" || skill.category === activeCategory
            )
            .map(({ name, level, category }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white/5 p-6 border border-gray-400 rounded-lg transition duration-300 hover:shadow-black cursor-pointer hover:bg-lightHover
            hover:-translate-y-1 dark:hover:bg-darkHover dark:hover:shadow-white"
              >
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg text-gray-700 dark:text-white">
                    {name}
                  </h3>
                </div>

                <div className="w-full h-2 rounded-full overflow-hidden bg-gray-200 dark:bg-white/10">
                  <div
                    className="h-2 rounded-full origin-left bg-[#00b0f0] dark:bg-[#38c7ff] animate-[grow_1.5s_ease-out]"
                    style={{ width: level + "%" }}
                  />
                </div>

                <div className="text-right mt-1 text-gray-500 dark:text-white">
                  <span>{level}</span>%
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
