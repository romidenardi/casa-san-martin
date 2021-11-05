import {createContext, useContext, useState} from "react";

const CartContext = createContext();

export const useCartContext = () => useContext (CartContext);

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addToCartList = itemAdded => {
        const findItem = cartList.find(itemInCart => itemInCart.itemDetail.id === itemAdded.itemDetail.id)
        if (findItem) {
            findItem.quantity = findItem.quantity + itemAdded.quantity
            setCartList(cartList)
        }
        else {
            setCartList(previousItems => [...previousItems, itemAdded])
        }
    }

    const removeItem = idItemToRemove => {
        setCartList(
            cartList.filter(itemSearched => itemSearched.itemDetail.id !== idItemToRemove)
        )
    }

    const removeCart = () => {
        setCartList([])
    }


    return (
        <CartContext.Provider value={{cartList, addToCartList, removeItem, removeCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider