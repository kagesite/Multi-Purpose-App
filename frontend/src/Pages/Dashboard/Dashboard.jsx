import React from 'react'
import HeaderNav from '../../Components/HeaderNav'
import { useState } from 'react'

function Dashboard({ setIsLoggedIn, isLoggedIn }) {
    const [projects, setProjects] = useState([
        {
            id: 1,
            name: "Todo List",
        },
        {
            id: 2,
            name: "Weather App",
        },
        {
            id: 3,
            name: "Brand Form",
        },
    ]);


    return (
        <div>
            <HeaderNav setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
            <div className='bg-zinc-100 flex flex-col w-full min-h-screen items-center p-8'>
                <h1 className='font-semibold text-4xl'>Dashboard</h1>
                <div className='my-8'>
                    <ul className='flex flex-col gap-4'>
                        {projects.map((project, i) => (
                            <li key={i} className='flex border-3 border-zinc-900 bg-zinc-200 w-xl rounded-lg'>
                                <div className='bg-green-500 rounded-l-md w-[40px] text-white font-semibold text-center py-4'>
                                    <span>{project.id}</span>
                                </div>
                                <div className='px-4 py-4 font-semibold text-xl'>
                                    <p>{project.name}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
