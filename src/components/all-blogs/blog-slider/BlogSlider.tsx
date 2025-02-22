'use client'
import React, { useState } from 'react'
import blogs from '@/utilities/blogs';
import Image from 'next/image';
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";


const BlogSlider:React.FC = () => {
  const [currentIndex, setCurrnetIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrnetIndex((prevIndex) => (prevIndex + 1) % blogsfor.length)
  }
  const prevSlide = () => {
    setCurrnetIndex((prevIndex) => (prevIndex -1)% blogsfor.length)
  }
  const blogsfor = blogs.slice(0, 4);

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
          <button 
          className='absolute right-5 top-1/2 transform  -translate-y-4'
          onClick={nextSlide}
          ><SlArrowRight className='text-white sm:text-[20px] md:text-[30px] lg:text-[45px]' />
          </button> 
          <button 
          className='absolute left-5 top-1/2 transform  -translate-y-4 '
          onClick={prevSlide}
          ><SlArrowLeft className='text-white  sm:text-[20px] md:text-[30px] lg:text-[45px]'/>
          </button>
      </section> 
  )
}

export default BlogSlider