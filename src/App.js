import './App.css';
import { NavBar } from './Components/Navbar/NavBar.js';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router/Router.js';
import { CartProvider } from './Context/Context.js';

import Footer from './Components/Footer/Footer.js'
function App() {
  return <BrowserRouter>
    <CartProvider>
      <NavBar />
      <Router />
      <Footer />
    </CartProvider>
  </BrowserRouter>
}

export default App;
