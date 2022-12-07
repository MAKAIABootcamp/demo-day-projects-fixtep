import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddWorker from "../components/admin/AddWorker";
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
  const userStore = useSelector((store) => store.userStore);
<<<<<<< HEAD
  const dispatch = useDispatch();

=======
  const dispatch = useDispatch()
const [userAdmin, setUserAdmin] = useState(false)
>>>>>>> 85055f80d6257a6cd7e166d08e64edeaca43dfc4
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.id) {
        setIsLoggedIn(true);
        if (Object.entries(userStore).length === 0) {
<<<<<<< HEAD
          const { displayName, email, accessToken, admin } =
            user.auth.currentUser;
=======
          const {
            displayName,
            email,
            accessToken,
          } = user.auth.currentUser;
>>>>>>> 85055f80d6257a6cd7e166d08e64edeaca43dfc4
          dispatch(
            actionLoginAsync({
              name: displayName,
              email,
              accessToken,
              error: false,
            })
          );
        }
<<<<<<< HEAD
=======
        if (user?.admin){
          setUserAdmin(true)
        }

>>>>>>> 85055f80d6257a6cd7e166d08e64edeaca43dfc4
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
<<<<<<< HEAD
        <Route path="/loginAdmin" element={<LoginAdmin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
=======
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/loginAdmin" element={<LoginAdmin />} />
        {/* <Route element={<PrivateRouter isAutentication={userAdmin} />}></Route> */}
        <Route path="/agregarContratista" element={<AddWorker/>}/>
>>>>>>> 85055f80d6257a6cd7e166d08e64edeaca43dfc4
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
