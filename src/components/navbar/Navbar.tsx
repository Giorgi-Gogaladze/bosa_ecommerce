import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";

function Navbar() {
  return (
    <section className='px-[6.5rem] border-b border-gray-200 h-12'>
        <div className='w-full h-full flex'>
            <nav className='flex'>
                <div className='w-36 h-full bg-darkgray flex items-center justify-center text-white'>
                    <GiHamburgerMenu /> <p className='text-xs font-bold'> Categories</p> 
                </div>
                <div className='h-11 w-[32rem] flex items-center border-r border-gray-200'>
                    <ul className='flex items-center space-x-[1.5rem] text-xs font-bold text-darkgray pl-8 pr-32'>
                        <li>Home</li>
                        <li>AboutUs</li>
                        <li>Pages</li>
                        <li>Blog</li>
                        <li>Shop</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
            <div className='h-full w-full flex items-center border-r border-gray-200'>
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
    </section>
  )
}

export default Navbar