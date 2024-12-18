import React, { useEffect, useState } from 'react';

const StatusTable = () => {
     const [data,setData]= useState([]);
            useEffect(()=>{
                fetch('/selling.json')
                .then(res=>res.json()
                .then(data=>{
                    console.log(data)
                    setData(data)
                })
                )
            },[])
    return (
        <div className='my-10'>
        <div className="overflow-x-auto mb-4">
<table className="table table-xs font-Inter">
 <thead className='bg-white w-full h-16 rounded-2xl'>
   <tr className='font-Inter text-base text-black'>
     <th>Product</th>
     <th className='text-center'>
         ID no
     </th>
     <th className='text-center'> Orders</th>
     <th className='text-center'>
         Price
     </th>
     <th className='text-center'>
     Category
     </th>
     <th className='text-center'>
       Stock
     </th>
     <th className='text-center'>
       Status
     </th>
   </tr>
 </thead>
 <tbody>
 {data?.map((dat) => (
<tr className='text-[#555F7E]' key={dat.id}>
<td className='flex items-center gap-4'>
   <img className='h-10 w-10 rounded-full' src={dat?.img} alt="" />
   <div>
   <p className='text-base text-black font-Inter'>{dat?.Product}</p>
   <p>{dat?.type}</p>
   </div>
   
</td>
<td className='font-Inter text-center text-base'>{dat?.ID}</td>
<td className='font-Inter text-center text-base'>{dat?.Orders}</td>
<td className='font-Inter text-center text-base'>{dat?.Price}</td>
<td className='font-Inter text-center text-base'>{dat?.Category}</td>
<td className='text-center text-base font-Inter'>{dat?.Stock}</td>
<td className={`text-center text-base font-Inter ${dat?.status=='Pending'? 'text-[#FD8517]':dat.status=='Rejected'?'text-[#FF0000]':'text-[#40E725]'}`}>{dat?.status}</td>
</tr>
))}
 </tbody>
</table>
</div> 
<div className='h-20 flex justify-between items-center px-4 border-t-2 py-2'>
   <div>
     <p className='text-[#6F757E] font-Poppins'>Showing 7 of 15 products</p>
   </div>
   <div className='flex gap-2 items-center justify-center'>
     <p className='text-[#6F757E]'>Prev</p>
     <p className='w-8 h-8 bg-[#EC008C] rounded-full text-white flex justify-center items-center'>1
     </p>
     <p className='w-8 h-8 bg-[#F5F5F5] text-[#EC008C] rounded-full flex justify-center items-center'>2
     </p>
     <p className='text-[#EC008C] '>Next</p>
   </div>
</div>
     </div>
    );
};

export default StatusTable;