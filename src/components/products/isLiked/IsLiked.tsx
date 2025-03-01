'use client'
import React, { useState } from 'react'
import { MdFavoriteBorder } from 'react-icons/md';

const IsLiked = () => {
    const[isLiked, setIsLiked] = useState(false);

  return (
    <div onClick={() => setIsLiked(!isLiked)} className='absolute top-2 right-2 z-30 bg-white w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer'>
    {isLiked ? (<MdFavoriteBorder  className='text-red-600 font-extrabold'/>) : (<MdFavoriteBorder />)}
  </div>
  )
}

export default IsLiked