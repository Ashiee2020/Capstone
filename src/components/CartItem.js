import React from 'react';
import { ImCancelCircle } from 'react-icons/im';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, deleteItem, increamentQuantity, resetCart } from '../redux/nestSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const CartItem = () => {
    const dispatch = useDispatch()
    const productData = useSelector((state) => state.nest.productData);
  return (
    <div className='w-2/3 pr-10'>
        <div className='w-full'>
            <h2 className='font-titleFont text-2x1'>MY CART</h2>
        </div>
        <div>
            {
                productData.map((item)=>(
                    <div
                        key={item._id}
                        className='flex items-center justify-between gap-6 mt-6'
                    >
                        <div className='flex items-center gap-2'>
                            <ImCancelCircle
                                onClick={ () =>
                                dispatch(deleteItem(item._id)) &
                                toast.error(`${item.title} is removed`)
                            }
                            className='text-x1 text-gray-600 hover:text-blue-400
                            cursor-pointer duration-300' />
                            <img
                                className='w-32 h-32 object-cover'
                                src={item.image}
                                alt='Productimg'
                             />   
                        </div>
                        <h2 className='w-52'>{item.title}</h2>
                        <p className='w-10'>${item.price}</p>
                        <div className='w-52 flex items-center justify-between text-gray-500 gap-4
                        border p-3'>
                            <p className='text-sm'>Quantity</p>
                            <div className='flex items-center gap-4 text-sm font-semibold'>
                                <span
                                     onClick={()=>
                                        dispatch(
                                        decrementQuantity({
                                      _id: item._id,
                                      title: item.title,
                                      image: item.image,
                                      price: item.price,
                                      quantity: 1,
                                      description: item.description,
                                    })
                                    )  
                                  }
                                  className='border h-5 font-normal text-lg flex items-center
                                  justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
                                  duration-300 active:bg-black'
                                >
                                    -
                                </span>
                                {item.quantity}
                                <span
                                     onClick={()=>
                                        dispatch(
                                        increamentQuantity({
                                      _id: item._id,
                                      title: item.title,
                                      image: item.image,
                                      price: item.price,
                                      quantity: 1,
                                      description: item.description,
                                    })
                                    )  
                                  }
                                  className='border h-5 font-normal text-lg flex items-center
                                  justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
                                  duration-300 active:bg-black'
                                >
                                    +
                                </span>
                            </div>
                        </div>
                        <p className='w-14'>${item.quantity * item.price}</p> 
                    </div>
                ))
            }
        </div>
        
        <Link to="/">
            <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400
            hover:text-blue-400 duration-300'>
                <span>
                    <FaArrowCircleLeft />
                </span>
                Want to still shop?
            </button>
        </Link>
        <ToastContainer
             position='top-right'
             autoClose={3000}
             hideProgressBar={false}
             newestOnTop={false}
             closeOnClick
             rtl={false}
             pauseOnFocusLoss
             draggable
             pauseOnHover
             theme='light'
        />
    </div>
  );
};

export default CartItem;