import React from 'react'
import { FaRegStar } from "react-icons/fa6";

const Categories = [
  {
    id: 1,
    name: "Houseplants",
    image: "/OurCategories/houseplant.jpg",
    
  },
  {
    id: 2,
    name: "Outdoor Plants",
    image: "/OurCategories/outdoorplant.jpg",
   
  },
  {
    id: 3,
    name: "Succulents",
    image: "/OurCategories/succulents.jpg",
   
  },
  {
    id: 4,
    name: "Desert Bloom",
    image: "/OurCategories/dessertbloom.jpg",
   
  }
];

const OurCategories = () => {
  return (
    <div className="p-8 mb-9">
      <h1 className="text-4xl font-bold mb-8 mt-4 text-center">Our Categories</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Categories.map((cat) => (
          <div key={cat.id} className=" rounded  p-4">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h- object-cover rounded"
            />
            <div className="p-2">
            
              <h3 className="font-semibold text-lg text-center">{cat.name}</h3>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCategories;
