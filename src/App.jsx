import React, { useState } from "react";
import Navbar from "/src/components/navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "/src/pages/Home/Home";
import Cart from "/src/pages/Cart/Cart";
import PlaceOrder from "/src/pages/PlaceOrder/PlaceOrder";
import Footer from "/src/components/Footer/Footer";
import ScrollToTop from "/src/components/ScrollToTop/ScrollToTop";
import LoginPopup from "/src/components/LoginPopup/LoginPopup";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <ScrollToTop />
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
