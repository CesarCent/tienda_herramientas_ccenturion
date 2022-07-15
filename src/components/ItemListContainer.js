import { useState } from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import products from "../utils/products.json"



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    let ItemsService = new Promise((resolve, reject) => {
        setTimeout(
            () => resolve(products.data), 1000
        )
    })

    ItemsService.then((r) => {
        if (id) {
            setItems(
                r.filter((obj) => obj.category === id)
            )
        } else {
            setItems(r)
        }
    })

    return (
        <div className="row">
            <div className="col-10 offset-md-1">
                <ItemList items={items} />
            </div>
        </div>
    )
}

export default ItemListContainer;