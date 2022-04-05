import React from 'react';
import mainCamera from '../../images/photography-clipart-camera-logo-pencil-color-6.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container container'>
            <div className='banner-left'>
                <h1>Grab your <br /><span className='banner-left-second-title'>next</span> CAMERA</h1>
                <p>The X-T 10 is a brand of digital SLR designed and marketed by FUJIFILM Inc. That use FUJIFILM's nano technology since 2012. It replaced the SLR and tornado the world, announced in 2012.</p>
                <button className='primary-button'>BUY NOW</button>
            </div>
            <div className='banner-right'>
                <img src={mainCamera} alt="" />
            </div>
        </div>
    );
};

export default Banner;