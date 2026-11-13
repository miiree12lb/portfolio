import React from "react";
import { highlightLyra } from "./lyraSyntax.js";

import "./css/lyraHero.css";

/* A real Lyra program shown in the same panel as the hero on Home, but static:
   the code, then exactly what it prints when compiled and run. */
export default function LyraSample({ file, code, output, caption }) {
    const lines = highlightLyra(code);

    return (
        <figure className="lyra-panel lyra-static">
            <div className="lyra-bar">
                <span className="lyra-file">{file}</span>
            </div>

            {/* A div rather than <pre><code>: some browser extensions take over code blocks */}
            <div className="lyra-src" role="region" aria-label={`${file} source code`} tabIndex={0}>
                {lines.map((line, i) => (
                    <span className="lyra-line" key={i}>
                        {line.length === 0
                            ? " "
                            : line.map(([kind, text], j) => <span className={`tok-${kind}`} key={j}>{text}</span>)}
                    </span>
                ))}
            </div>

            <div className="lyra-output lyra-output-block">
                <span className="lyra-output-label">Output</span>
                <span className="lyra-output-text">
                    {output.split("\n").map((l, i) => <span className="lyra-line" key={i}>{l}</span>)}
                </span>
            </div>

            {caption && <figcaption className="lyra-caption">{caption}</figcaption>}
        </figure>
    );
}
