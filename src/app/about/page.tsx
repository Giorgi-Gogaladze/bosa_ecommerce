import CountUP from '@/components/countUp/CountUp'
import VideoModal from '@/components/videoModal/VideoModal'
import Image from 'next/image'
import React from 'react'

const page = () => {

  return (
    <section className='w-full h-auto'>
        <main className='px-[6.5rem] h-[300px]  bg-creamy flex justify-between'>
            <div className='h-full w-[1rem] flex items-center'>
                <h1 className='text-[4rem] font-bold'>INTRODUCTION</h1>
            </div>
            <div className='overflow-hidden'>
                <Image src='/images/about-introduction.png' alt='image' width={900} height={765} className=' object-cover object-center w-full h-full'></Image>
            </div>
        </main>

        <div className='px-[6.5rem] grid grid-cols-2 gap-4 w-full h-[500px] my-16 py-4 relative'>
            <div className='flex flex-col gap-6'>
                <div>
                    <h1 className='text-[40px] font-sans font-medium'>A Better Platform To Shopping Online !!</h1>
                </div>
                <div>
                    <p className='leading-[1.8] text-[15px] font-sans text-darkgray'>Vel aliquip felis duis quidem consectetur libero placeat tellus scelerisque litora culpa fusce feugiat asperiores cupidatat dapibus primis pede aliquam. Augue laoreet nibh tempor. Venenatis. Nam est justo incidunt hendrerit dolore nostra.
                    Eius ut reprehenderit aut facilisis? Natus quaerat eget, sapien libero alias facilisis, habitasse culpa conubia tellus aspernatur totam, imperdiet debitis? Nec eius, impedit feugiat odio.</p>
                </div>
            </div>
            <div><VideoModal /></div>
            <div><CountUP /></div> 
        </div>

        <div className='px-[6.5rem] w-full h-auto relative mb-[5rem]'>
            <div className='flex justify-center z-0 w-full'>
                <Image src='/images/about-camera.jpg' alt='camera' width={450} height={414}></Image>
            </div>
                <div className='w-[21rem] absolute top-0'>
                    <div className='h-auto w-full flex flex-col gap-3 shadow-lg p-7 mt-7 bg-white'>
                        <div>
                            <h1 className='text-[25px] text-headercol font-semibold font-sans'>Our Vision...</h1>
                        </div>
                        <div className='font-sans text-darkgray flex flex-col gap-3 tracking-[1.8] text-[15px]'>
                            <p>Vel aliquip felis duis quidem consectetur libero placeat tellus scelerisque litora culpa fusce feugiat asperiores cupidatat.</p>
                            <p>Eius ut reprehenderit aut facilisis? Natus quaerat eget, sapien libero alias facilisis, habitasse culpa conubia tellus.</p>
                        </div>
                    </div>
                </div>
                <div className='w-[21rem] absolute top-0 right-[6.5rem]'>
                    <div className='h-auto w-full flex flex-col gap-3 shadow-lg p-7 mt-14 bg-white'>
                        <div>
                            <h1 className='text-[25px] text-headercol font-semibold font-sans'>Our Mission...</h1>
                        </div>
                        <div className='font-sans text-darkgray flex flex-col gap-3 tracking-[1.8] text-[15px]'>
                            <p>Vel aliquip felis duis quidem consectetur libero placeat tellus scelerisque litora culpa fusce feugiat asperiores cupidatat.</p>
                            <p>Eius ut reprehenderit aut facilisis? Natus quaerat eget, sapien libero alias facilisis, habitasse culpa conubia tellus.</p>
                        </div>
                    </div>
                </div>   
            </div>
    </section>
  )
}

export default page
