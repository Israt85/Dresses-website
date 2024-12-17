import React from 'react';
import Section1 from '../../Components/NewDashboard/Section1';
import Chart1 from '../../Components/Charts/Chart1';
import LatestOrder from '../../Components/NewDashboard/LatestOrder';

const NewDashboard = () => {
    return (
       <div>
         <div className='flex font-Inter justify-between my-6'>
            <p className='text-xl text-[#1C2A53]'>Dashboard</p>
            <div className='w-[140px] px-2 bg-white h-[28px]'>
                Jan 01 - Jan 28
            </div>
        </div>
        <div>
            <Section1></Section1>
        </div>
        <div className='w-full h-[516px] border'>
            {/* <Chart1></Chart1> */}
        </div>
        <div className='w-full min-h-screen my-10'>
           <LatestOrder></LatestOrder>
        </div>
       </div>
    );
};

export default NewDashboard;