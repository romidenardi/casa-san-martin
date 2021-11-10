import {Link} from 'react-router-dom';
import {useCartContext} from '../../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {

        const {itemQuantity} = useCartContext()

            return (
                <Link to="/cart" 
                className=
                {itemQuantity>0
                ? "cartwidget-container"
                : "hide-cartwidget"
                }   
                >
                    <button className="cartwidget">
                    <p className="cartwidget-quantity">{itemQuantity}</p>
                    <img src="../assets/csm-icon-cart.png" alt="Carrito"/>
                    </button>
                </Link>
            )
        }

export default CartWidget