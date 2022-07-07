import { useState } from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    let ItemsService = new Promise((resolve, reject) => {
        setTimeout(
            () => resolve([
                { id: 1, title: "Hammer Item", description: "un buen Item", price: 300.00, pictureURL: "nn", category: "hogar" },
                { id: 2, title: "Taladro Item", description: "de alta calidad", price: 2400.00, pictureURL: "nn", category: "hogar" },
                { id: 3, title: "Bordeadora", description: "corta muy bien", price: 3200.00, pictureURL: "nn", category: "jardin" },
                { id: 4, title: "Manguera", description: "funcional y economica", price: 400.00, pictureURL: "nn", category: "jardin" },
                { id: 5, title: "Clavo Item", description: "nunca sobran", price: 1.00, pictureURL: "nn", category: "hogar" }
            ]), 1000
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
        <ItemList items={items} />
    )
}

export default ItemListContainer;