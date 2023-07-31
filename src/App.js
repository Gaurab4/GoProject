import { CartProvider } from 'react-use-cart';
import './App.css';
import Header from './Header/Header';
import Shirts from './Shirts/Shirts';
import ShirtsDetail from './Shirts/ShirtsDetail';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <CartProvider>
      <Router>
      
        <div className="container">
        <Routes>
            <Route path="/" element={<Shirts />} />
            <Route path="/dash" element={<ShirtsDetail />} />
        </Routes>
        </div>
        
      </Router>
      </CartProvider>
    </div>
  );
}

export default App;
