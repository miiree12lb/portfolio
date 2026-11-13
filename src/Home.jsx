import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { visibleCaseStudies } from "./caseStudies.js";
import LyraHero from "./LyraHero.jsx";
import portrait from "./assets/images/mireia-portrait.jpg";

import "./css/home.css";
import "./css/caseStudy.css";

const GITHUB_URL = "https://github.com/miiree12lb";
const VIDEOS_URL = "https://miiree12lb-video-gallery.com/";

export default function Home() {
    const featured = visibleCaseStudies.slice(0, 3);

    return (
        <div className="home">
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-intro">
                        <p className="hero-hello">
                            {/* Shown only on screens where the navigation bar leaves out the photo */}
                            <img src={portrait} alt="" className="hero-avatar" width="64" height="64" />
                            Hi, I'm
                        </p>
                        <h1 className="hero-title">
                            <span>Mireia</span> <span>Lopez Bruch</span>
                        </h1>

                        <p className="hero-tagline">
                            Developer and video creator: building software and making computer science easier to understand.
                        </p>
                    </div>

                    <div className="hero-details">
                        <p className="hero-description">
                            Originally from Barcelona, I'm studying for an MSc in Computer Science at{" "}
                            <strong>TU Delft</strong>, after a BSc in Technical Computer Science at the{" "}
                            <strong>University of Twente</strong>. I build web apps that people rely on, like the website
                            of Spain's informatics olympiad for girls and a chore scheduler my house uses every week, and
                            I make short videos that explain topics like cryptography and programming paradigms.
                        </p>
                    </div>

                    <div className="hero-actions">
                        <Link to="/projects" className="btn-primary">
                            See my projects <ArrowRight size={18} />
                        </Link>
                        <a href={VIDEOS_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                            Watch my videos <ExternalLink size={16} />
                        </a>
                        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                            GitHub <ExternalLink size={16} />
                        </a>
                    </div>

                    <LyraHero />
                </div>
            </section>

            {featured.length > 0 && (
                <section className="home-featured">
                    <div className="home-featured-header">
                        <h2>Selected work</h2>
                        <Link to="/projects" className="home-featured-all">
                            All projects <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className="featured-grid">
                        {featured.map((cs) => (
                            <Link to={`/projects/${cs.slug}`} className="featured-card" key={cs.slug}>
                                {!cs.published && <span className="cs-draft">Draft</span>}
                                <h3>{cs.title}</h3>
                                <p>{cs.tagline}</p>
                                <ul className="cs-stack" aria-label="Tech stack">
                                    {cs.stack.slice(0, 4).map((t) => <li key={t}>{t}</li>)}
                                </ul>
                                <span className="featured-cta">Read case study <ArrowRight size={16} /></span>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
