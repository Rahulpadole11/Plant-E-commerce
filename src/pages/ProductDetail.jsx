import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import RelatedProducts from "../components/RelatedProducts";

export default function ProductDetail() {
  const { id } = useParams();
  const plant = useSelector((state) =>
    state.products.items.find((p) => p.id === parseInt(id))
  );
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  if (!plant) return <p className="mt-[100px] text-2xl font-bold mb-[100px] flex justify-center items-center">Product not found..</p>;

  return (
    <div className="pb-10 px-10 mt-20">
      <img src={plant.image} alt={plant.name} className="w-60 h-60 object-cover" />
      <h2 className="text-2xl font-bold">{plant.name}</h2>
      <p className="text-gray-500">{plant.category}</p>
      <p className="my-2">{plant.description}</p>
      <p className="font-semibold">{plant.price}</p>
      <button
        onClick={() => dispatch(addToCart(plant))}
        className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded mt-2"
      >
        Add to Cart
      </button>

      <RelatedProducts
        currentId={plant.id}
        category={plant.category}
        products={products}
      />
    </div>
  );
}



