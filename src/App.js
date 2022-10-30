import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItensListContainer from './components/ItensListContainer/ItensListContainer';
import './App.css';

function App() {
  return (
    <>
      <NavBar/>
      <ItensListContainer name="La mejor calidad del mercado"/>
    </>
  );
}

export default App;
