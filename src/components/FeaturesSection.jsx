import React from "react";
import FeatureCard from "./FeatureCard";
import { FaCreditCard, FaTruck, FaBox, FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const FeaturesSection = () => {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
        <FeatureCard icon={<FaCreditCard />} title="Secure Payment" subtitle="Elementum feugiat diam" />
        <FeatureCard icon={<FaTruck />} title="Free Shipping" subtitle="For $50 order" />
        <FeatureCard icon={<FaBox />} title="Delivered with Care" subtitle="Lacinia pellentesque leo" />
        <FeatureCard icon={<CiHeart/>} title="Excellent Service" subtitle="Blandit gravida viverra" />
        
      </div>
      <hr className="mt-10 w-6xl border-t-2 border-gray-300 mx-auto" />
    </section>
  );
};

export default FeaturesSection;
