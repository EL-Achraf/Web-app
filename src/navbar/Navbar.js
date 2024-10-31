import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Utilisation d'une icône de panier
import './Navbar.css';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Mon E-Commerce
      </Link>
      
      <div className="navbar-actions">
        <Link to="/login" className="navbar-login">
          Connexion
        </Link>
        <div className="cart-icon">
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
          <span className="cart-count">{cartCount}</span>
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;