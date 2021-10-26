import ItemCount from '../ItemCount/ItemCount';
import './Item.css'; 

const Item = ({prod}) => {
    
    return (
            <div className="product-card" >
                <img className="product-img" src={prod.pictureUrl} alt={prod.title}/>
                <h5 className="product-title">{prod.title}</h5>
                <p className="product-price">$ {prod.price}</p>
                <ItemCount initial={1} stock={prod.stock}/>
            </div>

    )
}

export default Item