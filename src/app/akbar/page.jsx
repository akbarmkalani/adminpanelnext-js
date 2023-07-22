"use client";

import React from "react";
import style from "./workingCapital/style.css"
import Link from "next/link";
import Overview from "./overview/view";
 import Working from "./workingCapital/working";
  import OderList from "./orderList/oderList";
  import Footer from "@/component/home/homeFooter/footer";
const Akbar = ({ showMain }) => {

  /* const list = ["Overview","Order List","Accounts","Payments"] */
  const list = ["Overview", "Order List", "Accounts", "Payments"]
  return (


    <>
      <section className='mt-[90px] w-full'>
      <ul className='flex w-full ps-6 pt-6  '>
        {list.map((val, index) => (
          <li key={index}
           className='mx-2 md:mx-4  text-[17px] font-bold text-[#60779b]'
           >
            <Link href="/akbar">{val}</Link>
          </li>
        ))}
      </ul>
        <div className='p-3 mt-8   flex flex-wrap'>
              <Overview/> 
              <Working/> 
              <OderList/> 
              < Footer />
        </div>




      </section>



    </>
  )
}
export default Akbar;





















/* 


<ul className='flex w-full ps-6 pt-6  '>
        {list.map((val, index) => (
          <li key={index}
           className='mx-4  text-[17px] font-bold text-[#60779b]'
           >
            <Link href="/akbar">{val}</Link>
          </li>
        ))}
      </ul>
 */