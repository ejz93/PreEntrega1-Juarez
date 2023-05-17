import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import ItemFilterContainer from "../components/ItemDetailContainer/ItemFilterContainer";

const Rutas = () => {
  return (
    <BrowserRouter>
      <NavBar
        className={"navbar navbar-expand-lg navbar-light bg-warning"}
        navbarLogo={"Elemental"}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:category" element={<ItemFilterContainer />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Rutas;
