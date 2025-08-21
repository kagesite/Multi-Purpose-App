import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router'

function HeaderNav({ setIsLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate('/login');
    }

    return (
        <header className='flex justify-between items-center bg-zinc-900 px-8 py-4'>
            <h1 className='text-3xl text-white cursor-pointer'
                onClick={() => navigate("/")}
            >KageApp</h1>
            <nav className=''>
                {setIsLoggedIn ? (
                    <ul className='flex gap-6'>
                        <li
                            className='bg-green-600 text-sm border-3 border-white text-white px-3 py-1 rounded-lg cursor-pointer'
                            onClick={() => navigate("/signup")}
                        >
                            Profile
                        </li>
                        <li
                            className='bg-amber-500 text-sm border-3 border-white text-white px-3 py-1 rounded-lg cursor-pointer'
                            onClick={handleLogout}
                        >
                            Logout
                        </li>
                    </ul>
                ) : (
                    <ul className='flex gap-6'>
                        <li
                            className='bg-green-600 text-sm border-3 border-white text-white px-3 py-1 rounded-lg cursor-pointer'
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
                )}

            </nav>
        </header>
    )
}

export default HeaderNav
