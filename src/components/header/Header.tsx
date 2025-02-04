import Image from 'next/image';
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Navbar from '../navbar/Navbar';

function Header() {
  return (
<>
  <section className="h-26 w-full border border-gray-100 py-4 px-[6.5rem]">
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
  </section>
    <Navbar />
</>
  )
}

export default Header