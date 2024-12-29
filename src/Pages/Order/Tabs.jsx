import React from 'react';
import { TableComponent } from './OrderTable';

const Tabs = () => {
    return (
        <div className=' border'>
           <div role="tablist" className="tabs tabs-bordered">
  <input type="radio" name="my_tabs_1" role="tab" className="tab text-[#EC008C] w-full" aria-label="All Orders" defaultChecked/>
  <div role="tabpanel" className="tab-content ">
    <TableComponent></TableComponent> </div>

  <input
    type="radio"
    name="my_tabs_1"
    role="tab"
    className="tab"
    aria-label="Pending Orders"
    defaultChecked />
  <div role="tabpanel" className="tab-content p-2">Tab content 2</div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Delivered Orders" />
  <div role="tabpanel" className="tab-content p-10">Tab content 3</div>
  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Cancelled Orders" />
  <div role="tabpanel" className="tab-content p-10">Tab content 3</div>
</div> 
        </div>
    );
};

export default Tabs;