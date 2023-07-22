'use client';



import React from 'react'
import Overview from './overview';
import Overviews from './overviews';
const OverviewWarpper = () => {
  return (
    <section className=' w-full mt-5 lg:w-[50%] flex flex-wrap justify-evenly '>

      <Overview />
      <Overviews />

    </section>
  )
}

export default OverviewWarpper


