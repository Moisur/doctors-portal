import React from 'react';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import LoaderSpinner from '../Sheard/LoaderSpinner/LoaderSpinner';
import { Link, useNavigate } from 'react-router-dom';
const SignUp = () => {
    let firebaseError;
    const Navigation= useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updatEerror] = useUpdateProfile(auth);
    if (user || gUser) {
        Navigation('/')
    }

    if (gError || error) {
        firebaseError =<small className='text-red-600 text-center'>{gError?.message || error?.message}</small>
    }
    if (gLoading || loading) {
        return <LoaderSpinner></LoaderSpinner>
    }
    const onSubmit =async data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        if (email && password) {
           await createUserWithEmailAndPassword(email, password)
           await updateProfile({ displayName:name});
        }
    };

    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h1 className='text-center text-xl font-medium'>Sign Up</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'pleas String Name'
                                    },
                                })}
                                placeholder="enter you name"
                                class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.email?.type === 'required' && <span className='font-bold text-red-600'>{errors.name.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'pleas String Email'
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
                        <input className='btn w-full max-w-xs' type="submit" value='SignUp' />
                        <p>New to Doctors Portal?<Link className='text-secondary' to='/login'> You Account</Link></p>
                    </form>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline ">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;