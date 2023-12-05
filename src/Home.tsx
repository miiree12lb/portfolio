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



export default function Home(){
    const travel_images = [ny2, stonhenge, zadar, ny, athens, croatia, zagreb, hp, rome];
    const football_images = [foot1, foot2, foot3, foot4];
    const science_images = [tech1];
    const memes = [pcpp, dualitat_patro, forces, identity_matrix, cat];
    const quotes = [
        { text: 'Everybody\'s a genius. But if you judge a fish by its ability to climb a tree, it will live its whole  life believing that it is stupid.', author: 'Albert Einstein' },
        { text: 'No és el pas del temps qui et porta a créixer són els seus cops.', author: 'Txarango' },
        { text: 'On ne voit bien qu\'avec le coeur. L\'essentiel est invisuble pour les yeux.', author: 'Antoine de Saint-Exupéry' },
        { text: 'Hay cosas encerradas dentro de los muros que, si salieran de pronto a la calle y gritaran, llenarían el mundo.', author: 'Federico García Lorca'}
    ];

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
                    <div className="big_slider">
                        <ImageSlider
                            width={500}
                            height={362}
                            images={science_images}
                            showBullets={true}
                            showNavs={true}
                        />
                    </div>
                    <div className="small_slider">
                        <ImageSlider
                            width={300}
                            height={217}
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
                    <div className="big_slider">
                        <ImageSlider
                            width={500}
                            height={362}
                            images={travel_images}
                            showBullets={true}
                            showNavs={true}
                        />
                    </div>
                    <div className="small_slider">
                        <ImageSlider
                            width={300}
                            height={217}
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
                    <div className="big_slider">
                        <ImageSlider
                            width={500}
                            height={362}
                            images={football_images}
                            showBullets={true}
                            showNavs={true}
                        />
                    </div>
                    <div className="small_slider">
                        <ImageSlider
                            width={300}
                            height={217}
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
                    <h3>Cool Nerdy Memes</h3>
                    <ImageSlider
                        width={300}
                        height={300}
                        images={memes}
                        showBullets={true}
                        showNavs={true}
                    />
                </div>
            </div>
        </div>


        <div className="section" id='quotes'>
            <h2>Quotes</h2>
            <div>
                <QuoteSlideshow quotes={quotes}/>
            </div>
        </div>
    </>
}