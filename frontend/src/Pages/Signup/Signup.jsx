import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from "axios";
import HeaderNav from '../../Components/HeaderNav';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [signupSuccessful, setSignupSuccessful] = useState(false);
    const [signupFailed, setSignupFailed] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const url = "http://localhost:5000/api/signup";
            const payload = { name, email, password };

            const response = await axios.post(url, payload);

            console.log(response.data);

            setSignupSuccessful(true);
            setSignupFailed(false);

            setName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            setSignupSuccessful(false);
            setSignupFailed(true)
            console.log(error.response.data.error);
            setMessage(error.response.data.error);
        }
    }


    return (
        <div>
            <HeaderNav />
            <div className='bg-zinc-100 flex flex-col w-full min-h-screen items-center p-8'>
                <h2 className='text-3xl font-semibold'>Create an account</h2>
                <form onSubmit={handleSubmit}
                    className='bg-zinc-200 p-8 w-lg rounded-lg border-3 border-green-900 my-8'
                >
                    <div className='flex flex-col gap-8 '>
                        <div className='flex flex-col'>
                            <label htmlFor="name" className='mb-1'>Name:</label>
                            <input
                                type="text"
                                className='border-2 rounded-md px-2 py-1 border-zinc-9 bg-white'
                                placeholder='Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="email" className='mb-1'>Email:</label>
                            <input
                                type="email"
                                className='border-2 rounded-md px-2 py-1 border-zinc-9 bg-white'
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="name" className='mb-1'>Password:</label>
                            <input
                                type="password"
                                className='border-2 rounded-md px-2 py-1 border-zinc-9 bg-white'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='flex items-center w-full'>
                            <button
                                type="submit"
                                className='bg-green-600 text-sm border-3 border-green-900 text-white px-4 py-2 rounded-lg font-semibold cursor-pointer w-fit'
                            >Sign Up</button>
                        </div>
                    </div>
                </form>
                {signupSuccessful && (
                    <div>
                        <p className='text'>{message} Please login <button onClick={() => navigate('/login')} className='text-green-600 font-bold cursor-pointer'>here</button></p>
                    </div>
                )}
                {signupFailed && (
                    <div>
                        <p className='text'>{message} Try again.</p>
                    </div>
                )}
                {/* {message} */}
            </div>
        </div>
    )
}

export default Signup
