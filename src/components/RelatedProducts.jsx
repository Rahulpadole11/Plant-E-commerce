import React from "react";
import ProductCard from "./ProductCard";
import { div } from "framer-motion/client";

export default function RelatedProducts({ currentId, category, products }) {
  const related = products.filter(
    (p) => p.category === category && p.id !== currentId
  );

  return (
    <div className="mt-5 object-cover">
      <h3 className="text-lg font-bold mb-3">Related Plants</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {related.map((plant) => (
          <ProductCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
}
