import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../images/logo.png'
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <nav className='container'>
            <div className='logo-container'>
                <img src={logo} alt="" /><h1>CAMERA WORLD</h1>
            </div>
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