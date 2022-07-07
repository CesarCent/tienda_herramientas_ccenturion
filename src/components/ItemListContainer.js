import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams} from 'react-router-dom';


const ItemListContainer = ()=>{
    const [items, setItems] = useState([]);
    const {id}= useParams();

    let ItemsService = new Promise((resolve, reject)=>{
        setTimeout(
            ()=>resolve([
                {title: "Hammer Item" ,description: "un buen Item", price:300.00, pictureURL: "nn" , category:"home"},
                {title: "Taladro Item" ,description: "de alta calidad", price:2400.00, pictureURL: "nn" , category:"home"},
                {title: "Bordeadora" ,description: "corta muy bien", price:3200.00, pictureURL: "nn" , category:"jardin"},
                {title: "Manguera" ,description: "funcional y economica", price:400.00, pictureURL: "nn" , category:"jardin"},
                {title: "Clavo Item" ,description: "nunca sobran", price:1.00, pictureURL: "nn" , category:"home"}
            ]),2000
        )
    })

        ItemsService.then((r)=>{
            if(id){
               
            }
        })
    return(
        <ItemList items={items}/>
    )
}

export default ItemListContainer;