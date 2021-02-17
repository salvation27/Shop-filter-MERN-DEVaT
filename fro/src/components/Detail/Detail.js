import React ,{useContext,useState,useEffect} from 'react'
import {useParams,Link}  from 'react-router-dom'
import {GlobalState} from '../../GlobalState'
import './Detail.css'
import Product  from '../Product/Product'

export default function Detail() {

  const state = useContext(GlobalState)
  // console.log('state',state.userApi);

  const [products] = state.poductsData.products
  // console.log('products',products);


  const addCart = state.UserApi.addCart 

  const params = useParams()
  // console.log('params',params);

  const [detailProduct,setDetailProduct] = useState([])

  useEffect(()=>{
    console.log('re render');
    if(params.id){
      products.forEach(x=>{
        if(x._id === params.id){
          setDetailProduct(x)
        }
      })
    }

  },[params.id,products])

 if(detailProduct.length === 0 ) return null

  return (
    <>
    <section className='detail'>
     <div className="container">
       <div className="row">
         <div className="col">
          <div className="deteil_wrap flex">
            <div className="deteil_foto">
              <img src={detailProduct.images} alt=""/>
            </div>
            <div className="deteil_info">
                <div className="deteil_info_title">
                  <h2>
                    {detailProduct.title}
                  </h2>
                </div>
                <div className="deteil_info_price">
                    <strong>Цена:</strong>{detailProduct.price}
                </div>
                <div className="deteil_info_price">
                    <strong>Категория:</strong>{detailProduct.category}
                </div>
                <div className="deteil_info_description">
                    <strong>Описание:</strong>{detailProduct.des}
                </div>
                <div className="deteil_info_btn flex">
                  <div className="deteil_btn_return btn btn-danger color_white">
                    <Link to='/products'>
                        Вернуться в магазин
                    </Link>
                  </div>
                  <div className="deteil_btn_cart btn btn-primary"
                  onClick={()=>addCart(detailProduct)}
                  >
                    Добавить в корзину
                  </div>
                </div>
            </div>
          </div>
         </div>
       </div>
     </div>
    </section>
    <section className='related'>
     <div className="container">
       <div className="row">
         <div className="col">
            <div className="related_wrap">
              <div className="related_title">
                <h2>Related</h2>
              </div>
              <div className='products_wrap flex'>
            {
              products.map(item=>{
                return item.category === detailProduct.category ?
                <Product key={item._id} product={item} /> :null
              })
            }
        </div>
            </div>
         </div>
       </div>
     </div>
    </section>
    </>
  )
}
