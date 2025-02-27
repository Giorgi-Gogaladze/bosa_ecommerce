'use client'
import blogs from '@/utilities/blogs'
import Image from 'next/image'
import React from 'react'
import { FaCalendar, FaRegComments, FaUser } from 'react-icons/fa'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'

const BlogScrollableCards = () => {
 
  return (
    <section className='lg:px-[6rem] md:px-[4rem] sm:px-[2rem] w-full'>
        <div className='mt-4'>
            <article className='flex justify-center mt-7 mb-3'>
                <div className='flex flex-col items-center gap-3 mb-7'>
                    <h1 className='font-sans sm:text-[20px] md:text-[24px] lg:text-[30px] font-medium traching-[1.2]'>You May Also Like</h1>
                    <div className='bg-orange-500 w-[60px] h-[1px]'></div>
                </div>
            </article>

            <main className='w-full h-auto relative'>
                <div className='flex flex-row gap-4 w-full overflow-hidden mb-10 '>
                    {blogs.map((blog, index) => (
                        <div key={index} className='lg:w-[22rem] h-[310px] md:w-[18rem] sm:w-[16rem] w-[16rem]  cursor-pointer'>
                            <div className='lg:w-[22rem] md:w-[18rem] sm:w-[16rem] w-[16rem] h-[170px] relative group'>
                                <Image src={blog.image} alt='imge' width={360} height={170} className='object-cover object-center w-full h-full'></Image>
                                <div className='absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-40 transition duration-300'></div>
                            </div>
                            <div className='text-black px-4 pt-3 text-[20px] font-light tracking-[1.4]'>
                                <span className='font-jost hover:text-hovercol'>{blog.something}</span>
                                <h1 className="text-[18px] tracking-[1.4] font-sans cursor-pointer hover:text-blue-300">
                                <div className="inline-flex  space-x-3 text-[12px] items-center mt-3">
                                    <FaCalendar className="text-red-600 " />
                                    <span className='font-jost text-[13px] font-normal text-infogray '>{blog.date}</span>
                                                        
                                    <FaUser className="text-red-600 " />
                                    <span className='font-jost text-[13px] font-normal text-infogray '>Demoteam</span>
                                                        
                                    <FaRegComments className="text-red-600 " />
                                    <span className='font-jost text-[13px] font-normal text-infogray '>{blog.coms}</span>
                                </div>
                                </h1>
                            </div>
                            
                        </div>
                    ))}
                <div className='absolute bottom-[-20px] w-full flex flex-row justify-center'>
                    <div className=' w-[200px] flex flex-row justify-between'>
                        <IoIosArrowDropleftCircle className=' text-blue-500 text-[2.2rem] cursor-pointer hover:text-blue-800' />
                        <IoIosArrowDroprightCircle className=' text-blue-500 text-[2.2rem] cursor-pointer hover:text-blue-800' />
                    </div>
                </div>
                    
                </div>
            </main>
        </div>
    </section>
  )
}

export default BlogScrollableCards