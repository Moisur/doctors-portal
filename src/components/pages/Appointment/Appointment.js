import React, { useState } from 'react';
import Footer from '../Sheard/Footer/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div className='px-12'>
            <AppointmentBanner selected={selected} setSelected={setSelected}></AppointmentBanner>
            <AvailableAppointments selected={selected} setSelected={setSelected}></AvailableAppointments>
           <Footer></Footer>
        </div>
    );
};

export default Appointment;