import React from 'react';

const ShippingTable = () => {
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
    <tr>
        <th>SL</th>
        <th>Courier Code</th>
        <th>Courier Name</th>
        <th>join Date</th>
        <th>Office Address</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr className='font-Poppins h-20'>
        <th className='font-bold font-Poppins'>01</th>
        <td className='text-base font-semibold'>#123245</td>
        <td><p className='flex gap-1'>
          <img className='w-10 h-10 rounded-full' src="https://s3-alpha-sig.figma.com/img/d691/92f7/3d9abe30b03acb41a6a9d3d565d24dcd?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dEJc1qnHGKNdZfGWxqFE6ubywZO9GgDw02v7vURhVveUlHpsBUoGT6-bFE-FYoPKNumEkZv4mz1IUr9vFG8wgAhn3rI1X4wcekZJaP9Z8Mxu82PATrUeDvmir0KN4j0YsU~0eReJQL8AF4MGrfC5SXXrD-VPn6Hzwafv1rHHRhwSnvJJ0CZUD6X4q2g6VOC36v3LvBYetXdilCh6E21LcMU-8KD3V4uimC9OthULL3n1TV7JOoPj55LFy8M5P4HXi8qH6ngPX7ssm69UkkSDU711gns62WFyW7VJzvuBdezQCncVacp6wlcydzLsDNZkPyiwE35ZBIBkxGbooNhf3w__" alt="" />
          <p className='text-base font-bold'>Bluedart Courier
            <p className='text-xs font-normal'>bluedartindia@gmail.com</p>
          </p>
          </p></td>
        <td className='text-base'>21-05-2022t</td>
        <td className='text-base'>Tirunelvali, Karala, India</td>
        <td className='flex text-[#13BB13] py-6 text-base items-center'><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.18051 8.09676L7.04516 9.77494C7.36259 10.0606 7.85578 10.0169 8.11797 9.67978L11.0657 5.8898M8.12312 15.4533C12.186 15.4533 15.4796 12.1597 15.4796 8.09676C15.4796 4.03386 12.186 0.740234 8.12312 0.740234C4.06023 0.740234 0.766602 4.03386 0.766602 8.09676C0.766602 12.1597 4.06023 15.4533 8.12312 15.4533Z" stroke="#13BB13" stroke-width="1.4713" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Verified</td>
      
      </tr>
      <tr className='font-Poppins h-20 '>
        <th className='font-bold font-Poppins'>02</th>
        <td className='text-base font-semibold'>#123245</td>
        <td><p className='flex gap-1'>
          <img className='w-10 h-10 rounded-full' src="https://s3-alpha-sig.figma.com/img/f69b/f949/44bf1329d7e178d427c0686f4120ced8?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TCEWCQyJz-3OcBkZEOrejQ5LcOOfhDcyIbEPQ-fOUzQGUmAxgUWw2QAx3uxCfI7L6ZkN3i096a~j~mdboSYxvBS2DicoVG1FmXxGKSh8TjqtuW~kJE2pqDlOGzOd7w2tvtt5JvjwSOnnR1Bszo-WZ5YcAq3V46jJIFIBSptPuCL0XlrA~32T94REfzxmZlXAFKNts7dC96rLYhJpIO~ilFiiOGjunC4zZMO6Xg~VlWTihslsO6hjFFbZN7i8FgLiJWBOl9VnqLHAaN-Vv-8OnfwIR4v5ejqJH81WrRUEb2dBKK836E6SIQU7jvNW84CcylghOAaDg2wRcR6EC7LmDw__" alt="" />
          <p className='text-base font-bold'>FedEx International
            <p className='text-xs font-normal'>fedexindia@gmail.com</p>
          </p>
          </p></td>
        <td className='text-base'>21-05-2022t</td>
        <td className='text-base'>Karala, India</td>
        <td className='flex text-[#FF0202] py-6 text-base items-center'>
          
 Not Verified</td>
      
      </tr>
      <tr className='font-Poppins h-20'>
        <th className='font-bold font-Poppins'>03</th>
        <td className='text-base font-semibold'>#123245</td>
        <td><p className='flex gap-1'>
          <img className='w-10 h-10 rounded-full' src="https://s3-alpha-sig.figma.com/img/b54d/0dc8/56defd8dfcb2ae7c5b8a5e81718860a6?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nLO2p0JfqmKys8fdKjVzlSMEX2zUwVADjS3zpERhD-W1dL9XuN4jYtSt~GxKekptO2bVAl-gBFl-mppZ9i8~tPSswYpNHkHZF5-Gx16RpaSS~Nz0ffxRE4XDl8m8FJSgj1H6YVkFV20DDnynJuMwz2IIimjvyxph4ZpakblTgs7MwUsaGPjFQto6adHxqRsysguhuNPx58cOixULTopssPpSTMdsgrVvacc0Vl7aC-6cis-teDB9Ak0B3y-cthwXUTU2pyS~Z~h6E0R8QdVxF4bBI03qKs1bTNTS9UcvOYfA7oG9Tnw5PO9CTvhT30GqJYJR6gJxeAlGUNVOBPiamQ__" alt="" />
          <p className='text-base font-bold'>Uber Eat Delivery
            <p className='text-xs font-normal'>ubereatindia@gmail.com</p>
          </p>
          </p></td>
        <td className='text-base'>21-05-2022t</td>
        <td className='text-base'>Tirunelvali, India</td>
        <td className='flex text-[#13BB13] py-6 text-base items-center'><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.18051 8.09676L7.04516 9.77494C7.36259 10.0606 7.85578 10.0169 8.11797 9.67978L11.0657 5.8898M8.12312 15.4533C12.186 15.4533 15.4796 12.1597 15.4796 8.09676C15.4796 4.03386 12.186 0.740234 8.12312 0.740234C4.06023 0.740234 0.766602 4.03386 0.766602 8.09676C0.766602 12.1597 4.06023 15.4533 8.12312 15.4533Z" stroke="#13BB13" stroke-width="1.4713" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Verified</td>
      
      </tr>
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ShippingTable;