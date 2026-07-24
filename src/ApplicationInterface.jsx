import React from 'react';
import { ExternalLink } from 'lucide-react';
import "./css/application.css";

const ApplicationInterface= ({ title, languages, app_type, link }) => {
    const handleClick = () => {
        if (link !== "") {
            window.open(link, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <div onClick={handleClick} id="content_holder">
            <div className="application-title">
                <h3>{title}</h3>
                <ExternalLink size={20} className="application-link-icon" />
            </div>
            <p><b>Languages:</b> {languages.join(", ")}</p>
            <p><b>Type:</b> {app_type}</p>
        </div>
    );
};

export default ApplicationInterface;