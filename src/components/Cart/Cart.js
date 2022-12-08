import { fireEvent } from "@testing-library/react";
import { useContext, useState, useEffect } from "react";
import { cartContext } from "../../context/CartProvider";
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore';

const Cart = () => {
    const { cart } = useContext(cartContext);
    const [total, setTotal] = useState(0);

    const getTotalPrice = () => {
        setTotal(
            cart.reduce((acc, product) => acc + product.precio * product.quantity, 0)
        );
    };

    const createOrder = () => {
        const db = getFirestore();
        const query = collection(db, 'Order');
        const newOrder = {
            buyer: {
                name: 'Miriam',
                phone: 'Miriam',
                email: '12345678',
            },
            items: cart,
            total: total,
        }
        addDoc(query, newOrder)
            .then((response) => {
                alert(`Orden creada con el id ${response.id}`)
                return (response)
            })
            .then((res) => {
                cart.forEach((product) => {
                    const query = doc(db, 'products', product.id)
                    updateDoc(query,{
                        stock: product.stock - product.quantity,
                       

                    })
                })
                
                //const orderDoc = doc(db, 'products', res.id);
            })
            .catch((error) => console.log(error));
    };


    useEffect(() => {
        getTotalPrice();
    }, [cart])
    return (
        <div>
            {cart.map((product) => (
                <div>
                    <img className="img"
                        alt={product.nombre}
                        src={`/imagenes/${product.imagen}`} />
                    <h1>{product.nombre}</h1>
                    <h2>{product.material}</h2>
                    <h2>{product.color}</h2>
                    <h2>{product.precio}</h2>
                </div>
            ))
            }
            <div>
                <h1>Total: {total}</h1>
                <button onClick={createOrder}>Crear orden</button>
            </div>
        </div>);


};

export default Cart;