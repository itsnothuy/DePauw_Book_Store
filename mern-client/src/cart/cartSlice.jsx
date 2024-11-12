// // src/features/cart/CartSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// export const CartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [], // Initialize items as an empty array
//   },
//   reducers: {
//     addItem: (state, action) => {
//       const { name, image, cost } = action.payload;
//       const existingItem = state.items.find(item => item.name === name);
//       if (existingItem) {
//         existingItem.quantity++;
//       } else {
//         state.items.push({ name, image, cost, quantity: 1 });
//       }
//     },
//     removeItem: (state, action) => {
//       const itemName = action.payload;
//       state.items = state.items.filter(item => item.name !== itemName);
//     },
//     updateQuantity: (state, action) => {
//       const { name, quantity } = action.payload;
//       const itemToUpdate = state.items.find(item => item.name === name);
//       if (itemToUpdate) {
//         itemToUpdate.quantity = quantity;
//       }
//     },
//   },
// });

// export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// export default CartSlice.reducer;



// import { createSlice } from '@reduxjs/toolkit';

// export const CartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [], // Initialize items as an empty array
//   },
//   reducers: {
//     addItem: (state, action) => {
//       const { name, image, cost, quantity } = action.payload;
//       const existingItem = state.items.find(item => item.name === name);
//       if (existingItem) {
//         // If the item already exists, increase the quantity by the amount specified in the action payload
//         existingItem.quantity += quantity;
//       } else {
//         // If the item does not exist, add it to the cart with the specified quantity
//         state.items.push({ name, image, cost, quantity });
//       }
//     },
//     removeItem: (state, action) => {
//       const itemName = action.payload;
//       state.items = state.items.filter(item => item.name !== itemName);
//     },
//     updateQuantity: (state, action) => {
//       const { name, quantity } = action.payload;
//       const itemToUpdate = state.items.find(item => item.name === name);
//       if (itemToUpdate) {
//         itemToUpdate.quantity = quantity;
//       }
//     },
//   },
// });

// export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// export default CartSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Cart items
    purchasedItems: [], // Array to track purchased items
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost, quantity } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ name, image, cost, quantity });
      }
    },
    removeItem: (state, action) => {
      const itemName = action.payload;
      state.items = state.items.filter(item => item.name !== itemName);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
    purchaseItems: (state) => {
      state.purchasedItems = [...state.purchasedItems, ...state.items]; // Move items to purchased list
      state.items = []; // Clear cart
    },
  },
});

export const { addItem, removeItem, updateQuantity, purchaseItems } = CartSlice.actions;

export default CartSlice.reducer;

