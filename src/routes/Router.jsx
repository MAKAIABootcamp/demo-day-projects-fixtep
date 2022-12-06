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
import PrivateRouter from "./PrivateRouter";

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  //const userStore = useSelector((store) => store.user);
  const userStore = useSelector((store) => store.user);
  // console.log(userStore);

  const userSesion = sessionStorage.setItem("user", userStore);
console.log(userSesion);
  const dispatch = useDispatch()
const [userAdmin, setUserAdmin] = useState(false)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.id) {
        setIsLoggedIn(true);
        if (Object.entries(userStore).length === 0) {
          const {
            displayName,
            email,
            accessToken,
          } = user.auth.currentUser;
          dispatch(
            actionLoginAsync({
              name: displayName,
              email,
              accessToken,
              error: false,
            })
          );
        }
        if (user?.admin){
          setUserAdmin(true)
          console.log('Hola admin');
        }

      } else {
        setIsLoggedIn(false);
      }

    }

    );
  }, [setIsLoggedIn, dispatch, userStore]);
  return (
    <BrowserRouter>
      <Navbar isAutentication={isLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<DetalleContratista />} />
        <Route path="/contratistas" element={<Contratistas />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register />}/>
        <Route isAdmin={userAdmin} path="/loginAdmin" element={<LoginAdmin />} />
        {/* <Route element={<PrivateRouter isAutentication={userAdmin} />}></Route> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;
