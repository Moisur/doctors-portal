import React from 'react';
import { toast } from 'react-toastify';


const UserRow = ({ user, index, refetch }) => {
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${user.email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log(res)
                if (res.status === 401) {
                    toast.error("Your did N't Admin Add")
                }
                return res.json();
            })
            .then(data => {
                if (data.success) {
                    toast.success("SuccessFully Admin Add")
                    refetch()
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{user.role !== "admin" && <button onClick={makeAdmin} class="btn btn-xs">Admit Add</button>}</td>
            <td><button class="btn btn-xs">Admit Remove</button></td>
        </tr>
    );
};

export default UserRow;