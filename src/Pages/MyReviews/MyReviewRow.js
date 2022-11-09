import React from "react";

const MyReviewRow = ({ mReview }) => {
    const {serviceName, text, _id} = mReview;
    console.log(_id)
    const handleDelete = _id =>{}
  return (
    
          <tr>
        <td className="border-8">
        <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
        </td>
        <td className="border-8">{serviceName}</td>
        <td className="border-8">{text}</td>
        <td className="border-8">U</td>
         
      </tr>
     
  );
};

export default MyReviewRow;
