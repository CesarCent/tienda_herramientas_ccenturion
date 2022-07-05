import './css/ItemDetail.css'

const ItemDetail = ({ item }) => {
    return (
        //<div>#{item.id}#{item.title}#{item.description}#{item.price}#{item.pictureURL}</div>
        //https://http2.mlstatic.com/D_NQ_NP_2X_898083-MLA41813342841_052020-F.webp
        <div className="itemDetail card text-dark" style={{width: "18rem"}}>
            <img className="card-img-top" src={item.pictureURL} alt="tool"/>
                    <h5 className="card-title">{item.title}</h5>
                    <h5 className="card-subtitle">${item.price}</h5>
                <div className="card-body">
                    <p className="card-text">{item.description}</p>
                </div>
        </div>
    )
}


export default ItemDetail