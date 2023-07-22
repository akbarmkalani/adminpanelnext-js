"use client";



import React, { useState } from "react";
import Link from "next/link";
const Contacts = () => {

  const [marginLeft, setMarginLeft] = useState({
    item1: 0,
    item2: 0,
    item3: 0,
    item4: 0,
    item5: 0,
    item6: 0,
    item7: 0,
    item8: 0,

  });
  const [isOpen, setIsOpen] = useState(null);

  const handleClick = (itemKey) => {

    if (isOpen === itemKey) {
      setIsOpen(null);
      setMarginLeft((prevState) => ({ ...prevState, [itemKey]: 0 }));
    } else {

      if (isOpen) {
        setMarginLeft((prevState) => ({ ...prevState, [isOpen]: 0 }));
      }

      setIsOpen(itemKey);
      setMarginLeft((prevState) => ({ ...prevState, [itemKey]: 40 }));
    }
  };

  return (
    <section className='flex w-full mt-[70px] justify-center'>
      <div className="w-[90%] flex my-14 h-[100vh]  bg-[#050C17] shadow-inset ring ring-offset-0 ring-indigo-300 ring-opacity-25 ring-offset-transparent ring-offset-inset sm:ring-offset-transparent sm:ring-offset-inset sm:ring-indigo-300 sm:ring-opacity-25 rounded-[10px]">
        <div className="w-[30%]  bgimage "></div>

        <div className="w-[87%] bg-[#162131] text-[#7187aa]">
          <p className="text-center font-extrabold text-[28px] mt-8">
            TELL US ABOUT YOURSELF
          </p>
          <p className="mt-4 text-center">What is your current Occupation?</p>
          <p className="mt-4 text-center">
            Your Answer will help us improve our website to offer you a better experience
          </p>

          <div className="flex flex-wrap justify-around mt-6">
            <section className="relative rounded-xl flex items-center h-[90px] w-[330px] ">
              <span className="bg-[#267DFF] flex justify-center rounded-s-xl items-center h-full w-[40px] ">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#ffffff" className="bi bi-check-lg" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </span>
              <div
                className="flex absolute left-0 bg-[#050C17] border border-[#267DFF] h-full w-full items-center px-5"
                style={{ marginLeft: `${marginLeft.item1}px` }}
                onClick={() => handleClick("item1")}
              >
                <span  className="text-[23px] bg-[#40679e4d] rounded-[50%] flex items-center justify-center w-[60px] h-[60px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#267DFF" className="bi bi-share-fill" viewBox="0 0 16 16">
                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                  </svg>
                </span>
                <span className="text-[23px] font-bold ms-5">
                  Graphic Designer
                </span>
              </div>
            </section>

            <section className="relative rounded-xl  flex items-center h-[90px] w-[330px]">
              <span className="bg-[#267DFF] flex  justify-center rounded-s-xl items-center h-full w-[40px] ">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#ffffff" className="bi bi-check-lg" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </span>
              <div
                className="flex absolute left-0 bg-[#050C17] border border-[#267DFF] h-full w-full items-center px-5"
                style={{ marginLeft: `${marginLeft.item2}px` }}
                onClick={() => handleClick("item2")}
              >
                <span  className="text-[23px] bg-[#40679e4d] rounded-[50%] flex items-center justify-center w-[60px] h-[60px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#267DFF" class="bi bi-boxes" viewBox="0 0 16 16">
                    <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
                  </svg>
                </span>
                <span className="text-[23px]   font-bold ms-5">
                  Web Designer / Developer
                </span>
              </div>
            </section>

            <section className="relative rounded-xl mt-6 flex items-center h-[90px] w-[330px]">
              <span className="bg-[#267DFF] flex justify-center rounded-s-xl items-center h-full w-[40px] ">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#ffffff" className="bi bi-check-lg" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </span>
              <div
                className="flex absolute left-0 bg-[#050C17] border border-[#267DFF] h-full w-full items-center px-5"
                style={{ marginLeft: `${marginLeft.item3}px` }}
                onClick={() => handleClick("item3")}
              >
                <span  className="text-[23px] bg-[#40679e4d] rounded-[50%] flex items-center justify-center w-[60px] h-[60px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#267DFF" class="bi bi-box-seam" viewBox="0 0 16 16">
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                  </svg>
                </span>
                <span className="text-[23px]   font-bold ms-5">
                  Coummunity Manager
                </span>
              </div>
            </section>


            <section className="relative rounded-xl mt-6 flex items-center h-[90px] w-[330px]">
              <span className="bg-[#267DFF] flex justify-center rounded-s-xl items-center h-full w-[40px] ">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#ffffff" className="bi bi-check-lg" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </span>
              <div
                className="flex absolute left-0 bg-[#050C17] border border-[#267DFF] h-full w-full items-center px-5"
                style={{ marginLeft: `${marginLeft.item4}px` }}
                onClick={() => handleClick("item4")}
              >
                <span  className="text-[23px] bg-[#40679e4d] rounded-[50%] flex items-center justify-center w-[60px] h-[60px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#267DFF" class="bi bi-camera-video-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z" />
                  </svg>
                </span>
                <span className="text-[23px]   font-bold ms-5">
                  Instagrammer / Youtuber
                </span>
              </div>
            </section>


            <section className="relative rounded-xl mt-6 flex items-center h-[90px] w-[330px]">
              <span className="bg-[#267DFF] flex justify-center rounded-s-xl items-center h-full w-[40px] ">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#ffffff" className="bi bi-check-lg" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </span>
              <div
                className="flex absolute left-0 bg-[#050C17] border border-[#267DFF] h-full w-full items-center px-5"
                style={{ marginLeft: `${marginLeft.item5}px` }}
                onClick={() => handleClick("item5")}
              >
                <span  className="text-[23px] bg-[#40679e4d] rounded-[50%] flex items-center justify-center w-[60px] h-[60px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#267DFF" class="bi bi-vector-pen" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z" />
                    <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z" />
                  </svg>
                </span>
                <span className="text-[23px]   font-bold ms-5">
                  Blogger / Journalist
                </span>
              </div>
            </section>


            <section className="relative rounded-xl mt-6 flex items-center h-[90px] w-[330px]">
              <span className="bg-[#267DFF] flex justify-center rounded-s-xl items-center h-full w-[40px] ">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#ffffff" className="bi bi-check-lg" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </span>
              <div
                className="flex absolute left-0 bg-[#050C17] border border-[#267DFF] h-full w-full items-center px-5"
                style={{ marginLeft: `${marginLeft.item6}px` }}
                onClick={() => handleClick("item6")}
              >
                <span  className="text-[23px] bg-[#40679e4d] rounded-[50%] flex items-center justify-center w-[60px] h-[60px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#267DFF" class="bi bi-person-video3" viewBox="0 0 16 16">
                    <path d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2Z" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783.059-.187.09-.386.09-.593V4a2 2 0 0 0-2-2H2Z" />
                  </svg>
                </span>
                <span className="text-[23px]   font-bold ms-5">
                  Teacher

                </span>
              </div>
            </section>


            <section className="relative rounded-xl mt-6 flex items-center h-[90px] w-[330px]">
              <span className="bg-[#267DFF] flex justify-center rounded-s-xl items-center h-full w-[40px] ">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#ffffff" className="bi bi-check-lg" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </span>
              <div
                className="flex absolute left-0 bg-[#050C17] border border-[#267DFF] h-full w-full items-center px-5"
                style={{ marginLeft: `${marginLeft.item7}px` }}
                onClick={() => handleClick("item7")}
              >
                <span  className="text-[23px] bg-[#40679e4d] rounded-[50%] flex items-center justify-center w-[60px] h-[60px]">

                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="56" height="56" viewBox="0 0 1920.000000 1920.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,1920.000000) scale(0.100000,-0.100000)"
                      fill="#267DFF" stroke="none">
                      <path d="M9465 13565 c-125 -44 -384 -141 -588 -219 -66 -25 -124 -46 -130
-46 -7 0 -59 -18 -117 -41 -58 -22 -166 -63 -240 -91 -74 -27 -160 -60 -191
-73 -31 -13 -67 -26 -80 -29 -13 -2 -89 -29 -169 -59 -80 -30 -226 -85 -325
-122 -99 -36 -263 -97 -365 -135 -102 -38 -239 -89 -305 -114 -66 -25 -129
-48 -140 -50 -21 -4 -41 -12 -325 -120 -176 -67 -262 -99 -445 -163 -55 -20
-118 -43 -140 -53 -22 -9 -121 -47 -220 -83 -378 -138 -485 -178 -639 -236
-87 -34 -168 -63 -180 -65 -23 -5 -70 -21 -101 -36 -38 -18 -371 -142 -498
-186 -71 -24 -137 -49 -148 -55 -56 -30 -77 -135 -39 -197 24 -40 60 -57 320
-152 394 -144 520 -191 660 -245 80 -30 156 -57 169 -60 13 -2 69 -22 125 -44
196 -78 446 -171 563 -210 65 -22 138 -48 163 -59 l45 -20 40 44 c37 40 56 50
240 118 110 41 254 95 320 120 66 25 129 48 140 50 21 4 41 12 325 120 176 67
262 99 445 163 55 20 118 43 140 53 22 9 121 47 220 83 333 122 479 176 640
237 88 33 169 62 180 64 23 5 70 22 100 36 11 5 81 32 155 59 74 27 174 65
223 85 110 44 146 51 192 36 116 -38 169 -166 110 -266 -39 -67 -63 -78 -570
-260 -71 -25 -182 -67 -245 -92 -63 -25 -189 -71 -280 -103 -148 -51 -308
-111 -558 -209 -45 -17 -90 -33 -100 -35 -9 -2 -17 -4 -17 -5 0 -1 -7 -3 -15
-5 -8 -2 -62 -21 -120 -43 -167 -63 -439 -165 -645 -241 -317 -117 -440 -163
-448 -171 -9 -8 45 -28 768 -295 110 -41 218 -81 240 -91 22 -9 121 -45 220
-80 99 -34 263 -95 365 -134 102 -39 230 -87 285 -105 55 -19 147 -53 205 -75
116 -45 344 -129 575 -213 83 -30 192 -71 242 -91 51 -20 105 -36 120 -36 15
0 129 38 253 83 124 46 299 111 390 145 91 33 244 90 340 125 96 36 243 90
325 120 83 30 204 76 270 102 66 26 174 65 240 87 66 22 134 46 150 53 17 8
91 37 165 64 74 28 175 66 224 86 49 19 95 35 101 35 7 0 72 23 146 51 74 28
220 82 324 121 105 39 269 100 365 136 141 52 381 141 460 170 8 3 23 7 33 8
9 2 45 16 80 30 34 15 121 48 192 75 72 26 173 64 225 84 52 21 103 39 113 40
23 5 180 62 232 85 22 10 123 48 225 85 625 227 662 242 690 287 28 46 27 115
-3 159 -24 36 -32 39 -232 109 -66 23 -138 50 -160 60 -22 9 -114 44 -205 77
-303 111 -494 182 -600 223 -58 23 -157 59 -220 80 -63 22 -198 71 -300 110
-321 123 -344 132 -369 136 -13 3 -74 25 -135 49 -159 63 -425 162 -536 200
-120 41 -256 92 -295 109 -16 8 -113 44 -215 81 -169 61 -363 133 -640 237
-58 22 -114 42 -125 44 -11 2 -56 18 -100 35 -198 76 -425 162 -480 181 -186
66 -315 113 -350 128 -45 19 -224 86 -419 154 -70 26 -142 46 -160 45 -17 0
-85 -20 -151 -44z"/>
                      <path d="M9305 11749 c-144 -57 -312 -120 -332 -124 -19 -3 -40 -11 -323 -120
-172 -65 -244 -92 -445 -162 -55 -20 -118 -43 -140 -53 -22 -9 -121 -47 -220
-83 -223 -81 -488 -180 -665 -246 -74 -28 -143 -53 -155 -55 -23 -5 -70 -22
-100 -36 -11 -6 -92 -37 -180 -69 -88 -33 -203 -76 -255 -96 -52 -21 -104 -39
-115 -41 -46 -9 -135 -47 -152 -66 -17 -19 -18 -75 -21 -1169 l-2 -1149 -29
-15 c-95 -49 -114 -227 -34 -316 100 -111 277 -86 346 50 45 91 31 178 -40
248 l-43 41 0 1080 c0 852 3 1082 13 1089 12 10 132 58 347 138 63 24 144 55
180 70 36 14 76 28 90 30 14 2 120 41 235 85 116 45 278 105 360 135 209 74
396 144 420 155 28 14 266 101 287 105 16 3 182 66 453 170 61 24 128 49 150
56 46 14 215 76 429 156 141 53 149 58 163 92 30 71 -18 142 -94 140 -15 0
-73 -19 -128 -40z"/>
                      <path d="M6830 9565 c0 -716 -6 -666 91 -739 84 -63 468 -254 597 -296 31 -10
111 -40 177 -65 216 -83 491 -175 1115 -374 52 -16 108 -32 125 -35 26 -5 377
-107 594 -173 46 -13 93 -23 105 -20 11 3 91 25 176 50 85 25 288 84 450 131
162 46 363 107 445 134 83 28 238 78 345 112 353 113 995 365 1090 428 14 9
39 24 57 33 64 33 165 112 188 148 l25 37 -2 626 -3 626 -120 -44 c-66 -24
-129 -48 -140 -54 -11 -5 -105 -41 -210 -79 -428 -157 -527 -193 -665 -246
-80 -30 -154 -57 -166 -59 -11 -2 -50 -16 -85 -30 -156 -62 -398 -152 -564
-210 -99 -35 -198 -71 -220 -80 -57 -25 -375 -143 -475 -177 -101 -35 -167
-37 -249 -9 -32 11 -67 22 -77 24 -18 4 -314 115 -520 196 -56 22 -107 40
-112 40 -12 0 -238 82 -287 104 -16 8 -106 42 -200 76 -260 94 -479 175 -595
220 -58 23 -157 58 -220 80 -119 40 -420 153 -455 170 -11 5 -56 23 -100 39
-44 16 -88 32 -97 36 -17 7 -18 -27 -18 -620z"/>
                      <path d="M6155 7854 c-8 -20 -15 -40 -15 -43 0 -10 -64 -167 -99 -243 -16 -36
-59 -139 -96 -229 -124 -305 -207 -504 -221 -533 -19 -40 -18 -53 8 -67 18
-10 24 -8 36 7 13 18 14 17 8 -8 -6 -25 -1 -29 66 -62 39 -20 73 -35 74 -33 2
2 15 32 28 68 l25 64 1 -72 c0 -58 3 -73 15 -73 8 0 15 -4 15 -9 0 -13 141
-48 240 -61 124 -15 141 -14 147 11 l6 21 12 -21 c11 -22 12 -22 37 16 14 21
35 58 47 81 12 24 25 40 30 38 4 -3 16 -35 26 -71 l18 -66 40 7 c23 3 65 15
96 25 30 11 62 19 71 19 32 0 39 19 24 62 -20 56 -17 59 11 13 14 -22 25 -35
25 -28 0 12 -97 285 -190 533 -27 74 -52 148 -55 163 -3 15 -23 71 -44 125
-21 53 -57 152 -81 219 -54 156 -54 156 -105 142 -53 -15 -121 -6 -156 20
l-29 21 -15 -36z"/>
                    </g>
                  </svg>

                </span>
                <span className="text-[23px]   font-bold ms-5">
                  Student

                </span>
              </div>
            </section>


            <section className="relative rounded-xl mt-6 flex items-center h-[90px] w-[330px]">
              <span className="bg-[#267DFF] flex justify-center rounded-s-xl items-center h-full w-[40px] ">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#ffffff" className="bi bi-check-lg" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </span>
              <div
                className="flex absolute left-0 bg-[#050C17] border border-[#267DFF] h-full w-full items-center px-5"
                style={{ marginLeft: `${marginLeft.item8}px` }}
                onClick={() => handleClick("item8")}
              >
                <span  className="text-[23px] bg-[#40679e4d] rounded-[50%] flex items-center justify-center w-[60px] h-[60px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#267DFF" class="bi bi-cup-hot-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5Z" />
                    <path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z" />
                  </svg>
                </span>
                <span className="text-[23px]   font-bold ms-5">
                  Other
                </span>
              </div>
            </section>


           
          </div>
        
             <Link
             className=" text-white flex justify-center items-center w-[200px] h-[60px] rounded-xl bg-[#267DFF] mt-8 ms-20"
               href='/situation'
             >
              Next
             </Link>
       
        </div>
      </div>
    </section>
  );
};

export default Contacts;
