import './App.css';
import { NavBar } from './components/Navbar/NavBar.js';
import { ItemCount } from './components/ItemCount/ItemCount.js';
//import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
function App() {
  return <>
    <NavBar />
    <ItemCount cantidad={5} init={1} />
  </>
}

{/***
 <ItemListContainer titulo="NombreProducto" subtitulo="Marca" precio="$0000" />
*/}

export default App;
