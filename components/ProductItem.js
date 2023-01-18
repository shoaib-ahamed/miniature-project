import React from 'react';
import CardProduct from './CardProduct';
import SearchBar from './SearchBar';


const ProductItem = ({products}) => {

    const filteredProduct = () => {

    }

    return (
        <div>
        {
        products.length === 0
        ? <h2> no products </h2>
        : 
        <> 
            <SearchBar products={products}  />
            <div className="text-3xl py-5">All Products :</div>
            <div className="flex flex-wrap mx-2 my-5 justify-center gap-5">
            {products.map(product =>(
                <CardProduct key={product.id} product={product} />
                ))}
            </div>
        </>
      }
        </div>
    )
}

export default ProductItem