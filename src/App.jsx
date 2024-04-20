import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signi from './pages/Signi'
import Signup from './pages/Signup'
import Profile from './pages/Profile'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about-us" element={<About></About>}></Route>
      <Route path="/sign-in" element={<Signi></Signi>}></Route>
      <Route path="/sign-up" element={<Signup></Signup>}></Route>
      <Route path="/profile" element={<Profile></Profile>}></Route>
    


    </Routes>
    </BrowserRouter>
  )
}
