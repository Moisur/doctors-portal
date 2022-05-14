import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ Modal, data,setModalData}) => {
    const BookModal = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const number = event.target.number.value;
        const email = event.target.email.value;
        const slot = event.target.slot.value;
        const date = event.target.date.value;
        console.log(name,number,email,slot,date)
        // setModalData(null)
    }
    return (
        <div>
            <input type="checkbox" id="BookModal-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="BookModal-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{Modal.name}</h3>
                    <form onSubmit={BookModal} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" name='date' value={format(data, 'PP')} className="input input-bordered w-full max-w-xs" disabled />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                Modal?.slots?.map(slot => <option key={slot} >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder='Full Name' className="input input-bordered w-full max-w-xs" />
                        <input name='number' type="number" placeholder='Phone Number' className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" placeholder='Email' className="input input-bordered w-full max-w-xs" />
                        <input type="submit" className="bg-secondary py-2 text-white rounded w-full" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AppointmentModal;