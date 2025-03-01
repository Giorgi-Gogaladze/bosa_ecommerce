'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose, IoSearch } from "react-icons/io5";
import { TfiAlignJustify } from 'react-icons/tfi';

function Navbar() {
    const [menuOpen ,setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

  return (
    <section className='px-[6.5rem] border-b border-gray-100 h-12 relative'>
        <div className=' hidden lg:w-full lg:h-[48px] lg:flex lg:flex-row lg:justify-between'>
            <nav className='flex'>
                <div className='w-36 h-full bg-darkgray flex items-center justify-center text-white hover:bg-hovercol cursor-pointer '>
                    <GiHamburgerMenu  className='cursor-pointer'/> 
                    <p className='text-xs font-bold'> Categories</p> 
                </div>
                <div className='h-11  flex items-center'>
                    <ul className='flex items-start space-x-[1.5rem] text-xs font-bold text-darkgray pl-8 '>
                        <Link href='/'><li className='hover:text-blue-400'>Home</li></Link>
                        <Link href='about'><li className='hover:text-blue-400'>AboutUs</li></Link>
                        <Link href='blogs'><li className='hover:text-blue-400'>Blog</li></Link>
                        <Link href='shop'><li  className='hover:text-blue-400'>Shop</li></Link>
                        <Link href='contact'><li className='hover:text-blue-400'>Contact</li></Link>
                    </ul>
                </div>
            </nav>
            <div className='h-full  flex items-center border-l border-gray-100'>
                <input type="text" placeholder='Search products...' className='ml-4 text-[0.8rem]  focus:outline-none'/>
                <select className='border-0 bg-gray-50 h-8 text-[0.8rem] w-32 tracking-wide pl-3'>
                    <option value="">All Categories</option>
                    <option value="">Electronics</option>
                    <option value="">Gadgets</option>
                </select>
                <div className='ml-4'>
                    <button className='cursor-pointer'><IoSearch /></button>
                </div>
            </div>
        </div>
        <div className='lg:hidden h-full flex items-center justify-center '>
            <div className='w-auto cursor-pointer flex hover:text-hovercol' onClick={toggleMenu}>
                { menuOpen ? (<IoClose className='text-[24px] font-semibold '/>) : (<TfiAlignJustify  className='text-[24px] font-semibold '/>)}
                <span className='ml-1 text-[18px] text-jost font-normal'>MENU</span>
            </div>
        </div>
        {menuOpen && (
        <div className='absolute w-full left-0 top-[48px] h-[260px] bg-footercol z-50'>
            <ul className='flex flex-col justify-around text-[15px] space-x-4 h-full font-medium font-jost text-darkgray leading-[1.5] '>
                <Link href='/'><li className='hover:text-blue-400 ml-4 border-b'>Home</li></Link>
                <Link href='about'><li className='hover:text-blue-400 border-b'>AboutUs</li></Link>
                <Link href='blogs'><li className='hover:text-blue-400 border-b'>Blog</li></Link>
                <Link href='shop'><li  className='hover:text-blue-400 border-b'>Shop</li></Link>
                <Link href='contact'><li className='hover:text-blue-400'>Contact</li></Link>
            </ul>
        </div>
        )}
        
    </section>
  )
}

export default Navbar