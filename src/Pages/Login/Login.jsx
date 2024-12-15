import React from 'react';
import logo from '../../assets/Images/4155ecce83f378e39dae19cecca7729b.png'
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='w-[960px] shadow-2xl flex flex-row-reverse justify-center items-center my-20 mx-auto h-[560px] border'>
        <div className='w-[480px] flex justify-start p-10 items-end bg-[#EC008C] h-[560px] '>
          <p className='w-[118px] text-white text-2xl font-bold'>Hey Welcome Back</p>
        </div>
        <div className=' w-[480px] h-full'>
            <img className='w-[116px] m-8 h-[43px]' src={logo} alt="" />
           <div className='flex justify-center mt-10 items-center'>
           <h2 className='text-2xl font-bold'>Login</h2>
           </div>
        <form className="card-body">
        <div className="relative form-control">
          <label className="label">
            <span className="label-text text-lg">Email</span>
          </label>
          <input type="email" placeholder="Enter your email" className="input rounded-full input-bordered" required />
          <div>
          <svg className='absolute right-4 -mt-8' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8.47533L0.01 2H15.99L8 8.47533ZM8 10.1913L0 3.708V14H16V3.708L8 10.1913Z" fill="#6F757E"/>
</svg>
          </div>

        </div>
        <div className="relative form-control">
          <label className="label">
            <span className="label-text text-lg">Password</span>
          </label>
          <input type="password" placeholder="........." className="input rounded-full text-xl input-bordered" required />
          <div>
          <svg className='absolute right-4 -mt-7'  width="20" height="12" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.536 2C9.228 0.804667 10.5207 0 12 0C14.2073 0 16 1.79267 16 4C16 6.20733 14.2073 8 12 8C10.5207 8 9.228 7.19533 8.536 6H6L4.996 4.998L4 6L3.01333 4.998L2 6L0 3.97867L1.68667 2H8.536ZM13.6667 3C14.2187 3 14.6667 3.448 14.6667 4C14.6667 4.552 14.2187 5 13.6667 5C13.1147 5 12.6667 4.552 12.6667 4C12.6667 3.448 13.1147 3 13.6667 3Z" fill="#6F757E"/>
</svg>

          </div>
        </div>
        <Link to='dashboard'><div className="form-control mt-6">
          <button className="btn rounded-full hover:bg-[rgb(236,0,140)] text-white bg-[rgb(236,0,140)]">Login</button>
        </div></Link>
      </form>
        </div>
        </div>
    );
};

export default Login;