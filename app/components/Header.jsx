// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import React, { useMemo, useState } from "react";
// import { motion } from "motion/react";
// const Header = () => {
//   const roles = useMemo(
//     () => [
//       "Full Stack Developer",
//       "Mern Stack Developer",
//       "Frontend Developer",
//       "Backend Developer",
//       "Node Developer",
//     ],
//     []
//   );

//   const [index, setIndex] = useState(0);
//   const [subIndex, setSubIndex] = useState(0);
//   const [deleting, setDeleting] = useState(false);

//   React.useEffect(() => {
//     const current = roles[index];
//     const timeout = setTimeout(
//       () => {
//         // Typing forward (deleting is false)
//         if (!deleting && subIndex < current.length) {
//           setSubIndex((v) => v + 1);
//         }
//         // Finished typing, start waiting to delete
//         else if (!deleting && subIndex === current.length) {
//           setTimeout(() => setDeleting(true), 1200);
//         }
//         // Deleting backward (deleting is true)
//         else if (deleting && subIndex > 0) {
//           setSubIndex((v) => v - 1);
//         }
//         // Finished deleting, move to next role
//         else if (deleting && subIndex === 0) {
//           setDeleting(false);
//           setIndex((p) => (p + 1) % roles.length);
//         }
//       },
//       // Faster deletion (40ms) than typing (60ms)
//       deleting ? 40 : 70
//     );

//     return () => clearTimeout(timeout);
//   }, [subIndex, index, deleting, roles]);

//   return (
//     <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6">
//       <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl transition-all text-gray-800 dark:text-gray-300 duration-300">
//         Hello, I'm
//         <br />
//         <span className="font-semibold text-4xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap text-gray-800 dark:text-gray-100 transition-colors duration-300">
//           Sahil Kourav
//         </span>
//       </h1>

//       <h1
//         className="text-4xl sm:text-4xl lg:text-[48px] font-Ovo font-bold tracking-tight py-3
//     bg-gradient-to-b from-gray-900 via-gray-400 to-gray-700
//     dark:from-neutral-200 dark:via-gray-400 dark:to-gray-600
//     bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]"
//       >
//         <span>{roles[index].substring(0, subIndex)}</span>
//         <span
//           className="inline-block w-[2px] ml-2 bg-white animate-pulse align-center"
//           style={{ height: "0.8em" }}
//         ></span>
//       </h1>

//       <p className="max-w-2xl text-lg mx-auto font-Ovo">
//         I'm a developer who enjoys creating useful and interactive websites. I
//         know frontend and backend development, and I like turning ideas into
//         real projects with clean and simple code.
//       </p>
//       <div className="flex flex-col sm:flex-row items-center gap-6 mt-7">
//         <a
//           href="#contact"
//           className="px-10 py-3 border border-white rounded-full bg-black
//         text-white flex items-center gap-4 dark:bg-transparent"
//         >
//           contact me{" "}
//           <Image src={assets.right_arrow_white} alt="" className="w-4" />
//         </a>

//         <a
//           href="/sample-resume.pdf"
//           download
//           className="px-10 py-3 border rounded-full border-gray-500 flex
//     items-center gap-2 bg-white dark:text-black"
//         >
//           my resume <Image src={assets.download_icon} alt="" className="w-4" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Header;

// import Image from "next/image";
// import React, { useMemo, useState, useEffect } from "react";
// import { assets } from "@/assets/assets";

// import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
// // import { MdOutlineDownload } from "react-icons/md";
// import { motion } from "framer-motion";

// const glowVariants = {
//   initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
//   hover: {
//     scale: 1.2,
//     y: -3,
//     filter:
//       "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
//     transition: { type: "spring", stiffness: 300, damping: 15 },
//   },
//   tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
// };

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

// const socials = [
//   { Icon: FaXTwitter, label: "X", href: "https://x.com/sahilkourav_" },
//   {
//     Icon: FaLinkedin,
//     label: "LinkedIn",
//     href: "https://www.linkedin.com/in/sahilkourav",
//   },
//   { Icon: FaGithub, label: "GitHub", href: "https://github.com/sahil-kourav" },
// ];

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
//       deleting ? 40 : 70
//     );

