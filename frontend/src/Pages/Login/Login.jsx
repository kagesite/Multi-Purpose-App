import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router'
import HeaderNav from '../../Components/HeaderNav';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    }


    return (
        <div>
            <HeaderNav />
            <div className='bg-zinc-100 flex flex-col w-full min-h-screen items-center p-8'>
                <h2 className='text-3xl font-semibold'>Account Login</h2>
                <form onSubmit={handleSubmit}
                    className='bg-zinc-200 p-8 w-lg rounded-lg border-3 border-amber-900 mt-8'
                >
                    <div className='flex flex-col gap-8 '>
                        <div className='flex flex-col'>
                            <label htmlFor="email" className='mb-1'>Email:</label>
                            <input
                                type="email"
                                className='border-2 rounded-md px-2 py-1 border-zinc-9 bg-white'
                                placeholder='Enter email'
                                value={name}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="name" className='mb-1'>Password:</label>
                            <input
                                type="password"
                                className='border-2 rounded-md px-2 py-1 border-zinc-9 bg-white'
                                placeholder='Enter password'
                                value={name}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='flex items-center w-full'>
                            <button
                                type="submit"
                                className='bg-amber-500 text-sm border-3 border-amber-900 text-white px-4 py-2 rounded-lg font-semibold cursor-pointer w-fit'
                            >Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
