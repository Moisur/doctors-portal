import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AppointmentModal = ({ Modal, data, setModalData,refetch }) => {
    const [user, loading, error] = useAuthState(auth);
    const BookModal = (event) => {
        event.preventDefault()
        const dataFormat = format(data, 'PP')
        const name = Modal.name
        const date = event.target.date.value;
        const slot = event.target.slot.value;
        const user = event.target.name.value;
        const email = event.target.email.value;
        const number = event.target.number.value;
        const AppointmentBooks = {
            name, date, slot, user, email, number
        }
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(AppointmentBooks),
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    if (data.success) {
                        toast.success(`Appointment Booking date ${dataFormat},${Modal.name}`)   
                    }
                    else {
                        toast.error(`Already Appointment Booking  ${dataFormat}`)
                    }
                    setModalData(null)
                    refetch()
                }
            })
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
                        <input name='name' type="text" value={user.displayName} disabled className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" value={user.email} disabled className="input input-bordered w-full max-w-xs" />
                        <input name='number' type="number" placeholder='Phone Number' className="input input-bordered w-full max-w-xs" required />
                        <input type="submit" value='Books' className="bg-secondary py-2 text-white rounded w-full cursor-pointer" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AppointmentModal;