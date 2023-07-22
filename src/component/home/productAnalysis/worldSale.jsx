"use client";

import React, { useState } from 'react';
import SVGComponent from './chart/chartMap';
import  style from './chart/styles.css'
const WorldSale = () => {
  const [countryName, setCountryName] = useState('');

  const handleMouseEnter = (event) => {
    const countryId = event.target.id;
    const countryName = event.target.getAttribute('name');

    // Highlight country on mouse enter
    event.target.style.fill = '#267DFF';

    // Update the country name
    setCountryName(countryName);
  };

  const handleMouseLeave = (event) => {
    // Reset country color
    event.target.style.fill = '#28354A';

    // Clear the country name
    setCountryName('');
  };

  const countryNameStyles = {
    position: 'absolute',
    top: '50%',
    left: '55%',
    color: '#000',
    backgroundColor: 'white',
    padding: '5px',
    fontWeight: 'bold',
    zIndex: " 99",
    
  };

  return (
    <section className="shadow-inset  ring ring-offset-0 ring-indigo-300 ring-opacity-25 ring-offset-transparent ring-offset-inset sm:ring-offset-transparent sm:ring-offset-inset sm:ring-indigo-300 sm:ring-opacity-25 rounded-[10px] py-4 svg-container ">
      <figure className="w-full">
        <p className='p-3 font-medium'>World Sale</p>
       
        <SVGComponent
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
          <section className='p-3 flex flex-wrap'>
              <div className='flex ms-6   items-center '>
                   <p>India</p>
                   <span className='w-[200px] ms-4 bg-[#451809] relative after:h-full after:w-[90%] after:absolute after:top-0 after:left-0 after:rounded-[4px] after:bg-[#FF7C51] h-[7px] rounded-[4px]'></span>
              </div>
              <div className='flex  ms-6  items-center '>
                   <p>China</p>
                   <span className='w-[200px] ms-4 bg-[#413004] relative after:h-full after:w-[70%] after:absolute after:top-0 after:left-0 after:rounded-[4px] after:bg-[#FFC41F] h-[7px] rounded-[4px]'></span>
              </div>
              <div className='flex  ms-6  items-center '>
                   <p>Afghanistan</p>
                   <span className='w-[200px] ms-4 bg-[#08182F] relative after:h-full after:w-[80%] after:absolute after:top-0 after:left-0 after:rounded-[4px] after:bg-[#267DFF] h-[7px] rounded-[4px]'></span>
              </div>
         </section>
        {countryName && (
          <div className='rounded-[5px]' style={countryNameStyles}>
            <span className=''>{countryName}</span>
          </div>
        )}
      </figure>
    </section>
  );
};

export default WorldSale;
