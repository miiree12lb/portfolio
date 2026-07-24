import React, { useEffect, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

// Importació de les 3 imatges
import bcnImg from "./assets/images/travel/barcelona_hero.png";
import enschedeImg from "./assets/images/travel/enschede_hero.png";
import rotterdamImg from "./assets/images/travel/rotterdam_hero.png";

import "./css/home.css";

export default function Home() {
    const roles = [
        "Technical Computer Science Graduate 🎓",
        "STEM Enthusiast 🔬",
        "Football Player ⚽",
        "Avid Traveler ✈️"
    ];

    const locations = [
        { name: "Barcelona, Spain", img: bcnImg },
        { name: "Enschede, Netherlands", img: enschedeImg },
        { name: "Rotterdam, Netherlands", img: rotterdamImg }
    ];

    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [imgFade, setImgFade] = useState(true);

    // Interval per als rols (cada 2 segons)
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                setFade(true);
            }, 300);
        }, 2000);

        return () => clearInterval(interval);
    }, [roles.length]);

    // Interval per a la rotació d'imatges de ciutats (cada 4 segons)
    useEffect(() => {
        const imgInterval = setInterval(() => {
            setImgFade(false);
            setTimeout(() => {
                setCurrentLocationIndex((prev) => (prev + 1) % locations.length);
                setImgFade(true);
            }, 400);
        }, 4000);

        return () => clearInterval(imgInterval);
    }, [locations.length]);

    const currentLocation = locations[currentLocationIndex];

    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="greeting-badge">
                        <MapPin size={16} /> Barcelona | Enschede | Rotterdam
                    </div>

                    <h1 className="hero-title">
                        Hi, I'm <span className="highlight-text">Mireia Lopez Bruch</span>
                    </h1>

                    <div className="dynamic-role-container">
                        <span className={`dynamic-role ${fade ? "fade-in" : "fade-out"}`}>
                            {roles[currentRoleIndex]}
                        </span>
                    </div>

                    <p className="hero-description">
                        Born and raised in Barcelona, I hold a BSc in Technical Computer Science (TCS) from the{" "}
                        <strong>University of Twente</strong> and I'm now pursuing an MSc in Computer Science at{" "}
                        <strong>TU Delft</strong>. Passionate about problem-solving, technology, and exploring new cultures.
                    </p>

                    <div className="interest-tags">
                        <span>🎓 BSc TCS</span>
                        <span>🎧 Music</span>
                        <span>⚽ Sports</span>
                        <span>🌍 Travel</span>
                        <span>📹 Video Editing</span>
                        <span>🎮 Video Games</span>
                    </div>

                    <div className="hero-actions">
                        <Link to="/projects" className="btn-primary">
                            View My Work <ArrowRight size={18} />
                        </Link>
                        <Link to="/experience" className="btn-secondary">
                            Experience
                        </Link>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="image-card">
                        <img
                            src={currentLocation.img}
                            alt={currentLocation.name}
                            className={`hero-img ${imgFade ? "fade-in" : "fade-out"}`}
                        />
                        <div className="image-overlay">
                            <span className="location-tag">📍 {currentLocation.name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}