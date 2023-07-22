'use client';
import Search from "./search";
import ChatTop from "./in-ch-st";
import LeftHeader from "./leftHeader";
import { useState } from "react";
export const Header = ({setDark, dark}) => {


     const  [darkMode, setDarkMode] = useState(setDark)


    return(
         <>
        <section className="flex border-b border-[#28354A] bg-[#050C17] fixed z-10  right-0 w-full h-[80px]  ">

         <Search/>
         <ChatTop/>
         <LeftHeader/>
        </section>

         </>
    )
}