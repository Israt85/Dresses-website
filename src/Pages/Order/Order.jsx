import React from 'react';
import Tabs from './Tabs';

const Order = () => {
    return (
        <div>
           <div className='flex justify-between items-center'>
            <h2 className='text-xl font-bold m-6'>Order</h2>
            <div className='w-[143px] h-[38px] flex justify-center items-center text-[#EFA937] border border-[#EC008C] rounded-full'>
                <select name="" id="">
                    <option value="this month">This Month</option>
                </select>
            </div>
           </div>
           <div>
            <Tabs></Tabs>
           </div>
        </div>
    );
};

export default Order;