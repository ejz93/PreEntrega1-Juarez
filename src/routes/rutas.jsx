import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "../components/Navbar/NavBar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Footer from "../components/Footer/Footer";

const Rutas = () => {

  return (
    <BrowserRouter>
      <NavBar
        className={"navbar navbar-expand-lg navbar-light bg-warning"}
        navbarLogo={"Elemental"}
      />
      <Routes>
        <Route path="/" element={<><Home /><ItemListContainer /></>}/>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/category/item/:id" element={<ItemDetailContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Rutas;
