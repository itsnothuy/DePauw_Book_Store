// import React from 'react'
// import FavBookImg from "../assets/favoritebook.jpg"
// import { Link } from 'react-router-dom'
// const FavBook = () => {
//   return (
//     <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
//         <div>
//             <img src ={FavBookImg} alt="" className='rounded md:w-10/12' />
//         </div>

//         <div className='md:w-1/2 space-y-6' >
//             <h2 className='text-5xl font-bold my-5 md:3/4 leading-snug '>
//                 Find Your Favorite <span className='text-blue-700'> Book Here!</span>
//             </h2>
//             <p className='mb-10 text-lg md:w-5/6'>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur perspiciatis repellat omnis, 
//                 officia dolore deleniti excepturi sapiente error incidunt odit optio? 
//                 Ipsum nulla deserunt quia enim. Corporis labore distinctio alias?
//             </p>

//             <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
//                 <div className='text-center'>
//                     <h3 className='text-3xl font-bold'> 
//                         10+
//                     </h3>
//                     <p className='text-base'>
//                         Book Listing
//                     </p>
//                 </div>

//                 <div className='text-center'>
//                     <h3 className='text-3xl font-bold'> 
//                         1+
//                     </h3>
//                     <p className='text-base'>
//                         Register Users
//                     </p>
//                 </div>

//                 <div className='text-center'>
//                     <h3 className='text-3xl font-bold'> 
//                         10?
//                     </h3>
//                     <p className='text-base'>
//                         PDF Downloads
//                     </p>
//                 </div>
//             </div>

//             <Link to="/shop" className='mt-12 block'>
//                 <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
//                     Explore More
//                 </button>
//             </Link>
//         </div>
//     </div>
//   )
// }

// export default FavBook 

import React from 'react'
import FavBookImg from "../assets/favoritebook.jpg"
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      
      {/* Image Section */}
      <div className='md:w-1/2'>
        <img src={FavBookImg} alt="Favorite Books" className='rounded-md w-full' />
      </div>

      {/* Text and Stats Section */}
      <div className='md:w-1/2 space-y-6'>
        
        {/* Heading */}
        <h2 className='text-4xl md:text-5xl font-bold leading-snug'>
          Find Your Favorite <span className='text-blue-700'>Book Here!</span>
        </h2>
        
        {/* Description */}
        <p className='text-lg text-gray-700'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur perspiciatis repellat omnis, 
          officia dolore deleniti excepturi sapiente error incidunt odit optio? 
          Ipsum nulla deserunt quia enim. Corporis labore distinctio alias?
        </p>
        
        {/* Statistics Section */}
        <div className='flex flex-col sm:flex-row justify-between gap-6'>
          <div className='text-center'>
            <h3 className='text-3xl font-bold'>10+</h3>
            <p className='text-base text-gray-600'>Book Listing</p>
          </div>

          <div className='text-center'>
            <h3 className='text-3xl font-bold'>1+</h3>
            <p className='text-base text-gray-600'>Registered Users</p>
          </div>

          <div className='text-center'>
            <h3 className='text-3xl font-bold'>10?</h3>
            <p className='text-base text-gray-600'>PDF Downloads</p>
          </div>
        </div>

        {/* Explore More Button */}
        <Link to="/shop">
          <button className='bg-blue-700 text-white font-semibold px-5 py-3 rounded-md mt-10 hover:bg-black transition duration-300'>
            Explore More
          </button>
        </Link>
      </div>
    </div>
  )
}

export default FavBook
