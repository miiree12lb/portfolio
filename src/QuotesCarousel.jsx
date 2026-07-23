import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import "./css/quotesCarousel.css";

export default function QuotesCarousel() {
    const quotes = [
        {
            text: "Everybody's a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.",
            author: "Albert Einstein",
            lang: "en"
        },
        {
            text: "No és el pas del temps qui et porta a créixer, són els seus cops.",
            author: "Txarango",
            lang: "ca"
        },
        {
            text: "On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux.",
            author: "Antoine de Saint-Exupéry",
            lang: "fr"
        },
        {
            text: "Hay cosas encerradas dentro de los muros que, si salieran de pronto a la calle y gritaran, llenarían el mundo.",
            author: "Federico García Lorca",
            lang: "es"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Canviar automàticament de cita cada 6 segons si no està pausat
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [isPaused, quotes.length]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div
            className="quotes-carousel-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="quotes-card">
                <Quote className="quote-icon" size={32} />

                <div className="quote-content">
                    <p className="quote-text">"{quotes[currentIndex].text}"</p>
                    <span className="quote-author">— {quotes[currentIndex].author}</span>
                </div>

                <button className="carousel-btn prev-btn" onClick={handlePrev} aria-label="Previous quote">
                    <ChevronLeft size={20} />
                </button>
                <button className="carousel-btn next-btn" onClick={handleNext} aria-label="Next quote">
                    <ChevronRight size={20} />
                </button>

                <div className="carousel-dots">
                    {quotes.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? "active" : ""}`}
                            onClick={() => handleDotClick(index)}
                            aria-label={`Go to quote ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}