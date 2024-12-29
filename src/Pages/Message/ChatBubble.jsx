import React, { useEffect, useState } from 'react';

const ChatBubble = () => {
 
    return (
        <div>
            <div>
            <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://s3-alpha-sig.figma.com/img/61a0/b47a/7c5376560de2a64cb611049443695aae?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hF0pKxsl9fK8Q45gcM7iBpKKeRKtInPqvEa1CI9ocfNUCDNh8E9zceaGi5jypGHUX6PTnxI9D3~aAP9nZ~Tri4dPtq2yaPLvjXpto9FihWmHPOwWr7lyIyOw5XDRiGkMWc7r6wq-f2rOxEPx1YWmRqX~f60uRssghi41dgY901KdFdyjcNgvHWKIaYO9-ZPIJ~JnvSHZcjRBaFtpOUvka~Jo0l-NRbwL0ObUst0EDFdVktTte9LrHhCbXN4qU-zp-AuaDFCqMQ80B2PyQ60iYjfPtlma2O4fiaPzIOVOzdhN2gH95py5xcNFbKvIFDTmuZ8JY4cAzwGd0aUC1B6vOA__" />
    </div>
  </div>
  <div className="chat-header">
  Roselle Ehrman
    <time className="text-xs opacity-50 ml-4">08:45 AM</time>
  </div>
  <div className="chat-bubble bg-[#F5F5F5] text-black">Hi! How are you?</div>
  <div className="chat-footer opacity-50"></div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://s3-alpha-sig.figma.com/img/1363/ce47/f689bda1937d8c2d1741c1c37f9f2999?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qFp5BzjZXKM~aa4JLtovyOpOhpMsR0vfQA7yk5RebQeeRIzXLG0q-9JjU-EXPOZEp6EF6DLyoihfNA4DLA19gxKwN-tFa3FTI~mZlrHXkdaUYGdCC9-2li4AmUBKjVbZGuOGepm~pib12MphWx8mWZzoRU12MVam1xGfF-OriRr5OfpuoOORU1Q~2It58Hz0tdqlkqRgtjRAYxuCc0ZYGziw7Byw~afBzDvyaw13WwpmR9jOldAKgChZlPkrUvSbgq4jTAQ-snxk7VaJjUYK1a3ahoJtnHDqlPNNrJFrTawqlaEqkxrQKHIpEwOIEOxcebl6fwbby7HOaL~5GBHJxw__" />
    </div>
  </div>
  <div className="chat-header">
    
    <time className="text-xs opacity-50 mr-4">08:45 AM</time>
    You
  </div>
  <div className="chat-bubble bg-[#F5F5F5] w-[280px] text-black">Hey Roselle! I’m feel amazing
  how about you?</div>
</div>
        </div>
        <div>
            <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://s3-alpha-sig.figma.com/img/61a0/b47a/7c5376560de2a64cb611049443695aae?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hF0pKxsl9fK8Q45gcM7iBpKKeRKtInPqvEa1CI9ocfNUCDNh8E9zceaGi5jypGHUX6PTnxI9D3~aAP9nZ~Tri4dPtq2yaPLvjXpto9FihWmHPOwWr7lyIyOw5XDRiGkMWc7r6wq-f2rOxEPx1YWmRqX~f60uRssghi41dgY901KdFdyjcNgvHWKIaYO9-ZPIJ~JnvSHZcjRBaFtpOUvka~Jo0l-NRbwL0ObUst0EDFdVktTte9LrHhCbXN4qU-zp-AuaDFCqMQ80B2PyQ60iYjfPtlma2O4fiaPzIOVOzdhN2gH95py5xcNFbKvIFDTmuZ8JY4cAzwGd0aUC1B6vOA__" />
    </div>
  </div>
  <div className="chat-header">
  Roselle Ehrman
    <time className="text-xs opacity-50 ml-4">08:45 AM</time>
  </div>
  <div className="chat-bubble bg-[#F5F5F5] text-black">Hey, so happy you are down!</div>
  <div className="chat-footer opacity-50"></div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://s3-alpha-sig.figma.com/img/1363/ce47/f689bda1937d8c2d1741c1c37f9f2999?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qFp5BzjZXKM~aa4JLtovyOpOhpMsR0vfQA7yk5RebQeeRIzXLG0q-9JjU-EXPOZEp6EF6DLyoihfNA4DLA19gxKwN-tFa3FTI~mZlrHXkdaUYGdCC9-2li4AmUBKjVbZGuOGepm~pib12MphWx8mWZzoRU12MVam1xGfF-OriRr5OfpuoOORU1Q~2It58Hz0tdqlkqRgtjRAYxuCc0ZYGziw7Byw~afBzDvyaw13WwpmR9jOldAKgChZlPkrUvSbgq4jTAQ-snxk7VaJjUYK1a3ahoJtnHDqlPNNrJFrTawqlaEqkxrQKHIpEwOIEOxcebl6fwbby7HOaL~5GBHJxw__" />
    </div>
  </div>
  <div className="chat-header">
    
    <time className="text-xs opacity-50 mr-4">08:45 AM</time>
    You
  </div>
  <div className="chat-bubble bg-[#F5F5F5] w-[280px] text-black"> That’s a cool idea</div>
</div>
        </div>
        <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://s3-alpha-sig.figma.com/img/61a0/b47a/7c5376560de2a64cb611049443695aae?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hF0pKxsl9fK8Q45gcM7iBpKKeRKtInPqvEa1CI9ocfNUCDNh8E9zceaGi5jypGHUX6PTnxI9D3~aAP9nZ~Tri4dPtq2yaPLvjXpto9FihWmHPOwWr7lyIyOw5XDRiGkMWc7r6wq-f2rOxEPx1YWmRqX~f60uRssghi41dgY901KdFdyjcNgvHWKIaYO9-ZPIJ~JnvSHZcjRBaFtpOUvka~Jo0l-NRbwL0ObUst0EDFdVktTte9LrHhCbXN4qU-zp-AuaDFCqMQ80B2PyQ60iYjfPtlma2O4fiaPzIOVOzdhN2gH95py5xcNFbKvIFDTmuZ8JY4cAzwGd0aUC1B6vOA__" />
    </div>
  </div>
  <div className="chat-header">
  Roselle Ehrman
    <time className="text-xs opacity-50 ml-4">08:45 AM</time>
  </div>
  <div className="chat-bubble bg-[#F5F5F5] text-black">Hey, so happy you are down!</div>
  <div className="chat-footer opacity-50"></div>
</div>
<div className='border-t-2 flex items-center pt-2 mx-10 my-6 h-20'>
<div className='w-20 h-20 flex justify-center items-center rounded-full bg-[#F5F5F5]'>
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_402_408)">
<path d="M14.391 6.97333L7.69099 13.69C6.39099 14.9893 4.27633 14.9893 2.97699 13.69C1.67766 12.3907 1.67699 10.2753 2.97699 8.97533L10.0623 1.91867C10.8423 1.13867 12.111 1.13867 12.891 1.91867C13.6703 2.69867 13.671 3.96667 12.891 4.74667L7.21966 10.3893C6.95966 10.6493 6.53699 10.6493 6.27699 10.3893C6.01699 10.1293 6.01699 9.70667 6.27699 9.44667L11.0057 4.74667L10.0623 3.804L5.33366 8.50333C4.55233 9.28467 4.55299 10.552 5.33366 11.3327C6.11433 12.1133 7.38099 12.1133 8.16166 11.3327L13.833 5.69C14.4843 5.03867 14.809 4.186 14.809 3.33267C14.809 1.48667 13.3117 0 11.4757 0C10.6223 0 9.76966 0.325333 9.11833 0.976667L2.03366 8.032C1.12299 8.944 0.666992 10.138 0.666992 11.3327C0.666992 13.908 2.75366 15.9993 5.33366 15.9993C6.52833 15.9993 7.72232 15.5433 8.63366 14.6327L15.3337 7.916L14.391 6.97333Z" fill="#EC008C"/>
</g>
<defs>
<clipPath id="clip0_402_408">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

</div>
<div className='w-[500px] bg-[#F5F5F5] border-[#E1E1E1] h-12 border rounded-full'>
<div className='flex justify-between items-center my-2 mx-6'>
    <p>Type your message here...</p>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_402_1801)">
<path d="M16 0L12 14.6667L6.58067 9.84067L11.782 4.35133L4.81 9.16933L0 8L16 0ZM6 11.112V16L8.172 13.046L6 11.112Z" fill="#6F757E"/>
</g>
<defs>
<clipPath id="clip0_402_1801">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

</div>
</div>
</div>
        </div>
    );
};

export default ChatBubble;