import React from 'react'
import {Route,Switch} from 'react-router-dom'
import  Products from '../Products/Products'
import  Login from '../Login/Login'
import  Cart from '../Cart/Cart'
import  PageNotFound from '../PageNotFound/PageNotFound'

export default function Pages() {
    return (
        <Switch>
           <Route exact path='/' component={Products} />
           <Route exact path='/login' component={Login} />
           <Route exact path='/products' component={Products} />
           <Route exact path='/cart' component={Cart} />


           {/* 404 */}
           <Route path='*' component={PageNotFound} />
        </Switch>
    )
}
