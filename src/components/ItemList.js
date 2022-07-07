import Item from "./Item";

const ItemList = ({items})=>{
    
    return(
        <div>
            {items?.map( (e, i) => <Item  key={i} id={i}  title={e.title} description={e.description} price={e.price} pictureURL={e.pictureURL} /> )}
        </div>
    )
}

export default ItemList