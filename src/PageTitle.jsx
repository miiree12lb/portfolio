import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import pages from "./seo.json";
import { getCaseStudy } from "./caseStudies.js";

// Keeps the browser tab title and description in sync with the current page.
// (The build also writes these into a separate HTML file per page, for link previews.)
export default function PageTitle() {
    const { pathname } = useLocation();

    useEffect(() => {
        const path = pathname.replace(/\/+$/, "") || "/";
        let meta = pages[path];

        const caseStudyMatch = path.match(/^\/projects\/([^/]+)$/);
        if (caseStudyMatch) {
            const cs = getCaseStudy(caseStudyMatch[1]);
            if (cs) meta = { title: `${cs.title} | Mireia Lopez Bruch`, description: cs.tagline };
        }

        meta = meta || pages["/"];
        document.title = meta.title;
        document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    }, [pathname]);

    return null;
}
