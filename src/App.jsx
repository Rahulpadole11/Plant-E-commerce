import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ShopCart from './components/ShopCart';
import ScrollToTopButton from './components/ScrollToTopButton'; // 🆕

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <ShopCart />
      <Footer />

      <ScrollToTopButton /> 
    </div>
  );
}

export default App;
