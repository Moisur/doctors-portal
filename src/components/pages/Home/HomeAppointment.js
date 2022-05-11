import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor.png'
import ButtonInfo from '../Sheard/ButtonInfo/ButtonInfo';
const HomeAppointment = () => {
    return (
        <div style={{ background: `url(${appointment})`} } className="flex  items-center mt-[200px] px-10 rounded">
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='text-white flex-1 py-2'>
                <h1 className='text-2xl text-primary font-bold font-serif py-3'>Appointment</h1>
                <h1 className='text-4xl py-3'>Make an appointment Today</h1>
                <p className='mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <ButtonInfo>Get Started</ButtonInfo>
            </div>
        </div>
    );
};

export default HomeAppointment;