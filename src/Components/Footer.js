import React from 'react';
import { Link as ScrollLink} from "react-scroll";

import ContactForm from "./ContactFom";

export default function Footer() {
    return (
        <div className = "Footer">
            <svg preserveAspectRatio="none" viewBox="0 0 100 102" height = "10" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="Footer-top-points">
                <path d="M0 0 L50 100 L100 0 Z" fill="rgb(238, 238, 238)" stroke="rgb(238, 238, 238)"></path>
            </svg>
            <div className= "Footer-top">
                <ScrollLink className = "Footer-top-btn"
                to= "Homepage-landing"
                smooth={true}
                offset={-50}
                duration={500}
                ><i className="fas fa-arrow-up"></i>
                </ScrollLink>

                <ContactForm/>
            </div>
            <div className = "Footer-bottom">
                <div className = "Footer-icons-container">

                    <a className = "Footer-icon" href= "https://twitter.com/"  target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>

                    <a className = "Footer-icon" href= "https://facebook.com/"  target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    <a className = "Footer-icon" href= "https://github.com/"  target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>

                    <a className = "Footer-icon" href= "https://www.linkedin.com/"  target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>

                <div className = "Footer-text">@2020, Edgar Gonzalez</div>
            </div>
        </div>
    )
}
