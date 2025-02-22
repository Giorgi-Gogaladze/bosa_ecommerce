import React from 'react'
import blogs from '@/utilities/blogs'
import Image from 'next/image';
import { FaCalendar,  FaRegCommentDots,   FaUser } from 'react-icons/fa6';
import { FaCalendarAlt } from 'react-icons/fa';

const RecentPostss:React.FC = () => {

  const twoblogs = blogs.slice(1, 3);
  return (
    <main className='lg:px-[6.5rem] md:px-[4rem] sm:px-[2rem] w-full'>
        <article className='flex justify-start mt-7 mb-3'>
            <div className='flex flex-col items-start gap-3 mb-7'>
                <h1 className='font-sans sm:text-[20px] md:text-[24px] lg:text-[30px] font-medium traching-[1.2]'>Reacent Posts</h1>
                <div className='bg-orange-500 w-[60px] h-[2px]'></div>
            </div>
        </article>
        <section className='w-full h-auto flex flex-col gap-6 lg:flex-row'>
          <div className='flex flex-col lg:flex-row gap-4 w-full '>
          {twoblogs.map((blog) => (
            <div key={blog.title} className='flex flex-col gap-3 w-full lg:w-[340px]' >
              <div className="flex flex-col gap-3 w-full lg:w-[340px] ">
                <div className="overflow-hidden w-full h-[245px]">
                  <Image
                    src={blog.image}
                    alt="image"
                    width={360}
                    height={257}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-3 px-3">
                  <span className="text-sm text-red-600 cursor-pointer underline">{blog.title}</span>
                  <div className="inline-flex space-x-2 items-center">
                    <FaCalendar className="text-red-500 text-xs" />
                    <span className="mr-[35px]">{blog.date}</span>

                    <FaUser className="text-red-500 text-xs" />
                    <span>Demoteam</span>
                  </div>
                  <p className="font-sans text-[15px]  leading-7">
                  Nemo adipiscing aspernatur natoque corporis ullam lobortis dicta conubia reprehenderit deserunt ipsam! Enim ex ullam
                  </p>
                  <h1 className="text-[12px] text-infogray">
                  </h1>
                </div>
              </div>
            </div>
          ))}
          </div>

          <aside className='w-full relative'>
            <div className='flex flex-row items-center gap-2 absolute top-[-60px] left-[90px]'>
              <div className='w-[30px] h-[1px] bg-infogray'></div>
              <div className='text-[14px] font-sans font-semibold'>RECENT POSTS</div>
              <div className='w-[30px] h-[1px] bg-infogray'></div>
            </div>
            <div className='w-full h-auto'>
              {blogs.map((blog) => (
                  <div key={blog.title} className='w-full first:pt-0  py-4 border-b-[1px] border-gray-300 flex flex-row gap-4'>
                    <div className='w-[80px] h-[60px] overflow-hidden '>
                      <Image src={blog.image} alt='image' width={80} height={60} className='w-full h-full object-center object-cover'></Image>
                    </div>
                    <div className='flex flex-col justify-between min-w-[250px]'>
                      <h1 className='font-sans font-extralight text-[15px]'>{blog.title}</h1>
                        <div className="inline-flex space-x-3 text-[12px] items-center">
                          <div className='flex flex-row gap-1 items-center'>
                            <FaCalendarAlt className="text-infogray" />
                            <span className='text-[12px]'>{blog.date}</span> 
                          </div>
                          <div className='flex flex-row gap-1 items-center'>                                             
                            <FaRegCommentDots className="text-infogray" />
                            <span className='text-[12px]'>{blog.coms}</span>
                          </div> 
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </aside>
        </section>
    </main>
  )
}

export default RecentPostss
