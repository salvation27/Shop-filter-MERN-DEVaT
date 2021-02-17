import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from  'axios'

export default function Купшыеук() {
  const[user,setUser] = useState({
    name:'',
    email:'',
    password:'',
  })

  const onChangeInput= (e) => {
    console.log(e.target)
      const {name,value} = e.target
      setUser({
        ...user,
        [name]:value
      })
  }

  
  
const registerSubmit = async (e) =>{
  e.preventDefault()
  try {
    await axios.post('/user/register',{...user})
 // записываем  в локал стораж
    localStorage.setItem('firstLogin',true)
    window.location.href = '/'
 
  } catch (error) {
    alert(error.response.data.msg)
  }
 }


  return (
    <div className='login_page'>
       <div className="container">
         <div className="row">
           <div className="col">
             <div className="login_wrap">
               <div className="login_title">
                 <h1>Register</h1>
               </div>
               <form onSubmit={registerSubmit}>
               <input 
                 type="name" 
                 required
                 placeholder='Name ' 
                 name='name'
                 value={user.name}
                 onChange={onChangeInput}
                 />
                 <input 
                 type="email" 
                 placeholder='email' 
                 name='email'
                 value={user.email}
                 required
                 onChange={onChangeInput}
                 />
                 <input 
                 type="password" 
                 placeholder='password' 
                 name='password'
                 value={user.password}
                 required
                 onChange={onChangeInput}
                 />
                 <div className="btn_wrap">
                    <button type='submit'>
                      Зарегиться
                    </button>
                    <Link to='/login'>
                        Войти
                    </Link>
                 </div>
               </form>
             </div>
           </div>
         </div>
       </div>
    </div>
  )
}