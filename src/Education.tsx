import React, { useState, useContext } from "react";
import ImageSlider from "react-simple-image-slider";
// @ts-ignore
import "./css/root.css";
// @ts-ignore
import "./css/achievements.css";
// @ts-ignore
import "./css/education.css";
// @ts-ignore
import aula1 from "./assets/images/aula/aula_escuela_europea.png";
// @ts-ignore
import aula2 from "./assets/images/aula/EM33qcnXsAA8vJi.png";
// @ts-ignore
import aula3 from "./assets/images/aula/aula.png";
import Popup from "./PopupInterface.tsx";
// @ts-ignore
import twente1 from "./assets/images/twente/TechMed-Centre-UT.png";
// @ts-ignore
import twente2 from "./assets/images/twente/ut_me.png";
// @ts-ignore
import twente3 from "./assets/images/twente/ut-tower.png";
// @ts-ignore
import twente4 from "./assets/images/twente/ut.png";
import useScreenWidth from "./useScreenWidth.tsx";
import { useMediaQuery } from "react-responsive";
import { RiH4 } from "react-icons/ri";
import CircularProgress from "./CircularProgress.tsx";

export default function Education(){
    const screenWidth = useScreenWidth();
    const isDesktop = useMediaQuery({ query: "(min-width: 801px)" });

    const aula_images = [aula1, aula2, aula3];
    const twente_images = [twente1, twente2, twente3, twente4];

    const [isSpanishBaccalaureatePopupOpen, setIsSpanishBaccalaureatePopupOpen] = useState(false);

    const openSpanishBaccalaureatePopup = () => {
        setIsSpanishBaccalaureatePopupOpen(true);
    }

    const closeSpanishBaccalaureatePopup = () => {
        setIsSpanishBaccalaureatePopupOpen(false);
    }

    const spanishBaccalaureatePopupContent = <div>
        <p>
            The Spanish baccalaureate has several different branches. I studied the scientific/technological one. To do so, I studied the
            common subjects that all branches of the baccalaureate course: Catalan, Spanish, English (however, I could have studied French
            or German instead), Philosophy and History of Catalonia and Spain, and Maths, and specific subjects being: Physics and Chemistry.
        </p>
        <p>
            At the end of the baccalaureate, there are exams ('PAU' standing for 'Proves d'accés a la Universitat) you need to get a certain
            grade to enter the university and program you want. From the results, you got on those exams, the mean of the baccalaureate and the
            grade in the <i>Treball de Recerca</i> (Extended Essay) you get a grade out of 14.
        </p>
        <p>
            The PAU in Catalonia took place on the 14, 15, and 16 of June 2022. These are the results I obtained:
            <table className="table">
                <thead>
                    <tr>
                        <th><h4>Subject</h4></th>
                        <th><h4>Grade</h4></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Catalan</td>
                        <td>7.5/10</td>
                    </tr>
                    <tr>
                        <td>Spanish</td>
                        <td>7/10</td>
                    </tr>
                    <tr>
                        <td>English</td>
                        <td>9.5/10</td>
                    </tr>
                    <tr>
                        <td>History of Catalonia and Spain</td>
                        <td>8/10</td>
                    </tr>
                    <tr>
                        <td>Mathematics</td>
                        <td>9.5/10</td>
                    </tr>
                    <tr>
                        <td>Physics</td>
                        <td>7/10</td>
                    </tr>
                    <tr>
                        <td>Extended Essay</td>
                        <td>8/10</td>
                    </tr>
                    <tr>
                        <td>Baccalaureate average grade</td>
                        <td>8.18/10</td>
                    </tr>
                    <tr>
                        <td>Final grade</td>
                        <td>11.528/14</td>
                    </tr>
                </tbody>
            </table>
        </p>
    </div>

    const [isInternationalBaccalaureatePopupOpen, setIsInternationalBaccalaureatePopupOpen] = useState(false);

    const openInternationalBaccalaureatePopup = () => {
        setIsInternationalBaccalaureatePopupOpen(true);
    }

    const closeInternationalBaccalaureatePopup = () => {
        setIsInternationalBaccalaureatePopupOpen(false);
    }

    const internationalBaccalaureatePopupContent = <div>
        <p>
            The IB program has five types of subjects: Studies in language and literature, Language acquisition, Individuals and societies,
            Sciences, Mathematics, and The Arts. To get the diploma every student has to course six subjects, theoretically one from each group
            and two languages. However, you can choose to repeat a subject from another group and don't do another. Each subject has two levels:
            Higher Level (HL) and Standard Level (SL), and languages can be Language A and Language B. Every subject has an internal assessment
            (around 25%) and an external assessment (around 75%). In addition to this, there is the IB core: CAS (Creativity, Action, and Service),
            ToK (Theory of Knowledge), and the Extended Essay. From the IB Core the student can obtain 3 points.
        </p>

        <p>
            Here's an overview of the subjects that I took, their respective level and the grade I obtained during the exam sessions on may 2022.
        </p>
        <table className="table">
            <thead>
                <tr>
                    <th><h4>Subject</h4></th>
                    <th><h4>Level</h4></th>
                    <th><h4>Grade</h4></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Catalan</td>
                    <td>A HL</td>
                    <td>5/7</td>
                </tr>
                <tr>
                    <td>English</td>
                    <td>B SL</td>
                    <td>6/7</td>
                </tr>
                <tr>
                    <td>Computer Science</td>
                    <td>HL</td>
                    <td>7/7</td>
                </tr>
                <tr>
                    <td>Mathematics</td>
                    <td>AA HL</td>
                    <td>5/7</td>
                </tr>
                <tr>
                    <td>Physics</td>
                    <td>HL</td>
                    <td>5/7</td>
                </tr>
                <tr>
                    <td>Philosophy</td>
                    <td>SL</td>
                    <td>5/7</td>
                </tr>
                <tr>
                    <td>Core</td>
                    <td></td>
                    <td>1/3</td>
                </tr>
                <tr>
                    <td>Final grade</td>
                    <td></td>
                    <td>34/45</td>
                </tr>
            </tbody>
        </table>
    </div>

    const [isSubjectSummaryUTOpen, setIsSubjectSummaryUTOpen] = useState(false);

    const openSubjectSummaryUTPopup = () => {
        setIsSubjectSummaryUTOpen(true);
    }

    const closeSubjectSummaryUTPopup = () => {
        setIsSubjectSummaryUTOpen(false);
    }

    const UTsubjectSummary = <div>
        <p>
            Below you can find a table summarising all the subjects in TCS Bachelor Degree. The table 
            shows the name, the year the class is taken and the
            credits you obtain after passing the class.
        </p>
        <table className="table">
            <thead>
                <tr>
                    <td>Subject</td>
                    <td>Year</td>
                    <td>Credits</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Pearls of Computer Science</td>
                    <td>1</td>
                    <td>11</td>
                </tr>
                <tr>
                    <td>Intro to Math + Calculus 1A</td>
                    <td>1</td>
                    <td>4</td>
                </tr>

                <tr>
                    <td>Software Systems</td>
                    <td>1</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>Calculus 1B for CS</td>
                    <td>1</td>
                    <td>3</td>
                </tr>

                <tr>
                    <td>Network Systems</td>
                    <td>1</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>Linear Algebra for CS</td>
                    <td>1</td>
                    <td>3</td>
                </tr>

                <tr>
                    <td>Data & Information</td>
                    <td>1</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>Probability Theory</td>
                    <td>1</td>
                    <td>3</td>
                </tr>

                <tr>
                    <td>Computer Architecture and Organisation</td>
                    <td>2</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>Operating Systems</td>
                    <td>2</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>IT & Law</td>
                    <td>2</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Discrete Mathematics</td>
                    <td>2</td>
                    <td>3</td>
                </tr>

                <tr>
                    <td>Artificial Intelligence & Cyber Security</td>
                    <td>2</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>HCI Design and Evaluation</td>
                    <td>2</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>Statistical Techniques for CS/BIT</td>
                    <td>2</td>
                    <td>3</td>
                </tr>

                <tr>
                    <td>Algorithmic Discrete Mathematics</td>
                    <td>2</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>Languages & Machines</td>
                    <td>2</td>
                    <td>3.5</td>
                </tr>
                <tr>
                    <td>Algebra</td>
                    <td>2</td>
                    <td>3.5</td>
                </tr>
                <tr>
                    <td>Implementation Project on Graph Isomorphisms</td>
                    <td>2</td>
                    <td>3</td>
                </tr>

                <tr>
                    <td>Minor/Elective Module</td>
                    <td>2</td>
                    <td>15</td>
                </tr>

                <tr>
                    <td>Minor/Elective Module</td>
                    <td>3</td>
                    <td>15</td>
                </tr>

                <tr>
                    <td>Minor/Elective Module</td>
                    <td>3</td>
                    <td>15</td>
                </tr>

                <tr>
                    <td>Design Project Module</td>
                    <td>3</td>
                    <td>15</td>
                </tr>

                <tr>
                    <td>Research Project Module</td>
                    <td>3</td>
                    <td>15</td>
                </tr>
            </tbody>
        </table>
    </div>

    const [isSISPopupOpen, setIsSISPopupOpen] = useState(false);
    
    const openSISPopup = () => {
        setIsSISPopupOpen(true);
    }

    const closeSISPopup = () => {
        setIsSISPopupOpen(false);
    }

    const sisPopupContent = <div>
        The aim of this course is that participants are capable of the following once they have taken it:
        <ol>
            <li>Conceptualize and represent the real world in digital geospatial data.</li>
            <li>Identify and apply methods for the exploration, analysis, integration, synthesis and presentation of digital spatial data and imagery in a geographic information system (GIS).</li>
            <li>Apply basic statistical methods to geographic data to gain insights.</li>
        </ol>
    </div>

    const [isSPGPopupOpen, setIsSPGPopupOpen] = useState(false);

    const openSPGPopup = () => {
        setIsSPGPopupOpen(true);
    }

    const closeSPGPopup = () => {
        setIsSPGPopupOpen(false);
    }

    const spgPopupContent = <div>
        After the course the student is able to use spatial concepts, instruments and measures in a given spatial planning situation;
        <ol>
            <li>
                <p>Theory and context</p>
                <ul>
                    <li>Describe the evolution of spatial planning theory and practice and how these relate to notions of sustainable development and resilience.</li>
                    <li>Explain the political, legal and institutional context of a spatial planning situation.</li>
                </ul>
            </li>

            <li>
                <p>Analysis of a planning situation</p>
                <ul>
                    <li>Analyse a given spatial planning problem/situation, identifying key stakeholders and their interests.</li>
                    <li>Describe the trade-offs between competing interests in a given spatial planning situation.</li>
                </ul>
            </li>

            <li>
                <p>Advise on a planning situation</p>
                <ul>
                    <li>Develop and present a concept plan for addressing a given spatial planning situation.</li>
                </ul>
            </li>

            <li>
                <p>Recommend evaluation and future needs</p>
                <ul>
                    <li>Elaborate on ways to measures to guide, monitor and evaluate the realization of spatial plans.</li>
                    <li>Discuss how spatial analysis can assist in anticipating future needs and emerging issues in society.</li>
                </ul>
            </li>
        </ol>
    </div>

    const [isTEPopupOpen, setIsTEPopupOpen] = useState(false);

    const openTEPopup = () => {
        setIsTEPopupOpen(true);
    }

    const closeTEPopup = () => {
        setIsTEPopupOpen(false);
    }

    const tePopupContent = <div>
        Technical Environmental Engineering (TEE), modelling the processes in system Earth. After the course, students will be able to:
        <ol>
            <li>Describe cycles of nutrients, water and carbon and underlying principles such as conservation of mass and energy (Process thinking and conceptualization).</li>
            <li>Apply schematizing complex systems using existing techniques to capture them in equations (System thinking and model conceptualization).</li>
            <li>Apply probability density functions and concepts of correlations and regressions (Stochasticity) to estimations of relevant parameters of earth system processes.</li>
            <li>Apply parameter uncertainty like variability, RMSE and R2, to make interpretations of outputs of models that simulate earth system processes (Parameter uncertainty).</li>
        </ol>
    </div>

    const [isChallengeQ2PopupOpen, setIsChallengeQ2PopupOpen] = useState(false);

    const openChallengeQ2Popup = () => {
        setIsChallengeQ2PopupOpen(true);
    }

    const closeChallengeQ2Popup = () => {
        setIsChallengeQ2PopupOpen(false);
    }

    const challengeQ2Content = <div>
        Upon completion of the climate adaption challenge, you are able to:
        <ol>
            <li>Identify and describe gaps in your knowledge</li>
            <li>Plan, execute and reflect on the learning process needed to bridge the gap</li>
            <li>Integrate knowledge in formulating an actionable challenge using the challenge-based learning approach</li>
        </ol>
    </div>

    const [isDSAIPopupOpen, setIsDSAIPopupOpen] = useState(false);

    const openDSAIPopup = () => {
        setIsDSAIPopupOpen(true);
    }

    const closeDSAIPopup = () => {
        setIsDSAIPopupOpen(false);
    }

    const DSAIPopupContent = <div>
        <ul>
            <li>The module's learning objectives are formulated using Bloom's taxonomy. The learning objectives are mapped to Programme Intended Learning Outcomes</li>
            <li>Understand the data analytics workflow (based on CRISP-DM (Wirth, & Hipp, 2000))</li>
            <li>Assess data quality and ability to scrape, cleanse, and ethically maintain data</li>
            <li>Assess and compare the suitability of different data modeling methods/algorithms for optimal performance and evaluate results objectively.</li>
            <li>Familiarity with infrastructures and distributed systems used to deal with them, such as Hadoop and MapReduce</li>
            <li>Analyze and apply the most advanced and relevant statistic and mathematical techniques for business purposes, specifically</li>
            <li>Fundamental algorithms and mathematical models for processing natural language</li>
            <li>The fundamentals of the neural network as applied to the analysis of images</li>
            <li>Mathematical methods of decision analysis and modeling ML/AI algorithms</li>
            <li>Apply new frameworks and advanced fundamental knowledge, reflect on how frameworks work and motivate choice, integrate different parts of ML/AI</li>
            <li>Build an automated workflow to scrap, clean, and ethically maintain data and result's privacy</li>
        </ul>
    </div>

    const [isProgrammingParadigmsPopupOpen, setIsProgrammingParadigmsPopupOpen] = useState(false);

    const openProgrammingParadigmsPopup = () => {
        setIsProgrammingParadigmsPopupOpen(true);
    }

    const closeProgrammingParadigmsPopup = () => {
        setIsProgrammingParadigmsPopupOpen(false);
    }

    const programmingParadigmsPopupContent = <div>
        After successful completion of this module, the student is able to:
        <ul>
            <li>Describe the major programming paradigms (FP, LP and CP) and their essential characteristics and differences</li>
            <li>Write basic programs in all major programming paradigms</li>
            <li>Solve non-trivial programming problems in FP and CP</li>
            <li>Explain the concepts and importance of typing, in terms of FP and CC</li>
            <li>Explain and use the typical types and data structures in FP and CP</li>
            <li>Explain and take advantage of the evaluation and execution mechanisms of FP (lazy evaluation) and CP (hardware-related aspects, concurrency models)</li>
            <li>Explain and use the following concepts of FP: recursion, list comprehension, higher order functions, function composition, lazy evaluation</li>
            <li>Explain and use the following concepts of CP: interleaving, fairness, deadlock, memory models, synchronisation, locking</li>
            <li>Explain and use the following concepts of CC: syntactic and semantic analysis, scanning, parsing, run-time organisation, code generation, optimisation</li>
            <li>Write a compiler for a non-trivial imperative language with concurrency features generating a given (dedicated) instruction set</li>
        </ul>
    </div>

    const credits = 101;

    return <>
        <Popup isOpen={isSpanishBaccalaureatePopupOpen} onRequestClose={closeSpanishBaccalaureatePopup} title="Spanish Baccalaureate" content={spanishBaccalaureatePopupContent} />
        <Popup isOpen={isInternationalBaccalaureatePopupOpen} onRequestClose={closeInternationalBaccalaureatePopup} title="International Baccalaureate" content={internationalBaccalaureatePopupContent} />
        <Popup isOpen={isSubjectSummaryUTOpen} onRequestClose={closeSubjectSummaryUTPopup} title="TCS - UT Subject Summary" content={UTsubjectSummary} />
        <Popup isOpen={isSISPopupOpen} onRequestClose={closeSISPopup} title="Spatial Information Science (SIS)" content={sisPopupContent} />
        <Popup isOpen={isSPGPopupOpen} onRequestClose={closeSPGPopup} title="Spatial Planning for Governance (SPG)" content={spgPopupContent} />
        <Popup isOpen={isTEPopupOpen} onRequestClose={closeTEPopup} title="Technical Engineering (TE)" content={tePopupContent} />
        <Popup isOpen={isChallengeQ2PopupOpen} onRequestClose={closeChallengeQ2Popup} title="Challenge Q2" content={challengeQ2Content} />
        <Popup isOpen={isDSAIPopupOpen} onRequestClose={closeDSAIPopup} title="DS & AI: Seeing through the hype" content={DSAIPopupContent} />
        <Popup isOpen={isProgrammingParadigmsPopupOpen} onRequestClose={closeProgrammingParadigmsPopup} title="Programming Paradigms" content={programmingParadigmsPopupContent} />

        <h1>Education</h1>

        <h2>University of Twente</h2>
        <h3>2022-current</h3>
        <div className="flex">
            <div className="image_slider_container">
                <div>
                    <ImageSlider
                        width= {`${isDesktop ? 40 : 80}vw`}
                        height={isDesktop ? (screenWidth * 40 * 362)/(500 * 100) : (screenWidth * 80 * 362)/(500 * 100)}
                        images={twente_images}
                        showBullets={true}
                        showNavs={true}
                    />
                </div>
            </div>
            <div className="text_container">
                <h3>Major</h3>
                <p>
                    I am majoring in Technical Computer Science (TCS) at the University of Twente, in Enschede, The Netherlands.
                    This is a three-year Bachelor's programme that focuses on software engineering and computer science fundamentals 
                    such as algorithms, data structures, networks, web programming, security, etc.
                </p>
                <p className="read_more_inline" onClick={openSubjectSummaryUTPopup}>View subject summary</p>

                <h4>Progress</h4>
                <CircularProgress credits={credits} totalCredits={180} />
            </div>
        </div>
        
        <h3>Minors and Electives</h3>
        <div id="minors_electives">
            <div>
                <h3>Adapting to Climate Change with Spatial Engineering</h3>
                <h4>Minor</h4>
                <p>
                    This minor is offered by 'Master Spatial Engineering' and participants can choose one of three core course units:
                    <ul>
                        <li className="read_more_inline" onClick={openSISPopup}>Spatial Information Science (SIS)</li>
                        <li className="read_more_inline" onClick={openSPGPopup}>Spatial Planning for Governance (SPG)</li>
                        <li className="read_more_inline" onClick={openTEPopup}>Technical Engineering (TE)</li>
                    </ul>
                    Participants also need to complete the <p className="read_more_inline" onClick={openChallengeQ2Popup}>Challenge Q2</p>
                </p>
            </div>
            
            <div>
                <h3>Data Science & Artificial Intelligence: Seeing through the hype</h3>
                <h4>Elective</h4>
                <p>
                    The aim is to teach the fundamentals together with advanced concepts to increase technical knowledge as well as foster students' critical thinking on DS & AI.
                </p>

                <p className="read_more_inline" onClick={openDSAIPopup}>Read More</p>
            </div>

            <div>
                <h3>Programming paradigms</h3>
                <h4>Elective/Minor</h4>
                <p>
                    Up until this point, the students have mainly learned imperative, object-oriented programming. This module will extend their awareness and ability in the following directions:
                    <ul>
                        <li>Non-imperative programming: in particular, the functional paradigm (extensively) and the logic paradigm (briefly)</li>
                        <li>Programming for concurrent systems: concepts, data structures and algorithms for multi-core and GPU-based parallelism</li>
                        <li>Programming language technology: parsing, compilation and code generation</li>
                    </ul>
                    These three strands are initially taught separately and come together in the module project, where the students develop a compiler for their own language with support for parallelism, 
                    generating code that runs on an extensible hardware emulator written in a functional language.
                </p>
                <p className="read_more_inline" onClick={openProgrammingParadigmsPopup}>Read More</p>
            </div>
        </div>

        <h2>Aula Escola Europea</h2>
        <h3>2015-2022</h3>
        <div className="flex">
            <div className="text_container">
                <p>
                    I attended this school since I was 11 until I finished high school at 18 and it has been very enriching for my education
                    for many different reasons:
                    <ul>
                        <li>    
                            Firstly, in this school computer science is a compulsory subject until 10th grade. Thanks to that I discovered my interest for coding,
                            first programming with Scratch and then C++ and Java.
                        </li>
                        <li>
                            The location of the School is in Collserola, a mount in Barcelona. Thanks to that, the school has great views to the city 
                            of Barcelona, and is far from the noisiest, and most polluted areas in the city. This contributes to generating an environment 
                            of greater concentration for students.
                        </li>
                        <li>
                            One of the goals of the school is that by the age of 16 all of the students will have at least a B2 level in both English and French.
                        </li>
                        <li>
                            For the last two years of high school, the school offers the opportunity to take both the Spanish Baccalaureate and the International
                            Baccalaureate (IB). I took both courses at the same time, and that gave me the opportunity to study very high level math, physics and 
                            computer scince.
                        </li>
                    </ul>
                    Below you can read more about my experience in the school.
                </p>
            </div>
            <div className="image_slider_container">
                <div>
                    <ImageSlider
                        width= {`${isDesktop ? 40 : 80}vw`}
                        height={isDesktop ? (screenWidth * 40 * 362)/(500 * 100) : (screenWidth * 80 * 362)/(500 * 100)}
                        images={aula_images}
                        showBullets={true}
                        showNavs={true}
                    />
                </div>
            </div>
        </div>

        <div className="overview">
            <div className="content">
                <h3>Spanish National Baccalaureate</h3>
                <p>Duration: 2 years</p>
                <p>Grade: 8.18/10</p>
                <p className="read_more_inline" onClick={openSpanishBaccalaureatePopup}>Read More</p>
            </div>

            <div className="content">
                <h3><a href="https://www.ibo.org/" target="_blank" rel="noopener noreferrer">International Baccalaureate</a></h3>
                <p>Duration: 2 years</p>
                <p>Grade: 34/45</p>
                <p className="read_more_inline" onClick={openInternationalBaccalaureatePopup}>Read More</p>
            </div>
        </div>
    </>
}