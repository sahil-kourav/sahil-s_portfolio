import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
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
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/sahil-kourav",
  },
  {
    Icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com/sahilkourav_",
  },
];

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

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

      <div className="max-w-6xl mx-auto px-1 pt-10 pb-8">
        {/* Top */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Sahil<span className="text-[#ff2d55]">.</span>
          </h2>

          <p className="max-w-sm text-md leading-relaxed text-gray-600 dark:text-gray-400">
            Backend developer building scalable systems with clean code and
            thoughtful architecture.
          </p>

          {/* Socials */}
          <div className="flex gap-3">
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
