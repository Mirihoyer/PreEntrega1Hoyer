import { useState, useContext } from "react";
import { cartContext } from "../../context/CartProvider";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ productSelected }) => {
  const [count, setCount] = useState(0);
  const { cart, addToCart} = useContext(cartContext);
console.log(productSelected);
  return (
  <div>
    <img className="img" 
    alt={productSelected.nombre} 
    src={`/imagenes/${productSelected.imagen}`} />
    <h1>{productSelected.nombre}</h1>
    <h2>{productSelected.material}</h2>
    <h2>{productSelected.color}</h2>
    <h2>{productSelected.precio}</h2>
    <h2>{count}</h2>
<ItemCount setCount={setCount} />
<button onClick={() => addToCart(productSelected, count)}>Agregar al carrito</button>
{<h3>Cantidad de productos en el carrito: {cart && cart.length}</h3>}
  </div>
  );
};

export default ItemDetail;