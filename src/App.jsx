import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import ShopCart from './components/ShopCart';
import Footer from "./components/Footer";
import ScrollToTopButton from './components/ScrollToTopButton';


// ✅ Import missing pages
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Loader from "./Loader/Loader";

export default function App() {

  const [loading, setLoading] = useState(true);
     useEffect(() => {
     
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);
  return (
    <>
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Loader loading={loading} />
      {!loading && (
  <div >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <ShopCart />
      <Footer />
      <ScrollToTopButton />
      </div>
            )}
    </div>
    </>
  );
}
