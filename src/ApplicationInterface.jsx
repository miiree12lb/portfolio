import React from 'react';
import "./css/application.css";

const ApplicationInterface= ({ title, languages, app_type, link }) => {
    const handleClick = () => {
        if (link !== "") {
            window.open(link, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <div onClick={handleClick} id="content_holder">
            <h3>{title}</h3>
            <p><b>Languages:</b> {languages.join(", ")}</p>
            <p><b>Type:</b> {app_type}</p>
        </div>
    );
};

export default ApplicationInterface;