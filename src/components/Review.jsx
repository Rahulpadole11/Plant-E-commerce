import React from "react";

const usersReview = [
  {
    id: 1,
    message:
      "I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. I highly recommend them.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Your Client",
  },
  {
    id: 2,
    message:
      "I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. I highly recommend them.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Your Client",
  },
  {
    id: 3,
    message:
      "Their team exceeded our expectations. Their creative approach and attention to detail brought our vision to life. Highly recommended Their team exceeded our expectations!",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
    name: "Your Client",
  },
];

const Review = () => {
  return (
    <section className="bg-[#edf3d8] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">What Our Customers Say</h2>
        <p className="text-gray-600 mb-12">
          Discover the reasons why people love us and become your go-to partner.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {usersReview.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-green-600 text-3xl mb-4">“</div>
              <p className="text-gray-700 mb-6">{review.message}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={review.image}
                  alt="Client"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="text-gray-800 text-sm">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
