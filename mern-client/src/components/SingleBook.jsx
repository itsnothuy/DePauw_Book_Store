// import React from 'react'
// import { useLoaderData } from 'react-router-dom'

// const SingleBook = () => {
//     const { _id, bookTitle } = useLoaderData();
//   return (
//     <div className='mt-28 px-4 lg:px-24'>
//         SingleBook: {_id}
//     </div>
//   )
// }

// export default SingleBook

// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addItem } from '../cart/cartSlice'; // Import addItem action
// import Review from './Review';

// const SingleBook = () => {
//   const { _id, bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL, price } = useLoaderData();
//   const dispatch = useDispatch();

//   // Local state for quantity
//   const [quantity, setQuantity] = useState(0);

//   // Handle quantity increment
//   const handleIncrement = () => setQuantity(quantity + 1);

//   // Handle quantity decrement
//   const handleDecrement = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   // Add item to cart with the selected quantity
//   const handleAddToCart = () => {
//     const bookItem = {
//       name: bookTitle,
//       image: imageURL,
//       cost: `₹${price || 12.99}`,
//       quantity,
//     };
//     dispatch(addItem(bookItem));
//   };

//   return (
//     <div className="mt-28 px-4 lg:px-24 flex justify-center">
//       <div className="bg-gray-100 p-8 shadow-lg rounded-lg max-w-md w-full">
//         <div className="flex justify-center">
//           <img src={imageURL} alt={bookTitle} className="rounded-md shadow-md w-48 h-48 object-cover" />
//         </div>
//         <div className="text-center mt-4">
//           <h2 className="text-3xl font-bold">{bookTitle}</h2>
//           <p className="text-lg text-gray-700 mt-2">by {authorName}</p>
//           <p className="text-sm text-gray-500">{category}</p>
//           <p className="mt-4 text-gray-600">{bookDescription}</p>
//           <p className="mt-4 font-bold text-xl">Price: ${price || 12.99}</p>
//         </div>
//         <div className="mt-6 flex justify-center items-center space-x-4">
//           <button onClick={handleDecrement} className="bg-blue-500 text-white font-bold py-1 px-3 rounded-full">-</button>
//           <span className="text-lg font-semibold">{quantity}</span>
//           <button onClick={handleIncrement} className="bg-blue-500 text-white font-bold py-1 px-3 rounded-full">+</button>
//         </div>
//         <div className="mt-6 flex justify-center">
//           <button
//             onClick={handleAddToCart}
//             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//       <div className="w-full mt-12">
//         <Review />
//       </div>
//     </div>
//   );
// };

// export default SingleBook;


import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../cart/cartSlice';
import Review from './Review';

const SingleBook = () => {
  const { _id, bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL, price } = useLoaderData();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => setQuantity(quantity + 1);

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    const bookItem = {
      name: bookTitle,
      image: imageURL,
      cost: `₹${price || 12.99}`,
      quantity,
    };
    dispatch(addItem(bookItem));
  };

  return (
    <div className="mt-28 px-4 lg:px-24 flex flex-col items-center">
      {/* Book Details Section */}
      <div className="bg-gray-100 p-8 shadow-lg rounded-lg max-w-md w-full">
        <div className="flex justify-center">
          <img src={imageURL} alt={bookTitle} className="rounded-md shadow-md w-48 h-48 object-cover" />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-3xl font-bold">{bookTitle}</h2>
          <p className="text-lg text-gray-700 mt-2">by {authorName}</p>
          <p className="text-sm text-gray-500">{category}</p>
          <p className="mt-4 text-gray-600">{bookDescription}</p>
          <p className="mt-4 font-bold text-xl">Price: ${price || 12.99}</p>
        </div>
        <div className="mt-6 flex justify-center items-center space-x-4">
          <button onClick={handleDecrement} className="bg-blue-500 text-white font-bold py-1 px-3 rounded-full">-</button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button onClick={handleIncrement} className="bg-blue-500 text-white font-bold py-1 px-3 rounded-full">+</button>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
      
      {/* Place the Review component at the bottom */}
      <div className="w-full mt-12">
        <Review />
      </div>
    </div>
  );
};

export default SingleBook;
