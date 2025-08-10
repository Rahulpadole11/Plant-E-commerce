import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function ShopProduct({ plant }) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
   <div className=" rounded px-6 ">
    <Link to={`/product/${plant.id}`}>
      <img
        src={plant.image}
        alt={plant.name}
          className="w-full object-cover rounded"
        />
     
      <div className="flex text-lg mb-1">{renderStars(plant.rating)}</div>
      <h3 className="mt-2 font-bold">{plant.name}</h3>
      <p className="text-sm text-gray-400">{plant.category}</p>
      <p className="font-semibold">{plant.price}</p>

       
     
       
      </Link>
    </div>
  );
}

