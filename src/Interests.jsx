import React from "react";
import { useMediaQuery } from "react-responsive";
import "./css/interests.css";
import TravelGlobe from "./TravelGlobe";
import QuotesCarousel from "./QuotesCarousel";
import ResourcesSection from "./ResourcesSection";

import pcpp from "./assets/images/memes/c++_python.png";
import dualitat_patro from "./assets/images/memes/dualitat_patro.png";
import forces from "./assets/images/memes/forces.png";
import identity_matrix from "./assets/images/memes/identityMatrix.png";
import cat from "./assets/images/memes/schrodingers_cat.png";
import stack from "./assets/images/memes/stack_overflow.png";
import string_theory from "./assets/images/memes/string_theory.png";
import time_relativity from "./assets/images/memes/time_relativity.png";
import os from "./assets/images/memes/OS.png";
import physics_laws from "./assets/images/memes/physics_laws.png";
import pie from "./assets/images/memes/i_ate_some_pie.png";

export default function Interests ({theme}) {
    const memes = [pcpp, stack, time_relativity, dualitat_patro, forces, pie, os, identity_matrix, cat, string_theory, physics_laws];

    const isDesktop = useMediaQuery({ query: "(min-width: 951px)" });

    return (<>
        <div className="interests-page">
            <header className="interests-header">
                <h1>Beyond Tech</h1>
                <p className="sub-header">A glimpse into my travels, favorite quotes, and resources.</p>
            </header>

            <section className="travel-section">
                <h2>Visited Countries</h2>
                <TravelGlobe theme={theme}/>
            </section>

            <section className="quotes-section">
                <h2>Quotes</h2>
                <QuotesCarousel />
            </section>

            <section className="resources-section">
                <h2>Resources & Cool Nerdy Memes</h2>
                <ResourcesSection memes={memes} isDesktop={isDesktop} />
            </section>
        </div>
            
    </>)
}