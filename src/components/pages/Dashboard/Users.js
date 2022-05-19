import React from 'react';
import { useQuery } from 'react-query';
import LoaderSpinner from '../Sheard/LoaderSpinner/LoaderSpinner';
import UserRow from '../Sheard/User/UserRow';

const Users = () => {
    const { data: user, isLoading,refetch } = useQuery('user', () =>
        fetch('http://localhost:5000/users',{
            method:'GET',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <LoaderSpinner></LoaderSpinner>
    }
    return (
        <div>
            <h2 className='text-3xl text-center text-red-800 font-medium font-mono'>This ia a all user </h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Admin Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((user, index) => <UserRow
                                index={index}
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;