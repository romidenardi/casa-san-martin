import {Link} from 'react-router-dom';
import {useCartContext} from '../../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {

    const {cartList} = useCartContext()

    return (
        <Link to="/cart" className="cartwidget-container">
            <button className="cartwidget">
                <p className="cartwidget-quantity">{cartList.length}</p>
                <img src="../assets/csm-icon-cart.png" alt="Carrito"/>
            </button>
        </Link>
    )
}

export default CartWidget