import React from 'react';
import { TableComponent } from './OrderTable';

const Tabs = () => {
    return (
        <div>
           <div role="tablist" className="tabs tabs-bordered">
  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Tab 1" />
  <div role="tabpanel" className="tab-content ">
    <TableComponent></TableComponent> </div>

  <input
    type="radio"
    name="my_tabs_1"
    role="tab"
    className="tab"
    aria-label="Tab 2"
    defaultChecked />
  <div role="tabpanel" className="tab-content p-10">Tab content 2</div>

  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Tab 3" />
  <div role="tabpanel" className="tab-content p-10">Tab content 3</div>
</div> 
        </div>
    );
};

export default Tabs;