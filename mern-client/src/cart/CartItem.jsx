// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeItem, updateQuantity } from './cartSlice';
// import './CartItem.css'; // Ensure to include appropriate CSS
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const CartItem = () => {
//   const cart = useSelector(state => state.cart.items); // Get cart items from the Redux store
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); // Initialize useNavigate for programmatic navigation

//   // Calculate total amount for all products in the cart
//   const calculateTotalAmount = () => {
//     return cart.reduce((total, item) => {
//       return total + (item.quantity * parseFloat(item.cost.slice(1))); // Assuming cost is in format like "$10.00"
//     }, 0).toFixed(2);
//   };

//   // Redirect to "/shop" when Continue Shopping button is clicked
//   const handleContinueShopping = () => {
//     navigate('/shop'); // Navigate to the shop page
//   };

//   const handleCheckoutShopping = () => {
//     alert('Checkout functionality will be added later.');
//   };

//   const handleIncrement = (item) => {
//     dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
//   };

//   const handleDecrement = (item) => {
//     if (item.quantity > 1) {
//       dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
//     } else {
//       handleRemove(item);
//     }
//   };

//   const handleRemove = (item) => {
//     dispatch(removeItem(item.name));
//   };

//   const calculateTotalCost = (item) => {
//     return (item.quantity * parseFloat(item.cost.slice(1))).toFixed(2);
//   };

//   return (
//     <div className="cart-container">
//       <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>
//       <div>
//         {cart.map(item => (
//           <div className="cart-item" key={item.name}>
//             <img className="cart-item-image" src={item.image} alt={item.name} />
//             <div className="cart-item-details">
//               <div className="cart-item-name">{item.name}</div>
//               <div className="cart-item-cost">{item.cost}</div>
//               <div className="cart-item-quantity">
//                 <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
//                 <span className="cart-item-quantity-value">{item.quantity}</span>
//                 <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
//               </div>
//               <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
//               <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="cart-buttons">
//         <button className="get-started-button" onClick={handleContinueShopping}>Continue Shopping</button>
//         <button className="get-started-button1" onClick={handleCheckoutShopping}>Checkout</button>
//       </div>
//     </div>
//   );
// };

// export default CartItem;



import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './cartSlice';
import './CartItem.css'; // Ensure to include appropriate CSS

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  // Increment quantity
  const handleIncrement = () => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Decrement quantity
  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      handleRemove();
    }
  };

  // Remove item from cart
  const handleRemove = () => {
    dispatch(removeItem(item.name));
  };

  // Calculate total cost for the item
  const calculateTotalCost = () => {
    return (item.quantity * parseFloat(item.cost.slice(1))).toFixed(2);
  };

  return (
    <div className="cart-item flex items-center justify-between p-4 border-b border-gray-200">
      <img className="cart-item-image w-16 h-16 object-cover" src={item.image} alt={item.name} />
      <div className="cart-item-details flex-1 ml-4">
        <div className="cart-item-name font-semibold text-lg">{item.name}</div>
        <div className="cart-item-cost text-gray-500">{item.cost}</div>
        <div className="cart-item-quantity flex items-center mt-2">
          <button
            className="cart-item-button cart-item-button-dec bg-blue-500 text-white font-bold py-1 px-3 rounded-full"
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="cart-item-quantity-value mx-2 text-lg font-semibold">{item.quantity}</span>
          <button
            className="cart-item-button cart-item-button-inc bg-blue-500 text-white font-bold py-1 px-3 rounded-full"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <div className="cart-item-total text-gray-700 mt-2">Total: ${calculateTotalCost()}</div>
      </div>
      <button className="cart-item-delete text-red-500 ml-4" onClick={handleRemove}>Delete</button>
    </div>
  );
};

export default CartItem;
