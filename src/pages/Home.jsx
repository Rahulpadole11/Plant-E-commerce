import React from 'react';
import Hero from '../components/Hero';
import FeaturesSection from '../components/FeaturesSection';
import ProductCard from '../components/ProductCard';
import FlashSale from '../components/FlashSale';
import OurCategories from '../components/OurCategories';
import Destination from '../components/Destination';
import PopularProduct from '../components/PopularProduct';
import Review from '../components/Review';


const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <ProductCard />
      <FlashSale />
      <OurCategories />
      <Destination />
      <PopularProduct />
      <Review />
     
    </>
  );
};

export default Home;
