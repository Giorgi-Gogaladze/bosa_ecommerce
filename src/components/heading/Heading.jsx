import React from 'react'

const Heading = ({headingText}) => {
  return (
    <div className='flex flex-row items-center gap-2 absolute top-[-60px] left-[90px]'>
      <div className='w-[30px] h-[1px] bg-infogray'></div>
      <div className='text-[14px] font-sans font-semibold text-black'>{headingText}</div>
      <div className='w-[30px] h-[1px] bg-infogray'></div>
    </div>
  )
}

export default Heading