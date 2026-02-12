// import Image from "next/image";
// import React, { useMemo, useState, useEffect } from "react";
// import { assets } from "@/assets/assets";
// import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
// import { motion } from "framer-motion";

// /* ------------------ Motion Variants ------------------ */
// const glowVariants = {
//   initial: {
//     scale: 1,
//     y: 0,
//     filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
//   },
//   hover: {
//     scale: 1.15,
//     y: -4,
//     filter:
//       "drop-shadow(0 0 10px rgba(59,130,246,0.5)) drop-shadow(0 0 20px rgba(99,102,241,0.35))",
//     transition: { type: "spring", stiffness: 260, damping: 18 },
//   },
//   tap: { scale: 0.95 },
// };

// const socials = [
//   { Icon: FaXTwitter, label: "X", href: "https://x.com/sahilkourav_" },
//   {
//     Icon: FaLinkedin,
//     label: "LinkedIn",
//     href: "https://www.linkedin.com/in/sahilkourav",
//   },
//   { Icon: FaGithub, label: "GitHub", href: "https://github.com/sahil-kourav" },
// ];
// const Header = () => {
//   const roles = useMemo(
//     () => [
//       "Full Stack Developer",
//       "MERN Stack Developer",
//       "Frontend Developer",
//       "Backend Developer",
//       "Node Developer",
//     ],
//     []
//   );

//   const [index, setIndex] = useState(0);
//   const [subIndex, setSubIndex] = useState(0);
//   const [deleting, setDeleting] = useState(false);

//   useEffect(() => {
//     const current = roles[index];

//     const timeout = setTimeout(
//       () => {
//         if (!deleting && subIndex < current.length) {
//           setSubIndex((v) => v + 1);
//         } else if (!deleting && subIndex === current.length) {
//           setTimeout(() => setDeleting(true), 1200);
//         } else if (deleting && subIndex > 0) {
//           setSubIndex((v) => v - 1);
//         } else if (deleting && subIndex === 0) {
//           setDeleting(false);
//           setIndex((p) => (p + 1) % roles.length);
//         }
//       },
//       deleting ? 45 : 75
//     );

//     return () => clearTimeout(timeout);
//   }, [subIndex, index, deleting, roles]);

//   return (
//     <section className="min-h-screen py-16 flex items-center">
//       <div className="w-full max-w-4xl mx-auto px-6 text-center flex flex-col gap-2">
//         {/* Intro */}
//         <div className="space-y-3">
// <p className="text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
//   Hello, I’m
// </p>

//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white">
//             Sahil Kourav
//           </h1>
//         </div>

//         {/* Role */}
//         <h2 className="text-2xl sm:text-3xl lg:text-3xl my-4 font-Ovo font-semibold tracking-tight">
//           <span className="bg-gradient-to-r from-gray-700 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
//             {roles[index].substring(0, subIndex)}
//           </span>
//           <span className="inline-block ml-1.5 w-px h-[1em] bg-gray-700 dark:bg-gray-300 animate-pulse align-middle" />
//         </h2>

//         {/* Description */}
//         <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-600 dark:text-gray-300 font-Ovo">
//           I’m a developer who enjoys building clean, interactive, and scalable
//           web applications. I work across frontend and backend, turning ideas
//           into real products with simple, maintainable code.
//         </p>

//         <div className="flex mx-auto flex-col sm:flex-row items-center gap-6 mt-6">
//           <a
//             href="#contact"
//             className="px-20 md:px-14 py-2 border border-white rounded-full bg-black
//         text-white flex items-center gap-4 dark:bg-transparent"
//           >
//             Contact Me{" "}
//             <Image src={assets.right_arrow_white} alt="" className="w-4" />
//           </a>

//           <a
//             href="/sample-resume.pdf"
//             download
//             className="px-20 md:px-14 py-2 border rounded-full border-gray-500 flex
//     items-center gap-2 bg-white dark:text-black"
//           >
//             My Resume{" "}
//             <Image src={assets.download_icon} alt="" className="w-4" />
//           </a>
//         </div>

//         {/* Social Icons */}
//         <div className="mt-10 flex justify-center gap-6 text-2xl">
//           {socials.map(({ Icon, label, href }) => (
//             <motion.a
//               key={label}
//               href={href}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label={label}
//               variants={glowVariants}
//               initial="initial"
//               whileHover="hover"
//               whileTap="tap"
//               className="text-gray-500 dark:text-gray-400 transition-colors
//                 hover:text-black dark:hover:text-white"
//             >
//               <Icon />
//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Header;

