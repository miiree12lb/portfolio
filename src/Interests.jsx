import React from "react";
import { useMediaQuery } from "react-responsive";
import "./css/interests.css";
import TravelGlobe from "./TravelGlobe";
import QuotesCarousel from "./QuotesCarousel";
import SongList from "./SongList";
import ResourcesSection from "./ResourcesSection";

import bohemianRhapsodyImage from "./assets/music/img/Bohemian.png";
import ComoTeAtrevesImage from "./assets/music/img/ComoTeAtreves.png";
import leaveImage from "./assets/music/img/Leave.png";
import ceSoirImage from "./assets/music/img/ceSoir.png";
import noVullImage from "./assets/music/img/noVull.png";
import vivaLaVidaImage from "./assets/music/img/vivaLaVida.png";
import surMaRouteImage from "./assets/music/img/surMaRoute.png";
import seguiremBallantImage from "./assets/music/img/seguiremBallant.png";
import unwrittenImage from "./assets/music/img/unwritten.png";
import seremMesFortsImage from "./assets/music/img/seremMesForts.png";
import conquistarImage from "./assets/music/img/conquistar.png";
import onDiraitImage from "./assets/music/img/onDirait.png";
import goneImage from "./assets/music/img/gone.png";
import enemyImage from "./assets/music/img/enemy.png";
import littleHollywoodImage from "./assets/music/img/littleHollywood.png";
import laGentImage from "./assets/music/img/laGent.png";
import quanImage from "./assets/music/img/quan.png";

import pcpp from "./assets/images/memes/c++_python.png";
import dualitat_patro from "./assets/images/memes/dualitat_patro.png";
import forces from "./assets/images/memes/forces.png";
import identity_matrix from "./assets/images/memes/identityMatrix.png";
import cat from "./assets/images/memes/schrodingers_cat.png";
import stack from "./assets/images/memes/stack_overflow.png";
import string_theory from "./assets/images/memes/string_theory.png";
import time_relativity from "./assets/images/memes/time_relativity.png";
import os from "./assets/images/memes/OS.png";
import physics_laws from "./assets/images/memes/physics_laws.png";
import pie from "./assets/images/memes/i_ate_some_pie.png";

export default function Interests ({theme}) {
    let songs = [
        {title: "Bohemian Rhapsody", artist: "Queen", url: "https://music.youtube.com/watch?v=5nEqVuBkEjg&si=cXqi1zL6ylueopvw&drli=1", image: bohemianRhapsodyImage},
        {title: "Leave Her Wild", artist: "Tyler Rich", url: "https://music.youtube.com/watch?v=Q2KQp367ljg&si=YzXoHULyjrO-NYhd", image: leaveImage},
        {title: "Quan Cau el Sol", artist: "Txarango", url: "https://music.youtube.com/watch?v=gdirO-27rz4&si=fsugXQDievSYvPim", image:quanImage},
        {title: "Little Hollywood", artist: "Alle Farben, Janiek", url: "https://music.youtube.com/watch?v=dkjqekm-Vyw&si=BsWMF9ZTNyWzMxnk", image: littleHollywoodImage},
        {title: "La Gent Que Estimo", artist: "Oques Grasses, Rita Payés", url: "https://music.youtube.com/watch?v=pCViWKL6T_Q&si=qxTgGmLr-sl3u255", image: laGentImage},
        {title: "Cómo Te Atreves", artist: "Morat", url: "https://music.youtube.com/watch?v=oUiOCbJz7q0&si=UvERDrSULlWfhp4C&drli=1", image: ComoTeAtrevesImage}, 
        {title: "Ce soir", artist: "SARA'H", url: "https://music.youtube.com/watch?v=6Kbzbf-dWXI&si=f0k1AXxxDe4YZcuB", image: ceSoirImage},
        {title: "No Vull Despertar", artist: "Edu Esteve", url: "https://music.youtube.com/watch?v=y4vf2diiH08&si=1VifrhsQavhpD9qA", image: noVullImage},
        {title: "Gone, Gone, Gone", artist: "Phillip Phillips", url: "https://music.youtube.com/watch?v=L4FZjlxtNtE&si=RPsS-H0QZjvLm9ke&drli=1", image: goneImage},
        {title: "Enemy", artist: "Sandro Cavazza", url: "https://music.youtube.com/watch?v=_pbByGqjN_0&si=c_TOnc2G3c9i8oiO", image: enemyImage},
        {title: "Home", artist: "Phillip Phillips", url: "https://music.youtube.com/watch?v=9Fxfzqn--GU&si=IMsUIJTJKnqFXTsq&drli=1", image: goneImage},
        {title: "Viva La Vida", artist: "Coldplay", url: "https://music.youtube.com/watch?v=ALsvdSA9tOU&si=PcYpA-5WEIrSYeRx", image: vivaLaVidaImage},
        {title: "Sur ma route", artist: "Black M", url: "https://music.youtube.com/watch?v=EVdY7LrcZgE&si=HezlQ2PkXgdT55tM", image:surMaRouteImage},
        {title: "Seguirem Ballant", artist: "Doctor Prats, Stay Homas", url: "https://music.youtube.com/watch?v=cTDpDHm8A7Q&si=AZ0rIrlsYqTaQx-r", image: seguiremBallantImage},
        {title: "Unwritten", artist: "Natasha Bedingfield", url: "https://music.youtube.com/watch?v=iKejQrGq04w&si=Nq939l4a4FdUsYxW&drli=1", image: unwrittenImage},
        {title: "Serem més forts", artist: "Miki Núñez", url: "https://music.youtube.com/watch?v=M_q2KVEB8XY&si=vhCHiS6BGxsg0CXb&drli=1", image: seremMesFortsImage},
        {title: "Conquistar El Planeta", artist: "TIMØ, Andrés Cepeda", url: "https://music.youtube.com/watch?v=d5gmV_WETCg&si=VvITnVrVKmasEX7e", image: conquistarImage},
        {title: "On Dirait", artist: "Amir", url: "https://music.youtube.com/watch?v=33HsYEs2PsI&si=r6iMJ6d4wM1wKSt1&drli=1", image: onDiraitImage},
        {title: "Elefants", artist: "Oques Grasses", url: "https://music.youtube.com/watch?v=YVXaSiroAA8&si=fbyVprbx6RvMMdWP", image: laGentImage},
    ];

    const memes = [pcpp, stack, time_relativity, dualitat_patro, forces, pie, os, identity_matrix, cat, string_theory, physics_laws];

    const isDesktop = useMediaQuery({ query: "(min-width: 951px)" });

    return (<>
        <div className="interests-page">
            <header className="interests-header">
                <h1>Beyond Tech</h1>
                <p className="sub-header">A glimpse into my travels, music taste, favorite quotes, and resources.</p>
            </header>

            <section className="travel-section">
                <h2>Visited Countries</h2>
                <TravelGlobe theme={theme}/>
            </section>

            <section className="music-section">
                <h2>Music</h2>
                <SongList songs={songs} />
            </section>

            <section className="quotes-section">
                <h2>Quotes</h2>
                <QuotesCarousel />
            </section>

            <section className="resources-section">
                <h2>Resources & Cool Nerdy Memes</h2>
                <ResourcesSection memes={memes} isDesktop={isDesktop} />
            </section>
        </div>
            
    </>)
}