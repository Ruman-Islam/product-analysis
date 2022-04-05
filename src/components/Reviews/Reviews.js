import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useReviews } from '../../hooks/useReviews';
import NavigationBar from '../NavigationBar/NavigationBar';
import ReviewCard from '../ReviewCard/ReviewCard';
import Spinner from '../Spinner/Spinner';
import './Reviews.css';

const Reviews = ({ isHome }) => {
    const navigate = useNavigate();
    const [reviews, , isLoading] = useReviews();
    return (
        <>
            {isHome ? '' : <NavigationBar />}
            {isLoading ?
                <Spinner />
                :
                <div className='review-container container'>
                    <h1>{isHome ? <h1>CUSTOMER'<span style={{ color: '#1B98F5' }}>S</span> REVIEW</h1> : <h2>See, what our customer say!</h2>}</h1>
                    <div className='review-container-wrapper'>
                        {isHome ? (reviews.slice(0, 3).map(review => <ReviewCard key={review.id} review={review} />))
                            :
                            (reviews.map(review => <ReviewCard key={review.id} review={review} />))}
                    </div>
                    <div
                        style={{ textAlign: 'center', margin: '30px 0', display: isHome ? 'block' : 'none' }}>
                        <button className='primary-button' onClick={() => navigate('/reviews')}>See All Reviews</button>
                    </div>
                </div>
            }
        </>
    );
};

export default Reviews;