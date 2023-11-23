import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { ToastContainer, toast } from 'react-toastify';


const Cart = () => {
  const productData = useSelector((state) => state.nest.productData);
  const userInfo = useSelector((state) => state.nest.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);
  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please Sign In to Checkout");
    }
  };
  return (
    <div>
      <img
        className='w-full h-60 object-cover'
        src='https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1600'
        alt='Cartimage'
         />
        <div className='max-w-screen-xl mx-auto py-20 flex'>
          <CartItem />
          <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
            <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
              <h2 className='text-2x1 font-medium'> SHOPPING TOTAL</h2>
              <p className='flex items-center gap-4 text-base'>
                Subtotal{" "}
                <span className='font-titleFont font-bold text-lg'>$ {totalAmt}</span>
              </p>
              <p className='flex items-start gap-4 text-base'>
                Shipping{" "}
                <span>
                  FREE - Free shipping on orders over $50
                </span>
              </p>
            </div>
            <p className='font-titleFont font-semibold flex justify-between mt-6'>
              Total <span className='text-xl font-bold'>$ {totalAmt}</span>
            </p>
            <button onClick={handleCheckout} className='text-base bg-black text-white w-full py-3 mt-6
            hover:bg-blue-400 duration-300 '>
              Proceed to checkout
            </button>
          </div>
        </div>
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
  )
};

export default Cart;