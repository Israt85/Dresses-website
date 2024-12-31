import React from 'react';
import profile from '../../assets/Images/profileImg.jpeg'

const EditProfile = () => {
    return (
        <div>
           <h2 className='m-6 font-semibold text-lg'>Profile</h2>
           <div className='w-full font-Inter '>
                           <img className='w-28 h-28 mx-auto rounded-full' src={profile} alt="" />
                           <h2 className='text-center text-xl font-bold'>Mukul Adhikari</h2>
                           <p className='text-[#533A3A] text-center font-bold'>Employee</p>
                           <div className='flex justify-center gap-20 items-center'>
                              <div>
                              <p>Name</p>
                              <input className='w-80 py-3 px-4 bg-white text-[#533A3A]' defaultValue={'Mukul Adhikari'}/>
                              </div>
                              <div>
                              <p>Region</p>
                              <input className='w-80 py-3 px-4 bg-white text-[#533A3A]' defaultValue={'Rajarhat , Kolkata'} />
                              </div>
                           </div>
                           <div className='flex my-4 justify-center gap-20 items-center'>
                              <div>
                              <p>Category</p>
                              <input className='w-80 py-3 px-4 bg-white text-[#533A3A]' defaultValue={'Plumber'}/>
                              </div>
                              <div>
                              <p>Adress</p>
                              <input className='w-80 py-3 h-auto px-4 bg-white text-[#533A3A]' defaultValue={'21/A B.K.C road, EM Block, Newtown, Kol -700137'} />
                              </div>
                           </div>
                           <div className='flex my-4 justify-center gap-20 items-center'>
                              <div>
                              <p>Email</p>
                              <input className='w-80 py-3 px-4 bg-white text-[#533A3A]' defaultValue={'Mukul@email.com'} />
                              </div>
                              <div>
                              <p>Contact No.</p>
                              <input className='w-80 py-3 h-auto px-4 bg-white text-[#533A3A]' defaultValue={'9642677232'}/>
                              </div>
                           </div>
                           <div className='flex my-4 justify-center gap-20 items-center'>
                              <div>
                              <p>Password</p>
                              <input className='w-80 py-3 px-4 bg-white text-[#533A3A]'defaultValue={'Helloworld'} />
                              </div>
                              <div>
                              <p></p>
                              <p className='w-80 py-3 h-auto px-4 '></p>
                              </div>
                           </div>
                           <div className='flex justify-center items-center'>
                            <button className='w-80 rounded-lg h-14 text-white bg-[#EC008C] '>Save Changes</button>
                           </div>
                       </div>
        </div>
    );
};

export default EditProfile;