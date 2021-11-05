import {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'; 

const ItemDetail = ({itemDetail}) => {
    
    const [quantity, setQuantity] = useState (1)

    const addToCart = (quantityAdded) => {
        setQuantity(quantityAdded)
    }

    return (
            <div className="item-detail-card" >
                <img className="item-detail-img" src={itemDetail.pictureUrl} alt={itemDetail.title}/>
                <div>
                    <h5 className="item-detail-title">{itemDetail.title}</h5>
                    <h6 className="item-detail-brand">{itemDetail.brand}</h6>
                    <p className="item-detail-description">{itemDetail.description}</p>
                    <p className="item-detail-price">$ {itemDetail.price}</p>
                </div>
                <ItemCount initial={quantity} stock={itemDetail.stock} addToCart={addToCart}/>
            </div>
    )
}

export default ItemDetail