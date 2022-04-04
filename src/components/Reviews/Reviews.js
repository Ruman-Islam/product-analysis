import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useReviews } from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Reviews.css';

const Reviews = ({ isHomePage }) => {
    const navigate = useNavigate();
    const [reviews] = useReviews();
    return (
        <div className='review-container'>
            <h1>{isHomePage ? 'REVIEWS' : 'See, what our customer say!'}</h1>
            <div className='review-container-wrapper'>
                {isHomePage ? (reviews.slice(0, 3).map(review => <ReviewCard key={review.id} review={review} />))
                    :
                    (reviews.map(review => <ReviewCard key={review.id} review={review} />))}
            </div>
            <div
                className='all-review-btn'
                style={{ display: isHomePage ? 'block' : 'none' }}>
                <button onClick={() => navigate('/reviews')}>See All Reviews</button>
            </div>
        </div>
    );
};

export default Reviews;