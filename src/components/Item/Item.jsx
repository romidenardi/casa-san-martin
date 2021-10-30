import {Link} from "react-router-dom"
import ItemCount from '../ItemCount/ItemCount';
import './Item.css'; 

const Item = ({prod}) => {
    
    return (
            <div className="product-card" >
                <Link to={`/producto/${prod.id}`}><img className="product-img" src={prod.pictureUrl} alt={prod.title}/></Link>
                <h5 className="product-title">{prod.title}</h5>
                <p className="product-price">$ {prod.price}</p>
                <Link to={`/producto/${prod.id}`}><button className="product-buttom">Más información</button></Link>
                <ItemCount initial={1} stock={prod.stock}/>
            </div>
    )
}

export default Item