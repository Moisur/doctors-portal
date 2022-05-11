import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card w-[310px] mx-auto md:w-full bg-base-100 shadow-xl my-10">
            <div className="card-body">
                <p>{review.description}</p>
                <div className="card-actions justify-start">
                    <div className='flex items-center gap-3'>
                        <img className='w-16'  src={review.images} alt="" />
                        <div>
                           <h1 className='text-xl font-serif font-bold'>{review.name}</h1>
                           <h1>{review.location}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;