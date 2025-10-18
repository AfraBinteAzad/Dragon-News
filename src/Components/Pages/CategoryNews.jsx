import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import save from "../../assets/save-instagram.png"
import share from "../../assets/share.png"
import star from "../../assets/star.png"
import eye from "../../assets/view.png"



export default function CategoryNews() {
  const {id}=useParams()
  const [expanded, setExpanded] = useState(false)
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

   const current =new Date()
    const format=current.toLocaleDateString('en-US',
        {
            weekday:'long',
            year:'numeric',
            month:'long',
            day:'numeric'
        }
    )
  console.log(category)
  return (
    <div className='justify-center items-center'>
      
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
    <img src={news.image_url} alt="" className='rounded-xl'/>
   <div>
    <p className='text-gray-500 font-Poppins font-medium text-left'>
    {format} 
    </p>
    <p className='text-gray-500 font-Poppins font-semibold text-left'>
     Tags: {news.tags.map((tag, index) => (
    <span key={index}>
      {tag}{index < news.tags.length - 1 && ', '}
    </span>
  ))}
    </p>
  <p
        className={`text-gray-700 text-sm font-Poppins transition-all duration-200 ${
          expanded ? '' : 'line-clamp-4'
        }`}
      >
        {news.details}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-red-600 font-medium mt-2 hover:underline"
      >
        {expanded ? 'Read Less' : 'Read More'}
      </button>

   <div className='flex justify-between w-full items-center m-2'>
     <div className='flex gap-2'>
    {Array.from({ length: news.rating.number }, (_, i) => (
    <img 
      key={i} 
      src={star} 
      alt="star" 
      className='w-[20px] h-[20px]' 
    />
  ))}
    <p>{news.rating.number}</p>
  </div> 
  <div className='flex gap-2'>
   <img src={eye} alt="" className='w-[20px] h-[20px]'/>
   <p>{news.total_view}</p>
  </div>
  </div>  
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
