import React from 'react'
import { Link } from 'react-router-dom'
const ContactUs = () => {
  return (
    <div className='h-screen'>
        <div className='h-[10%] flex justify-around text-2xl items-center'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
        <h1 className='h-[90%] w-full text-center text-4xl'>ContactUs pages</h1>
        
    </div>
  )
}

export default ContactUs