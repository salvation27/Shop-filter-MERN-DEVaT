import React,{useContext} from 'react'
import {Route,Switch} from 'react-router-dom'
import  Products from '../Products/Products'
import  Login from '../Login/Login'
import  Register from '../Register/Register'
import  Cart from '../Cart/Cart'
import  PageNotFound from '../PageNotFound/PageNotFound'
import  Detail  from '../Detail/Detail'
import  Categories  from '../Categories/Categories'
import{GlobalState} from '../../GlobalState'

export default function Pages() {

    const state = useContext(GlobalState)
    const [isLogged] = state.UserApi.isLogged
    const [isAdmin] = state.UserApi.isAdmin
    return (
        <Switch>
           <Route exact path='/' component={Products} />
           <Route exact path='/login' component={isLogged ?  PageNotFound  :Login} />
           <Route exact path='/register' component={isLogged ?  PageNotFound  : Register} />
           <Route exact path='/category' component={isAdmin ? Categories  :  PageNotFound } />
           <Route exact path='/products' component={Products} />
           <Route exact path='/cart' component={Cart} />
           <Route exact path='/details/:id' component={Detail} />


           {/* 404 */}
           <Route path='*' component={PageNotFound} />
        </Switch>
    )
}
