import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImg from '../../images/image-asset.jpeg';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='not-found-container'>
            <div className='error-back-button'>
                <button
                    onClick={() => navigate('/home')}
                >
                    Back to Home
                </button>
            </div>
            <div className='error-background'>
                <img src={backgroundImg} alt="" />
            </div>
            <div className='error-content'>
                <h1>AWWW...DON’T CRY.</h1>
                <h6>It's just a 404 Error! </h6>
                <p>What you’re looking for may have been misplaced in Long Term Memory.</p>
            </div>
        </div>
    );
};

export default NotFound;