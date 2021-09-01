import React, { useState, useEffect } from 'react';
import '../css/About.css'

function About() {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const handleUpButton = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div>
            <div className="onTop">
                <button
                    className={scroll < 300 ? "" : "show"}
                    onClick={handleUpButton}>
                    Go Up
            </button>
            </div>
            <header>
                <div className="image"></div>
                <p>Welcome to Store</p>
            </header>
            <main>
                <div>
                    <h2>About us</h2>
                </div>
                <div className="text-left">
                    <p>Since its launch in June 2000, NET‑A‑PORTER has delivered incredible fashion for incredible women. With more than 800 of the world’s most coveted designer brands, including Gucci, Chloe, Balenciaga, Saint Laurent, Isabel Marant, Prada, and Stella McCartney, 200 specialist beauty brands, and new arrivals on site three times a week, NET‑A‑PORTER is the world's premier luxury fashion destination.</p>
                    <p>A pioneer of innovation, NET‑A‑PORTER delivers the ultimate curation of product and content through its websites, shopping apps and the world of PORTER, speaking to a monthly audience of over 6 million via a global, multi-channel ecosystem and providing a seamless shopping experience across mobile, tablet and desktop.</p>
                    <p>NET‑A‑PORTER also champions unparalleled customer service, with express worldwide shipping to more than 170 countries (including same-day delivery to Manhattan, London and Hong Kong SAR, China, plus next-day delivery to the UK, US, Germany, France, Australia and Singapore), signature luxurious packaging, easy returns and multi-lingual Customer Care and Personal Shopping teams that are available 24/7, 365 days a year.</p>
                    <p>NET‑A‑PORTER is part of the YOOX NET‑A‑PORTER GROUP, following the merger of YOOX Group and THE NET‑A‑PORTER GROUP in October 2015. THE NET‑A‑PORTER GROUP LIMITED is a registered company in England & Wales (UK company number 382 0604). VAT registration number GB 243 0645 31.</p>
                </div>
                <div className="text-right">
                    <h4>1 The Village Offices <br />
                    Westfield London <br />
                    Ariel Way <br />
                    London <br />
                    W12 7GF <br />
                    United Kingdom</h4>
                </div>
            </main>
        </div>
    )
}

export default About
