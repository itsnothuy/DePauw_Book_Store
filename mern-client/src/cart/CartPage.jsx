// // src/pages/CartPage.jsx
// import React from 'react';
// import CartItem from '../cart/CartItem';

// const CartPage = () => {
//   return (
//     <div className="cart-page">
//       <h2 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h2>
//       <CartItem />
//     </div>
//   );
// };

// export default CartPage;




// import React from 'react';
// import { useSelector } from 'react-redux';
// import CartItem from '../cart/CartItem';

// const CartPage = () => {
//   const cart = useSelector(state => state.cart.items);

//   // Calculate the total amount of all items in the cart
//   const calculateTotalAmount = () => {
//     return cart.reduce((total, item) => {
//       return total + item.quantity * parseFloat(item.cost.slice(1)); // Assuming cost is in the format "₹190"
//     }, 0).toFixed(2);
//   };

//   return (
//     <div className="cart-page">
//       <h2 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h2>
//       {cart.length > 0 ? (
//         <>
//           <div className="cart-items">
//             {cart.map((item) => (
//               <CartItem key={item.name} item={item} />
//             ))}
//           </div>
//           <div className="text-center mt-8">
//             <h3 className="text-2xl font-semibold">Total Amount: ₹{calculateTotalAmount()}</h3>
//           </div>
//         </>
//       ) : (
//         <p className="text-center text-gray-500">Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default CartPage;


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { purchaseItems } from '../cart/cartSlice';
import CartItem from '../cart/CartItem';

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);
  const purchasedItems = useSelector(state => state.cart.purchasedItems);

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      return total + item.quantity * parseFloat(item.cost.slice(1));
    }, 0).toFixed(2);
  };

  const handleCheckout = () => {
    dispatch(purchaseItems());
  };

  return (
    <div className="cart-page">
      <h2 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h2>
      
      {cart.length > 0 ? (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem key={item.name} item={item} />
            ))}
          </div>
          <div className="text-center mt-8">
            <h3 className="text-2xl font-semibold">Total Amount: ${calculateTotalAmount()}</h3>
            <button
              onClick={handleCheckout}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded mt-4"
            >
              Checkout
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="text-center text-gray-500">Your cart is empty.</p>
          {purchasedItems.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-center mb-4">Purchased Items</h3>
              <ul className="purchased-items-list">
                {purchasedItems.map((item, index) => (
                  <li key={index} className="purchased-item flex items-center justify-between p-2 border-b border-gray-200">
                    <span className="font-semibold">{item.name}</span>
                    <span>{item.quantity} x {item.cost}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CartPage;


