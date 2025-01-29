import React from 'react'
import Image from 'next/image';
import { NewArr } from '../new-arrivals/NewArr';

export const Products = () => {
  return (
    <section className='mb-7'>
        <div className='flex flex-row w-full h-50 gap-8 justify-center'>
            <div className="w-[22rem] h-[16rem] overflow-hidden">
                <Image src='/images/macbook.jpg' alt='macbook' width={350} height={350} className='object-cover object-center h-full w-full'/>
            </div>
            <div className="w-[22rem] h-[16rem] overflow-hidden">
                <Image src='/images/watch.jpg' alt='macbook' width={350} height={350} className='object-cover object-center h-full w-full'/>
            </div>
        </div>
        <div className='w-full h-[34px] flex justify-between mt-8'>
            <div className='w-full h-full flex flex-col justify-center'>
                <div className='border-y border-gray-400 h-[3px]'></div>
            </div>
            <div className='mx-1'>
                <div className='w-[115px] h-[34px] text-white bg-newArrivals text-sm font-medium flex items-center justify-center p-1'>NEW ARRIVALS</div>
            </div>
            <div className='w-full h-full flex flex-col justify-center'>
                <div className='border-y border-gray-400 h-[3px]'></div>
            </div>
        </div>
        <NewArr />
    </section>
  )
}
