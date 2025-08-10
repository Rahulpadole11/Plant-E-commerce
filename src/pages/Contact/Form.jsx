import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Form = () => {
  return (
    <div className="min-h-screen px-4  sm:px-10 md:px-20 lg:px-40 py-20 bg-white flex flex-col">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-12 w-full sm:w-[400px]">
        Send us Message
      </h2>

      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-10">
      
        <div className="flex flex-col gap-8 w-full lg:w-1/2">
        
          <div className="flex items-start gap-4">
            <div className="bg-[#f3f9d2] p-4 rounded-full">
              <FaPhone className="text-2xl text-black" />
            </div>
            <div>
              <h4 className="text-xl font-semibold">Phone</h4>
              <p className="text-gray-600">555-1234-678</p>
            </div>
          </div>

          
          <div className="flex items-start gap-4">
            <div className="bg-[#f3f9d2] p-4 rounded-full">
              <FaEnvelope className="text-2xl text-black" />
            </div>
            <div>
              <h4 className="text-xl font-semibold">Email</h4>
              <p className="text-gray-600">mail@example.com</p>
            </div>
          </div>

          
          <div className="flex items-start gap-4">
            <div className="bg-[#f3f9d2] p-4 rounded-full">
              <FaMapMarkerAlt className="text-2xl text-black" />
            </div>
            <div>
              <h4 className="text-xl font-semibold">Address</h4>
              <p className="text-gray-600">
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </p>
            </div>
          </div>
        </div>

        
        <div className="w-full lg:w-1/2">
          <form className="flex flex-col gap-6 mt-0">
            <div>
              <label className="block mb-2 font-semibold">Name *</label>
              <input
                type="text"
                className="border border-gray-300 px-4 py-2 w-full rounded"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Email *</label>
              <input
                type="email"
                className="border border-gray-300 px-4 py-2 w-full rounded"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Phone *</label>
              <input
                type="text"
                className="border border-gray-300 px-4 py-2 w-full rounded"
                placeholder="Your Phone"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Message</label>
              <textarea
                rows="4"
                className="border border-gray-300 px-4 py-2 w-full rounded resize-none"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#8fb339] hover:bg-[#7aa52e] text-white py-3 px-8 rounded-full w-fit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
