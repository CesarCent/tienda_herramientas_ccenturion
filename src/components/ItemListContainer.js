import ItemList from "./ItemList";

const ItemListContainer = (props)=>{
    return(
        <>
        <span>{props.greetings}</span>
        <ItemList/>
        </>
    )
}

export default ItemListContainer;