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
            <div>
            <HeaderNav />
                <div className='bg-zinc-100 flex flex-col w-full min-h-screen items-center p-8'>
                    <h2 className='text-3xl mb-6'>Login</h2>
                    <form onSubmit={handleSubmit}
                        className='flex flex-wrap items-center gap-2 bg-zinc-300 border-3 border-zinc-600 rounded-lg px-8 py-12 mb-4'
                    >
                        <div className='flex flex-col gap-8'>
                            <div className='flex flex-col'>
                                <label htmlFor="email" className='mb-1 font-light'>Email:</label>
                                <input
                                    type="email"
                                    className='border-2 rounded-md px-3 py-1 border-zinc-9 bg-white'
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="email" className='mb-1 font-light'>Password:</label>
                                <input
                                    type="password"
                                    className='border-2 rounded-md px-3 py-1 border-zinc-9 bg-white'
                                    placeholder='Enter Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className='bg-amber-500 text-sm border-3 border-white text-white px-3 py-1 rounded-lg cursor-pointer'
                            >Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
