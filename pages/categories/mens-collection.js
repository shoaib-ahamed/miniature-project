import React from 'react';
import CardProduct from '../../components/CardProduct';
import SearchBar from '../../components/SearchBar';

const Menscollection = ({products}) => {

    

   const checkCategory = (category , product) => {
    if (category == "men's clothing") return <CardProduct product={product} key={product.id}/>;
   }
    
  return (
    <>
        <div>
        {
        products.length === 0
        ? <h2> no products </h2>
        : 
        <>  
            <SearchBar products={products}  />
            <div className="text-3xl text-center py-5">All Mens Products :</div>
            <div className="flex flex-wrap mx-2 justify-center my-5 gap-5">
            {products.map(product =>(
                checkCategory(product.category, product)
                ))}
            </div>
        </>
      }
        </div>
    </>
  )
}

export async function getStaticProps() {
  let res = [];

   await fetch(`https://fakestoreapi.com/products`)
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
         products: res
      }, // will be passed to the page component as props
      revalidate: 100,
  }
}

export default Menscollection