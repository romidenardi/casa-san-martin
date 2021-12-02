import {useCartContext} from '../../context/CartContext';
import {Link} from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {

        const {itemQuantity} = useCartContext()
            return (
                <Link to="/cart" className="cartwidget-container">
                    <button className="cartwidget">
                        <p className="cartwidget-quantity">{itemQuantity}</p>
                        <img src="../assets/csm-icon-cart.png" alt="Carrito"/>
                    </button>
                </Link>
            )
        }

export default CartWidget