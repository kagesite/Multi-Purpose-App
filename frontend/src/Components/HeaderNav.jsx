import React from 'react'
import { useNavigate } from 'react-router'

function HeaderNav() {
    const navigate = useNavigate();
    
    return (
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
    )
}

export default HeaderNav
