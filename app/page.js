"use client";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contect";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import IntroAnimation from "./components/animations/IntroAnimations";
import Experience from "./components/Experience";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);
  return (
    <>
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}

      {introDone && (
        <div>
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Header isDarkMode={isDarkMode} />
          <About isDarkMode={isDarkMode} />
          <Services isDarkMode={isDarkMode} />
          <Skills isDarkMode={isDarkMode} />
          <Experience isDarkMode={isDarkMode} />
          <Work isDarkMode={isDarkMode} />
          <Contact isDarkMode={isDarkMode} />
          <Footer isDarkMode={isDarkMode} />
        </div>
      )} 
    </>
  );
}
