import React from 'react'
import './css/Footer.css'
import facebook from './svg/facebook-brands.svg'
import twitter from './svg/twitter-brands.svg'
import instagram from './svg/instagram-brands.svg'
import telegram from './svg/telegram-brands.svg'


export default function Footer() {
    return (
        <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">Web design</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Hosting</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>Company Name</h3>
                            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                        </div>
                        <div className="col item social">
                            <a href="http://www.google.com" style={{ filter: "brightness(0) invert(1)" }} target="_blank" rel="noreferrer"><img src={facebook} alt="" width="30" /></a>
                            <a href="http://www.twitter.com" style={{ filter: "brightness(0) invert(1)" }} target="_blank" rel="noreferrer"><img src={twitter} alt="" width="30" /></a>
                            <a href="http://www.instagram.com" style={{ filter: "brightness(0) invert(1)" }} target="_blank" rel="noreferrer"><img src={instagram} alt="" width="30" /></a>
                            <a href="https://web.telegram.org/" style={{ filter: "brightness(0) invert(1)" }} target="_blank" rel="noreferrer"><img src={telegram} alt="" width="30" /></a>
                        </div>
                    </div>
                    <p className="copyright">
                        Company Name &copy; {new Date().getFullYear()}
                    </p>
                </div>
            </footer>
        </div>
    )
}
