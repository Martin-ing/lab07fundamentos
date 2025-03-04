import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";

function AppRoutes({ items, setItems }) {
  const [Prods, setProds] = useState([]);
  const [Cants, setCants] = useState([]);

  const addProds = (prod) => {
    if (Prods.indexOf(prod) === -1) {
      setProds([...Prods, prod]);
      setCants([...Cants, 1]);
      setItems(items + 1);
    } else {
      addCants(Prods.indexOf(prod));
    }
  };

  const addCants = (index) => {
    setCants(Cants.map((count, i) => (i === index ? count + 1 : count)));
    setItems(items + 1);
  };

  const subCants = (index) => {
    setCants(
      Cants.map((count, i) => (i === index && count > 1 ? count - 1 : count))
    );
    setItems(items - 1);
  };

  const removeProds = (index) => {
    setProds(Prods.filter((_, i) => i !== index));
    setItems(items - Cants[index]);
    setCants(Cants.filter((_, i) => i !== index));
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
        element={
          <Cart
            Prods={Prods}
            Cants={Cants}
            removeProds={removeProds}
            subCants={subCants}
            addCants={addCants}
          />
        }
      />
    </Routes>
  );
}

export default AppRoutes;
