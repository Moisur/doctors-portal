import React, {  } from 'react';
import chair from '../../../assets/images/chair.png';
import banner from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({selected, setSelected}) => {
    return (
        <div style={{
            background: `url(${banner})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'

        }} className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <div className='flex-1'>
                    <img src={chair} alt='Chair images ' />
                </div>
                <div className='flex-1 cursor-pointer'>
                    <div className='md:w-52 mx-auto'>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;