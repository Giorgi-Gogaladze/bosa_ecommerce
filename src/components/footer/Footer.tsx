import Image from 'next/image'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='flex flex-col'>
      <div className='w-full h-auto bg-footercol py-[3rem] px-[6.5rem]'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className='flex flex-col gap-5 py-2'>
            <Image src='/images/logo.png' alt='logo' width={160} height={50}></Image>
            <p className='text-headercol font-sans'>Habitant aut esse, autem voluptatem facilisis, veritatis! Porro minim nec, est morbi sociis duip.</p>
          </div>
          <div className='flex flex-col gap-4 px-5'>
            <h2 className='text-xl'>Usefull Links</h2>
            <ul className='font-sans text-headercol '>
              <li>My Account</li>
              <li>Product Wishlist</li>
              <li>Cart Page</li>
              <li>Shop Page</li>
            </ul>
          </div>
          <div className='font-sans text-headercol flex flex-col gap-2'>
            <h1 className='text-xl font-bold'>Contact Info</h1>
            <p >Feel free to contact & reach us !</p>
            <p>Address : 22th Street, Colorado
                Email : info@domain.com
                Phone : +988-256-266-88</p>
          </div>
        </div>
      </div>
      <div className='bg-ftrbtmcol h-20 flex items-center justify-center'>
        <div className='flex gap-2 w-auto'>
          <a href='https://blank.page/' rel='link reference' target='_blank'><div className='rounded-full bg-gray-100 w-10 h-10 flex items-center justify-center'><FaFacebook className='text-xl' /></div></a>

          <a href='https://blank.page/' rel='link reference' target='_blank'><div className='rounded-full bg-gray-100 w-10 h-10 flex items-center justify-center'><IoLogoTwitter className='text-xl'/></div></a>

          <a href="https://blank.page/" rel='link reference' target='_blank'><div className='rounded-full bg-gray-100 w-10 h-10 flex items-center justify-center'><FaInstagram className='text-xl'/></div></a>

          <a href="https://blank.page/" rel='link reference' target='_blank'><div className='rounded-full bg-gray-100 w-10 h-10 flex items-center justify-center'><FaPinterest className='text-xl'/></div></a>

          <a href="https://blank.page/" rel='link reference' target='_blank'><div className='rounded-full bg-gray-100 w-10 h-10 flex items-center justify-center'><FaLinkedin className='text-xl'/></div></a>
        </div>
      </div>
      
    </section>
  )
}

export default Footer