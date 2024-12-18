import React from 'react';
import StatusTable from '../../Components/Status/StatusTable';

const Status = () => {
    return (
        <div>
             <div className='my-6'>
            <p className='text-xl font-Inter font-bold'>Approvals</p>
           </div>
           <div className='w-full bg-white shadow-lg  h-[500px] rounded-xl'>
           <StatusTable></StatusTable>
           </div>
        </div>
    );
};

export default Status;