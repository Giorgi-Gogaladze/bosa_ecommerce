import React from 'react'
import { FaRegStar } from 'react-icons/fa6'

interface RatingProps {
  rating:number
}

const RatingStars:React.FC<RatingProps> = ({rating}) => {
  const roundedRating = Math.round(rating)

  return (
    <div className='flex gap-1'>
      {Array.from({length:roundedRating}).map((_, index) => (
        <FaRegStar key={index} className='lg:text-[14px] md:text-[16px] sm:text-[18px] text-[20px] text-yellow-400'/>
      ))}
    </div>
  )
}

export default RatingStars