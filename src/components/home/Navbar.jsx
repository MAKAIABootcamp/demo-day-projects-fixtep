import React from "react";
import { Button, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionLogoutAsync } from "../../redux/actions/usersAction";
import logo from "./assets/fixtepGrande.svg";

const Navbar = () => {
  const navigate = useNavigate()
    const dispatch = useDispatch();
  const onCloseSession = () => {
      dispatch(actionLogoutAsync());
      navigate('/')
    }
  return (
    <Nav className="Nav">
      <Nav.Item className="left">
        <img src={logo} alt="s" />
      </Nav.Item>
      <Nav.Item className="right">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/contratistas">Contratistas</Nav.Link>
        <Button onClick={onCloseSession}>Cerrar sesión</Button>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
