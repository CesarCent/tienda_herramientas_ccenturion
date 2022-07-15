import { useCart } from "../contexts/CartContext"

export const Cart = ()=>{
    const cartContext = useCart()
    console.log(cartContext.cart)

    return(
        <div>
            { cartContext.cart.addedItems.map(
                (e) => <h6>{e.title} - {e.cantidad} | <button className=" btn btn-danger" >borrar</button> </h6>
            ) }
        </div>
    )
}

