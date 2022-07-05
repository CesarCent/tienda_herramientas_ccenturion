import { useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState()

    let getItem = new Promise((resolve, reject) => {
        setTimeout(
            () => resolve(
                { id: 1,title: "Hammer Item", description: "Una buena herramienta, nunca puede faltar.", price: 300.00, pictureURL: "https://http2.mlstatic.com/D_NQ_NP_2X_898083-MLA41813342841_052020-F.webp" })
            , 2000)
    })

    getItem.then((r) => {
        setItem(r);
    })

    return(
        item ?<ItemDetail item={item}/>: <span>Loading...</span>
    )

}

export default ItemDetailContainer;