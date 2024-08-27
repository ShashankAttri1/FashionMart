import axios from 'axios';
import React, {createContext, useState, useEffect} from 'react';
export const  ProductContext = createContext();
const ProductProvider = ({childern}) => {
 const [products, setProducts]=useState([])
 //fetch product

 const fetchProduct =async()=>{
  const response = await axios.get("https://fakestoreapi.com/products")
  // const data = response.json()
  console.log(response.data)
  setProducts(response.data)
}
 useEffect(()=>{
    // const fetchProduct =async()=>{
    //     const response = await axios.get("https://fakestoreapi.com/products")
    //     // const data = response.json()
    //     console.log(response.data)
    //     setProducts(response.data)
    // }
    fetchProduct()
 },[])

  return (
    <ProductContext.Provider value={{products}}>
        {childern}
    </ProductContext.Provider>
  )
}
export default ProductProvider;
