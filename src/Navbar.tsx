import React from "react";
import { NavLink } from "react-router-dom";
// @ts-ignore
import about_me from "./assets/images/nav icons/about_me.png";
// @ts-ignore
import education from "./assets/images/nav icons/education.png";
// @ts-ignore
import experience from "./assets/images/nav icons/experience.png";
// @ts-ignore
import achievements from "./assets/images/nav icons/achievements.png";
// @ts-ignore
import projects from "./assets/images/nav icons/projects.png";
// @ts-ignore
import contact from "./assets/images/nav icons/contact.png";

export default function Navbar() {
    return (
        <>
            <NavLink to="/" className="nav-item" activeClassName="active">
                <span className="nav-text">About Me</span>
                <span className="nav-icon"><img src={about_me} alt="About Me" /></span>
            </NavLink>

            <NavLink to="/education" className="nav-item" activeClassName="active">
                <span className="nav-text">Education</span>
                <span className="nav-icon"><img src={education} alt="Education" /></span>
            </NavLink>

            <NavLink to="/experience" className="nav-item" activeClassName="active">
                <span className="nav-text">Experience</span>
                <span className="nav-icon"><img src={experience} alt="Experience" /></span>
            </NavLink>

            <NavLink to="/achievements" className="nav-item" activeClassName="active">
                <span className="nav-text">Achievements</span>
                <span className="nav-icon"><img src={achievements} alt="Achievements" /></span>
            </NavLink>
            
            <NavLink to="/projects" className="nav-item" activeClassName="active">
                <span className="nav-text">Projects</span>
                <span className="nav-icon"><img src={projects} alt="Projects" /></span>
            </NavLink>
            
            <NavLink to="/contact" className="nav-item" activeClassName="active">
                <span className="nav-text">Contact Me</span>
                <span className="nav-icon"><img src={contact} alt="Contact Me" /></span>
            </NavLink>
        </>
    );
}