import React from 'react';
import './About.css';

const About = () => {
    return (
        <>
            <div className='about-container container'>
                <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>ABOUT US</h1>
                <div style={{ width: '100%' }}>
                    <small>
                        <p>CAMERA WORLD is the most premium & multi-branded omnichannel retail in Bangladesh. The journey started with a single outlet in the year 2011, and now in a 10-years timeframe, there are 23 premium outlets of G&G, all over Dhaka City. It's a renowned name to all, for their authenticity & top-notch quality. In 2017, CAMERA WORLD started working as Apple Authorised Reseller.</p><br />

                        <p>CAMERA WORLD  is a Hybrid now, as we are operating through a fully functioning e-commerce site, as well as the other online social media platforms: Facebook, WhatsApp, Instagram & LinkedIn.</p><br />

                        <h2> Contact info</h2>
                        <p> For any kind of query please mail us <span style={{ color: 'orange' }}>support@cameraworld.com</span> . Or contact with our <strong>Hotline number 0967-8666777 (Available 9.00 AM to 8.00 PM Everyday).</strong> </p >
                    </small>
                </div>
                <br /><br /><br /><br />
            </div>
        </>
    );
};

export default About;