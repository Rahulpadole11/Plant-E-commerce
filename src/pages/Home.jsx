import React, { useEffect, useState } from 'react';
import Header from './Header';
import FeaturesSection from './FeaturesSection';
import PopularProduct from '../components/PopularProduct';
import Review from '../components/Review';
import FlashSale from "./FlashSale";
import OurCategories from "../components/OurCategories"; 
import Destination from "../components/Destination"; 
import Hero from '../components/Hero';
// adjust the path based on your folder structure

const Home = () => {
  
  return (
    <>
    <div>
       
    <Hero/>
      <FeaturesSection/>
    <Header/>
      <FlashSale /> 
      <OurCategories />
      <Destination />
      <PopularProduct />
      <Review />
      
    </div>
     
    </>
  );
};

export default Home;















