import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyDashboard = () => {
    const navigation = useNavigate()
    const [Appointment, setAppointment] = useState([])
    const [user] = useAuthState(auth);
    
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/bookings?email=${user?.email}`,{
                method:'GET',
                headers:{
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if(res.status === 402){
                        navigation('/')
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                    }
                    return res.json()
                })
                .then(data => setAppointment(data))
        }
    }, [user,navigation])
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Appointment.map((a,index) => <tr key={a._id}>
                                <th>{1+index}</th>
                                <th>{a.user}</th>
                                <th>{a.name}</th>
                                <th>{a.date}</th>
                                <th>{a.slot}</th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyDashboard;