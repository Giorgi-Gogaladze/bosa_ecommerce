import Image from 'next/image'
import React from 'react'

const Introduction = () => {
  return (
    <main className='lg:px-[6.5rem] md:px-[4rem] sm:px-[2rem] px-[6rem] h-[300px]  bg-creamy flex justify-between'>
                <div className='h-full w-[1rem] flex lg:items-center md:items-center sm:items-center items-end'>
                    <h1 className='lg:text-[4rem] md:text-[3rem] sm:text-[2rem] text-[2rem] font-bold'>INTRODUCTION</h1>
                </div>
                <div className='overflow-hidden'>
                    <Image src='/images/about-introduction.png' alt='image' width={900} height={765} className=' object-cover object-center w-full h-full'></Image>
                </div>
            </main>
  )
}

export default Introduction