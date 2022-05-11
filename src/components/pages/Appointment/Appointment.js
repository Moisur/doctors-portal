import React from 'react';
import Footer from '../Sheard/Footer/Footer';
import AppointmentBanner from './AppointmentBanner';

const Appointment = () => {
    return (
        <div className='px-12'>
            <AppointmentBanner></AppointmentBanner>
           <Footer></Footer>
        </div>
    );
};

export default Appointment;