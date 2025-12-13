import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
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

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="mt-3">
      {/* Top Identity */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white select-none">
          Sahil<span className="text-[#ff2d55]">.</span>
        </h2>

        <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="Email"
            className="w-5"
          />
          <span className="text-sm sm:text-base">
            sahilkourav02@gmail.com
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto mt-10 border-t border-gray-300 dark:border-gray-700" />

      {/* Bottom Row */}
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-gray-500 dark:text-gray-400">
        <p>© 2025 Sahil Kourav. All rights reserved.</p>

     

      {/* Social Icons */}
      <div className="flex gap-7 text-2xl justify-center">
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
            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <Icon />
          </motion.a>
        ))}
      </div>
       </div>
    </footer>
  );
};

export default Footer;
