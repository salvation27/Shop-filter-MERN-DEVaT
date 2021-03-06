import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Login() {
  const[user,setUser] = useState({
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


  
const loginSubmit = async (e) =>{
 e.preventDefault()
 try {
   await axios.post('/user/login',{...user})
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
                 <h1>Login</h1>
               </div>
               <form onSubmit={loginSubmit}>
                 <input 
                 type="email" 
                 placeholder='email' 
                 name='email'
                 value={user.email}
                 onChange={onChangeInput}
                 />
                 <input 
                 type="text" 
                 autoComplete='on'
                 placeholder='password' 
                 name='password'
                 value={user.password}
                 onChange={onChangeInput}
                 />
                 <div className="btn_wrap">
                    <button type='submit'>
                      Войти
                    </button>
                    <Link to='/register'>
                        Зарегистрироваться
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
