import './App.css';
import { NavBar } from './components/Navbar/NavBar.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
function App() {
  return <>
    <NavBar>
    </NavBar>
    <ItemListContainer titulo="NombreProducto" subtitulo="Marca" precio="$0000" />
  </>
}

export default App;
