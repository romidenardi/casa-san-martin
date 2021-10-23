import './ItemList.css';
import Item from "../Item/Item";
import ItemCount from '../ItemCount/ItemCount';
import {useEffect, useState} from 'react';


const ItemList = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        Item
        .then(response => {        
            setProduct(response)
        })    
    },[])   

    return (
        <div className="product-container">
            {product.map(prod => <div className="product-card" key={prod.id}>
                                    <img className="product-img" src={prod.pictureUrl} alt={prod.title}/>
                                    <h5 className="product-title">{prod.title}</h5>
                                    <p className="product-price">$ {prod.price}</p>
                                    <ItemCount initial={1} stock={prod.stock}/>
                                </div>
            )}
        </div>
    )
}

export default ItemList