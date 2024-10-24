import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes} from "react-router-dom";
import Home from "./Home.tsx";
import Experience from "./Experience.tsx";
import Education from "./Education.tsx";
import Contact from "./Contact.tsx";
import Achievements from "./Achievements.tsx";
import Navbar from "./Navbar.tsx";
import Projects from "./Projects.tsx";
import ScrollToTop from "./ScrollToTop.tsx";
// @ts-ignore
import './css/root.css';
import Footer from "./Footer.tsx";

function Root() {
    return (<HashRouter>
        <ScrollToTop />
        <div id="nav">
            <Navbar />
        </div>

        <div id="view">
            <div id="route">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/achievements" element={<Achievements />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </div>

            <div id="footer">
                <Footer />
            </div>
        </div>

    </HashRouter>);
}

const rootElement = document.getElementById("root");
if (rootElement) {
    createRoot(rootElement).render(<Root />);
}