import React, { useState, useEffect } from 'react';
import '../css/ContactUs.css'

function ContactUs() {
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
            <div className="contactHeader">
                <div className="image"></div>
                <p>Contact Us</p>
            </div>
            <main>
                <div className="text-left">
                    <h3>Customer Care</h3>
                    <p>If you need help placing an order, tracking your delivery or arranging an exchange, we’re here to help.</p>
                    <p>Email us at <a href="http://gmail.com" target="_blank">customercare@net-a-porter.com</a></p>
                    <p>You can also contact us via LiveChat. Find us in the bottom right hand corner of the screen when we're available to chat.</p>
                    <h3>Fashion Consultants</h3>
                    <p>Looking to refresh your closet or add the finishing touch to an outfit? Contact our expert Fashion Consultants for assistance.</p>
                    <p>Email us at <a href="http://gmail.com" target="_blank">fashionconsultant@net-a-porter.com</a></p>
                    <p>Call us on <b>0800 044 5701</b> from the United Kingdom, or <b>+44 330 022 5701</b> internationally.</p>
                </div>
                <div className="text-right">
                    <h3>Need help?</h3> <br />
                    <p>We're available 24/7 and speak over 14 languages</p>
                    <p>Call us on <b>+44 330 022 5700</b></p>
                </div>
            </main>
        </div>
    )
}

export default ContactUs
