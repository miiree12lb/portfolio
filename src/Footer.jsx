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

export default function Footer({theme, toggleTheme}){
    return (
        <>
            <div id="footer-logo">
                <Link to="https://miiree12lb.site/" target="_blank" rel="noopener noreferrer">
                    <img alt="logo" src={logo} id="footer-logo-image" />
                </Link>
            </div>
            <div id="footer-icons-text">
                <div id="footer-icons">
                    <Link to="https://linktr.ee/miiree12lb" target="_blank" rel="noopener noreferrer"><img alt="linktree" src={theme === "dark" ? linktree : linktreeBlack} width="50" height="50" /></Link>

                    <Link to="https://www.instagram.com/miiree12lb/" target="_blank" rel="noopener noreferrer"><img alt="instagram" src={theme === "dark" ? instagram : instagramBlack} width="50" height="50" /></Link>

                    <Link to="https://www.linkedin.com/in/mireia-lopez-bruch-0b7768241/" target="_blank" rel="noopener noreferrer"><img alt="linkedin" src={theme === "dark" ? linkedin : linkedinBlack} width="50" height="50" /></Link>  
                </div>
                <div id="footer-text">
                    © Mireia Lopez Bruch - 2024-{new Date().getFullYear()}
                </div>
                    
            </div>
        </>
        
    );
}