import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../images/logo.png'
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <nav className='container'>
            <div className='logo-container'>
                <img src={logo} alt="" /><h5>CAMERA WORLD</h5>
            </div>
            <input type="checkbox" id="toggler" />
            <label className="nav-toggler-icon" htmlFor="toggler">
                <FontAwesomeIcon id='bar-icon' icon={faBars} />
            </label>
            <ul className='navigation'>
                <li><CustomLink to='/'>HOME</CustomLink></li>
                <li><CustomLink to='/dashboard'>DASHBOARD</CustomLink></li>
                <li><CustomLink to='/reviews'>REVIEWS</CustomLink></li>
                <li><CustomLink to='/blogs'>BLOGS</CustomLink></li>
                <li><CustomLink to='/about'>ABOUT</CustomLink></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;