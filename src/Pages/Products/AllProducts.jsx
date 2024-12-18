import React from 'react';
import Table3 from '../../Components/Products/Table3';

const AllProducts = () => {
    return (
        <div className=''>
           <div className='my-6'>
            <p className='text-xl font-Inter font-bold'>All Products</p>
           </div>
          <div className='w-full bg-white shadow-lg  h-[700px] rounded-xl '>
          <div className='flex justify-between p-6 mx-auto'>
               <div>
                <p className='text-xl font-bold'>Top Selling Product</p>
                <p className='w-[600px] text-[#6F757E] text-base py-4 font-Poppins'>All the product that are available on your store are showing with their
                detail, price and other info</p>
               </div>
               <div className='w-40 h-10 flex justify-center items-center text-white bg-[#EC008C] rounded-full'>
               Add new product
               </div>
               </div>
               <div className='w-[1000px] border rounded-xl mx-auto'>
            <Table3></Table3>
           </div>
           
          </div>
          
        </div>
    );
};

export default AllProducts;