import React from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

/* Renders a LaTeX formula with KaTeX. Replaces the react-katex package, which was stuck on an old,
   vulnerable KaTeX. The formulas are fixed text written in this site, never visitor input. */
function render(math, displayMode) {
    return katex.renderToString(math, { displayMode, throwOnError: false });
}

export function InlineMath({ math }) {
    return <span dangerouslySetInnerHTML={{ __html: render(math, false) }} />;
}

export function BlockMath({ math }) {
    return <div dangerouslySetInnerHTML={{ __html: render(math, true) }} />;
}
