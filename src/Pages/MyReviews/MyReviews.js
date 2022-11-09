import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';

const MyReviews = () => {
    const {user, logOut} = useContext(AuthContext);
    const [myReview, setMyReview] = useState([]);
    // console.log(user.email)
    useEffect(() =>{
        fetch(`http://localhost:5000/my-reviews/${user?.email}`)
        .then(res =>{return res.json()})
        .then(data => setMyReview(data))
    },[user?.email])
    // console.log(myReview)
    const handleDelete = () =>{}
    return (
         
      <div className="overflow-x-auto  mt-10 mx-4">
                <table className="table-normal w-full">
                    <thead>
                        <tr >
                            {/* <th>
                            </th> */}
                            <th className="border-8">Delete</th>
                            <th className="border-8">Service Name</th>
                            <th className="border-8">Review</th>
                            <th className="border-8">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myReview.map(mReview => <MyReviewRow
                                key={mReview._id}
                                mReview={mReview}
                                handleDelete={handleDelete}
                                 
                            ></MyReviewRow>)
                        }
                    </tbody>
                </table>
            </div>
        
    );
};

export default MyReviews;