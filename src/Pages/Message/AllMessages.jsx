import React, { useEffect, useState } from 'react';

const AllMessages = () => {
    const [chatData, setChatData]= useState([])
    useEffect(()=>{
        fetch("/Chat.json")
        .then(res=>res.json())
        .then(data=>{
            setChatData(data)
            console.log(data)
        })
    },[])
    
    return (
        <div className='flex flex-col '>
            <p className='text-xl m-6 font-semibold'>New Messages</p>
            <div className='w-[320px] my-6 bg-[#EC008C]  flex items-center px-2 mx-auto h-16  rounded-3xl'>
            <p className='w-full mx-auto flex px-1 gap-2'>
                       <div className='relative'>
                       <img className='w-10 h-10 rounded-full' src="https://s3-alpha-sig.figma.com/img/048b/28e2/5e2bc8b3a1b8a60983846492fad84a63?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=loPNmRlnv59KETVS9gP~FvXSbcuHWFIDtUEQtkpfYR7SP~qAdMzdqmuFoWoj9H3tbiLa7bIR0t5g0nxyzoiK5uFbkS28UKwY2PHqKe0it1unh-H6v9kh0wdAw~FccRv62OwUpp2ldJirQ6zcXqUpPoJqGCPfiCzHCUXn83mg8JQz9NipRYRA41ECg1oxp9xVjXtkYWP-QlyqCJIxYwnavelu-l5l7tf4b6dJHhBKZxJ-PS5LIOpdy6tl490By34wOgOnPgiQJFWZqbpNzqC4OBSyYlfEa9ZH0Yj8ss37OndqfFfevH4JLN4RNu0xe~hQVKNws0I3Vh0CpFu8ZW4tqA__" alt="" />
                       <div className="absolute top-0 left-8 badge badge-secondary badge-xs"></div>
                       </div>
                        <p className='text-white'>
                            <p>Jane Smith </p>
                            <p className=''>Voice message 00:30</p>
                        </p>
                        <p className=' text-white text-sm'>1 Day ago</p>
                     </p>
            </div>
           {
            chatData?.map(data=>
                <div key={data?.id}>
                    <div className='w-[320px] flex my-2  items-center px-2 mx-auto h-16  rounded-3xl'>
            <p className='w-full mx-auto flex px-1 gap-2 h-24'>
                       <div className='relative'>
                       <img className='w-10 h-10 rounded-full' src={data?.img} alt="" />
                       <div className={`absolute top-0 left-6 badge badge-secondary badge-xs ${data?.id == 6? 'block': data?.id == 7?'block': data?.id==9? 'block':'hidden'}`}></div>
                       </div>
                        <p className=''>
                            <p>{data?.name} </p>
                            <p className=''>{data?.msg}</p>
                        </p>
                        <p className=' text-sm'>{data?.time}</p>
                     </p>
            </div>
                </div>
            )
           }
            
            {/* <div className='w-[320px] flex my-2  items-center px-2 mx-auto h-16  rounded-3xl'>
            <p className='w-full mx-auto flex px-1 gap-2 h-24'>
                       <div className='relative'>
                       <img className='w-10 h-10 rounded-full' src="https://s3-alpha-sig.figma.com/img/048b/28e2/5e2bc8b3a1b8a60983846492fad84a63?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=loPNmRlnv59KETVS9gP~FvXSbcuHWFIDtUEQtkpfYR7SP~qAdMzdqmuFoWoj9H3tbiLa7bIR0t5g0nxyzoiK5uFbkS28UKwY2PHqKe0it1unh-H6v9kh0wdAw~FccRv62OwUpp2ldJirQ6zcXqUpPoJqGCPfiCzHCUXn83mg8JQz9NipRYRA41ECg1oxp9xVjXtkYWP-QlyqCJIxYwnavelu-l5l7tf4b6dJHhBKZxJ-PS5LIOpdy6tl490By34wOgOnPgiQJFWZqbpNzqC4OBSyYlfEa9ZH0Yj8ss37OndqfFfevH4JLN4RNu0xe~hQVKNws0I3Vh0CpFu8ZW4tqA__" alt="" />
                       <div className="absolute top-0 left-8 badge badge-secondary badge-xs"></div>
                       </div>
                        <p className=''>
                            <p>Jane Smith </p>
                            <p className=''>Voice message 00:30</p>
                        </p>
                        <p className=' text-sm'>1 Day ago</p>
                     </p>
            </div> */}

            {/* <div className='w-[320px] flex my-2  items-center px-2 mx-auto h-16  rounded-3xl'>
            <p className='w-full mx-auto flex px-1 gap-2 h-24'>
                       <div className='relative'>
                       <img className='w-10 h-10 rounded-full' src="https://s3-alpha-sig.figma.com/img/048b/28e2/5e2bc8b3a1b8a60983846492fad84a63?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=loPNmRlnv59KETVS9gP~FvXSbcuHWFIDtUEQtkpfYR7SP~qAdMzdqmuFoWoj9H3tbiLa7bIR0t5g0nxyzoiK5uFbkS28UKwY2PHqKe0it1unh-H6v9kh0wdAw~FccRv62OwUpp2ldJirQ6zcXqUpPoJqGCPfiCzHCUXn83mg8JQz9NipRYRA41ECg1oxp9xVjXtkYWP-QlyqCJIxYwnavelu-l5l7tf4b6dJHhBKZxJ-PS5LIOpdy6tl490By34wOgOnPgiQJFWZqbpNzqC4OBSyYlfEa9ZH0Yj8ss37OndqfFfevH4JLN4RNu0xe~hQVKNws0I3Vh0CpFu8ZW4tqA__" alt="" />
                       <div className="absolute top-0 left-8 badge badge-secondary badge-xs"></div>
                       </div>
                        <p className=''>
                            <p>Jane Smith </p>
                            <p className=''>Voice message 00:30</p>
                        </p>
                        <p className=' text-sm'>1 Day ago</p>
                     </p>
            </div> */}

        </div>
      
    );
};

export default AllMessages;