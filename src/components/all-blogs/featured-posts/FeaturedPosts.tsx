import blogs from '@/utilities/blogs'
import Image from 'next/image'
import React from 'react'

const FeaturedPosts = () => {
  return (
  <section className='px-[15px]'>
      <div className='lg:px-[6rem] sm:px-[2rem] md:px-[4rem] w-full h-auto mt-8'>
        <div className='flex justify-center mb-5'>
            <div className='flex flex-col items-center gap-3 mb-3'>
                <h1 className='font-sans sm:text-[24px] md:text-[28px] lg:text-[36px] font-medium traching-[1.2]'>Featured Posts</h1>
                <div className='bg-orange-500 w-[60px] h-[1px]'></div>
            </div>
        </div>

        <div className="w-full mt-1">
        <div className="flex gap-6 lg:justify-between sm:flex-row flex-col">
          {blogs.slice(0, 3).map((blog) => (
            <div key={blog.title} className="flex-1 relative bg-black">
              <div className="relative w-full h-[250px] md:h-[260px] sm:h-[270px]">
                <div className='absolute inset-0 bg-black opacity-50'>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="transition-all duration-500"
                  />
                </div>
                <div className='absolute pb-5  inset-0 flex items-end px-6'>
                  <h1 className='text-white text-[19px] font-semibold tracking-[1.4] font-sans hover:text-blue-300 cursor-pointer'>{blog.comment}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className='w-full my-14 '>
          <Image src='/images/banner-shop.jpg' alt='banner' width={1230} height={100} className=' lg:px-[6rem] sm:px-[2rem] md:px-[4rem] h-auto cursor-pointer'></Image>
    </div>
</section>
  )
}

export default FeaturedPosts