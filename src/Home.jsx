import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { visibleCaseStudies } from "./caseStudies.js";
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
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Hi, I'm <span className="highlight-text">Mireia Lopez Bruch</span>
                        </h1>

                        <p className="hero-tagline">
                            Developer and video creator: building software and making computer science easier to understand.
                        </p>

                        <p className="hero-description">
                            Originally from Barcelona, I'm studying for an MSc in Computer Science at{" "}
                            <strong>TU Delft</strong>, after a BSc in Technical Computer Science at the{" "}
                            <strong>University of Twente</strong>. I build web apps that people rely on, like the website
                            of Spain's informatics olympiad for girls and a chore scheduler my house uses every week, and
                            I make short videos that explain topics like cryptography and programming paradigms.
                        </p>

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
                    </div>

                    <div className="hero-image-wrapper">
                        <img src={portrait} alt="Mireia Lopez Bruch" className="hero-portrait" width="420" height="420" />
                    </div>
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
