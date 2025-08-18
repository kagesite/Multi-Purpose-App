import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router'
import Home from './Components/Home/Home'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Profile from './Components/Profile/Profile'

function App() {
    return (
        <Router>
            <Routes>
                <Route 
                    path='/'
                    element={<Home />}
                />
                <Route 
                    path='/signup'
                    element={<Signup />}
                />
                <Route 
                    path='/login'
                    element={<Login />}
                />
                <Route 
                    path='/profie'
                    element={<Profile />}
                />
            </Routes>
        </Router>
  )
}

export default App
