import React ,{createContext, useState,useEffect} from 'react'
// import productsData from './api/products'
import ProductApi from './api/productsApi'
import UserApi from './api/userApi'
import CategoriesApi from './api/CategoriesApi'

import axios from 'axios'

export const GlobalState = createContext()



export const DataProvider =({children}) =>{
    const [token,setToken] = useState(false)

    const refreshToken = async () => {
        const res = await axios.get('/user/refresh_token')
        setToken(res.data.accesstoken)
    }

        useEffect(()=>{
            const firstLogin = localStorage.getItem('firstLogin')
            if(firstLogin) refreshToken()
        },[])
        
    const state = {
        token:[token,setToken],
        poductsData:ProductApi(),
        UserApi:UserApi(token),
        categoriesApi:CategoriesApi()
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}