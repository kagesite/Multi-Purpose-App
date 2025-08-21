import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router'
import Home from './Pages/Home/Home'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/Login/Login'
import Profile from './Pages/Profile/Profile'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <Router>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/signup'
                    element={isLoggedIn ? <Navigate to={"/profile"} /> : <Signup setIsLoggedIn={setIsLoggedIn} />}
                />
                <Route
                    path='/login'
                    element={isLoggedIn ? <Navigate to={"/profile"} /> : <Login setIsLoggedIn={setIsLoggedIn} />}
                />
                <Route
                    path='/profile'
                    element={isLoggedIn ? <Profile setIsLoggedIn={setIsLoggedIn} /> : <Navigate to={"/login"} />}
                />
            </Routes>
        </Router>
    )
}

export default App
