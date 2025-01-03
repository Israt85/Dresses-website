import { Link } from 'phosphor-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router';

const Drawer = () => {
     const [clickable, setClickable]= useState(false)
       const handleClick = ()=>{
        setClickable(!clickable)
        console.log('clicked');
       }
    return (
        <div>
            <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4">
      {/* Sidebar content here */}
      <div>
              <NavLink className={({ isActive }) => (isActive ? "flex justify-center items-center gap-4 w-[168px] h-[45px] rounded-md text-white bg-[#EC008C]  hover:shadow-md" : "")} to="newdash">
               <div className='flex mx-2 px-6 items-center gap-4 w-[168px] h-[45px]'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_316_1631)">
                            <path d="M15.75 9.75V17.25H11.25V12.75H6.75V17.25H2.25V9.75H0L9 0.75L18 9.75H15.75ZM15 5.31975V1.5H12.75V3.06975L15 5.31975Z" fill="#6F757E" />
                        </g>
                        <defs>
                            <clipPath id="clip0_316_1631">
                                <rect width="18" height="18" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <p>Dashboard</p>
                </div></NavLink>

                {/* sales */}
               <NavLink className={({ isActive }) => (isActive ? "flex justify-center items-center gap-4 w-[168px] h-[45px] rounded-md text-white bg-[#EC008C]  hover:shadow-md" : "")} to="sales">
               <div className='flex mx-2 px-6 items-center gap-4 w-[168px] h-[45px]'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.7485 6.37305H2.2515C1.82475 6.37305 1.50075 6.72105 1.50075 7.1223C1.50075 7.2108 1.422 6.6858 2.77125 15.1165C2.829 15.481 3.14325 15.748 3.51225 15.748H14.4885C14.8575 15.748 15.1718 15.481 15.2295 15.1165C16.5803 6.67905 16.4993 7.21155 16.4993 7.12155C16.4993 6.70305 16.1573 6.37305 15.7485 6.37305ZM15.0255 4.1103H3.003C2.61 4.1103 2.25225 4.4268 2.25225 4.86555C2.25225 4.9263 2.24475 4.87755 2.35725 5.62305H15.6713C15.7853 4.86405 15.7755 4.9248 15.7755 4.8663C15.7755 4.4313 15.4238 4.1103 15.0255 4.1103ZM3.04575 3.3603H14.9828C15.0263 3.0333 15.024 3.0408 15.024 2.9988C15.024 2.49555 14.5928 2.24805 14.2733 2.24805H3.75525C3.35325 2.24805 3.0045 2.5728 3.0045 2.99805C3.0045 3.04005 3.0015 3.0303 3.04575 3.3603Z" fill="#6F757E"/>
</svg>


                    <p>Sales</p>
                </div>
               </NavLink>

                {/* Product */}
    <div className="relative ">
      {/* Trigger button */}
      <div
        onClick={handleClick}
        className={`${clickable? "flex px-6 items-center justify-center  w-[168px] h-[45px] cursor-pointer rounded-md text-white bg-[#EC008C]  hover:shadow-md":"flex items-center justify-center "}`}
      >
        <svg className={`${clickable? 'fill-white':'fill-[#6F757E]'}`}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.4185 5.25L6.94425 1.7235C7.0935 1.575 7.28925 1.5 7.485 1.5C7.94475 1.5 8.25 1.87875 8.25 2.27175C8.25 2.45925 8.181 2.64975 8.02575 2.805L5.58075 5.25H3.4185ZM12.4193 5.25H14.5815L11.0557 1.7235C10.9065 1.575 10.7108 1.5 10.515 1.5C10.0553 1.5 9.75 1.87875 9.75 2.27175C9.75 2.45925 9.819 2.64975 9.97425 2.805L12.4193 5.25ZM0 6.75V8.25H0.48225C0.88275 8.25 1.248 8.478 1.42425 8.838L4.5 16.5H13.5L16.5765 8.8395C16.7512 8.47875 17.118 8.25 17.5185 8.25H18V6.75H0Z"
            fill=""
          />
        </svg>

        <p>Products</p>

        {/* Dropdown Arrow */}
       <div>
       <svg
          className={`w-10 h-10 ml-auto transition-transform ${
            clickable ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
       </div>
      </div>

      {/* Dropdown menu */}
      {clickable && (
        <div className="absolute w-[168px] border border-gray-300 rounded-md h-auto
         text-white bg-[#EC008C]  shadow-md ">
          <ul className='text-right px-4'>
            <Link to='allproducts'>
            <li
              className="px-4 py-2 cursor-pointer"
              
            >
              All Products
            </li></Link>
           <Link to="editproduct"> <li
              className="px-4 py-2 cursor-pointer"
            >
              Edit Product
            </li></Link>
            <Link to='status'>
            <li
              className="px-4 py-2 cursor-pointer"
            
            >
              Status
            </li></Link>
          </ul>
        </div>
      )}
    </div>


                {/* Shipping */}
               <NavLink className={({ isActive }) => (isActive ? "flex justify-center items-center gap-4 w-[168px] h-[45px] rounded-md text-white bg-[#EC008C]  hover:shadow-md" : "")}  to='shipping'> <div className='flex mx-2 px-6 items-center gap-4 w-[168px] h-[45px]'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3527 2.95875C10.8698 2.67825 10.572 2.15625 10.5728 1.59375V1.5915C10.5728 0.7125 9.8685 0 9 0C8.1315 0 7.42725 0.7125 7.42725 1.5915V1.59375C7.428 2.157 7.13025 2.67825 6.6465 2.95875C3.14625 4.99275 5.15775 11.745 1.5 12.9382V14.25H16.5V12.9382C12.8422 11.745 14.8538 4.99275 11.3527 2.95875ZM6.30675 12H4.89525C5.829 9.94425 5.5545 5.241 7.8 4.00875C6.47925 5.559 7.0875 9.63675 6.30675 12ZM9 2.25C8.586 2.25 8.25 1.914 8.25 1.5C8.25 1.08675 8.586 0.75 9 0.75C9.414 0.75 9.75 1.08675 9.75 1.5C9.75 1.914 9.414 2.25 9 2.25ZM6.75 15.75H11.25C11.25 16.9485 10.2052 18 9.02175 18C7.8375 18 6.75 16.9485 6.75 15.75Z" fill="#6F757E"/>
</svg>


                    <p>Shipping</p>
                </div></NavLink>

                {/* Order */}
               <NavLink className={({ isActive }) => (isActive ? "flex justify-center items-center gap-4 w-[168px] h-[45px] rounded-md text-white bg-[#EC008C]  hover:shadow-md" : "")} to='order'>
               <div className='flex mx-2 px-6 items-center gap-4 w-[168px] h-[45px]'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.625 2.25H12.9375V1.6875C12.9375 1.53832 12.8782 1.39524 12.7727 1.28975C12.6673 1.18426 12.5242 1.125 12.375 1.125C12.2258 1.125 12.0827 1.18426 11.9773 1.28975C11.8718 1.39524 11.8125 1.53832 11.8125 1.6875V2.25H6.1875V1.6875C6.1875 1.53832 6.12824 1.39524 6.02275 1.28975C5.91726 1.18426 5.77418 1.125 5.625 1.125C5.47582 1.125 5.33274 1.18426 5.22725 1.28975C5.12176 1.39524 5.0625 1.53832 5.0625 1.6875V2.25H3.375C3.07663 2.25 2.79048 2.36853 2.5795 2.5795C2.36853 2.79048 2.25 3.07663 2.25 3.375V14.625C2.25 14.9234 2.36853 15.2095 2.5795 15.4205C2.79048 15.6315 3.07663 15.75 3.375 15.75H14.625C14.9234 15.75 15.2095 15.6315 15.4205 15.4205C15.6315 15.2095 15.75 14.9234 15.75 14.625V3.375C15.75 3.07663 15.6315 2.79048 15.4205 2.5795C15.2095 2.36853 14.9234 2.25 14.625 2.25ZM7.3125 13.2188C6.86483 13.2183 6.43537 13.0415 6.11719 12.7266C6.01199 12.6211 5.95292 12.4782 5.95292 12.3293C5.95292 12.1803 6.01199 12.0375 6.11719 11.932C6.16892 11.8791 6.23072 11.837 6.29894 11.8083C6.36716 11.7796 6.44043 11.7648 6.51445 11.7648C6.58847 11.7648 6.66175 11.7796 6.72997 11.8083C6.79819 11.837 6.85998 11.8791 6.91172 11.932C7.01969 12.0352 7.16313 12.0931 7.3125 12.0938C7.46168 12.0938 7.60476 12.0345 7.71025 11.929C7.81574 11.8235 7.875 11.6804 7.875 11.5312C7.875 11.3821 7.81574 11.239 7.71025 11.1335C7.60476 11.028 7.46168 10.9688 7.3125 10.9688H7.13672L7.10859 10.9547H7.0875L7.05234 10.9406H7.04531L7.00312 10.9125H6.98906L6.96094 10.8914L6.93281 10.8703L6.91875 10.8562L6.89766 10.8352C6.8608 10.7928 6.83004 10.7454 6.80625 10.6945C6.78604 10.6571 6.77181 10.6168 6.76406 10.575C6.75703 10.568 6.75703 10.5609 6.75703 10.5469C6.75735 10.5431 6.7569 10.5392 6.75569 10.5356C6.75448 10.532 6.75254 10.5286 6.75 10.5258V10.357C6.75 10.343 6.75703 10.3359 6.75703 10.3289V10.3008C6.76262 10.2925 6.76511 10.2826 6.76406 10.2727C6.77109 10.2656 6.77109 10.2586 6.77109 10.2445L6.78516 10.2234C6.78516 10.2094 6.78516 10.2023 6.79219 10.1953L6.80625 10.1672V10.1461L6.82031 10.118L6.83437 10.0969L6.85547 10.0687L6.86953 10.0547L7.26328 9.5625H6.46875C6.31957 9.5625 6.17649 9.50324 6.071 9.39775C5.96551 9.29226 5.90625 9.14918 5.90625 9C5.90625 8.85082 5.96551 8.70774 6.071 8.60225C6.17649 8.49676 6.31957 8.4375 6.46875 8.4375H8.4375C8.54321 8.43809 8.64661 8.46846 8.73585 8.52512C8.82509 8.58178 8.89655 8.66244 8.94206 8.75785C8.98756 8.85326 9.00526 8.95957 8.99312 9.06457C8.98099 9.16958 8.93951 9.26905 8.87344 9.35156L8.25469 10.132C8.5543 10.334 8.78116 10.6268 8.90189 10.9674C9.02262 11.308 9.03085 11.6783 8.92536 12.0239C8.81987 12.3695 8.60624 12.6721 8.31589 12.8872C8.02555 13.1023 7.67384 13.2185 7.3125 13.2188ZM11.8125 12.6562C11.8125 12.8054 11.7532 12.9485 11.6477 13.054C11.5423 13.1595 11.3992 13.2188 11.25 13.2188C11.1008 13.2188 10.9577 13.1595 10.8523 13.054C10.7468 12.9485 10.6875 12.8054 10.6875 12.6562V10.125L10.4625 10.2937C10.3425 10.3815 10.193 10.4188 10.0459 10.3978C9.89872 10.3768 9.76563 10.2991 9.675 10.1813C9.58549 10.0619 9.54706 9.91189 9.56815 9.7642C9.58925 9.61652 9.66815 9.48326 9.7875 9.39375L10.9125 8.55C10.9961 8.48732 11.0954 8.44915 11.1995 8.43977C11.3035 8.43039 11.4081 8.45017 11.5016 8.49688C11.595 8.5436 11.6736 8.61541 11.7285 8.70428C11.7834 8.79314 11.8125 8.89554 11.8125 9V12.6562ZM14.625 5.625H3.375V3.375H5.0625V3.9375C5.0625 4.08668 5.12176 4.22976 5.22725 4.33525C5.33274 4.44074 5.47582 4.5 5.625 4.5C5.77418 4.5 5.91726 4.44074 6.02275 4.33525C6.12824 4.22976 6.1875 4.08668 6.1875 3.9375V3.375H11.8125V3.9375C11.8125 4.08668 11.8718 4.22976 11.9773 4.33525C12.0827 4.44074 12.2258 4.5 12.375 4.5C12.5242 4.5 12.6673 4.44074 12.7727 4.33525C12.8782 4.22976 12.9375 4.08668 12.9375 3.9375V3.375H14.625V5.625Z" fill="#6F757E"/>
</svg>


                    <p>Order</p>
                </div>
               </NavLink>

                {/* Message */}
              <NavLink className={({ isActive }) => (isActive ? "flex justify-center items-center gap-4 w-[168px] h-[45px] rounded-md text-white bg-[#EC008C]  hover:shadow-md" : "")}  to='message'>
              <div className='flex mx-2 px-6 items-center gap-4 w-[168px] h-[45px]'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 0.75C4.2465 0.75 0 3.9195 0 8.25525C0 9.79275 0.55425 11.3025 1.53525 12.474C1.5765 13.8465 0.768 15.816 0.0405 17.25C1.992 16.8975 4.76625 16.119 6.024 15.348C12.951 17.0333 18 12.7943 18 8.25525C18 3.89625 13.7242 0.75 9 0.75ZM5.25 9.375C4.62825 9.375 4.125 8.87175 4.125 8.25C4.125 7.62825 4.62825 7.125 5.25 7.125C5.87175 7.125 6.375 7.62825 6.375 8.25C6.375 8.87175 5.87175 9.375 5.25 9.375ZM9 9.375C8.37825 9.375 7.875 8.87175 7.875 8.25C7.875 7.62825 8.37825 7.125 9 7.125C9.62175 7.125 10.125 7.62825 10.125 8.25C10.125 8.87175 9.62175 9.375 9 9.375ZM12.75 9.375C12.129 9.375 11.625 8.87175 11.625 8.25C11.625 7.62825 12.129 7.125 12.75 7.125C13.3717 7.125 13.875 7.62825 13.875 8.25C13.875 8.87175 13.3717 9.375 12.75 9.375Z" fill="#6F757E"/>
</svg>


                    <p>Message</p>
                </div>
              </NavLink>

                {/* Profile */}
                <NavLink className={({ isActive }) => (isActive ? "flex justify-center items-center gap-4 w-[168px] h-[45px] rounded-md text-white bg-[#EC008C]  hover:shadow-md" : "")}  to='profile'><div className='flex mx-2 px-6 items-center gap-4 w-[168px] h-[45px]'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_316_418)">
<path d="M9 0C6.753 2.24625 3.3855 3 0.75 3C0.75 9.43725 4.55025 15.0728 9 18C13.449 15.0728 17.25 9.43725 17.25 3C14.6137 3 11.2455 2.24625 9 0ZM9 12C8.58525 12 8.25 11.664 8.25 11.25C8.25 10.836 8.58525 10.5 9 10.5C9.41475 10.5 9.75 10.836 9.75 11.25C9.75 11.664 9.41475 12 9 12ZM9.75 9.75H8.25V5.25H9.75V9.75Z" fill="#6F757E"/>
</g>
<defs>
<clipPath id="clip0_316_418">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg>


                    <p>Profile</p>
                </div></NavLink>
                <NavLink to='edit'> Edit </NavLink>
                <NavLink to='Qurierdetails'> Details </NavLink>
                <NavLink to='orderdetails'> Order Details </NavLink>
               
              </div>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Drawer;