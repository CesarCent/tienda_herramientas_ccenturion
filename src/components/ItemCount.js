
const ItemCount = ({  initial = 1, increase, decreace }) => {


    // let decreace = ()=>{
    //     if((count - onAdd) >= 0 ){
    //         setCount(count - onAdd);
    //     }
    // }

    // let increase = ()=>{
    //     if((count + onAdd) <= stock ){
    //         setCount(count + onAdd);
    //     }
    // }
    
    return (
    <>
        <button  onClick={increase} className="btn btn-light">+</button>
        <span className="p-4">{initial}</span>
        <button  onClick={decreace} className="btn btn-light">-</button>

    </>
    )
}

export default ItemCount;