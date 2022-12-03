import React from "react";
import { Nav } from "react-bootstrap";
import logo from "./assets/fixtepGrande.svg";

const Navbar = () => {
  return (
    <Nav className="Nav">
      <Nav.Item className="left">
        <img src={logo} alt="s" />
      </Nav.Item>
      <Nav.Item className="right">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/contratistas">Contratistas</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
