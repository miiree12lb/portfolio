import React from "react";
import "./css/interests.css";
import TravelGlobe from "./TravelGlobe";
import QuotesCarousel from "./QuotesCarousel";
import ResourcesSection from "./ResourcesSection";

export default function Interests ({theme}) {
    return (<>
        <div className="interests-page">
            <header className="interests-header">
                <h1>Beyond Tech</h1>
                <p className="sub-header">A glimpse into my travels, resources I like, and favorite quotes.</p>
            </header>

            <section className="travel-section">
                <h2>Visited Countries</h2>
                <TravelGlobe theme={theme}/>
            </section>

            <section className="resources-section">
                <h2>Resources</h2>
                <ResourcesSection />
            </section>

            <section className="quotes-section">
                <h2>Quotes</h2>
                <QuotesCarousel />
            </section>
        </div>
            
    </>)
}