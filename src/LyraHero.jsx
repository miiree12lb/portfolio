import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import "./css/lyraHero.css";

/* A short program in Lyra, the language Mireia designed and compiled to LLVM for her thesis.
   The syntax follows the Lyra grammar: `main` is void, declarations need no semicolon,
   and print's second argument says whether to end the line.
   Each line is a list of [kind, text] tokens; the kind picks the colour. */
const PROGRAM = [
    [["com", "// Lyra, the language from my thesis"]],
    [["kw", "void"], ["sp", " "], ["fn", "main"], ["pun", "() {"]],
    [["sp", "    "], ["ty", "string"], ["sp", " "], ["id", "name"], ["pun", " = "], ["str", "\"Mireia Lopez Bruch\""]],
    [["sp", "    "], ["ty", "string"], ["sp", " "], ["id", "from"], ["pun", " = "], ["str", "\"Barcelona\""]],
    [["sp", "    "], ["ty", "list"], ["pun", "<"], ["ty", "string"], ["pun", ">"], ["sp", " "], ["id", "roles"], ["pun", " = ["]],
    [["sp", "        "], ["str", "\"developer\""], ["pun", ", "], ["str", "\"video creator\""]],
    [["sp", "    "], ["pun", "]"]],
    [["sp", "    "], ["ty", "map"], ["pun", "<"], ["ty", "string"], ["pun", ", "], ["ty", "string"], ["pun", ">"], ["sp", " "], ["id", "study"], ["pun", " = {"]],
    [["sp", "        "], ["str", "\"MSc\""], ["pun", ": "], ["str", "\"TU Delft\""], ["pun", ","]],
    [["sp", "        "], ["str", "\"BSc\""], ["pun", ": "], ["str", "\"University of Twente\""]],
    [["sp", "    "], ["pun", "}"]],
    [],
    [["sp", "    "], ["fn", "print"], ["pun", "("], ["id", "name"], ["pun", ", "], ["num", "true"], ["pun", ")"]],
    [["pun", "}"]],
];

const OUTPUT = "Mireia Lopez Bruch";

// Time to read the name and tagline before typing starts; meanwhile the cursor blinks in the empty editor
const START_PAUSE = 1200;

/* ---------- Typing schedule ----------
   One delay per character: indentation appears at once (like an editor's auto-indent),
   other characters take 8–14 ms, and each line ends with a short pause. */
const LINE_LENGTHS = PROGRAM.map((line) => line.reduce((n, [, text]) => n + text.length, 0));
const TOTAL = LINE_LENGTHS.reduce((a, b) => a + b, 0);

const DELAYS = (() => {
    const delays = [];
    let seed = 7;
    const jitter = () => {
        seed = (seed * 9301 + 49297) % 233280; // small fixed pseudo-random sequence: same rhythm every time
        return seed / 233280;
    };
    PROGRAM.forEach((line) => {
        const text = line.map(([, t]) => t).join("");
        const indent = text.length - text.trimStart().length;
        for (let i = 0; i < text.length; i++) {
            delays.push(i < indent ? 0 : 8 + Math.round(jitter() * 6));
        }
        if (delays.length) delays[delays.length - 1] += 60; // pause at the end of the line
    });
    return delays;
})();

/* Typed when the site is opened or refreshed. Coming back to Home from another page shows it
   finished, and so does a system setting for reduced motion. */
let playedThisLoad = false;

function shouldAnimate() {
    if (playedThisLoad) return false;
    try {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    } catch (e) {
        return false;
    }
    return true;
}

export default function LyraHero() {
    const [animate] = useState(shouldAnimate);
    const [typed, setTyped] = useState(animate ? 0 : TOTAL);
    const [started, setStarted] = useState(!animate);
    const panelRef = useRef(null);

    useEffect(() => {
        playedThisLoad = true;
    }, []);

    // Start typing once most of the panel is on screen, so visitors see it from the first letter.
    // On phones it sits below the tagline, so it starts as people scroll down to it.
    useEffect(() => {
        if (started) return undefined;
        const panel = panelRef.current;
        if (!panel || typeof IntersectionObserver === "undefined") {
            setStarted(true);
            return undefined;
        }
        const observer = new IntersectionObserver(
            (entries) => {
                const seen = entries.some(
                    (e) =>
                        e.intersectionRatio >= 0.8 ||
                        // a panel taller than the screen counts once it fills most of it
                        e.intersectionRect.height >= window.innerHeight * 0.7
                );
                if (seen) {
                    setStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: [0, 0.25, 0.5, 0.65, 0.8, 1] }
        );
        observer.observe(panel);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started || typed >= TOTAL) return undefined;
        const wait = typed === 0 ? START_PAUSE : DELAYS[typed - 1];
        const timer = setTimeout(() => setTyped((n) => n + 1), wait);
        return () => clearTimeout(timer);
    }, [typed, started]);

    const done = typed >= TOTAL;

    // Where the cursor is: the line and column of the next character to type
    let caretLine = -1;
    let caretCol = 0;
    if (animate && !done) {
        let start = 0;
        for (let i = 0; i < PROGRAM.length; i++) {
            if (typed < start + LINE_LENGTHS[i]) {
                caretLine = i;
                caretCol = typed - start;
                break;
            }
            start += LINE_LENGTHS[i];
        }
    }

    // Every character is always in the page (untyped ones invisible), so the panel never changes size
    let lineStart = 0;
    const lines = PROGRAM.map((line, i) => {
        const parts = [];
        let pos = 0;
        line.forEach(([kind, text], j) => {
            const shown = Math.max(0, Math.min(text.length, typed - (lineStart + pos)));
            parts.push(<span className={`tok-${kind}`} key={`${j}a`}>{text.slice(0, shown)}</span>);
            if (i === caretLine && caretCol >= pos && caretCol < pos + text.length) {
                parts.push(<span className="lyra-caret" key="caret" />);
            }
            if (shown < text.length) {
                parts.push(<span className={`tok-${kind} lyra-ghost`} key={`${j}b`}>{text.slice(shown)}</span>);
            }
            pos += text.length;
        });
        lineStart += LINE_LENGTHS[i];
        return (
            <span className="lyra-line" key={i}>
                {line.length === 0 ? " " : parts}
            </span>
        );
    });

    return (
        <figure ref={panelRef} className={`lyra-panel${animate ? " lyra-animate" : ""}${animate && typed === 0 ? " is-waiting" : ""}`}>
            <div className="lyra-bar">
                <span className="lyra-file">main.lyra</span>
                <Link to="/projects/lyra" className="lyra-about">
                    What's Lyra? <ArrowRight size={14} aria-hidden="true" />
                </Link>
            </div>

            <figcaption className="visually-hidden">
                A short program in Lyra, the programming language I built for my thesis. It stores my name,
                where I'm from, my roles and where I studied, then prints my name.
            </figcaption>

            {/* A div rather than <pre><code>: some browser extensions take over code blocks and freeze the typing */}
            <div className="lyra-src" aria-hidden="true">
                {lines}
            </div>

            <div className={`lyra-output${done ? " is-printed" : ""}`} aria-hidden="true">
                <span className="lyra-output-label">Output</span>
                <span className="lyra-output-text">{OUTPUT}</span>
            </div>
        </figure>
    );
}
