import React, { useState, useContext } from "react";
import ImageSlider from "react-simple-image-slider";
// @ts-ignore
import "./css/root.css";
// @ts-ignore
import "./css/about.css";
// @ts-ignore
import QuoteSlideshow from "./QuoteSlideshow.tsx";
// @ts-ignore
import ny from "./assets/images/travel/ny.png";
// @ts-ignore
import ny2 from "./assets/images/travel/ny2.png";
// @ts-ignore
import athens from "./assets/images/travel/athens.png";
// @ts-ignore
import croatia from "./assets/images/travel/croatia.png";
// @ts-ignore
import zagreb from "./assets/images/travel/zagreb.png";
// @ts-ignore
import zadar from "./assets/images/travel/zadar.png";
// @ts-ignore
import hp from "./assets/images/travel/hp.png";
// @ts-ignore
import stonhenge from "./assets/images/travel/stonhenge.png";
// @ts-ignore
import rome from "./assets/images/travel/rome.PNG";
// @ts-ignore
import pcpp from "./assets/images/memes/c++_python.png";
// @ts-ignore
import dualitat_patro from "./assets/images/memes/dualitat_patro.png";
// @ts-ignore
import forces from "./assets/images/memes/forces.png";
// @ts-ignore
import identity_matrix from "./assets/images/memes/identityMatrix.png";
// @ts-ignore
import cat from "./assets/images/memes/schrodingers_cat.png";
// @ts-ignore
import foot1 from "./assets/images/football/foot1.png";
// @ts-ignore
import foot2 from "./assets/images/football/foot2.png";
// @ts-ignore
import foot3 from "./assets/images/football/foot3.png";
// @ts-ignore
import foot4 from "./assets/images/football/foot4.png";
// @ts-ignore
import tech1 from "./assets/images/tech/tech1.png";
// @ts-ignore
import stack from "./assets/images/memes/stack_overflow.png";
// @ts-ignore
import string_theory from "./assets/images/memes/string_theory.png";
// @ts-ignore
import time_relativity from "./assets/images/memes/time_relativity.png";
// @ts-ignore
import os from "./assets/images/memes/OS.png";
// @ts-ignore
import physics_laws from "./assets/images/memes/physics_laws.png";
// @ts-ignore
import pie from "./assets/images/memes/i_ate_some_pie.png";
import useScreenWidth from "./useScreenWidth.tsx";
import { useMediaQuery } from "react-responsive";
import SongList from "./SongList.tsx";
// @ts-ignore
import bohemianRhapsody from "./assets/music/Queen - Bohemian Rhapsody (HQ).mp3";
// @ts-ignore
import bohemianRhapsodyImage from "./assets/music/img/Bohemian.png";
// @ts-ignore
import comoTeAtreves from "./assets/music/Morat - Cómo te atreves.mp3";
// @ts-ignore
import ComoTeAtrevesImage from "./assets/music/img/ComoTeAtreves.png";
// @ts-ignore
import leave from "./assets/music/Leave Her Wild.mp3";
// @ts-ignore
import leaveImage from "./assets/music/img/Leave.png";
// @ts-ignore
import ceSoir from "./assets/music/SARA'H - Ce Soir.mp3";
// @ts-ignore
import ceSoirImage from "./assets/music/img/ceSoir.png";
// @ts-ignore
import noVull from "./assets/music/Edu Esteve - No Vull Despertar.mp3";
// @ts-ignore
import noVullImage from "./assets/music/img/noVull.png";
// @ts-ignore
import vivaLaVida from "./assets/music/Coldplay - Viva La Vida (Official Video).mp3";
// @ts-ignore
import vivaLaVidaImage from "./assets/music/img/vivaLaVida.png";
// @ts-ignore
import surMaRoute from "./assets/music/Black M - Sur ma route (Audio).mp3";
// @ts-ignore
import surMaRouteImage from "./assets/music/img/surMaRoute.png";
// @ts-ignore
import seguiremBallant from "./assets/music/Doctor Prats - Seguirem Ballant (amb Stay Homas).mp3";
// @ts-ignore
import seguiremBallantImage from "./assets/music/img/seguiremBallant.png";
// @ts-ignore
import unwritten from "./assets/music/Unwritten (Audio) -Natasha Bedingfield-.mp3";
// @ts-ignore
import unwrittenImage from "./assets/music/img/unwritten.png";
// @ts-ignore
import seremMesForts from "./assets/music/Serem més forts.mp3";
// @ts-ignore
import seremMesFortsImage from "./assets/music/img/seremMesForts.png";
// @ts-ignore
import conquistar from "./assets/music/TIMØ, Andrés Cepeda - Conquistar El Planeta (Cover Audio).mp3";
// @ts-ignore
import conquistarImage from "./assets/music/img/conquistar.png";

