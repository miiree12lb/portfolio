import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
    ArrowLeft, ExternalLink, Code2, Calendar, User, Users, Target, Layers, Scale, TriangleAlert, Lightbulb, FileText,
} from "lucide-react";
import { getCaseStudy, isDev } from "./caseStudies.js";
import LyraSample from "./LyraSample.jsx";
import "./css/caseStudy.css";

const hasText = (v) => (Array.isArray(v) ? v.length > 0 : Boolean(v && String(v).trim()));

// Highlights unfinished "TODO" text in the local preview only.
function T({ children }) {
    const text = String(children ?? "");
    const todo = text.trim().startsWith("TODO");
    return <span className={todo && isDev ? "cs-todo" : undefined}>{text}</span>;
}

function Section({ icon: Icon, title, children }) {
    return (
        <section className="cs-section">
            <h2><Icon size={20} className="icon-gold" aria-hidden="true" /> {title}</h2>
            {children}
        </section>
    );
}

/* Back link: returns to the page the visitor came from (Home, Projects, Experience...).
   Opened directly, with no earlier page on this site, it goes to All projects.
   It stays a real link to /projects, so it also works when opened in a new tab. */
function BackLink() {
    const location = useLocation();
    const navigate = useNavigate();
    const cameFromSite = location.key !== "default";

    const handleClick = (e) => {
        if (!cameFromSite || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        navigate(-1);
    };

    return (
        <Link to="/projects" className="cs-back" onClick={handleClick}>
            <ArrowLeft size={16} /> {cameFromSite ? "Back" : "All projects"}
        </Link>
    );
}

export default function CaseStudy() {
    const { slug } = useParams();
    const cs = getCaseStudy(slug);

    const titleRef = useRef(null);
    const [showStickyTitle, setShowStickyTitle] = useState(false);
    const [stickyTop, setStickyTop] = useState(100);

    useEffect(() => { window.scrollTo(0, 0); }, [slug]);

    // Sit the sticky bar just below the fixed navbar, whatever its height on this screen.
    useEffect(() => {
        const measure = () => {
            const nav = document.getElementById("nav-container");
            if (nav) setStickyTop(Math.round(nav.getBoundingClientRect().bottom) + 8);
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    // Show the compact title once the big one has scrolled under the bar.
    useEffect(() => {
        const el = titleRef.current;
        if (!el || !("IntersectionObserver" in window)) return;
        const obs = new IntersectionObserver(
            ([entry]) => setShowStickyTitle(!entry.isIntersecting),
            { rootMargin: `-${stickyTop + 48}px 0px 0px 0px` }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [stickyTop, cs]);

    if (!cs) {
        return (
            <div className="case-study">
                <BackLink />
                <p>That case study doesn't exist.</p>
            </div>
        );
    }

    return (
        <article className="case-study">
            <div className="cs-sticky" style={{ top: stickyTop }}>
                <BackLink />
                <span className={`cs-sticky-title ${showStickyTitle ? "visible" : ""}`} aria-hidden={!showStickyTitle}>
                    {cs.title}
                </span>
            </div>

            <header className="cs-hero">
                {!cs.published && <span className="cs-draft">Draft · only visible locally</span>}
                <h1 ref={titleRef}>{cs.title}</h1>
                {hasText(cs.tagline) && <p className="cs-tagline"><T>{cs.tagline}</T></p>}

                <dl className="cs-meta">
                    {hasText(cs.role) && (<div><dt><User size={14} /> Role</dt><dd><T>{cs.role}</T></dd></div>)}
                    {hasText(cs.period) && (<div><dt><Calendar size={14} /> Timeline</dt><dd><T>{cs.period}</T></dd></div>)}
                    {hasText(cs.team) && (<div><dt><Users size={14} /> Team</dt><dd><T>{cs.team}</T></dd></div>)}
                </dl>

                {hasText(cs.stack) && (
                    <ul className="cs-stack" aria-label="Tech stack">
                        {cs.stack.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                )}

                <div className="cs-links">
                    {hasText(cs.links?.live) && (
                        <a href={cs.links.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                            Visit live site <ExternalLink size={16} />
                        </a>
                    )}
                    {hasText(cs.links?.code) && (
                        <a href={cs.links.code} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                            <Code2 size={16} /> Source code
                        </a>
                    )}
                    {hasText(cs.links?.paper) && (
                        <a href={cs.links.paper} target="_blank" rel="noopener noreferrer" className={hasText(cs.links?.live) ? "btn-secondary" : "btn-primary"}>
                            <FileText size={16} /> Read the paper
                        </a>
                    )}
                </div>
            </header>

            {hasText(cs.results) && (
                <ul className="cs-results" aria-label="Results">
                    {cs.results.map((r, i) => (
                        <li key={i}>
                            <span className="cs-result-value"><T>{r.value}</T></span>
                            <span className="cs-result-label"><T>{r.label}</T></span>
                        </li>
                    ))}
                </ul>
            )}

            {hasText(cs.problem) && (
                <Section icon={Target} title="The problem">
                    {cs.problem.map((p, i) => <p key={i}><T>{p}</T></p>)}
                </Section>
            )}

            {cs.sample && (
                <Section icon={Code2} title="What Lyra looks like">
                    <LyraSample file={cs.sample.file} code={cs.sample.code} output={cs.sample.output} caption={cs.sample.caption} />
                </Section>
            )}

            {hasText(cs.responsibilities) && (
                <Section icon={User} title="What I owned">
                    <ul className="cs-list">
                        {cs.responsibilities.map((r, i) => <li key={i}><T>{r}</T></li>)}
                    </ul>
                </Section>
            )}

            {hasText(cs.architecture) && (
                <Section icon={Layers} title="Architecture">
                    <p><T>{cs.architecture}</T></p>
                </Section>
            )}

            {hasText(cs.decisions) && (
                <Section icon={Scale} title="Key decisions & trade-offs">
                    <div className="cs-decisions">
                        {cs.decisions.map((d, i) => (
                            <div className="cs-decision" key={i}>
                                <h3><T>{d.title}</T></h3>
                                {hasText(d.why) && <p><strong>Why:</strong> <T>{d.why}</T></p>}
                                {hasText(d.tradeoff) && <p className="cs-tradeoff"><strong>Trade-off:</strong> <T>{d.tradeoff}</T></p>}
                            </div>
                        ))}
                    </div>
                </Section>
            )}

            {hasText(cs.challenges) && (
                <Section icon={TriangleAlert} title="Challenges">
                    {cs.challenges.map((c, i) => (
                        <div className="cs-challenge" key={i}>
                            <h3><T>{c.title}</T></h3>
                            <p><T>{c.text}</T></p>
                        </div>
                    ))}
                </Section>
            )}

            {hasText(cs.learnings) && (
                <Section icon={Lightbulb} title="What I learned">
                    <p><T>{cs.learnings}</T></p>
                </Section>
            )}

        </article>
    );
}

