import './css/ItemDetail.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from './ItemCount'

const ItemDetail = ({ item, onAdd=1 }) => {
    const [count, setCount] = useState(1);

    let decreace = (e)=>{
        if((count - onAdd) >= 0 ){
            setCount(count - onAdd);
        }
    }

    let increase = (e)=>{
        if((count + onAdd) <= item.stock ){
            setCount(count + onAdd);
        }
    }

    return (
        //<div>#{item.id}#{item.title}#{item.description}#{item.price}#{item.pictureURL}</div>

        <div className="itemDetail card text-dark m-auto mt-5 mb-5" style={{ width: "18rem" }}>
            <img className="card-img-top" src={item.pictureURL} alt="tool" />
            <h5 className="card-title">{item.title}</h5>
            <h5 className="card-subtitle">${item.price}</h5>
            <div className="card-body">
                <p className="card-text">{item.description}</p>
                <ItemCount increase={increase} decreace={decreace} initial={count}/>
            </div>
            <Link className='btn btn-success m-3' to={'/cart'}>
                <div>Comprar</div>
            </Link>
        </div>
    )
}


export default ItemDetail