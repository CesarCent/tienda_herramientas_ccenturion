import './css/ItemDetail.css'
import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {
    return (
        //<div>#{item.id}#{item.title}#{item.description}#{item.price}#{item.pictureURL}</div>

        <div className="itemDetail card text-dark m-auto mt-5 mb-5" style={{ width: "18rem" }}>
            <img className="card-img-top" src={item.pictureURL} alt="tool" />
            <h5 className="card-title">{item.title}</h5>
            <h5 className="card-subtitle">${item.price}</h5>
            <div className="card-body">
                <p className="card-text">{item.description}</p>
                <ItemCount/>
            </div>
        </div>
    )
}


export default ItemDetail