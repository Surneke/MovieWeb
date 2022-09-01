import { createContext, useContext, useState } from "react";
import {data} from '../Data/data'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    return (
        <CartContext.Provider value={{data}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)