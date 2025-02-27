'use client'
import React, { useState } from 'react'
import { BiAlignRight } from 'react-icons/bi'
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosCloseCircleOutline } from 'react-icons/io'

const TopHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

  const sideToggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <section className='w-full'> 
        <div className='flex justify-between items-center'>
            <ul className='hidden lg:flex gap-4'>
                <a href="https://blank.page/" target='blank'>
                    <li><FaFacebook  className='text-[14px] cursor-pointer hover:text-hovercol'/></li>
                </a>
                <a href="https://blank.page/" target='blank'>
                    <li><FaTwitter className='text-[14px] cursor-pointer hover:text-hovercol'/></li>
                </a>
                <a href="https://blank.page/" target='blank'>
                    <li><FaInstagram className='text-[14px] cursor-pointer hover:text-hovercol'/></li>
                </a>
                <a href="https://blank.page/" target='blank'>
                    <li><FaPinterest className='text-[14px] cursor-pointer hover:text-hovercol'/></li>
                </a>
                <a href="https://blank.page/" target='blank'>
                    <li><FaLinkedin className='text-[14px] cursor-pointer hover:text-hovercol'/></li>
                </a>
                <li onClick={sideToggle}><BiAlignRight  className='text-[16px] cursor-pointer hover:text-hovercol' /></li>
            </ul>
        </div>

        <div className='flex items-center justify-center w-full gap-3 lg:hidden'>
            <GiHamburgerMenu 
            onClick={sideToggle}
            className='text-[16px] hover:text-hovercol cursor-pointer font-semibold' />
            <span className="text-[15px] font-normal font-poppins leading-6 text-headercol uppercase">TOP MENU</span>
        </div>


        { isOpen && (
            <div 
            onClick={sideToggle}
            className='fixed inset-0 bg-black opacity-50 z-10'></div>
        )}

        <div className={`fixed top-0 right-0 w-[350px] h-full bg-whitebg px-6 transition-transform duration-300 ease-in-out z-20 ${ isOpen? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='w-full h-[40px] relative'>
                <IoIosCloseCircleOutline
                onClick={sideToggle} 
                className='absolute top-1 right-2 text-[40px] text-gray-400 cursor-pointer hover:text-hovercol' />
            </div>
            <div className='mt-[5rem] p-6 bg-white flex flex-col gap-4'>
                <h1 className='text-[1.3rem] font-semibold tracking-[1.8] font-jost'>Categories</h1>
                <div className='border-b border-gray-400'><a href="#">Electronics</a></div>
                <div className='border-b border-gray-400'><a href="#">Gadgets</a></div>
            </div>
            <div className='mt-[2rem] p-6 bg-white gap-4'>
            <ul className='hidden lg:flex gap-4'>
                <a href="https://blank.page/" target='blank'>
                    <li><FaFacebook  className='text-[14px] cursor-pointer hover:text-hovercol'/></li>
                </a>
                <a href="https://blank.page/" target='blank'>
                    <li><FaTwitter className='text-[14px] cursor-pointer hover:text-hovercol'/></li>
                </a>
                <a href="https://blank.page/" target='blank'>
                    <li><FaInstagram className='text-[14px] cursor-pointer hover:text-hovercol'/></li>
                </a>
                <a href="https://blank.page/" target='blank'>
                    <li><FaPinterest className='text-[14px] cursor-pointer hover:text-hovercol'/></li>
                </a>
                <a href="https://blank.page/" target='blank'>
                    <li><FaLinkedin className='text-[14px] cursor-pointer hover:text-hovercol'/></li>
                </a>
                <li onClick={sideToggle}><BiAlignRight  className='text-[16px] cursor-pointer hover:text-hovercol' /></li>
            </ul>
            </div>
        </div>
    </section>   
  )
}

export default TopHeader