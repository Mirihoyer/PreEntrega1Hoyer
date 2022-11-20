import State from "../State/state";
import './Item.css'

const Item = ({producto}) => {
  return (
    <div className="data">
        <img className="img" alt={producto.nombre} src={producto.imagen}  />
       <div className="txtstyle">
                <h2>Nombre del producto: {producto.nombre}</h2>
                <h2>Material del producto: {producto.material}</h2>
                <h2>Color del producto: {producto.color}</h2>
                <h2>Precio del producto: {producto.precio}</h2>
            <State/>
            </div> 
    </div>
  );
};

export default Item;