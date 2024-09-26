import { createContext, useState } from "react";


export const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [cart, setCart] = useState([])
    const [orders, setOrders] = useState([])

    return (
        <Context.Provider value={{isLoggedIn, setIsLoggedIn, cart, setCart}}>
            {children}
        </Context.Provider>
    )
}