import React from 'react';
import AddReview from './AddReview';
import AllReviews from './AllReviews';

const Review = () => {
    return (
        <div>
           <div>
           <h2 className='font-bold text-xl text-center'>User's Review on this service</h2>
           <AllReviews></AllReviews>
           <AddReview></AddReview>
           </div>
        </div>
    );
};

export default Review;