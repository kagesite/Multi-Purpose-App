import React from 'react'
import HeaderNav from '../../Components/HeaderNav'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

function Profile({ setIsLoggedIn }) {
    const [user, setUser] = useState({});
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUserInfo = async () => {
            setLoading(true);
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setMessage("No token found");
                    return
                }

                const url = "http://localhost:5000/api/auth/userInfo";
                const response = await axios.get(url, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });

                setUser(response.data.userInfo);
                setMessage("")
            } catch (error) {
                if (error.response) {
                    setMessage(error.response.data.error)
                } else {
                    setMessage("Network error occurred");
                }
            } finally {
                setLoading(false);
            }
        }

        getUserInfo();
    }, [])


    return (
        <div>
            <HeaderNav setIsLoggedIn={setIsLoggedIn} />
            {loading ? <p>Loading...</p> : (
                <div className='bg-zinc-100 flex flex-col w-full min-h-screen items-center p-8'>
                    <div className='bg-zinc-200 w-lg p-8 rounded-lg'>
                        <h2 className='font-semibold text-4xl'>Welcome back {user.name}!</h2>
                        <hr className='my-4'/>
                        <h2 className='font-semibold text-2xl mb-4'>Account Info:</h2>
                        <p className='mb-2'><span className='font-semibold'>Email: </span>{user.email}</p>
                        <p className='mb-2'><span className='font-semibold'>Account ID: </span>{user.id}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Profile
