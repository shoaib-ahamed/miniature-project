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
    <a href="#" className="grid p-2 sm:w-72 h-[530px] w-[336px] bg-cardColor border border-cardColor rounded-lg shadow-md hover:bg-gray-600">
        <div className="h-64 p-3 flex justify-center items-center">
            <Image height="240" width="220"  alt="Product" src={product.image}/>    
        </div>    
        <h5 className="my-1  text-sm font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
    
        <div className="grid gap-2 m-3">
            <div className='flex text-white justify-between'>
                <div className="text-left">
                    <p className='font-normal text-xs'>Category: {product.category}</p>
                    <p className='font-normal text-xs'>Price: {product.price}</p>
                </div>
                <div>
                    <p className='font-normal text-xs'>Ratings: {rate}</p>
                    <p className='font-normal text-xs'>Count: {count}</p>
                </div>
            </div>
            <p className="font-normal text-sm text-gray-700 text-left dark:text-gray-400">{lessDetails(product.description)}...</p>
            <div className="flex justify-around text-white">
                <Link href={`/product/${product.id}`}>
                <button className="border border-white hover:bg-gray-400 hover:text-cardColor hover:border-black rounded-lg w-20 p-2">View</button>
                </Link>
                <button className="border border-white hover:bg-gray-400 hover:text-cardColor hover:border-black rounded-lg w-20 p-2">Buy</button>
            </div>
        </div>
    </a>
</div>
  )
}

export default CardProduct