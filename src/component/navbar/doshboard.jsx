'use client';
import React from "react";
import Link from "next/link";
import { useState } from 'react'


export const Doshboard = ({ openSideBar }) => {
  

   
    const [taggle, setTaggle] = useState(false)
    const [isUesing, setisUesing] = useState(false)

    /*      const submitHandel = (e) => {
                console.log(e)
         } */

    return (
        <>
            <div className="flex justify-center items-center mt-[190px] hover:fill-currentn  hover:text-[#4d25ec] ">




                {openSideBar ? (
                   <ul className="mt-2 flex justify-center ">
                   <li className={`flex justify-center items-center px-2 w-[200px] py-2 rounded-[10px] hover:bg-[#08182F]  hover:fill-currentn  hover:text-[#4d25ec] ${openSideBar ? 'w-[80px] ' : ""}`}>
                        <svg className="ms-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M10.8939 22H13.1061C16.5526 22 18.2759 22 19.451 20.9882C20.626 19.9764 20.8697 18.2827 21.3572 14.8952L21.6359 12.9579C22.0154 10.3208 22.2051 9.00229 21.6646 7.87495C21.1242 6.7476 19.9738 6.06234 17.6731 4.69182L17.6731 4.69181L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495C1.79491 9.00229 1.98463 10.3208 2.36407 12.9579L2.64284 14.8952C3.13025 18.2827 3.37396 19.9764 4.54903 20.9882C5.72409 22 7.44737 22 10.8939 22Z" fill="currentColor"></path>
                            <path d="M9.44666 15.397C9.11389 15.1504 8.64418 15.2202 8.39752 15.5529C8.15086 15.8857 8.22067 16.3554 8.55343 16.6021C9.52585 17.3229 10.7151 17.7496 12 17.7496C13.285 17.7496 14.4742 17.3229 15.4467 16.6021C15.7794 16.3554 15.8492 15.8857 15.6026 15.5529C15.3559 15.2202 14.8862 15.1504 14.5534 15.397C13.8251 15.9369 12.9459 16.2496 12 16.2496C11.0541 16.2496 10.175 15.9369 9.44666 15.397Z" fill="#267DFF"></path>
                        </svg></li>

                </ul>
                ) :  <section className={`w-[280px] flex flex-Warp p-3  mx-[20px] rounded-[10px] hover:bg-[#08182F]  hover:fill-currentn  hover:text-[#4d25ec] ${openSideBar ? 'w-[80px] ' : ""}  `}>
                <svg className="me-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.3" d="M10.8939 22H13.1061C16.5526 22 18.2759 22 19.451 20.9882C20.626 19.9764 20.8697 18.2827 21.3572 14.8952L21.6359 12.9579C22.0154 10.3208 22.2051 9.00229 21.6646 7.87495C21.1242 6.7476 19.9738 6.06234 17.6731 4.69182L17.6731 4.69181L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495C1.79491 9.00229 1.98463 10.3208 2.36407 12.9579L2.64284 14.8952C3.13025 18.2827 3.37396 19.9764 4.54903 20.9882C5.72409 22 7.44737 22 10.8939 22Z" fill="currentColor"></path>
                    <path d="M9.44666 15.397C9.11389 15.1504 8.64418 15.2202 8.39752 15.5529C8.15086 15.8857 8.22067 16.3554 8.55343 16.6021C9.52585 17.3229 10.7151 17.7496 12 17.7496C13.285 17.7496 14.4742 17.3229 15.4467 16.6021C15.7794 16.3554 15.8492 15.8857 15.6026 15.5529C15.3559 15.2202 14.8862 15.1504 14.5534 15.397C13.8251 15.9369 12.9459 16.2496 12 16.2496C11.0541 16.2496 10.175 15.9369 9.44666 15.397Z" fill="#267DFF"></path>
                </svg>
                <p onClick={() => {
                    setTaggle(!taggle)

                }}
                    className="text-center text-[20px] text-[#267DFF]">Doshboard </p>

                <svg
                    id='rotate'
                    className={`ms-4 text-[29px] text-center  accordion-icon transition-transform duration-300 ${taggle ? 'transform rotate-180' : ''
                        }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16">
                    <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>

            </section>}

            </div>
            {taggle && (
                <ul className="flex text-[#9e9e9efa] justify-center flex-wrap">

                    <li className="w-2/3 mt-3  hover:text-[#1562d4] ">
                        <Link href="/" >
                            Analysis
                        </Link>
                    </li>
                    <li className="w-2/3  mt-3  hover:text-[#1562d4] ">
                        <Link href="/contacts">
                            Ecommerce
                        </Link>
                    </li>


                </ul>
            )}
        </>
    )
}



/* 
icon={faChevronDown}
className= */




