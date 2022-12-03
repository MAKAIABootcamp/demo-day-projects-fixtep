import React from 'react'
import { Nav } from "react-bootstrap";
import logo from "./assets/fixtepGrande.svg";

const Footer = () => {
  return (
    <Nav className="Nav">
      <Nav.Item className="left">
        <img src={logo} alt="s" />
      </Nav.Item>
      <Nav.Item >
        <div>Contactanos</div>
        <div>Admin</div>
      </Nav.Item>
    </Nav>
  )
}

export default Footer
