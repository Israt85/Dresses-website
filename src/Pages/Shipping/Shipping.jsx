import React from 'react';
import ShippingTable from './ShippingTable';

const Shipping = () => {
    return (
        <div>
           <div className='flex justify-between items-center'>
            <h2 className='text-xl font-bold m-6'>Order</h2>
            <div className='w-[143px] h-[45px] flex justify-center text-white font-bold items-center  border bg-[#EC008C] rounded-full'>
              + Add New
            </div>
           </div>
           <ShippingTable></ShippingTable>
        </div>
    );
};

export default Shipping;