import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productsSlice";
import ProductCard from "../components/ProductCard";

export default function Header({plant}) {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts("plant.json"));
  }, [dispatch]);

  if (status === "loading") {
    return (
      <p className="text-center text-gray-500 py-8 text-lg">
        Loading plants...
      </p>
    );
  }

  if (!items.length) {
    return (
      <p className="text-center text-gray-400 py-8 text-lg">
        No plants found.
      </p>
    );
  }

  return (
    <section className="py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Trending Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((plant) => (
          <ProductCard key={plant.id} plant={plant} />
        ))}
      </div>
    </section>
  );
}
