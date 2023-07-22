'use client';
import React from 'react'

const Search = () => {
  return (
    <section className='w-1/3 hidden   lg:flex items-center   h-[100%]'>
      <div className='border-[2px] border-[#3B82F6] rounded-[25px] bg-[#0D1522] px-2 w-3/4 mx-auto flex items-center'>
        <svg width="28" height="28" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_87_857)">
            <circle cx="8.625" cy="8.625" r="7.125" stroke="#267DFF" stroke-width="2"></circle>
            <path opacity="0.3" d="M15 15L16.5 16.5" stroke="#267DFF" stroke-width="2" stroke-linecap="round"></path>
          </g>
          <defs>
            <clipPath id="clip0_87_857">
              <rect width="18" height="18" fill="white"></rect>
            </clipPath>
          </defs>
        </svg><input className='w-[94%] bg-transparent ps-2  py-3 border-none outline-none'
          type="text"
          name="" id="" 
          placeholder='Search....'
          />
      </div>
    </section>
  )
}

export default Search
