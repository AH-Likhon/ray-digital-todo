
"use client";

import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';

const Page = () => {
    return (
        <div 
            className='w-1/2 bg-base-100 absolute top-8 left-1/4 p-6'
        >
            <h2 className='text-center text-2xl font-semibold'>
                Todo List
            </h2>
            <div className="relative w-5/6 mx-auto my-4">
                <input 
                    type="text" 
                    placeholder="Type your todo here" 
                    className="input input-bordered w-full focus:outline-none"
                /> 
                <button 
                className="absolute top-0 right-0 rounded-l-none btn btn-active btn-ghost capitalize font-medium text-base"
                >
                    Add Todo
                </button>
            </div>

            <ul className="menu bg-sky-500/50 w-6/6 text-white mx-auto mt-8">
                <li>
                    <a className='hover:bg-transparent flex items-center justify-between'>
                        <p>
                            Item 1
                        </p>
                       <div className='flex items-center justify-center gap-2'>
                            <BiEdit />
                            <RiDeleteBin6Line />
                       </div>
                    </a>
                </li>
                <li>
                    <a className='hover:bg-transparent'>
                        Item 1
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Page;