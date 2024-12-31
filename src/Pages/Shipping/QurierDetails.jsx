import React from 'react';
import courier from '../../assets/Images/courierdetails.png'

const QurierDetails = () => {
    return (
       <div>
        <div className='flex justify-between items-center'>
            <h2 className='text-xl font-bold m-6'>Order</h2>
            <div className='w-[143px] h-[45px] flex justify-center text-white font-bold items-center  border bg-[#EC008C] mr-12 rounded-full'>
              + Add New
            </div>
           </div>
         <div className='flex gap-6 mx-3'>
            <div className='w-[400px] h-auto py-10 font-Poppins text-[#8D98AF] rounded-lg border'>
                <div className='flex justify-between m-4'>
                    <p className='font-Poppins text-xl font-medium'>Courier Information</p>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.2066 7.69489L17.098 3.58535C16.9614 3.44869 16.7992 3.34029 16.6206 3.26633C16.4421 3.19236 16.2508 3.1543 16.0575 3.1543C15.8643 3.1543 15.6729 3.19236 15.4944 3.26633C15.3159 3.34029 15.1537 3.44869 15.017 3.58535L3.67787 14.9254C3.54065 15.0616 3.43186 15.2236 3.35782 15.4021C3.28378 15.5807 3.24597 15.7722 3.24659 15.9655V20.075C3.24659 20.4652 3.4016 20.8394 3.67752 21.1154C3.95345 21.3913 4.32768 21.5463 4.71789 21.5463H8.82743C9.02072 21.5469 9.2122 21.5091 9.39074 21.4351C9.56928 21.361 9.73133 21.2522 9.86746 21.115L21.2066 9.77586C21.3433 9.63924 21.4517 9.47703 21.5256 9.2985C21.5996 9.11997 21.6377 8.92862 21.6377 8.73538C21.6377 8.54213 21.5996 8.35078 21.5256 8.17225C21.4517 7.99373 21.3433 7.83152 21.2066 7.69489ZM8.82743 20.075H4.71789V15.9655L12.8101 7.87328L16.9196 11.9828L8.82743 20.075ZM17.9596 10.9419L13.8501 6.83326L16.0571 4.6263L20.1666 8.73492L17.9596 10.9419Z" fill="black"/>
</svg>

                </div>
                <img className='w-[186px] space-y-2 border-4 border-[#138B3A] p-2 mx-auto h-[186px] rounded-full' src={courier} alt="" />
                <div>
                    <p className='flex justify-between mx-4'>
                        <p>Courier Name:</p>
                        <p>Status</p>
                    </p>
                    <p className='flex justify-between text-xl  mx-4'>
                        <p className='text-black'>Blue Dart</p>
                        <p className='flex items-center gap-1 text-[#008000]'> 
                            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.2457 8.16335C19.8991 7.80104 19.5404 7.4277 19.4053 7.09942C19.2802 6.79872 19.2728 6.30031 19.2655 5.81754C19.2517 4.92005 19.237 3.90301 18.5298 3.19586C17.8227 2.48872 16.8057 2.474 15.9082 2.46021C15.4254 2.45285 14.927 2.4455 14.6263 2.32044C14.2989 2.18526 13.9247 1.82663 13.5623 1.47995C12.9278 0.870281 12.2069 0.179688 11.2469 0.179688C10.2869 0.179688 9.56684 0.870281 8.93142 1.47995C8.56911 1.82663 8.19577 2.18526 7.86748 2.32044C7.56862 2.4455 7.06838 2.45285 6.58561 2.46021C5.68811 2.474 4.67107 2.48872 3.96393 3.19586C3.25678 3.90301 3.24667 4.92005 3.22828 5.81754C3.22092 6.30031 3.21356 6.79872 3.0885 7.09942C2.95333 7.42678 2.5947 7.80104 2.24802 8.16335C1.63835 8.79785 0.947754 9.51879 0.947754 10.4788C0.947754 11.4388 1.63835 12.1589 2.24802 12.7943C2.5947 13.1566 2.95333 13.5299 3.0885 13.8582C3.21356 14.1589 3.22092 14.6573 3.22828 15.1401C3.24207 16.0376 3.25678 17.0546 3.96393 17.7618C4.67107 18.4689 5.68811 18.4836 6.58561 18.4974C7.06838 18.5048 7.56678 18.5121 7.86748 18.6372C8.19485 18.7724 8.56911 19.131 8.93142 19.4777C9.56592 20.0874 10.2869 20.7779 11.2469 20.7779C12.2069 20.7779 12.9269 20.0874 13.5623 19.4777C13.9247 19.131 14.298 18.7724 14.6263 18.6372C14.927 18.5121 15.4254 18.5048 15.9082 18.4974C16.8057 18.4836 17.8227 18.4689 18.5298 17.7618C19.237 17.0546 19.2517 16.0376 19.2655 15.1401C19.2728 14.6573 19.2802 14.1589 19.4053 13.8582C19.5404 13.5309 19.8991 13.1566 20.2457 12.7943C20.8554 12.1598 21.546 11.4388 21.546 10.4788C21.546 9.51879 20.8554 8.79877 20.2457 8.16335ZM15.4456 8.79234L10.2961 13.9419C10.2277 14.0103 10.1466 14.0646 10.0573 14.1016C9.96798 14.1386 9.87226 14.1577 9.77558 14.1577C9.6789 14.1577 9.58318 14.1386 9.49387 14.1016C9.40456 14.0646 9.32343 14.0103 9.25511 13.9419L7.04815 11.7349C6.91011 11.5969 6.83256 11.4097 6.83256 11.2145C6.83256 11.0193 6.91011 10.832 7.04815 10.694C7.18619 10.556 7.37341 10.4784 7.56862 10.4784C7.76384 10.4784 7.95106 10.556 8.0891 10.694L9.77558 12.3814L14.4047 7.75139C14.473 7.68304 14.5542 7.62882 14.6435 7.59183C14.7328 7.55484 14.8285 7.5358 14.9251 7.5358C15.0218 7.5358 15.1175 7.55484 15.2068 7.59183C15.2961 7.62882 15.3773 7.68304 15.4456 7.75139C15.514 7.81974 15.5682 7.90088 15.6052 7.99018C15.6422 8.07949 15.6612 8.1752 15.6612 8.27186C15.6612 8.36852 15.6422 8.46424 15.6052 8.55354C15.5682 8.64284 15.514 8.72399 15.4456 8.79234Z" fill="#008000"/>
</svg>
 Verified</p>
                    </p>
                </div>
                <div className='mx-4'>
                    <p>Email:</p>
                    <p className='text-xl text-black'>bluebardindia@gmail.com</p>
                </div>
                <div className='mx-4'>
                    <p>Office Address:</p>
                    <p className='text-xl text-black'>Tirunelvali, Karala, India</p>
                </div>
                <div>
                <p className='flex justify-between mx-4'>
                        <p>Contact Number:</p>
                        <p>Courier Code</p>
                    </p>
                    <p className='flex justify-between mx-4'>
                        <p className='text-xl text-black'>+91 98945 55252</p>
                        <p className='text-xl text-black'> #123245</p>
                    </p>
                </div>
                <div>
                    <p className='mx-4'>Tracking URL:</p>
                    <p className='flex gap-2 items-center mx-4'>
                        <p className='text-xl text-black'>http:///bluebarttrackingurl243e22</p>
                        <p className='w-8 h-8 flex justify-center items-center  bg-[#F1F1F1]'>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.84029 8.9045C9.1587 9.5861 8.05362 9.5861 7.37203 8.9045C6.69044 8.22291 6.69044 7.11783 7.37203 6.43623L8.91469 4.89356C9.56526 4.24299 10.6016 4.21338 11.2873 4.80473M11.0744 2.73385C11.756 2.05226 12.8611 2.05226 13.5427 2.73385C14.2243 3.41545 14.2243 4.52053 13.5427 5.20212L12 6.74479C11.3495 7.39536 10.3131 7.42497 9.6274 6.83362" stroke="black" stroke-width="0.98087" stroke-linecap="round"/>
<path d="M14.0546 8.76179C14.0546 11.2278 14.0546 12.4609 13.2885 13.227C12.5224 13.9931 11.2894 13.9931 8.82331 13.9931H7.51548C5.04942 13.9931 3.81639 13.9931 3.05029 13.227C2.28418 12.4609 2.28418 11.2278 2.28418 8.76179V7.45396C2.28418 4.9879 2.28418 3.75487 3.05029 2.98876C3.81639 2.22266 5.04942 2.22266 7.51548 2.22266" stroke="black" stroke-width="0.98087" stroke-linecap="round"/>
</svg>

                        </p>
                    </p>
                </div>
            </div>
            <div className='w-[590px] font-Poppins rounded-lg h-[600px] border'>
                <div className='flex justify-between m-4'>
                    <p className='text-xl font-medium'>Deluxe h2311</p>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3565 4.69489L14.2479 0.585351C14.1113 0.448692 13.9491 0.340286 13.7705 0.266325C13.592 0.192364 13.4007 0.154297 13.2074 0.154297C13.0142 0.154297 12.8228 0.192364 12.6443 0.266325C12.4658 0.340286 12.3036 0.448692 12.1669 0.585351L0.827768 11.9254C0.69055 12.0616 0.58176 12.2236 0.507722 12.4021C0.433683 12.5807 0.395874 12.7722 0.396492 12.9655V17.075C0.396492 17.4652 0.551504 17.8394 0.827427 18.1154C1.10335 18.3913 1.47758 18.5463 1.8678 18.5463H5.97733C6.17062 18.5469 6.3621 18.5091 6.54064 18.4351C6.71919 18.361 6.88123 18.2522 7.01736 18.115L18.3565 6.77586C18.4932 6.63924 18.6016 6.47703 18.6755 6.2985C18.7495 6.11997 18.7876 5.92862 18.7876 5.73538C18.7876 5.54213 18.7495 5.35078 18.6755 5.17225C18.6016 4.99373 18.4932 4.83152 18.3565 4.69489ZM5.97733 17.075H1.8678V12.9655L9.95997 4.87328L14.0695 8.98282L5.97733 17.075ZM15.1095 7.94187L11 3.83326L13.207 1.6263L17.3165 5.73492L15.1095 7.94187Z" fill="black"/>
</svg>

                </div>
                <div className='w-96'>
                <div className='flex justify-between'>
                   <p className='flex flex-col   my-4 mx-4'>
                        <p className='text-[#8D98AF]'>Name</p>
                        <p  className='font-semibold text-black'>Willson</p>
                    </p>
                    <p className='flex text-lg my-4 text-black  text-left flex-col mr-10 mx-4'>
                    <p className='text-[#8D98AF]'>Colour</p>
                        <p className='font-semibold'>Black</p>
                    </p>
                   </div>

                   <div className='flex justify-between'>
                   <p className='flex flex-col   my-4 mx-4'>
                        <p className='text-[#8D98AF]'>Brand</p>
                        <p  className='font-semibold text-black'>Cotton</p>
                    </p>
                    <p className='flex text-lg my-4 text-black  text-left flex-col mx-4'>
                    <p className='text-[#8D98AF]'>Size</p>
                        <p className='font-semibold'>Mediums</p>
                    </p>
                   </div>
                  
                </div>
                <div className='flex w-[440px] justify-between'>
                   <p className='flex flex-col   my-4 mx-4'>
                        <p className='text-[#8D98AF]'>Last Checking</p>
                        <p  className='font-semibold  text-[#EFA937]'>18-03-2024</p>
                    </p>
                    <p className='flex text-lg my-4 text-black  text-left flex-col mx-4'>
                    <p className='text-[#8D98AF]'>Condition*</p>
                        <p className='font-semibold text-[#008000]'>Good Condition</p>
                    </p>
                   </div>
            </div>
        </div>
       </div>
    );
};

export default QurierDetails;