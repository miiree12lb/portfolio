import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./Home.jsx";
import Experience from "./Experience.jsx";
import Education from "./Education.jsx";
import Achievements from "./Achievements.jsx";
import Navbar from "./Navbar.jsx";
import Projects from "./Projects.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import Footer from "./Footer.jsx";

import "./css/theme.css";
import "./css/root.css";

function Root() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }

    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <div id="view">
        <div id="route">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>

        <div id="footer">
          <Footer theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </HashRouter>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<Root />);
}