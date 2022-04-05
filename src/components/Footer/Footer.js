import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <h1>CAMERA WORLD</h1>
            <p>Copyright &copy;2022 CAMERA WORLD</p>
            <small>All rights reserved</small><br />
            <div className='social-icon-container'>
                <FontAwesomeIcon className='icon' icon={faFacebook} />
                <FontAwesomeIcon className='icon' icon={faTwitter} />
                <FontAwesomeIcon className='icon' icon={faGithub} />
                <FontAwesomeIcon className='icon' icon={faLinkedin} />
            </div>
        </footer>
    );
};

export default Footer;