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
// @ts-ignore
import selected_about_me from "./assets/images/nav icons/about_meBlack.png";
// @ts-ignore
import selected_education from "./assets/images/nav icons/educationBlack.png";
// @ts-ignore
import selected_experience from "./assets/images/nav icons/experienceBlack.png";
// @ts-ignore
import selected_achievements from "./assets/images/nav icons/achievementsBlack.png";
// @ts-ignore
import selected_projects from "./assets/images/nav icons/projectsBlack.png";
// @ts-ignore
import selected_contact from "./assets/images/nav icons/contactBlack.png";

export default function Navbar() {
    return (
        <>
            <NavLink to="/" className="nav-item" activeClassName="active">
                {({ isActive }) => (
                    <>
                        <span className="nav-text">About Me</span>
                        <span className="nav-icon">
                            <img src={isActive ? selected_about_me : about_me} alt="About Me" />
                        </span>
                    </>
                )}
            </NavLink>

            <NavLink to="/education" className="nav-item" activeClassName="active">
                {({ isActive }) => (
                    <>
                        <span className="nav-text">Education</span>
                        <span className="nav-icon">
                            <img src={isActive ? selected_education : education} alt="Education" />
                        </span>
                    </>
                )}
            </NavLink>

            <NavLink to="/experience" className="nav-item" activeClassName="active">
                {({ isActive }) => (
                    <>
                        <span className="nav-text">Experience</span>
                        <span className="nav-icon">
                            <img src={isActive ? selected_experience : experience} alt="Experience" />
                        </span>
                    </>
                )}
            </NavLink>

            <NavLink to="/achievements" className="nav-item" activeClassName="active">
                {({ isActive }) => (
                    <>
                        <span className="nav-text">Achievements</span>
                        <span className="nav-icon">
                            <img src={isActive ? selected_achievements : achievements} alt="Achievements" />
                        </span>
                    </>
                )}
            </NavLink>

            <NavLink to="/projects" className="nav-item" activeClassName="active">
                {({ isActive }) => (
                    <>
                        <span className="nav-text">Projects</span>
                        <span className="nav-icon">
                            <img src={isActive ? selected_projects : projects} alt="Projects" />
                        </span>
                    </>
                )}
            </NavLink>

            <NavLink to="/contact" className="nav-item" activeClassName="active">
                {({ isActive }) => (
                    <>
                        <span className="nav-text">Contact Me</span>
                        <span className="nav-icon">
                            <img src={isActive ? selected_contact : contact} alt="Contact Me" />
                        </span>
                    </>
                )}
            </NavLink>
        </>
    );
}
