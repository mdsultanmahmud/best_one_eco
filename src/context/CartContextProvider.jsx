import React, { createContext, useEffect, useState } from 'react';
export const CartContext = createContext([])
const CartContextProvider = ({children}) => {
    const [countries, setCountries] = useState([])
    const getLocalCartData = () =>{
        let storedCart = localStorage.getItem('CART')
        if(storedCart){
            return JSON.parse(storedCart)
        }else{
            return []
        }
    }
    const [cart, setCart] = useState(getLocalCartData())
    useEffect(() =>{
        localStorage.setItem('CART', JSON.stringify(cart))
    } ,[cart])
    const value = {cart, setCart,countries, setCountries}
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;