import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { visibleCaseStudies } from "./caseStudies.js";
import "./css/caseStudy.css";
import "./css/projects.css";

export default function Projects() {
    return (
        <div className="projects-page">
            <header className="projects-header">
                <h1>Personal Projects</h1>
                <p className="sub-header">Web applications, tools, and desktop software built from scratch.</p>
            </header>

            {/* Case studies */}
            {visibleCaseStudies.length > 0 && (
                <section className="featured-studies">
                    <h2><BookOpen size={22} className="icon-gold" aria-hidden="true" /> Case Studies</h2>
                    <div className="featured-grid">
                        {visibleCaseStudies.map((cs) => (
                            <Link to={`/projects/${cs.slug}`} className="featured-card" key={cs.slug}>
                                {!cs.published && <span className="cs-draft">Draft</span>}
                                <h3>{cs.title}</h3>
                                <p>{cs.tagline}</p>
                                <ul className="cs-stack" aria-label="Tech stack">
                                    {cs.stack.map((t) => <li key={t}>{t}</li>)}
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
