import React, { useState } from 'react';
// @ts-ignore
import "./css/quotes.css";

interface Quote {
    text: string;
    author: string;
}

interface QuoteSlideshowProps {
    quotes: Quote[];
    autoPlay?: boolean;
}

const QuoteSlideshow: React.FC<QuoteSlideshowProps> = ({ quotes, autoPlay = false }) => {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    const nextQuote = () => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    };

    const prevQuote = () => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
    };

    React.useEffect(() => {
        if (autoPlay) {
            const interval = setInterval(nextQuote, 5000);
            return () => clearInterval(interval);
        }
    }, [autoPlay]);

    const currentQuote = quotes[currentQuoteIndex];

    return (
        <div id="quotes_container">
            <button id="previous_quote" onClick={prevQuote}>&#10094;</button>
            <div id="quote">
                <p><i>{currentQuote.text}</i></p>
                <p>- {currentQuote.author}</p>
            </div>
            <button id="next_quote" onClick={nextQuote}>&#10095;</button>
        </div>
    );
};

export default QuoteSlideshow;
