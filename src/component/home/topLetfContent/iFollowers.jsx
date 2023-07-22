'use client';

import React from 'react'

const Followers = () => {

  return (
    <section className='w-full md:w-[270px]  m-1 bg-[#050C17] shadow-inset ring ring-offset-0 ring-indigo-300 ring-opacity-25 ring-offset-transparent ring-offset-inset sm:ring-offset-transparent sm:ring-offset-inset sm:ring-indigo-300 sm:ring-opacity-25 rounded-[10px] '>

      <div className='p-3 '>

        <h3 className='flex items-center '>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.3" cx="15" cy="6" r="3" fill="#7B6AFE"></circle>
            <ellipse opacity="0.3" cx="16" cy="17" rx="5" ry="3" fill="#7B6AFE"></ellipse>
            <circle cx="9.00098" cy="6" r="4" fill="#7B6AFE"></circle>
            <ellipse cx="9.00098" cy="17.001" rx="7" ry="4" fill="#7B6AFE"></ellipse>
          </svg>
          <span className=' ms-3 text-[25px] font-semibold'>Followers</span>
        </h3>

        <p className='my-4 flex items-center'>
          <span className='flex text-[20px]  font-bold'>300K</span>
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

export default Followers
