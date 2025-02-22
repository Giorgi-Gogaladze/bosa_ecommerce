import React from 'react'
import { IoMdPhonePortrait } from "react-icons/io";import { FaHeadphonesSimple } from "react-icons/fa6";
import { Products } from '@/components/products/Products';
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
import Blogs from '@/components/all-blogs/blogs/Blogs';

function page() {
  return (
<>  
  <section className='px-[6.5rem] mt-8 flex'>
      <aside>
        <div className='w-[15rem] h-[24rem]'>
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

        <div className='w-[15rem] h-auto border border-gray-100 mt-4 relative'>
          <div className='overflow-hidden'>
            <Image src='/images/aside-camera-image.jpg' alt='ad image' width={3000} height={4500} className='object-cover object-center w-full h-full '/>
            <div className='absolute top-10 left-0 flex mx-5 w-full h-[80px] gap-4'>
              <div className='flex flex-col items-center gap-[1px] relative '>
                <h4 className='font-sans font-semibold text-darkgray'>New.Product</h4>
                <p className=' absolute left-4 top-2 text-bigtext font-bold text-[50px]  py-0 '>4K</p>
                <p className='font-sans text-gray-700 tracking-wide mt-9'>cameras</p>
              </div>
              <div>
                <div className='absolute top-3'>
                  <p className='text-[14px] text-gray-600'>Starting at</p>
                  <span className='text-[20px] text-bigtext mr-[5px]'>$</span><span className='text-[35px] font-bold text-gray-600'>85.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-[15rem] h-90 border border-gray-100 mt-4 bg-gradient-to-b from-white via-white to-gray-50 flex flex-col items-center py-[0.5rem]'>
          <Image src='/images/tv_image.jpg' alt='Product image' width={190} height={190} className='w-48 h-48' />
          <div className='flex flex-col items-center px-[1.5rem] mt-4'>
            <p className='capitalize'>Save up to $600 on select big-screen TVs.</p>
            <button className='mt-[0.7rem] bg-black text-white font-sans text-[0.6rem] font-semibold w-20 h-8 focus:cursor-pointer'>Shop Now</button>
          </div>
        </div>

        <div className='w-[15rem] h-auto mt-4'>
          <div className='mr-[2.5rem] w-full h-full border border-gray-100'>
            <div className='bg-darkgray flex items-center justify-center h-[3rem] text-white text-base'>SHOP BY BRAND</div>
            <div className='w-full h-[55px] flex items-center justify-center p-2  border-b'>
              <div className='flex w-[10rem] justify-between items-center'>
                <div>
                  <Image width={60} height={10} src='/images/nokia.png' alt='nokia'></Image>
                </div>
                <div className='text-xs font-bold'>
                  Nokia Shop
                </div>
              </div>
            </div>
            <div className='w-full h-[55px] flex items-center justify-center p-2  border-b'>
              <div className='flex w-[10rem] justify-between items-center'>
                <div>
                  <Image width={60} height={10} src='/images/canon.png' alt='nokia'></Image>
                </div>
                <div className='text-xs font-bold'>
                   Canon Shop
                </div>
              </div>
            </div>
            <div className='w-full h-[55px] flex items-center justify-center p-2  border-b'>
              <div className='flex w-[10rem] justify-between items-center'>
                <div>
                  <Image width={60} height={10} src='/images/samsung.png' alt='nokia'></Image>
                </div>
                <div className='text-xs font-bold'>
                  Samsung Shop
                </div>
              </div>
            </div>
            <div className='w-full h-[55px] flex items-center justify-center p-2  border-b'>
              <div className='flex w-[10rem] justify-between items-center'>
                <div>
                  <Image width={60} height={10} src='/images/apple.png' alt='nokia'></Image>
                </div>
                <div className='text-xs font-bold'>
                  Apple Shop
                </div>
              </div>
            </div>
            <div className='w-full h-[55px] flex items-center justify-center p-2  border-b'>
              <div className='flex w-[10rem] justify-between items-center'>
                <div>
                  <Image width={60} height={10} src='/images/htc.png' alt='nokia'></Image>
                </div>
                <div className='text-xs font-bold'>
                  H.T.C Shop
                </div>
              </div>
            </div>
            <div className='w-full h-[55px] flex items-center justify-center p-2  border-b'>
              <div className='flex w-[10rem] justify-between items-center'>
                <div>
                  <Image width={60} height={10} src='/images/lg.png' alt='nokia'></Image>
                </div>
                <div className='text-xs font-bold'>
                  L.G Shop
                </div>
              </div>
            </div>
          </div>
        </div>
    </aside>

    <main className='w-full h-full pl-[1.2rem]'>
      <div>
          <Image src='/images/slider_main1.jpg' alt='product slider image idk' width={790} height={410} className='w-full h-full'/>
      </div>
      <div className='w-full h-16 mt-8 flex flex-col'>
        <ul className='flex justify-between'>
          <li className='flex flex-col items-center w-47 h-40 gap-2'>
            <div className='w-16 h-16 flex items-center justify-center rounded-full bg-infogray'><MdLocalShipping size={35} className='text-white' /></div>
            <div className='flex flex-col  items-center'>
              <h3 className='text-[1rem] font-semibold text-gray-600'>FREE SHIPPING</h3>
              <p className='text-[0.9rem] font-sans'>On orders over 100$</p>
            </div>
          </li>
          <li className='flex flex-col items-center w-40 h-40 gap-2'>
            <div className='w-16 h-16 flex items-center justify-center rounded-full bg-infogray'><FaGift size={35} className='text-white'/></div>
            <div className='flex flex-col  items-center'>
              <h3 className='text-[1rem] font-semibold text-gray-600'>SPECIAL GIFT</h3>
              <p className='text-[0.9rem] font-sans'>The perfect gift idea</p>
            </div>
          </li>
          <li className='flex flex-col items-center w-40 h-40 gap-2'>
            <div className='w-16 h-16 flex items-center justify-center rounded-full bg-infogray'><GiReturnArrow size={35} className='text-white'/></div>
            <div className='flex flex-col  items-center'>
              <h3 className='text-[1rem] font-semibold text-gray-600'>RETURN/EXCHANGE</h3>
              <p className='text-[0.9rem] font-sans'>Free return within 3 days</p>
            </div>
          </li>
          <li className='flex flex-col items-center w-40 h-40 gap-2'>
            <div className='w-16 h-16 flex items-center justify-center rounded-full bg-infogray'><FaPhoneAlt size={35} className='text-white'/></div>
            <div className='flex flex-col  items-center'> 
              <h3 className='text-[1rem] font-semibold text-gray-600'>SUPPORT 24 / 7</h3>
              <p className='text-[0.9rem] font-sans'>Customer support</p>
            </div>
          </li>
        </ul>
      </div>
      <div className='mt-20'>
        <Products />
      </div>
    </main>
  </section>
    <Blogs />
  </>  
  )
}

export default page