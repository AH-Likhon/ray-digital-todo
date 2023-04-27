import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div className='card w-1/2 bg-base-100 shadow shadow-gray-100 absolute top-8 left-1/4 border rounded-lg p-6'>
            <h2 className='text-center text-2xl font-semibold'>
                SignUp
            </h2>
            <form className="card-body w-full">

                <label className="label">
                    <span className="text-base font-medium">User Name:</span>
                </label>
                <input type="text" placeholder="Enter your name" className="input input-bordered input-ghost input-md w-full mb-2 focus:outline-0" required/>

                <label className="label">
                    <span className="text-base font-medium">Email:</span>
                </label>
                <input type="email" placeholder="Enter your email" className="input input-bordered input-ghost input-md w-full mb-2 focus:outline-0" required/>

                <label className="label">
                    <span className="text-base font-medium">Password:</span>
                </label>
                <input type="password" placeholder="Enter your password" className="input input-bordered input-ghost input-md w-full mb-2 focus:outline-0" required/>

                <button className="btn capitalize font-medium text-base mb-2">Register</button>

                <p>
                    Have an account already? <Link href='/login'>SignIn</Link>
                </p>

            </form>
        </div>
    );
};

export default Page;