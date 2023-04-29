"use client";

import Cookies from "js-cookie";
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Page = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const router = useRouter();

    const handleOnSubmit = (e: any) => {
        e.preventDefault();

        console.log('value::', userData);

        axios.post(
            'http://localhost:5000/api/login', userData)
            .then(function (response) {
                // console.log(response.data)
                Cookies.set("loggedin", "true");
                toast.success(response.data.message);
                router.push('/todo');
            })
            .catch(function (error) {
                // console.log(error.response.data.message)
                toast.error(error.response.data.message);
            })
    }

    const handleOnChange = (e: any) => {

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
        <div className='card w-1/2 bg-base-100 shadow shadow-gray-100 absolute top-24 left-1/4 border rounded-lg p-6'>
            <h2 className='text-center text-2xl font-semibold'>
                SignIn
            </h2>
            <form
                onSubmit={handleOnSubmit}
                className="card-body w-full"
            >
                <label className="label">
                    <span className="text-base font-medium">Email:</span>
                </label>
                <input
                    onChange={handleOnChange}
                    name='email'
                    type="email"
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
                    value={userData?.password}
                    name='password'
                    type="password"
                    placeholder="Enter your password"
                    className="input input-bordered input-ghost input-md w-full mb-2 focus:outline-0"
                    required
                />

                <button
                    type='submit'
                    className="btn capitalize font-medium text-base mb-2"
                >
                    SignIn
                </button>

                <p>
                    Don't have an account? <Link href='/register'>Sign up</Link>
                </p>

            </form>

            <Toaster />
        </div>
    );
};

export default Page;