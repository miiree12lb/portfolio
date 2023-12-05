import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function PhoneNavbar() {
    const [checked, setChecked] = useState(false);

    return (
        <>
            <div id="dropdown">
                <label htmlFor="toggle"><h1>☰</h1></label>
                <input type="checkbox" id="toggle" onChange={() => setChecked(!checked)} style={{display: "none"}}/>
            </div>
            <div id="phone_links"  style={checked ? { display: "block" } : { display: "none" }}>
                <Link to="/">About Me</Link>
                <Link to="education">Education</Link>
                <Link to="experience">Experience</Link>
                <Link to="achievements">Achievements</Link>
                <Link to="contact">Contact Me</Link>
            </div>
            
        </>
    );
}