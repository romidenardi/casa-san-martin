import {useState} from 'react';
import {Link} from "react-router-dom"
import './ItemCount.css';

const ItemCount = ({initial, stock, onAdd}) =>{

    const [qty, setQty] = useState(initial);
    const [changeButtom, setChangeButtom] = useState(false);
    
    const decreaseQty = () => {
        setQty(qty-1);     
    }   
    const increaseQty = () => {
        setQty(qty+1);     
    }

    const handlerOnAdd = () => {
    onAdd(qty);
    alert(`Agregaste ${qty} unidad(es) a tu carrito`);
    setChangeButtom(true);
    }

    return (
        <div className="qty-container">
            <div className="qty-selectors">
                <button className="qty-buttom"onClick={decreaseQty} disabled={(qty<=initial) ? true : false}>-</button>
                <div className="qty-display">{qty}</div>
                <button className="qty-buttom" onClick={increaseQty} disabled={(qty>=stock) ? true : false}>+</button>
            </div>
            {changeButtom 
            ? <Link to="/cart"><button className="purchase">Terminar compra</button></Link>
            : <button className="qty-add" onClick={handlerOnAdd}>Agregar al carrito</button>
            }
        </div>
    )
}

export default ItemCount