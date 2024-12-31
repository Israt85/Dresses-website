import React from 'react';
import logo from '../../assets/Images/4155ecce83f378e39dae19cecca7729b.png'
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='w-full lg:w-[960px] shadow-2xl flex lg:flex-row-reverse flex-col justify-center items-center my-20 mx-auto h-auto lg:h-[560px] border'>
           <div className="flex-1 bg-[#EC008C] overflow-hidden flex flex-col items-end justify-start pt-0 pb-[50px] pl-[50px] pr-[65px] box-border gap-[50px] min-w-[312px] max-w-full mq450:pb-8 mq450:box-border mq675:gap-[25px] mq675:pl-[25px] mq675:pr-8 mq675:box-border">
  <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[15px] box-border max-w-full">
    <div className="h-[345px] w-[593px] relative max-w-[170%] shrink-0">
      <div className="absolute top-[-101px] left-[193px] rounded-[50%] [background:linear-gradient(240.33deg,#ec008c,#ff85ce)] w-[400px] h-[400px]" />
      <div className="absolute top-[-5px] left-[0px] rounded-[50%] [background:linear-gradient(204.77deg,#ec008c,#fa7ab7)] w-[350px] h-[350px] z-[1]" />
    </div>
  </div>
  <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
    <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
    <p className='w-[118px] text-white text-2xl font-bold'>Hey Welcome Back</p>
    </div>
    <div className="h-[100px] w-[100px] relative rounded-[50%] [background:linear-gradient(-90deg,#ec008c,#ff6dce)]" />
  </div>
</div>
        <div className=' w-full lg:w-[480px] h-full'>
            <img className='w-[116px] m-8 h-[43px]' src={logo} alt="" />
           <div className='flex justify-center mt-10 items-center'>
           <h2 className='text-2xl font-bold'>Login</h2>
           </div>
        <form className="card-body">
        <div className="relative form-control">
          <label className="label">
            <span className="label-text text-lg">Email</span>
          </label>
          <input type="email" placeholder="Enter your email" className="input w-full rounded-full input-bordered" required />
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
        <Link to='dashboard/newdash'><div className="form-control mt-6">
          <button className="btn rounded-full hover:bg-[rgb(236,0,140)] text-white bg-[rgb(236,0,140)]">Login</button>
        </div></Link>
      </form>
        </div>
        </div>
    );
};

export default Login;