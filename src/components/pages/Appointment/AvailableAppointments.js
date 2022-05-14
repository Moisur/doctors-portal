import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import AppointmentsService from './AppointmentsService';
import AppointmentModal from './AppointmentModal';
const AvailableAppointments = ({ selected }) => {
    const [service, setService] = useState([])
    const [Modal,setModalData]=useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data))
    },[])
    return (
        <div>
            <h1 className='text-secondary text-2xl text-center py-3'>Available Appointments on {format(selected, 'PP')}</h1>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
                {
                    service.map(service=><AppointmentsService
                    key={service._id}  
                    service={service}
                    setModalData={setModalData}
                    ></AppointmentsService>)
                }
            </div>
            {
                Modal && <AppointmentModal
                 Modal={Modal}
                 data={selected}
                 setModalData={setModalData}
                 ></AppointmentModal>
            }
        </div>
    );
};

export default AvailableAppointments;