import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";
import "./css/navbar.css";
import { useMediaQuery } from "react-responsive";

// Dark icons (per utilitzar en fons clars)
import about_me from "./assets/images/nav icons/about_meBlack.png";
import education from "./assets/images/nav icons/educationBlack.png";
import experience from "./assets/images/nav icons/experienceBlack.png";
import achievements from "./assets/images/nav icons/achievementsBlack.png";
import projects from "./assets/images/nav icons/projectsBlack.png";
import interests from "./assets/images/nav icons/interestBlack.png";

// White icons (per utilitzar en fons foscos)
import about_me_white from "./assets/images/nav icons/about_meWhite.png";
import education_white from "./assets/images/nav icons/educationWhite.png";
import experience_white from "./assets/images/nav icons/experienceWhite.png";
import achievements_white from "./assets/images/nav icons/achievementsWhite.png";
import projects_white from "./assets/images/nav icons/projectsWhite.png";
import interests_white from "./assets/images/nav icons/interestWhite.png";

// Selected icons (daurades/destacades)
import selected_about_me from "./assets/images/nav icons/about_me.png";
import selected_education from "./assets/images/nav icons/education.png";
import selected_experience from "./assets/images/nav icons/experience.png";
import selected_achievements from "./assets/images/nav icons/achievements.png";
import selected_projects from "./assets/images/nav icons/projects.png";
import selected_interests from "./assets/images/nav icons/interest.png";

import mireia from "./assets/images/nav icons/mireia.png";

export default function Navbar({ theme, toggleTheme }) {
    const isDesktop = useMediaQuery({ query: "(min-width: 961px)" });
    const textLinks = useMediaQuery({ query: "(min-width: 771px)" });

    const navItems = [
        { 
            path: "/", 
            name: "About Me", 
            iconDark: about_me, 
            iconLight: about_me_white, 
            selectedIcon: selected_about_me 
        },
        { 
            path: "/education", 
            name: "Education", 
            iconDark: education, 
            iconLight: education_white, 
            selectedIcon: selected_education 
        },
        { 
            path: "/experience", 
            name: "Experience", 
            iconDark: experience, 
            iconLight: experience_white, 
            selectedIcon: selected_experience 
        },
        { 
            path: "/achievements", 
            name: "Achievements", 
            iconDark: achievements, 
            iconLight: achievements_white, 
            selectedIcon: selected_achievements 
        },
        { 
            path: "/projects", 
            name: "Projects", 
            iconDark: projects, 
            iconLight: projects_white, 
            selectedIcon: selected_projects 
        },
        { 
            path: "/interests", 
            name: "Interests", 
            iconDark: interests, 
            iconLight: interests_white, 
            selectedIcon: selected_interests 
        }
    ];

    const getIconSrc = (item, isActive) => {
        if (isActive) {
            return item.selectedIcon;
        }
        return theme === "dark" ? item.iconLight : item.iconDark;
    };

    return (
        <div id="nav-container">
            <div id="nav">
                {textLinks && (
                    <div>
                        {isDesktop && (
                            <div id="mireia-container">
                                <img src={mireia} height={50} alt="Mireia Lopez Bruch" />
                                <div>
                                    <h3>Mireia Lopez Bruch</h3>
                                    <p>MSc CS at TU Delft</p>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                <div id="links">
                    {navItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
                        >
                            {({ isActive }) => (
                                <>
                                    {textLinks ? (
                                        <span>{item.name}</span>
                                    ) : (
                                        <span className="nav-icon">
                                            <img
                                                src={getIconSrc(item, isActive)}
                                                alt={item.name}
                                            />
                                        </span>
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>

                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
        </div>
    );
}