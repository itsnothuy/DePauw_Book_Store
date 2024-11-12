import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useState } from 'react';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Navbar/>
      {/* <Outlet/> */}
      {/* Add a toggle button for showing/hiding the cart */}
      <div className="cart-toggle">
        <button onClick={() => setShowCart(!showCart)} className='cart-button'>
          {/* {showCart ? 'Hide Cart' : 'Show Cart'} */}
        </button>
      </div>

      {/* Conditionally render the Cart or Shop based on showCart state */}
      {showCart ? <CartItem /> : <Outlet />}
    </>
  )
}

export default App
