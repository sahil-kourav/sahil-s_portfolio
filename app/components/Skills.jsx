import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, categories } from "@/assets/assets";

export default function Skills() {
  const [active, setActive] = useState("all");

  const filtered = skills.filter(
    (s) => active === "all" || s.category === active
  );

  return (
    <section id="skills" className="relative py-10 md:py-12 px-6">

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs mb-4 tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
            What I Know
          </p>
          <h2 className="text-5xl font-Ovo text-gray-900 dark:text-white">
            Skills & Tools
          </h2>
          <p className="text-center max-w-2xl mx-auto mt-5 font-Ovo leading-6 text-gray-700 dark:text-gray-300">
            A set of technologies I use to build modern, responsive, and
            high-quality applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-16">
          <div className="flex gap-0 md:gap-2 lg:gap-2 p-2 rounded-full border border-neutral-300 dark:border-neutral-600 bg-white/70 dark:bg-neutral-900/10 backdrop-blur">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 text-sm rounded-full capitalize transition-all duration-300
                  ${
                    active === cat
                      ? "bg-black text-white dark:bg-white dark:text-black shadow"
                      : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((skill, i) => (
              <div
                key={skill.name}
                className="group relative rounded-2xl p-6 bg-white dark:bg-neutral-900/10 border border-neutral-300 dark:border-neutral-800 hover:-translate-y-2 transition-all duration-300"
              >
                {/* Subtle traditional frame */}
                <div className="absolute inset-0 rounded-2xl border border-dashed border-neutral-600 dark:border-neutral-400 opacity-0 group-hover:opacity-100 transition" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {skill.name}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress */}
                  <div className="relative h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300"
                    />
                  </div>

                  {/* Category label */}
                  <div className="mt-6 text-xs uppercase tracking-widest text-gray-400">
                    {skill.category}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
