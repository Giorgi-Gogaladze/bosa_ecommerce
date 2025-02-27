import React from 'react'

const ContactForm = () => {
  return (
    <div className='col-span-1 w-full h-auto px-[0.5rem] flex flex-col gap-4'>
                    <div className='w-full h-auto'>
                        <h1 className='text-headingcolor font-jost text-[40px] font-semibold tracking-[1.4]'>Get In Touch With Us!</h1>
                        <p className='text-basictext tracking-[1.8] font-sans text-[15px]'>Quas montes odit delectus primis gravida culpa nostrum! Torquent, do adipisicing soluta nobis sagittis perferendis sodales  erat orci.</p>
                    </div>
                    <form className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="text" className='font-jost font-normal text-[15px] text-headingcolor'>Your name</label>
                            <input type="text" required  className='h-[48px] p-[10px]  font-jost border border-infogray'/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="text" className='font-jost font-normal text-[15px] text-headingcolor' >Your email</label>
                            <input type="email" required className='h-[48px] p-[10px] font-jost border border-infogray'/>
                        </div> 
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="text" className='font-jost font-normal text-[15px] text-headingcolor' >Your message(optional)</label>
                            <textarea  className='h-[220px] p-[10px] font-jost border border-infogray'/>
                        </div>
                    </form>
                    <div className='mt-[1.5rem]'>
                        <button className='hover:bg-hovercol w-[185px] h-[41px] text-white bg-newArrivals font-sans py-[10px] px-[20px] text-[1rem] leading-[1.15] trakcing-[1.5] font-semibold '>SUBMIT MESSAGE</button>
                    </div>
                </div>
  )
}

export default ContactForm