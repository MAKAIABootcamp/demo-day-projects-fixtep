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
        <div className='facebook'>
          <span>Siguenos en:</span>
          <img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png" alt="Facebook" />
        </div>
      </Nav.Item>
      <Nav.Item >
        <div className='contactos'>
          <span>Contactanos</span>
         <span>3034567856</span>
         <span>fixtep@gmail.com</span>
          </div>

      </Nav.Item>
    </Nav>
  )
}

export default Footer
