import React from 'react';
import './Banner.css';
import mainCamera from '../../images/main-camera.png';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-left'>
                <h1>Your next camera</h1>
                <h1><span className='banner-left-second-title'>Your best camera</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fugit, mollitia nesciunt dolores laborum totam inventore molestiae repellendus labore ratione! Omnis quis.</p>
                <button className='live-demo-btn'>Live Demo</button>
            </div>
            <div className='banner-right'>
                <img src={mainCamera} alt="" />
            </div>
        </div>
    );
};

export default Banner;