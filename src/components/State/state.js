import { useState } from "react";
 
const State = () => {
    const [contador, setContador]= useState(0)
    const sumar = () => {
        setContador (contador + 1);
    }

    const restar = () => {
       if( contador === 0 ){
        return
       }
        setContador (contador - 1);
    }
  return (
    <div>

<h2>Agregar al carrito</h2>
    <h2>{contador}</h2>
    
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        
    </div>
  )
}

export default State