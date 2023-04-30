
"use client";

import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import Cookies from 'js-cookie';
import { Router } from 'next/router';

const Page = () => {
    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState('');
    const [fetchSingleTodo, setFetchSingleTodo] = useState<any>({});
    

    const loggedEmail = Cookies.get("userEmail");
    const loggedin = Cookies.get("loggedin");

    // const router = useRouter();

    // console.log('USEr adata:::', loggedin);
    

    useEffect(() => {
        axios.get(`http://localhost:5000/api/todos?email=${loggedEmail}`)
        .then(res => setTodos(res.data))
    },[todos, loggedEmail]);

    const handleOnSubmit = async (e:any) => {
        e.preventDefault();

        axios.post('http://localhost:5000/api/add', { todoText, email: loggedEmail })
            .then(() => {
                // console.log(response.data)
                toast.success('Successfully Added');
                e.target.reset();
                // setTodos([...todos, todoText])
            })
            .catch(function (error) {
                // console.log(error.response.data.message)
                toast.error(error.response.data.message);
            })
    }

    const handleDelete = (e:any, id:any) => {
        e.preventDefault();
        // console.log('Id::::', id);

        axios.delete(`http://localhost:5000/api/${id}`)
        .then((res) => toast.success(res.data.message));
    }

    const passIdForUpdate = (id:any) => {
        // e.preventDefault();
        // console.log('Id::::', id);

        axios.get(`http://localhost:5000/api/todo/${id}`)
        .then(res => {
            // console.log('Specific Data:::', res.data);
            setFetchSingleTodo(res.data);
        });
    }

    const handleOnUpdate = (e:any) => {
        e.preventDefault();

        axios.put(`http://localhost:5000/api/${fetchSingleTodo._id}`, fetchSingleTodo)
        .then((res) => {
            e.target.reset();
            toast.success(res.data.message)
        }).catch(function (error) {
            console.log(error)
            // toast.error(error.response.data.message);
        });
    } 


    const handleLogOut =(e:any) => {
        e.preventDefault();

        axios.post(
            'http://localhost:5000/api/logout')
            .then(function (response) {
                // console.log(response.data)
                Cookies.remove('loggedin');
                // Cookies.set("userEmail", userData.email);
                toast.success(response.data.message);
                // useRouter().push('/');
                // Router.reload();
                window.location.reload();

            })
            .catch(function (error) {
                // console.log(error.response.data.message)
                toast.error(error);
            })
    }
    
    // console.log('Todos Text:::', fetchSingleTodo);

    return (
        <>
            <div 
                className='w-3/4 md:w-1/2 bg-base-100 absolute top-8 left-14 md:left-1/4 p-6 relative'
            >
                <h2 className='text-center text-2xl font-semibold'>
                    Todo List
                </h2>

                <form
                onSubmit={handleOnSubmit}
                className="relative w-5/6 mx-auto my-4"
                >
                    <input 
                        type="text" 
                        placeholder="Type your todo here" 
                        onChange={(e) => setTodoText(e.target.value)}
                        className="input input-bordered w-full focus:outline-none"
                    /> 
                    <button 
                        type='submit'
                        className="absolute top-0 right-0 rounded-l-none btn btn-active btn-ghost capitalize font-medium text-base"
                    >
                        Add
                    </button>

                    <Toaster />
                </form>

                <ul className="menu bg-sky-500/50 w-6/6 text-white mx-auto mt-8">
                    {
                        todos.map((item: any) => <>
                            <li 
                                key={item?._id}
                                className='border border-gray-700'
                            >
                                <a className='flex items-center justify-between py-0'>
                                    <p>
                                        {item.todoText}
                                    </p>
                                <div className='flex items-center justify-center gap-4'>
                                <label 
                                    htmlFor="my-modal"
                                    className="btn btn-ghost hover:bg-transparent text-lg p-0"
                                    onClick={() => passIdForUpdate(item._id)}
                                >
                                    <BiEdit />
                                </label>
                                        <RiDeleteBin6Line onClick={(e) => handleDelete(e, item._id)} />
                                </div>
                                </a>
                            </li>
                        </>)
                    }
                </ul>

            {/* Modal  */} 
                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <form
                                onSubmit={handleOnUpdate}
                                className="relative w-5/6 mx-auto mt-6 mb-0"
                            >
                                <input 
                                    type="text" 
                                    placeholder={fetchSingleTodo.todoText}
                                    onChange={(e) => setFetchSingleTodo({...fetchSingleTodo, todoText: e.target.value})}
                                    className="input input-bordered w-full focus:outline-none"
                                /> 
                                <div className="modal-action">
                                    <button 
                                        type='submit'
                                        className="absolute top-0 right-0 rounded-l-none btn btn-active btn-ghost capitalize font-medium text-base"
                                    >
                                        Update
                                    </button>
                                </div>

                            </form>
                            <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        </div>
                    </div>

            </div>

            {loggedin && <button 
                className="absolute top-2 right-2 rounded btn btn-outline hover:bg-transparent capitalize font-medium text-base hover:text-gray-300 btn-md"
                onClick={handleLogOut}
            >
                LogOut
            </button>}
        </>
    );
};

export default Page;