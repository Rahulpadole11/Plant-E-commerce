import React from "react";
import { FaRegStar } from "react-icons/fa";
import { BsBag } from "react-icons/bs";

const products = [
{
  id:1,
  name:"Tropical Breeze",
  category: "Indoor Plants",
  price:"$80.00",
   image: "/CardImg/TropicalBreeze.jpg",

},
{
  id:2,
  name:"Desert Bloom",
  category: "Indoor Plants",
  price:"$70.00",
   image: "/CardImg/DesertBloom.jpg",

},
{
  id:3,
  name:"Golden Glow",
  category: "Indoor Plants",
  price:"$85.00",
   image: "/CardImg/GoldenGlow.jpg",

},{
    id: 4,
    name: "Silver Mist",
    category: "Indoor Plants",
    price: "$92.00",
    image: "/CardImg/silverMist.jpg",
  },
  
  {
    id: 5,
    name: "Starlight Succulent",
    category: "Indoor Plants",
    price: "$95.00",
    image: "/CardImg/StarlightSucculent.jpg",
  },
  {
    id:6 ,
    name: "Zen Bamboo Grove",
    category: "Indoor Plants",
    price: "$90.00",
    image: "/CardImg/zenBamboo.jpg",
  },
  
];

const Shop = () => {
  return (
    <>
    <div
      className="w-full h-[60vh] sm:h-[70vh]  md:h-[80vh] lg:h-[500px] relative flex items-center justify-center bg-center bg-cover mt-20"
      style={{
        backgroundImage: `url(/Heroimg/shop.avif)`,
      }}
    >
      <h1 className="text-white text-7xl font-bold">Shop</h1>
</div>

    <section className="py-10 px-6 mt-10">
       <p className="m-2 p-5 ml-32 text-lg">Showing all 6 results</p>
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
                 <div className="flex text-yellow-500 text-sm mb-1">
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
    </>
  );
};

export default Shop;
