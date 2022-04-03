import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <header className='container'>
            <nav>
                <ul className='navigations'>
                    <li><CustomLink to='/home'>HOME</CustomLink></li>
                    <li><CustomLink to='/reviews'>REVIEWS</CustomLink></li>
                    <li><CustomLink to='/dashboard'>DASHBOARD</CustomLink></li>
                    <li><CustomLink to='/blogs'>BLOGS</CustomLink></li>
                    <li><CustomLink to='/about'>ABOUT</CustomLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default NavigationBar;