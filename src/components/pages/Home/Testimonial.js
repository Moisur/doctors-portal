import React from 'react';
import codesImags from '../../../assets/images/codesImags.png';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';
const Testimonial = () => {
    ;
    const review = [
        {
            id: 1,
            name: 'Masud Rana',
            location:'Dhaka',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            images: people1
        },
        {
            id: 2,
            name: 'Cavity Filling',
            location:'Singapore',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            images: people2,
        },
        {
            id: 3,
            name: 'Hazrat',
            location:'Maldives',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            images: people3,
        }
    ]
    return (

        <div className='my-10'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-xl font-serif font-bold text-primary'>Testimonial</h1>
                    <h1 className='text-3xl '>What Our Patients Says</h1>
                </div>
                <div>
                    <img src={codesImags} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    review.map(review=><Review 
                    key={review.id}
                    review={review}
                    ></Review>) 
                }
            </div>
        </div>
    );
};

export default Testimonial;