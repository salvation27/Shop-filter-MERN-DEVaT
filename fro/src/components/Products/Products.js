import React from 'react'

import {useContext} from 'react'
import {GlobalState} from '../../GlobalState'
import Product from '../Product/Product'
import Loading from '../Loading/Loading'

export default function Products() {

  const value = useContext(GlobalState)
  const[products]= value.poductsData.products;
  const [isAdmin]=value.UserApi.isAdmin
  // console.log('products',value.poductsData.products);
  // const [poductsData] = value
  // const [products]  = state.productsApi.products
  const addCart = value.UserApi.addCart
  // console.log('value',value.UserApi.addCart);
  return (
    
 <section className='prod'>
   <div className="container">
     <div className="row">
       <div className="col">
         <div className="prod_count">
           на странице {products.length} карточек
         </div>
          <div className='products_wrap flex'>
            {
              products.map(item=><Product key={item._id} product={item} isAdmin={isAdmin} addCart={addCart}/>)
            }


            
        </div>
       </div>
     </div>
   </div>
   {
              products.length === 0 && <Loading />
            }
 </section>
  
  )
}
