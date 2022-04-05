import React from 'react';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import NavigationBar from '../NavigationBar/NavigationBar';
import './Homepage.css';

const Homepage = () => {
    return (
        <>
            <NavigationBar />
            <Banner /><br />
            <Reviews isHome />
        </>
    );
};

export default Homepage;