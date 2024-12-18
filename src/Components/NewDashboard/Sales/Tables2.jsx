import React, { useEffect, useState } from 'react';

const Tables2 = () => {
     const [salesData,setSalesData]= useState([]);
        useEffect(()=>{
            fetch('/SalesData.json')
            .then(res=>res.json()
            .then(data=>{
                console.log(data)
                setSalesData(data)
            })
            )
        },[])
    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table table-xs font-Inter">
    <thead className='bg-[#F8F8F8] w-full h-16 rounded-md'>
      <tr className='font-Inter text-base'>
        <th>Order Id</th>
        <th>Products</th>
       
        <th className='text-center'><select name="" id="">
                <option value="Date">Date</option>
            </select></th>
            <th>
            <select name="" id="">
                <option value="Customer">Customer</option>
            </select>
        </th>
        <th><select name="" id="">
            <option value="Revenue">Revenue</option></select></th>
        <th>
            <select name="" id="">
                <option value="Net Profit">Net Profit</option>
            </select>
        </th>
        <th>
            <select name="" id="">
                <option value="Status">Status</option>
            </select>
        </th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {salesData?.map((dat) => (
  <tr className='text-[#555F7E]' key={dat.id}>
     <td className='font-Inter text-right px-4 w-8 text-base'>{dat?.OrderId}</td>
  <td className='flex items-center gap-2'>
      <img className='h-10 w-10 rounded-full' src={dat?.img} alt="" />
      <p className='text-base font-Inter'>{dat?.Product}</p>
  </td>
 
  <td className='font-Inter text-center text-base'>{dat?.Date}</td>
  <td className='font-Inter text-center text-base'>{dat?.Customer}</td>
  <td className='font-Inter text-center text-base'>{dat?.Revenue}</td>
  <td className='font-Inter text-center text-base'>{dat?.NetProfit}</td>
  <td className={`font-Inter text-center text-lg ${dat?.Status=='Pending'? 'text-[#FF392B]':dat?.Status=='Shipping'?'text-[#1C2A53]':dat?.Status=='Refund'?'text-[#FFA000]':'text-[#279F51]'}`}>{dat?.Status}</td>
  <td className='flex gap-2 items-center my-5'>
  <svg width="28" height="28" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.33207 13.3438H13.8949" stroke="#C8CAD8" stroke-width="1.85443" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.1133 3.14383C11.3593 2.89792 11.6928 2.75977 12.0406 2.75977C12.2128 2.75977 12.3833 2.79368 12.5424 2.85958C12.7015 2.92548 12.846 3.02207 12.9678 3.14383C13.0895 3.26559 13.1861 3.41015 13.252 3.56924C13.3179 3.72833 13.3518 3.89884 13.3518 4.07104C13.3518 4.24324 13.3179 4.41375 13.252 4.57285C13.1861 4.73194 13.0895 4.87649 12.9678 4.99825L5.241 12.725L2.76843 13.3432L3.38657 10.8706L11.1133 3.14383Z" stroke="#C8CAD8" stroke-width="1.85443" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="28" height="28" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_320_2186)">
<path d="M2.43921 4.3457H3.67549H13.5658" stroke="#C8CAD8" stroke-width="1.85443" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.52996 4.34561V3.10933C5.52996 2.78145 5.66021 2.46699 5.89206 2.23515C6.12391 2.0033 6.43836 1.87305 6.76625 1.87305H9.23881C9.5667 1.87305 9.88115 2.0033 10.113 2.23515C10.3448 2.46699 10.4751 2.78145 10.4751 3.10933V4.34561M12.3295 4.34561V12.9996C12.3295 13.3275 12.1993 13.6419 11.9674 13.8738C11.7356 14.1056 11.4211 14.2359 11.0932 14.2359H4.91182C4.58394 14.2359 4.26948 14.1056 4.03764 13.8738C3.80579 13.6419 3.67554 13.3275 3.67554 12.9996V4.34561H12.3295Z" stroke="#C8CAD8" stroke-width="1.85443" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.76624 7.43555V11.1444" stroke="#C8CAD8" stroke-width="1.85443" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.23889 7.43555V11.1444" stroke="#C8CAD8" stroke-width="1.85443" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_320_2186">
<rect width="14.8354" height="14.8354" fill="white" transform="translate(0.584839 0.636719)"/>
</clipPath>
</defs>
</svg>
<svg width="28" height="28" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.67332 8.67183C8.01471 8.67183 8.29146 8.39508 8.29146 8.05369C8.29146 7.7123 8.01471 7.43555 7.67332 7.43555C7.33193 7.43555 7.05518 7.7123 7.05518 8.05369C7.05518 8.39508 7.33193 8.67183 7.67332 8.67183Z" stroke="#C8CAD8" stroke-width="1.85443" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0003 8.67183C12.3417 8.67183 12.6185 8.39508 12.6185 8.05369C12.6185 7.7123 12.3417 7.43555 12.0003 7.43555C11.659 7.43555 11.3822 7.7123 11.3822 8.05369C11.3822 8.39508 11.659 8.67183 12.0003 8.67183Z" stroke="#C8CAD8" stroke-width="1.85443" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.34629 8.67183C3.68768 8.67183 3.96443 8.39508 3.96443 8.05369C3.96443 7.7123 3.68768 7.43555 3.34629 7.43555C3.0049 7.43555 2.72815 7.7123 2.72815 8.05369C2.72815 8.39508 3.0049 8.67183 3.34629 8.67183Z" stroke="#C8CAD8" stroke-width="1.85443" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</td>
</tr>
))}
    </tbody>
  </table>
</div> 
        </div>
    );
};

export default Tables2;