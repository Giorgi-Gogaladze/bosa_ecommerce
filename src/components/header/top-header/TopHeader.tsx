'use client'
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import MediaIcons from './MediaIcons'
import { FaCodeCompare, FaRegHeart, FaRegUser } from 'react-icons/fa6'
import { MdOutlineAddShoppingCart } from 'react-icons/md'

const TopHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

  const sideToggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <section className='w-full h-11 border flex items-center justify-between border-b-gray-100 px-[6.5rem]' >
        <div className='hidden lg:w-full lg:flex lg:justify-between lg:items-center'>
          <ul className='flex items-center gap-5 text-headercol text-[13px] font-poppins leading-[1.5] font-normal tracking-[1.5]'>
            <li className='cursor-pointer hover:text-hovercol'>My Account</li>
            <li className='cursor-pointer hover:text-hovercol'>Whishlist</li>
            <li className='cursor-pointer hover:text-hovercol'>Checkout</li>
            <li className='cursor-pointer hover:text-hovercol'>Cart</li>
          </ul>
        </div>
        <div> 
          <section className='w-full'> 
        <div className='flex justify-between items-center'>
            <MediaIcons sideToggle={sideToggle} />
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
                <MediaIcons  sideToggle={sideToggle}/>
            </div>
            <div className='mt-[2rem] w-full h-[50px] flex justify-between items-center p-6  bg-white'>
              <div className='cursor-pointer hover:text-hovercol'><FaCodeCompare /></div>
              <div className='cursor-pointer hover:text-hovercol'><FaRegHeart /></div>
              <div className='cursor-pointer hover:text-hovercol'><FaRegUser /></div>
              <div className='cursor-pointer hover:text-hovercol'><MdOutlineAddShoppingCart /></div>
            </div>
        </div>
    </section>   
        </div>
      </section>
    
  )
}

export default TopHeader