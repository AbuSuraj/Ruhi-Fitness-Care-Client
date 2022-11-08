import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/reviews')
        .then(res =>res.json())
        .then(data => setReviews(data))
    }, []);
    return (
        <div className='my-10'>
            
            <div className='grid gap-6 ml-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default AllReviews;