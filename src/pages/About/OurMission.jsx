import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const data = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "Our mission is to make the world a greener place, one plant at a time. We strive to provide our customers with the highest quality plants and plant care products, along with the knowledge and support to help them thrive.",
    image: "/Heroimg/OurMission.avif", // ✅ remove "public/" from path
    points: [
      "Quality and Variety",
      "Sustainable Practices",
      "Expert Guidance",
      "Experienced Team",
    ],
  },
];

const OurMission = () => {
  const mission = data[0];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-40 py-24 bg-gray-100">
    
      <div className="max-w-xl">
        <h2 className="text-4xl md:text-4xl font-bold mb-6">{mission.title}</h2>
        <p className="text-gray-700 mb-8 text-lg">{mission.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
          {mission.points.map((point, index) => (
            <div key={index} className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              <p className="text-gray-800 ">{point}</p>
            </div>
          ))}
        </div>
      </div>

    
      <div className="w-full max-w-md">
        <img
          src={mission.image}
          alt="Our Mission"
          className="rounded-sm  w-full h-[600px]"
        />
      </div>
    </div>
  );
};

export default OurMission;
