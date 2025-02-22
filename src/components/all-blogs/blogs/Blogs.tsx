import Image from 'next/image'
import React from 'react'

const Blogs = () => {
  return (
    <section>
        <div className='px-[6.5rem]  flex'>
        <div className='w-full h-[34px] flex justify-between '>
            <div className='w-full h-full flex flex-col justify-center'>
                <div className='border-y border-gray-400 h-[3px]'></div>
            </div>
            <div className='mx-1'>
                <div className='w-[115px] h-[34px] text-white bg-newArrivals text-sm font-medium flex items-center justify-center p-1'>LATEST BLOG</div>
            </div>
            <div className='w-full h-full flex flex-col justify-center'>
                <div className='border-y border-gray-400 h-[3px]'></div>
            </div>
        </div>
        </div>

        <div className='px-[6.5rem] mt-7 flex'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4'>
                <div className='h-96'>
                    <div className='w-[242px] h-[150px] overflow-hidden'>
                        <Image className='object-cover object-center w-full h-full' src='/images/blog1.jpg' alt='blog1' width={275} height={183}></Image>
                    </div>
                    <div className='flex flex-col gap-2 items-start'>
                        <h3 className='text-headercol font-medium text-[17px]'>Mollis sapien, id conubia curae nibh.</h3>
                        <p className='text-[12px] text-gray-400'>August 4, 2022</p>
                        <p className='text-[14px] font-sans'>Nemo adipiscing aspernatur natoque corporis ullam lobortis dicta conubia reprehenderit deserunt</p>
                    </div>
                </div>
                <div className='h-96'>
                    <div className='w-[242px] h-[150px] overflow-hidden'>
                        <Image className='object-cover object-center w-full h-full' src='/images/blog2.jpg' alt='blog1' width={275} height={183}></Image>
                    </div>
                    <div className='flex flex-col gap-2 items-start'>
                        <h3 className='text-headercol font-medium text-[17px]'>Mollis sapien, id conubia curae nibh.</h3>
                        <p className='text-[12px] text-gray-400'>August 4, 2022</p>
                        <p className='text-[14px] font-sans'>Nemo adipiscing aspernatur natoque corporis ullam lobortis dicta conubia reprehenderit deserunt</p>
                    </div>
                </div>
                <div className='h-96'>
                    <div className='w-[242px] h-[150px] overflow-hidden'>
                        <Image className='object-cover object-center w-full h-full' src='/images/blog3.jpg' alt='blog1' width={275} height={183}></Image>
                    </div>
                    <div className='flex flex-col gap-2 items-start'>
                        <h3 className='text-headercol font-medium text-[17px]'>Mollis sapien, id conubia curae nibh.</h3>
                        <p className='text-[12px] text-gray-400'>August 4, 2022</p>
                        <p className='text-[14px] font-sans'>Nemo adipiscing aspernatur natoque corporis ullam lobortis dicta conubia reprehenderit deserunt</p>
                    </div>
                </div>
                <div className='h-96'>
                    <div className='w-[242px] h-[150px] overflow-hidden'>
                        <Image className='object-cover object-center w-full h-full' src='/images/blog4.jpg' alt='blog1' width={275} height={183}></Image>
                    </div>
                    <div className='flex flex-col gap-2 items-start'>
                        <h3 className='text-headercol font-medium text-[17px]'>Mollis sapien, id conubia curae nibh.</h3>
                        <p className='text-[12px] text-gray-400'>August 4, 2022</p>
                        <p className='text-[14px] font-sans'>Nemo adipiscing aspernatur natoque corporis ullam lobortis dicta conubia reprehenderit deserunt</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blogs