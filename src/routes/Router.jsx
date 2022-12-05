import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contratistas from "../components/contratistas/Contratistas";
import DetalleContratista from "../components/contratistas/DetalleContratista";
import Footer from "../components/home/Footer";
import Home from "../components/home/Home";
import Navbar from "../components/home/Navbar";
import LoginAdmin from "../components/LoginAdmin";
import Login from "../components/loginAndRegis/Login";
import Register from "../components/loginAndRegis/Register";
import { auth } from "../firebase/firebaseConfig";
import { actionLoginAsync } from "../redux/actions/usersAction";

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  //const userStore = useSelector((store) => store.user);
  const userStore = useSelector((store) => store.userStore);
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
        if (Object.entries(userStore).length === 0) {
          const {
            displayName,
            email,
            accessToken,
            uid,
            admin,
          } = user.auth.currentUser;
          dispatch(
            actionLoginAsync({
              name: displayName,
              email,
              accessToken,
              uid,
              admin,
              error: false,
            })
          );
        }


      } else {
        setIsLoggedIn(false);
      }

    }

    );
  }, [setIsLoggedIn, dispatch, userStore]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<DetalleContratista />} />
        <Route path="/contratistas" element={<Contratistas />} />
        <Route path="/loginAdmin" element={<LoginAdmin />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;
