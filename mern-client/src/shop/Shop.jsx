// import React, { useEffect, useState } from 'react'

// import { Card } from "flowbite-react";

// const Shop = () => {
//   const [books, setBooks] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const categories = ['All', 'Fiction', 'Romance', 'Horror', 'Fantasy', 'Memoir & Autobiography', 'Humor'];
//   const filteredBooks = selectedCategory === 'All' ? books : books.filter(book => book.category === selectedCategory);



//   useEffect(() => {
//     // fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setBooks(data));
//     fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setBooks(data));
//   }, [])
//   return (
//     <div className='mt-28 px-4 lg:px-24'>
//       <div className='mb-8 text-center'>
//         <button 
//           value={select} 
//           onChange={(e) => setSelectedCategory(e.target.value)} 
//           className='border border-gray-400 py-2 px-4 rounded'>
//           {categories.map(category => (
//             <option key={category} value={category}>{category}</option>
//           ))}
//         </button>
//       </div>



//       <h2 className='text-5xl font-bold text-center'>
//         All books are here
//       </h2>
//       <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
//         {
//           books.map(book => 
            
//             <Card key={book._id}>
//               <img src={book.imageURL} alt={book.bookTitle} className='h-96'/>
//               <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
//                 <p>
//                   {book.bookTitle}
//                 </p>
                
//               </h5>
//               <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
//                 Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
//               </p>

//               <button className='bg-blue-700 font-semibold text-white py-3 px-12 rounded'>
//                 Buy 
//               </button>
//             </Card>
//           )
//         }
//       </div>
//     </div>
//   )
// }

// export default Shop


// // src/components/Shop.jsx
// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { Card } from "flowbite-react";
// import { addItem } from '../cart/cartSlice'; // Import addItem action

// const Shop = () => {
//   const [books, setBooks] = useState([]);
//   const dispatch = useDispatch(); // To dispatch actions

//   // Fetch books from the backend
//   useEffect(() => {
//     fetch("http://localhost:3000/all-books")
//       .then(res => res.json())
//       .then(data => setBooks(data));
//   }, []);

//   // Add the selected book to the cart
//   const handleAddToCart = (book) => {
//     const bookItem = {
//       name: book.bookTitle,  // Cart expects 'name' as key for book title
//       image: book.imageURL,
//       cost: `$${book.price || 20.00}`,  // Assuming price is available, otherwise use default
//     };
//     dispatch(addItem(bookItem)); // Dispatch addItem action with book object
//   };

//   return (
//     <div className='mt-28 px-4 lg:px-24'>
//       <h2 className='text-5xl font-bold text-center'>
//         All books are here
//       </h2>
//       <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
//         {
//           books.map(book => (
//             <Card key={book._id}>
//               <img src={book.imageURL} alt={book.bookTitle} className='h-96' />
//               <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                 {book.bookTitle}
//               </h5>
//               <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
//                 {book.bookDescription}
//               </p>
//               <p className="font-normal text-gray-900 dark:text-gray-200">
//                 Price: ${book.price || 20.00}  {/* Display price if available, else default */}
//               </p>
//               <button
//                 onClick={() => handleAddToCart(book)}
//                 className='bg-blue-700 font-semibold text-white py-3 px-12 rounded mt-4'
//               >
//                 Add to Cart
//               </button>
//             </Card>
//           ))
//         }
//       </div>
//     </div>
//   );
// }

// export default Shop;




import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card } from "flowbite-react";
import { addItem } from '../cart/cartSlice'; // Import addItem action

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All'); // State for category selection
  const dispatch = useDispatch(); // To dispatch actions

  const categories = ['All', 'Fiction', 'Romance', 'Horror', 'Fantasy', 'Memoir & Autobiography', 'Humor'];

  // Fetch books from the backend
  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  // Filter books based on the selected category
  const filteredBooks = selectedCategory === 'All'
    ? books
    : books.filter(book => book.category === selectedCategory);

  // Add the selected book to the cart
  const handleAddToCart = (book) => {
    const bookItem = {
      name: book.bookTitle,  // Cart expects 'name' as key for book title
      image: book.imageURL,
      cost: `$${book.price || 20.00}`,  // Assuming price is available, otherwise use default
    };
    dispatch(addItem(bookItem)); // Dispatch addItem action with book object
  };

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>
        All books are here
      </h2>

      {/* Category Filter */}
      <div className='mb-8 text-center'>
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)} 
          className='border border-gray-400 py-2 px-4 rounded'
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Display Books */}
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          filteredBooks.map(book => (
            <Card key={book._id}>
              <img src={book.imageURL} alt={book.bookTitle} className='h-96' />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {book.bookTitle}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
                {book.bookDescription}
              </p>
              <p className="font-normal text-gray-900 dark:text-gray-200">
                Price: ${book.price || 20.00}  {/* Display price if available, else default */}
              </p>
              <button
                onClick={() => handleAddToCart(book)}
                className='bg-blue-700 font-semibold text-white py-3 px-12 rounded mt-4'
              >
                Add to Cart
              </button>
            </Card>
          ))
        }
      </div>
    </div>
  );
}

export default Shop;

