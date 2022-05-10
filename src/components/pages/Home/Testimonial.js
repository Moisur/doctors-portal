import React from 'react';
import codesImags from '../../../assets/images/codesImags.png';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
const Testimonial = () => {
    ;
    const Review = [
        {
            id: 1,
            name: 'Winson Herry',
            description: 'Fluoride is a form of the chemical element fluorine. It is used as medicine. Fluoride is most commonly used to prevent cavities, and to treat tooth plaque',
            images: people1
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'A tooth filling is a procedure wherein the damaged and decayed part of a tooth is removed and the area is filled with a replacement material to',
            images: people2,
        },
        {
            id: 3,
            name: 'Teeth whitening',
            description: 'A product is considered simply "whitening" when it removes food or debris from the teeth without bleach. Bleaching products contain peroxide ',
            images: people3,
        }
    ]
    return (

        <div>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-xl font-serif font-bold text-primary'>Testimonial</h1>
                    <h1 className='text-3xl '>What Our Patients Says</h1>
                </div>
                <div>
                    <img src={codesImags} alt="" />
                </div>
            </div>
            <div>


            </div>
        </div>
    );
};

export default Testimonial;