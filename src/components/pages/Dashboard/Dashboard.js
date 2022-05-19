import React, { } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import AdminHook from '../../../Hook/AdminHook';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [Admin]=AdminHook(user)
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <Outlet />
                </div>
                <div class="drawer-side ">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48  text-base-content bg-pink-600">
                        <li><Link to='' >MyDashboard</Link></li>
                        <li><Link to='myReview' >MyReview</Link></li>
                        <li>{Admin && <Link to='allUser' >All User</Link>} </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;