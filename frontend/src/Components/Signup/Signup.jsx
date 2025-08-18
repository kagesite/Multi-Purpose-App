import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    
    const navigate = useNavigate()

    return (
        <div>
            <header className='flex justify-between items-center bg-zinc-900 px-8 py-4'>
                <h1 className='text-3xl text-white cursor-pointer'
                    onClick={() => navigate("/")}
                >KageApp</h1>

                <nav className=''>
                    <ul className='flex gap-6'>
                        <li
                            className='bg-green-500 text-sm border-3 border-white text-white px-3 py-1 rounded-lg cursor-pointer'
                            onClick={() => navigate("/signup")}
                        >
                            Create Account
                        </li>
                        <li
                            className='bg-amber-500 text-sm border-3 border-white text-white px-3 py-1 rounded-lg cursor-pointer'
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </li>
                    </ul>
                </nav>
            </header>
            <div className='bg-zinc-100 flex flex-col w-full min-h-screen items-center p-8'>
                <h2 className='text-3xl mb-6'>Sign Up</h2>
                <form action=""
                    className='flex flex-wrap gap-2 bg-zinc-600 rounded-lg p-8'
                >
                    <input
                        type="text"
                        className='border-2 rounded-md px-3 py-1 border-zinc-9 bg-white'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        className='border-2 rounded-md px-3 py-1 border-zinc-9 bg-white'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        className='border-2 rounded-md px-3 py-1 border-zinc-900 bg-white'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button 
                        type="submit"
                        className='bg-green-500 text-sm border-3 border-white text-white px-3 py-1 rounded-lg cursor-pointer'
                    >Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup
