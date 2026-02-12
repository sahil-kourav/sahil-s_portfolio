// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { experiences } from "@/assets/assets";

// export default function Experience() {
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   const timelineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   const cardVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <section
//       ref={sectionRef}
//       id="experience"
//       className="relative py-20 md:py-24 px-[7%] md:px-[10%] lg:px-[10%] overflow-visible"
//     >
//       <h4 className="text-center mb-2 text-sm uppercase tracking-widest text-gray-700 dark:text-gray-400">
//         Where I’ve Worked
//       </h4>
//       <h2 className="text-4xl sm:text-5xl text-center font-Ovo font-semibold text-gray-900 dark:text-white">
//         My Experience
//       </h2>

//       <p className="text-center max-w-2xl mx-auto mt-5 mb-16 font-Ovo leading-6 text-gray-600 dark:text-gray-300">
//         An overview of my roles and responsibilities, highlighting the
//         real-world projects and technologies I’ve worked with throughout my
//         development journey.
//       </p>

//       {/* Timeline line only on desktop */}
//       <div className="hidden md:block absolute left-[14.15%] top-64 h-[calc(80%-8rem)] w-[2px]">
//         <div className="w-full h-full bg-gray-600 dark:bg-gray-300/5 rounded-full" />
//         <motion.div
//           style={{ scaleY: timelineScale }}
//           className="origin-top absolute left-0 top-0 w-full h-full bg-white/60 dark:bg-white/40 rounded-full"
//         />
//       </div>

//       {/* Experience Cards */}
//       <div className="relative flex flex-col items-center gap-10 mt-12">
//         {experiences.map(({ role, company, duration, description }, index) => (
//           <div
//             key={`${role}-${index}`}
//             className="relative w-full max-w-5xl mx-auto"
//           >
//             {/* Marker for mobile (top + centered) */}
//             <div className="md:hidden flex justify-center mb-4">
//               <div className="relative">
//                 <div
//                   className="
//                     w-7 h-7 rotate-45 rounded-sm
//                     bg-gradient-to-br from-gray-500 to-gray-300
//                     dark:from-gray-700 dark:to-gray-500
//                     border border-white/20 dark:border-white/10
//                     shadow-[0_6px_18px_rgba(0,0,0,0.25)]
//                     dark:shadow-[0_6px_18px_rgba(255,255,255,0.03)]
//                   "
//                   aria-hidden="true"
//                 />
//                 <div
//                   className="
//                     absolute left-1/2 -translate-x-1/2 -top-2
//                     w-3 h-3 rounded-full
//                     bg-gray-300 dark:bg-gray-300
//                     shadow-sm dark:shadow-[0_0_6px_rgba(255,255,255,0.25)]
//                   "
//                 />
//               </div>
//             </div>

//             <div className="flex items-start">
//               {/* Marker for desktop (left side) */}
//               <div className="hidden md:flex z-20 w-14 flex-col items-center shrink-0 mr-10 mt-2">
//                 <div className="relative">
//                   <div
//                     className="
//                       w-7 h-7 rotate-45 rounded-sm
//                       bg-gradient-to-br from-gray-500 to-gray-300
//                       dark:from-gray-700 dark:to-gray-500
//                       border border-white/20 dark:border-white/10
//                       shadow-[0_6px_18px_rgba(0,0,0,0.25)]
//                       dark:shadow-[0_6px_18px_rgba(255,255,255,0.03)]
//                     "
//                     aria-hidden="true"
//                   />
//                   <div
//                     className="
//                       absolute left-1/2 -translate-x-1/2 -top-2
//                       w-3 h-3 rounded-full
//                       bg-gray-300 dark:bg-gray-300
//                       shadow-sm dark:shadow-[0_0_6px_rgba(255,255,255,0.25)]
//                     "
//                   />
//                 </div>
//               </div>

//               <motion.article
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.25 }}
//                 transition={{ duration: 0.6, ease: "easeOut" }}
//                 className="w-full rounded-2xl p-5 md:p-6 border border-gray-400 z-30 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white
//                 "
//                 role="article"
//                 aria-labelledby={`exp-title-${index}`}
//               >
//                 <h3
//                   id={`exp-title-${index}`}
//                   className="text-lg sm:text-xl font-semibold mb-1 text-gray-900 dark:text-white"
//                 >
//                   {role}
//                 </h3>

