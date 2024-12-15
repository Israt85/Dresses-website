import React from 'react';
import Section1 from '../../Components/NewDashboard/Section1';

const NewDashboard = () => {
    return (
       <div>
         <div className='flex justify-between my-6'>
            <p className='text-xl text-[#1C2A53]'>Dashboard</p>
            <div className='w-[120px] px-1 bg-white h-[28px]'>
                Jan 01 - Jan 28
            </div>
        </div>
        <div>
            <Section1></Section1>
        </div>
       </div>
    );
};

export default NewDashboard;