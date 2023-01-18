import Image from "next/image";
import React, { useState } from "react";

const DetailProduct = ({product}) => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const {rate , count} = product.rating;

    return (
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div className="md:w-1/2 w-full flex justify-center">
            <Image height="600" width="500" alt="Product" src={product.image}/>
            </div>
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-mainColor pb-6">
                    <div className="flex justify-between">
                    <p className="leading-none text-mainColor">{product.category}</p>
                    <div className="text-center">
                    <p>ratings: {rate}</p>
                    <p>count: {count}</p>
                    </div>

                    </div>

                    <h1
                        className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-mainColor
							mt-2
						"
                    >
                        {product.title}
                    </h1>
                </div>

                <div className="py-4 border-b border-mainColor flex items-center justify-between">
                    <p className="text-base leading-4 text-mainColor">Price</p>
                    <div className="flex items-center justify-center">
                        <p className="text-sm leading-none text-mainColor mr-3">{product.price}</p>
                        <svg className="cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                
                <div>
                    <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-mainColor mt-7">{product.description}</p>
                </div>
                <div>
                    <div className="border-t border-b py-4 mt-7 border-mainColor">
                        <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer">
                            <p className="text-base leading-4 text-mainColor">Shipping and returns</p>
                            <button
                                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainColor
									rounded
								"
                                aria-label="show or hide"
                            >
                                <svg className={"transform " + (show ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-mainColor " + (show ? "block" : "hidden")} id="sect">
                            You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border-b py-4 border-mainColor">
                        <div onClick={() => setShow2(!show2)} className="flex justify-between items-center cursor-pointer">
                            <p className="text-base leading-4 text-mainColor">Contact us</p>
                            <button
                                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainColor
									rounded
								"
                                aria-label="show or hide"
                            >
                                <svg className={"transform " + (show2 ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-mainColor " + (show2 ? "block" : "hidden")} id="sect">
                            If you have any questions on how to return your item to us, contact us.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export async function getServerSideProps({params: {id}}) {
  let res = [];

   await fetch(`https://fakestoreapi.com/products/${id}`)
                      .then((response) => response.json())
                      .then((data) => {
                        res = data
                      })
                      .catch((err) => {
                        console.log(err.message);
                      })
  // server side rendering

  return {
    props: {
         product: res
      }, // will be passed to the page component as props
  }
}

export default DetailProduct