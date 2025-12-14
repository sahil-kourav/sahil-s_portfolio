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
    scale: 1.15,
    y: -4,
    filter:
      "drop-shadow(0 0 10px rgba(59,130,246,0.5)) drop-shadow(0 0 20px rgba(99,102,241,0.35))",
    transition: { type: "spring", stiffness: 260, damping: 18 },
  },
  tap: { scale: 0.95 },
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
      <div className="w-full max-w-4xl mx-auto px-6 text-center flex flex-col gap-2">
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
            className="px-20 md:px-14 py-3 border border-white rounded-full bg-black
        text-white flex items-center gap-4 dark:bg-transparent"
          >
            Contact Me{" "}
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </a>

          <a
            href="/sample-resume.pdf"
            download
            className="px-20 md:px-14 py-3 border rounded-full border-gray-500 flex
    items-center gap-2 bg-white dark:text-black"
          >
            My Resume{" "}
            <Image src={assets.download_icon} alt="" className="w-4" />
          </a>
        </div>


        {/* Social Icons */}
        <div className="mt-12 flex justify-center gap-6 text-2xl">
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
        </div>
      </div>
    </section>
  );
};

export default Header;

