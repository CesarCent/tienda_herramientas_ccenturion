import Item from "./Item";

const ItemList = ({ items }) => {

    return (
        <div className="d-flex flex-wrap justify-content-around" >
            {items?.map((e, i) => <Item key={i} id={e.id} title={e.title} description={e.description} price={e.price} pictureURL={e.pictureURL} />)}
        </div>
    )
}

export default ItemList