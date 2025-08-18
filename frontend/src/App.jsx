import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router'
import Home from './Components/Home/Home'

function App() {
    return (
        <Router>
            <Routes>
                <Route 
                    path='/'
                    element={<Home />}
                />
            </Routes>
        </Router>
  )
}

export default App
