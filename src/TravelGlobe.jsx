import React, { useState, useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";
import { useMediaQuery } from "react-responsive";
import "./css/travelGlobe.css";

export default function TravelGlobe({ theme = "dark" }) {
    const globeRef = useRef();
    const [countriesGeo, setCountriesGeo] = useState({ features: [] });
    const [selectedCountry, setSelectedCountry] = useState(null);
    const isDesktop = useMediaQuery({ query: "(min-width: 531px)" });

    const visitedISO = [
        "USA", "ESP", "FRA", "ITA", "VAT", "DEU", "GBR",
        "BEL", "IRL", "NLD", "CHE", "NOR", "SWE", "TUR", "GRC",
        "HRV", "SVN", "LUX", "MCO", "AND", "PRT", "HUN", "CZE", "SVK", "AUT", "DNK",
        "CAN"
    ];

    const getCountryISO = (properties) => {
        if (properties.ISO_A3 && properties.ISO_A3 !== "-99") return properties.ISO_A3;
        if (properties.ADM0_A3) return properties.ADM0_A3;
        if (properties.WB_A2) return properties.WB_A2;
        return properties.ISO_A3;
    };

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson")
            .then((res) => res.json())
            .then((data) => setCountriesGeo(data));
    }, []);

    useEffect(() => {
        const altitude = isDesktop ? 2.2 : 4.4; 
        if (globeRef.current) {
            globeRef.current.pointOfView({ lat: 40, lng: 10, altitude: altitude }, 1000);
            globeRef.current.controls().autoRotate = true;
            globeRef.current.controls().autoRotateSpeed = 0.5;
        }
    }, [theme]);

    // Definim el material personalitzat per a la superfície de la terra (el mar)
    const customGlobeMaterial = new THREE.MeshPhongMaterial({
        color: theme === "dark" ? "#173c70" : "#cae8ff", // Blau marí fosc en dark, blau cel clar en light
        shininess: 0.7
    });

    return (
        <div className={`globe-wrapper ${theme}`} style={{ position: "relative", width: "100%", height: "500px" }}>
            <Globe
                key={theme}
                ref={globeRef}
                globeMaterial={customGlobeMaterial} // Assignem el material del mar aquí
                backgroundColor="rgba(0,0,0,0)" // Fons transparent per al contenidor
                
                polygonsData={countriesGeo.features}
                polygonCapColor={(d) => {
                    const iso = getCountryISO(d.properties);
                    const isVisited = visitedISO.includes(iso);
                    if (isVisited) return "rgb(148, 105, 45)";
                    return theme === "dark" 
                        ? "rgb(30, 30, 30)" 
                        : "rgb(255, 255, 255)"; // Països en blanc/gris clar
                }}
                polygonSideColor={() => "rgb(20, 20, 20)"}
                polygonStrokeColor={(d) => {
                    const iso = getCountryISO(d.properties);
                    const isVisited = visitedISO.includes(iso);
                    if (isVisited) return "#94692d";
                    return theme === "dark" ? "#444444" : "#a0a0a0";
                }}

                polygonAltitude={0.005}
                polygonLabel={({ properties: d }) => {
                    const iso = getCountryISO(d);
                    return `
                        <div style="
                            background: ${theme === "dark" ? "#000000" : "#ffffff"}; 
                            color: ${theme === "dark" ? "#ffffff" : "#000000"}; 
                            padding: 6px 12px; 
                            border-radius: 6px; 
                            border: 1px solid #94692d; 
                            font-family: sans-serif;
                        ">
                            <b>${d.NAME || d.ADMIN}</b> ${visitedISO.includes(iso) ? " (Visited)" : ""}
                        </div>
                    `;
                }}
            />
        </div>
    );
}