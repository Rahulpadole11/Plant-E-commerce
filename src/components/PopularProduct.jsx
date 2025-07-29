import React from "react";
import { FaRegStar } from "react-icons/fa";
import { BsBag } from "react-icons/bs";

const products = [
  {
    id: 1,
    name: "Desert Bloom",
    category: "Indoor Plants",
    price: "$70.00",
    image: "/OurCategories/dessertbloom.jpg",
  },
  {
    id: 2,
    name: "Golden Glow",
    category: "Indoor Plants",
    price: "$85.00",
    image: "/CardImg/GoldenGlow.jpg",
  },
  {
    id: 3,
    name: "Silver Mist",
    category: "Indoor Plants",
    price: "$92.00",
    image: "/CardImg/silverMist.jpg",
  },
];

const PopularProduct = () => {
  return (
    <section className="py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Trending Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="relative bg-white shadow-sm rounded-lg overflow-hidden group">
            
           
            <div className="group absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer transition">
              <BsBag className="text-xl" />
              <span className="absolute top-10 right-0 opacity-0 group-hover:opacity-100 text-xs bg-gray-800 text-white px-2 py-2 rounded transition duration-300 z-10 flex flex-row">
                Add to Cart
              </span>
            </div>

            
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />

           
            <div className="p-4">
              <div className="flex text-gray-500 text-lg mb-1">
                {[...Array(5)].map((_, i) => (
                  <FaRegStar key={i} />
                ))}
              </div>
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="font-bold mt-1 text-black">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

 export default PopularProduct
;

