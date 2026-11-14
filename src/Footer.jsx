import React from "react";
import { Link } from "react-router-dom";
import instagram from "./assets/images/socials/instagram.png";
import linkedin from "./assets/images/socials/linkedin.png";
import linktree from "./assets/images/socials/linktree.png";
import instagramBlack from "./assets/images/socials/instagramBlack.png";
import linkedinBlack from "./assets/images/socials/linkedinBlack.png";
import linktreeBlack from "./assets/images/socials/linktreeBlack.png";
import logo from "./assets/images/logo.png";
import "./css/footer.css";

export default function Footer({ theme }) {
    return (
        <>
            <Link to="/" aria-label="Home">
                <img alt="" src={logo} id="footer-logo-image" width="56" height="56" />
            </Link>
            <div className="footer-icons-text">
                <nav aria-label="Elsewhere">
                    <div id="footer-icons">
                        <a href="https://linktr.ee/miiree12lb" target="_blank" rel="noopener noreferrer"><img alt="Linktree" src={theme === "dark" ? linktree : linktreeBlack} width="22" height="22" /></a>
                        <a href="https://www.instagram.com/miiree12lb/" target="_blank" rel="noopener noreferrer"><img alt="Instagram" src={theme === "dark" ? instagram : instagramBlack} width="22" height="22" /></a>
                        <a href="https://www.linkedin.com/in/mireia-lopez-bruch-0b7768241/" target="_blank" rel="noopener noreferrer"><img alt="LinkedIn" src={theme === "dark" ? linkedin : linkedinBlack} width="22" height="22" /></a>
                    </div>
                </nav>
                <div id="footer-text">
                    <span className="nowrap">© Mireia Lopez Bruch</span>{" "}<span className="nowrap">2024–{new Date().getFullYear()} · <Link to="/privacy" className="footer-privacy-link">Privacy</Link></span>
                </div>
            </div>
        </>
    );
}
