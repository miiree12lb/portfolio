import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//@ts-ignore
import about_me from "./assets/images/nav icons/about_me.png";
//@ts-ignore
import education from "./assets/images/nav icons/education.png";
//@ts-ignore
import experience from "./assets/images/nav icons/experience.png";
//@ts-ignore
import achievements from "./assets/images/nav icons/achievements.png";
//@ts-ignore
import projects from "./assets/images/nav icons/projects.png";
//@ts-ignore
import contact from "./assets/images/nav icons/contact.png";
//@ts-ignore
import selected_about_me from "./assets/images/nav icons/about_meBlack.png";
//@ts-ignore
import selected_education from "./assets/images/nav icons/educationBlack.png";
//@ts-ignore
import selected_experience from "./assets/images/nav icons/experienceBlack.png";
//@ts-ignore
import selected_achievements from "./assets/images/nav icons/achievementsBlack.png";
//@ts-ignore
import selected_projects from "./assets/images/nav icons/projectsBlack.png";
//@ts-ignore
import selected_contact from "./assets/images/nav icons/contactBlack.png";

import { useMediaQuery } from "react-responsive";

export default function Navbar() {
    const [hovered, setHovered] = useState(null);
    const isDesktop = useMediaQuery({ query: "(min-width: 871px)" });

    const handleMouseEnter = (key) => {
        setHovered(key);
    };

    const handleMouseLeave = () => {
        setHovered(null);
    };

    const navItems = [
        { path: "/", name: "About Me", icon: about_me, selectedIcon: selected_about_me },
        { path: "/education", name: "Education", icon: education, selectedIcon: selected_education },
        { path: "/experience", name: "Experience", icon: experience, selectedIcon: selected_experience },
        { path: "/achievements", name: "Achievements", icon: achievements, selectedIcon: selected_achievements },
        { path: "/projects", name: "Projects", icon: projects, selectedIcon: selected_projects },
        { path: "/contact", name: "Contact Me", icon: contact, selectedIcon: selected_contact },
    ];

    return (
        <>
            {navItems.map((item, index) => (
                <NavLink
                    key={index}
                    to={item.path}
                    className="nav-item"
                    activeClassName="active"
                >
                    {({ isActive }) => (
                        <div
                            className="nav-item"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className="nav-icon">
                                <img
                                    src={
                                        isActive && isDesktop && hovered === index
                                            ? item.icon
                                            : isActive
                                            ? item.selectedIcon 
                                            : item.icon 
                                    }
                                    alt={item.name}
                                />
                            </span>
                            <span className="nav-text">{item.name}</span>
                        </div>
                    )}
                </NavLink>
            ))}
        </>
    );
}