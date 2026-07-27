import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./css/genericSlider.css";

export default function GenericSlider({ 
    items = [], 
    width = "100%", 
    height = "250px",
    objectFit = "contain" 
}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!items || items.length === 0) {
        return <p className="slider-empty">No items to display</p>;
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    const currentItem = items[currentIndex];

    // Detectem si l'item és una ruta d'imatge (string) o un objecte { url: "..." }
    const imageUrl = typeof currentItem === "string" ? currentItem : currentItem?.url;

    return (
        <div className="generic-slider-container">
            {/* Fila principal: Fletxa esquerra - Contingut - Fletxa dreta */}
            <div className="slider-main-row">
                <button 
                    className="slider-arrow left" 
                    onClick={handlePrev} 
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={20} />
                </button>

                <div 
                    className="slider-frame" 
                    style={{ width, height }}
                >
                    {imageUrl ? (
                        <img 
                            src={imageUrl} 
                            alt={currentItem?.alt || `Slide ${currentIndex + 1}`} 
                            className="slider-img"
                            style={{ objectFit }}
                        />
                    ) : (
                        /* Si li passes un element personalitzat que no és imatge */
                        <div className="slider-custom-content">
                            {currentItem}
                        </div>
                    )}
                </div>

                <button 
                    className="slider-arrow right" 
                    onClick={handleNext} 
                    aria-label="Next slide"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Punts de navegació inferiors (fora de la imatge) */}
            <div className="slider-dots">
                {items.map((_, index) => (
                    <button
                        key={index}
                        className={`slider-dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}