import React from "react";

const FeatureCard = ({ icon, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="bg-lime-100 p-4 rounded-full mb-3">
        <span className="text-4xl text-black">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  );
};

export default FeatureCard;
