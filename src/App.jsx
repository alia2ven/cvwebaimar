import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Welcome from './Pages/Welcome'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Welcome" element={<Welcome />} />
    
    </Routes>
  )
}

export default App


