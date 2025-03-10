import products from '@/utilities/products';
import Image from 'next/image'
import Link from 'next/link';
import Gallery from '../gallery/Gallery';

const ShopAside = () => {
    const fiveProds = products.slice(1,6);
  return (
    <aside className='lg:col-span-4 md:col-span-4 col-span-11 w-full'>
                    <div className='w-full h-auto flex justify-center mb-6 relative'>
                        <p className='text-[18px] font-jost'>FILTER BY PRICE</p>
                    </div>
                    <div className='w-full h-auto flex justify-center mb-8'>
                        <div className='flex gap-8 justify-between items-center'>
                            <div className='relative'>
                                <input  
                                type="number" 
                                placeholder='Price From ...' 
                                className=' border border-gray-600 px-[7px] py-2 font-jost max-w-[120px] focus:outline-none' 
                                />
                                <div className='absolute px-[5px] py-[4px] h-[20px] bg-white top-[-12px] left-[10px] z-20 text-[12px] font-jost text-darkgray'>MAX</div>
                            </div>
                            <div className='relative'>
                                <input  
                                type="number" 
                                placeholder='Price To ...' 
                                className=' border border-gray-600 px-[7px] py-2 font-jost max-w-[120px] focus:outline-none text-[16px]' 
                                />
                                <div className='absolute px-[5px] py-[4px] h-[20px] bg-white top-[-12px] left-[10px] z-20 text-[12px] font-jost text-darkgray'>MIN</div>
                            </div>
                        </div>
                    </div>
    
                    <div>
                        <div className='w-full flex flex-col items-center mt-[5rem] mb-3'>
                            <span className="relative flex items-center text-[20px] font-jost before:content-[''] before:w-10 before:h-[1px] before:bg-orange-600 before:absolute before:left-[-50px] after:content-[''] after:w-10 after:h-[1px] after:bg-orange-600 after:absolute after:right-[-50px]">Top Products</span>
                        </div>
                        <div className='grid grid-cols-1 grid-rows-5 gap-4'>
                            {fiveProds.map((prod) => (
                                <div key={prod.id} className='w-full border-b border-gray-300 flex gap-4 py-[8px]'>
                                    <div className='w-[60px] h-[60px] overflow-hidden bg-gray-200'>
                                        <Image 
                                        src={prod.thumbnail} 
                                        alt='image' 
                                        width={1200} 
                                        height={1200}
                                        className='w-full h-full object-cover object-center'
                                        />
                                    </div>
                                    <div className='flex flex-col justify-start gap-2'>
                                        <h1 className='text-hovercol font-sans font-semibold'>{prod.name}</h1>
                                        <p className='font-mono'>${prod.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='w-full my-[3rem] h-auto overflow-hidden cursor-pointer flex justify-center'>
                        <Link href={`/`} >
                            <Image 
                            src='/images/logo.png' 
                            alt='logo' 
                            width={1200} 
                            height={1200} 
                            className='w-full h-full object-cover object-center' />
                        </Link>
                    </div>
                    <Gallery />
                </aside>
  )
}

export default ShopAside