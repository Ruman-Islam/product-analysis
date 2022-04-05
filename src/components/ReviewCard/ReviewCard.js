import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './ReviewCard.css';

const ReviewCard = ({ review: { name, img, ratings, reviewText } }) => {
    return (
        // <div className='review-card'>
        //     <div className='review-card-header'>
        //         <h5>{name}</h5>
        //         <Rating
        //             initialRating={ratings}
        //             emptySymbol={<FontAwesomeIcon icon={faStar} />}
        //             fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
        //             readonly
        //         ></Rating>
        //     </div>
        //     <div className='customer-img-container'>
        //         <img src={img} alt="" />
        //     </div>
        //     <div className='review-content'>
        //         <p>"{reviewText.length >= 100 ? reviewText.slice(0, 100) + '...' : reviewText}"</p>
        //     </div>
        // </div>
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
                ></Rating>
                <small>"{reviewText.length >= 100 ? reviewText.slice(0, 100) + '...' : reviewText}"</small>
            </div>
        </div>
    );
};

export default ReviewCard;