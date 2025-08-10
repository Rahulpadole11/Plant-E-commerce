import React from 'react';

const FlashSale = () => {
  return (
    <div
      className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[500px] relative flex items-center justify-center bg-center bg-cover my-10"
      style={{
        backgroundImage: `url(/Heroimg/FlashSale.jpg)`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Flash Sale: Up to 50% Off <br className="hidden sm:block" /> On Select Items!
        </h1>
        <p className="text-sm sm:text-base md:text-lg">
          Don&apos;t miss out on our flash sale event! For a limited time, enjoy up to 50% <br className="hidden sm:block" />
          off on a selection of our best-selling products.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 cursor-pointer">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default FlashSale;
