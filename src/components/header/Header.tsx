import Image from 'next/image';
import { FaCodeCompare, FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Navbar from './navbar/Navbar';
import TopHeader from './top-header/TopHeader';

function Header() {
  return (
<>
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
      <TopHeader />
    </div>
  </section>

  <main className="h-26 w-full border border-gray-100 py-4 px-[6.5rem]">
    <div className=' flex justify-between'>
        <div className='h-full'>
          <Image src='/images/logo.png' alt='logo image' height={50} width={160} />
        </div>
        <div>
          <Image src='/images/ad.jpg' alt='advertisement' width={519} height={75}/>
        </div>
      <div className='w-36 h-26 flex justify-between items-center p-2'>
        <div><FaCodeCompare /></div>
        <div><FaRegHeart /></div>
        <div><FaRegUser /></div>
        <div><MdOutlineAddShoppingCart /></div>
      </div>
    </div>
  </main>
    <Navbar />
</>
  )
}

export default Header