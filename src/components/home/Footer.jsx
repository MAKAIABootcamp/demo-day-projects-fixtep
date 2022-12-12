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
          <span>Síguenos en:</span>
          <div className='imgFooter'>
          <img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png" alt="Facebook" />
          <img src='https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/cd939-logo-instagram-png.png?fit=512%2C512&ssl=1' alt='Instagram'/>
          </div>
        </div>
      </Nav.Item>
      <Nav.Item >
        <div className='contactos'>
          <span>Contáctanos</span>
         <span>3034567856</span>
         <span>fixtep@gmail.com</span>
          </div>

      </Nav.Item>
    </Nav>
  )
}

export default Footer
