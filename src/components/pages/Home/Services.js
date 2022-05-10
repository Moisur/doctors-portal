import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import treatment from '../../../assets/images/treatment.png'
import Service from './Service';
import ButtonInfo from '../Sheard/ButtonInfo/ButtonInfo';
const Services = () => {
    const service = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride is a form of the chemical element fluorine. It is used as medicine. Fluoride is most commonly used to prevent cavities, and to treat tooth plaque',
            images: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'A tooth filling is a procedure wherein the damaged and decayed part of a tooth is removed and the area is filled with a replacement material to',
            images: cavity,
        },
        {
            id: 3,
            name: 'Teeth whitening',
            description: 'A product is considered simply "whitening" when it removes food or debris from the teeth without bleach. Bleaching products contain peroxide ',
            images: whitening,
        }
    ]
    return (
        <div className='text-center mt-20'>
            <div className='py-3'>
                <h1 className='text-primary uppercase font-bold '>our services</h1>
                <h1 className='text-3xl '>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    service.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div>
                <div className="hero mt-10 ">
                    <div className="hero-content flex-col lg:flex-row gap-20 justify-around">
                        <img className='w-[313px] mx-auto' src={treatment} alt='' />
                        <div className='text-left  md:w-[520px] mx-auto'>
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6  ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <ButtonInfo>Get Started</ButtonInfo>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;