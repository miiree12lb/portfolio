import React, { useState, useEffect } from "react";
import { Search, Filter, Code2, ExternalLink } from "lucide-react";
import Application from "./ApplicationInterface.jsx";
import "./css/projects.css";

export default function Projects() {
    const [filterCriteria, setFilterCriteria] = useState({
        searchTerm: "",
        language: "none",
        appType: "none",
    });

    const [scrolled, setScrolled] = useState(false);

    const applications = [
        {
            title: "Math Functions Viewer",
            languages: ["JavaScript", "CSS", "HTML"],
            app_type: "Web Application",
            link: "https://miiree12lb.github.io/math-viewer/"
        },
        {
            title: "OIFem",
            languages: ["JavaScript", "CSS", "HTML"],
            app_type: "Web Application",
            link: "https://oifem.es"
        },
        {
            title: "React How To",
            languages: ["JavaScript", "CSS", "HTML"],
            app_type: "Web Application",
            link: "https://miiree12lb.github.io/how-to/",
        },
        {
            title: "Designs",
            languages: ["JavaScript", "CSS", "HTML"],
            app_type: "Web Application",
            link: "https://miiree12lb.github.io/designs",
        },
        {
            title: "Video Gallery",
            languages: ["JavaScript", "CSS", "HTML"],
            app_type: "Web Application",
            link: "https://miiree12lb-video-gallery.com/",
        },
        {
            title: "Color Palette Generator",
            languages: ["JavaScript", "CSS", "HTML"],
            app_type: "Web Application",
            link: "https://miiree12lb.github.io/color-picker/",
        },
        {
            title: "Text Summarizer",
            languages: ["JavaScript", "Python", "CSS", "HTML"],
            app_type: "Web Application",
            link: "https://text-summarizer-rho.vercel.app/",
        },
        {
            title: "My Portfolio",
            languages: ["TypeScript", "CSS", "HTML"],
            app_type: "Web Application",
            link: "https://miiree12lb.site",
        },
        {
            title: "MenuMentor",
            languages: ["Java", "SQL"],
            app_type: "Desktop Application",
            link: "https://miiree12lb.github.io/MenuMentor/",
        },
    ];

    const global_languages = Array.from(
        new Set(applications.flatMap((app) => app.languages))
    );

    const global_app_types = Array.from(
        new Set(applications.map((app) => app.app_type))
    );

    const filteredApplications = applications.filter((app) => {
        const titleMatch = app.title.toLowerCase().includes(filterCriteria.searchTerm.toLowerCase());
        const languageMatch = filterCriteria.language === "none" || app.languages.includes(filterCriteria.language);
        const appTypeMatch = filterCriteria.appType === "none" || app.app_type === filterCriteria.appType;

        return titleMatch && languageMatch && appTypeMatch;
    });

    const handleSearchInputChange = (event) => {
        setFilterCriteria({ ...filterCriteria, searchTerm: event.target.value });
    };

    const handleLanguageChange = (event) => {
        setFilterCriteria({ ...filterCriteria, language: event.target.value });
    };

    const handleAppTypeChange = (event) => {
        setFilterCriteria({ ...filterCriteria, appType: event.target.value });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth < 800 && window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="projects-page">
            <header className="projects-header">
                <h1>Personal Projects</h1>
                <p className="sub-header">Web applications, tools, and desktop software built from scratch.</p>
            </header>

            {/* Sticky Filter Bar */}
            <div id="sticky" className={scrolled ? "scrolled" : ""}>
                <div id="filter" className="filter-card">
                    <div className="filter-title">
                        <Filter size={20} className="icon-gold" />
                        <h2>Search & Filter</h2>
                    </div>

                    <div id="filter_components">
                        {/* Input cerca amb icona */}
                        <div className="search-input-wrapper">
                            <Search size={18} className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search project title..."
                                value={filterCriteria.searchTerm}
                                onChange={handleSearchInputChange}
                            />
                        </div>

                        {/* Selector d'idioma */}
                        <div className="opts">
                            <label htmlFor="language">Language:</label>
                            <select id="language" value={filterCriteria.language} onChange={handleLanguageChange}>
                                <option value="none">All Languages</option>
                                {global_languages.map((language) => (
                                    <option key={language} value={language}>
                                        {language}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Selector de tipus d'app */}
                        <div className="opts">
                            <label htmlFor="app_type">App Type:</label>
                            <select id="app_type" value={filterCriteria.appType} onChange={handleAppTypeChange}>
                                <option value="none">All Types</option>
                                {global_app_types.map((appType) => (
                                    <option key={appType} value={appType}>
                                        {appType}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Graella de Projectes */}
            {filteredApplications.length > 0 ? (
                <div id="grid">
                    {filteredApplications.map((app, index) => (
                        <Application
                            key={index}
                            title={app.title}
                            languages={app.languages}
                            app_type={app.app_type}
                            link={app.link}
                        />
                    ))}
                </div>
            ) : (
                <div className="no-results">
                    <Code2 size={40} className="icon-gold" />
                    <p>No projects match your current filter criteria.</p>
                </div>
            )}
        </div>
    );
}