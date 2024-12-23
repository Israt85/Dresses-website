import React from 'react';
import profile from '../../assets/Images/profileImg.jpeg'
import { Link } from 'react-router';

const Profile = () => {
    return (
        <div>
            <div className='flex justify-between m-6'>
                <h2 className='text-xl font-bold'>Profile</h2>
                <div className='flex gap-4'>
              <Link to="edit"><div className='w-16 h-16 border flex justify-center items-center rounded-full'>
              <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.3752 2.12298C28.3347 1.08374 26.9243 0.5 25.4538 0.5C23.9833 0.5 22.5729 1.08374 21.5324 2.12298L3.00745 20.648C2.37746 21.2773 1.93475 22.0693 1.72874 22.9357L0.0315501 30.0685C-0.0144034 30.2617 -0.0100949 30.4635 0.0440648 30.6546C0.0982245 30.8456 0.20043 31.0196 0.340932 31.16C0.481435 31.3003 0.65555 31.4023 0.846673 31.4563C1.0378 31.5102 1.23955 31.5143 1.4327 31.4682L8.56402 29.7694C9.43091 29.5637 10.2235 29.1209 10.8533 28.4907L29.3752 9.96881C30.4144 8.92839 30.9981 7.51799 30.9981 6.04745C30.9981 4.5769 30.4144 3.1665 29.3752 2.12608M23.1754 3.76902C23.4746 3.46981 23.8298 3.23247 24.2207 3.07054C24.6117 2.90861 25.0307 2.82527 25.4538 2.82527C25.8769 2.82527 26.2959 2.90861 26.6869 3.07054C27.0778 3.23247 27.433 3.46981 27.7322 3.76902C28.0314 4.06823 28.2688 4.42344 28.4307 4.81437C28.5926 5.2053 28.676 5.6243 28.676 6.04745C28.676 6.47059 28.5926 6.88959 28.4307 7.28052C28.2688 7.67145 28.0314 8.02666 27.7322 8.32587L26.3497 9.70377L21.7928 5.14848L23.1754 3.76902ZM20.1499 6.79452L24.7067 11.3483L9.20724 26.8478C8.88176 27.1732 8.47257 27.4011 8.02463 27.508L2.73001 28.7697L3.99012 23.4751C4.09706 23.0256 4.32646 22.6164 4.65195 22.2909L20.1499 6.79452Z" fill="#6B6A6A"/>
</svg>
              </div></Link>
              <div className='w-16 h-16 border flex justify-center items-center rounded-full'>
              <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3315 1.33333H14.6648L13.3315 0H6.66479L5.33146 1.33333H0.664795V4H19.3315M1.99813 21.3333C1.99813 22.0406 2.27908 22.7189 2.77918 23.219C3.27927 23.719 3.95755 24 4.66479 24H15.3315C16.0387 24 16.717 23.719 17.2171 23.219C17.7172 22.7189 17.9981 22.0406 17.9981 21.3333V5.33333H1.99813V21.3333Z" fill="#E23737"/>
</svg>

              </div>

                </div>
            </div>
            <div className='w-full font-Inter '>
                <img className='w-28 h-28 mx-auto rounded-full' src={profile} alt="" />
                <h2 className='text-center text-xl font-bold'>Mukul Adhikari</h2>
                <p className='text-[#533A3A] text-center font-bold'>Employee</p>
                <div className='flex justify-center gap-20 items-center'>
                   <div>
                   <p>Name</p>
                   <p className='w-80 py-3 px-4 bg-white text-[#533A3A]'>Mukul Adhikari</p>
                   </div>
                   <div>
                   <p>Region</p>
                   <p className='w-80 py-3 px-4 bg-white text-[#533A3A]'>Rajarhat , Kolkata</p>
                   </div>
                </div>
                <div className='flex my-4 justify-center gap-20 items-center'>
                   <div>
                   <p>Category</p>
                   <p className='w-80 py-3 px-4 bg-white text-[#533A3A]'>Plumber</p>
                   </div>
                   <div>
                   <p>Adress</p>
                   <p className='w-80 py-3 h-auto px-4 bg-white text-[#533A3A]'>21/A B.K.C road, EM Block, Newtown, Kol -700137</p>
                   </div>
                </div>
                <div className='flex my-4 justify-center gap-20 items-center'>
                   <div>
                   <p>Email</p>
                   <p className='w-80 py-3 px-4 bg-white text-[#533A3A]'>Mukul@email.com</p>
                   </div>
                   <div>
                   <p>Contact No.</p>
                   <p className='w-80 py-3 h-auto px-4 bg-white text-[#533A3A]'>9642677232</p>
                   </div>
                </div>
                <div className='flex my-4 justify-center gap-20 items-center'>
                   <div>
                   <p>Password</p>
                   <p className='w-80 py-3 px-4 bg-white text-[#533A3A]'>Helloworld</p>
                   </div>
                   <div>
                   <p></p>
                   <p className='w-80 py-3 h-auto px-4 '></p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;