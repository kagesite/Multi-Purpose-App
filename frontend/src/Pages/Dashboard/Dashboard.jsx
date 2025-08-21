import React from 'react'
import HeaderNav from '../../Components/HeaderNav'

function Dashboard({setIsLoggedIn}) {
    return (
        <div>
            <HeaderNav setIsLoggedIn={setIsLoggedIn}/>
            <div className='bg-zinc-100 flex flex-col w-full min-h-screen items-center p-8'>
                <h1>This is the dashbaord</h1>
            </div>
        </div>
    )
}

export default Dashboard
