import React from "react";
import { Play, Code, Smile, ExternalLink } from "lucide-react";
import ImageSlider from "react-simple-image-slider";
import "./css/resources.css";

export default function ResourcesSection({ memes, isDesktop }) {
    const youtubeChannels = [
        { name: "QuantumFracture", desc: "Physics & Science animation", url: "https://www.youtube.com/@QuantumFracture" },
        { name: "Date un Vlog", desc: "Astrophysics & Physics", url: "https://www.youtube.com/@dateunvlog" },
        { name: "CS50", desc: "Harvard Computer Science", url: "https://www.youtube.com/@cs50" },
        { name: "Derivando", desc: "Mathematics explained easily", url: "https://www.youtube.com/@Derivando" },
        { name: "Veritasium", desc: "Science & Engineering", url: "https://www.youtube.com/@veritasium" }
    ];

    const codingResources = [
        { name: "Jutge.org", desc: "Competitive programming problems", url: "https://jutge.org/" },
        { name: "HackerRank", desc: "Coding practice & interview prep", url: "https://www.hackerrank.com/" },
        { name: "CS50 on edX", desc: "HarvardX Computer Science Course", url: "https://www.edx.org/school/harvardx" },
        { name: "W3Schools", desc: "Web development documentation", url: "https://www.w3schools.com/" },
        { name: "GeeksForGeeks", desc: "Data structures & algorithms", url: "https://www.geeksforgeeks.org/" },
        { name: "StackOverflow", desc: "Developer community Q&A", url: "https://stackoverflow.com/" }
    ];

    return (
        <section className="section" id="channels">

            <div id="interesting" className="resources-grid">
                
                {/* Bloc 1: YouTube Channels */}
                <div id="youtube" className="content-card">
                    <div className="card-header">
                        <Play className="card-icon" size={24} />
                        <h3>YouTube Channels</h3>
                    </div>
                    <div className="resource-list">
                        {youtubeChannels.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resource-item"
                            >
                                <div className="resource-info">
                                    <span className="resource-name">{item.name}</span>
                                    <span className="resource-desc">{item.desc}</span>
                                </div>
                                <ExternalLink size={16} className="link-icon" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bloc 2: Web / Coding Courses */}
                <div id="code" className="content-card">
                    <div className="card-header">
                        <Code className="card-icon" size={24} />
                        <h3>Learn How to Code</h3>
                    </div>
                    <div className="resource-list">
                        {codingResources.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resource-item"
                            >
                                <div className="resource-info">
                                    <span className="resource-name">{item.name}</span>
                                    <span className="resource-desc">{item.desc}</span>
                                </div>
                                <ExternalLink size={16} className="link-icon" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bloc 3: Memes Slider */}
                <div id="memes" className="content-card memes-card">
                    <div className="card-header">
                        <Smile className="card-icon" size={24} />
                        <h3>Cool Nerdy Memes</h3>
                    </div>
                    <div className="slider-wrapper">
                        <ImageSlider
                            width={`${isDesktop ? 20 : 70}vw`}
                            height={`${isDesktop ? 20 : 70}vw`}
                            images={memes}
                            showBullets={true}
                            showNavs={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}