import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contratistas from "../components/contratistas/Contratistas";
import DetalleContratista from "../components/contratistas/DetalleContratista";
import Footer from "../components/home/Footer";
import Home from "../components/home/Home";
import Navbar from "../components/home/Navbar";
import LoginAdmin from "../components/LoginAdmin";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<DetalleContratista />} />
        <Route path="/contratistas" element={<Contratistas />} />
        <Route path="/login" element={<LoginAdmin />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;
