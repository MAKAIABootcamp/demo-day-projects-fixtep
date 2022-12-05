import React, { useState } from "react";
import { Button, Form, Nav } from "react-bootstrap";

import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { actionLogoutAsync } from "../../redux/actions/usersAction";
import logo from "./assets/fixtepGrande.svg";

const Navbar = ({ isAutentication }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onCloseSession = () => {
    dispatch(actionLogoutAsync());
    navigate("/");
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Nav className="Nav">
      <Nav.Item className="left">
        <img src={logo} alt="s" />
      </Nav.Item>
      <Nav.Item className="right">
        <Nav.Link href="/login">login</Nav.Link>
        <Button variant="primary" onClick={handleShow}>
          Login
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Registrate o inicia sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Escribe tu email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Escribe tu contraseña"
                />
              </Form.Group>
              <span>¿No tienes cuenta?</span> <br />
              <Link to="/register">Registrate</Link> <br />
              <Button variant="primary" type="submit">
                Inicia sesión
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/contratistas">Contratistas</Nav.Link>
        <Nav.Link href="/loginAdmin">Admin</Nav.Link>
        {isAutentication ? (
          <Button onClick={onCloseSession}>Cerrar sesión</Button>
        ) : (
          <></>
        )}
        {/* <Button onClick={onCloseSession}>Cerrar sesión</Button> */}
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
