import React from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderNav from '../../Components/HeaderNav';

function Home({ setIsLoggedIn }) {
    const navigate = useNavigate();

    return (
        <div className='h-full'>
            <HeaderNav setIsLoggedIn={setIsLoggedIn} />
            <div className='bg-zinc-100 flex flex-col w-full min-h-screen items-center p-8'>
                <h2 className='text-3xl font-semibold'>Welcome Home!</h2>
                <div className='bg-zinc-200 p-8 w-lg rounded-lg border-2 mt-8'>
                    <h3 className='text-2xl mb-2 font-bold'>Welcome to Kage's Multi Purpose App</h3>
                    <p>Please create an Account or login to use this App!</p>
                </div>
                <div className='bg-zinc-200 p-8 w-lg rounded-lg border-2 mt-8'>
                    <h3 className='text-2xl mb-4 font-bold'>What's in my app?</h3>
                    <hr className='mb-4 border-1' />
                    <p className='mb-2'>
                        This is an app with multiple built in projects displaying different things I've built.
                    </p>
                    <strong>Create an account or login to see!</strong>
                </div>
            </div>
        </div>
    )
}

export default Home
