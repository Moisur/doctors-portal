import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentsService from './AppointmentsService';
import AppointmentModal from './AppointmentModal';
import {useQuery } from 'react-query'
import LoaderSpinner from '../Sheard/LoaderSpinner/LoaderSpinner'
const AvailableAppointments = ({ selected }) => {
    const [Modal,setModalData]=useState(null)
    const FormatDate =format(selected, 'PP');
    console.log(FormatDate)
    const {data:service,isLoading,refetch} = useQuery(['available',FormatDate], () =>
    fetch(`http://localhost:5000/available?date=${FormatDate}`).then(res =>
       res.json()
     )
   )
    if(isLoading){
        return <LoaderSpinner></LoaderSpinner>
    }
    return (
        <div>
            <h1 className='text-secondary text-2xl text-center py-3'>Available Appointments on {FormatDate}</h1>
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
                 refetch={refetch}
                 ></AppointmentModal>
            }
        </div>
    );
};

export default AvailableAppointments;