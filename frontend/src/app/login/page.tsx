import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (      
        <div className='card w-1/2 bg-base-100 shadow shadow-gray-100 absolute top-24 left-1/4 border rounded-lg p-6'>
            <h2 className='text-center text-2xl font-semibold'>
                SignIn
            </h2>
            <form className="card-body w-full">
                <label className="label">
                    {/* <span className="text-base font-medium">Email:</span> */}
                </label>
                <input type="email" placeholder="Enter your email" className="input input-bordered input-ghost input-md w-full mb-2 focus:outline-0" required/>

                <label className="label">
                    <span className="text-base font-medium">Password:</span>
                </label>
                <input type="password" placeholder="Enter your password" className="input input-bordered input-ghost input-md w-full mb-2 focus:outline-0" required/>

                <button className="btn capitalize font-medium text-base mb-2">SignIn</button>

                <p>
                    Don't have an account? <Link href='/register'>Sign up</Link>
                </p>

            </form>
        </div>
    );
};

export default Page;