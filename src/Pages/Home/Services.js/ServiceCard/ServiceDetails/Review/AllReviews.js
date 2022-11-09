import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const AllReviews = ({serviceId, refresh, setrefresh}) => {
    const [reviews, setReviews] = useState([]);
    // console.log(reviews)
    useEffect( () =>{
        fetch(`http://localhost:5000/reviews/${serviceId}`)
        .then(res =>res.json())
        .then(data => setReviews(data))
    }, [serviceId, refresh]);
    return (
        <div className='my-10'>
               {/* < className='grid gap-6  ml-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'> */}
                { 
                reviews.length===0 ? 
                <h2 className='font-bold text-xl text-center '>No Reviews  available for this service</h2>
                : 
                <div>
                <h2 className='font-bold text-xl text-center '>User's Review on this service</h2>
                <div className='grid gap-6  ml-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                   { reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)}
                    </div>
                    </div>
                }
            </div>
        
    );
};

export default AllReviews;