"use client"
const axios = require('axios');
import style from './chart/styles.css'
import Footer from '../homeFooter/footer';
import React, { useEffect, useState } from 'react'
import Table from './userList';

const ProductAnalyse = () => {
  const titel = ["Website", "Asset Name", "Status", "Categories", "Tags", "Date", "Country"];

  const [post, setPost] = useState([]);
  const [data, setData] = useState('')
  useEffect(() => {
    axios.get("https://6460e1a4185dd9877e326a5b.mockapi.io/api/v/uploaded")

      .then((data) => {
        setPost(data?.data);
      });
  }, []);




  return (
    <>

      <section className=' overflow-visible shadow-inset ring ring-offset-0 ring-indigo-300 ring-opacity-25 ring-offset-transparent ring-offset-inset sm:ring-offset-transparent sm:ring-offset-inset sm:ring-indigo-300 sm:ring-opacity-25 rounded-[10px]  svg-container'>
        <div class="p-5">
          <h2 class="font-semibold mb-[30px]">Your Uploaded Assets</h2>
          <div class="overflow-auto ">

            <Table post={post} titel={titel} />

          </div>
        </div>
      </section>
      


    </>
  )
}

export default ProductAnalyse