//                 <p className="text-gray-600 font-semibold text-sm mb-3 dark:text-white/60">
//                   {company} • {duration}
//                 </p>

//                 <p className="text-gray-700 text-[15px] leading-relaxed dark:text-white/80">
//                   {description}
//                 </p>
//               </motion.article>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


















import React, { useState } from 'react';
import { Briefcase, Calendar, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';

export default function ProfessionalJourney() {
  const [hoveredId, setHoveredId] = useState(null);

  const experiences = [
    {
      id: 1,
      role: "Senior Product Designer",
      company: "workflow.com",
      location: "Remote",
      period: "Aug 2023 - Present",
      duration: "1 year 6 months",
      type: "Full-time",
      description: "Experienced product designer specializing in UX, UI, Branding and Graphic Design. Expert in creating Design Systems that streamline their team development for iOS, Android Mobile platforms.",
      achievements: [
        "Collaborated with a Product team of 4 developers, improving the UI/UX of the existing platform to improve user satisfaction and usability.",
        "Implemented comprehensive design system reducing development time by 40%"
      ],
      tags: ["User Research", "Design Systems", "Product Design", "Prototyping"],
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      id: 2,
      role: "UI UX Designer",
      company: "TechArk Solutions",
      location: "Hybrid",
      period: "October 2022 - August 2023",
      duration: "11 months",
      type: "Full-time",
      description: "Designed high-fidelity wireframes for 15+ websites/branded user workflows and interacting experiences",
      achievements: [
        "Balanced speed with upskilling to keep track of UI trend, usability standards, and workflows.",
        "Led redesign of core product features improving user engagement by 35%"
      ],
      tags: ["UI Design", "Wireframing", "User Testing", "Figma"],
      gradient: "from-purple-600 to-pink-500"
    },
    {
      id: 3,
      role: "Junior Designer",
      company: "Devtrust Pvt. Ltd",
      location: "On-site",
      period: "May 2020 - April 2021",
      duration: "1 year",
      type: "Internship",
      description: "Successfully managed two internship roles, mastering graphic and user creating unique Design Systems and visually appealing mockups.",
      achievements: [
        "Created 50+ marketing materials and brand assets",
        "Contributed to 3 major product launches"
      ],
      tags: ["Visual Design", "Branding", "Illustration", "Adobe Suite"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section 
      id="experience" 
      className="w-full relative py-20 md:py-24 px-[7%] md:px-[10%] lg:px-[10%] scroll-mt-20"
    >
      {/* Header */}
 <div className="text-center mb-16">
          <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
            Where I’ve Worked
          </span>
          <h2 className="text-5xl font-Ovo text-gray-900 dark:text-white">
            My Experience
          </h2>
          <p className="text-center max-w-2xl mx-auto mt-5 font-Ovo leading-6 text-gray-700 dark:text-gray-300">
           An overview of my roles and responsibilities, highlighting the
         real-world projects and technologies I’ve worked with throughout my
         development journey.
          </p>
        </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">

        {/* Experience items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
            >

              {/* Content card */}
              <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-20' : 'md:ml-20'}`}>
                <div 
                  className={`group border border-gray-400 dark:border-gray-700 rounded-xl px-8 py-8 
                  bg-white dark:bg-transparent
                  hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5
                  hover:bg-lightHover dark:hover:bg-darkHover
                  hover:-translate-y-1 duration-500 cursor-pointer
                  ${hoveredId === exp.id ? 'border-gray-500 dark:border-gray-600' : ''}`}
                >
                  {/* Header */}
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-5">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-Ovo text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                          {exp.role}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-3 text-gray-600 dark:text-gray-400 text-sm mb-2">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <p className="font-medium">{exp.company}</p>
                        </div>
                        <span className="text-gray-400 dark:text-gray-600">•</span>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <p>{exp.location}</p>
                        </div>
                      </div>
                      
                      <p className="text-xs text-gray-500 dark:text-gray-500">{exp.duration}</p>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-700">
                        <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{exp.period}</span>
                      </div>
                      <span className="text-xs px-3 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5 font-Ovo">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  {exp.achievements.length > 0 && (
                    <div className="mb-6 space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex gap-3 items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mt-2 flex-shrink-0"></div>
                          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-Ovo">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}