import React, { useEffect } from 'react';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import LoaderSpinner from '../Sheard/LoaderSpinner/LoaderSpinner';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../Hook/useToken';

const Login = () => {
    let firebaseError;
    const navigate = useNavigate()
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";


    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    
   
    const [tokenAccess] = useToken(user || gUser)

    useEffect(() => {
        if (tokenAccess) {
            console.log(tokenAccess)
            navigate(from, { replace: true });
        }
    }, [tokenAccess, from, navigate])


    if (gError || error) {
        firebaseError = <small className='text-red-600 text-center'>{gError?.message || error?.message}</small>
    }
    if (gLoading || loading) {
        return <LoaderSpinner></LoaderSpinner>
    }
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        if (email && password) {
            signInWithEmailAndPassword(email, password)
        }
    };

    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h1 className='text-center text-xl font-medium'>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'pleas String word'
                                    },
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'your valid email '
                                    }
                                })}
                                placeholder="enter you email"
                                class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.email?.type === 'required' && <span className='font-bold text-red-600'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='font-bold text-red-600'>{errors.email.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Must be password  required '
                                    },
                                    maxLength: {
                                        value: 6,
                                        message: 'password minim 6 character'
                                    }
                                })}
                                placeholder="enter you email"
                                class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.password?.type === 'required' && <span className='font-bold text-red-600'>{errors.password.message}</span>}
                                {errors.password?.type === 'maxLength' && <span className='font-bold text-red-600'>{errors.password.message}</span>}
                            </label>
                        </div>
                        {
                            firebaseError
                        }
                        <input className='btn w-full max-w-xs' type="submit" value='Login' />
                        <p>New to Doctors Portal?<Link className='text-secondary' to='/signup'> Create new account</Link></p>
                    </form>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline ">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;