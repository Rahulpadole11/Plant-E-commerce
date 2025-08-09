import React from 'react';

const Destination = () => {
  return (
    <div className="w-full bg-amber-50 text-black relative overflow-hidden p-5 py-10 mb-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
        
        {/* Left Image */}
        <div className="flex-shrink-0">
          <img 
            src="/CardImg/stats-count.jpg" 
            alt="Destination" 
            className="w-[550px] h-[580px] object-cover my-5 pr-4"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-5 max-w-xl">
          <h1 className="text-4xl font-bold leading-tight">
            Your Premier <br />
            Destination for All <br />
            Green.
          </h1>

          <p className="text-gray-700">
            At Urban Jungle Co., we believe in the transformative power of plants.
            Whether you're a seasoned gardener or just starting your green journey,
            our curated selection of plants will inspire and enrich your living space.
          </p>

          <hr className="border-gray-300 mt-8" />

          {/* Stats */}
          <div className="flex gap-40 mt-4">
            <div>
              <p className="text-2xl font-semibold pb-2 text-gary-900">98%</p>
              <p className="text-sm text-gray-600">Customer Satisfaction</p>
            </div>
            <div>
              <p className="text-2xl font-semibold pb-2 text-gary-900">103K</p>
              <p className="text-sm text-gray-600">Plants Sold</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Destination;
