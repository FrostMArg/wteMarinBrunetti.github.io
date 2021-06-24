import './App.css';
import { NavBar } from './Components/Navbar/NavBar.js';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router/Router.js';
import { CartProvider } from './Context/Context.js';
function App() {
  return <BrowserRouter>
    <CartProvider>
      <NavBar />
      <Router />
    </CartProvider>
  </BrowserRouter>
}

export default App;
