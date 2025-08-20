import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router'
import Home from './Pages/Home/Home'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/Login/Login'
import Profile from './Pages/Profile/Profile'

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
