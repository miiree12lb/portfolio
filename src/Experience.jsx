import React, { useState } from "react";
import { Briefcase, HeartHandshake, Calendar, ChevronRight, Info } from "lucide-react";
import Popup from "./PopupInterface.jsx";
import "./css/root.css";
import "./css/experience.css";

export default function Experience() {
    // Utilitzem un sol estat per gestionar quin popup està obert
    const [activePopup, setActivePopup] = useState(null);

    const closePopup = () => setActivePopup(null);

    // Dades centralitzades de les experiències
    const experiencesData = [
        {
            id: "macs",
            title: "M.A.C.S Lake Delton",
            role: "Waitress & Service Staff",
            category: "Work",
            type: "work",
            period: "15/06/2024 – 02/09/2024",
            startYear: 2024,
            endYear: 2024,
            summary: "Waitress and customer service staff at Lake Delton's signature Macaroni and Cheese shop.",
            popupContent: (
                <div>
                    <p className="popup-period"><Calendar size={14} /> 15/06/2024 – 02/09/2024</p>
                    <p>
                        M.A.C.S. (Macaroni and Cheese Shop) Lake Delton is a vibrant and welcoming restaurant with an exceptional dining experience. 
                        We pride ourselves on our high-quality food, friendly service, and inviting atmosphere.
                    </p>
                    <p><strong>Key responsibilities:</strong></p>
                    <ul>
                        <li>Greet customers with a friendly and welcoming attitude.</li>
                        <li>Take accurate customer orders and relay them to the kitchen efficiently.</li>
                        <li>Deliver food to tables promptly and manage to-go/online orders.</li>
                        <li>Maintain cleanliness and organization in the dining area.</li>
                        <li>Refill stock and ensure high standards of guest satisfaction.</li>
                    </ul>
                </div>
            )
        },
        {
            id: "gostudent",
            title: "GoStudent",
            role: "Private STEM & Language Tutor",
            category: "Work",
            type: "work",
            period: "11/11/2022 – Present",
            startYear: 2022,
            endYear: new Date().getFullYear(),
            summary: "Private tutor of Mathematics, Catalan, and English for High School students.",
            popupContent: (
                <div>
                    <p className="popup-period"><Calendar size={14} /> 11/11/2022 – Present</p>
                    <p>
                        I work as an online private tutor teaching Mathematics, Catalan, and English to High School students on the GoStudent platform.
                    </p>
                    <p>
                        My focus is on helping students build confidence, understand complex mathematical concepts, and prepare for exams through personalized study plans.
                    </p>
                </div>
            )
        },
        {
            id: "oifem",
            title: "OIFem (Olimpíada Informàtica Femenina)",
            role: "Volunteer & Problem Setter",
            category: "Volunteering",
            type: "volunteer",
            period: "2022 – Present",
            startYear: 2022,
            endYear: new Date().getFullYear(),
            summary: "Proposing competitive programming problems and grading participant submissions.",
            popupContent: (
                <div>
                    <p className="popup-period"><Calendar size={14} /> 2022 – Present</p>
                    <p>
                        Volunteer for the Women's Informatics Olympiad in Spain (OIFem). Having participated in its first edition, 
                        I strongly believe in its mission to attract young women to computer science.
                    </p>
                    <p><strong>My role:</strong></p>
                    <ul>
                        <li>Propose competitive programming problems and design test cases.</li>
                        <li>Verify and grade solutions submitted by participants prior to competitions.</li>
                        <li>Support training sessions and promote gender equality in tech.</li>
                    </ul>
                </div>
            )
        },
        {
            id: "computers",
            title: "Computer Refurbishing Project",
            role: "Volunteer Lead / Member",
            category: "Volunteering",
            type: "volunteer",
            period: "2021",
            startYear: 2021,
            endYear: 2021,
            summary: "Repaired unused school computers and installed Ubuntu for donation to a school in El Raval.",
            popupContent: (
                <div>
                    <p className="popup-period"><Calendar size={14} /> June 2021</p>
                    <p>
                        As part of the CAS subject in the IB program, a group of students collected unused school computers to refurbish them for families in need.
                    </p>
                    <p>
                        We replaced legacy Windows 7 operating systems with lightweight Ubuntu Linux, ensuring smooth performance on older hardware. 
                        The working devices were donated directly to a primary school in <i>El Raval</i> (Barcelona) to bridge the digital divide.
                    </p>
                </div>
            )
        },
        {
            id: "phones",
            title: "Mobile Phone Collection & Repair",
            role: "Volunteer",
            category: "Volunteering",
            type: "volunteer",
            period: "2020",
            startYear: 2020,
            endYear: 2020,
            summary: "Collected and repaired unused mobile phones for homeless individuals in Barcelona shelter.",
            popupContent: (
                <div>
                    <p className="popup-period"><Calendar size={14} /> 2020</p>
                    <p>
                        Participated in a 10th-grade initiative collecting unused mobile phones and chargers to distribute to homeless individuals living in Barcelona shelters.
                    </p>
                    <p>
                        Having a phone number is crucial when applying for jobs or housing assistance. We managed to collect and test around 20 devices to help individuals stay connected.
                    </p>
                </div>
            )
        }
    ];

    // Càlculs de la línia de temps
    const minYear = Math.min(...experiencesData.map((exp) => exp.startYear));
    const maxYear = Math.max(...experiencesData.map((exp) => exp.endYear));
    const totalYears = maxYear - minYear + 1;

    const selectedExp = experiencesData.find((exp) => exp.id === activePopup);

    return (
        <div className="experience-page">
            {/* Popup Únic */}
            <Popup
                title={selectedExp ? selectedExp.title : ""}
                isOpen={!!activePopup}
                onRequestClose={closePopup}
                content={selectedExp ? selectedExp.popupContent : null}
            />

            <header className="experience-header">
                <h1>Experience</h1>
                <p className="sub-header">Professional work, tutoring, and community volunteering initiatives.</p>
            </header>

            {/* --- SECCIÓ 1: LÍNIA DE TEMPS VISUAL --- */}
            <section className="timeline-section">
                <h3>Visual Timeline</h3>
                <div className="timeline-container">
                    <div className="timeline-grid">
                        {experiencesData.map((exp, index) => {
                            const startColumn = exp.startYear - minYear + 1;
                            const spanColumns = exp.endYear - exp.startYear + 1;

                            return (
                                <div
                                    key={exp.id}
                                    onClick={() => setActivePopup(exp.id)}
                                    className={`timeline-grid-item ${exp.type}`}
                                    style={{
                                        gridColumn: `${startColumn} / span ${spanColumns}`,
                                        gridRow: `${index + 1}`
                                    }}
                                >
                                    <span>{exp.title}</span>
                                </div>
                            );
                        })}

                        {/* Fila d'Anys */}
                        {Array.from({ length: totalYears }, (_, i) => (
                            <div
                                key={`year-${i}`}
                                className="timeline-year"
                                style={{
                                    gridColumn: `${i + 1}`,
                                    gridRow: experiencesData.length + 1
                                }}
                            >
                                {minYear + i}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECCIÓ 2: TARGETES DE DETALL ORGANITZADES --- */}
            <section className="experience-cards-section">
                
                {/* Feina */}
                <div className="category-group">
                    <h3 className="category-title">
                        <Briefcase className="icon-gold" size={22} /> Work Experience
                    </h3>
                    <div className="cards-grid">
                        {experiencesData
                            .filter((exp) => exp.category === "Work")
                            .map((exp) => (
                                <div key={exp.id} className="exp-card" onClick={() => setActivePopup(exp.id)}>
                                    <div className="exp-card-header">
                                        <h4>{exp.title}</h4>
                                        <span className="exp-badge work">{exp.period}</span>
                                    </div>
                                    <p className="exp-role">{exp.role}</p>
                                    <p className="exp-summary">{exp.summary}</p>
                                    <button className="btn-read-more">
                                        Read Details <ChevronRight size={16} />
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Voluntariat */}
                <div className="category-group">
                    <h3 className="category-title">
                        <HeartHandshake className="icon-gold" size={22} /> Volunteering
                    </h3>
                    <div className="cards-grid">
                        {experiencesData
                            .filter((exp) => exp.category === "Volunteering")
                            .map((exp) => (
                                <div key={exp.id} className="exp-card" onClick={() => setActivePopup(exp.id)}>
                                    <div className="exp-card-header">
                                        <h4>{exp.title}</h4>
                                        <span className="exp-badge volunteer">{exp.period}</span>
                                    </div>
                                    <p className="exp-role">{exp.role}</p>
                                    <p className="exp-summary">{exp.summary}</p>
                                    <button className="btn-read-more">
                                        Read Details <ChevronRight size={16} />
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>

            </section>
        </div>
    );
}