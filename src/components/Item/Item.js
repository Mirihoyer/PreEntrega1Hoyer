//import State from "../State/state";
import './Item.css'
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div>
      <Link to={`item/${producto.id}`} className="data">
        <div className="txtstyle">
          <img className="img" alt={producto.nombre} src={`imagenes/${producto.imagen}`} />
          <h2> {producto.nombre} de {producto.material}</h2>
          <h2>{producto.color}</h2>

        </div>
      </Link>
    </div>
  );
};

export default Item;