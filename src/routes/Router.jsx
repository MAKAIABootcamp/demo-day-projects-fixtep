import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/home/Footer";
import HeaderNav from "../components/home/HeaderNav";
import Home from "../components/home/Home";
import Register from "../components/loginAndRegis/Register";
import { auth } from "../firebase/firebaseConfig";
import { actionLoginAsync } from "../redux/actions/usersAction";
import DashBoardRouter from "./DashBoardRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [check, setCheck] = useState(true);
  const userStore = useSelector((store) => store.user);
  const dispatch = useDispatch();

  // const userLogin =
  //   sessionStorage.getItem("user") &&
  //   JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
        if (Object.entries(userStore).length === 0) {
          const { displayName, email, accessToken, uid } =
            user.auth.currentUser;
          dispatch(
            actionLoginAsync({
              name: displayName,
              email,
              accessToken,
              uid,
              error: false,
            })
          );
        }
      } else {
        setIsLoggedIn(false);
      }
      setCheck(false);
    });
  }, [setIsLoggedIn, dispatch, userStore]);

  if (check) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <BrowserRouter>
      <HeaderNav isAutentication={isLoggedIn} isAdmin={userStore} />
      <Routes>
        <Route element={<PublicRouter isAutentication={isLoggedIn} />}>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<PrivateRouter isAutentication={isLoggedIn} />}>
          <Route path="/*" element={<DashBoardRouter />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
