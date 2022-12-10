import { fireEvent } from "@testing-library/react";
import { useContext, useState, useEffect } from "react";
import { cartContext } from "../../context/CartProvider";
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore';
import moment from "moment/moment";
import './Cart.css';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

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
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Orden creada con el id ${response.id}, por favor llenar formulario`,
                    showConfirmButton: false,
                    timer: 1500
                })
                return response;
            })
            .then((res) => {
                cart.forEach((product) => {
                    const query = doc(db, 'products', product.id)
                    updateDoc(query, {
                        stock: product.stock - product.quantity,


                    });
                });

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
            [event.target.name]: event.target.value,
        })
    };

    const mostrarAlerta = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Formulario enviado',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <div className="cart">
            {cart.map((product) => (
                <div className="product">
                    <img className="imgcart"
                        alt={product.nombre}
                        src={`${product.imagen}`} />
                    <h3>{product.nombre} de {product.material}{product.color}</h3>
                    <h2>${product.precio}</h2>
                </div>
            ))
            }
            <div>
                <div className="compra">
                    <h3>Total: ${total}</h3>
                    <Button variant="success" onClick={createOrder}>Crear orden</Button>
                </div>
                <div className="formulario">
                    <h2>Formulario</h2>
                    <h3>Nombre y apellido</h3>
                    <input name='name' type="text" placeholder="Nombre y apellido" value={formValues.name} onChange={handleInputChange} />
                    <h3>Telefono</h3>
                    <input name='phone' type="text" placeholder="Telefono" value={formValues.phone} onChange={handleInputChange} />
                    <h3>Email</h3>
                    <input name='email' type="text" placeholder="Email" value={formValues.email} onChange={handleInputChange} />
                    <Button variant="outline-info" onClick={() => mostrarAlerta()}>Enviar Formulario</Button>
                </div>

            </div>
        </div>);


};

export default Cart;