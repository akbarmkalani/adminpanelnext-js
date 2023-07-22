"use client";



  import React, { useEffect, useState } from 'react'
   import axios from 'axios'
    import ProductList from './productList';

  const OderList = () => {
       const [data , setData]  = useState([])
       console.log("Hella",data);
 

      useEffect(() => {
         axios.get('https://6460e1a4185dd9877e326a5b.mockapi.io/api/v/Oderlist')
         .then(data => {
          
           setData(data?.data)
         

         })
      })
    return (
      <section className=' p-6 mx-auto w-[97%]  mt-7 bg-[#050C17] shadow-inset ring ring-offset-0 ring-indigo-300 ring-opacity-25 ring-offset-transparent ring-offset-inset sm:ring-offset-transparent sm:ring-offset-inset sm:ring-indigo-300 sm:ring-opacity-25 rounded-[10px]'>
         <p className='p-5 text-[19px] font-semibold'>Order List</p>
       <ProductList  data={data} />
      </section>
    )
  }
  
  export default OderList
  