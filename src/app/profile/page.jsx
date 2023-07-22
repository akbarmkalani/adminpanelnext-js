
"use client";

import Link from 'next/link';
import LogHeader from '@/component/loginheader'
import Image from 'next/image';
import Userprofile from './userprofile';
import React, { useState, useRef, useEffect } from 'react';

import axios from 'axios';
import { images } from '../../../next.config';



const Profile = () => {



  const [get, SetGet] = useState([])
  console.log('hett', get);
  const [darkmode, setDarkmode] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    picture: ""
  });

  const changeHandler = event => {


    if (event.target.name === "accepted") {
      setUserData({ ...userData, [event.target.name]: event.target.checked })
    } else {
      setUserData({ ...userData, [event.target.name]: event.target.value })
    }

  }


  const [data, setData] = useState([]);

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUserData((prevData) => ({ ...prevData, picture: reader.result }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };


  const handleSave = () => {
    const profileData = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      picture: userData.picture,
    };

    localStorage.setItem('userProfile', JSON.stringify(profileData));

    setUserData(profileData);

  };

  useEffect(() => {
    const savedData = localStorage.getItem('userProfile');

    if (savedData) {
      const parsedData = JSON.parse(savedData);
      SetGet(parsedData);
    }
  }, []);


  const submitDark = () => {
    setDarkmode(!darkmode);
  };

  return (
    <section className={`App p-4 w-[100%] h-[100vh] ${darkmode ? 'dark-mode' : 'light-mode'}`} >
      <div className='w-full'>
        <header className='flex p-5'>

          <div className='w-[50%] '>
            <Link href="#">
              {darkmode ? (<Image
                src="./../../img/img2.svg"
                alt="Another Picture"
                width={170}
                height={100}
              />) :
                <Image
                  src="./../../img/img1.svg"
                  alt="Another Picture"
                  width={170}
                  height={100}
                />}
            </Link>
          </div>


          <div className='w-[50%]  flex justify-end items-center'>
            <ul className='flex'>
              <li onClick={submitDark}
                className='mx-2  hover:text-[#4d25ec]  '
              >
                {darkmode ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M22 11.9999C22 17.5228 17.5228 21.9999 12 21.9999C10.8358 21.9999 9.71801 21.801 8.67887 21.4352C8.24138 20.3767 8 19.2165 8 17.9999C8 15.7787 8.80467 13.7454 10.1384 12.1757C11.31 13.8813 13.2744 14.9999 15.5 14.9999C17.8615 14.9999 19.9289 13.7405 21.0672 11.8568C21.3065 11.4607 22 11.5372 22 11.9999Z" fill="currentColor"></path>
                    <path d="M2 12C2 16.3586 4.78852 20.0659 8.67887 21.4353C8.24138 20.3768 8 19.2166 8 18C8 15.7788 8.80467 13.7455 10.1384 12.1758C9.42027 11.1303 9 9.86422 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12Z" fill="currentColor"></path>
                  </svg>
                ) : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z" fill="currentColor"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12ZM12 20.25C12.4142 20.25 12.75 20.5858 12.75 21V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V21C11.25 20.5858 11.5858 20.25 12 20.25Z" fill="currentColor"></path>
                  <g opacity="0.3">
                    <path d="M4.39838 4.39838C4.69127 4.10549 5.16615 4.10549 5.45904 4.39838L5.85188 4.79122C6.14477 5.08411 6.14477 5.55898 5.85188 5.85188C5.55898 6.14477 5.08411 6.14477 4.79122 5.85188L4.39838 5.45904C4.10549 5.16615 4.10549 4.69127 4.39838 4.39838Z" fill="currentColor"></path>
                    <path d="M19.6009 4.39864C19.8938 4.69153 19.8938 5.16641 19.6009 5.4593L19.2081 5.85214C18.9152 6.14503 18.4403 6.14503 18.1474 5.85214C17.8545 5.55924 17.8545 5.08437 18.1474 4.79148L18.5402 4.39864C18.8331 4.10575 19.308 4.10575 19.6009 4.39864Z" fill="currentColor"></path>
                    <path d="M18.1474 18.1474C18.4403 17.8545 18.9152 17.8545 19.2081 18.1474L19.6009 18.5402C19.8938 18.8331 19.8938 19.308 19.6009 19.6009C19.308 19.8938 18.8331 19.8938 18.5402 19.6009L18.1474 19.2081C17.8545 18.9152 17.8545 18.4403 18.1474 18.1474Z" fill="currentColor"></path>
                    <path d="M5.85188 18.1477C6.14477 18.4406 6.14477 18.9154 5.85188 19.2083L5.45904 19.6012C5.16615 19.8941 4.69127 19.8941 4.39838 19.6012C4.10549 19.3083 4.10549 18.8334 4.39838 18.5405L4.79122 18.1477C5.08411 17.8548 5.55898 17.8548 5.85188 18.1477Z" fill="currentColor"></path>
                  </g>
                </svg>}
              </li>

            </ul>

          </div>
        </header>
      </div>
      <h1 className='p-2 font-bold'>User Profile</h1>

      <section className='flex '>
        <div className='w-[50%]  shadow-inset ring ring-offset-0 ring-indigo-300 ring-opacity-25 ring-offset-transparent ring-offset-inset sm:ring-offset-transparent sm:ring-offset-inset sm:ring-indigo-300 sm:ring-opacity-25 rounded-[10px] p-6'>
          <div>


            <label htmlFor="fileInput">
              Change profile photo
              <img className='w-[20px] h-[20px]' src="./../../img/img5.png" alt="" />
            </label>
            {userData ? (
              <img src={userData.picture}  style={{ maxWidth: '200px' }} />
            ) : ''}
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handlePictureChange}
              style={{ display: 'none' }}
            />
          </div>

          <div className='flex flex-wrap'>
            <h2 className='w-full font-bold mt-4'>Edit Name and Email</h2>
            <input
              className='outline-none flex w-[60%] border mt-4 px-3 rounded-lg py-3 bg-transparent'
              type="text"
              name='firstName'
              placeholder="First Name"
              value={userData.firstName}
              onChange={changeHandler}
            />
            <input
              className='outline-none flex w-[60%] border mt-4 px-3 rounded-lg py-3 bg-transparent'
              type="text"
              name='lastName'
              placeholder="Last Name"
              value={userData.lastName}

              onChange={changeHandler}
            />
            <input
              type="email"
              className='outline-none flex w-[60%] border mt-4 px-3 rounded-lg py-3 bg-transparent'
              placeholder="Email Address"
              value={userData.email}
              name='email'
              onChange={changeHandler}
            />
          </div>

          <div>
            <button className=' w-[170px] h-[40px] bg-gray-700 text-white rounded-xl mt-5' onClick={handleSave}>Save Profile</button>
          </div>
        </div>
        <Userprofile get={get} />
      </section>

    </section>
  );
};

export default Profile;


