import React from 'react'
import './Product.css'
export default function Product({product}) {
  // console.log(product);
  const{price,title,des,images} = product
  return (
    <div className='card'>
      <div className="card_foto">
        <img src={images} alt=""/>
      </div>
      <div className="card_title">{title}</div>
      <div className="card_price">{price}</div>
      <div className="card_des">{des}</div>
    </div>
  )
}
