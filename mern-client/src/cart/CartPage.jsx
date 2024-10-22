// src/pages/CartPage.jsx
import React from 'react';
import CartItem from '../cart/CartItem';

const CartPage = () => {
  return (
    <div className="cart-page">
      <h2 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h2>
      <CartItem />
    </div>
  );
};

export default CartPage;
