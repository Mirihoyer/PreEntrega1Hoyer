import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import ItensListContainer from './components/ItensListContainer/ItensListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './components/ItemList/ItemList';
import { CarWidget } from './components/CarWidget/CarWidget';
import Cart from './components/Cart/Cart';



function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItensListContainer />} />
          <Route path="ItemList" element={<ItemList />} />
          <Route path="About" element={<About />} />
          <Route path="Home" element={<Home />} />
          <Route path="Cart" element={<Cart />} />
          <Route path='CarWidget' element={<CarWidget />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
