import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <header>
            <nav>
                <Link to='/home'>HOME</Link>
                <Link to='/reviews'>REVIEWS</Link>
                <Link to='/dashboard'>DASHBOARD</Link>
                <Link to='/blogs'>BLOGS</Link>
                <Link to='/about'>ABOUT</Link>
            </nav>
        </header>
    );
};

export default NavigationBar;