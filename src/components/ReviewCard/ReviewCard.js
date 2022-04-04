import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './ReviewCard.css';

const ReviewCard = ({ review, review: { name, img, ratings, reviewText } }) => {
    return (
        <div className='review-card'>
            <div className='review-card-header'>
                <h4>{name}</h4>
                <FontAwesomeIcon className='start-icon' icon={faStar} />
                <FontAwesomeIcon className='start-icon' icon={faStar} />
                <FontAwesomeIcon className='start-icon' icon={faStar} />
                <FontAwesomeIcon className='start-icon' icon={faStar} />
                <FontAwesomeIcon className='start-icon' icon={faStar} />
                <small>{ratings}</small>
            </div>
            <div className='customer-img-container'>
                <img src={img} alt="" />
            </div>
            <div className='review-content'>
                <p>"{reviewText.length >= 100 ? reviewText.slice(0, 100) + '...' : reviewText}"</p>
            </div>
        </div>
    );
};

export default ReviewCard;