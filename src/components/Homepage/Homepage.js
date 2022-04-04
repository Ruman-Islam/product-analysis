import React from 'react';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import './Homepage.css';

const Homepage = () => {

    return (
        <div>
            <Banner /><br />
            <Reviews isHomePage />
        </div>
    );
};

export default Homepage;