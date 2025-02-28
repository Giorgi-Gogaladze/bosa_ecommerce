import Image from 'next/image';
import { FaCodeCompare, FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Navbar from './navbar/Navbar';
import TopHeader from './top-header/TopHeader';
import Link from 'next/link';

function Header() {
  return (
<>
  <TopHeader/>
  <main className="h-26 w-full border border-gray-100 py-4 px-[6.5rem]">

    <div className='hidden md:flex md:justify-between '>
        <div className='h-full mr-2'>
          <Link href='/'><Image src='/images/logo.png' alt='logo image' height={50} width={160} /></Link>
        </div>
        <div>
          <Image src='/images/ad.jpg' alt='advertisement' width={519} height={75} className='mr-2'/>
        </div>
      <div className='w-36 h-26 flex justify-between items-center p-2'>
        <div><FaCodeCompare /></div>
        <div><FaRegHeart /></div>
        <div><FaRegUser /></div>
        <div><MdOutlineAddShoppingCart /></div>
      </div>
    </div>

    <div className='md:hidden w-full h-full flex justify-center items-center'>
    <Link href='/'><Image src='/images/logo.png' alt='logo image' height={50} width={160} /></Link>
    </div>
  </main>
    <Navbar />
</>
  )
}

export default Header