import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full bg-cover bg-center flex items-center justify-center text-white text-center relative overflow-hidden h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen"
      style={{
        backgroundImage: `url(/Heroimg/plant.avif)`,
        filter: "brightness(100%)",
      }}
    >
      {/* Dark overlay with inner shadow effect */}
      <div className="absolute inset-0 bg-black/40 shadow-inner z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4">
        <p className="text-sm tracking-widest uppercase mb-2">
          Welcome to Urban Jungle Co.
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Discover the Beauty of <br /> Nature at Your Fingertips
        </h1>
        <a
          href="/shop"
          className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;

