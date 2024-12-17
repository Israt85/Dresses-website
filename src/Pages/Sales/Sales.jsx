import React from 'react';
import Section1 from '../../Components/NewDashboard/Section1';
import Chart2 from '../../Components/NewDashboard/Sales/Chart2';

const Sales = () => {
    return (
        <div>
            <div className='flex font-Inter mx-2 justify-between my-6'>
            <p className='text-xl text-[#1C2A53]'>Orders</p>
            <div className='w-[140px] px-2 bg-white h-[28px]'>
                <select name="" id="">
                    <option value="Jan 01 - Jan 28">Jan 01 - Jan 28</option>
                </select>
            </div>
        </div>
        <div>
            <Section1></Section1>
        </div>
        <div className='w-full bg-white rounded-lg shadow-xl h-[500px] my-10 border'>
           <Chart2></Chart2>
        </div>
        </div>
    );
};

export default Sales;