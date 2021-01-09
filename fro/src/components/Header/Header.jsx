import React  from 'react'
// import {useContext} from 'react'
// import {GlobalState} from '../../GlobalState'
import './Header.css'
import logo from '../../logo.svg'
import {Link} from 'react-router-dom'

export default function Header() {
//     const value = useContext(GlobalState)
// console.log('dadadadadad',value);
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
                                                <Link to='/products'>Product</Link>
                                            </li>
                                            <li>
                                                <Link to='/login'>Login/Register</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="header_cart flex">
                                        <Link to='/cart'>
                                            <i className="fas fa-shopping-cart"></i> 
                                            <div className='cart_num'>0</div>
                                        </Link>
                                   </div>
                         </div>
                        </div>
                    </div>
                </div>
            </div> 
        </header>
    )
}
