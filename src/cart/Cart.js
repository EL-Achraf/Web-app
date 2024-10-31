import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
  const totalPrice = cart.reduce((total, product) => total + parseFloat(product.price), 0);

  return (
    <div className="cart-container">
      <h1>Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div>
          {cart.map((product, index) => (
            <div key={index} className="cart-item">
              <img src={product.image} alt={product.name} className="cart-item-image" />
              <div>
                <h2>{product.name}</h2>
                <p>{product.price} €</p>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h2>Total: {totalPrice.toFixed(2)} €</h2>
            <button className="checkout-btn">Valider la commande</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
