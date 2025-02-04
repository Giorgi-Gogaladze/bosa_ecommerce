'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

const VideoModal = () => {
    const[isOpen, setIsOpen]=useState(false);
    const[windowSize, setWindowSize]=useState({width: 0, height: 0});

    useEffect(() => {
        setWindowSize({width: window.innerWidth, height: window.innerHeight})
    },[])
  return (
    <>
        <div className='relative w-full h-full'>
            <Image src='/images/video-modal.jpg' alt='videoModal' width={600} height={450}></Image>
            <button onClick={() => setIsOpen(true)}  className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/ flex items-center justify-center w-[5rem] h-[5rem] rounded-full bg-white'><FaPlay  className='text-[2rem] text-black '/></button>
        </div>  
        {isOpen && (
            <div className='fixed p-0 m-0 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-30'>
                <button onClick={() => setIsOpen(false)} className='absolute top-1 right-5 text-black text-3xl p-1 bg-white rounded-full'><IoIosCloseCircleOutline /></button>
                <iframe width={windowSize.width} height={windowSize.height}  src="https://www.youtube.com/embed/5OZ-JOSWx1Q" title="YouTube video player" >
                </iframe>
            </div>
            )
        }        
    </>       
  )
}

export default VideoModal