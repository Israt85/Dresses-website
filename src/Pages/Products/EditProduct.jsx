import React from 'react';
import img1 from '../../assets/Images/infoimg1.png'
import img2 from '../../assets/Images/Infoimg2.png'

const EditProduct = () => {
    return (
        <div>
            <h2 className='text-xl font-bold my-4'>Edit Product</h2>
            <div className='flex'>
                <div className='w-[230px] py-4 h-[260px] rounded-lg border'>
                    <div className='flex items-end my-2 mx-6 gap-2'>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_91_2627)">
                                <path d="M16.5 10.25V0.5H1.5V18.5H7.80675C11.4495 18.5 10.308 12.5 10.308 12.5C12.5648 13.0588 16.5 12.8142 16.5 10.25ZM13.5 5H4.5V4.25H13.5V5ZM13.5 7.25H4.5V6.5H13.5V7.25ZM13.5 9.5H4.5V8.75H13.5V9.5ZM11.9318 14.1672C13.467 14.5257 15.5355 13.958 16.5 13.283C15.3795 14.7815 12.5775 17.564 10.926 18.4437C11.793 17.5677 12.0983 15.2682 11.9318 14.1672Z" fill="#EC008C" />
                            </g>
                            <defs>
                                <clipPath id="clip0_91_2627">
                                    <rect width="18" height="18" fill="white" transform="translate(0 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>Product Information</p>
                    </div>
                    <div className='flex items-center my-4 mx-6 gap-2'>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_91_2630)">
                                <path d="M10.926 0.55625C12.5775 1.43675 15.3795 4.2185 16.5 5.717C15.5355 5.042 13.467 4.47425 11.9318 4.83275C12.0983 3.73175 11.793 1.43225 10.926 0.55625ZM16.5 8.75V18.5H1.5V0.5H7.80675C11.4495 0.5 10.308 6.5 10.308 6.5C12.5648 5.94125 16.5 6.18575 16.5 8.75ZM5.25 9.875C5.25 10.496 5.754 11 6.37575 11C6.996 11 7.5 10.496 7.5 9.875C7.5 9.254 6.996 8.75 6.37575 8.75C5.754 8.75 5.25 9.254 5.25 9.875ZM12.75 14.75L10.125 10.25L8.55525 12.476L7.57275 11.75L5.25 14.75H12.75Z" fill="#050F24" />
                            </g>
                            <defs>
                                <clipPath id="clip0_91_2630">
                                    <rect width="18" height="18" fill="white" transform="translate(0 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>

                        <p className='font-bold text-base'>Media Files</p>
                    </div>
                    <div className='flex items-center my-4 mx-6 gap-2'>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_91_2633)">
                                <path d="M9 0.5C4.02975 0.5 0 4.52975 0 9.5C0 14.4703 4.02975 18.5 9 18.5C13.9703 18.5 18 14.4703 18 9.5C18 4.52975 13.9703 0.5 9 0.5ZM11.25 6.5H10.2375C9.834 6.5 9.75 6.66575 9.75 7.0835V8H11.25L11.0933 9.5H9.75V14.75H7.5V9.5H6V8H7.5V6.269C7.5 4.94225 8.19825 4.25 9.77175 4.25H11.25V6.5Z" fill="#050F24" />
                            </g>
                            <defs>
                                <clipPath id="clip0_91_2633">
                                    <rect width="18" height="18" fill="white" transform="translate(0 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>


                        <p className='font-bold text-base'>Weight</p>
                    </div>
                    <div className='flex items-center my-4 mx-6 gap-2'>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_91_2636)">
                                <path d="M9 0.5C4.02975 0.5 0 4.52975 0 9.5C0 14.4703 4.02975 18.5 9 18.5C13.9703 18.5 18 14.4703 18 9.5C18 4.52975 13.9703 0.5 9 0.5ZM9.75 13.2103V14H9V13.2515C8.22375 13.238 7.4205 13.0527 6.75 12.7062L7.09125 11.4732C7.80825 11.7515 8.763 12.047 9.51 11.8783C10.3717 11.6832 10.548 10.7968 9.5955 10.37C8.89725 10.0445 6.762 9.76625 6.762 7.93775C6.762 6.9155 7.54125 6.0005 9 5.80025V5H9.75V5.7635C10.293 5.77775 10.902 5.87225 11.5815 6.0785L11.31 7.31375C10.734 7.11125 10.0972 6.9275 9.47775 6.965C8.361 7.03025 8.26275 7.997 9.042 8.402C10.326 9.00575 12 9.4535 12 11.0623C12.0015 12.3507 10.9928 13.0363 9.75 13.2103Z" fill="#050F24" />
                            </g>
                            <defs>
                                <clipPath id="clip0_91_2636">
                                    <rect width="18" height="18" fill="white" transform="translate(0 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>



                        <p className='font-bold text-base'>Pricing</p>
                    </div>
                    <div className='flex items-center my-6 mx-6 gap-2'>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0112 5.3795H3.01123V16.1968C3.01123 16.64 3.34723 17 3.76123 17H14.2612C14.6752 17 15.0112 16.64 15.0112 16.1968C15.0112 13.268 15.0112 5.3795 15.0112 5.3795ZM10.6987 7.25C11.0092 7.25 11.2612 7.502 11.2612 7.8125V14.1875C11.2612 14.498 11.0092 14.75 10.6987 14.75C10.3882 14.75 10.1362 14.498 10.1362 14.1875V7.8125C10.1362 7.502 10.3882 7.25 10.6987 7.25ZM7.32373 7.25C7.63423 7.25 7.88623 7.502 7.88623 7.8125V14.1875C7.88623 14.498 7.63423 14.75 7.32373 14.75C7.01323 14.75 6.76123 14.498 6.76123 14.1875V7.8125C6.76123 7.502 7.01323 7.25 7.32373 7.25ZM6.76123 3.5V2.75C6.76123 2.34875 7.11673 2 7.51123 2H10.5112C10.9057 2 11.2612 2.34875 11.2612 2.75V3.5H15.2017C15.5107 3.5 15.7612 3.75125 15.7612 4.06025C15.7612 4.36925 15.5107 4.6205 15.2017 4.6205H2.82148C2.51173 4.6205 2.26123 4.36925 2.26123 4.06025C2.26123 3.75125 2.51173 3.5 2.82148 3.5H6.76123ZM10.1362 3.5V3.125H7.88623V3.5H10.1362Z" fill="#050F24" />
                        </svg>




                        <p className='font-bold text-base'>Delete product</p>
                    </div>
                </div>
                <div className='w-[750px] mx-auto'>
                    <div className='w-full h-32 rounded-xl border'>
                        <div className='flex gap-2 items-center mt-6'>
                            <p className='text-lg font-bold font-Poppins ml-4'>
                                Product Description </p>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#050F24" />
                                <path d="M7.6878 14.3953C6.8874 16.7449 6.7998 16.9345 6.7998 17.1475C6.7998 17.4643 7.0758 17.5969 7.2492 17.5969C7.4604 17.5969 7.65001 17.5147 9.99361 16.7017L7.6878 14.3953ZM8.3238 13.7587L10.6314 16.0663L17.424 9.27968C17.541 9.16268 17.5998 9.00968 17.5998 8.85548C17.5998 8.70248 17.541 8.54947 17.424 8.43187C17.0088 8.01727 16.3788 7.38788 15.963 6.97268C15.846 6.85568 15.6924 6.79688 15.5388 6.79688C15.3864 6.79688 15.2328 6.85568 15.1152 6.97268L8.3238 13.7587Z" fill="white" />
                            </svg>

                        </div>
                        <p className='w-80 text-[#6F757E] mx-4'>The place is close to Barceloneta Beach and
                            bus stop just 2 min by walk and near to.</p>
                    </div>

                    {/* Product Information */}
                    <div className='w-full border rounded-xl my-4 h-[350px]'>
                        <h2 className='text-xl font-bold p-4'>Product Information</h2>
                        <div className='flex justify-between py-3 mx-2'>
                            <div className='flex gap-2 mx-2 flex-col'>
                                <label>Name</label>
                                <input className='w-80 rounded-full h-10 border bg-[#E1E1E1]' type="text" placeholder='       Minimal soofa' />
                            </div>
                            <div className='flex gap-2 mx-2 flex-col'>
                                <label>Weight</label>
                                <input className='w-80 rounded-full h-10 border bg-[#E1E1E1]' type="text" placeholder='       2' />
                            </div>
                        </div>
                        <div className='flex justify-between py-3 mx-2'>
                            <div className='flex gap-2 mx-2 flex-col'>
                                <label>Category</label>
                                <select className='w-80 px-6 rounded-full h-10 border bg-[#E1E1E1]' name="" id="">
                                    <option value="Clothing">Clothing</option>
                                </select>
                            </div>
                            <div className='flex gap-2 mx-2 flex-col'>
                                <label>Colour</label>
                                <select className='w-80 px-6 rounded-full h-10 border bg-[#E1E1E1]' name="" id="">
                                    <option value="3">3</option>
                                </select>

                                {/* <input className='w-80 rounded-full h-10 border bg-[#E1E1E1]' type="text" placeholder='       2' /> */}
                            </div>
                        </div>
                        <div className='flex justify-end mr-4 my-4'>
                            <button className='btn w-32 text-white rounded-full bg-[#EC008C]'>Save</button>
                        </div>
                    </div>

                    {/* Media files */}
                    <div className='w-full border rounded-xl my-4 h-[350px]'>
                        <div className='flex justify-between m-6'>
                            <p className='text-xl font-bold'>Media Files</p>
                            <p className='text-[#EC008C]'>Upload more files</p>
                        </div>
                        <div className='w-[700px] my-4 flex justify-between h-20 border mx-auto'>
                            <div className='flex ml-2 gap-2 items-center'>
                                <img className='w-16 h-16 rounded-full' src={img1} alt="" />
                                <div>
                                    <p className='text-lg'>Minimal soofa.PNG</p>
                                    <p className='text-[#6F757E]'>45 Kb</p>
                                </div>
                            </div>
                            <div className='flex gap-2 items-center mr-2'>
                                <p className='w-10 flex justify-center items-center h-10 rounded-full bg-[#E1E1E1]'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.98715 10.4388C2.09782 13.0494 2.00049 13.2601 2.00049 13.4968C2.00049 13.8488 2.30716 13.9961 2.49982 13.9961C2.73449 13.9961 2.94516 13.9048 5.54916 13.0014L2.98715 10.4388ZM3.69382 9.73143L6.25782 12.2954L13.8052 4.75476C13.9352 4.62476 14.0005 4.45476 14.0005 4.28343C14.0005 4.11343 13.9352 3.94343 13.8052 3.81276C13.3438 3.35209 12.6438 2.65276 12.1818 2.19143C12.0518 2.06143 11.8812 1.99609 11.7105 1.99609C11.5412 1.99609 11.3705 2.06143 11.2398 2.19143L3.69382 9.73143Z" fill="#EC008C" />
                                    </svg>

                                </p>
                                <p className='w-10 flex justify-center items-center h-10 rounded-full bg-[#E1E1E1]'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.3431 4.33798H2.67643V13.9533C2.67643 14.3473 2.9751 14.6673 3.3431 14.6673H12.6764C13.0444 14.6673 13.3431 14.3473 13.3431 13.9533C13.3431 11.35 13.3431 4.33798 13.3431 4.33798ZM9.50977 6.00065C9.78577 6.00065 10.0098 6.22465 10.0098 6.50065V12.1673C10.0098 12.4433 9.78577 12.6673 9.50977 12.6673C9.23377 12.6673 9.00977 12.4433 9.00977 12.1673V6.50065C9.00977 6.22465 9.23377 6.00065 9.50977 6.00065ZM6.50977 6.00065C6.78577 6.00065 7.00977 6.22465 7.00977 6.50065V12.1673C7.00977 12.4433 6.78577 12.6673 6.50977 12.6673C6.23377 12.6673 6.00977 12.4433 6.00977 12.1673V6.50065C6.00977 6.22465 6.23377 6.00065 6.50977 6.00065ZM6.00977 2.66732V2.00065C6.00977 1.64398 6.32577 1.33398 6.67643 1.33398H9.3431C9.69377 1.33398 10.0098 1.64398 10.0098 2.00065V2.66732H13.5124C13.7871 2.66732 14.0098 2.89065 14.0098 3.16532C14.0098 3.43998 13.7871 3.66332 13.5124 3.66332H2.50777C2.23243 3.66332 2.00977 3.43998 2.00977 3.16532C2.00977 2.89065 2.23243 2.66732 2.50777 2.66732H6.00977ZM9.00977 2.66732V2.33398H7.00977V2.66732H9.00977Z" fill="#EC008C" />
                                    </svg>


                                </p>
                            </div>
                        </div>
                        <div className='w-[700px] my-4 flex justify-between h-20 border mx-auto'>
                            <div className='flex ml-2 gap-2 items-center'>
                                <img className='w-16 h-16 rounded-full' src={img2} alt="" />
                                <div>
                                    <p className='text-lg'>Minimal soofa.jpg</p>
                                    <p className='text-[#6F757E]'>32 Kb</p>
                                </div>
                            </div>
                            <div className='flex gap-2 items-center mr-2'>
                                <p className='w-10 flex justify-center items-center h-10 rounded-full bg-[#E1E1E1]'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.98715 10.4388C2.09782 13.0494 2.00049 13.2601 2.00049 13.4968C2.00049 13.8488 2.30716 13.9961 2.49982 13.9961C2.73449 13.9961 2.94516 13.9048 5.54916 13.0014L2.98715 10.4388ZM3.69382 9.73143L6.25782 12.2954L13.8052 4.75476C13.9352 4.62476 14.0005 4.45476 14.0005 4.28343C14.0005 4.11343 13.9352 3.94343 13.8052 3.81276C13.3438 3.35209 12.6438 2.65276 12.1818 2.19143C12.0518 2.06143 11.8812 1.99609 11.7105 1.99609C11.5412 1.99609 11.3705 2.06143 11.2398 2.19143L3.69382 9.73143Z" fill="#EC008C" />
                                    </svg>

                                </p>
                                <p className='w-10 flex justify-center items-center h-10 rounded-full bg-[#E1E1E1]'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.3431 4.33798H2.67643V13.9533C2.67643 14.3473 2.9751 14.6673 3.3431 14.6673H12.6764C13.0444 14.6673 13.3431 14.3473 13.3431 13.9533C13.3431 11.35 13.3431 4.33798 13.3431 4.33798ZM9.50977 6.00065C9.78577 6.00065 10.0098 6.22465 10.0098 6.50065V12.1673C10.0098 12.4433 9.78577 12.6673 9.50977 12.6673C9.23377 12.6673 9.00977 12.4433 9.00977 12.1673V6.50065C9.00977 6.22465 9.23377 6.00065 9.50977 6.00065ZM6.50977 6.00065C6.78577 6.00065 7.00977 6.22465 7.00977 6.50065V12.1673C7.00977 12.4433 6.78577 12.6673 6.50977 12.6673C6.23377 12.6673 6.00977 12.4433 6.00977 12.1673V6.50065C6.00977 6.22465 6.23377 6.00065 6.50977 6.00065ZM6.00977 2.66732V2.00065C6.00977 1.64398 6.32577 1.33398 6.67643 1.33398H9.3431C9.69377 1.33398 10.0098 1.64398 10.0098 2.00065V2.66732H13.5124C13.7871 2.66732 14.0098 2.89065 14.0098 3.16532C14.0098 3.43998 13.7871 3.66332 13.5124 3.66332H2.50777C2.23243 3.66332 2.00977 3.43998 2.00977 3.16532C2.00977 2.89065 2.23243 2.66732 2.50777 2.66732H6.00977ZM9.00977 2.66732V2.33398H7.00977V2.66732H9.00977Z" fill="#EC008C" />
                                    </svg>


                                </p>
                            </div>
                        </div>
                        <div className='flex justify-end mr-4 my-4'>
                            <button className='btn w-32 text-white rounded-full bg-[#EC008C]'>Save</button>
                        </div>
                    </div>

                    {/* Weight */}
                    <div className='w-full border rounded-xl my-4 h-[350px]'>
                        <h2 className='text-xl font-bold p-4'>Weight</h2>
                        <div className='flex justify-between py-3 mx-2'>
                            <div className='flex gap-2 mx-2 flex-col'>
                                <label>Band Size</label>
                                <select className='w-80 px-6 rounded-full h-10 border bg-[#E1E1E1]' name="" id="">
                                    <option value="33">33</option>
                                </select>
                            </div>
                            <div className='flex gap-2 mx-2 flex-col'>
                                <label>Cup Size</label>
                                <select className='w-80 px-6 rounded-full h-10 border bg-[#E1E1E1]' name="" id="">
                                    <option value="c">c</option>
                                </select>
                            </div>

                        </div>
                        <div className='flex justify-between py-3 mx-2'>

                            <div className='flex gap-2 mx-2 flex-col'>
                                <label>Size</label>
                                <select className='w-80 px-6 rounded-full h-10 border bg-[#E1E1E1]' name="" id="">
                                    <option value="small">small</option>
                                </select>
                            </div>
                            <div className='flex gap-2 mx-2 flex-col'>
                                <label>Colour</label>
                                <select className='w-80 px-6 rounded-full h-10 border bg-[#E1E1E1]' name="" id="">
                                    <option value="Black">Black</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex justify-end mr-4 my-4'>
                            <button className='btn w-32 text-white rounded-full bg-[#EC008C]'>Save</button>
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className='w-full border rounded-xl my-4 h-[350px]'>
                        <h2 className='text-xl font-bold p-4'>Pricing</h2>
                        <div className='flex justify-between py-3 mx-2'>
                            <div className='flex gap-2 mx-2 flex-col'>
                                <label>Price</label>
                                <input className='w-80 relative rounded-full h-10 border bg-[#E1E1E1]' type="text" placeholder='      RS.55' />
                               <div className='absolute w-72 flex justify-end mt-10 pt-1'>
                               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_91_2701)">
                                        <path d="M8 0C3.582 0 0 3.582 0 8C0 12.418 3.582 16 8 16C12.418 16 16 12.418 16 8C16 3.582 12.418 0 8 0ZM8.66667 11.298V12H8V11.3347C7.31 11.3227 6.596 11.158 6 10.85L6.30333 9.754C6.94067 10.0013 7.78933 10.264 8.45333 10.114C9.21933 9.94067 9.376 9.15267 8.52933 8.77333C7.90867 8.484 6.01067 8.23667 6.01067 6.61133C6.01067 5.70267 6.70333 4.88933 8 4.71133V4H8.66667V4.67867C9.14933 4.69133 9.69067 4.77533 10.2947 4.95867L10.0533 6.05667C9.54133 5.87667 8.97533 5.71333 8.42467 5.74667C7.432 5.80467 7.34467 6.664 8.03733 7.024C9.17867 7.56067 10.6667 7.95867 10.6667 9.38867C10.668 10.534 9.77133 11.1433 8.66667 11.298Z" fill="#6F757E" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_91_2701">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                               </div>

                            </div>
                            <div className='flex gap-2 mx-2 flex-col'>
                                <label>Delivery Charges</label>
                                <select className='w-80 px-6 rounded-full h-10 border bg-[#E1E1E1]' name="" id="">
                                    <option value="RS.55">RS.55</option>
                                </select>
                            </div>

                        </div>
                        <div className='flex justify-between py-3 mx-2'>

                            <div className='flex gap-2 mx-2 flex-col'>
                                <label>Available Discount</label>
                                <input  className='w-80 px-6 rounded-full h-10 border bg-[#E1E1E1]' type="text" placeholder='RS.55' />
                            </div>
                            <div className='flex gap-2 mx-2 flex-col'>
                                <label>Tax</label>
                                <select className='w-80 px-6 rounded-full h-10 border bg-[#E1E1E1]' name="" id="">
                                    <option value="RS.55">RS.55</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex justify-end mr-4 my-4'>
                            <button className='btn w-32 text-white rounded-full bg-[#EC008C]'>Save</button>
                        </div>
                    </div>

                    {/* Delete Product */}
                    <div className='w-full h-[250px] rounded-xl mb-10 border'>
                       <h2 className='text-xl font-bold m-6'>Delete Product</h2>
                       <p className='w-[708px] mx-auto'>When you delete your product, you lose access to their previous records, and we permanently delete 
                       your product data. You can cancel the deletion for 14 days. </p>
                       <div className='flex my-4 items-center mx-6 gap-2'>
                       <input className='w-6 h-6' type="checkbox" name="" id="" />
                       <p>Confirm that i want to delete my account</p>
                       </div>
                       <div className='flex justify-end gap-2 items-center'>
                        <button className='btn w-40 rounded-full border-[#EC008C] text-[#EC008C]'>Learn More</button>
                        <button className='btn w-40 rounded-full bg-[#EC008C] text-white'>Delete</button>
                       </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EditProduct;