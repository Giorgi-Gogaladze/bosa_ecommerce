'use client'
import React, { useState } from 'react'


const ProductsPages:React.FC = () => {
    const pages:number = 3;
    const[currentPage, setCurrentPage] = useState<number>(0);

    const handleIndex = (index:number) => {
        setCurrentPage(index)
    }
  return (
    <div className='w-full'>
        <div className='flex gap-4 justify-center mt-6'>
            {Array.from({length: pages}, (_, index) => (
                <button
                key={index}
                onClick={() => handleIndex(index)}
                className={`w-[40px] h-[40px] rounded-full border border-gray-400 text-blue-500 transition-colors ${
                    currentPage === index
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-500 hover:text-white"
                  }`}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    </div>
  )
}

export default ProductsPages