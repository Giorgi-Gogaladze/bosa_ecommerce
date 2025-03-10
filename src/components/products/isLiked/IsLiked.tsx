'use client'
import React, { useState } from 'react'
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';

const IsLiked = () => {
    const[isLiked, setIsLiked] = useState(false);

  return (
    <div onClick={() => setIsLiked(!isLiked)} className='absolute top-2 right-2 z-30 bg-white w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer'>
    {isLiked ? (<HiHeart  className='text-red-600 font-extrabold'/>) : (<HiOutlineHeart />)}
  </div>
  )
}

export default IsLiked