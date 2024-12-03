


// import React, { useState, useContext } from 'react';
// import { useSelector } from 'react-redux';
// import { AuthContext } from '../contects/AuthProvider'; // Import AuthContext
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FaStar, FaPlusCircle } from "react-icons/fa"; 
// import { Avatar } from 'flowbite-react';
// import profilePic from "../assets/cr7.jpg";
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

// const Review = ({ bookId }) => {
//   const { user } = useContext(AuthContext); // Get user from AuthContext
//   const purchasedItems = useSelector((state) => state.cart.purchasedItems); // Get purchased items from Redux

//   const [reviews, setReviews] = useState([
//     {
//       name: 'Cristina Ronalo',
//       profession: 'Athlete, Portugal',
//       rating: 4,
//       comment: 'Good books.',
//       image: profilePic,
//     },
//     {
//       name: 'Cristina Ronalo',
//       profession: 'Athlete, Portugal',
//       rating: 5,
//       comment: 'Good books.',
//       image: profilePic,
//     },
//   ]);

//   const [formData, setFormData] = useState({
//     name: '',
//     rating: 0,
//     comment: '',
//   });

//   const [isFormVisible, setIsFormVisible] = useState(false);

//   // Check if user has purchased the current book
//   const hasPurchasedBook = purchasedItems.some(item => item.bookId === bookId);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     const newReview = {
//       name: formData.name,
//       profession: "User",
//       rating: Number(formData.rating),
//       comment: formData.comment,
//       image: null, // No image, display initials
//     };

//     setReviews((prevReviews) => [...prevReviews, newReview]);

//     // Clear form data after submission
//     setFormData({
//       name: '',
//       rating: 0,
//       comment: '',
//     });

//     // Hide the form after submission
//     setIsFormVisible(false);
//   };

//   const getInitials = (name) => {
//     return name ? name.charAt(0).toUpperCase() : '?';
//   };

//   return (
//     <div className='my-12 px-4 lg:px-24'>
//       <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>
//         Our Customers
//       </h2>

