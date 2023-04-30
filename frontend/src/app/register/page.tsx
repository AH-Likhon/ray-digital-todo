"use client";

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Page = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
     });

     const router = useRouter();

    const handleOnSubmit = (e:any) => {
        e.preventDefault();

        // console.log('value::', userData);

        axios.post(
        'http://localhost:5000/api/register', userData )
        .then((res) => {
            // console.log(response.data)
            toast.success("Successfully registered");
            router.push('/login');
        })
        .catch(function (error) {
            // console.log(error)
            toast.error(error.response.data.message);
        })
    }

    const handleOnChange = (e:any) => {

        const field = e.target.name;
        const value = e.target.value;

        setUserData({
            ...userData,
            [`${field}`]: value
        })

        e.preventDefault();

        // console.log('value::', userData);
    }

    return (
        <div className='card  w-3/4 md:w-1/2 bg-base-100 shadow shadow-gray-100 absolute top-10 left-14 md:left-1/4 border rounded-lg px-2 py-4 m:py-6 m:px-6'>
            <h2 className='text-center text-2xl font-semibold'>
                SignUp
            </h2>
            <form
                onSubmit={handleOnSubmit}
                className="card-body w-full"
            >

                <label className="label">
                    <span className="text-base font-medium">User Name:</span>
                </label>
                <input 
                    onChange={handleOnChange} 
                    type="text" 
                    name='name'
                    value={userData?.name}
                    placeholder="Enter your name" 
                    className="input input-bordered input-ghost input-md w-full mb-2 focus:outline-0" 
                    required
                />

                <label className="label">
                    <span className="text-base font-medium">Email:</span>
                </label>
                <input 
                    onChange={handleOnChange}
                    type="email" 
                    name='email'
                    value={userData?.email}
                    placeholder="Enter your email" 
                    className="input input-bordered input-ghost input-md w-full mb-2 focus:outline-0" 
                    required
                />

                <label className="label">
                    <span className="text-base font-medium">Password:</span>
                </label>
                <input 
                    onChange={handleOnChange}
                    type="password" 
                    name='password'
                    value={userData?.password}
                    placeholder="Enter your password" 
                    className="input input-bordered input-ghost input-md w-full mb-2 focus:outline-0" 
                    required
                />

                <button className="btn capitalize font-medium text-base mb-2">Register</button>

                <p>
                    Have an account already? <Link href='/login'>SignIn</Link>
                </p>

            </form>

            <Toaster/>
        </div>
    );
};

export default Page;