import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer ">
            <div className="footer-columns">
                <div className="footer-column">
                    <h3>GoodStore</h3>
                    <ul>
                        <li>No lines,</li>
                        <li>no crowds,</li>
                        <li>just shopping bliss!</li>
                        <div className="chocolate-icons-container">
                          <a href='https://tn.linkedin.com/company/goodwill-consulting-sage'> <FontAwesomeIcon icon={faLinkedin} beat /></a>
                           <a href='https://www.facebook.com/goodwillconsulting.sage/' ><FontAwesomeIcon icon={faFacebook} /></a>
                            <FontAwesomeIcon icon={faWhatsapp} style={{color: "#25cc0f",}} />
                        </div>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Quick test</h3>
                    <ul>
                        <li>Shoppie</li>
                        <li>ExploreNow</li>
                        <li>Login</li>
                        <li>Cart</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Quick Link</h3>
                    <ul>
                        <li>FAQ'S</li>
                        <li>Privacy policy</li>
                        <li>Terms and conditions</li>
                        <li>Support</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Contact Us</h3>
                    <ul>
                        <a href='https://www.google.com/maps/dir//Tunis/@36.8461685,10.1185669,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12fd3590bac11a2d:0x65fd0c08749d3765!2m2!1d10.20094!2d36.8461983?entry=ttu'><li>Adresse : Tunis 
                        </li></a>
                        <li>Téléphone : 71 948 495</li>
                    </ul>
                </div>
            </div>
            <div className="footer-underline"></div>
            <div className="footer-bottom">
                <p>Copyright @ www.GoodWill.com </p>
            </div>
        </div>
    );
};

export default Footer;