//     return () => clearTimeout(timeout);
//   }, [subIndex, index, deleting, roles]);

//   return (
//     <section className="min-h-screen flex items-center">
//       <div className="w-full max-w-4xl mx-auto px-6 text-center flex flex-col gap-8">
//         {/* Greeting */}
//         <div className="space-y-4">
//           <p className="text-sm tracking-widest uppercase text-gray-500 dark:text-gray-400">
//             Hello, I’m
//           </p>

//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 dark:text-white">
//             Sahil Kourav
//           </h1>
//         </div>

//         {/* Typing Role */}
//         <h2 className="text-3xl sm:text-4xl lg:text-4xl font-Ovo font-semibold tracking-tight">
//           <span className="bg-gradient-to-r from-gray-800 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
//             {roles[index].substring(0, subIndex)}
//           </span>
//           <span className="inline-block ml-2 w-[2px] h-[1em] bg-gray-700 dark:bg-gray-300 animate-pulse align-top" />
//         </h2>

//         {/* Description */}
//         <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-600 dark:text-gray-300 font-Ovo">
//           I’m a developer who enjoys building clean, interactive, and scalable
//           web applications. I work across frontend and backend, turning ideas
//           into real products with simple, maintainable code.
//         </p>

//         <div className="flex flex-col sm:flex-row items-center mx-auto gap-6 mt-7">
//           <a
//             href="#contact"
//             className="px-10 py-3 border border-white rounded-full bg-black
//         text-white flex items-center gap-4 dark:bg-transparent"
//           >
//             Contact Me{" "}
//             <Image src={assets.right_arrow_white} alt="" className="w-4" />
//           </a>

//           <a
//             href="/sample-resume.pdf"
//             download
//             className="px-10 py-3 border rounded-full border-gray-500 flex
//     items-center gap-2 bg-white dark:text-black"
//           >
//             My Resume{" "}
//             <Image src={assets.download_icon} alt="" className="w-4" />
//           </a>
//         </div>

//     <div className="mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start">
//               {socials.map(({ Icon, label, href }) => (
//                 <motion.a
//                   href={href}
//                   key={label}
//                   target="_blank"
//                   aria-label={label}
//                   rel="noopener noreferrer"
//                   variants={glowVariants}
//                   initial="initial"
//                   whileHover="hover"
//                   whileTap="tap"
//                   className="text-gray-300"
//                 >
//                   <Icon />
//                 </motion.a>
//               ))}
//             </div>

//       </div>
//     </section>
//   );
// };

// export default Header;

import Image from "next/image";
import React, { useMemo, useState, useEffect } from "react";
import { assets } from "@/assets/assets";

const Header = () => {
  const roles = useMemo(
    () => [
      "Full Stack Developer",
      "MERN Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Node Developer",
    ],
    []
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
      deleting ? 45 : 75
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section className="min-h-screen flex items-center">
      <div className="w-full max-w-4xl mx-auto px-6 text-center flex flex-col gap-4">
        {/* Intro */}
        <div className="space-y-3">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
            Hello, I’m
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 dark:text-white">
            Sahil Kourav
          </h1>
        </div>

        {/* Role */}
        <h2 className="text-3xl sm:text-4xl lg:text-4xl my-6 font-Ovo font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-gray-800 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            {roles[index].substring(0, subIndex)}
          </span>
          <span className="inline-block ml-1.5 w-px h-[1em] bg-gray-700 dark:bg-gray-300 animate-pulse align-middle" />
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-600 dark:text-gray-300 font-Ovo">
          I’m a developer who enjoys building clean, interactive, and scalable
          web applications. I work across frontend and backend, turning ideas
          into real products with simple, maintainable code.
        </p>

        <div className="flex mx-auto flex-col sm:flex-row items-center gap-6 mt-8">
          <a
            href="#contact"
            className="px-20 py-3 border border-white rounded-full bg-black
        text-white flex items-center gap-4 dark:bg-transparent"
          >
            Contact Me{" "}
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </a>

          <a
            href="/sample-resume.pdf"
            download
            className="px-20 py-3 border rounded-full border-gray-500 flex
    items-center gap-2 bg-white dark:text-black"
          >
            My Resume{" "}
            <Image src={assets.download_icon} alt="" className="w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
