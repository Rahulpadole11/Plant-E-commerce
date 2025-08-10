import React from "react";
import { FaCube } from "react-icons/fa"; // using react-icons for the black circle icon

const cookies = [
  {
    id: 1,
    title: "Passionate About Work",
    discription:
      "Passion for work is an enthusiasm and excitement for what you do",
  },
  {
    id: 2,
    title: "Creative team members",
    discription:
      "A creative team is to design and execute campaigns & encourage",
  },
  {
    id: 3,
    title: "Innovation solutions",
    discription:
      "Using either completely concepts finding new ways of using existing",
  },
  {
    id: 4,
    title: "Qualitiful products",
    discription:
      "Product quality refers to how well a product satisfies our customer",
  },
  {
    id: 5,
    title: "Customer satisfaction",
    discription:
      "Happy customers are delighted because of the customer service",
  },
  {
    id: 6,
    title: "Simplicity interface",
    discription:
      "Simplicity is used loosely to refer to the need to minimize a process",
  },
];

const Specification = () => {
  return (
    <div className="bg-[#edf3d8] py-20 px-6 md:px-20 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-14">
        Our Core Values that Drive <br />
        Everything We Do
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cookies.map((cookie) => (
          <div key={cookie.id} className="flex items-start gap-4">
           
            <div className="bg-black text-white p-3  rounded-full text-lg mt-2">
              <FaCube className="h-8 w-8" />
            </div>

          
            <div>
              <h2 className="font-semibold text-2xl mb-2">{cookie.title}</h2>
              <p className="text-md text-gray-800">{cookie.discription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specification;
