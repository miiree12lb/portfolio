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

export default function Education(){
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

    return <>
        <Popup isOpen={isSpanishBaccalaureatePopupOpen} onRequestClose={closeSpanishBaccalaureatePopup} title="Spanish Baccalaureate" content={spanishBaccalaureatePopupContent} />
        <Popup isOpen={isInternationalBaccalaureatePopupOpen} onRequestClose={closeInternationalBaccalaureatePopup} title="International Baccalaureate" content={internationalBaccalaureatePopupContent} />
        <h1>Education</h1>

        <h2>University of Twente</h2>
        <h3>2022-current</h3>
        <div className="flex">
            <div className="image_slider_container">
                <div className="big_slider">
                    <ImageSlider
                        width={500}
                        height={362}
                        images={twente_images}
                        showBullets={true}
                        showNavs={true}
                    />
                </div>
                <div className="small_slider">
                    <ImageSlider
                        width={300}
                        height={217}
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
                    such as algorithms, data structures, networks, web programming, security, etc. Below you can see a table with the 
                    subjects I will take during the degree.
                </p>
                <h3>Elective(s)</h3>
                <p>
                    
                </p>
                <h3>Minor</h3>
                <p>

                </p>
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
                <div className="big_slider">
                    <ImageSlider
                        width={500}
                        height={362}
                        images={aula_images}
                        showBullets={true}
                        showNavs={true}
                    />
                </div>
                <div className="small_slider">
                    <ImageSlider
                        width={300}
                        height={217}
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
                <h3><a href="https://www.ibo.org/">International Baccalaureate</a></h3>
                <p>Duration: 2 years</p>
                <p>Grade: 34/45</p>
                <p className="read_more_inline" onClick={openInternationalBaccalaureatePopup}>Read More</p>
            </div>
        </div>
    </>
}