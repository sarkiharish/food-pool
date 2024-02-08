import { Link } from 'react-router-dom';
import foodPool from '../../assets/Food-Pool-logo.png';
import { useState, useContext } from 'react';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux'

const Title = () => {
  return (
    <a href="/">
      <img className='h-16 w-16 p-2' src={foodPool} width='50px' alt='Food pool logo' />
    </a>
  );
};

const Header = function () {
  const isOnline = useOnline();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {user} = useContext(UserContext)

  const cartItems = useSelector(store => store.cart.items)
  console.log('cartitems::', cartItems)

  console.log(user)

  return (
    <div className="flex justify-between bg-gray-800 text-white text-center">
      {/* Logo on the left */}
      <div className="flex items-center">
        <Title />
      </div>
    

      <div className="flex items-center space-x-2">
      <div className="flex items-center mr-4">
        <ul className='flex pt-4 space-x-2'>
          <li><Link className="hover:text-gray-300 focus:outline-none focus:text-gray-300" to='/'>Home</Link></li>
          <li><Link className="hover:text-gray-300 focus:outline-none focus:text-gray-300" to='/about'>About</Link></li>
          <li><Link className="hover:text-gray-300 focus:outline-none focus:text-gray-300" to='/contact'>Contact</Link></li>
          <li><Link className="hover:text-gray-300 focus:outline-none focus:text-gray-300" to='/instamart'>Instamart</Link></li>
          {/* <li><Link className="hover:text-gray-300 focus:outline-none focus:text-gray-300" to='/cart'>Cart - {cartItems.length} items</Link></li> */}
          <li className="relative">
            <Link className="hover:text-gray-300 focus:outline-none focus:text-gray-300" to='/cart'>
              Cart
              {cartItems.length > 0 && (
                <span className="absolute top-[-20] right-[-20] bg-red-500 text-white rounded-full px-2 py-1">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>



   
        </ul>
      </div>
        <h1>{isOnline ? "✅" : "🔴"}</h1>
        <span>Hi {user.name}</span>
        <button className='text-white bg-blue-600 rounded-md mr-2 my-4 p-2'
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Header;
