import React, { useState, useContext } from "react";
// @ts-ignore
import "./css/root.css";
// @ts-ignore
import "./css/experience.css";

export default function Experience(){
    return <>
        <h1>Experience</h1>

        <h2>Work</h2>
        <h3>GoStudent</h3>
        <p> 11/11/2022 - current</p>
        <p>
            I am a private tutor of Math, Catalan and English of High School students in the platform GoStudent. 
        </p>


        <h2>Voluteering</h2>
        <h3>OIFem</h3>
        <p> 2022 - current</p>
        <p>
            I am a volunteer for the Women's informatics olympiad in spain (OIFem). As I have already mentioned, I was a participant of the first edition of this olympiad,
            and I think it has a very important role to atract young women in to technology. To prepare for the olympiad there are free classes given in 4 different levels.
            The participants have the opportunity to meet other people with similar interest and learn computer science while having fun and competing.
        </p>
        <p>
            My role is to propose problems and their tests, to check if the solutions provided by the participants are right, when a olympiad is approaching.
        </p>

        <h3>Repair and distribution of computers</h3>
        <p>2021</p>
        <p>
            As part of the CAS subject in the IB program, a group of students in my school collected some old computers in our school that weren't used anymore to see
            if they could be given to people or schools that cannot afford new computers. Our initial idea was to give the computers to <a href="https://www.labdoo.org/ca/" className="link">
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


        <h3>Repair and distribution of phones</h3>
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
    </>
}