import React, { useState } from "react";
import Application from "./ApplicationInterface.tsx";
import "./css/projects.css";

export default function Projects(){
    const [filterCriteria, setFilterCriteria] = useState({
        searchTerm: "",
        language: "none",
        appType: "none",
    });

    const global_languages = ["TypeScript", "CSS", "HTML", "Kotlin", "Java"];

    const applications = [
        {
            title: "My Portfolio",
            languages: ["TypeScript", "CSS", "HTML"],
            app_type: "Web Application",
            link: "https://miiree12lb.site",
        },
        {
            title: "MenuMentor",
            languages: ["Java"],
            app_type: "Desktop Application",
            link: "https://miiree12lb.github.io/MenuMentor/",
        },
    ];

    // Filter applications based on the current filter criteria
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

    return (
        <>
            <div id="sticky">
                <h1>Personal projects</h1>

                <div id="filter">
                    <h2>Search and filter</h2>
                    <div id="filter_components">
                        <input
                            type="text"
                            placeholder="search by title or description"
                            onInput={handleSearchInputChange}
                        />

                        <div className="opts">
                            <label htmlFor="language">Language:</label>
                            <select id="language" onChange={handleLanguageChange}>
                                <option value="none">No filter</option>
                                {global_languages.map((language) =>(
                                    <option key={language}>{language}</option>
                                ))}
                            </select>
                        </div>

                        <div className="opts">
                            <label htmlFor="app_type">App Type:</label>
                            <select id="app_type" onChange={handleAppTypeChange}>
                                <option value="none">No filter</option>
                                <option value="Web Application">Web Application</option>
                                <option value="Desktop Application">Desktop Application</option>
                                <option value="Smartphone Application">Smartphone Application</option>
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