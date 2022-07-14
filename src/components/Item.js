import { Link } from "react-router-dom"
import "./css/Item.css"

const Item = ({ id, title, description, price, pictureURL }) => {
    return (
        <div className="card m-4" style={{ width: "14rem" }}>
            <Link to={'/item/' + id} className="text-dark">
                <div className="img-container">
                    <img className="img-fluid" src={pictureURL} alt="some tool" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">${price}</p>
                </div>
            </Link>
        </div>
    )
}


export default Item