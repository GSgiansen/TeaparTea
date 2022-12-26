import React from 'react'
import s from "../styles/profile.css"
import Navbar from "../components/Navbar.js"
import Profiledisplay from '../components/Profiledisplay'
const profile = () => {
  return (
    <div className='container'>
      <div className='header'>
      <Navbar />
      
      </div>
      <Profiledisplay/>
      

    </div>
  )
}

export default profile