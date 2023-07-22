'use client';
import React, { useState } from 'react';
import WarpperContent from './topLetfContent/warpperContent';
import OverviewWarpper from './toprigthContent/OverviewWarpper';
import Product from './productAnalysis/product';
import Footer from './homeFooter/footer';
import ProductAnalyse from './productAnalysis/ProductAnalyse';
function Home({ }) {


  const [show, setShow] = useState(false)
  const subimtShow = (e) => {

  }

  return (


    <section className='flex mx-4 mt-[70px]'>

      <div className=' flex flex-wrap'>
        <WarpperContent />
        <OverviewWarpper />
        <Product />
        <ProductAnalyse />
        <Footer />
      </div>




    </section>



  );
}

export default Home;


