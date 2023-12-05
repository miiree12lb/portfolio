import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <Link to="/">About Me</Link>
            <Link to="education">Education</Link>
            <Link to="experience">Experience</Link>
            <Link to="achievements">Achievements</Link>
            <Link to="contact">Contact Me</Link>
        </>
    );
}