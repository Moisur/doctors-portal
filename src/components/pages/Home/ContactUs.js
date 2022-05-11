import React from 'react';
import { Link } from 'react-router-dom';
import appointment from '../../../assets/images/appointment.png'
const ContactUs = () => {
    return (
        <div>
            <div style={{ background: `url(${appointment})` }} className="hero py-10 rounded">
                <div>
                    <div className='py-3'>
                        <h1 className='text-primary uppercase font-bold text-center'>Contact Us</h1>
                        <h1 className='text-3xl text-white text-center'>Stay connected with us</h1>
                    </div>
                    <div className="hero-content w-[320px] md:w-[500px] mx-auto">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link to="/" className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6 ">
                                    <button className=" text-white btn btn-primary bg-gradient-to-r from-secondary to-primary">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default ContactUs;