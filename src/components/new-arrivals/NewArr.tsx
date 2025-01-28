import React from 'react'
import ProductsObj from '../../utilities/ProductsObj'

export const NewArr = () => {
  return (
    <section>
        <div className='flex justify-between flex-wrap'>
            {ProductsObj.map((product) => (
                <div key={product.id} className='w-[190px]'>

                </div>
            ))}
        </div>
    </section>
  )
}
