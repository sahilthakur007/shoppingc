import { createContext, useState } from "react";

export const Cart = createContext(); 
export default ({ children }) => {
    const [cart, setcart] = useState([]);
    return( <Cart.Provider value = {{cart,setcart}}>{children}</Cart.Provider>)
} 