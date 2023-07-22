
"use client";
import React from 'react'

const Userprofile = ({ get }) => {
  
    return (
        <section className='flex items-center  shadow-inset ring ring-offset-0 ring-indigo-300 ring-opacity-25 ring-offset-transparent ring-offset-inset sm:ring-offset-transparent sm:ring-offset-inset sm:ring-indigo-300 sm:ring-opacity-25 rounded-[10px] mx-5'>
         
                <figure className='flex  flex-wrap justify-center'>
                    <img className='w-[200px] h-[200px] rounded-[50%] border object-cover' src={get.picture} alt="" />
                    <figcaption className='w-full p-5'>
                        <p>Name: {get.firstName}</p>
                        <p> LastName: {get.lastName}</p>
                        <p>Email: {get.email}</p>
                    </figcaption>
                </figure>

           
        </section>
    )
}

export default Userprofile
