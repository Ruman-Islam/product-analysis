import React from 'react';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import './Homepage.css';

const Homepage = () => {
    return (
        <>
            <Banner /><br />
            <Reviews isHome />
        </>
    );
};

export default Homepage;