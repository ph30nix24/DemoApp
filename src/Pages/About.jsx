import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className='h-screen'>
        <div className='h-[10%] flex justify-around text-2xl items-center'>
            <Link to="/">Home</Link>
            <Link to="/contact">ContactUs</Link>
        </div>
        <h1 className='h-[90%] w-full text-center text-4xl'>About pages</h1>
        
    </div>
  )
}

export default About