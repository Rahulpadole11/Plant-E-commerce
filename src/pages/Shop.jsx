import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productsSlice";
import ProductCard from "../components/ProductCard";
import Loader from "../Loader/Loader";

export default function Shop({ allPlants }) {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);
  const [loading, setLoading] = useState(true)
useEffect(() => {
     
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

  useEffect(() => {
    dispatch(fetchProducts("allPlants.json"));
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
      <p className="text-center text-gray-400 py-15 text-lg">
        No plants found.
      </p>
    );
  }




  

  return (
    <>
     <Loader loading={loading} />
      {!loading && (
  <div >
   <div
      className="w-full h-[60vh] sm:h-[70vh]  md:h-[80vh] lg:h-[500px] relative flex items-center justify-center bg-center bg-cover mt-20"
      style={{
        backgroundImage: `url(/Heroimg/shope.avif)`,
      }}
    >
      <h1 className="text-white text-7xl font-bold">Shop</h1>
</div>
    <section className="py-22 px-20">
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((allPlants) => (
          <ProductCard key={allPlants.id} plant={allPlants} />
        ))}
      </div>
    </section>
    </div>
      )}
        </>
  );
}

