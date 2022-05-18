import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../../../firebase.init';
const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };
    const Location = useLocation()
    const Path = Location.pathname
    const MenuArea = [
        <li key='1'><Link to='/'>Home</Link></li>,
        <li key='2'><Link to='/about'>About</Link></li>,
        <li key='3'><Link to='/appointment'>Appointment</Link></li>,
        <li key='4'><Link to='/reviews'>Reviews</Link></li>,
        <li key='5'><Link to='/contact'>Contact</Link></li>,
        <li key='6'>{
            user ? <Link to='/dashboard'>Dashboard</Link> : ''
        }</li>,

        <li key='7'>{
            user ? <button onClick={logout} class="btn btn-ghost">Logout</button>
                : <Link to='/login'>Login</Link>
        }</li>
    ]
    return (
        <div className="navbar bg-base-100 flex justify-between items-center px-16">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {MenuArea}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Doctor</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {MenuArea}
                </ul>
            </div>
            {
                Path === '/dashboard' ? <div className="navbar-end">
                    <label for="my-drawer-2" tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div> : Path === '/dashboard/myReview' ?<div className="navbar-end">
                    <label for="my-drawer-2" tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>:''
            }


        </div>
    );
};

export default Navbar;