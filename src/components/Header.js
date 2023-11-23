import React from 'react';
import {buynestlogo1, shoppingcart} from '../assets/index'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const productData = useSelector((state) => state.nest.productData);
  const userInfo = useSelector((state) => state.nest.userInfo);
 
  return( 
  <div className='w-full h-15 bg-white border-b-2 border-b-black font-titleFont sticky top-0 z-50'>
    <div className='max-w-screen-xl w-50 h-50 mx-auto flex items-center justify-between'>
      <Link to="/">
          <div>
            <img src={buynestlogo1} alt='BUYNEST' />
          </div>
      </Link>
      <div className='flex items-center gap-8'>
        <ul className='flex items-center gap-8'>
            <li className='text-base text-black font-bold hover:text-blue-300
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer 
            duration-300'>
                Home
            </li>
            <li className='text-base text-black font-bold hover:text-blue-300
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer 
            duration-300'>
                Pages
            </li>
            <li className='text-base text-black font-bold hover:text-blue-300
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer 
            duration-300'>
                Market
            </li>
            <li className='text-base text-black font-bold hover:text-blue-300
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer 
            duration-300'>
                Search
            </li>
        </ul>
        <Link to='/cart'>
          <div className='relative'>
            <img className='w-8' src={shoppingcart} alt='cart' />
            <span className='absolute w-8 top-2 left-0 text-sm flex items-center
            justify-center font-semibold'>
                {productData.length}
            </span>
          </div>
        </Link>
        <Link to="/login">
        <img
         className='w-8 h-8 rounded'
         src= {
          userInfo
            ? userInfo.image
            : 'https://w7.pngwing.com/pngs/854/956/png-transparent-computer-icons-user-profile-female-female-drawing-icon-miscellaneous-silhouette-user-thumbnail.png'
          }
         alt='userframe'    
        />
        </Link>
        {userInfo && (
          <p className='text-base font-titleFont font-semibold'>
            {userInfo.name}
          </p>
        )}
      </div> 
    </div>
  </div>
  );
};

export default Header; 
