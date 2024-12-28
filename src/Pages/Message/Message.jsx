import React from 'react';

const Message = () => {
    return (
        <div className='font-Poppins min-h-screen'>
            <p className='m-6 text-xl font-bold font-Poppins'>Message</p>
            <div className='flex gap-10'>
                <div className='w-[300px] h-[800px] border'>

                </div>
                <div className='w-[690px] h-[800px] border'>
                     <p className='w-full border-b-2 h-20'>
                        <img className='w-16 h-16 rounded-full' src="https://s3-alpha-sig.figma.com/img/61a0/b47a/7c5376560de2a64cb611049443695aae?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hF0pKxsl9fK8Q45gcM7iBpKKeRKtInPqvEa1CI9ocfNUCDNh8E9zceaGi5jypGHUX6PTnxI9D3~aAP9nZ~Tri4dPtq2yaPLvjXpto9FihWmHPOwWr7lyIyOw5XDRiGkMWc7r6wq-f2rOxEPx1YWmRqX~f60uRssghi41dgY901KdFdyjcNgvHWKIaYO9-ZPIJ~JnvSHZcjRBaFtpOUvka~Jo0l-NRbwL0ObUst0EDFdVktTte9LrHhCbXN4qU-zp-AuaDFCqMQ80B2PyQ60iYjfPtlma2O4fiaPzIOVOzdhN2gH95py5xcNFbKvIFDTmuZ8JY4cAzwGd0aUC1B6vOA__" alt="" />
                        <div className="badge badge-primary badge-xs"></div>
                        <p>
                            <p>Roselle Ehrman</p>
                            <p>online</p>
                        </p>
                     </p>
                </div>
            </div>
        </div>
    );
};

export default Message;