import React from 'react'
import logo from "../../assets/logo.png"

export default function Header() {
    const current =new Date()
    const format=current.toLocaleDateString('en-US',
        {
            weekday:'long',
            year:'numeric',
            month:'long',
            day:'numeric'
        }
    )
  return (
    <div className='flex flex-col gap-3 justify-center items-center m-5'>
      <img src={logo} alt="" className=''/>
      <p className='font-Poppins text-gray-500'>Journalism Without Fear or Favour</p>
      <p className='font-Poppins text-gray-600 font-medium'>
        {format}
      </p>
    </div>
  )
}
