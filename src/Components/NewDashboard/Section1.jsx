import React from 'react';

const Section1 = () => {
    return (
        <div className='w-[238px] flex justify-around items-center rounded-xl bg-white h-[99px]'>
            <div className='flex font-Inter flex-col'>
<p>Revenue</p>
<p className='text-2xl font-bold font-Inter'>$7,825</p>
            </div>
            <div className='flex flex-col items-end'>
<p className='text-[#FF8901]'>+22%</p>
<svg width="79" height="38" viewBox="0 0 79 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_91_5051)">
<path d="M4.91211 22.4667C6.77224 23.2385 11.7374 23.1823 16.7168 16.7838C22.9411 8.7856 28.7361 10.8904 35.6043 19.941C42.4725 28.9915 47.1943 33.4116 54.2771 20.9934C61.3599 8.57516 62.2185 4.36559 74.2378 1.83984" stroke="#FF8901" stroke-width="2.77303"/>
</g>
<defs>
<filter id="filter0_d_91_5051" x="0.683399" y="0.482422" width="77.5369" height="36.9455" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3.69737"/>
<feGaussianBlur stdDeviation="1.84868"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.278431 0 0 0 0 0.941176 0 0 0 0.16 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_91_5051"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_91_5051" result="shape"/>
</filter>
</defs>
</svg>


            </div>
        </div>
    );
};

export default Section1;