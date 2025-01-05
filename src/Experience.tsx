import React, {useState} from "react";
import "./css/root.css";
import "./css/experience.css";
//@ts-ignore
import Popup from "./PopupInterface.tsx";

export default function Experience() {
    const [isMacsPopupOpen, setIsMacsPopupOpen] = useState(false);

    const openMacsPopup = () => {
      setIsMacsPopupOpen(true);
    }
  
    const closeMacsPopup = () => {
      setIsMacsPopupOpen(false);
    }

    const macsPopupContent = <div>
        <h4>Work</h4>
        <h4>Wisconsin, USA</h4>
        <p>15/06/2024 - 02/09/2024</p>

        <p>
            M.A.C.S. (Macaroni and Cheese Shop) Lake Delton is a vibrant and welcoming restaurant with an exceptional dining experience with 
            our signature dishes. We pride ourselves on our high-quality food, friendly service, and inviting atmosphere.
        </p>
        
        <p>
            My key responsibilities as a waitress are:
            <ul>
                <li>Greet customers with a friendly and welcoming attitude.</li>
                <li>Take accurate customer orders and relay them to the kitchen efficiently.</li>
                <li>Deliver food to tables promptly.</li>
                <li>Prepare and package to-go, online, and phone orders.</li>
                <li>Maintain cleanliness and organization in the dining area.</li>
                <li>Collect and clear customer dishes from tables.</li>
                <li>Empty trash cans regularly to ensure a tidy environment.</li>
                <li>Refill the fridge and ensure it's well-stocked with beverages and other items.</li>
            </ul>
        </p>
    </div>

    const [isGoStudentPopupOpen, setIsGoStudentPopupOpen] = useState(false);

    const openGoStudentPopup = () => {
        setIsGoStudentPopupOpen(true);
    }

    const closeGoStudentPopup = () => {
        setIsGoStudentPopupOpen(false);
    }

    const goStudentPopupContent = <div>
        <h4>Work</h4>
        <p>11/11/2022 - current</p>

        <p>
            I am a private tutor of Math, Catalan and English of High School students in the platform GoStudent. 
        </p>
    </div>

    const [isOifemPopupOpen, setIsOifemPopupOpen] = useState(false);

    const openOifemPopup = () => {
        setIsOifemPopupOpen(true);
    }

    const closeOifemPopup = () => {
        setIsOifemPopupOpen(false);
    }

    const oifemPopupContent = <div>
        <h4>Volunteering</h4>
        <p>2022 - current</p>

        <p>
            I am a volunteer for the Women's informatics olympiad in spain (OIFem). As I have already mentioned, I was a participant of the first edition of this olympiad,
            and I think it has a very important role to atract young women in to technology. To prepare for the olympiad there are free classes given in 4 different levels.
            The participants have the opportunity to meet other people with similar interest and learn computer science while having fun and competing.
        </p>
        <p>
            My role is to propose problems and their tests, to check if the solutions provided by the participants are right, when a olympiad is approaching.
        </p>
    </div>

    const [isComputersPopupOpen, setIsComputersPopupOpen] = useState(false);

    const openComputersPopup = () => {
        setIsComputersPopupOpen(true);
    }

    const closeComputersPopup = () => {
        setIsComputersPopupOpen(false);
    }

    const computersPopupContent = <div>
        <h4>Volunteering</h4>
        <p>2021</p>

        <p>
            As part of the CAS subject in the IB program, a group of students in my school collected some old computers in our school that weren't used anymore to see
            if they could be given to people or schools that cannot afford new computers. Our initial idea was to give the computers to <a href="https://www.labdoo.org/ca/" className="link" target="_blank" rel="noopener noreferrer">
            Labdoo</a>, we tried to contact them to get some information and see when we could sent the repaired computers, but we never received an answer.
        </p>
        <p>
            We decided to contact other schools in Barcelona and see if they would be interested in receiving these repaired computers to use it in the school or give it 
            to some students and families that can't afford a new computer. A school in <i>El Raval</i> said thy were interested. In june 2021 all the members of the group 
            took home some of the unused computers in the school to see if they worked properly to be given and see if they could be repaired.
        </p>
        <p>
            All those computers were quite old and had windows 7 as operating systems. We decided to switch the operating system to Ubuntu as the last update at the time was in
            2020 and Ubuntu requires less resources to work properly than windows 11. When we had all the working computers ready, with a charger and with ubuntu installed, we
            contacted again the principal of the school in <i>El Raval</i> to give him the computers.
        </p>
    </div>

    const [isPhonesPopupOpen, setIsPhonesPopupOpen] = useState(false);

    const openPhonesPopup = () => {
        setIsPhonesPopupOpen(true);
    }

    const closePhonesPopup = () => {
        setIsPhonesPopupOpen(false);
    }

    const phonesPopupContent = <div>
        <h4>Volunteering</h4>
        <p>2020</p>

        <p>
            During 10th grade in high school I had the opportunity to participate in a project that collected unused phones, check that they worked properly and then give it to 
            homeless people living in a shelter in Barcelona. They couldn't afford buying a phone, and a lot of times when they would apply to get a job they would be asked to provide
            a phone number to be contacted.
        </p>
        <p>
            Firstly, we did a mobile collection campaign with their chargers. We managed to collect around 20 unused mobile phones and started to repair then. However, due to covid the 
            project had to be cancelled and we couldn't give them those phones and help them to get used to using the phones.
        </p>
    </div>


    const currentYear = new Date().getFullYear();

    const experiences = [
        { title: "M.A.C.S Lake Delton", startTime: 2024, endTime: 2024, type: "work", open: openMacsPopup},
        { title: "GoStudent", startTime: 2022, endTime: currentYear, type: "work", open: openGoStudentPopup},
        { title: "OIFem", startTime: 2022, endTime: currentYear, type: "volunteer", open: openOifemPopup},
        { title: "Repair of Computers", startTime: 2021, endTime: 2021, type: "volunteer", open: openComputersPopup },
        { title: "Repair of Phones", startTime: 2020, endTime: 2020, type: "volunteer", open: openPhonesPopup},
    ];

    const minYear = Math.min(...experiences.map((exp) => exp.startTime));
    const maxYear = Math.max(...experiences.map((exp) => exp.endTime));
    const totalYears = maxYear - minYear + 1;


 

    return (
    <> 
        <Popup
            title = "M.A.C.S Lake Delton"
            isOpen={isMacsPopupOpen}
            onRequestClose={closeMacsPopup}
            content={macsPopupContent}
        />

        <Popup
            title = "GoStudent"
            isOpen={isGoStudentPopupOpen}
            onRequestClose={closeGoStudentPopup}
            content={goStudentPopupContent}
        />

        <Popup
            title = "OIFem"
            isOpen={isOifemPopupOpen}
            onRequestClose={closeOifemPopup}
            content={oifemPopupContent}
        />

        <Popup
            title = "Repair and distribution of computers"
            isOpen={isComputersPopupOpen}
            onRequestClose={closeComputersPopup}
            content={computersPopupContent}
        />

        <Popup
            title = "Repair and distribution of phones"
            isOpen={isPhonesPopupOpen}
            onRequestClose={closePhonesPopup}
            content={phonesPopupContent}
        />

        <h1>Experience</h1>
        <div className="timeline-container">
            <div className="timeline-grid">
                {experiences.map((exp, index) => {
                    const startColumn = exp.startTime - minYear + 1; // Grid starts at 1
                    const spanColumns = exp.endTime - exp.startTime + 1;

                    return (
                        <div
                        onClick = {exp.open}
                        key={index}
                        className={`timeline-grid-item ${exp.type}`}
                        style={{
                            gridColumn: `${startColumn} / span ${spanColumns}`,
                            gridRow: `${index + 1}`,
                        }}
                        >
                            {exp.title}
                        </div>
                    );
                })}
            </div>

            <div className="timeline-grid-header">
            {Array.from({ length: totalYears }, (_, i) => (
            <div key={i} className="timeline-grid-year">
                {minYear + i}
            </div>
            ))}
        </div>
        </div>

    </>
    );
}