//       {/* Swiper for reviews */}
//       <div>
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           pagination={{
//             clickable: true,
//           }}
//           breakpoints={{
//             640: {
//               slidesPerView: 1,
//               spaceBetween: 20,
//             },
//             768: {
//               slidesPerView: 2,
//               spaceBetween: 40,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 50,
//             },
//           }}
//           modules={[Pagination]}
//           className="mySwiper"
//         >
//           {reviews.map((review, index) => (
//             <SwiperSlide key={index}>
//               <div className='space-y-6'>
//                 <div className='text-amber-500 flex gap-2'>
//                   {[...Array(review.rating)].map((_, i) => (
//                     <FaStar key={i} />
//                   ))}
//                 </div>
//                 <div className='mt-7'>
//                   <p className='mb-5'>{review.comment}</p>
//                   {review.image ? (
//                     <img src={review.image} alt={`${review.name} avatar`} className='w-10 h-10 rounded-full' />
//                   ) : (
//                     <div className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold'>
//                       {getInitials(review.name)}
//                     </div>
//                   )}
//                   <h5 className='text-lg font-medium'>{review.name}</h5>
//                   <p>{review.profession}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Button to show the comment form */}
//       <div className="flex justify-center mt-8">
//         <button onClick={() => setIsFormVisible(!isFormVisible)} className="text-blue-500 hover:text-blue-600">
//           <FaPlusCircle size={40} />
//         </button>
//       </div>

//       {/* Conditionally render form or login/purchase message */}
//       {isFormVisible && (
//         user && hasPurchasedBook ? (
//           <div className="mt-12 max-w-md mx-auto">
//             <h3 className="text-3xl font-bold text-center mb-6">Leave a Comment</h3>
//             <form onSubmit={handleFormSubmit} className="space-y-4">
//               <div>
//                 <label className="block font-medium">Name:</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full border border-gray-300 p-2 rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block font-medium">Rating:</label>
//                 <input
//                   type="number"
//                   name="rating"
//                   value={formData.rating}
//                   onChange={handleInputChange}
//                   min="1"
//                   max="5"
//                   required
//                   className="w-full border border-gray-300 p-2 rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block font-medium">Comment:</label>
//                 <textarea
//                   name="comment"
//                   value={formData.comment}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full border border-gray-300 p-2 rounded"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 mt-8">
//             Please log in and purchase this book to leave a review.
//           </p>
//         )
//       )}
//     </div>
//   );
// };

// export default Review;


// import React, { useState, useContext } from 'react';
// import { useSelector } from 'react-redux';
// import { AuthContext } from '../contects/AuthProvider'; // Import AuthContext
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FaStar, FaPlusCircle } from "react-icons/fa"; 
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

// const Review = ({ bookId }) => {
//   const { user } = useContext(AuthContext); // Get user from AuthContext
//   const purchasedItems = useSelector((state) => state.cart.purchasedItems); // Get purchased items from Redux

//   const [reviews, setReviews] = useState([
//     {
//       name: 'Cristina Ronalo',
//       profession: 'Athlete, Portugal',
//       rating: 4,
//       comment: 'Good books.',
//     },
//     {
//       name: 'Cristina Ronalo',
//       profession: 'Athlete, Portugal',
//       rating: 5,
//       comment: 'Good books.',
//     },
//   ]);

//   const [formData, setFormData] = useState({
//     name: '',
//     rating: 0,
//     comment: '',
//   });

//   const [isFormVisible, setIsFormVisible] = useState(false);

//   // Check if user has purchased the current book
//   const hasPurchasedBook = purchasedItems.some(item => item.name === bookId);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     const newReview = {
//       name: formData.name || (user && user.displayName) || "Anonymous",
//       profession: "User",
//       rating: Number(formData.rating),
//       comment: formData.comment,
//     };

//     setReviews((prevReviews) => [...prevReviews, newReview]);

//     // Clear form data after submission
//     setFormData({
//       name: '',
//       rating: 0,
//       comment: '',
//     });

//     // Hide the form after submission
//     setIsFormVisible(false);
//   };

//   const getInitials = (name) => {
//     return name ? name.charAt(0).toUpperCase() : '?';
//   };

//   return (
//     <div className='my-12 px-4 lg:px-24'>
//       <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>
//         Our Customers
//       </h2>

//       {/* Swiper for reviews */}
//       <div>
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           pagination={{
//             clickable: true,
//           }}
//           breakpoints={{
//             640: {
//               slidesPerView: 1,
//               spaceBetween: 20,
//             },
//             768: {
//               slidesPerView: 2,
//               spaceBetween: 40,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 50,
//             },
//           }}
//           modules={[Pagination]}
//           className="mySwiper"
//         >
//           {reviews.map((review, index) => (
//             <SwiperSlide key={index}>
//               <div className='space-y-6'>
//                 <div className='text-amber-500 flex gap-2'>
//                   {[...Array(review.rating)].map((_, i) => (
//                     <FaStar key={i} />
//                   ))}
//                 </div>
//                 <div className='mt-7'>
//                   <p className='mb-5'>{review.comment}</p>
//                   <div className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold'>
//                     {getInitials(review.name)}
//                   </div>
//                   <h5 className='text-lg font-medium'>{review.name}</h5>
//                   <p>{review.profession}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Button to show the comment form */}
//       <div className="flex justify-center mt-8">
//         <button onClick={() => setIsFormVisible(!isFormVisible)} className="text-blue-500 hover:text-blue-600">
//           <FaPlusCircle size={40} />
//         </button>
//       </div>

//       {/* Conditionally render form or login/purchase message */}
//       {isFormVisible && (
//         user ? (
//           hasPurchasedBook ? (
//             <div className="mt-12 max-w-md mx-auto">
//               <h3 className="text-3xl font-bold text-center mb-6">Leave a Comment</h3>
//               <form onSubmit={handleFormSubmit} className="space-y-4">
//                 <div>
//                   <label className="block font-medium">Name:</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full border border-gray-300 p-2 rounded"
//                   />
//                 </div>
//                 <div>
//                   <label className="block font-medium">Rating:</label>
//                   <input
//                     type="number"
//                     name="rating"
//                     value={formData.rating}
//                     onChange={handleInputChange}
//                     min="1"
//                     max="5"
//                     required
//                     className="w-full border border-gray-300 p-2 rounded"
//                   />
//                 </div>
//                 <div>
//                   <label className="block font-medium">Comment:</label>
//                   <textarea
//                     name="comment"
//                     value={formData.comment}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full border border-gray-300 p-2 rounded"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           ) : (
//             <p className="text-center text-gray-500 mt-8">
//               Please purchase this book to leave a review.
//             </p>
//           )
//         ) : (
//           <p className="text-center text-gray-500 mt-8">
//             Please log in to leave a review.
//           </p>
//         )
//       )}
//     </div>
//   );
// };

// export default Review;

// import React, { useState, useContext, useEffect } from 'react';
// import { AuthContext } from '../contects/AuthProvider'; // Import AuthContext
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FaStar, FaPlusCircle } from 'react-icons/fa';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
// import { getFirestore, collection, addDoc, getDocs, query, where } from 'firebase/firestore';
// import app from '../firebase/firebase.config'; // Firebase configuration

// const db = getFirestore(app); // Initialize Firestore

// const Review = ({ bookId }) => {
//   const { user } = useContext(AuthContext); // Get user from AuthContext
//   const [reviews, setReviews] = useState([]); // Reviews array
//   const [formData, setFormData] = useState({
//     rating: 0,
//     comment: '',
//   });
//   const [isFormVisible, setIsFormVisible] = useState(false);

//   // Fetch reviews for the current book from Firestore
//   useEffect(() => {
//     if (!bookId) {
//       console.error('Book ID is undefined');
//       return;
//     }

//     const fetchReviews = async () => {
//       try {
//         const reviewsQuery = query(
//           collection(db, 'reviews'),
//           where('bookId', '==', bookId)
//         );
//         const querySnapshot = await getDocs(reviewsQuery);
//         const fetchedReviews = querySnapshot.docs.map((doc) => doc.data());
//         setReviews(fetchedReviews);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//       }
//     };

//     fetchReviews();
//   }, [bookId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     if (!bookId) {
//       console.error('Cannot submit review without a valid bookId');
//       return;
//     }

//     const newReview = {
//       bookId,
//       userId: user?.uid || 'Anonymous',
//       name: user?.displayName || 'Anonymous',
//       rating: Number(formData.rating),
//       comment: formData.comment,
//       timestamp: new Date(),
//     };

//     try {
//       // Save review to Firestore
//       await addDoc(collection(db, 'reviews'), newReview);

//       // Update local state with the new review
//       setReviews((prevReviews) => [...prevReviews, newReview]);

//       // Clear form data after submission
//       setFormData({
//         rating: 0,
//         comment: '',
//       });

//       // Hide the form after submission
//       setIsFormVisible(false);
//     } catch (error) {
//       console.error('Error saving review:', error);
//     }
//   };

//   const getInitials = (name) => {
//     return name ? name.charAt(0).toUpperCase() : '?';
//   };

//   return (
//     <div className="my-12 px-4 lg:px-24">
//       <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
//         Customer Reviews
//       </h2>

//       {/* Swiper for reviews */}
//       <div>
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           pagination={{
//             clickable: true,
//           }}
//           breakpoints={{
//             640: { slidesPerView: 1, spaceBetween: 20 },
//             768: { slidesPerView: 2, spaceBetween: 40 },
//             1024: { slidesPerView: 3, spaceBetween: 50 },
//           }}
//           modules={[Pagination]}
//           className="mySwiper"
//         >
//           {reviews.map((review, index) => (
//             <SwiperSlide key={index}>
//               <div className="space-y-6">
//                 <div className="text-amber-500 flex gap-2">
//                   {[...Array(review.rating)].map((_, i) => (
//                     <FaStar key={i} />
//                   ))}
//                 </div>
//                 <div className="mt-7">
//                   <p className="mb-5">{review.comment}</p>
//                   <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
//                     {getInitials(review.name)}
//                   </div>
//                   <h5 className="text-lg font-medium">{review.name}</h5>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Button to show the comment form */}
//       <div className="flex justify-center mt-8">
//         <button
//           onClick={() => setIsFormVisible(!isFormVisible)}
//           className="text-blue-500 hover:text-blue-600"
//         >
//           <FaPlusCircle size={40} />
//         </button>
//       </div>

//       {/* Conditionally render the form */}
//       {isFormVisible && (
//         user ? (
//           <div className="mt-12 max-w-md mx-auto">
//             <h3 className="text-3xl font-bold text-center mb-6">Leave a Review</h3>
//             <form onSubmit={handleFormSubmit} className="space-y-4">
//               <div>
//                 <label className="block font-medium">Rating:</label>
//                 <input
//                   type="number"
//                   name="rating"
//                   value={formData.rating}
//                   onChange={handleInputChange}
//                   min="1"
//                   max="5"
//                   required
//                   className="w-full border border-gray-300 p-2 rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block font-medium">Comment:</label>
//                 <textarea
//                   name="comment"
//                   value={formData.comment}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full border border-gray-300 p-2 rounded"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 mt-8">
//             Please log in to leave a review.
//           </p>
//         )
//       )}
//     </div>
//   );
// };

// export default Review;

// import React, { useState, useContext, useEffect } from 'react';
// import { AuthContext } from '../contects/AuthProvider';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FaStar, FaPlusCircle } from 'react-icons/fa';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
// import { getFirestore, collection, addDoc, getDocs, query, where, doc, getDoc } from 'firebase/firestore';
// import app from '../firebase/firebase.config';

// const db = getFirestore(app);

// const Review = ({ bookId }) => {
//   const { user } = useContext(AuthContext);
//   const [reviews, setReviews] = useState([]);
//   const [formData, setFormData] = useState({
//     rating: 0,
//     comment: '',
//   });
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [hasPurchasedBook, setHasPurchasedBook] = useState(false);

//   // Fetch reviews
//   useEffect(() => {
//     if (!bookId) {
//       console.error('Book ID is undefined');
//       return;
//     }

//     const fetchReviews = async () => {
//       try {
//         const reviewsQuery = query(
//           collection(db, 'reviews'),
//           where('bookId', '==', bookId)
//         );
//         const querySnapshot = await getDocs(reviewsQuery);
//         const fetchedReviews = querySnapshot.docs.map((doc) => doc.data());
//         setReviews(fetchedReviews);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//       }
//     };

//     fetchReviews();
//   }, [bookId]);

//   // Check if user purchased the book
//   useEffect(() => {
//     if (!user || !bookId) {
//       setHasPurchasedBook(false);
//       return;
//     }

//     const checkPurchase = async () => {
//       try {
//         const purchasesDocRef = doc(db, 'purchases', user.uid);
//         const purchasesDoc = await getDoc(purchasesDocRef);

//         if (purchasesDoc.exists()) {
//           const purchasedItems = purchasesDoc.data().purchasedItems || [];
//           const purchasedBook = purchasedItems.some((item) => item.name === bookId);
//           setHasPurchasedBook(purchasedBook);
//         } else {
//           setHasPurchasedBook(false);
//         }
//       } catch (error) {
//         console.error('Error checking purchase history:', error);
//         setHasPurchasedBook(false);
//       }
//     };

//     checkPurchase();
//   }, [user, bookId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     if (!bookId) {
//       console.error('Cannot submit review without a valid bookId');
//       return;
//     }

//     const newReview = {
//       bookId,
//       userId: user?.uid || 'Anonymous',
//       name: user?.displayName || 'Anonymous',
//       rating: Number(formData.rating),
//       comment: formData.comment,
//       timestamp: new Date(),
//     };

//     try {
//       await addDoc(collection(db, 'reviews'), newReview);
//       setReviews((prevReviews) => [...prevReviews, newReview]);
//       setFormData({ rating: 0, comment: '' });
//       setIsFormVisible(false);
//     } catch (error) {
//       console.error('Error saving review:', error);
//     }
//   };

//   const getInitials = (name) => (name ? name.charAt(0).toUpperCase() : '?');

//   return (
//     <div className="my-12 px-4 lg:px-24">
//       <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
//         Customer Reviews
//       </h2>

//       <div>
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             640: { slidesPerView: 1, spaceBetween: 20 },
//             768: { slidesPerView: 2, spaceBetween: 40 },
//             1024: { slidesPerView: 3, spaceBetween: 50 },
//           }}
//           modules={[Pagination]}
//           className="mySwiper"
//         >
//           {reviews.map((review, index) => (
//             <SwiperSlide key={index}>
//               <div className="space-y-6">
//                 <div className="text-amber-500 flex gap-2">
//                   {[...Array(review.rating)].map((_, i) => (
//                     <FaStar key={i} />
//                   ))}
//                 </div>
//                 <div className="mt-7">
//                   <p className="mb-5">{review.comment}</p>
//                   <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
//                     {getInitials(review.name)}
//                   </div>
//                   <h5 className="text-lg font-medium">{review.name}</h5>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <div className="flex justify-center mt-8">
//         <button
//           onClick={() => setIsFormVisible(!isFormVisible)}
//           className="text-blue-500 hover:text-blue-600"
//         >
//           <FaPlusCircle size={40} />
//         </button>
//       </div>

//       {isFormVisible && (
//         user ? (
//           hasPurchasedBook ? (
//             <div className="mt-12 max-w-md mx-auto">
//               <h3 className="text-3xl font-bold text-center mb-6">Leave a Review</h3>
//               <form onSubmit={handleFormSubmit} className="space-y-4">
//                 <div>
//                   <label className="block font-medium">Rating:</label>
//                   <input
//                     type="number"
//                     name="rating"
//                     value={formData.rating}
//                     onChange={handleInputChange}
//                     min="1"
//                     max="5"
//                     required
//                     className="w-full border border-gray-300 p-2 rounded"
//                   />
//                 </div>
//                 <div>
//                   <label className="block font-medium">Comment:</label>
//                   <textarea
//                     name="comment"
//                     value={formData.comment}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full border border-gray-300 p-2 rounded"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           ) : (
//             <p className="text-center text-gray-500 mt-8">
//               Please purchase this book to leave a review.
//             </p>
//           )
//         ) : (
//           <p className="text-center text-gray-500 mt-8">
//             Please log in to leave a review.
//           </p>
//         )
//       )}
//     </div>
//   );
// };

// export default Review;

import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../contects/AuthProvider'; // Import AuthContext
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar, FaPlusCircle } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { getFirestore, collection, addDoc, getDocs, query, where, doc, getDoc } from 'firebase/firestore';
import app from '../firebase/firebase.config'; // Firebase configuration

const db = getFirestore(app); // Initialize Firestore

const Review = ({ bookId }) => {
  const { user } = useContext(AuthContext); // Get user from AuthContext
  const [reviews, setReviews] = useState([]); // Reviews array
  const [formData, setFormData] = useState({
    rating: 0,
    comment: '',
  });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [hasPurchasedBook, setHasPurchasedBook] = useState(false);

  // Fetch reviews for the current book from Firestore
  useEffect(() => {
    if (!bookId) {
      console.error('Book ID is undefined');
      return;
    }

    const fetchReviews = async () => {
      try {
        const reviewsQuery = query(
          collection(db, 'reviews'),
          where('bookId', '==', bookId)
        );
        const querySnapshot = await getDocs(reviewsQuery);
        const fetchedReviews = querySnapshot.docs.map((doc) => doc.data());
        setReviews(fetchedReviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [bookId]);

  // Check if the user has purchased the book
  useEffect(() => {
    if (user && bookId) {
      const checkPurchase = async () => {
        try {
          const purchasesRef = doc(db, 'purchases', user.uid);
          const purchasesSnapshot = await getDoc(purchasesRef);

          if (purchasesSnapshot.exists()) {
            const { purchasedItems } = purchasesSnapshot.data();
            const hasPurchased = purchasedItems.some(item => item.bookId === bookId);
            setHasPurchasedBook(hasPurchased);
          }
        } catch (error) {
          console.error('Error checking purchase:', error);
        }
      };

      checkPurchase();
    }
  }, [user, bookId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!bookId) {
      console.error('Cannot submit review without a valid bookId');
      return;
    }

    const newReview = {
      bookId,
      userId: user?.uid || 'Anonymous',
      name: user?.displayName || 'Anonymous',
      rating: Number(formData.rating),
      comment: formData.comment,
      timestamp: new Date(),
    };

    try {
      // Save review to Firestore
      await addDoc(collection(db, 'reviews'), newReview);

      // Update local state with the new review
      setReviews((prevReviews) => [...prevReviews, newReview]);

      // Clear form data after submission
      setFormData({
        rating: 0,
        comment: '',
      });

      // Hide the form after submission
      setIsFormVisible(false);
    } catch (error) {
      console.error('Error saving review:', error);
    }
  };

  const getInitials = (name) => {
    return name ? name.charAt(0).toUpperCase() : '?';
  };

  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Customer Reviews
      </h2>

      {/* Swiper for reviews */}
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="space-y-6">
                <div className="text-amber-500 flex gap-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="mt-7">
                  <p className="mb-5">{review.comment}</p>
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                    {getInitials(review.name)}
                  </div>
                  <h5 className="text-lg font-medium">{review.name}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Button to show the comment form */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="text-blue-500 hover:text-blue-600"
        >
          <FaPlusCircle size={40} />
        </button>
      </div>

      {/* Conditionally render the form */}
      {isFormVisible && (
        user ? (
          hasPurchasedBook ? (
            <div className="mt-12 max-w-md mx-auto">
              <h3 className="text-3xl font-bold text-center mb-6">Leave a Review</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block font-medium">Rating:</label>
                  <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    min="1"
                    max="5"
                    required
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <div>
                  <label className="block font-medium">Comment:</label>
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </form>
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-8">
              Please purchase this book to leave a review.
            </p>
          )
        ) : (
          <p className="text-center text-gray-500 mt-8">
            Please log in to leave a review.
          </p>
        )
      )}
    </div>
  );
};

export default Review;
