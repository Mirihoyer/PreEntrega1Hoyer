import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/pages/About';
import ItensListContainer from './components/ItensListContainer/ItensListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CarWidget } from './components/CarWidget/CarWidget';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartProvider';
import Contacto from './components/pages/Contacto';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItensListContainer />} />
          <Route path="/category/:categoryId" element={<ItensListContainer />} />
          <Route path="Item" element={<ItensListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryId/item/:id" element={<ItemDetailContainer />} />
          <Route path="About" element={<About />} />
          <Route path="Contacto" element={<Contacto />} />
          <Route path="Cart" element={<Cart />} />
          <Route path='CarWidget' element={<CarWidget />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
