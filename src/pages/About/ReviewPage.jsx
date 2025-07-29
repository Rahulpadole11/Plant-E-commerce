import React from 'react';

const ReviewPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mx-6 md:mx-24 mt-20 gap-10 text-gray-800 mb-20">

      
      <div className="flex-shrink-0">
        <img
          src="/OurCategories/About.avif"
          alt="About Us"
          className="h-[350px] md:h-[500px] w-[300px] md:w-[450px] object-cover rounded-xl shadow-xl"
        />
      </div>

      
      <div className="max-w-xl space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold leading-snug">
          We strive to provide our <br /> customers with the highest quality
        </h1>

        <p className="text-base md:text-lg text-gray-700">
          Urban Jungle Co. was founded in 1960 by a group of plant enthusiasts who recognized the positive impact that plants can have on our lives. Whether it’s purifying the air, reducing stress, or simply adding a touch of beauty to your environment, plants are more than just decoration—they’re a lifestyle.
        </p>

        <hr className="border-gray-300 my-10" />

        <p className="italic text-gray-600">
          “We love what we do & create partnerships with our clients to ensure their digital transformation is positioned for long-term success.”
        </p>
        <div className='flex gap-3'>

        <img src="/frofile photo.png" alt=""
        className='h-17 w-17 ' />
        <ul className='text-md mt-2'>
            <li className='font-bold'>Karen Lynn</li>
            <li>CEO & Co-founder @ Company</li>
        </ul>
      
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
