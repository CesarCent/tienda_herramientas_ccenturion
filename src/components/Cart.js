import { useCart } from "../contexts/CartContext"

export const Cart = () => {
    const cartContext = useCart()

    const remove = (prod)=>cartContext.removeFromCart(prod);

    return (
        <div className="container pt-4">
            {cartContext?.cart?.addedItems.map(
                (prod, i) =>
                    // <h6 key={i}>{e.title} x {e.cantidad}  <button className=" btn btn-danger" >X</button> </h6>
                    <div className="row justify-content-center" key={i}>
                        <div className="col-4">{prod.title} x {prod.cantidad}</div>
                        <div className="col-2">
                            <button onClick={()=>remove(prod)} className=" btn btn-danger" >X</button>
                        </div>
                    </div>
            )}
        </div>
    )
}

