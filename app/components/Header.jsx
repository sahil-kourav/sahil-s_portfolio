import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
const Header = () => {
  const roles = useMemo(
    () => [
      "Full Stack Developer",
      "Mern Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Node Developer",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  React.useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(
      () => {
        // Typing forward (deleting is false)
        if (!deleting && subIndex < current.length) {
          setSubIndex((v) => v + 1);
        }
        // Finished typing, start waiting to delete
        else if (!deleting && subIndex === current.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
        // Deleting backward (deleting is true)
        else if (deleting && subIndex > 0) {
          setSubIndex((v) => v - 1);
        }
        // Finished deleting, move to next role
        else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((p) => (p + 1) % roles.length);
        }
      },
      // Faster deletion (40ms) than typing (60ms)
      deleting ? 40 : 70
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl transition-all text-gray-800 dark:text-gray-300 duration-300">
        Hello, I'm
        <br />
        <span className="font-semibold text-4xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap text-gray-800 dark:text-gray-100 transition-colors duration-300">
          Sahil Kourav
        </span>
      </h1>

      <h1
        className="text-4xl sm:text-4xl lg:text-[48px] font-Ovo font-bold tracking-tight py-3
    bg-gradient-to-b from-gray-900 via-gray-400 to-gray-700 
    dark:from-neutral-200 dark:via-gray-400 dark:to-gray-600 
    bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]"
      >
        <span>{roles[index].substring(0, subIndex)}</span>
        <span
          className="inline-block w-[2px] ml-2 bg-white animate-pulse align-center"
          style={{ height: "0.8em" }}
        ></span>
      </h1>

      <p className="max-w-2xl text-lg mx-auto font-Ovo">
        I'm a developer who enjoys creating useful and interactive websites. I
        know frontend and backend development, and I like turning ideas into
        real projects with clean and simple code.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-6 mt-7">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black
        text-white flex items-center gap-4 dark:bg-transparent"
        >
          contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex
    items-center gap-2 bg-white dark:text-black"
        >
          my resume <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
