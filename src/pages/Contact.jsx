import Form from "./Contact/Form";

const Contact = () => {
  return (
    <>
     <section
       className="w-full bg-cover bg-center flex items-center justify-center text-white text-center relative overflow-hidden h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[80vh] "
      style={{
        backgroundImage: `url(/Heroimg/contact.avif)`,
        filter: "brightness(100%)",
      }}
    >   
      <div className="absolute inset-0 bg-black/40 shadow-inner z-0"></div>
   
      <div className="relative z-10 max-w-3xl px-4">
        <p className="text-md tracking-widest uppercase mb-2">
          ABOUT 🌿
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold mb-6">
         We are Passionate <br />About Our Work
        </h1>
        <a
          href="#shop"
          className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
        >
          Shop Now
        </a>
      </div>
    </section>
      <Form/>
      </>
  );
};

export default Contact;
