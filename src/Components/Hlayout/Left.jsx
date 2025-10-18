import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Left({ category }) {
  const [select,setselect]=useState(null)
  const nav=useNavigate()
  const handleclick=(id)=>{

    setselect(id)
    nav(`/category/${id}`)

  }
  return (
    <div>
      <h2 className='font-bold mb-2'>Categories</h2>
      <ul className='space-y-2'>
        {Array.isArray(category) &&
          category.map((cat) => (
            <li key={cat.id} onClick={()=>handleclick(cat.id)} 
             className={`p-2 cursor-pointer rounded-md transition-colors duration-200
                ${select===cat.id ? 
'bg-gray-300 text-black' : 'bg-transparent text-gray-700 hover:bg-gray-200 hover:text-black'}
              `}>
              {cat.name}
            </li>
          ))}
      </ul>
    </div>
  );
}
