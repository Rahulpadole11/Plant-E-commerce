// src/components/ShopCart.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ShopCart = () => {
  const scrollToShop = () => {
    const shopSection = document.getElementById('shop-section');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="w-full text-white relative h-[60vh] sm:h-[70vh] md:h-[70vh] lg:h-[400px] flex items-center justify-center"
      style={{
        backgroundImage: `url(/Heroimg/perfectplant.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
     
      <div className="absolute inset-0 bg-black/50"></div>

    
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Ready to Find Your Perfect Plant?
        </h1>
        <p className="text-base sm:text-lg mb-6 drop-shadow-md">
          Browse our online store or visit us in person to <br />
          experience the beauty of nature.
        </p>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={scrollToShop}
          className="text-white bg-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition"
        >
          <a href="#">Shop Now</a>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ShopCart;
