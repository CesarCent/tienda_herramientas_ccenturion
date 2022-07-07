import { Link } from "react-router-dom"

const Item = ({ id, title, description, price, pictureURL }) => {
    return (
        <Link to={'/item/' + id}>
            <div>#{id}#{title}#{description}#{price}#{pictureURL}</div>
        </Link>
    )
}


export default Item