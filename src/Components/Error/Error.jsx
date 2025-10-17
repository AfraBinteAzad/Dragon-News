import React from 'react'
import error from "../../assets/error-404.png"

export default function Error() {
  return (
    <div className='flex justify-center items-center'>
      <img src={error} alt="" className='m-8'/>
    </div>
  )
}
