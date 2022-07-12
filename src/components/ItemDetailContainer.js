import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const { id } = useParams()


    useEffect(() => {
        let getItem = new Promise((resolve, reject) => {
            setTimeout(
                () => resolve([
                    { stock:10,id: 1, title: "Hammer Item", description: "un buen Item", price: 300.00, pictureURL: "https://http2.mlstatic.com/D_NQ_NP_2X_898083-MLA41813342841_052020-F.webp", category: "hogar" },
                    { stock:15,id: 2, title: "Taladro Item", description: "de alta calidad", price: 2400.00, pictureURL: "https://http2.mlstatic.com/D_NQ_NP_2X_635184-MLA50496909423_062022-F.webp", category: "hogar" },
                    { stock:4,id: 3, title: "Bordeadora", description: "corta muy bien", price: 3200.00, pictureURL: "https://http2.mlstatic.com/D_NQ_NP_2X_737752-MLA42952677179_072020-F.webp", category: "jardin" },
                    { stock:9,id: 4, title: "Manguera", description: "funcional y economica", price: 400.00, pictureURL: "https://http2.mlstatic.com/D_NQ_NP_2X_959426-MLA32680953339_102019-F.webp", category: "jardin" },
                    { stock:100,id: 5, title: "Clavo Item", description: "nunca sobran", price: 1.00, pictureURL: "https://http2.mlstatic.com/D_NQ_NP_2X_810262-MLA40816851128_022020-F.webp", category: "hogar" }
                ]), 1000
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