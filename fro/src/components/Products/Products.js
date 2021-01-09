import React from 'react'

import {useContext} from 'react'
import {GlobalState} from '../../GlobalState'
import Product from '../Product/Product'

export default function Products() {

  const value = useContext(GlobalState)
  const[products]= value.poductsData.products;

  // console.log('products',value.poductsData.products);
  // const [poductsData] = value
  // const [products]  = state.productsApi.products
  // console.log('страница товара',products);
  return (
    
 <section>
   <div className="container">
     <div className="row">
       <div className="col">
          <div className='products_wrap flex'>
            {
              products.map(item=><Product key={item._id} product={item} />)
            }
        </div>
       </div>
     </div>
   </div>
 </section>
  )
}