export default function Home(){
    const travel_images = [ny2, stonhenge, zadar, ny, athens, croatia, zagreb, hp, rome];
    const football_images = [foot1, foot2, foot3, foot4];
    const science_images = [tech1];
    const memes = [pcpp, stack, time_relativity, dualitat_patro, forces, pie, os, identity_matrix, cat, string_theory, physics_laws];
    const quotes = [
        { text: 'Everybody\'s a genius. But if you judge a fish by its ability to climb a tree, it will live its whole  life believing that it is stupid.', author: 'Albert Einstein' },
        { text: 'No és el pas del temps qui et porta a créixer són els seus cops.', author: 'Txarango' },
        { text: 'On ne voit bien qu\'avec le coeur. L\'essentiel est invisuble pour les yeux.', author: 'Antoine de Saint-Exupéry' },
        { text: 'Hay cosas encerradas dentro de los muros que, si salieran de pronto a la calle y gritaran, llenarían el mundo.', author: 'Federico García Lorca'}
    ];
    let songs = [
        {title: "Bohemian Rhapsody", artist: "Queen", url: "https://open.spotify.com/track/3z8h0TU7ReDPLIbEnYhWZb?si=bf73450581c4489d", source: bohemianRhapsody, image: bohemianRhapsodyImage},
        {title: "Cómo Te Atreves", artist: "Morat", url: "https://open.spotify.com/track/7M6CFruBrM5x7u0lTMtm6r?si=8e979cda8fc94772", source: comoTeAtreves, image: ComoTeAtrevesImage}, 
        {title: "Leave Her Wild", artist: "Tyler Rich", url: "https://open.spotify.com/track/4oFAJvXFB2W9FWgaww9cQo?si=9862d79d38d24601", source: leave, image: leaveImage},
        {title: "Ce soir", artist: "SARA'H", url: "https://open.spotify.com/track/3PUFEO6InFkkgELheBXrxj?si=cf7843f1d3f54e39", source: ceSoir, image: ceSoirImage},
        {title: "No Vull Despertar", artist: "Edu Esteve", url: "https://open.spotify.com/track/6sIGc1jYieV0itiLYrtD4I?si=8b09285feecf4aae", source: noVull, image: noVullImage},
        {title: "Viva La Vida", artist: "Coldplay", url: "https://open.spotify.com/track/1mea3bSkSGXuIRvnydlB5b?si=12c5d58d70eb4c5d", source: vivaLaVida, image: vivaLaVidaImage},
        {title: "Sur ma route", artist: "Black M", url: "https://open.spotify.com/track/3Uyt0WO3wOopnUBCe9BaXl?si=9cc7b8bec46f4c08", source: surMaRoute, image:surMaRouteImage},
        {title: "Seguirem Ballant", artist: "Doctor Prats, Stay Homas", url: "https://open.spotify.com/track/0pJeLEo1VhKasaEfNZiLG6?si=09ad63a0200d4dd6", source: seguiremBallant, image: seguiremBallantImage},
        {title: "Unwritten", artist: "Natasha Bedingfield", url: "https://open.spotify.com/track/3U5JVgI2x4rDyHGObzJfNf?si=227203f433ed4511", source: unwritten, image: unwrittenImage},
        {title: "Serem més forts", artist: "Miki Núñez", url: "https://open.spotify.com/track/33hasXzBCCcUDHNT7DqlE6?si=ed196425f1234a76", source: seremMesForts, image: seremMesFortsImage},
        {title: "Conquistar El Planeta", artist: "TIMØ, Andrés Cepeda", url: "https://open.spotify.com/track/6cOGBvdT0RY3UUtEP7vRHs?si=410c56ab8a544581", source: conquistar, image: conquistarImage},
    ];
    const screenWidth = useScreenWidth();
    const isDesktop = useMediaQuery({ query: "(min-width: 801px)" });
    const bigMemes = useMediaQuery({ query: "(min-width: 951px)" });

    function assignSongIds(songs) {
        return songs.map((song, id) => ({ ...song, id }));
    }

    songs = assignSongIds(songs);


    return <>
        <h1>About me</h1>
        <p>
            My name is Mireia Lopez Bruch and I was born and raised in Barcelona, although I am now pursuing a degree in Technical Computer Science in the Netherlands. 
            From a very young age, I have been interested in the STEM subjects and I am highly motivated to engage in opportunities that allow me to develop my knowledge 
            and passion for science and technology further. I also really enjoy playing football and I am a very curious person that is always seeking to discover new things, people and especially places and cultures, that's is why I really love traveling around 
            the world. In this page you will find information about my interests, education, and experience.
        </p>

        <div className="section" id='science'>
            <h2>Science & Technology</h2>
            <div className="flex">
                <div className="text_container">
                    <p>
                        I have always been interested in STEM subjects and had a great passion for computer science and programming. This passion has enhanced my curiosity 
                        to expand my knowledge and to better understand my environment, by asking myself questions and looking for the answers. The more answers I find, 
                        the more questions I ask myself.
                    </p>
                    <p>
                        I started to program at school when I was 11 with Scratch. Since the first day, I have known that I really like to program. Since then, I have programmed with eseeCode, C, C++, Java, Python, Html, CSS, and a little bit of JavaScript. I have participated in several olympiads in Catalonia and Spain:
                        <ul>
                            <li><a href="https://olimpiada-informatica.cat/"> OICat:</a> Catalan Informatics Olympiad</li>
                            <li><a href="https://olimpiada-informatica.org/"> OI:</a> Spanish Informatics Olympiad</li>
                            <li><a href="https://oifem.es/"> OIFem:</a> Spanish Women's Informatics Olympiad</li>
                            <li><a href="https://sites.google.com/aldini.istruzioneer.it/iiot"> IIOT:</a> International Informatics Olympiad in Teams</li>
                        </ul>
                    </p>
                </div>
                <div className="image_slider_container">
                    <div>
                        <ImageSlider
                            width= {`${isDesktop ? 40 : 80}vw`}
                            height={isDesktop ? (screenWidth * 40 * 362)/(500 * 100) : (screenWidth * 80 * 362)/(500 * 100)}
                            images={science_images}
                            showBullets={true}
                            showNavs={true}
                        />
                    </div>
                </div>
            </div>
        </div>

        <div id="languages">
            <h2>Languages</h2>
            <ul>
                <li><b>Catalan:</b> Native level</li>
                <li><b>Spanish:</b> Native level</li>
                <li><b>English:</b> Fluent level</li>
                <li><b>French:</b> Intermediate level (B2)</li>
            </ul>
        </div>

        <div className="section" id="travel">
            <h2>Traveling</h2>
            <div className="flex">
                <div className="image_slider_container">
                    <div>
                        <ImageSlider
                            width= {`${isDesktop ? 40 : 80}vw`}
                            height={isDesktop ? (screenWidth * 40 * 362)/(500 * 100) : (screenWidth * 80 * 362)/(500 * 100)}
                            images={travel_images}
                            showBullets={true}
                            showNavs={true}
                        />
                    </div>
                </div>
                <div className="text_container">
                    <p>
                        One of the things I enjoy the most is traveling around the world, to mmet new people, cultures and perspectives to see the
                        world. I started traveling with my family at a very young age and since them I have had the opportunity to visit more than 20
                        countries in 3 different continents (Europe, America and Asia).
                    </p>

                    <p>
                        I have traveled as a tourist but also as a student to conduct scientific research in the US and in the UK, as well my 
                        college degree that I am currently studying in the Netherlands. Every single one of these adventures has been very enriching.
                    </p>

                    <p>
                        Traveling alone has helped me become much more independent, to take things calmly and put problems into perspective. 
                        Every scare has become a fun anecdote and a learning experience.
                    </p>

                    <p>
                        Thanks to all these trips I have had the opportunity to meet people from all around the world, work with them, 
                        share our different cultures and ways of understanding the world. Which has helped me be much more open minded.
                    </p>
                </div>
            </div>
        </div>

        <div className="section" id="football">
            <h2>Football</h2>
            <div className="flex">
                <div className="text_container">
                    <p>
                        Being active is also very important to me, while growing up, I had the opportunity to try out several sports: Tennis, Basketball, Football, and Padel. 
                        I also really enjoy walking in the city or hiking in the mountain, breathing fresh air and enjoy nature.
                    </p>

                    <p>
                        My favorite sport is football and I played in federated teams for 7 years, in different clubs:
                        <ul>
                            <li>Futbol Club Martinenc</li>
                            <li>Unió Esportiva Sants</li>
                            <li>Women's Soccer School</li>
                        </ul>
                        Being in those teams has taught me the importance of team work, helping each other, being communicative and how to deal with conflict. It has
                        also allowed me to meet people with similar interests and to make some friends over the years.
                    </p>
                </div>
                <div className="image_slider_container">
                    <div>
                        <ImageSlider
                            width= {`${isDesktop ? 40 : 80}vw`}
                            height={isDesktop ? (screenWidth * 40 * 362)/(500 * 100) : (screenWidth * 80 * 362)/(500 * 100)}
                            images={football_images}
                            showBullets={true}
                            showNavs={true}
                        />
                    </div>      
                </div>
            </div>
        </div>

        <div className="section" id='channels'>
            <h2>Interesting chanels</h2>
            <div id="interesting">
                <div id="youtube" className="content">
                    <h3>Youtube Channels</h3>
                    <ul>
                        <li><a href="https://www.youtube.com/@QuantumFracture">QuantumFracture</a></li>
                        <li><a href="https://www.youtube.com/@dateunvlog">Date un Vlog</a></li>
                        <li><a href="https://www.youtube.com/@cs50">CS50 (CS from Harvard)</a></li>
                        <li><a href="https://www.youtube.com/@Derivando">Derivando</a></li>
                        <li><a href="https://www.youtube.com/@veritasium">Veritasium</a></li>
                    </ul>
                </div>
                
                
                <div id="code" className="content">
                    <h3>Webs/courses to learn how to code</h3>
                    <ul>
                        <li><a href="https://jutge.org/">Jutge.org</a></li>
                        <li><a href="https://www.hackerrank.com/">HackerRank</a></li>
                        <li><a href="https://www.edx.org/school/harvardx">CS50 from HardvardX on edX</a></li>
                        <li><a href="https://www.w3schools.com/">W3Schools</a></li>
                        <li><a href="https://www.geeksforgeeks.org/">GeeksForGeeks</a></li>
                        <li><a href="https://stackoverflow.com/">StackOverflow</a></li>
                    </ul>
                </div>

                
                <div id="memes" className="content">
                    <div>
                        <h3>Cool Nerdy Memes</h3>
                        <ImageSlider
                            width={`${bigMemes ? 20 : 70}vw`}
                            height={`${bigMemes ? 20 : 70}vw`}
                            images={memes}
                            showBullets={true}
                            showNavs={true}
                        />
                    </div>
                </div>
            </div>
        </div>

        <SongList songs={songs}/>


        <div className="section" id='quotes'>
            <h2>Quotes</h2>
            <div>
                <QuoteSlideshow quotes={quotes}/>
            </div>
        </div>
    </>
}