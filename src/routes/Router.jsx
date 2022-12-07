import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddWorker from "../components/admin/AddWorker";
import DeleteEditWorker from "../components/admin/DeleteEditWorker";
import Contratistas from "../components/contratistas/Contratistas";
import DetalleContratista from "../components/contratistas/DetalleContratista";
import Footer from "../components/home/Footer";
import HeaderNav from "../components/home/HeaderNav";
import Home from "../components/home/Home";
import LoginAdmin from "../components/LoginAdmin";
import Login from "../components/loginAndRegis/Login";
import Register from "../components/loginAndRegis/Register";
import { auth } from "../firebase/firebaseConfig";
import { actionLoginAsync } from "../redux/actions/usersAction";
import PrivateRouter from "./PrivateRouter";

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  //const userStore = useSelector((store) => store.user);
  const userStore = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.id) {
        setIsLoggedIn(true);
        if (Object.entries(userStore).length === 0) {
          const { displayName, email, accessToken, admin } =
            user.auth.currentUser;
          dispatch(
            actionLoginAsync({
              name: displayName,
              email,
              accessToken,
              error: false,
            })
          );
        }
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [setIsLoggedIn, dispatch, userStore]);
  return (
    <BrowserRouter>
      <HeaderNav isAutentication={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<DetalleContratista />} />
        <Route path="/contratistas" element={<Contratistas />} />
        <Route path="/loginAdmin" element={<LoginAdmin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/agregarContratista" element={<AddWorker/>}/>
        <Route path="/eliminarEditarContratistas" element={<DeleteEditWorker/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
