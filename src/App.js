import './App.css';
import { NavBar } from './Components/Navbar/NavBar.js';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router/Router.js';

function App() {
  return <BrowserRouter>
    <NavBar />
    <Router />
  </BrowserRouter>
}

export default App;
