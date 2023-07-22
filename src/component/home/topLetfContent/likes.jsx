"use client";





import React from 'react'

const Likes = () => {
    return (
        <section className='w-full md:w-[270px]  m-1 mt-3  bg-[#050C17] shadow-inset ring ring-offset-0 ring-indigo-300 ring-opacity-25 ring-offset-transparent ring-offset-inset sm:ring-offset-transparent sm:ring-offset-inset sm:ring-indigo-300 sm:ring-opacity-25 rounded-[10px]'>

            <div className=' p-3 m-2'>

                <h3 className='flex items-center '>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.2696 16.265L20.9751 12.1852C21.1514 11.1662 20.3677 10.2342 19.3348 10.2342H14.1537C13.6402 10.2342 13.2491 9.77328 13.3323 9.26598L13.9949 5.22142C14.1026 4.56435 14.0719 3.892 13.9047 3.24752C13.7662 2.71364 13.3543 2.28495 12.8126 2.11093L12.6676 2.06435C12.3402 1.95918 11.9829 1.98365 11.6742 2.13239C11.3344 2.29611 11.0859 2.59473 10.9938 2.94989L10.518 4.78374C10.3667 5.36723 10.1462 5.93045 9.86194 6.46262C9.44659 7.24017 8.8044 7.86246 8.13687 8.43769L6.69813 9.67749C6.29247 10.0271 6.07944 10.5506 6.1256 11.0844L6.93776 20.4771C7.01226 21.3386 7.73256 22 8.59634 22H13.245C16.7263 22 19.6973 19.5744 20.2696 16.265Z" fill="#FF51A4"></path>
                        <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M2.96767 9.48508C3.36893 9.46777 3.71261 9.76963 3.74721 10.1698L4.71881 21.4063C4.78122 22.1281 4.21268 22.7502 3.48671 22.7502C2.80289 22.7502 2.25 22.1954 2.25 21.5129V10.2344C2.25 9.83275 2.5664 9.5024 2.96767 9.48508Z" fill="#FF51A4"></path>
                    </svg>
                    <span className=' ms-3 text-[25px] font-semibold'>Followers</span>
                </h3>

                <p className='mt-4 flex items-center'>
                    <span className='flex text-[20px]  font-bold'>340K</span>
                    <span className='text-[#28354A] ms-2 font-semibold'>This week</span>
                    <span className='ms-2 px-[5px] bg-[#822a2a5e] text-red-500  rounded-[10px] flex items-center'>
                        3.47%
                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.23684 0.789474C6.23684 0.353459 5.88338 0 5.44737 0C5.01135 0 4.65789 0.353459 4.65789 0.789474L4.65789 7.30457L2.84772 5.49439C2.53941 5.18608 2.03954 5.18608 1.73123 5.49439C1.42292 5.8027 1.42292 6.30257 1.73123 6.61087L4.88913 9.76877C5.03718 9.91682 5.23799 10 5.44737 10C5.65675 10 5.85756 9.91682 6.00561 9.76877L9.16351 6.61087C9.47181 6.30257 9.47181 5.8027 9.16351 5.49439C8.8552 5.18608 8.35533 5.18608 8.04702 5.49439L6.23684 7.30457V0.789474Z" fill="currentColor"></path>
                        </svg>
                    </span>
                </p>
            </div>

        </section>
    )
}

export default Likes
