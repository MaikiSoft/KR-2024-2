import React from 'react'
import Login from './components/pages/Login'
import DashBoard from './components/pages/DashBoard'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
