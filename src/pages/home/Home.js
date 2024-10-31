import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
const Home = ({ addToCart }) => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Remplacez l'URL par celle de votre API pour obtenir les produits
    axios.get('http://localhost:8000/api/products/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des produits:", error);
      });
  }, []);


  return (
    <div className="home-container">
      <h1>Nos produits</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">{product.price} €</p>
            <button onClick={() => addToCart(product)} className="add-to-cart-btn">
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;