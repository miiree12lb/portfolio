import React, { useState, useEffect } from "react";
import Application from "./ApplicationInterface.tsx";
import "./css/projects.css";

export default function Projects() {
    const [filterCriteria, setFilterCriteria] = useState({
        searchTerm: "",
        language: "none",
        appType: "none",
    });

    const [scrolled, setScrolled] = useState<boolean>(false);

    const applications = [
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
            link: "https://miiree12lb.github.io/video-gallery/",
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

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterCriteria({ ...filterCriteria, searchTerm: event.target.value });
    };

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterCriteria({ ...filterCriteria, language: event.target.value });
    };

    const handleAppTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
        <>
            <h1>Personal projects</h1>
            <div id="sticky">
                <div id="filter">
                    <h2>Search and filter</h2>
                    <div id="filter_components">
                        <input
                            type="text"
                            placeholder="Search by title"
                            onInput={handleSearchInputChange}
                        />

                        <div className="opts">
                            <label htmlFor="language">Language:</label>
                            <select id="language" onChange={handleLanguageChange}>
                                <option value="none">No filter</option>
                                {global_languages.map((language) => (
                                    <option key={language} value={language}>
                                        {language}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="opts">
                            <label htmlFor="app_type">App Type:</label>
                            <select id="app_type" onChange={handleAppTypeChange}>
                                <option value="none">No filter</option>
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
        </>
    );
}
