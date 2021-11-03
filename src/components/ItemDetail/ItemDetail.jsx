import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'; 

const ItemDetail = ({detail}) => {
    
    const [qty, setQty] = useState (1)

    const onAdd = (qtyAdded) => {
        setQty(qtyAdded)
    }

    return (
            <div className="product-detail-card" >
                <img className="product-detail-img" src={detail.pictureUrl} alt={detail.title}/>
                <div>
                    <h5 className="product-detail-title">{detail.title}</h5>
                    <h6 className="product-detail-brand">{detail.brand}</h6>
                    <p className="product-detail-description">{detail.description}</p>
                    <p className="product-detail-price">$ {detail.price}</p>
                </div>
                <ItemCount initial={qty} stock={detail.stock} onAdd={onAdd}/>
            </div>
    )
}

export default ItemDetail