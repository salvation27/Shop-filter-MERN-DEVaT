import React  from 'react'
import {useContext} from 'react'
import {GlobalState} from '../../GlobalState'
import './Header.css'
import logo from '../../logo.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Header() {
    const state = useContext(GlobalState)
    
    const[isLogged] = state.UserApi.isLogged
    const[isAdmin] = state.UserApi.isAdmin
    const[cart] = state.UserApi.cart

const logoutUser = async ()=>{
   await axios.get('/user/logout')
   localStorage.clear()
   window.location.href='/'
}

    const adminRouter = ()=>{
       return (
           <>
           <li><Link to="/create_products">Create Products</Link></li>
           <li><Link to="/category">Category</Link></li>
           </>
       )
    } 



    const loggedRouter = ()=>{
        return (
            <>
            <li><Link to="/history">History</Link></li>
            <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
     } 


    return (
        
        <header className='header'>
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <div className="header_wrap flex">
                           <div className="logo flex">
                                <div className="header_mob_menu">
                                    <i className="fas fa-caret-square-down"></i>
                                    <i className="far fa-caret-square-down"></i>
                                    </div>
                                    <div className="header_logo">
                                        <Link to='/'>
                                            <img src={logo} alt=""/>
                                        </Link>
                                    </div>
                           </div>
                         <div className="menu_cart flex">
                                <div className="header_menu">
                                        <ul className='flex'>
                                            <li>
                                                <Link to='/products'>{isAdmin ? 'Products':'Shop'}</Link>
                                            </li>
                                            {
                                                isAdmin && adminRouter()
                                            }
                                            {
                                                   isLogged ? loggedRouter() : <li>
                                                   <Link to='/login'>Login/Register</Link>
                                               </li>
                                                }
                                            
                                        </ul>
                                       
                                    </div>
                                    {
                                            isAdmin ? '': <div className="header_cart flex">
                                            <Link to='/cart'>
                                                <i className="fas fa-shopping-cart"></i> 
                                    <div className='cart_num'>{cart.length}</div>
                                            </Link>
                                       </div>
                                        }
                                    
                         </div>
                        </div>
                    </div>
                </div>
            </div> 
        </header>
    )
}
