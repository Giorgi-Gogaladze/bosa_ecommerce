import React from 'react'
import products from '../../utilities/products'
import Image from 'next/image'

export const NewArr = () => {
  return (
    <section>
  <div className="flex justify-between flex-wrap gap-6">
    {products.map((product) => (
      <div key={product.id} className="w-[170px] p-4 flex flex-col items-center ">
        <div className='object-center object-cover w-full h-full mb-4'>
        <Image 
          height={200}
          width={200}
          src={product.thumbnail} 
          alt={product.name} 
          className="w-full h-[150px] object-cover rounded-lg"
        />
        </div>
        <h3 className="font-semibold text-lg mb-2 ">{product.name}</h3>
        <p className="text-[17px]  mb-2 text-blue-500 font-sans">${product.price}</p>
        <p className="text-sm text-yellow-500">Rating: {product.rating} ★</p>
      </div>
    ))}
  </div>
</section>

  )
}
