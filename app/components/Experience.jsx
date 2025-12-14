import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/assets/assets";

export default function Experience() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const timelineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-20 md:py-24 px-[7%] md:px-[10%] lg:px-[10%] overflow-visible"
    >
      <h4 className="text-center mb-2 text-sm uppercase tracking-widest text-gray-700 dark:text-gray-400">
        Where I’ve Worked
      </h4>
      <h2 className="text-4xl sm:text-5xl text-center font-Ovo font-semibold text-gray-900 dark:text-white">
        My Experience
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-16 font-Ovo leading-6 text-gray-600 dark:text-gray-300">
        An overview of my roles and responsibilities, highlighting the
        real-world projects and technologies I’ve worked with throughout my
        development journey.
      </p>

      {/* Timeline line only on desktop */}
      <div className="hidden md:block absolute left-[14.15%] top-64 h-[calc(80%-8rem)] w-[2px]">
        <div className="w-full h-full bg-gray-600 dark:bg-gray-300/5 rounded-full" />
        <motion.div
          style={{ scaleY: timelineScale }}
          className="origin-top absolute left-0 top-0 w-full h-full bg-white/60 dark:bg-white/40 rounded-full"
        />
      </div>

      {/* Experience Cards */}
      <div className="relative flex flex-col items-center gap-10 mt-12">
        {experiences.map(({ role, company, duration, description }, index) => (
          <div
            key={`${role}-${index}`}
            className="relative w-full max-w-5xl mx-auto"
          >
            {/* Marker for mobile (top + centered) */}
            <div className="md:hidden flex justify-center mb-4">
              <div className="relative">
                <div
                  className="
                    w-7 h-7 rotate-45 rounded-sm
                    bg-gradient-to-br from-gray-500 to-gray-300
                    dark:from-gray-700 dark:to-gray-500
                    border border-white/20 dark:border-white/10
                    shadow-[0_6px_18px_rgba(0,0,0,0.25)]
                    dark:shadow-[0_6px_18px_rgba(255,255,255,0.03)]
                  "
                  aria-hidden="true"
                />
                <div
                  className="
                    absolute left-1/2 -translate-x-1/2 -top-2
                    w-3 h-3 rounded-full
                    bg-gray-300 dark:bg-gray-300
                    shadow-sm dark:shadow-[0_0_6px_rgba(255,255,255,0.25)]
                  "
                />
              </div>
            </div>

            <div className="flex items-start">
              {/* Marker for desktop (left side) */}
              <div className="hidden md:flex z-20 w-14 flex-col items-center shrink-0 mr-10 mt-2">
                <div className="relative">
                  <div
                    className="
                      w-7 h-7 rotate-45 rounded-sm
                      bg-gradient-to-br from-gray-500 to-gray-300
                      dark:from-gray-700 dark:to-gray-500
                      border border-white/20 dark:border-white/10
                      shadow-[0_6px_18px_rgba(0,0,0,0.25)]
                      dark:shadow-[0_6px_18px_rgba(255,255,255,0.03)]
                    "
                    aria-hidden="true"
                  />
                  <div
                    className="
                      absolute left-1/2 -translate-x-1/2 -top-2
                      w-3 h-3 rounded-full
                      bg-gray-300 dark:bg-gray-300
                      shadow-sm dark:shadow-[0_0_6px_rgba(255,255,255,0.25)]
                    "
                  />
                </div>
              </div>

              <motion.article
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="
                  p-5 md:p-6 w-full rounded-2xl
                  border border-gray-400 z-30
                  hover:shadow-black cursor-pointer hover:bg-lightHover
            hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white
                  
                "
                role="article"
                aria-labelledby={`exp-title-${index}`}
              >
                <h3
                  id={`exp-title-${index}`}
                  className="text-lg sm:text-xl font-semibold mb-1 text-gray-900 dark:text-white"
                >
                  {role}
                </h3>

                <p className="text-gray-600 font-semibold text-sm mb-3 dark:text-white/60">
                  {company} • {duration}
                </p>

                <p className="text-gray-700 text-[15px] leading-relaxed dark:text-white/80">
                  {description}
                </p>
              </motion.article>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
