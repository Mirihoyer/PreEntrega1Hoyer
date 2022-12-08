import { fireEvent } from "@testing-library/react";
import { useContext, useState, useEffect } from "react";
import { cartContext } from "../../context/CartProvider";
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore';
import moment from "moment/moment";

const Cart = () => {
    const { cart } = useContext(cartContext);
    const [total, setTotal] = useState(0);
    const [formValues, setFormValues] = useState({
        name: '',
        phone: '',
        email: '',
    });

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
                phone: '12345678',
                email: 'test@test.com',
            },
            date: moment().format('DD/MM/YY'),
            items: cart,
            total: total,
        }
        addDoc(query, newOrder)
            .then((response) => {
                alert(`Orden creada con el id ${response.id}`)
                return response;
            })
            .then((res) => {
                cart.forEach((product) => {
                    const query = doc(db, 'products', product.id)
                    updateDoc(query,{
                        stock: product.stock - product.quantity,
                       

                    });
                });
                
                //const orderDoc = doc(db, 'products', res.id);
            })
            .catch((error) => console.log(error));
    };


    useEffect(() => {
        getTotalPrice();
    }, [cart]);

    const handleInputChange = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setFormValues({
            ...formValues,
        [event.target.name] : event.target.value,
        })
    };

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
                    <h2>{product.stock}</h2>
                </div>
            ))
            }
            <div>
                <h1>Total: {total}</h1>
                <button onClick={createOrder}>Crear orden</button>
                <div>
                    <h2>Formulario</h2>
                    <input name='name' type="text" placeholder="Nombre" value={formValues.name} onChange={handleInputChange} />
                    <input name='phone' type="text" placeholder="Telefono" value={formValues.phone} onChange={handleInputChange} />
                    <input name='email' type="text" placeholder="Email" value={formValues.email} onChange={handleInputChange} />

                </div>
            </div>
        </div>);


};

export default Cart;