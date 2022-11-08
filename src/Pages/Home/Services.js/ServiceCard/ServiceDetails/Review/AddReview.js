import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../../../Context/AuthProvider/AuthProvider';

const AddReview = () => {
    const {user} = useContext(AuthContext);
    const {displayName,photoURL, email} = user;
    const handleAddReview = e =>{
        e.preventDefault();
        const form = e.target;
        const text = form.text.value;

        const review = {
            displayName, photoURL, email, text
        }
        fetch('http://localhost:5000/addReview', {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        // authorization: `Bearer ${localStorage.getItem('genius-token')}`
    },
    body: JSON.stringify(review)
})
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.acknowledged){
            toast.success('review added successfully')
            form.reset();
            
        }
    })
    .catch(er => console.error(er));
  console.log(review)

    }
    return (
        <div>
            <form onSubmit={handleAddReview} >
            <div className="form-control "> 
            <textarea name='text' className="textarea textarea-primary  w-1/2 h-24 mx-auto" placeholder="Write a review"></textarea>
            </div>
           <div className='text-center my-4'> 
           <button className=" rounded-full  p-3 w-30   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold ">
                Add Review
              </button>
           </div>
            </form>
        </div>
    );
};

export default AddReview;