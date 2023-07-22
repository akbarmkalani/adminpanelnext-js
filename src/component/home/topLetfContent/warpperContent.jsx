"use client";


import Followers from './iFollowers';
import RigthContent from './rigthContent';
import Likes from './likes';
import Saved from './saved';

import React from 'react'

const WarpperContent = () => {
  return (
    <div className='w-full mt-5 lg:w-[50%] flex flex-wrap justify-evenly'>
         <RigthContent/>
          <Followers />
          <Likes/>
          <Saved/>
    </div>
  )
}

export default WarpperContent
