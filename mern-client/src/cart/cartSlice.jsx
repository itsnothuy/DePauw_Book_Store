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




// import { createSlice } from '@reduxjs/toolkit';

// export const CartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [], // Cart items
//     purchasedItems: [], // Array to track purchased items
//   },
//   reducers: {
//     addItem: (state, action) => {
//       const { name, image, cost, quantity } = action.payload;
//       const existingItem = state.items.find(item => item.name === name);
//       if (existingItem) {
//         existingItem.quantity += quantity;
//       } else {
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
//     purchaseItems: (state) => {
//       state.purchasedItems = [...state.purchasedItems, ...state.items]; // Move items to purchased list
//       state.items = []; // Clear cart
//     },
//   },
// });

// export const { addItem, removeItem, updateQuantity, purchaseItems } = CartSlice.actions;

// export default CartSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';
// import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
// import app from '../firebase/firebase.config'; // Ensure Firebase is configured

// const db = getFirestore(app);

// export const CartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [], // Cart items
//     purchasedItems: [], // Array to track purchased items
//   },
//   reducers: {
//     addItem: (state, action) => {
//       const { name, image, cost, quantity } = action.payload;
//       const existingItem = state.items.find(item => item.name === name);
//       if (existingItem) {
//         existingItem.quantity += quantity;
//       } else {
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
//     purchaseItems: (state) => {
//       const user = getAuth(app).currentUser; // Get the logged-in user
//       if (user) {
//         const userId = user.uid;
//         const purchasesRef = doc(db, 'purchases', userId);

//         // Save purchases to Firestore
//         setDoc(
//           purchasesRef,
//           { purchasedItems: [...state.purchasedItems, ...state.items] },
//           { merge: true } // Merge with existing data
//         )
//           .then(() => console.log('Purchase history saved to Firestore'))
//           .catch((error) => console.error('Error saving purchase history:', error));
//       }

//       // Move items to purchasedItems and clear the cart
//       state.purchasedItems = [...state.purchasedItems, ...state.items];
//       state.items = [];
//     },
//     loadPurchasedItems: (state, action) => {
//       // Set purchased items from Firestore
//       state.purchasedItems = action.payload || [];
//     },
//   },
// });

// export const { addItem, removeItem, updateQuantity, purchaseItems, loadPurchasedItems } = CartSlice.actions;

// export default CartSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config'; // Ensure Firebase is configured

const db = getFirestore(app);

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Cart items
    purchasedItems: [], // Array to track purchased items
  },
  reducers: {
    addItem: (state, action) => {
      const { bookId, name, image, cost, quantity } = action.payload;
      const existingItem = state.items.find(item => item.bookId === bookId);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ bookId, name, image, cost, quantity });
      }
    },
    removeItem: (state, action) => {
      const bookId = action.payload;
      state.items = state.items.filter(item => item.bookId !== bookId);
    },
    updateQuantity: (state, action) => {
      const { bookId, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.bookId === bookId);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
    purchaseItems: (state) => {
      const user = getAuth(app).currentUser; // Get the logged-in user
      if (user) {
        const userId = user.uid;
        const purchasesRef = doc(db, 'purchases', userId);
    
        // Prepare purchased items with validated fields for saving to Firestore
        const purchasedData = state.items.map(item => ({
          bookId: item.bookId || 'N/A', // Default value if bookId is missing
          name: item.name || 'Unknown Title',
          image: item.image || 'https://via.placeholder.com/150', // Default placeholder image
          cost: item.cost || '$0.00', // Default cost if missing
          quantity: item.quantity || 0, // Default quantity if missing
        }));
    
        // Save purchases to Firestore
        setDoc(
          purchasesRef,
          { purchasedItems: [...state.purchasedItems, ...purchasedData] },
          { merge: true } // Merge with existing data
        )
          .then(() => console.log('Purchase history saved to Firestore'))
          .catch((error) => console.error('Error saving purchase history:', error));
      }
    
      // Move items to purchasedItems and clear the cart
      state.purchasedItems = [...state.purchasedItems, ...state.items];
      state.items = [];
    },
    loadPurchasedItems: (state, action) => {
      // Set purchased items from Firestore
      state.purchasedItems = action.payload || [];
    },
  },
});

export const { addItem, removeItem, updateQuantity, purchaseItems, loadPurchasedItems } = CartSlice.actions;

export default CartSlice.reducer;
