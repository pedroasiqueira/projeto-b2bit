// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Profile from "./pages/Profile"

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/profile" element={ <Profile /> } />
    </Routes>
  )
}

export default App
