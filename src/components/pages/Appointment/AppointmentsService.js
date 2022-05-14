import React, {  } from 'react';
const AppointmentsService = ({ service,setModalData}) => {
    return (
        <div className="card w-full  bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-center text-secondary">{service.name}</h2>
                <div>{service.slots.length > 0 ? <div>
                    <h1>{service.slots[0]}</h1>
                </div> : <span className='text-red-500'>Not Date</span>}</div>
                <h1>{service.slots.length} SPACES AVAILABLE</h1>
                <div className="card-actions justify-center "   >
                    <label htmlFor="BookModal-modal"
                        disabled={service.slots.length === 0}
                        onClick={() => setModalData(service)}
                        className="btn btn-secondary  text-white uppercase bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
            
        </div>
    );
};

export default AppointmentsService;