import './App.css';
import { NavBar } from './components/Navbar/NavBar.js';
//import { ItemListContainer } from './screens/ItemListContainer/ItemListContainer';

import { ItemDetailContainer } from './screens/ItemDetailContainer/ItemDetailContainer.js'
function App() {
  return <>
    <NavBar />
    {/* <ItemListContainer /> */}
    <ItemDetailContainer />
  </>
}

export default App;
