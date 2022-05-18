import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <Outlet />
                </div>
                <div class="drawer-side ">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content bg-pink-800">
                        <li><Link to='' >MyDashboard</Link></li>
                        <li><Link to='myReview' >MyReview</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;