import { createContext, useState } from "react";

export const cartContext = createContext([]);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    }
    const addToCart = (product, quantity) => {
               if(isInCart(product.id)) {
            alert('el producto ya esta en el carrito');
        } else {
        setCart([...cart,{...product, quantity}]);
   }
 }; 
const clearCart =() => { setCart([]);};

const removeProduct = (id) => cart.filter(product => product.id !== id);

    return (
        <cartContext.Provider value={{ cart, addToCart, clearCart, removeProduct}}>
            {children}
        </cartContext.Provider>
    );
};

export default CartProvider;