// import React from 'react'
import  {useState,useEffect} from 'react'
import axios from 'axios'
// import productsData from './products'


function ProductsApi() {

  const[productsHook,setProductsHook] = useState([])

      const getProducts = async ()=>{
          const res = await axios.get('/api/products')
          setProductsHook(res.data.products);
          // setProducts(productsData);
        }

        useEffect(()=>{
          getProducts()
        },[])

  return {
    products:[productsHook,setProductsHook]
  }
}


export default ProductsApi