import {useState} from 'react';
import {useCartContext} from '../../context/CartContext';
import {getFirestore} from '../../services/GetFirestore';
import {Link} from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';
import UserForm from '../UserForm/UserForm';
import './Cart.css'; 

const Cart = () => {
    
    const [orderId, setOrderId] = useState("");
    const {cartList, removeItem, removeCart, cartTotal, userData} = useCartContext();

    const createOrder = () => {

        let order = {}
            order.date = firebase.firestore.Timestamp.fromDate(new Date());
            order.buyer = userData;
            order.total = cartTotal;
            order.items = cartList.map(itemAdded => {
                const id = itemAdded.itemDetail.id;
                const title = itemAdded.itemDetail.title;
                const quantity = itemAdded.quantity;
                const subtotal = itemAdded.itemDetail.price * itemAdded.quantity;
                return {id, title, quantity, subtotal}
                })

        const dataBase = getFirestore()

        dataBase.collection("orders").add(order)
        .then(response => setOrderId(response.id))
        .catch (error => alert("Error:", error))
        .finally(() => removeCart())

        const updateStock = dataBase.collection("items").where
        (firebase.firestore.FieldPath.documentId(), "in", cartList.map(idToUpdate => idToUpdate.itemDetail.id))

        const batch = dataBase.batch();

        updateStock.get()
        .then(response => {
            response.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                stock: docSnapshot.data().stock - cartList.find(idToUpdate => idToUpdate.itemDetail.id === docSnapshot.id).quantity
                })
            })
        
        batch.commit()
        .catch (error => alert("Error:", error))
        })
    }

    return (

        <div>
            {cartList.length
                ? <button className="remove-cart" onClick={() => removeCart()}>Vaciar carrito</button>
                : orderId===""
                    ? <div>
                        <p className="empty-cart">El carrito está vacío</p>
                        <Link className="go-to-home" to="/"> Ir al inicio</Link>
                    </div>
                    : <div>
                        <p className="completed-cart">¡Gracias por tu compra!</p>
                        <p className="order-id">Tu código de operación es: {orderId}</p>
                        <Link className="go-to-home" to="/"> Ir al inicio</Link>
                    </div>
            }
            
            <div className=
                {cartList.length
                    ? "filled-cart"
                    : "not-filled-cart"
                }
                > 
                {cartList.map(itemAdded => 
                    <div className="item-added-card" key={itemAdded.itemDetail.id} >
                        <img className="item-added-img" src={itemAdded.itemDetail.pictureUrl} alt={itemAdded.itemDetail.title}/>
                        <div className="item-added-info">
                            <h5 className="item-added-title">{itemAdded.itemDetail.title}</h5>
                            <h6 className="item-added-brand">{itemAdded.itemDetail.brand}</h6>
                            <p className="item-added-description">{itemAdded.itemDetail.description}</p>
                            <p className="item-added-price">Precio unitario: $ {itemAdded.itemDetail.price}</p>
                            <p className="item-added-quantity">Cantidad: {itemAdded.quantity}</p>
                            <p className="item-added-subtotal">Subtotal: $ {itemAdded.itemDetail.price * itemAdded.quantity}</p>
                        </div>
                        <div>
                            <button className="remove-item" onClick={() => removeItem(itemAdded.itemDetail.id)}>Eliminar producto</button>
                        </div>
                    </div>
                )}
                <div>
                    <p className="cart-total">Total de la compra: $ {cartTotal}</p>
                </div>
                <UserForm createOrder={createOrder}/>
            </div>
        </div>
    )
}

export default Cart