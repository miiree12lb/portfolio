import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/* New pages open at the top. Going back or forward (browser buttons or the case-study
   Back link) leaves the scroll position to the browser, so you return to where you were. */
export default function ScrollToTop() {
    const { pathname } = useLocation();
    const navigationType = useNavigationType();

    useEffect(() => {
        if (navigationType !== "POP") window.scrollTo(0, 0);
    }, [pathname, navigationType]);

    return null;
}
