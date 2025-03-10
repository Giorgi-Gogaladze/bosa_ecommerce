import IsLiked from '@/components/products/isLiked/IsLiked'
import RatingStars from '@/components/products/productStars/RatingStars'
import products from '@/utilities/products'
import Image from 'next/image'
import React from 'react'
import ShopAside from '@/components/products/shopAside/ShopAside'
import ProductsPages from '@/components/products/productsPages/ProductsPages'

const page = () => {
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
                <ProductsPages />
            </article>
            <ShopAside />
        </main>
    </section>
  )
}

export default page