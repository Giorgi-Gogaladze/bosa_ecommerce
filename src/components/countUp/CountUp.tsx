'use client'
import React from 'react'
import CountUp from 'react-countup'

const CountUP = () => {
  return (
    <div className='p-[10px] absolute bottom-[0.2rem] left-[10rem] w-[42rem] h-[11rem] bg-white z-10'>
                    <div className='p-6 grid w-full h-full grid-cols-3  bg-creamy font-sans'>
                        <div className=' flex flex-col gap-2 items-center justify-center border-r-2 '>
                            <div>
                              <span><CountUp start={200} end={245} duration={3} className='text-[45px] text-headercol font-bold'></CountUp></span><span className='text-[45px] text-headercol font-bold'>+</span>
                              <p className='text-[16px] font-normal  text-darkgray'>Posted stories</p>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-2 items-center justify-center border-r-2'>
                        <div>
                              <span><CountUp start={100} end={135} duration={3} className='text-[45px] text-headercol font-bold'></CountUp></span><span className='text-[45px] text-headercol font-bold'>+</span>
                              <p className='text-[16px] font-normal text-darkgray'>Complited Projects</p>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-2 items-center justify-center '>
                        <div>
                              <span><CountUp start={500} end={741} duration={3} className='text-[45px] text-headercol font-bold'></CountUp></span><span className='text-[45px] text-headercol font-bold'>+</span>
                              <p className='text-[16px] font-normal text-darkgray'>Happy Customer</p>
                            </div>
                        </div>
    
                    </div>
                </div>

  )
}

export default CountUP