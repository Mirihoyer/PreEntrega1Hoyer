//import State from "../State/state";
import './Item.css'
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (

    <Link to={`item/${producto.id}`} className="data">
      <div className="txtstyle">
      <img className="img" alt={producto.nombre} src={producto.imagen}  />
        <h2>Nombre: {producto.nombre}</h2>
        <h2>Material: {producto.material}</h2>
        <h2>Color: {producto.color}</h2>
        <h2>Precio: {producto.precio}</h2>
      </div>
    </Link>

    /* <div className="data">
        <img className="img" alt={producto.nombre} src={producto.imagen}  />
       <div className="txtstyle">
                <h2>Nombre: {producto.nombre}</h2>
                <h2>Material: {producto.material}</h2>
                <h2>Color: {producto.color}</h2>
                <h2>Precio: {producto.precio}</h2>
            <State/>
            </div> 
    </div> */
  );
};

export default Item;