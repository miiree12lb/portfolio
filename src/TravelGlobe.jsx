import React, { useState, useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import { Flag } from "react-svg-flag-kit";
import * as THREE from "three"; // Importem Three.js per definir el material del mar
import "./css/travelGlobe.css";

export default function TravelGlobe({ theme = "dark" }) {
    const globeRef = useRef();
    const [countriesGeo, setCountriesGeo] = useState({ features: [] });
    const [selectedCountry, setSelectedCountry] = useState(null);

    const visitedISO = [
        "USA", "ESP", "FRA", "ITA", "VAT", "DEU", "GBR",
        "BEL", "IRL", "NLD", "CHE", "NOR", "SWE", "TUR", "GRC",
        "HRV", "SVN", "LUX", "MCO", "AND", "PRT", "HUN", "CZE", "SVK", "AUT", "DNK",
        "CAN"
    ];

    const visitedDetails = {
        USA: { name: "United States", code: "US", year: "2022 (ESSYI, NY & M.A.C.S, WI)" },
        ESP: { name: "Spain", code: "ES", year: "Home" },
        FRA: { name: "France", code: "FR", year: "Travel" },
        ITA: { name: "Italy", code: "IT", year: "Travel" },
        VAT: { name: "Vatican City", code: "VA", year: "Travel" },
        DEU: { name: "Germany", code: "DE", year: "Travel" },
        GBR: { name: "United Kingdom", code: "GB", year: "2023 (Oxford)" },
        BEL: { name: "Belgium", code: "BE", year: "Travel" },
        IRL: { name: "Ireland", code: "IE", year: "Travel" },
        NLD: { name: "Netherlands", code: "NL", year: "2022 - 2026 (UTwente)" },
        CHE: { name: "Switzerland", code: "CH", year: "Travel" },
        NOR: { name: "Norway", code: "NO", year: "Travel" },
        SWE: { name: "Sweden", code: "SE", year: "Travel" },
        TUR: { name: "Turkey", code: "TR", year: "Travel" },
        GRC: { name: "Greece", code: "GR", year: "Travel" },
        HRV: { name: "Croatia", code: "HR", year: "Travel" },
        SVN: { name: "Slovenia", code: "SI", year: "Travel" },
        LUX: { name: "Luxembourg", code: "LU", year: "Travel" },
        MCO: { name: "Monaco", code: "MC", year: "Travel" },
        AND: { name: "Andorra", code: "AD", year: "Travel" },
        PRT: { name: "Portugal", code: "PT", year: "Travel" },
        HUN: { name: "Hungary", code: "HU", year: "Travel" },
        CZE: { name: "Czechia", code: "CZ", year: "Travel" },
        SVK: { name: "Slovakia", code: "SK", year: "Travel" },
        AUT: { name: "Austria", code: "AT", year: "Travel" },
        DNK: { name: "Denmark", code: "DK", year: "Travel" },
        CAN: { name: "Canada", code: "CA", year: "Travel" }
    };

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
        if (globeRef.current) {
            globeRef.current.pointOfView({ lat: 40, lng: 10, altitude: 2.2 }, 1000);
            globeRef.current.controls().autoRotate = true;
            globeRef.current.controls().autoRotateSpeed = 0.5;
        }
    }, [theme]);

    const handlePolygonClick = (polygon) => {
        const iso = getCountryISO(polygon.properties);
        if (visitedISO.includes(iso)) {
            setSelectedCountry(visitedDetails[iso]);
            const lng = polygon.properties.LABEL_X ?? 0;
            const lat = polygon.properties.LABEL_Y ?? 0;
            
            if (globeRef.current) {
                globeRef.current.pointOfView({ lat, lng, altitude: 1.8 }, 1000);
            }
        }
    };

    // Definim el material personalitzat per a la superfície de la terra (el mar)
    const customGlobeMaterial = new THREE.MeshPhongMaterial({
        color: theme === "dark" ? "#040d1a" : "#cae8ff", // Blau marí fosc en dark, blau cel clar en light
        shininess: 0.7
    });

    return (
        <div className={`globe-wrapper ${theme}`} style={{ position: "relative", width: "100%", height: "500px" }}>
            <Globe
                key={theme}
                ref={globeRef}
                globeMaterial={customGlobeMaterial} // Assignem el material del mar aquí
                backgroundColor="rgba(0,0,0,0)" // Fons transparent per al contenidor
                showAtmosphere={theme === "dark"}
                atmosphereColor="#3a228a"
                atmosphereAltitude={0.15}
                
                polygonsData={countriesGeo.features}
                polygonCapColor={(d) => {
                    const iso = getCountryISO(d.properties);
                    const isVisited = visitedISO.includes(iso);
                    if (isVisited) return "rgba(148, 105, 45, 0.95)";
                    return theme === "dark" 
                        ? "rgba(30, 30, 30, 0.8)" 
                        : "rgba(255, 255, 255, 0.9)"; // Països en blanc/gris clar
                }}
                polygonSideColor={() => "rgba(20, 20, 20, 0.15)"}
                polygonStrokeColor={(d) => {
                    const iso = getCountryISO(d.properties);
                    const isVisited = visitedISO.includes(iso);
                    if (isVisited) return "#94692d";
                    return theme === "dark" ? "#444444" : "#a0a0a0";
                }}
                polygonAltitude={(d) => (visitedISO.includes(getCountryISO(d.properties)) ? 0.04 : 0.005)}
                
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
                            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
                        ">
                            <b>${d.NAME || d.ADMIN}</b> ${visitedISO.includes(iso) ? " (Visited)" : ""}
                        </div>
                    `;
                }}
                onPolygonClick={handlePolygonClick}
            />

            {selectedCountry && (
                <div className="selected-country-card">
                    <button className="close-btn" onClick={() => setSelectedCountry(null)}>×</button>
                    <div className="country-flag">
                        <Flag country={selectedCountry.code} size={36} />
                    </div>
                    <h4>{selectedCountry.name}</h4>
                    <p>{selectedCountry.year}</p>
                </div>
            )}
        </div>
    );
}