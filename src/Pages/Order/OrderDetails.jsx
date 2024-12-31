import React from 'react';
import img1 from '../../assets/Images/orderDetails.png'
import img2 from '../../assets/Images/orderDetailsimg.png'
const OrderDetails = () => {
    return (
        <div className=''>
            <h2 className='text-lg my-6 mx-2 font-Poppins'>Order Details</h2>
            <div className='flex bg-white rounded-lg gap-4'>
            <div className='w-[650px] mx-auto  h-auto'>
             <h2 className='text-lg m-4 font-Poppins'>Order Items</h2>
             <div className='flex gap-10 font-Poppins justify-center'>
             <div className='w-80 h-80 border rounded-lg'>
                 <img className='w-[309px] rounded-lg p-4 mx-auto h-[225px]' src={img1} alt="" />
                 <p className='my-2 font-bold mx-4'>Order no: #dH3242</p>
                 <div className='flex mx-4 justify-between'>
                   <p className='flex gap-10'>
                   <p>White</p>
                   <p>32</p>
                   </p>
                   <p className="text-[#EFA937] font-bold">₹777</p>
                 </div>
             </div>
             <div className='w-80 h-80 border rounded-lg'>
                 <img className='w-[309px] rounded-lg p-4 mx-auto h-[225px]' src={img1} alt="" />
                 <p className='my-2 font-bold mx-6'>Order no: #dH3242</p>
                 <div className='flex mx-6 justify-between'>
                   <p className='flex gap-10'>
                   <p>White</p>
                   <p>32</p>
                   </p>
                   <p className="text-[#EFA937] font-bold">₹777</p>
                 </div>
             </div>
             </div>
             <div>
                <p className='mx-4 my-2'>Billing & Shipping Details</p>
                <div>
                    <p className='flex justify-between my-2 mx-4'>
                        <p>Total bill</p>
                        <p className='font-bold'>₹ 1077.00</p>
                    </p>
                    <p className='flex justify-between my-2 mx-4'>
                        <p>Delivery fee</p>
                        <p className='font-bold'>₹ 0.00</p>
                    </p>
                    <p className='flex justify-between my-2 mx-4'>
                        <p>+VAT</p>
                        <p className='font-bold'>₹ 35.00</p>
                    </p>
                    <p className='flex justify-between my-2 mx-4'>
                        <p>Total order value</p>
                        <p className='font-bold'>₹ 35.00</p>
                    </p>
                    <p className='flex justify-between my-2 mx-4'>
                        <p>Courier:</p>
                        <p >Order Date:</p>
                    </p>
                    <p className='flex justify-between my-2 mx-4'>
                        <p className='font-bold'>FedEx Internations</p>
                        <p className='font-bold' >21-03-2024</p>
                    </p>
                    <p className='flex flex-col mx-4 my-2'>
                        <p>Shipping address:</p>
                        <p className='my-2 font-bold'>39, new market area, Tirunelmali, India</p>
                    </p>
                </div>
             </div>
            </div>
            <div className='w-[364px] h-auto my-6 border rounded-lg'>
                 <p className='flex justify-between m-4'>
                    <p className='text-lg font-semibold'>Customer Information</p>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.77934 12.0434C7.77934 10.9553 6.89724 10.0732 5.8091 10.0732C4.72097 10.0732 3.83887 10.9553 3.83887 12.0434C3.83887 13.1316 4.72097 14.0137 5.8091 14.0137C6.89724 14.0137 7.77934 13.1316 7.77934 12.0434ZM14.6752 12.0434C14.6752 10.9553 13.7931 10.0732 12.7049 10.0732C11.6168 10.0732 10.7347 10.9553 10.7347 12.0434C10.7347 13.1316 11.6168 14.0137 12.7049 14.0137C13.7931 14.0137 14.6752 13.1316 14.6752 12.0434ZM19.6008 10.0732C20.6889 10.0732 21.571 10.9553 21.571 12.0434C21.571 13.1316 20.6889 14.0137 19.6008 14.0137C18.5126 14.0137 17.6305 13.1316 17.6305 12.0434C17.6305 10.9553 18.5126 10.0732 19.6008 10.0732Z" fill="#8D98AF"/>
</svg>

                 </p>
                 <div className='border-b-2 m-4'>
                    <img className='w-40 mx-auto border-4 border-[#972427] p-2 h-40 rounded-full' src={img2} alt="" />
                    <p className='text-lg text-center font-bold'>Esther Howard</p>
                    <p className='text-center'>estherhoward034@gmail.com</p>
                    <p className='text-center'>+91 01747 487899</p>
                 </div>
                 <div>
                    <p className='flex flex-col m-4'>
                        <p className='my-2 font-bold text-lg'>Shipping Address</p>
                        <p>39, New merket area, </p>
                        <p className='mt-2'>Tirunelvali, India</p>
                       
                    </p>
                    <p className='flex flex-col m-4'>
                        <p className='my-2 font-bold text-lg'>Billing Address</p>
                        <p className='my-2'>39, Green road, Tirunelvali,</p>
                        <p>Karela, India </p>
                    </p>
                 </div>
            </div>
            </div>
        </div>
    );
};

export default OrderDetails;