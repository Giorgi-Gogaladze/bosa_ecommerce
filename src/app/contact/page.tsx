import ContactForm from '@/components/contact/ContactForm'
import Introduction from '@/components/IntroductionComponent/Introduction'
import Image from 'next/image'
import React from 'react'
import { FaEnvelopeOpenText, FaPhoneVolume } from 'react-icons/fa'
import { FaMapLocationDot } from 'react-icons/fa6'
import { IoMdTime } from 'react-icons/io'

const page:React.FC = () => {
  return (
    <section className='h-auto'>
        <Introduction/>
        <article className='lg:xp-[6.5rem] md:px-[6rem] sm:px-[2rem] px-[2rem] mt-20 '>
            <div  className='grid grid-cols-1 lg:grid-cols-2 w-full lg:gap-[2rem] sm:gap-[10rem] gap-[10rem] mb-[10rem]'>
                <div className=' flex justify-center w-full col-span-1'>
                    <div className='relative lg:w-[32rem] h-[28rem] w-full aspect-[1/1]'>      
                        <Image 
                        src='/images/about-camera.jpg'  
                        alt='camera image' 
                        width={250}
                        height={300} 
                        className=' w-full h-full object-cover object-center'>     
                        </Image>
                        <div className='absolute  left-0 top-[calc(100%-3rem)] w-[calc(100%-30px)]  h-[12rem] bg-bigtext z-20 p-[30px] flex flex-col justify-around'>
                            <h1 className='text-[26px] text-white font-jost font-semibold'>Feel Free To Contact & Hire Us !!</h1>
                            <p className='text-white font-sans text-[14px] font-normal'>Quas montes odit delectus primis gravida culpa nostrum! Torquent, do adipisicing soluta nobis sagittis perferendis sodales! Nostra earum? Sodales libero, quod erat orci.</p>
                        </div>
                    </div>
                </div>
                <ContactForm />

            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full gap-8'>
                <div className='relative  bg-cardcolor px-[30px] pt-[65px] pb-[25px]'>
                    <h1 className='text-[18px] font-medium font-jost leading-[1.5] mb-[5px] text-newArrivals'>Our Location</h1>
                    <div>
                        <p className='font-sans text-[15px] font-normal text-basictext leading-[1.6]'>60 east 65th Street</p>
                        <p className='font-sans text-[15px] font-normal text-basictext leading-[1.6]'>New York City, USA</p>
                        <p className='font-sans text-[15px] font-normal text-basictext leading-[1.6]'>NQ 110256, San Fransisco</p>
                    </div>
                    <div className='absolute top-[-34px] left-[30px] w-[72px] h-[72px] rounded-full bg-darkgray flex items-center         justify-center'>
                        <FaMapLocationDot 
                        className='text-white text-[40px]' />
                    </div>
                </div>
                <div className='relative  bg-cardcolor px-[30px] pt-[65px] pb-[25px]'>
                    <h1 className='text-[18px] font-medium font-jost leading-[1.5] mb-[5px] text-newArrivals'>Working Time</h1>
                    <div>
                        <p className='font-sans text-[15px] font-normal text-basictext leading-[1.6]'>Mon-Fri : 7AM-5PM</p>
                        <p className='font-sans text-[15px] font-normal text-basictext leading-[1.6]'>Sat 9AM-3PM</p>
                        <p className='font-sans text-[15px] font-normal text-basictext leading-[1.6]'>Sunday(Holiday)</p>
                    </div>
                    <div className='absolute top-[-34px] left-[30px] w-[72px] h-[72px] rounded-full bg-darkgray flex items-center justify-center'>
                        <IoMdTime 
                        className='text-white text-[40px]' />
                    </div>
                </div>
                <div className='relative  bg-cardcolor px-[30px] pt-[65px] pb-[25px]'>
                    <h1 className='text-[18px] font-medium font-jost leading-[1.5] mb-[5px] text-newArrivals'>Our Numbers</h1>
                    <div>
                        <p className='font-sans text-[15px] font-normal text-basictext leading-[1.6]'>+1 555 9365 688</p>
                        <p className='font-sans text-[15px] font-normal text-basictext leading-[1.6]'>+1 658 5214 399</p>
                        <p className='font-sans text-[15px] font-normal text-basictext leading-[1.6]'>+978(122) 365 22</p>
                    </div>
                    <div className='absolute top-[-34px] left-[30px] w-[72px] h-[72px] rounded-full bg-darkgray flex items-center justify-center'>
                        <FaPhoneVolume  
                        className='text-white text-[40px]' />
                    </div>
                </div>
                <div className='relative  bg-cardcolor px-[30px] pt-[65px] pb-[25px]'>
                    <h1 className='text-[18px] font-medium font-jost leading-[1.5] mb-[5px] text-newArrivals'>Our Location</h1>
                    <div>
                        <p className='font-sans text-[15px] font-normal text-basictext leading-[1.6]'>office@gmail.com</p>
                        <p className='font-sans text-[15px] font-normal text-basictext leading-[1.6]'>name@company.com</p>
                        <p className='font-sans text-[15px] font-normal text-basictext leading-[1.6]'>info@company.com</p>
                    </div>
                    <div className='absolute top-[-34px] left-[30px] w-[72px] h-[72px] rounded-full bg-darkgray flex items-center justify-center'>
                    <FaEnvelopeOpenText 
                    className='text-white text-[40px]' />
                    </div>
                </div>
            </div>
        </article>
            <div className='mt-[4rem] w-full h-auto overflow-hidden'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d134141.38316402858!2d-3.5732483988700623!3d40.40973659886141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422fa7b8d52a69%3A0x1c79d30c836b0528!2sPrincipe%20Pio%20-Chamart%C3%ADn%20-%20Clara%20Campoamor!5e0!3m2!1sen!2sge!4v1740639958231!5m2!1sen!2sge" width={1200} height={400} style={{border: 0}} allowFullScreen loading="lazy" className='w-full h-[400px] '></iframe>
            </div>
    </section>
  )
}

export default page