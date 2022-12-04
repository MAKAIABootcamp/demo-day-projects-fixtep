import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contratistas from "../components/contratistas/Contratistas";
import DetalleContratista from "../components/contratistas/DetalleContratista";
import Footer from "../components/home/Footer";
import Home from "../components/home/Home";
import Navbar from "../components/home/Navbar";
import LoginAdmin from "../components/LoginAdmin";
import Login from "../components/loginAndRegis/Login";
import Register from "../components/loginAndRegis/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<DetalleContratista />} />
        <Route path="/contratistas" element={<Contratistas />} />
        <Route path="/loginAdmin" element={<LoginAdmin />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="register" element={<Register />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;
