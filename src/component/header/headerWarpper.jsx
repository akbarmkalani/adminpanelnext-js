'use client'
import { Header } from "./header";
import { Navbar } from "../navbar/navbar";
import Home from "../home/home";
import { useState } from "react";
import { usePathname } from "next/navigation";
export const HeaderWrapper = () => {
  const pathname = usePathname();
  return (
    pathname !== "/login" &&
    pathname !== "/profile" &&
    pathname !== "/signup" &&

    <section className=" flex   ">
     
      <Navbar />
      <Header />
    </section>
  )
}