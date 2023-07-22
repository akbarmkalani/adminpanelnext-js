"use client";







import React from 'react'

const Saved = () => {
    return (
        <section className='w-full md:w-[270px] mt-3 m-1 bg-[#050C17] shadow-inset ring ring-offset-0 ring-indigo-300 ring-opacity-25 ring-offset-transparent ring-offset-inset sm:ring-offset-transparent sm:ring-offset-inset sm:ring-indigo-300 sm:ring-opacity-25 rounded-[10px] '>

            <div className='p-3'>

                <h3 className='flex items-center '>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M21 11.0975V16.0909C21 19.1875 21 20.7358 20.2659 21.4123C19.9158 21.735 19.4739 21.9377 19.0031 21.9915C18.016 22.1045 16.8633 21.0849 14.5578 19.0458C13.5388 18.1445 13.0292 17.6938 12.4397 17.5751C12.1494 17.5166 11.8506 17.5166 11.5603 17.5751C10.9708 17.6938 10.4612 18.1445 9.44216 19.0458C7.13673 21.0849 5.98402 22.1045 4.99692 21.9915C4.52615 21.9377 4.08421 21.735 3.73411 21.4123C3 20.7358 3 19.1875 3 16.0909V11.0975C3 6.80891 3 4.6646 4.31802 3.3323C5.63604 2 7.75736 2 12 2C16.2426 2 18.364 2 19.682 3.3323C21 4.6646 21 6.80891 21 11.0975Z" fill="#FF7C51"></path>
                        <path d="M9 5.25C8.58579 5.25 8.25 5.58579 8.25 6C8.25 6.41421 8.58579 6.75 9 6.75H15C15.4142 6.75 15.75 6.41421 15.75 6C15.75 5.58579 15.4142 5.25 15 5.25H9Z" fill="#FF7C51"></path>
                    </svg>
                    <span className=' ms-3 text-[25px] font-semibold'>Followers</span>
                </h3>
                <p className='mt-4 flex items-center'>
                    <span className='flex text-[20px]  font-bold'>140K</span>
                    <span className='text-[#28354A] ms-2 font-semibold'>This week</span>
                    <span className='ms-2 px-[5px] bg-[#2a825c5e] text-green-500  rounded-[10px] flex items-center'>
                        3.47%
                        <svg className='ms-2' width="10" height="20" class="inline-block" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.73684 9.21053C5.73684 9.64654 5.38338 10 4.94737 10C4.51135 10 4.15789 9.64654 4.15789 9.21053L4.15789 2.69543L2.34772 4.50561C2.03941 4.81392 1.53954 4.81392 1.23123 4.50561C0.922923 4.1973 0.922923 3.69743 1.23123 3.38913L4.38913 0.231232C4.53718 0.0831764 4.73799 -1.83028e-08 4.94737 0C5.15675 1.83066e-08 5.35756 0.0831765 5.50561 0.231232L8.66351 3.38913C8.97181 3.69743 8.97181 4.1973 8.66351 4.50561C8.3552 4.81392 7.85533 4.81392 7.54702 4.50561L5.73684 2.69543V9.21053Z" fill="currentColor"></path>
                        </svg>
                    </span>
                </p>
            </div>

        </section>
    )
}

export default Saved
