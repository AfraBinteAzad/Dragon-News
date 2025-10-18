import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import save from "../../assets/save-instagram.png"
import share from "../../assets/share.png"
export default function CategoryNews() {
  const {id}=useParams()
  const [category,setcategory]=useState([])
  useEffect(() => {
    fetch('/news.json')
      .then(res => res.json())
      .then(data => {
        let matched = []
        if (Number(id) === 0) {
          matched = data
        } else {
  
          matched = data.filter(cat => cat.category_id === Number(id))
        }
        setcategory(matched)
      })
      .catch(err => console.error('Error fetching categories:', err))
  }, [id])
  console.log(category)
  return (
    <div>
      
       {category.length > 0 ? (
        category.map(news => (
          <div key={news.id} className='m-2 w-full'>
           <div className="card bg-base-100 w-96 shadow-sm">
  <div className='w-full bg-[#E7E7E7] flex justify-between items-center gap-4'>
  <div className='flex gap-1.5 justify-center items-center'>
  <img src={news.author.img} alt="" className='w-[50px] h-[50px] rounded-[25px] p-2'/>
  <div className='flex flex-col'>
  <p className='font-bold'>{news.author.name}</p>
  <p  className='text-gray-500'>{news.author.published_date}</p>
  </div>
  
  </div>
  <div className='flex gap-2 justify-center items-center p-2'>
   <img src={save} alt="" className='w-[20px] h-[20px]'/>
   <img src={share} alt="" className='w-[20px] h-[20px]'/>
  </div>
  </div>
  <div className="card-body">
    <h2 className="card-title">{news.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
           
          </div>
        ))
      ) : (
        <p className="text-gray-500">No news found for this category.</p>
      )}
     
    </div>
  )
}
