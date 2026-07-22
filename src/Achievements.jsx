import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
    Award, 
    Sparkles, 
    FileText, 
    ExternalLink, 
    ChevronRight, 
    Compass, 
    FlaskConical 
} from "lucide-react";
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

import Popup from "./PopupInterface.jsx";

// @ts-ignore
import "./css/achievements.css";
// @ts-ignore
import diagram from "./assets/images/theoretical-diagram.png";
// @ts-ignore
import diploma from "./assets/images/Diploma_Mireia.png";

export default function Achievements() {
    const navigate = useNavigate();

    // Estat únic per controlar quin popup està actiu
    const [activePopup, setActivePopup] = useState(null);
    const closePopup = () => setActivePopup(null);

    // Contingut del Popup: First Summer (MonNatura)
    const firstSummerJicContent = (
        <div>
            <p>
                I was one of 12 candidates selected to participate in the program: 'Looking from the Sky: How Does Climate Change Affect Our Forests?'.
                The program lasted two weeks. We attended theoretical lessons by researchers at 'Universitat de Lleida' and conducted field analysis in mountain forests to answer two main research questions:
            </p>
            <ol>
                <li>How can climate change affect mountain forests?</li>
                <li>After a disturbance, some trees survive: How does the disturbance affect the resilience of these trees to climate change?</li>
            </ol>
            <p>
                Following the program, I wrote a systematic review supervised by a Lleida researcher on the factors altering urban tree carbon storage and pollution effects on tree growth.
            </p>
            <a 
                className="paper-link" 
                href="https://drive.google.com/file/d/1_YvJ4za5SmY7GrqMH3CNjQNX1AtdQxy1/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                Read Scientific Article <ExternalLink size={14} />
            </a>
        </div>
    );

    // Contingut del Popup: Second Summer (ESSYI)
    const secondSummerJicContent = (
        <div>
            <p>
                For the second summer, 'La Pedrera' Foundation reserved places in national and international research centers based on scientific article evaluations.
            </p>
            <p>
                I was selected for the Environmental Studies Summer Youth Institute (ESSYI) in Geneva, NY, USA (July 10 – July 23, 2022).
            </p>
            <p>
                During the first week, we attended lectures and academic workshops. In the second week, our team designed a sustainable eco-lodge, modeling energy consumption, waste management, site location, local activities, and financial budgeting.
            </p>
        </div>
    );

    // Contingut del Popup: Third Summer (Oxford)
    const thirdSummerJicContent = (
        <div>
            <p>
                In my third summer, I attended the course <i>'Artificial Intelligence and Machine Learning: Theory and Practice'</i> at Lady Margaret Hall College, University of Oxford.
            </p>
            <p>
                This 3-week program combined morning lectures, afternoon seminars, and tutorial defense sessions. We completed three key assignments:
            </p>
            <ol>
                <li>
                    <strong>Linear Regression:</strong> Predicted bicycle traffic across Seattle's Fremont Bridge based on historical weather, seasonality, and environmental factors.
                </li>
                <li>
                    <strong>Neural Networks:</strong> Implemented deep learning models to predict housing prices using spatial and architectural feature sets.
                </li>
                <li>
                    <strong>Convolutional Neural Networks:</strong> Trained CNNs and fine-tuned pre-trained ResNet18 models on the CIFAR-10 dataset, comparing execution time, accuracy, and loss metrics.
                </li>
            </ol>
        </div>
    );

    // Contingut del Popup: Fisidabo
    const fisidaboPopupContent = (
        <div>
            <h3>Theoretical Diagram</h3>
            <div className="popup-image-container">
                <img src={diagram} alt="Diavolo experiment theoretical diagram" width="80%" />
            </div>

            <h3>Description of the Experiment</h3>
            <p>
                To measure how the degree of inclination of a Diavolo chair affects its rotational velocity, we attached a lightweight sensor box to one of the chairs. Inside, a force sensor recorded tension from a known mass, while a mobile video camera tracked an inclinometer. We measured the initial radius (<InlineMath math="r" />) to the central axis and recorded full trajectory dynamics during motion.
            </p>

            <h3>Physical Concept & Equations</h3>
            <p>
                By applying Thales's theorem to proportional mass-tension dynamics, the relationship between chair and box mass/tension simplifies to:
            </p>
            <BlockMath math="\frac{T_1 \cos\theta}{m_1 g} = \frac{T_2 \cos\theta}{m_2 g} \implies \frac{T_1}{m_1} = \frac{T_2}{m_2}" />

            <ul>
                <li>Distance equation: <InlineMath math="d = L \sin \theta + r" /></li>
                <li>Force components:
                    <ul>
                        <li><InlineMath math="T \cos{\theta} = m g" /></li>
                        <li><InlineMath math="T \sin{\theta} = \frac{mv^2}{d}" /></li>
                    </ul>
                </li>
                <li>Velocity derivation: <InlineMath math="v = \sqrt{\frac{(L \sin \theta + r)T \sin \theta}{m}}" /></li>
            </ul>
        </div>
    );

    // Contingut del Popup: Diploma OIFem
    const diplomaPopupContent = (
        <div className="popup-image-container">
            <img src={diploma} alt="OIFem 2021 Finalist Diploma" width="90%" />
        </div>
    );

    return (
        <div className="achievements-page">
            {/* Popup Únic */}
            <Popup
                isOpen={!!activePopup}
                onRequestClose={closePopup}
                title={
                    activePopup === "first" ? "MonNatura Pirineus" :
                    activePopup === "second" ? "ESSYI - Geneva, NY" :
                    activePopup === "third" ? "LMH Summer Programme - Oxford" :
                    activePopup === "fisidabo" ? "Fisidabo Hypatia Experiment" :
                    activePopup === "diploma" ? "OIFem 2021 Diploma" : ""
                }
                content={
                    activePopup === "first" ? firstSummerJicContent :
                    activePopup === "second" ? secondSummerJicContent :
                    activePopup === "third" ? thirdSummerJicContent :
                    activePopup === "fisidabo" ? fisidaboPopupContent :
                    activePopup === "diploma" ? diplomaPopupContent : null
                }
            />

            <header className="achievements-header">
                <h1>Achievements & Research</h1>
                <p className="sub-header">Scientific research programs, competitions, and physics experiments.</p>
            </header>

            {/* --- SECCIÓ 1: YOUTH AND SCIENCE --- */}
            <section className="achievement-card">
                <div className="card-header">
                    <div className="title-group">
                        <Sparkles className="icon-gold" size={26} />
                        <div>
                            <h2>
                                <a href="https://www.fundaciocatalunya-lapedrera.com/en/youth-and-science" target="_blank" rel="noopener noreferrer">
                                    Youth and Science (Joves i Ciència)
                                </a>
                            </h2>
                            <p className="subtitle">La Pedrera Foundation • 3-Year Research Program</p>
                        </div>
                    </div>
                    <span className="year-badge">2021 – 2023</span>
                </div>

                <p className="description-text">
                    A prestigious gifted program selecting promising young students to introduce them to professional scientific research over three consecutive summers across regional, national, and international institutions.
                </p>

                <div className="overview-cards-grid">
                    
                    {/* Estiu 1 */}
                    <div className="overview-item" onClick={() => setActivePopup("first")}>
                        <div className="item-header">
                            <h3>MonNatura Pirineus</h3>
                            <span className="badge">1st Summer (2021)</span>
                        </div>
                        <p className="item-location"><Compass size={14} /> Catalan Pyrenees, Spain</p>
                        <p className="item-desc">Selected as 1 of 12 candidates to study climate change impacts on mountain forest resilience.</p>
                        <button className="btn-read-more">
                            Read Details <ChevronRight size={16} />
                        </button>
                    </div>

                    {/* Estiu 2 */}
                    <div className="overview-item" onClick={() => setActivePopup("second")}>
                        <div className="item-header">
                            <h3>
                                <a href="http://essyi.hws.edu/" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                    ESSYI Institute
                                </a>
                            </h3>
                            <span className="badge">2nd Summer (2022)</span>
                        </div>
                        <p className="item-location"><Compass size={14} /> Geneva, NY, USA</p>
                        <p className="item-desc">Interdisciplinary environmental science program focusing on sustainability models and eco-lodge engineering.</p>
                        <button className="btn-read-more">
                            Read Details <ChevronRight size={16} />
                        </button>
                    </div>

                    {/* Estiu 3 */}
                    <div className="overview-item" onClick={() => setActivePopup("third")}>
                        <div className="item-header">
                            <h3>
                                <a href="https://www.lmh.ox.ac.uk/prospective-students/lmh-summer-programmes" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                    LMH Oxford
                                </a>
                            </h3>
                            <span className="badge">3rd Summer (2023)</span>
                        </div>
                        <p className="item-location"><Compass size={14} /> Oxford, United Kingdom</p>
                        <p className="item-desc">Intensive 3-week course on AI & Machine Learning theory, neural networks, and computer vision (ResNet18).</p>
                        <button className="btn-read-more">
                            Read Details <ChevronRight size={16} />
                        </button>
                    </div>

                </div>
            </section>

            {/* --- SECCIÓ 2: OIFEM --- */}
            <section className="achievement-card">
                <div className="card-header">
                    <div className="title-group">
                        <Award className="icon-gold" size={26} />
                        <div>
                            <h2>
                                <a href="https://oifem.es/" target="_blank" rel="noopener noreferrer">
                                    OIFem (Olimpíada Informàtica Femenina)
                                </a>
                            </h2>
                            <p className="subtitle">Competitive Programming Olympiad</p>
                        </div>
                    </div>
                    <span className="year-badge">2021</span>
                </div>

                <div className="card-content-split">
                    <p className="description-text">
                        Participated in the inaugural edition of the Women's Spanish Informatics Olympiad. Successfully qualified in the top 15 candidates nationally during the classification round to advance to the national finals.
                    </p>
                    <button className="btn-secondary-action" onClick={() => setActivePopup("diploma")}>
                        <FileText size={16} /> View Finalist Diploma
                    </button>
                </div>
            </section>

            {/* --- SECCIÓ 3: FISIDABO --- */}
            <section className="achievement-card">
                <div className="card-header">
                    <div className="title-group">
                        <FlaskConical className="icon-gold" size={26} />
                        <div>
                            <h2>
                                <a href="https://fisidabo.upc.edu/ca" target="_blank" rel="noopener noreferrer">
                                    Fisidabo Hypatia
                                </a>
                            </h2>
                            <p className="subtitle">Applied Physics Experiment at Tibidabo Amusement Park</p>
                        </div>
                    </div>
                    <span className="year-badge">2022</span>
                </div>

                <p className="description-text">
                    Selected by Universitat Politècnica de Catalunya (UPC) to conduct a real-world physics experiment on the <i>Diavolo</i> rotational attraction to analyze circular motion, conical pendulum tension, and inclination dynamics.
                </p>

                <button className="btn-secondary-action" onClick={() => setActivePopup("fisidabo")}>
                    <FlaskConical size={16} /> Read Experiment Details & Physical Model
                </button>
            </section>
        </div>
    );
}