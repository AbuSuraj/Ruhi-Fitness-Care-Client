import React, { useState } from 'react';
import AddReview from './AddReview';
import AllReviews from './AllReviews';

const Review = ({serviceId}) => {
    const [refresh, setrefresh] = useState(false);
    return (
        <div>
           <div>
           {/* <h2 className='font-bold text-xl text-center'>User's Review on this service</h2> */}
           <AllReviews refresh={refresh} setrefresh= {setrefresh} key={serviceId} serviceId ={serviceId}></AllReviews>
           <AddReview refresh={refresh} setrefresh= {setrefresh} key={serviceId} serviceId={serviceId}></AddReview>
           </div>
        </div>
    );
};

export default Review;