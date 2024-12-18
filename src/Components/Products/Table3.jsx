import React, { useEffect, useState } from 'react';

const Table3 = () => {
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
           <div className="overflow-x-auto">
  <table className="table table-xs font-Inter">
    <thead className='bg-[#F8F8F8] w-full h-16 rounded-md'>
      <tr className='font-Inter text-base'>
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
      </tr>
    </thead>
    <tbody>
    {data?.map((dat) => (
  <tr className='text-[#555F7E]' key={dat.id}>
  <td className='flex items-center gap-2'>
      <img className='h-10 w-10 rounded-full' src={dat?.img} alt="" />
      <p className='text-base font-Inter'>{dat?.Product}</p>
  </td>
  <td className='font-Inter text-center text-base'>{dat?.ID}</td>
  <td className='font-Inter text-center text-base'>{dat?.Orders}</td>
  <td className='font-Inter text-center text-base'>{dat?.Price}</td>
  <td className='font-Inter text-center text-base'>{dat?.Category}</td>
  <td className='text-center text-base font-Inter'>{dat?.Stock}</td>
</tr>
))}
    </tbody>
  </table>
</div> 
        </div>
    );
};

export default Table3;