import Image from "next/image";
import React, { useMemo, useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

/* ------------------ Motion Variants ------------------ */
const glowVariants = {
  initial: {
    scale: 1,
    y: 0,
    filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
  },
  hover: {
    scale: 1.1,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(34,197,94,0.4)) drop-shadow(0 0 16px rgba(34,197,94,0.2))",
    transition: { type: "spring", stiffness: 260, damping: 18 },
  },
  tap: { scale: 0.95 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const socials = [
  { Icon: FaXTwitter, label: "X", href: "https://x.com/sahilkourav_" },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sahilkourav",
  },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/sahil-kourav" },
];

const Header = () => {
  const roles = useMemo(
    () => [
      "Backend Developer",
      "Node.js Developer",
      "MERN Stack Developer",
      "Full Stack Developer",
    ],
    [],
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex < current.length) {
          setSubIndex((v) => v + 1);
        } else if (!deleting && subIndex === current.length) {
          setTimeout(() => setDeleting(true), 1200);
        } else if (deleting && subIndex > 0) {
          setSubIndex((v) => v - 1);
        } else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((p) => (p + 1) % roles.length);
        }
      },
      deleting ? 45 : 75,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section className="min-h-screen py-16 md:py-20 flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-green-500/5 dark:bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="w-full max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            {/* Badge & Name */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div
                className="inline-flex items-center gap-2 px-4 rounded-full 
                bg-gray-100 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700"
              >
                <div className="relative flex items-center justify-center">
                  <span className="w-2 h-2 bg-gray-700 dark:bg-gray-300 rounded-full animate-pulse" />
                  <span className="absolute w-2 h-2 bg-gray-700 dark:bg-gray-300 rounded-full animate-ping opacity-75" />
                </div>
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-gray-700 dark:text-gray-200">
                  Available for Work
                </span>
              </div>

              {/* <p className="text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
                Hello, I’m
              </p> */}

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
                Sahil Kourav
              </h1>
            </motion.div>

            {/* Role with typing effect */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl sm:text-2xl lg:text-3xl font-Ovo font-semibold tracking-tight flex items-center justify-center lg:justify-start">
                <span className="bg-gradient-to-r from-gray-600 to-neutral-500 dark:from-gray-400 dark:to-neutral-300 bg-clip-text text-transparent">
                  {roles[index].substring(0, subIndex)}
                </span>
                <span className="inline-block ml-1.5 w-0.5 h-[1em] bg-gray-600 dark:bg-gray-400 animate-pulse" />
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-xl mx-auto lg:mx-0"
            >
              I build robust server-side applications and RESTful APIs using
              Node.js, Express, and MongoDB. Focused on scalable architecture,
              clean code, and efficient database design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="px-20 md:px-14 py-2 border border-white rounded-full bg-gray-800
        text-white flex items-center gap-4 dark:bg-transparent"
              >
                Contact Me{" "}
                <Image src={assets.right_arrow_white} alt="" className="w-4" />
              </a>

              <a
                href="/sample-resume.pdf"
                download
                className="px-20 md:px-14 py-2 border rounded-full border-gray-500 flex
    items-center gap-2 bg-white dark:text-black"
              >
                My Resume{" "}
                <Image src={assets.download_icon} alt="" className="w-4" />
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-5 text-2xl pt-2"
            >
              {socials.map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-500 dark:text-gray-400 transition-colors
                 hover:text-black dark:hover:text-white"
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Tech Stack Card */}
          <motion.div
            variants={itemVariants}
            className="lg:justify-self-end w-full max-w-md mx-auto"
          >
            <div className="relative">
              {/* Card */}
              <div
                className="rounded-2xl border border-gray-200 dark:border-gray-800 
                shadow-xl p-6 md:p-8 space-y-6"
              >
                {/* Header */}
                <div className="space-y-5">
                  <h3 className="text-md uppercase tracking-widest text-gray-700 dark:text-gray-300 font-semibold">
                    Tech Stack
                  </h3>
                </div>

                {/* Core Technologies */}
                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-500 mb-3 uppercase tracking-wider">
                      Core Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Node.js", "Express", "JavaScript"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="px-4 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-900 
                            text-gray-700 dark:text-gray-300 text-sm font-medium
                            border border-gray-300 dark:border-gray-700"
                          >
                            {tech}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Databases */}
                  <div>
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-500 mb-3 uppercase tracking-wider">
                      Databases
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["MongoDB", "PostgreSQL", "Redis"].map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-900 
                            text-gray-700 dark:text-gray-300 text-sm font-medium
                            border border-gray-300 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-500 mb-3 uppercase tracking-wider">
                      Tools & Others
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Docker", "Git", "REST APIs", "AWS"].map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-900 
                            text-gray-700 dark:text-gray-300 text-sm font-medium
                            border border-gray-300 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">
                      6+
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Months Exp
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">
                      3+
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Projects
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">
                      3+
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Header;
