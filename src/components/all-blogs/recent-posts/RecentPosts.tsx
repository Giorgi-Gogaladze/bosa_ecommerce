import React from 'react'
import blogs from '@/utilities/blogs'
import Image from 'next/image';
import { FaCalendar,  FaRegCommentDots,   FaUser } from 'react-icons/fa6';
import { FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link'
import Heading from '@/components/heading/Heading';

const RecentPostss:React.FC = () => {

  const twoblogs = blogs.slice(1, 3);
  const fourblogs = blogs.slice(1, 5);
  return (
    <main className='lg:px-[6.5rem] md:px-[4rem] sm:px-[2rem] w-full'>
        <article className='flex justify-start mt-7 mb-3'>
            <div className='flex flex-col items-start gap-3 mb-7'>
              <h1 className='font-sans sm:text-[20px] md:text-[24px] lg:text-[30px] font-medium traching-[1.2]'>Reacent Posts</h1>
            <div className='bg-orange-500 w-[60px] h-[2px]'></div>
            </div>
        </article>

        <section className='w-full h-auto flex flex-col gap-6 lg:flex-row'>
          <div className='mb-8'>
          <div className='flex flex-col lg:flex-row gap-4 w-full mb-14'>
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

          <article className='mb-7'>
            <div className='w-full h-auto grid grid-cols-1 grid-rows-4 gap-4 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-2'>
              {fourblogs.map((blog) => (
                <div key={blog.title} className='flex flex-row gap-4 sm:w-full'>
                  <div className='w-[92px] h-[88px] overflow-hidden'>
                    <Image src={blog.image} alt='image' width={100} height={100} className='w-full h-full object-cover object-center '></Image>
                  </div>
                  <div className='pt-2 '>
                    <h1 className="text-[12px] text-red-600 cursor-pointer underline">{blog.title}</h1>
                    <p className='font-jost'>{blog.something}</p>
                    <div className='inline-flex space-x-2'>
                      <FaCalendar className="text-red-500 text-xs" />
                      <span className="mr-[35px] text-[12px] font-semibold">{blog.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
          </div>
          
          <aside className='w-full relative'>
            <Heading headingText={'REACENT POSTS '} />
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
            <div className='flex flex-row justify-center my-8 '>
              <div className='w-[160px] h-[50px] overflow-hidden'>
              <Link href='/' >
                <Image className='w-full h-full object-cover ' src='/images/logo.png' alt='logo' width={1200} height={300}></Image>
              </Link>
              </div>
            </div>
          </aside>
        </section>
    </main>
  )
}

export default RecentPostss
