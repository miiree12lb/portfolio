import React, { useState } from "react";
import ImageSlider from "react-simple-image-slider";
import { 
    GraduationCap, 
    Calendar, 
    Award, 
    BookOpen, 
    ExternalLink, 
    Code, 
    Layers, 
    ChevronRight 
} from "lucide-react";
import "./css/root.css";
import "./css/education.css";
import aula1 from "./assets/images/aula/aula_escuela_europea.png";
import aula2 from "./assets/images/aula/EM33qcnXsAA8vJi.png";
import aula3 from "./assets/images/aula/aula.png";
import twente1 from "./assets/images/twente/TechMed-Centre-UT.png";
import twente2 from "./assets/images/twente/ut_me.png";
import twente3 from "./assets/images/twente/ut-tower.png";
import twente4 from "./assets/images/twente/ut.png";

import Popup from "./PopupInterface.jsx";
import useScreenWidth from "./useScreenWidth.jsx";
import { useMediaQuery } from "react-responsive";

export default function Education() {
    const screenWidth = useScreenWidth();
    const isDesktop = useMediaQuery({ query: "(min-width: 801px)" });

    const aula_images = [aula1, aula2, aula3];
    const twente_images = [twente1, twente2, twente3, twente4];

    // Modals / Popups States
    const [isSpanishBaccalaureatePopupOpen, setIsSpanishBaccalaureatePopupOpen] = useState(false);
    const [isInternationalBaccalaureatePopupOpen, setIsInternationalBaccalaureatePopupOpen] = useState(false);
    const [isSubjectSummaryUTOpen, setIsSubjectSummaryUTOpen] = useState(false);
    const [isSISPopupOpen, setIsSISPopupOpen] = useState(false);
    const [isSPGPopupOpen, setIsSPGPopupOpen] = useState(false);
    const [isTEPopupOpen, setIsTEPopupOpen] = useState(false);
    const [isChallengeQ2PopupOpen, setIsChallengeQ2PopupOpen] = useState(false);
    const [isDSAIPopupOpen, setIsDSAIPopupOpen] = useState(false);
    const [isProgrammingParadigmsPopupOpen, setIsProgrammingParadigmsPopupOpen] = useState(false);

    // Handlers
    const openSpanishBaccalaureatePopup = () => setIsSpanishBaccalaureatePopupOpen(true);
    const closeSpanishBaccalaureatePopup = () => setIsSpanishBaccalaureatePopupOpen(false);

    const openInternationalBaccalaureatePopup = () => setIsInternationalBaccalaureatePopupOpen(true);
    const closeInternationalBaccalaureatePopup = () => setIsInternationalBaccalaureatePopupOpen(false);

    const openSubjectSummaryUTPopup = () => setIsSubjectSummaryUTOpen(true);
    const closeSubjectSummaryUTPopup = () => setIsSubjectSummaryUTOpen(false);

    const openSISPopup = () => setIsSISPopupOpen(true);
    const closeSISPopup = () => setIsSISPopupOpen(false);

    const openSPGPopup = () => setIsSPGPopupOpen(true);
    const closeSPGPopup = () => setIsSPGPopupOpen(false);

    const openTEPopup = () => setIsTEPopupOpen(true);
    const closeTEPopup = () => setIsTEPopupOpen(false);

    const openChallengeQ2Popup = () => setIsChallengeQ2PopupOpen(true);
    const closeChallengeQ2Popup = () => setIsChallengeQ2PopupOpen(false);

    const openDSAIPopup = () => setIsDSAIPopupOpen(true);
    const closeDSAIPopup = () => setIsDSAIPopupOpen(false);

    const openProgrammingParadigmsPopup = () => setIsProgrammingParadigmsPopupOpen(true);
    const closeProgrammingParadigmsPopup = () => setIsProgrammingParadigmsPopupOpen(false);

    // Continguts dels Popups
    const spanishBaccalaureatePopupContent = (
        <div>
            <p>
                The Spanish baccalaureate has several different branches. I studied the scientific/technological one. To do so, I studied the
                common subjects that all branches of the baccalaureate course: Catalan, Spanish, English, Philosophy, History of Catalonia and Spain, and Maths, and specific subjects: Physics and Chemistry.
            </p>
            <p>
                At the end of the baccalaureate, there are PAU exams. From the results on those exams, the mean of the baccalaureate and the
                grade in the <i>Treball de Recerca</i> (Extended Essay), you get a grade out of 14.
            </p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Catalan</td><td>7.5/10</td></tr>
                    <tr><td>Spanish</td><td>7/10</td></tr>
                    <tr><td>English</td><td>9.5/10</td></tr>
                    <tr><td>History of Catalonia and Spain</td><td>8/10</td></tr>
                    <tr><td>Mathematics</td><td>9.5/10</td></tr>
                    <tr><td>Physics</td><td>7/10</td></tr>
                    <tr><td>Extended Essay</td><td>8/10</td></tr>
                    <tr><td>Baccalaureate average grade</td><td>8.18/10</td></tr>
                    <tr><td><strong>Final grade</strong></td><td><strong>11.528/14</strong></td></tr>
                </tbody>
            </table>
        </div>
    );

    const internationalBaccalaureatePopupContent = (
        <div>
            <p>
                The IB program requires six subjects across different fields alongside the IB Core (CAS, ToK, and Extended Essay).
            </p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Level</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Catalan</td><td>A HL</td><td>5/7</td></tr>
                    <tr><td>English</td><td>B SL</td><td>6/7</td></tr>
                    <tr><td>Computer Science</td><td>HL</td><td>7/7</td></tr>
                    <tr><td>Mathematics</td><td>AA HL</td><td>5/7</td></tr>
                    <tr><td>Physics</td><td>HL</td><td>5/7</td></tr>
                    <tr><td>Philosophy</td><td>SL</td><td>5/7</td></tr>
                    <tr><td>Core</td><td></td><td>1/3</td></tr>
                    <tr><td><strong>Final grade</strong></td><td></td><td><strong>34/45</strong></td></tr>
                </tbody>
            </table>
        </div>
    );

    const UTsubjectSummary = (
        <div>
            <p>Summary of all subjects in the TCS Bachelor Degree at University of Twente:</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Year</th>
                        <th>Credits</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Pearls of Computer Science</td><td>1</td><td>11</td></tr>
                    <tr><td>Intro to Math + Calculus 1A</td><td>1</td><td>4</td></tr>
                    <tr><td>Software Systems</td><td>1</td><td>12</td></tr>
                    <tr><td>Calculus 1B for CS</td><td>1</td><td>3</td></tr>
                    <tr><td>Network Systems</td><td>1</td><td>12</td></tr>
                    <tr><td>Linear Algebra for CS</td><td>1</td><td>3</td></tr>
                    <tr><td>Data & Information</td><td>1</td><td>12</td></tr>
                    <tr><td>Probability Theory</td><td>1</td><td>3</td></tr>
                    <tr><td>Computer Architecture & Organisation</td><td>2</td><td>5</td></tr>
                    <tr><td>Operating Systems</td><td>2</td><td>6</td></tr>
                    <tr><td>IT & Law</td><td>2</td><td>1</td></tr>
                    <tr><td>Discrete Mathematics</td><td>2</td><td>3</td></tr>
                    <tr><td>Artificial Intelligence & Cyber Security</td><td>2</td><td>6</td></tr>
                    <tr><td>HCI Design and Evaluation</td><td>2</td><td>6</td></tr>
                    <tr><td>Statistical Techniques for CS/BIT</td><td>2</td><td>3</td></tr>
                    <tr><td>Algorithmic Discrete Mathematics</td><td>2</td><td>5</td></tr>
                    <tr><td>Languages & Machines</td><td>2</td><td>3.5</td></tr>
                    <tr><td>Algebra</td><td>2</td><td>3.5</td></tr>
                    <tr><td>Implementation Project on Graph Isomorphisms</td><td>2</td><td>3</td></tr>
                    <tr><td>Minor/Elective Modules</td><td>2/3</td><td>45</td></tr>
                    <tr><td>Design & Research Project Modules</td><td>3</td><td>30</td></tr>
                </tbody>
            </table>
        </div>
    );

    const sisPopupContent = (
        <ol>
            <li>Conceptualize and represent the real world in digital geospatial data.</li>
            <li>Identify and apply methods for the exploration, analysis, integration, synthesis, and presentation of spatial data in GIS.</li>
            <li>Apply basic statistical methods to geographic data to gain insights.</li>
        </ol>
    );

    const spgPopupContent = (
        <ol>
            <li>Describe spatial planning theory, sustainable development, and political context.</li>
            <li>Analyse spatial planning problems, identifying key stakeholders and trade-offs.</li>
            <li>Develop and present a concept plan for a spatial planning situation.</li>
            <li>Evaluate measures to guide and monitor spatial plans.</li>
        </ol>
    );

    const tePopupContent = (
        <ol>
            <li>Describe cycles of nutrients, water, and carbon (conservation of mass & energy).</li>
            <li>Schematize complex earth systems into mathematical equations.</li>
            <li>Apply stochastic techniques to estimate earth system parameters.</li>
            <li>Interpret uncertainty and variability in model outputs.</li>
        </ol>
    );

    const challengeQ2Content = (
        <ol>
            <li>Identify and bridge gaps in knowledge using challenge-based learning.</li>
            <li>Plan, execute, and reflect on the learning process.</li>
            <li>Integrate knowledge into an actionable climate adaptation challenge.</li>
        </ol>
    );

    const DSAIPopupContent = (
        <ul>
            <li>Understand CRISP-DM data analytics workflow.</li>
            <li>Scrape, cleanse, and ethically maintain data quality.</li>
            <li>Compare suitability of algorithms and ML models.</li>
            <li>Familiarity with Hadoop and MapReduce distributed systems.</li>
            <li>Apply NLP fundamental algorithms and Neural Networks for image analysis.</li>
        </ul>
    );

    const programmingParadigmsPopupContent = (
        <ul>
            <li>Master Functional (FP), Logic (LP), and Concurrent Programming (CP).</li>
            <li>Write a compiler for a non-trivial imperative language with concurrency.</li>
            <li>Understand parsing, code generation, lazy evaluation, and GPU parallelism.</li>
        </ul>
    );

    return (
        <div className="education-page">
            {/* Popups */}
            <Popup isOpen={isSpanishBaccalaureatePopupOpen} onRequestClose={closeSpanishBaccalaureatePopup} title="Spanish Baccalaureate" content={spanishBaccalaureatePopupContent} />
            <Popup isOpen={isInternationalBaccalaureatePopupOpen} onRequestClose={closeInternationalBaccalaureatePopup} title="International Baccalaureate" content={internationalBaccalaureatePopupContent} />
            <Popup isOpen={isSubjectSummaryUTOpen} onRequestClose={closeSubjectSummaryUTPopup} title="TCS - UT Subject Summary" content={UTsubjectSummary} />
            <Popup isOpen={isSISPopupOpen} onRequestClose={closeSISPopup} title="Spatial Information Science (SIS)" content={sisPopupContent} />
            <Popup isOpen={isSPGPopupOpen} onRequestClose={closeSPGPopup} title="Spatial Planning for Governance (SPG)" content={spgPopupContent} />
            <Popup isOpen={isTEPopupOpen} onRequestClose={closeTEPopup} title="Technical Engineering (TE)" content={tePopupContent} />
            <Popup isOpen={isChallengeQ2PopupOpen} onRequestClose={closeChallengeQ2Popup} title="Challenge Q2" content={challengeQ2Content} />
            <Popup isOpen={isDSAIPopupOpen} onRequestClose={closeDSAIPopup} title="DS & AI: Seeing through the hype" content={DSAIPopupContent} />
            <Popup isOpen={isProgrammingParadigmsPopupOpen} onRequestClose={closeProgrammingParadigmsPopup} title="Programming Paradigms" content={programmingParadigmsPopupContent} />

            <header className="education-header">
                <h1>Education</h1>
                <p className="sub-header">Academic background, majors, electives, and certifications.</p>
            </header>

            {/* --- SECCIÓ 1: UNIVERSITY OF TWENTE --- */}
            <section className="education-card">
                <div className="card-header">
                    <div className="institution-info">
                        <GraduationCap className="icon-gold" size={28} />
                        <div>
                            <h2>University of Twente</h2>
                            <p className="degree-title">Bachelor's Degree in Technical Computer Science (TCS)</p>
                        </div>
                    </div>
                    <div className="date-badge">
                        <Calendar size={14} /> Sept 2022 – Jan 2026
                    </div>
                </div>

                <div className="card-body">
                    <div className="slider-container">
                        <ImageSlider
                            width={`${isDesktop ? 38 : 80}vw`}
                            height={isDesktop ? (screenWidth * 38 * 362) / (500 * 100) : (screenWidth * 80 * 362) / (500 * 100)}
                            images={twente_images}
                            showBullets={true}
                            showNavs={true}
                        />
                    </div>

                    <div className="details-container">
                        <h3>Major Overview</h3>
                        <p>
                            Focused on software engineering, computer science fundamentals, algorithmics, 
                            distributed networks, web engineering, and cyber security.
                        </p>

                        <div className="summary-pills">
                            <div className="pill"><Award size={16} /> Grade: <strong>7.54/10</strong></div>
                            <div className="pill"><Layers size={16} /> Duration: <strong>3.5 Years</strong></div>
                        </div>

                        <button className="btn-inline" onClick={openSubjectSummaryUTPopup}>
                            View Complete Subject Summary <ChevronRight size={16} />
                        </button>
                    </div>
                </div>

                {/* Minors & Electives Sub-Grid */}
                <div className="sub-section">
                    <h3><BookOpen size={20} className="icon-gold" /> Minors & Electives</h3>
                    <div className="grid-cards">
                        
                        <div className="info-box">
                            <h4>Adapting to Climate Change with Spatial Engineering</h4>
                            <p className="box-type">Minor</p>
                            <p className="box-desc">Offered by Master Spatial Engineering. Covers spatial data and governance.</p>
                            <div className="badge-group">
                                <span onClick={openSISPopup}>SIS Module</span>
                                <span onClick={openSPGPopup}>SPG Module</span>
                                <span onClick={openTEPopup}>TE Module</span>
                                <span onClick={openChallengeQ2Popup}>Challenge Q2</span>
                            </div>
                        </div>

                        <div className="info-box">
                            <h4>Data Science & AI: Seeing through the hype</h4>
                            <p className="box-type">Elective</p>
                            <p className="box-desc">Fundamentals & critical analysis of machine learning, NLP, and distributed big data.</p>
                            <button className="btn-text" onClick={openDSAIPopup}>Read Details →</button>
                        </div>

                        <div className="info-box">
                            <h4>Programming Paradigms</h4>
                            <p className="box-type">Elective / Minor</p>
                            <p className="box-desc">Functional programming, concurrency, GPU parallelism, and compiler development.</p>
                            <button className="btn-text" onClick={openProgrammingParadigmsPopup}>Read Details →</button>
                        </div>

                    </div>
                </div>

                {/* Graduation Projects */}
                <div className="sub-section">
                    <h3><Code size={20} className="icon-gold" /> Graduation Projects</h3>
                    <div className="grid-cards">
                        
                        <div className="project-box">
                            <h4>Design Project (Team of 5)</h4>
                            <p>Developed a computer vision application for real-time LEGO brick recognition from video streams to generate <code>.bsx</code> files and assist in manufacturing accuracy.</p>
                        </div>

                        <div className="project-box">
                            <h4>Research Project (Thesis)</h4>
                            <p>Created a strongly-typed imperative programming language with ANTLR4, C++, and LLVM. Features structs, operator overloading, and list comprehensions.</p>
                            <a href="https://purl.utwente.nl/essays/109398" target="_blank" rel="noopener noreferrer" className="paper-link">
                                Read Research Paper <ExternalLink size={14} />
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- SECCIÓ 2: AULA ESCOLA EUROPEA --- */}
            <section className="education-card">
                <div className="card-header">
                    <div className="institution-info">
                        <GraduationCap className="icon-gold" size={28} />
                        <div>
                            <h2>Aula Escola Europea</h2>
                            <p className="degree-title">High School & International Baccalaureate</p>
                        </div>
                    </div>
                    <div className="date-badge">
                        <Calendar size={14} /> 2015 – 2022
                    </div>
                </div>

                <div className="card-body">
                    <div className="slider-container">
                        <ImageSlider
                            width={`${isDesktop ? 38 : 80}vw`}
                            height={isDesktop ? (screenWidth * 38 * 362) / (500 * 100) : (screenWidth * 80 * 362) / (500 * 100)}
                            images={aula_images}
                            showBullets={true}
                            showNavs={true}
                        />
                    </div>
                    
                    <div className="details-container full-width">
                        <ul>
                            <li><strong>Early CS Passion:</strong> Mandatory Computer Science up to 10th grade laid the foundation for programming (Scratch, C++, Java).</li>
                            <li><strong>Trilingual Environment:</strong> Achieved fluency in English and French (B2+ level achieved by age 16).</li>
                            <li><strong>Dual Baccalaureate:</strong> Completed both national and international rigorous programs simultaneously.</li>
                        </ul>
                    </div>
                </div>

                <div className="overview-row">
                    <div className="overview-card" onClick={openSpanishBaccalaureatePopup}>
                        <h4>Spanish National Baccalaureate</h4>
                        <p>Grade: <strong>8.18/10</strong> (PAU: 11.528/14)</p>
                        <span>View Grade Breakdown →</span>
                    </div>

                    <div className="overview-card" onClick={openInternationalBaccalaureatePopup}>
                        <h4>International Baccalaureate (IB)</h4>
                        <p>Grade: <strong>34/45</strong></p>
                        <span>View Grade Breakdown →</span>
                    </div>
                </div>
            </section>
        </div>
    );
}