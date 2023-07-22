"use client";
import React, { useState } from "react";

import Image from "next/image";
import { Doshboard } from "./doshboard";
import { SocialApp } from "./SocialApp";
import NavbarsUrl from "./navbarsUrl";

import AsideNabar from "./asideNabar";
import Link from "next/link";

export const Navbar = () => {


  const [openSideBar, setOpenSideBar] = useState(false)


  const submitHandle = (items) => {
    setOpenSideBar(!openSideBar)

  }


  return (
    <aside className={`w-[260px]  border-r border-[#28354A]    bg-[#050C17] ${openSideBar ? 'w-[80px]' : ''
      }`}>
      <div className={` fixed w-[260px] py-2  bg-[#020d1a] mt-[67px] top-0 ${openSideBar ? 'w-[80px]' : ''
        } `}>
        <figure className="flex  h-[100%]  bg-[#070f1d]  justify-center items-center mt-7">
          {openSideBar ? (
            <Link href="#">
              <Image
                src="./../../img/img3.svg"

                alt="Picture"
                width={30}
                height={30}
              />
            </Link>
          ) : (
            <Link href="#">

              <Image
                src="./../../img/img2.svg"
                alt="Another Picture"
                width={170}
                height={100}
              />
            </Link>
          )}
        </figure>
        <div
          className="flex  items-center justify-center"
          onClick={submitHandle}

        >
          <span className="h-[2px] flex bg-gray-500 w-[90%]"></span>
          <svg 
           className={`  ms-4 w-[35px] h-[35px]  text-center  accordion-icon transition-transform duration-300 ${openSideBar ? 'transform rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            <path fill-rule="evenodd"  d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" opacity="0.3" />
          </svg>
        </div>
      </div>

      <Doshboard openSideBar={openSideBar} />
      <SocialApp openSideBar={openSideBar} />
      {openSideBar && <NavbarsUrl openSideBar={openSideBar} />}
      {!openSideBar && < AsideNabar />}
    </aside>
  );
};
