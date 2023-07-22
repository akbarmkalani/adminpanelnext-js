
"use client";


import React, { useEffect,  useState , } from 'react';
import LogHeader from '@/component/loginheader';
import { Valadition } from "./valdition"


const Login = () => {
  const [data, setDate] = useState({

    email: "",
    password: "",
    accepted: false
  })



  const changeHandler = event => {


    if (event.target.name === "accepted") {
      setDate({ ...data, [event.target.name]: event.target.checked })
    } else {
      setDate({ ...data, [event.target.name]: event.target.value })
    }

  }

  const [errors, setErrors] = useState({})
  const [focus, setFocus] = useState({})
  useEffect(() => {
      setErrors(Valadition(data))
    /*   console.log(errors); */
  }, [data, focus])



  const [darkmode, setDarkmode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const submitDark = () => {
    setDarkmode(!darkmode);
  };

  const handleToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const submitHandaler = event => {
    event.preventDefault()

    if (!Object.keys(errors).length) {
      /*   notify("you signed successfully", "success") */
    } else {
       /*  notify("Data is invalid", "error") */
        setFocus({
            name: true,
            email: true,
            password: true,
            confirmPassword: true,
            accepted: true
        })
    }
}
  return (
    <section className={`App w-[100%] h-[100vh] ${darkmode ? 'dark-mode' : 'light-mode'}`}>
      {/* Rendering the LogHeader component */}
      <LogHeader darkmode={darkmode} setDarkmode={setDarkmode} isLoggedIn={isLoggedIn} handleToggle={handleToggle} submitDark={submitDark} />

      <div className='w-[450px] h-[600px] flex justify-center items-center mt-6 border p-3 mx-auto'>
        <form action="" onSubmit={submitHandaler}>
          <h1 className='text-center py-4 font-bold'>Log in</h1>
          <p>Let’s get started with your 30 days free trial </p>
          <div className="  mt-3  w-full flex flex-wrap ">
            {/*  <label className=" w-full" >Email</label> */}
            <span className='w-full p-4 rounded-md flex border items-center '>
              <input
                className="para outline-none bg-transparent border-none mx-auto  w-full  "
                type="text"
                name="email"
                value={data.email}
                onChange={changeHandler}
                placeholder='Email ID'
              /> <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.3" d="M14.2 3H9.8C5.65164 3 3.57746 3 2.28873 4.31802C1 5.63604 1 7.75736 1 12C1 16.2426 1 18.364 2.28873 19.682C3.57746 21 5.65164 21 9.8 21H14.2C18.3484 21 20.4225 21 21.7113 19.682C23 18.364 23 16.2426 23 12C23 7.75736 23 5.63604 21.7113 4.31802C20.4225 3 18.3484 3 14.2 3Z" fill="#7B6AFE"></path>
                  <path d="M19.1284 8.034C19.4784 7.74231 19.5257 7.22209 19.234 6.87206C18.9423 6.52204 18.4221 6.47474 18.0721 6.76643L15.6973 8.74542C14.671 9.60063 13.9585 10.1925 13.357 10.5794C12.7747 10.9539 12.3798 11.0796 12.0002 11.0796C11.6206 11.0796 11.2258 10.9539 10.6435 10.5794C10.0419 10.1925 9.32941 9.60063 8.30315 8.74542L5.92837 6.76643C5.57834 6.47474 5.05812 6.52204 4.76643 6.87206C4.47474 7.22209 4.52204 7.74231 4.87206 8.034L7.28821 10.0475C8.2632 10.86 9.05344 11.5185 9.75091 11.9671C10.4775 12.4344 11.185 12.7296 12.0002 12.7296C12.8154 12.7296 13.523 12.4344 14.2495 11.9671C14.947 11.5185 15.7372 10.86 16.7122 10.0474L19.1284 8.034Z" fill="#267DFF"></path>
                </svg>
              </span>
            </span>
            {errors.email && focus.email && <span className='formField'>{errors.email}</span>}
          </div>

          <div className="mt-3  w-full flex flex-wrap  ">
            {/*   <label className=" w-full" >password</label> */}

            <span className='w-full p-4 rounded-md flex border items-center '>
              <input
                className="para mx-auto bg-transparent border-none outline-none  w-full border "
                type="password"
                name="password"
                value={data.password}
                onChange={changeHandler}
                placeholder='password'
              />
              <span>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.3" d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12Z" fill="#7B6AFE"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill="#267DFF"></path>
                </svg>
              </span>
            </span>
            {errors.password && focus.password && <span className='formField'>{errors.password}</span>}
          </div>
          <div className="mt-5  w-full flex flex-wrap">

            <p className="col-12 mx-0 px-0 mb-3 " >I accepted</p>
            <input className="para col-12 mx-auto" type="checkbox" name="accepted" value={data.accepted} onChange={changeHandler} />
             {errors.accepted && focus.accepted && <span className="mt-3 formField">{errors.accepted}
            </span>}
          </div>
          <div className='mt-5  w-full flex flex-wrap'>
            <p className='  mx-auto'>Forgot Password?</p>
          </div>
          <div className="flex justify-center">
            <button className='text-center mt-3 w-[200px] rounded-lg h-[60px] font-medium bg-[#267DFF]'>Log In</button>
          </div>

          <div>
            <p className='text-center mt-3'> Or Sign in with</p>

            <section className='flex mt-3'>
              <span className='flex    shadow-inset ring ring-offset-0 ring-indigo-300 ring-opacity-25 ring-offset-transparent ring-offset-inset sm:ring-offset-transparent sm:ring-offset-inset sm:ring-indigo-300 sm:ring-opacity-25  justify-center items-center mx-2 rounded-lg h-[50px]  w-[170px]'>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_645_8948)">
                    <path d="M24.266 12.2764C24.266 11.4607 24.1999 10.6406 24.0588 9.83807H12.74V14.4591H19.2217C18.9528 15.9494 18.0885 17.2678 16.823 18.1056V21.1039H20.69C22.9608 19.0139 24.266 15.9274 24.266 12.2764Z" fill="#4285F4"></path>
                    <path d="M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008V24.0008Z" fill="#34A853"></path>
                    <path d="M6.00253 14.3003C5.49987 12.8099 5.49987 11.1961 6.00253 9.70575V6.61481H2.01649C0.31449 10.0056 0.31449 14.0004 2.01649 17.3912L6.00253 14.3003V14.3003Z" fill="#FBBC04"></path>
                    <path d="M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966V4.74966Z" fill="#EA4335"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_645_8948">
                      <rect width="24" height="24" fill="white" transform="translate(0.5)"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className='flex  shadow-inset ring ring-offset-0 ring-indigo-300 ring-opacity-25 ring-offset-transparent ring-offset-inset sm:ring-offset-transparent sm:ring-offset-inset sm:ring-indigo-300 sm:ring-opacity-25  justify-center items-center mx-2 rounded-lg h-[50px] w-[170px]'>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_645_8955)">
                  <path d="M24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 17.9895 4.8882 22.954 10.625 23.8542V15.4688H7.57812V12H10.625V9.35625C10.625 6.34875 12.4166 4.6875 15.1576 4.6875C16.4701 4.6875 17.8438 4.92188 17.8438 4.92188V7.875H16.3306C14.84 7.875 14.375 8.80008 14.375 9.75V12H17.7031L17.1711 15.4688H14.375V23.8542C20.1118 22.954 24.5 17.9895 24.5 12Z" fill="#1877F2"></path>
                  <path d="M17.1711 15.4688L17.7031 12H14.375V9.75C14.375 8.80102 14.84 7.875 16.3306 7.875H17.8438V4.92188C17.8438 4.92188 16.4705 4.6875 15.1576 4.6875C12.4166 4.6875 10.625 6.34875 10.625 9.35625V12H7.57812V15.4688H10.625V23.8542C11.8674 24.0486 13.1326 24.0486 14.375 23.8542V15.4688H17.1711Z" fill="white"></path>
                </g>
                <defs>
                  <clipPath id="clip0_645_8955">
                    <rect width="24" height="24" fill="white" transform="translate(0.5)"></rect>
                  </clipPath>
                </defs>
              </svg>
              </span>
            </section>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Login;
