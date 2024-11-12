// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import {FaStar} from "react-icons/fa6";
// import { Avatar } from 'flowbite-react';
// import profilePic from "../assets/cr7.jpg"; 

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import './styles.css';

// // import required modules
// import { Pagination } from 'swiper/modules';

// const Review = () => {
//   return (
//     <div className='my-12 px-4 lg:px-24'>
//         <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>
//             Our Customers
//         </h2>
        
//         <div>
//             <Swiper
//             slidesPerView={1}
//             spaceBetween={30}
//             pagination={{
//             clickable: true,
//             }}
//             breakpoints={{
//             640: {
//                 slidesPerView: 1,
//                 spaceBetween: 20,
//             },
//             768: {
//                 slidesPerView: 2,
//                 spaceBetween: 40,
//             },
//             1024: {
//                 slidesPerView: 3  ,
//                 spaceBetween: 50,
//             },
//             }}
//             modules={[Pagination]}
//             className="mySwiper"
//         >
//             <SwiperSlide>
//                 <div className='space-y-6'>
//                     <div className='text-amber-500 flex gap-2'>
//                         <FaStar/>
//                         <FaStar/>
//                         <FaStar/>
//                         <FaStar/>
//                     </div>
//                     {/* text */}
//                     <div className='mt-7'>
//                         <p className='mb-5'>
//                             Good books. 
//                         </p>
//                         <Avatar 
//                             alt="avatar of Messi lover"
//                             img={profilePic}
//                             rounded
//                             className='w-10 mb-4'
//                         />
//                         <h5 className='text-lg font-medium' >
//                             Cristina Ronalo
//                         </h5>
//                         <p>Athlete, Portugal</p>

//                     </div>
//                 </div>
//             </SwiperSlide>

            

            
//             <SwiperSlide>
//                 <div className='space-y-6'>
//                     <div className='text-amber-500 flex gap-2'>
//                         <FaStar/>
//                         <FaStar/>
//                         <FaStar/>
//                         <FaStar/>
//                         <FaStar/>
//                     </div>
//                     {/* text */}
//                     <div className='mt-7'>
//                         <p className='mb-5'>
//                             Good books. 
//                         </p>
//                         <Avatar 
//                             alt="avatar of Messi lover"
//                             img={profilePic}
//                             rounded
//                             className='w-10 mb-4'
//                         />
//                         <h5 className='text-lg font-medium' >
//                             Cristina Ronalo
//                         </h5>
//                         <p>Athlete, Portugal</p>

//                     </div>
//                 </div>
//             </SwiperSlide>

//             <SwiperSlide>
//                 <div className='space-y-6'>
//                     <div className='text-amber-500 flex gap-2'>
//                         <FaStar/>
//                         <FaStar/>
//                         <FaStar/>
//                         <FaStar/>
//                         <FaStar/>
//                     </div>
//                     {/* text */}
//                     <div className='mt-7'>
//                         <p className='mb-5'>
//                             Good books. 
//                         </p>
//                         <Avatar 
//                             alt="avatar of Messi lover"
//                             img={profilePic}
//                             rounded
//                             className='w-10 mb-4'
//                         />
//                         <h5 className='text-lg font-medium' >
//                             Cristina Ronalo
//                         </h5>
//                         <p>Athlete, Portugal</p>

//                     </div>
//                 </div>
//             </SwiperSlide>
//         </Swiper>
//         </div>
//     </div>
//   )
// }


// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FaStar, FaPlusCircle } from "react-icons/fa"; // Check if fa instead of fa6 works
// import { Avatar } from 'flowbite-react';
// import profilePic from "../assets/cr7.jpg";
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

// const Review = () => {
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

//   const [isFormVisible, setIsFormVisible] = useState(false); // State to track form visibility

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
//       profession: 'User',
//       rating: Number(formData.rating),
//       comment: formData.comment,
//       image: profilePic,
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
//                   <Avatar
//                     alt={`avatar of ${review.name}`}
//                     img={review.image}
//                     rounded
//                     className='w-10 mb-4'
//                   />
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

//       {/* Comment Form, visible only if isFormVisible is true */}
//       {isFormVisible && (
//         <div className="mt-12 max-w-md mx-auto">
//           <h3 className="text-3xl font-bold text-center mb-6">Leave a Comment</h3>
//           <form onSubmit={handleFormSubmit} className="space-y-4">
//             <div>
//               <label className="block font-medium">Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full border border-gray-300 p-2 rounded"
//               />
//             </div>
//             <div>
//               <label className="block font-medium">Rating:</label>
//               <input
//                 type="number"
//                 name="rating"
//                 value={formData.rating}
//                 onChange={handleInputChange}
//                 min="1"
//                 max="5"
//                 required
//                 className="w-full border border-gray-300 p-2 rounded"
//               />
//             </div>
//             <div>
//               <label className="block font-medium">Comment:</label>
//               <textarea
//                 name="comment"
//                 value={formData.comment}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full border border-gray-300 p-2 rounded"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Review;


import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { AuthContext } from '../contects/AuthProvider'; // Import AuthContext
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar, FaPlusCircle } from "react-icons/fa"; 
import { Avatar } from 'flowbite-react';
import profilePic from "../assets/cr7.jpg";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Review = ({ bookId }) => {
  const { user } = useContext(AuthContext); // Get user from AuthContext
  const purchasedItems = useSelector((state) => state.cart.purchasedItems); // Get purchased items from Redux

  const [reviews, setReviews] = useState([
    {
      name: 'Cristina Ronalo',
      profession: 'Athlete, Portugal',
      rating: 4,
      comment: 'Good books.',
      image: profilePic,
    },
    {
      name: 'Cristina Ronalo',
      profession: 'Athlete, Portugal',
      rating: 5,
      comment: 'Good books.',
      image: profilePic,
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    rating: 0,
    comment: '',
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  // Check if user has purchased the current book
  const hasPurchasedBook = purchasedItems.some(item => item.bookId === bookId);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      name: formData.name,
      profession: "User",
      rating: Number(formData.rating),
      comment: formData.comment,
      image: null, // No image, display initials
    };

    setReviews((prevReviews) => [...prevReviews, newReview]);

    // Clear form data after submission
    setFormData({
      name: '',
      rating: 0,
      comment: '',
    });

    // Hide the form after submission
    setIsFormVisible(false);
  };

  const getInitials = (name) => {
    return name ? name.charAt(0).toUpperCase() : '?';
  };

  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>
        Our Customers
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
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className='mt-7'>
                  <p className='mb-5'>{review.comment}</p>
                  {review.image ? (
                    <img src={review.image} alt={`${review.name} avatar`} className='w-10 h-10 rounded-full' />
                  ) : (
                    <div className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold'>
                      {getInitials(review.name)}
                    </div>
                  )}
                  <h5 className='text-lg font-medium'>{review.name}</h5>
                  <p>{review.profession}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Button to show the comment form */}
      <div className="flex justify-center mt-8">
        <button onClick={() => setIsFormVisible(!isFormVisible)} className="text-blue-500 hover:text-blue-600">
          <FaPlusCircle size={40} />
        </button>
      </div>

      {/* Conditionally render form or login/purchase message */}
      {isFormVisible && (
        user && hasPurchasedBook ? (
          <div className="mt-12 max-w-md mx-auto">
            <h3 className="text-3xl font-bold text-center mb-6">Leave a Comment</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block font-medium">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>
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
            Please log in and purchase this book to leave a review.
          </p>
        )
      )}
    </div>
  );
};

export default Review;