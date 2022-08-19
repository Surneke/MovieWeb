import { createContext, useContext, useState } from "react";
import {data} from '../data/data'

const CartContext = createContext()

export const CartProvider = (props) => {
    const { children } = props

    return (
        <CartContext.Provider value={{data}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)