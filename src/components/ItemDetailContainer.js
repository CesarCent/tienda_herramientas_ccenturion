import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import products from "../utils/products.json"


const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const { id } = useParams()


    useEffect(() => {
        let getItem = new Promise((resolve, reject) => {
            setTimeout(
                () => resolve(products.data), 1000
            )
        })

        getItem.then((r) => {
            setItem((r.filter((i) => i.id === parseInt(id))[0]));
        })
    }, [id])

    return (
        item ? <ItemDetail item={item} /> : <span>Loading...</span>
    )

}

export default ItemDetailContainer;