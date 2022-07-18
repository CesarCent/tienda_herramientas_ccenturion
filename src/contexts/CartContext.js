import { createContext, useContext, useState } from "react";

export const CartContext = createContext()
export const useCart = () => {return useContext(CartContext)}

const INITIAL_STATE = {
    addedItems: [],
    totalPrice: 0
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(INITIAL_STATE)

    const addToCart = (product)=>{
        let newCart = cart;
        let index = cart.addedItems.findIndex((e)=> e.title === product.title )
        console.log(index);

        if(index > -1){
            newCart.addedItems[index].cantidad += product.cantidad
        }else{
            newCart.addedItems.push(product)
        }

        setCart({...cart, newCart})
    }

    const removeFromCart = (product)=>{
        let newCart = cart;
        let index = cart.addedItems.findIndex((e)=> e.title === product.title )

        if(index > -1){
            newCart.addedItems.splice(index, 1)
            setCart({...cart, newCart})
        }

    }

    return (
        <div>
            <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
                {children}
            </CartContext.Provider>
        </div>
    )
}