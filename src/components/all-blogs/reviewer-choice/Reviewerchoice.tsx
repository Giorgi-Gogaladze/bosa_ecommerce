import blogs from '@/utilities/blogs'
import Image from 'next/image'
import React from 'react'
import { FaCalendar, FaRegComments, FaUser } from 'react-icons/fa6'

const Reviewerchoice:React.FC = () => {
  return (
    <main>
        <article className='flex justify-center'>
            <div className='flex flex-col items-center gap-3 mb-7'>
                <h1 className='font-sans sm:text-[24px] md:text-[28px] lg:text-[36px] font-medium traching-[1.2]'>Reviewer`s Choice</h1>
                <div className='bg-orange-500 w-[60px] h-[2px]'></div>
            </div>
        </article>
        <section className='lg:px-[6.5rem] md:px-[4rem] sm:px-[2rem] w-full'>
            <div className = 'grid lg:grid-cols-5 md:grid-cols-1 gap-6 min-h-[500px] w-full'>
                    {blogs.slice(0, 1).map((blog) => (
                    <div key={blog.title} className='lg:col-span-2  sm:w-full overflow-hidden relative'> {/*///////////  */}
                        <Image src='/images/blog1.jpg' alt='image' width={768} height={512} className='object-cover h-full w-full'/>
                    
                        <div className='absolute inset-0 bg-black/50'></div>

                        <div className='absolute bottom-4 left-4 text-white'>
                            <span className="bg-red-500 text-xs px-2 py-1">{blog.title}</span>
                            <h1 className="text-[18px] tracking-[1.4] font-sans cursor-pointer hover:text-blue-300">
                                <div className="inline-flex space-x-1 text-[12px] items-center">
                                    <FaCalendar className="text-white" />
                                    <span>{blog.date}</span>
                            
                                    <FaUser className="text-white" />
                                    <span>Demoteam</span>
                            
                                    <FaRegComments className="text-white" />
                                    <span>{blog.coms}</span>
                                </div>
                            </h1>
                        </div>
                    </div>))}

                    <div className='lg:col-span-3 grid lg:grid-cols-2 sm:grid-cols-1 grid-rows-2 gap-6'>
                        {blogs.slice(1, 4).map((blog) => (
                            <div key={blog.title} className='relative overflow-hidden '>
                                <Image src={blog.image} alt='image' width={768} height={512} className='object-cover object-center w-full h-full' />
                                
                                <div className='absolute inset-0 bg-black/50'></div>

                                <div className='absolute bottom-4 left-4 text-white'>
                                    <span className="bg-red-500 text-xs px-2 py-1">{blog.title}</span>
                                    <h1 className="text-[18px] tracking-[1.4] font-sans cursor-pointer hover:text-blue-300">
                                <div className="inline-flex text-[12px] space-x-1 items-center">
                                    <FaCalendar className="text-white" />
                                    <span>{blog.date}</span>
                            
                                    <FaUser className="text-white" />
                                    <span>Demoteam</span>
                            
                                    <FaRegComments className="text-white" />
                                    <span>0</span>
                                </div>
                            </h1>
                        </div>
                            </div>
                        ))}
                    </div> 
            </div>  
        </section>
    </main>

  )
}

export default Reviewerchoice