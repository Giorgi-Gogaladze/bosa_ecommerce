'use client'
import images from '@/utilities/Images'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoMdClose} from 'react-icons/io'

const Gallery = () => {
    const[openedImage, setOpenedImage] = useState<string | null>(null)
  return (
    <>
        <div className='w-full'>
            <div className='w-full flex flex-col items-center mt-[5rem] mb-3'>
                <span className="relative flex items-center text-[20px] font-jost before:content-[''] before:w-10 before:h-[1px] before:bg-orange-600 before:absolute before:left-[-50px] after:content-[''] after:w-10 after:h-[1px] after:bg-orange-600 after:absolute after:right-[-50px]">Image Gallery</span>
            </div>
            <div className='grid lg:grid-cols-4  grid-cols-4 gap-4 w-full'>
                {images.map((image) => (
                <div 
                    onClick={() => setOpenedImage(image.url)}
                    key={image.imageId}
                    className='lg:w-[70px] lg:h-[70px] md:w-[50px] md:h-[50px] w-[100px] h-[100px] overflow-hidden bg-gray-100 cursor-pointer'
                >
                    <Image 
                        src={image.url} 
                        alt='image' 
                        width={1200} 
                        height={1200} 
                        className='w-full h-full object-cover object-center'
                    />
                </div>
                ))}
            </div>
            {openedImage && (
                <div className='fixed inset-0 bg-black bg-opacity-80  z-30'>
                    <button 
                    onClick={() => setOpenedImage(null)}
                    className='absolute top-5 right-5'
                    >
                        <IoMdClose className='text-white text-[32px]' />
                    </button>

                    <div className='w-screen h-screen overflow-hidden flex items-center justify-center'>
                      <Image 
                    src={openedImage}
                    alt='opened Image'
                    width={1200}
                    height={1200}
                    className='object-cover object-center scale-50' />  
                    </div>
                    
                </div>
            )

        }
        </div>

        <div className='w-full my-[3rem] h-auto overflow-hidden cursor-pointer flex justify-center'>
            <a href="https://blank.page/"target='blank'>
                <Image 
                src='/images/ad.jpg' 
                alt='logo' 
                width={1200} 
                height={1200} 
                className='w-full h-full object-cover object-center' />
            </a>
        </div>



    </>
  )
}

export default Gallery