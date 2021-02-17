import React,{useContext,useState,useEffect} from 'react'
import{GlobalState} from '../../GlobalState'
import {Link} from 'react-router-dom'
import axios  from 'axios'
import PaypalButton from './PaypalButton'

export default function Cart() {
  const state = useContext(GlobalState)
  console.log('корзина',state);
  const [cart,setCart] = state.UserApi.cart
  const[token] = state.token
  const [total,setTotal] = useState(0)

  useEffect(()=>{
    const getTotal = ()=>{
        const total = cart.reduce((prev,item)=>{
          return prev + (item.price * item.quantity)
        },0)
        setTotal(total)
    }
    getTotal()
  },[cart])

  const addToCart = async ()=>{
      await axios.patch('/user/addcart',{cart},{
        headers:{Authorization:token}
      })
  }

  const increment = (id)=>{
    cart.forEach(item=>{
      if(item._id === id){
        item.quantity+=1
      }
    })
    setCart([...cart])
    addToCart()
  }

  const decrement = (id)=>{
    cart.forEach(item=>{
      if(item._id === id){
        item.quantity ===1 ? item.quantity = 1 : item.quantity -= 1
      }
    })
    setCart([...cart])
    addToCart()
  }

  const removeProduct = (id) =>{
    if(window.confirm('Вы точно хотите удалить этот товар')){
      cart.forEach((item,index)=>{
        if(item._id===id){
cart.splice(index,1)
        }
      })
    }
    setCart([...cart])
    addToCart()
  }

  const tranSuccess = async (payment)=> {
    // console.log(payment);
    const {paymentID,addres}= payment 

    await axios.post('/api/payment',{cart,paymentID,addres},{
      headers:{Authorization:token}
    })
    setCart([])
    alert('You have successfully placed on order')
  }

  if(cart.length === 0 ){
    return <h2 style={{textAlign:'center'}}>Ваша корзина пуста</h2>
  }


  return (
    <div className='container'>
      {
      cart.map(item =>{
        return(
          <div className='card_cart flex' key={item._id}>
            <div className='card_cart_foto'>
                 <img style={{width:'100px',margin:'0px 20px'}} src={item.images} alt=""/>
             </div>
             <Link to={`/details/${item._id}`}>
                <div style={{margin:'0px 20px'}} className='card_cart_title'>
                    <h2>{item.title}</h2>
                </div>
             </Link>
             <div style={{margin:'0px 20px'}} className='card_cart_text'>
                 <h2>{item.des}</h2>
             </div>
             <div style={{margin:'0px 20px'}} className='card_cart_text'>
                      <h2>{item.price}$</h2>
              </div>
             <div style={{margin:'0px 20px'}} className='card_cart_amount flex'>
                 <button
                  style={{display:'inline-block',height:'40px'}}
                  onClick={()=>decrement(item._id)}
                  >-</button>
                 <div className='flex'>
                    <h2>{item.quantity}</h2>
                 </div>
                 <button
                 onClick={()=>increment(item._id)}
                 style={{height:'40px'}}>+</button>
             </div>

             <div style={{margin:'0px 20px'}} className='card_cart_text'>
                      <h2>Всего {item.price*item.quantity}$</h2>
              </div>
              {/* <div style={{margin:'0px 20px'}} className='card_cart_delete'>
                     {total}
              </div> */}
              <div style={{margin:'0px 20px'}} className='card_cart_delete'>
                      <button
                      onClick={()=>removeProduct(item._id)}
                      >Удалить</button>
              </div>
          </div>
          
        )
      })
      }
      <div>{total}</div>
      <PaypalButton 
      total={total}
      tranSuccess={tranSuccess}
      />
    </div>
  )
}
