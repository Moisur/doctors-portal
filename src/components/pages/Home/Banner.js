import React from 'react';
import ButtonInfo from '../Sheard/ButtonInfo/ButtonInfo';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className=' w-[300px] md:w-[42%]' src={require('../../../assets/images/chair.png')} alt="" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <ButtonInfo>Get Start</ButtonInfo>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;