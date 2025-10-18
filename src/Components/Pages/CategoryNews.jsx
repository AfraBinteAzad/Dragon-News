import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
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
          <div key={news.id} className="border p-4 mb-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
           
          </div>
        ))
      ) : (
        <p className="text-gray-500">No news found for this category.</p>
      )}
     
    </div>
  )
}
