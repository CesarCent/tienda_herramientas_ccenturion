import { useState } from "react";

const ItemCount = ({ stock = 10, initial = 1, onAdd=1 }) => {

    const [count, setCount] = useState(initial);

    let decreace = ()=>{
        if((count - onAdd) >= 0 ){
            setCount(count - onAdd);
        }
    }

    let increase = ()=>{
        if((count + onAdd) <= stock ){
            setCount(count + onAdd);
        }
    }
    
    return (
    <>
        <button  onClick={increase} className="btn btn-light">+</button>
        <span className="p-4">{count}</span>
        <button  onClick={decreace} className="btn btn-light">-</button>

    </>
    )
}

export default ItemCount;