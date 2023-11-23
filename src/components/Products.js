import React from 'react';
import ProductsCard from './ProductsCard';

const Products = ({products}) => {
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2x1 bg-black text-white py-2 w-80 text-center '>
                YOUR NO.1 SHOPPING WEBSITE
                </h1> 
                <span className='w-20 h-[3px] bg-black'></span>
                <p className="max-w-[700px] text-black-600 text-justify">
                Shop and dress to impress
                </p>
         </div>
         <div className='max-w-screen-xl mx-auto py-10 grid-cols-4 gap-8'>
          {products.map((item) => (
            <ProductsCard key={item._id} product={item} />
          ))}
         </div>
    </div>
  );
};

export default Products;
