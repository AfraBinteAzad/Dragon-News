import React from 'react'
import Marquee from 'react-fast-marquee'
import { useLoaderData } from 'react-router'

export default function Latest() {
    const news=useLoaderData()
    console.log(news)
  return (
    <div className='max-w-[1200px] font-Poppins mx-auto bg-[#E7E7E7] flex gap-2 justify-center items-center p-3'>
        
          <button className='bg-[#D72050] p-2 m-2 text-white text-medium'>Latest</button>
        <Marquee className='flex gap-2' pauseOnHover={true}>
        {news.map((item) => (
          <p key={item.id} className='font-medium px-4'>
            {item.title} &nbsp;|&nbsp;
          </p>
        ))}
        </Marquee>
     
    </div>
  )
}
