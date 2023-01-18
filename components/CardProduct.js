import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardProduct = ({product}) => {
    const lessDetails =  (str) => {
        return str.split(/\s+/).slice(0, 10).join(" ");
    }

    const {rate , count } = product.rating
  return (
    <div className="flex">
    <a href="#" className="grid p-2 sm:w-72 h-[500px] w-[336px] bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    
        <Image height="220" width="120" alt="Product" src={product.image}/>
        <h5 className="my-2  text-sm font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
    
        <div className="grid gap-3 m-2">
            <div className='flex text-white justify-between'>
                <div className="text-left">
                    <p className='font-normal text-sm'>Category: {product.category}</p>
                    <p className='font-normal text-sm'>Price: {product.price}</p>
                </div>
                <div>
                    <p className='font-normal text-sm'>Ratings: {rate}</p>
                    <p className='font-normal text-sm'>Count: {count}</p>
                </div>
            </div>
            <p className="font-normal text-gray-700 text-left dark:text-gray-400">{lessDetails(product.description)}...</p>
            <div className="flex justify-between text-white">
                <Link href={`/product/${product.id}`}>
                <button className="border border-white rounded-lg w-20 p-2">View</button>
                </Link>
                <button className="border border-white rounded-lg w-20 p-2">Buy</button>
            </div>
        </div>
    </a>
</div>
  )
}

export default CardProduct