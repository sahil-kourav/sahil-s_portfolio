import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav 
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-2 flex
        items-center justify-between z-50 ${
          isScroll
            ? "bg-white/25 bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white select-none mr-36">
          Sahil<span className="text-[#ff2d55]">.</span>
        </h2>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
        ${
          isScroll
            ? ""
            : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
        }`}
        >
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
              onClick={() => setIsDarkMode((prev) => !prev)}
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-1.5 border border-gray-500 rounded-full ml-4 font-Ovo
            dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              className="w-3"
            />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        {/* --------- mobile menu --------- */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a className="font-Ovo" href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
           <li>
            <a className="font-Ovo" href="#skills">
              Skills
            </a>
            </li>
          <li>
            <a className="font-Ovo" href="#work" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;










// {
//   "name": "own-portfolio",
//   "version": "0.1.0",
//   "private": true,
//   "scripts": {
//     "dev": "next dev",
//     "build": "next build",
//     "start": "next start",
//     "lint": "eslint"
//   },
//   "dependencies": {
//     "@radix-ui/react-slot": "^1.2.4",
//     "@react-three/drei": "9.88.17",
//     "@react-three/fiber": "8.15.12",
//     "@react-three/postprocessing": "2.15.0",
//     "@tailwindcss/vite": "^4.1.17",
//     "class-variance-authority": "^0.7.1",
//     "clsx": "^2.1.1",
//     "framer-motion": "^12.34.0",
//     "gsap": "^3.14.2",
//     "lucide-react": "^0.563.0",
//     "motion": "^12.23.24",
//     "next": "15.1.3",
//     "postprocessing": "^6.38.0",
//     "react": "18.3.1",
//     "react-dom": "18.3.1",
//     "react-icons": "^5.5.0",
//     "tailwind-merge": "^3.4.0",
//     "three": "^0.182.0"
//   },
//   "devDependencies": {
//     "autoprefixer": "^10.4.24",
//     "eslint": "^8.57.0",
//     "eslint-config-next": "14.2.5",
//     "postcss": "^8.5.6",
//     "tailwindcss": "^3.4.18"
//   }
// }














