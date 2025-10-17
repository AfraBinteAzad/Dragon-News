import React from 'react'
import { NavLink } from 'react-router'
import user from '../../assets/user.png'

export default function Navbar() {
  return (
    <div className='max-w-[1200px] font-Poppins flex justify-between items-center mx-auto m-5'>
        <div></div>
     <div className='nav flex gap-2 md:gap-5  text-gray-500'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
     </div>
     <div className='flex gap-2 md:gap-5'>
        <img src={user} alt="" />
        <button className='font-bold text-white bg-[#1E1E1E] p-2'>Login</button>
     </div>
    </div>
  )
}
