// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import React from "react";
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

// const Footer = ({ isDarkMode }) => {
//   return (
//     <footer className="mt-3">
//       {/* Top Identity */}
//       <div className="text-center space-y-4">
//         <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white select-none">
//           Sahil<span className="text-[#ff2d55]">.</span>
//         </h2>

//         <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
//           <Image
//             src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
//             alt="Email"
//             className="w-5"
//           />
//           <span className="text-sm sm:text-base">
//             sahilkourav02@gmail.com
//           </span>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="max-w-6xl mx-auto mt-10 border-t border-gray-300 dark:border-gray-700" />

//       {/* Bottom Row */}
//       <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-gray-500 dark:text-gray-400">
//         <p>© 2025 Sahil Kourav. All rights reserved.</p>

//       {/* Social Icons */}
//       <div className="flex gap-7 text-2xl justify-center">
//         {socials.map(({ Icon, label, href }) => (
//           <motion.a
//             key={label}
//             href={href}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label={label}
//             variants={glowVariants}
//             initial="initial"
//             whileHover="hover"
//             whileTap="tap"
//             className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
//           >
//             <Icon />
//           </motion.a>
//         ))}
//       </div>
//        </div>
//     </footer>
//   );
// };

// export default Footer;

// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import React from "react";
// import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
// import { motion } from "framer-motion";

// /* ------------------ Motion Variants ------------------ */
// const socialVariants = {
//   initial: { scale: 1, y: 0 },
//   hover: {
//     scale: 1.1,
//     y: -3,
//     transition: { type: "spring", stiffness: 400, damping: 15 },
//   },
//   tap: { scale: 0.95 },
// };

// const linkVariants = {
//   initial: { opacity: 0, y: 20 },
//   animate: (i, number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.1,
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   }),
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

// const quickLinks = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Services", href: "#services" },
//   { label: "Projects", href: "#projects" },
//   { label: "Contact", href: "#contact" },
// ];

// const Footer = ({ isDarkMode }) => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative mt-6 border-t border-gray-200 dark:border-gray-800">
//       {/* Decorative gradient */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

//       <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
//         {/* Top Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
//           {/* Brand & Description */}
//           <div className="space-y-4 md:col-span-1">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
//               Sahil<span className="text-blue-600 dark:text-blue-400">.</span>
//             </h2>
//             <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
//               Full-stack developer crafting modern web experiences with clean
//               code and innovative solutions.
//             </p>

//             {/* Social Links */}
//             <div className="flex gap-3 pt-2">
//               {socials.map(({ Icon, label, href }) => (
//                 <motion.a
//                   key={label}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={label}
//                   variants={socialVariants}
//                   initial="initial"
//                   whileHover="hover"
//                   whileTap="tap"
//                   className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800
//                   hover:bg-blue-100 dark:hover:bg-blue-900/30
//                   text-gray-600 dark:text-gray-400
//                   hover:text-blue-600 dark:hover:text-blue-400
//                   flex items-center justify-center transition-colors duration-200
//                   border border-gray-200 dark:border-gray-700
//                   hover:border-blue-300 dark:hover:border-blue-600"
//                 >
//                   <Icon className="w-4 h-4" />
//                 </motion.a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-200 dark:border-gray-800 my-8" />

//         {/* Bottom Section */}
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
//           <p>© {currentYear} Sahil Kourav. All rights reserved.</p>

//           <div className="flex items-center gap-6">
//             <a
//               href="#privacy"
//               className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//             >
//               Privacy Policy
//             </a>
//             <a
//               href="#terms"
//               className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//             >
//               Terms of Service
//             </a>
//           </div>
//         </div>

//         {/* Back to Top Button */}
//         <motion.button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           whileHover={{ y: -2 }}
//           whileTap={{ scale: 0.95 }}
//           className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500
//           text-white shadow-lg hover:shadow-xl hover:bg-blue-700 dark:hover:bg-blue-600
//           transition-all duration-200 flex items-center justify-center z-50"
//           aria-label="Back to top"
//         >
//           <svg
//             className="w-5 h-5"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M5 10l7-7m0 0l7 7m-7-7v18"
//             />
//           </svg>
//         </motion.button>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";

/* ------------------ Data ------------------ */
const socials = [
  {
    Icon: FaXTwitter,
    label: "X (Twitter)",
    href: "https://x.com/sahilkourav_",
  },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sahilkourav",
  },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/sahil-kourav" },
];

/* ------------------ Component ------------------ */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const prefersReducedMotion = useReducedMotion();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative mt-6 border-t border-gray-200 dark:border-gray-800">
      {/* Decorative Gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Top */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Sahil<span className="text-[#ff2d55]">.</span>
          </h2>

          <p className="max-w-sm text-md leading-relaxed text-gray-600 dark:text-gray-400">
            Backend developer building scalable systems with clean code and
            thoughtful architecture.
          </p>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                whileHover={
                  prefersReducedMotion ? undefined : { scale: 1.1, y: -3 }
                }
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-full
                  border border-gray-200 dark:border-gray-700
                  bg-gray-100 dark:bg-gray-800
                  text-gray-600 dark:text-gray-400
                  transition-colors
                  hover:border-blue-300 hover:bg-blue-100 hover:text-blue-600
                  dark:hover:border-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
              >
                <Icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200 dark:border-gray-800" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 text-sm text-gray-500 dark:text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Sahil Kourav. All rights reserved.</p>

          <div className="flex gap-6">
            <a
              href="#privacy"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      {showTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          whileHover={prefersReducedMotion ? undefined : { y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center
            rounded-full bg-blue-600 text-white shadow-lg
            transition-all hover:bg-blue-700 hover:shadow-xl
            dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          ↑
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
