import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:productName" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default AppRoutes;
