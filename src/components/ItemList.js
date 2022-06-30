import { useState } from "react";
import Item from "./Item";

const ItemList = ()=>{
    
    const [item, setItem] = useState([])

    let ItemsService = new Promise((resolve, reject)=>{
        setTimeout(
            ()=>resolve([
                {title: "Hammer Item" ,description: "un buen Item", price:300.00, pictureURL: "nn" },
                {title: "Taladro Item" ,description: "de alta calidad", price:2400.00, pictureURL: "nn" },
                {title: "Clavo Item" ,description: "nunca sobran", price:1.00, pictureURL: "nn" }
            ]),2000
        )
    })

    ItemsService.then((r)=>{
        setItem(r);
    })
    
    return(
        <div>
            {item?.map( (e, i) => <Item  key={i} id={i}  title={e.title} description={e.description} price={e.price} pictureURL={e.pictureURL} /> )}
        </div>
    )
}

export default ItemList