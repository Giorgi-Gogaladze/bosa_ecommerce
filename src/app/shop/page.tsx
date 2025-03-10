import IsLiked from '@/components/products/isLiked/IsLiked'
import RatingStars from '@/components/products/productStars/RatingStars'
import products from '@/utilities/products'
import Image from 'next/image'
import React from 'react'
import Images from '@/utilities/Images'

const page = () => {

    const fiveProds = products.slice(1,6);
    const pages = 3;
  return (
    <section className='lg:px-[6.5rem] md:px-[4rem] px-[2rem] '>
        <div className='w-full h-[100px] border-b flex items-end mb-6'>
            <h1 className='text-[42px] font-sans'>SHOP</h1>
        </div>

        <main className='grid lg:grid-cols-11 md:grid-cols-11 grid-cols-1 w-full gap-8'>
            <article className='lg:col-span-7 md:col-span-7 sm:col-span-11 col-span-11 mb-12'>

                <div className='flex justify-between mb-20'>
                    <div className='w-[260px] h-[42px] border text-[12px] px-[20px] lg:py-[7px] py-[5px] text-headingcolor font-jost'>
                        <p className='lg:text-[12px] md:text-[11px] text-[10px]'>SHOWING 1-8 OF 20 RESULTS</p>
                    </div>
                    <select className='w-[260px] h-[42px] border px-[20px] lg:py-[7px] py-[5px] text-headingcolor font-jost focus:outline-none lg:text-[12px] md:text-[11px] text-[10px]' >
                        <option defaultValue="" disabled>DEFAULT SORTING</option>
                        <option value="priceUp">SORT BY PRICE: LOW TO HIGH</option>
                        <option value="priceDown">SORT BY PRICE: HIGH TO LOW</option>
                        <option value="ratingUp">SORT BY RATING: LOW TO HIGH</option>
                        <option value="ratingDown">SORT BY RATING: HIGH TO LOW</option>
                    </select>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-6'>
                    {products.map((prod) => (
                        <div key={prod.id} className='col-span-1 w-full h-auto '>
                            <div className='w-full h-auto overflow-hidden mb-2 bg-footercol relative'>
                                <Image src={prod.thumbnail} alt='prod image' width={200} height={300} className='object-cover object-center w-full h-full'></Image>
                                <IsLiked />
                            </div>
                            <div className='flex flex-col gap-2 items-center'>
                                <h1 className='font-jost text-[18px] font-medium leading-[1.4] text-newArrivals  hover:text-hovercol'>{prod.name}</h1>
                                <RatingStars rating={prod.rating} />
                                <p className='text-bluetext leading-[1.3] font-bold font-sans text-[16px]'>${prod.price}</p>
                                <div>
                                    <p className='uppercase text-[13px] leading-6 underline hover:text-hovercol cursor-pointer'>Add To Cart</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                
            </article>

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

                <div className='w-full'>
                    <div className='w-full flex flex-col items-center mt-[5rem] mb-3'>
                        <span className="relative flex items-center text-[20px] font-jost before:content-[''] before:w-10 before:h-[1px] before:bg-orange-600 before:absolute before:left-[-50px] after:content-[''] after:w-10 after:h-[1px] after:bg-orange-600 after:absolute after:right-[-50px]">Image Gallery</span>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-4 grid-cols-4 gap-4 w-full'>
                        {Images.map((image) => (
                            <div 
                            key={image.imageId}
                            className='lg:w-[70px] lg:h-[70px] w-[100px] h-[100px] overflow-hidden bg-gray-100'
                            >
                                <Image 
                                src={image.url} 
                                alt='image' 
                                width={1200} 
                                height={1200} 
                                className='w-full h-full object-cover object-center'
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </aside>
        </main>
    </section>
  )
}

export default page