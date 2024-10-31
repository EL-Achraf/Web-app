import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Cart from './cart/Cart';
import Navbar from './navbar/Navbar';

function App() {
  const [cart, setCart] = useState([]);

  // Ajouter un produit au panier
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;