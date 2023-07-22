import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <section  className='mx5 shadow-inset ring ring-offset-0 ring-indigo-300 ring-opacity-25 ring-offset-transparent ring-offset-inset sm:ring-offset-transparent sm:ring-offset-inset sm:ring-indigo-300 sm:ring-opacity-25 rounded-[10px]  svg-container tableMargin'>
      

      <div className='p-4 flex justify-between '>
        <p className='font-semibold'>&copy; 2023: AKBAR KALANI</p>
         <ul className='flex font-medium '>
            <li className='mx-5'>
                <Link
                 
                 href="/akbar">
                    About
                </Link>
            </li>
            <li className='mx-5'>
                <Link
                 
                 href="/akbar">
                    Support
                </Link>
            </li>
            <li className='mx-5'>
                <Link
                 
                 href="/akbar">
                  Contact Us
                </Link>
            </li>
         </ul>
      </div>
    </section>
  )
}

export default Footer
