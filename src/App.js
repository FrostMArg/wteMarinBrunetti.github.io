import './App.css';
import { NavBar } from './components/Navbar/NavBar.js';


import { ItemListContainer } from './screens/ItemListContainer/ItemListContainer';

import { ItemDetailContainer } from './screens/ItemDetailContainer/ItemDetailContainer.js'



function App() {
  return <>
    <NavBar />
    <h2> El desafio de la clase 6 comienza aqui debajo</h2>
    <ItemListContainer />
    <h2> El desafio de la clase 7 comienza aqui debajo</h2>
    <ItemDetailContainer />
  </>
}

export default App;
