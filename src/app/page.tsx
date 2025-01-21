import React from 'react'
import { IoMdPhonePortrait } from "react-icons/io";import { FaHeadphonesSimple } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa";
import { BsEarbuds } from "react-icons/bs";
import { FaTv } from "react-icons/fa";
import { ImPrinter } from "react-icons/im";
import { MdLocalShipping } from "react-icons/md";
import { FaGift } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import Image from 'next/image';

function page() {
  return (
  <section className='px-[6.5rem] mt-8 flex'>
      <aside>
        <div className='w-[15rem] h-[24.5rem]'>
          <div className='mr-[2.5rem] w-full h-full border border-gray-100'>
            <div className='bg-darkgray flex items-center justify-center h-[3rem] text-white text-base'>Popular Catogories</div>
            <div className='flex flex-col justify-between p-6 gap-5'>
                <ul className='flex flex-col gap-6 text-[0.9rem] font-sans font-semibold'>
                  <li className='flex gap-2 items-center border-b border-gray-100'><IoMdPhonePortrait className='text-red-500' />SMART PHONE</li>
                  <li className='flex gap-2 items-center border-b border-gray-100'><FaHeadphonesSimple  className='text-red-500'/>HEAD PHONE</li>
                  <li className='flex gap-2 items-center border-b border-gray-100'><FaLaptop className='text-red-500'/>LAPTOPS</li>
                  <li className='flex gap-2 items-center border-b border-gray-100'><FaCameraRetro className='text-red-500'/>CAMERA</li>
                  <li className='flex gap-2 items-center border-b border-gray-100'><BsEarbuds className='text-red-500'/>EAR BUDS</li>
                  <li className='flex gap-2 items-center border-b border-gray-100'><FaTv className='text-red-500'/>SMART TV</li>
                  <li className='flex gap-2 items-center'><ImPrinter className='text-red-500'/>PRINTERS</li>
                </ul>
            </div>
          </div>
        </div>

        <div className='w-[15rem] h-90 border border-gray-100 mt-4 bg-gradient-to-b from-white via-white to-gray-50 flex flex-col items-center py-[0.5rem]'>
          <Image src='/images/tv_image.jpg' alt='Product image' width={190} height={190} className='w-48 h-48'></Image>
          <div className='flex flex-col items-center px-[1.5rem] mt-4'>
            <p className='capitalize'>Save up to $600 on select big-screen TVs.</p>
            <button className='mt-[0.7rem] bg-black text-white font-sans text-[0.6rem] font-semibold w-20 h-8 focus:cursor-pointer'>Shop Now</button>
          </div>
        </div>
    </aside>

    <main className='w-full h-full pl-[1.2rem]'>
      <div  >
          <Image src='/images/slider_main1.jpg' alt='product slider image idk' width={790} height={410} className='w-full h-full'></Image>
      </div>
      <div>
        <ul>
          <li>
            <MdLocalShipping />
            <h3>FREE SHIPPING</h3>
            <p>On orders over 100$</p>
          </li>
          <li>
            <FaGift />
            <h3>SPECIAL GIFT CARD</h3>
            <p>The perfect gift idea</p>
          </li>
          <li>
            <div><GiReturnArrow /></div>
            <h3>RETURN/EXCHANGE</h3>
            <p>free return within 3 days</p>
          </li>
          <li>
            <div><FaPhoneAlt /></div> 
            <h3>SUPPORT 24 / 7</h3>
            <p>Customer support</p>
          </li>
        </ul>
      </div>

    </main>
  </section>
  )
}

export default page