import {useState} from 'react';
import './ItemCount.css';

const ItemCount = ({initial, stock}) =>{
    
    const [qty, setQty] = useState(initial);
    
    const decreaseQty = () => {
        setQty(qty-1);     
    }   
    const increaseQty = () => {
        setQty(qty+1);     
    }

    const onAdd = () => {
        alert(`Agregaste ${qty} unidad(es) a tu carrito`);
    }
    
    return (
        <div className="qty-container">
            <div className="qty-selectors">
                <button className="qty-buttom"onClick={decreaseQty} disabled={(qty<=initial) ? true : false}>-</button>
                <div className="qty-display">{qty}</div>
                <button className="qty-buttom" onClick={increaseQty} disabled={ (qty>=stock) ? true : false }>+</button>
            </div>
            <button className="qty-add" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount