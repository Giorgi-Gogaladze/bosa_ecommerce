'use client'
import React, { useState } from 'react'
import blogs from '@/utilities/blogs';
import Image from 'next/image';
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";


const BlogSlider:React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const blogsfor = blogs.slice(0, 4);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogsfor.length)
  }
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blogsfor.length) % blogsfor.length);
  }
  const circleIndex = (index:number) => {
      setCurrentIndex(index)
  }

  return (
    <section className='h-auto w-full overflow-hidden relative'>
        <div className='flex transition-transform duration-500 h-full'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {blogsfor.map((blog) => (
              <div key={blog.title} className='min-w-full h-screen relative'>
                  <Image src={blog.image} alt={blog.title} width={750} height={344} className='object-cover object-center w-full h-full z-0 '></Image>
              </div>
            ))}
        </div>
          <button className='absolute right-5 top-1/2 transform  -translate-y-4'
            onClick={nextSlide}>
            <SlArrowRight className='text-white sm:text-[20px] md:text-[30px] lg:text-[45px]' />
          </button> 
          <button className='absolute left-5 top-1/2 transform  -translate-y-4 '
            onClick={prevSlide}>
            <SlArrowLeft className='text-white  sm:text-[20px] md:text-[30px] lg:text-[45px]'/>
          </button>
        <div className='absolute bottom-2 right-0 left-0'>
            <div className="flex items-center justify-center gap-2">
              {blogsfor.map((_, index) => (
                <div onClick={() => circleIndex(index)} key={index} className={`transition-all w-3 h-3 cursor-pointer bg-white rounded-full ${currentIndex == index ? 'p-2' : 'bg-opacity-50' } `}>
                </div>
              ))}
            </div>
        </div>
      </section> 
  )
}

export default BlogSlider