import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import "./css/privacy.css";

const CONTACT_EMAIL = "mireia.lopez.bruch@gmail.com";

export default function Privacy() {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(CONTACT_EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <section className="privacy-page">
            <h1>Privacy Notice</h1>
            <p className="privacy-updated">Last updated: October 2026</p>

            <h2>Who is responsible</h2>
            <p>
                This is the personal portfolio of Mireia Lopez Bruch. For any question about
                your personal data, contact me at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                <button type="button" className="copy-email-btn" onClick={copyEmail} aria-label="Copy email address">
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                </button>
            </p>

            <h2>What this site does not do</h2>
            <p>
                This site has no analytics, no advertising, no tracking cookies, no contact forms
                and no embedded third-party players. I do not collect, sell or share data about you.
            </p>

            <h2>Hosting</h2>
            <p>
                The site is hosted on GitHub Pages, operated by GitHub, Inc. (USA). When you visit,
                your browser sends technical data such as your IP address, browser type and the
                requested page to GitHub's servers. GitHub may log this data to deliver the site
                securely and protect against abuse. The legal basis is my legitimate interest in
                running a secure, working website (Art. 6(1)(f) GDPR). GitHub is certified under the
                EU–U.S. Data Privacy Framework. See the{" "}
                <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">
                    GitHub Privacy Statement
                </a>.
            </p>

            <h2>Stored on your device</h2>
            <p>
                If you switch between light and dark mode, your choice is saved in your browser's
                local storage under the key <code>theme</code>. It never leaves your device and you
                can clear it at any time in your browser settings.
            </p>

            <h2>External links</h2>
            <p>
                Links to other sites (LinkedIn, Instagram, Linktree, YouTube Music, my projects, etc.)
                only load those sites when you click them. Their own privacy policies apply there.
            </p>

            <h2>Your rights</h2>
            <p>
                Under the GDPR you have the right to access, correct, delete or restrict the processing
                of your personal data and to object to it. Because I hold no data about visitors myself,
                requests about hosting logs are best directed to GitHub, but feel free to contact me.
                You can also complain to a data protection authority, for example the Dutch{" "}
                <a href="https://autoriteitpersoonsgegevens.nl/en" target="_blank" rel="noopener noreferrer">
                    Autoriteit Persoonsgegevens
                </a>{" "}
                or the one in your own country.
            </p>
        </section>
    );
}
