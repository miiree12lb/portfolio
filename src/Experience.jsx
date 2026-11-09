import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import "./css/root.css";
import "./css/experience.css";

// Main experience, newest first. An entry can hold several roles at the same organisation.
const experience = [
    {
        org: "OIFem",
        orgDetail: "Spain's informatics olympiad for girls",
        roles: [
            {
                title: "Web Developer",
                period: "2025 – Present",
                points: [
                    "Designed and built the olympiad's website in React, replacing a site that was hard to maintain. It has been used from the V edition onwards.",
                    "The organising team still builds on my design and code, and reaches out to me for changes.",
                ],
                link: { to: "/projects/oifem", label: "Read the case study", internal: true },
            },
        ],
    },
    {
        org: "Educational videos",
        orgDetail: "Personal project on Instagram",
        roles: [
            {
                title: "Creator",
                period: "Ongoing",
                points: [
                    "Short videos that explain computer science: cryptography (from Caesar ciphers to HTTPS and the quantum threat), programming paradigms, and building software with AI.",
                ],
                link: { to: "https://miiree12lb-video-gallery.com/", label: "Watch the videos" },
            },
        ],
    },
    {
        org: "GoStudent",
        orgDetail: "Online tutoring",
        roles: [
            {
                title: "Tutor: Mathematics, Catalan & English",
                period: "2022 – 2023",
                points: [
                    "Taught high-school students one-to-one, with study plans built around each student's exams.",
                ],
            },
        ],
    },
];

// Shorter entries, one line each.
const earlier = [
    {
        title: "Server, M.A.C.S. Lake Delton",
        place: "Wisconsin, USA",
        period: "Summer 2024",
        text: "Served tables and handled takeaway and online orders at a busy restaurant.",
    },
    {
        title: "Computer refurbishing project",
        place: "Barcelona",
        period: "2021",
        text: "Refurbished unused school computers with Ubuntu and donated them to a primary school in El Raval.",
    },
    {
        title: "Phone collection for homeless shelters",
        place: "Barcelona",
        period: "2020",
        text: "Collected and tested around 20 phones so people in shelters could apply for jobs and housing.",
    },
];

function RoleLink({ link }) {
    if (!link) return null;
    if (link.internal) {
        return (
            <Link to={link.to} className="exp-link">
                {link.label} <ArrowRight size={16} />
            </Link>
        );
    }
    return (
        <a href={link.to} target="_blank" rel="noopener noreferrer" className="exp-link">
            {link.label} <ExternalLink size={15} />
        </a>
    );
}

export default function Experience() {
    return (
        <div className="experience-page">
            <header className="experience-header">
                <h1>Experience</h1>
                <p className="sub-header">Building software, teaching, and volunteering.</p>
            </header>

            <section className="exp-list" aria-label="Experience">
                {experience.map((entry) => (
                    <article className="exp-entry" key={entry.org}>
                        <header className="exp-org">
                            <h2>{entry.org}</h2>
                            {entry.orgDetail && <p>{entry.orgDetail}</p>}
                        </header>

                        <div className="exp-roles">
                            {entry.roles.map((role) => (
                                <div className="exp-role" key={role.title}>
                                    <div className="exp-role-head">
                                        <h3>{role.title}</h3>
                                        <span className="exp-period">{role.period}</span>
                                    </div>
                                    <ul>
                                        {role.points.map((point) => <li key={point}>{point}</li>)}
                                    </ul>
                                    <RoleLink link={role.link} />
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </section>

            <section className="exp-earlier">
                <h2>Earlier experience</h2>
                <ul>
                    {earlier.map((item) => (
                        <li key={item.title}>
                            <div className="exp-earlier-head">
                                <strong>{item.title}</strong>
                                <span className="exp-period">{item.period}</span>
                            </div>
                            <p><span className="exp-place">{item.place}.</span> {item.text}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
