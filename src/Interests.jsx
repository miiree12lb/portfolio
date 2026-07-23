import React from "react";
import { useMediaQuery } from "react-responsive";
import "./css/interests.css";
import TravelGlobe from "./TravelGlobe";
import QuotesCarousel from "./QuotesCarousel";
import SongList from "./SongList";
import ResourcesSection from "./ResourcesSection";

import bohemianRhapsody from "./assets/music/Queen - Bohemian Rhapsody (HQ).mp3";
import bohemianRhapsodyImage from "./assets/music/img/Bohemian.png";
import comoTeAtreves from "./assets/music/Morat - Cómo te atreves.mp3";
import ComoTeAtrevesImage from "./assets/music/img/ComoTeAtreves.png";
import leave from "./assets/music/Leave Her Wild.mp3";
import leaveImage from "./assets/music/img/Leave.png";
import ceSoir from "./assets/music/SARA'H - Ce Soir.mp3";
import ceSoirImage from "./assets/music/img/ceSoir.png";
import noVull from "./assets/music/Edu Esteve - No Vull Despertar.mp3";
import noVullImage from "./assets/music/img/noVull.png";
import vivaLaVida from "./assets/music/Coldplay - Viva La Vida (Official Video).mp3";
import vivaLaVidaImage from "./assets/music/img/vivaLaVida.png";
import surMaRoute from "./assets/music/Black M - Sur ma route (Audio).mp3";
import surMaRouteImage from "./assets/music/img/surMaRoute.png";
import seguiremBallant from "./assets/music/Doctor Prats - Seguirem Ballant (amb Stay Homas).mp3";
import seguiremBallantImage from "./assets/music/img/seguiremBallant.png";
import unwritten from "./assets/music/Unwritten (Audio) -Natasha Bedingfield-.mp3";
import unwrittenImage from "./assets/music/img/unwritten.png";
import seremMesForts from "./assets/music/Serem més forts.mp3";
import seremMesFortsImage from "./assets/music/img/seremMesForts.png";
import conquistar from "./assets/music/TIMØ, Andrés Cepeda - Conquistar El Planeta (Cover Audio).mp3";
import conquistarImage from "./assets/music/img/conquistar.png";
import onDirait from "./assets/music/Amir - On dirait (paroles).mp3";
import onDiraitImage from "./assets/music/img/onDirait.png";
import gone from "./assets/music/Phillip Phillips - Gone, Gone, Gone LYRICS.mp3";
import goneImage from "./assets/music/img/gone.png";
import home from "./assets/music/Home -  Phillip Phillips (The World from the Side of the Moon (Deluxe)).mp3";
import enemy from "./assets/music/Sandro Cavazza - Enemy (Audio).mp3";
import enemyImage from "./assets/music/img/enemy.png";
import littleHollywood from "./assets/music/Little Hollywood  Lyrics (Alle Farben feat. Janieck).mp3";
import littleHollywoodImage from "./assets/music/img/littleHollywood.png";
import laGent from "./assets/music/OQUES GRASSES - LA GENT QUE ESTIMO & Rita Payés.mp3";
import laGentImage from "./assets/music/img/laGent.png";
import elefants from "./assets/music/OQUES GRASSES - ELEFANTS.mp3";
import quan from "./assets/music/Txarango - Quan cau el sol (Audio Oficial) [ ezmp3.cc ].mp3";
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
        {title: "Bohemian Rhapsody", artist: "Queen", url: "https://music.youtube.com/playlist?list=OLAK5uy_kPmvbW7SIcqYc2_RHCnaOYtImxo5vnZTg&si=2j0SzadGRcGV-Ci5", source: bohemianRhapsody, image: bohemianRhapsodyImage},
        {title: "Leave Her Wild", artist: "Tyler Rich", url: "https://music.youtube.com/watch?v=Q2KQp367ljg&si=YzXoHULyjrO-NYhd", source: leave, image: leaveImage},
        {title: "Quan Cau el Sol", artist: "Txarango", url: "https://music.youtube.com/watch?v=gdirO-27rz4&si=fsugXQDievSYvPim", source: quan, image:quanImage},
        {title: "Little Hollywood", artist: "Alle Farben, Janiek", url: "https://music.youtube.com/watch?v=dkjqekm-Vyw&si=BsWMF9ZTNyWzMxnk", source: littleHollywood, image: littleHollywoodImage},
        {title: "La Gent Que Estimo", artist: "Oques Grasses, Rita Payés", url: "https://music.youtube.com/watch?v=pCViWKL6T_Q&si=qxTgGmLr-sl3u255", source: laGent, image: laGentImage},
        {title: "Cómo Te Atreves", artist: "Morat", url: "https://music.youtube.com/watch?v=pCViWKL6T_Q&si=qxTgGmLr-sl3u255", source: comoTeAtreves, image: ComoTeAtrevesImage}, 
        {title: "Ce soir", artist: "SARA'H", url: "https://music.youtube.com/watch?v=6Kbzbf-dWXI&si=f0k1AXxxDe4YZcuB", source: ceSoir, image: ceSoirImage},
        {title: "No Vull Despertar", artist: "Edu Esteve", url: "https://music.youtube.com/watch?v=y4vf2diiH08&si=1VifrhsQavhpD9qA", source: noVull, image: noVullImage},
        {title: "Gone, Gone, Gone", artist: "Phillip Phillips", url: "https://music.youtube.com/watch?v=y4vf2diiH08&si=1VifrhsQavhpD9qA", source: gone, image: goneImage},
        {title: "Enemy", artist: "Sandro Cavazza", url: "https://music.youtube.com/watch?v=_pbByGqjN_0&si=c_TOnc2G3c9i8oiO", source: enemy, image: enemyImage},
        {title: "Home", artist: "Phillip Phillips", url: "https://music.youtube.com/watch?v=_pbByGqjN_0&si=c_TOnc2G3c9i8oiO", source: home, image: goneImage},
        {title: "Viva La Vida", artist: "Coldplay", url: "https://music.youtube.com/watch?v=ALsvdSA9tOU&si=PcYpA-5WEIrSYeRx", source: vivaLaVida, image: vivaLaVidaImage},
        {title: "Sur ma route", artist: "Black M", url: "https://music.youtube.com/watch?v=EVdY7LrcZgE&si=HezlQ2PkXgdT55tM", source: surMaRoute, image:surMaRouteImage},
        {title: "Seguirem Ballant", artist: "Doctor Prats, Stay Homas", url: "https://music.youtube.com/watch?v=cTDpDHm8A7Q&si=AZ0rIrlsYqTaQx-r", source: seguiremBallant, image: seguiremBallantImage},
        {title: "Unwritten", artist: "Natasha Bedingfield", url: "https://music.youtube.com/watch?v=cTDpDHm8A7Q&si=AZ0rIrlsYqTaQx-r", source: unwritten, image: unwrittenImage},
        {title: "Serem més forts", artist: "Miki Núñez", url: "https://music.youtube.com/watch?v=cTDpDHm8A7Q&si=AZ0rIrlsYqTaQx-r", source: seremMesForts, image: seremMesFortsImage},
        {title: "Conquistar El Planeta", artist: "TIMØ, Andrés Cepeda", url: "https://music.youtube.com/watch?v=d5gmV_WETCg&si=VvITnVrVKmasEX7e", source: conquistar, image: conquistarImage},
        {title: "On Dirait", artist: "Amir", url: "https://music.youtube.com/watch?v=d5gmV_WETCg&si=VvITnVrVKmasEX7e", source: onDirait, image: onDiraitImage},
        {title: "Elefants", artist: "Oques Grasses", url: "https://music.youtube.com/watch?v=YVXaSiroAA8&si=fbyVprbx6RvMMdWP", source: elefants, image: laGentImage},
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