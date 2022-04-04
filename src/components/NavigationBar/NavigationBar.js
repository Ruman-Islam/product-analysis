import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../images/logo.png'
import './NavigationBar.css';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav>
            <div>
                <Link to='/'> <img src={logo} alt="" /></Link>
            </div>
            <ul className='navigations'>
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