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
            <div>
                {loading && <p>Loading...</p>}
                {message && <p>{message}</p>}
                {user && (
                    <div>
                        <h2>Welcome, {user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>ID: {user.id}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Profile
