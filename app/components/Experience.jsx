import React, { useState } from "react";
import { Briefcase, Calendar, ArrowUpRight, MapPin } from "lucide-react";

export default function ProfessionalJourney({isDarkMode}) {
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
      description:
        "Experienced product designer specializing in UX, UI, Branding and Graphic Design. Expert in creating Design Systems that streamline their team development for iOS, Android Mobile platforms.",
      achievements: [
        "Collaborated with a Product team of 4 developers, improving the UI/UX of the existing platform to improve user satisfaction and usability.",
        "Implemented comprehensive design system reducing development time by 40%",
      ],
      tags: ["User Research", "Design Systems", "Product Design", "Prototyping"],
    },
    {
      id: 2,
      role: "UI UX Designer",
      company: "TechArk Solutions",
      location: "Hybrid",
      period: "Oct 2022 - Aug 2023",
      duration: "11 months",
      type: "Full-time",
      description:
        "Designed high-fidelity wireframes for 15+ websites/branded user workflows and interacting experiences",
      achievements: [
        "Balanced speed with upskilling to keep track of UI trend, usability standards, and workflows.",
        "Led redesign of core product features improving user engagement by 35%",
      ],
      tags: ["UI Design", "Wireframing", "User Testing", "Figma"],
    },
    {
      id: 3,
      role: "Junior Designer",
      company: "Devtrust Pvt. Ltd",
      location: "On-site",
      period: "May 2020 - Apr 2021",
      duration: "1 year",
      type: "Internship",
      description:
        "Successfully managed two internship roles, mastering graphic and user creating unique Design Systems and visually appealing mockups.",
      achievements: [
        "Created 50+ marketing materials and brand assets",
        "Contributed to 3 major product launches",
      ],
      tags: ["Visual Design", "Branding", "Illustration", "Adobe Suite"],
    },
  ];

  return (
    <section
      id="experience"
      className="w-full relative py-20 md:py-24 px-[7%] md:px-[10%] scroll-mt-20"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
          Where I’ve Worked
        </span>
        <h2 className="text-5xl font-Ovo text-gray-900 dark:text-white">
          My Experience
        </h2>
        <p className="max-w-2xl mx-auto mt-5 font-Ovo leading-6 text-gray-700 dark:text-gray-300">
          An overview of my roles and responsibilities, highlighting the
          real-world projects and technologies I’ve worked with throughout my
          development journey.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative w-full ${
                index % 2 === 0
                  ? "md:pr-[5%]"
                  : "md:pl-[5%]"
              }`}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card wrapper */}
              <div
                className={`w-full ${
                  index % 2 === 0 ? "md:mr-0" : "md:ml-10"
                }`}
              >
                <div
                  className={`group border border-gray-400 dark:border-gray-700 rounded-xl
                  px-5 py-6 md:px-8 md:py-8
                  bg-white dark:bg-transparent
                  hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5
                  hover:bg-lightHover dark:hover:bg-darkHover
                  hover:-translate-y-1 duration-500 cursor-pointer
                  ${
                    hoveredId === exp.id
                      ? "border-gray-500 dark:border-gray-600"
                      : ""
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-5">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-Ovo text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                          {exp.role}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-gray-600 dark:text-gray-400 text-md mb-2">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <p className="font-medium">{exp.company}</p>
                        </div>
                        <span className="text-gray-400">•</span>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <p>{exp.location}</p>
                        </div>
                      </div>

                      <p className="text-sm text-gray-500">{exp.duration}</p>
                    </div>

                    <div className="flex flex-row md:flex-col md:items-end gap-2">
                      <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-700">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <span className="text-sm px-3 py-1.5 mt-2 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800">
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
                    <div className="mb-6 space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex gap-3">
                          <span className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex-shrink-0" />
                          <p className="text-md leading-relaxed text-gray-600 dark:text-gray-400 font-Ovo">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 text-sm rounded-lg border bg-gray-100 dark:bg-gray-800/50 border-gray-300 dark:border-gray-700"
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
