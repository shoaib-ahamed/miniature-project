import React from 'react'
import ProductItem from './ProductItem'

const Layout = ({products}) => {


  return (
    <div>
        <ProductItem products={products} />
    </div>
  )
}

export default Layout