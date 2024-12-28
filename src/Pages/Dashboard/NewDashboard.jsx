import React from 'react';
import Section1 from '../../Components/NewDashboard/Section1';
import Chart1 from '../../Components/Charts/Chart1';
import LatestOrder from '../../Components/NewDashboard/LatestOrder';
import { PieChartComponent } from './PieChart';
import { BarChartComponent } from './BarChart';

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
        <div className='w-full my-10 h-[516px]'>
          <div className='flex gap-6 items-center'>
            <div className='w-[600px] h-[450px] rounded-3xl bg-white'>
            <BarChartComponent></BarChartComponent>
            </div>
          <div className='w-[400px] rounded-3xl bg-white h-[450px]'>
          <PieChartComponent></PieChartComponent>
          </div>
          </div>
        </div>
        <div className='w-full min-h-screen my-10'>
           <LatestOrder></LatestOrder>
        </div>
       </div>
    );
};

export default NewDashboard;