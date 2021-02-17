import React from 'react'
import './Product.css'
import {Link} from 'react-router-dom'


export default function Product({product,isAdmin,addCart}) {
  const{price,title,des,images,_id,category,checked} = product
  // const addCart =

  return (
    <div className='card'>
      {
        isAdmin && <input type="checkbox" checked={checked}/>
      }
      <div className="card_categ">
          {category}
      </div>
      <div className="card_foto">
        <img src={images} alt=""/>
      </div>
      <Link to={`/details/${_id}`}>
         <div className="card_title">{title}</div>
      </Link>
      <div className="card_price">{price}</div>
      <div className="card_des">{des}</div>

      {
        isAdmin ? <div className="card_btn">
        <button>Удалить</button>
        <Link to={`/edit_product/${_id}`}>
           <button>Редактировать</button>
        </Link>
      </div> :
       <div className="card_btn">
        <button onClick={()=>addCart(product)}>Добавить</button>
        <Link to={`/details/${_id}`}>
           <button>Подробно</button>
        </Link>
      </div>
      }
      


    </div>
  )
}
