import React from 'react'
import { BiAlignRight } from 'react-icons/bi'
import { FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa6'

const MediaIcons = ({sideToggle}) => {
  return (
    <>
        <ul className='hidden lg:flex gap-4'>
                        <a href="https://blank.page/" target='blank'>
                            <li><FaFacebook  className='text-[14px] z- cursor-pointer hover:text-hovercol'/></li>
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
    </>
  )
}


export default MediaIcons