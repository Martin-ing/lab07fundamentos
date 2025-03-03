import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";

function AppRoutes() {
  const [Prods, setProds] = useState([]);
  const [Cants, setCants] = useState([]);

  const addProds = (prod) => {
    setProds([...Prods, prod]);
  };

  const addCants = (index) => {
    setCants(Cants.map((count, i) => (i === index ? count + 1 : count)));
  };

  const subCants = (index) => {
    setCants(
      Cants.map((count, i) => (i === index && count > 1 ? count - 1 : count))
    );
  };

  const removeProds = (index) => {
    setProds(Prods.filter((_, i) => i !== index));
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/product/:productName"
        element={<Product addProds={addProds} />}
      />
      <Route
        path="/cart"
        element={<Cart Prods={Prods} removeProds={removeProds} />}
      />
    </Routes>
  );
}

export default AppRoutes;
