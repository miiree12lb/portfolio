import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";
import "./css/navbar.css";
import { useMediaQuery } from "react-responsive";

import about_me from "./assets/images/nav icons/about_meBlack.png";
import education from "./assets/images/nav icons/educationBlack.png";
import experience from "./assets/images/nav icons/experienceBlack.png";
import achievements from "./assets/images/nav icons/achievementsBlack.png";
import projects from "./assets/images/nav icons/projectsBlack.png";
import selected_about_me from "./assets/images/nav icons/about_me.png";
import selected_education from "./assets/images/nav icons/education.png";
import selected_experience from "./assets/images/nav icons/experience.png";
import selected_achievements from "./assets/images/nav icons/achievements.png";
import selected_projects from "./assets/images/nav icons/projects.png";

export default function Navbar ({theme, toggleTheme}) {
    const isDesktop = useMediaQuery({ query: "(min-width: 801px)" });
    const textLinks = useMediaQuery({ query: "(min-width: 771px)" });

    const navItems = [
        { path: "/", name: "About Me", icon: about_me, selectedIcon: selected_about_me },
        { path: "/education", name: "Education", icon: education, selectedIcon: selected_education },
        { path: "/experience", name: "Experience", icon: experience, selectedIcon: selected_experience },
        { path: "/achievements", name: "Achievements", icon: achievements, selectedIcon: selected_achievements },
        { path: "/projects", name: "Projects", icon: projects, selectedIcon: selected_projects }
    ];

    return (<div id="nav-container">
        <div id="nav">
            {textLinks && <div>
                {isDesktop && <div id="mireia-container">
                    <p>MIREIA LOPEZ BRUCH</p>
                    <p>MSc CS at TU Delft</p>
                </div>}
            </div>  }  
            
            <div id="links">
                {navItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className="nav-item"
                        activeClassName="active"
                    >
                        {({ isActive }) => (
                            <div className="nav-item">
                                {textLinks && item.name}
                                {!textLinks && <span className="nav-icon">
                                    <img
                                        src={
                                            isActive && isDesktop
                                                ? item.icon
                                                : isActive
                                                ? item.selectedIcon 
                                                : item.icon 
                                        }
                                        alt={item.name}
                                    />
                                </span>}
                            </div>
                        )}
                    </NavLink>
                ))}
            </div>

            <ThemeToggle theme={theme} toggleTheme={toggleTheme}/>
        </div>
    </div>)
}