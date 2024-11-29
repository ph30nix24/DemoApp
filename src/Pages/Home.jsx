import React from 'react'
import { Link } from 'react-router-dom'
import Image1 from '../../public/Image1.jpg'
const Home = () => {
  return (
    <div className='h-screen'>
        <div className='h-[10%] flex justify-around text-2xl items-center'>
            <Link to="/about">About</Link>
            <Link to="/contact">ContactUs</Link>
        </div>
        <div className='h-[90%] w-full'>
            <h1 className='text-center text-4xl'>Home pages</h1>
            <img src={Image1} alt="" />
        </div>
    </div>
  )
}

export default Home