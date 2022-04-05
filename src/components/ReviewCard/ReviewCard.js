import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './ReviewCard.css';

const ReviewCard = ({ review: { name, img, ratings, reviewText } }) => {
    return (
        <div className='review-card'>
            <div className='customer-img-container'>
                <img src={img} alt="" />
            </div>
            <div className='review-content'>
                <h6>{name}</h6>
                <Rating
                    initialRating={ratings}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                    readonly
                ></Rating> <small> - {ratings}</small>
                <small className='review-text'>"{reviewText.length >= 100 ? reviewText.slice(0, 100) + '...' : reviewText}"</small>
            </div>
        </div>
    );
};

export default ReviewCard;