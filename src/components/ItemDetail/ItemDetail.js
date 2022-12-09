import { useState, useContext } from "react";
import { cartContext } from "../../context/CartProvider";
import ItemCount from "../ItemCount/ItemCount";
import Button from 'react-bootstrap/Button';
import './ItemDetail.css';

const ItemDetail = ({ productSelected }) => {
  const [count, setCount] = useState(10);
  const { cart, addToCart } = useContext(cartContext);
  console.log(productSelected);
  return (
    <div className="itemDetail">
      <img className="imgdos"
        alt={productSelected.nombre}
        src={`/imagenes/${productSelected.imagen}`} />
      <div className="itemText">
        <h1>{productSelected.nombre}</h1>
        <h2>Material: {productSelected.material}</h2>
        <h2>Color: {productSelected.color}</h2>
        <h2>Precio ${productSelected.precio}</h2>
        <h3>Descripción del producto:</h3>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
        <h4>Cantidad disponible: {productSelected.stock}</h4>
        <h2>Productos a agregar: {count}</h2>
        <ItemCount setCount={setCount} />

        <button onClick={() => addToCart(productSelected, count)}>Agregar al carrito</button>
        {<h3>Cantidad de productos en el carrito: {cart && cart.length}</h3>}
      </div>
    </div>
  );
};

export default ItemDetail;