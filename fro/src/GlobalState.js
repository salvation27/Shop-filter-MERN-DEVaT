import React ,{createContext, useState} from 'react'
// import productsData from './api/products'
import ProductApi from './api/productsApi'

export const GlobalState = createContext()



export const DataProvider =({children}) =>{
    const [token,setToken] = useState(false)

    const state = {
        token:[token,setToken],
        poductsData:ProductApi()
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}