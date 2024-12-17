import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { com: "16", amt: 1000000 },
    { com: "18", amt: 500000 }, 
    { com: "20", amt: 1000000 }, 
    { com: "22", amt: 1500000 }, 
    { com: "24", amt: 2000000 }, 
    { com: "26", amt: 2500000 }, 
    { com: "28", amt: 2000000 },
    { com: "30", amt: 1500000 },
    { com: "02", amt: 1000000 }, 
    { com: "04", amt: 2500000 },
    { com: "06", amt: 2000000 },
    { com: "08", amt: 1000000 },
    { com: "10", amt: 1500000 },
  ];

const Chart2 = () => {

    const formatAmount = (value) => {
        if (value >= 1000000) {
          return (value / 1000000).toFixed(1) + "M"; 
        } else if (value >= 1000) {
          return (value / 1000).toFixed(1) + "k"; 
        }
        return value; 
      };
      
      
  return (
    <div className=''>
         <div className='flex font-Inter mx-2 justify-between my-6'>
         <li className=" text-[#1C2A53] text-base list-disc marker:text-[#EC008C]">
  Orders Update
</li>
             <p className="text-base flex gap-1 items-center">View Details
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.58545 8.38949H12.2394M12.2394 8.38949L7.91244 4.0625M12.2394 8.38949L7.91244 12.7165" stroke="#8E95A9" stroke-width="1.85443" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </p>
        </div>
        <div className='' style={{ width: "100%", height: "400px" }}>
      <ResponsiveContainer  width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis axisLine={false} dataKey="com" label={{ position: "insideBottom", offset: -5 }} />
          <YAxis tickFormatter={formatAmount} axisLine={false}
           
          />
          <Tooltip formatter={(value) => formatAmount(value)} />
          <Line className="p-20"
            type="monotone"
            dataKey="amt"
            stroke="#EC008C"
            strokeWidth={2}
            
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default Chart2;
