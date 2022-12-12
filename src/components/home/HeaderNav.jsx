import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  actionLoginAsync,
  actionLogoutAsync,
  loginProviderAsync,
} from "../../redux/actions/usersAction";
import { loginProvider } from "../../services/data";
import logo from "./assets/fixtepGrande.svg";
import logo2 from "./assets/logoConLetrasGrande.svg";
import "./style.scss";

const HeaderNav = ({ isAutentication, isAdmin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { error, errorMessage } = useSelector((store) => store.user);
  const userLogin = sessionStorage.getItem("user")
  ? JSON.parse(sessionStorage.getItem("user"))
  : false;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(actionLoginAsync(data));
    if (error) {
      Swal.fire("Oops!", `Ha ocurrido un error: ${errorMessage}`, "error");
    } else {
      Swal.fire("Good job!", "Bienvenido!", "success");
      navigate("/contratistas");
    }
  };

  const onCloseSession = () => {
    dispatch(actionLogoutAsync());
    navigate("/");
  };
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleLoginGoogle = (provider) => {
  //   dispatch(loginProviderAsync(provider))
  // }

  return (
    <Navbar className="Nav" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="left">
          <img src={logo2} alt="s" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
            {isAutentication ? (
              <>
                <NavLink to="/contratistas" className="navLink">
                  Servicios
                </NavLink>
                {isAdmin.admin ? (
                  <NavLink  to="/loginAdmin" className="navLink">
                    Administrador
                  </NavLink>
                ) : (
                  <></>
                )}
                <NavLink to="/" onClick={onCloseSession}>
                  Cerrar sesión
                </NavLink>
              </>
            ) : (
              <div className="NavInicio">
                <div className="inicio">
                  <NavLink to="/" className="navLink">
                    Inicio
                  </NavLink>
                </div>
                <NavDropdown
                  title="Iniciar Sesión"
                  id="basic-nav-dropdown"
                  className="navLink"
                >
                  <NavDropdown.Item onClick={handleShow}>
                    Iniciar Sesión
                  </NavDropdown.Item>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Registrate o inicia sesión</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="email"
                            placeholder="Escribe tu email"
                            {...register("email")}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="password"
                            placeholder="Escribe tu contraseña"
                            {...register("password")}
                          />
                        </Form.Group>
                        <Form.Label>¿No tienes cuenta?</Form.Label> <br />
                        <Form.Label onClick={handleClose}>
                          <Link to="/register">Registrate</Link>
                        </Form.Label>{" "}
                        <br />
                        <Button
                          //variant="outline-warning"
                          type="submit"
                          onClick={handleClose}
                        >
                          Inicia sesión
                        </Button>
                        {/* {loginProvider.map((provider, index) => (
                          <img
                            key={index}
                            src={provider.image}
                            alt={provider.name}
                            style={{ width: "40px", cursor: "pointer" }}
                            onClick={() => {
                              handleLoginGoogle(provider.provider);
                            }}
                          />
                        ))} */}
                      </Form>
                    </Modal.Body>
                  </Modal>

                  <NavDropdown.Item>
                    <Link to="/register">Registrarse</Link>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item></NavDropdown.Item>
                </NavDropdown>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <>
    //   {[false].map((expand) => (
    //     <Navbar key={expand} expand={expand} className="Nav">
    //       <Nav.Item className="left">
    //         <img src={logo2} alt="s" />
    //         <h6>Tu proveedor de servicios para el hogar y empresa</h6>
    //       </Nav.Item>
    //       <Navbar.Toggle></Navbar.Toggle>
    //       <Nav.Item className="right">
    //         <Nav.Link href="/login">login</Nav.Link>

    //         <Nav.Link href="/">Home</Nav.Link>
    //         <Nav.Link href="/contratistas">Servicios</Nav.Link>
    //         <Nav.Link href="/loginAdmin">Admin</Nav.Link>
    //         <Button onClick={handleShow}>Login</Button>
    //         <Modal show={show} onHide={handleClose}>
    //           <Modal.Header closeButton>
    //             <Modal.Title>Registrate o inicia sesión</Modal.Title>
    //           </Modal.Header>
    //           <Modal.Body>
    //             <Form>
    //               <Form.Group className="mb-3" controlId="formBasicEmail">
    //                 <Form.Control type="email" placeholder="Escribe tu email" />
    //               </Form.Group>
    //               <Form.Group className="mb-3" controlId="formBasicPassword">
    //                 <Form.Control
    //                   type="password"
    //                   placeholder="Escribe tu contraseña"
    //                 />
    //               </Form.Group>
    //               <span>¿No tienes cuenta?</span> <br />
    //               <Link to="/register">Registrate</Link> <br />
    //               <Button type="submit">Inicia sesión</Button>
    //             </Form>
    //           </Modal.Body>
    //           <Modal.Footer>
    //             <Button onClick={handleClose}>Close</Button>
    //             <Button onClick={handleClose}>Save Changes</Button>
    //           </Modal.Footer>
    //         </Modal>
    //         {isAutentication ? (
    //           <Button onClick={onCloseSession}>Cerrar sesión</Button>
    //         ) : (
    //           <></>
    //         )}
    //         {/* <Button onClick={onCloseSession}>Cerrar sesión</Button> */}
    //       </Nav.Item>
    //     </Navbar>
    //   ))}
    // </>
    //////////////////////////////////////////////////////////////////////////////////////
    // <Navbar className="Nav">
    //   <Navbar.Item className="left">
    //     <img src={logo} alt="s" />
    //   </Navbar.Item>
    //   <Navbar.Item className="right">
    //     <Navbar.Link href="/login">login</Navbar.Link>
    //     <Button variant="primary" onClick={handleShow}>
    //       Login
    //     </Button>
    //     <Modal show={show} onHide={handleClose}>
    //       <Modal.Header closeButton>
    //         <Modal.Title>Registrate o inicia sesión</Modal.Title>
    //       </Modal.Header>
    //       <Modal.Body>
    //         <Form>
    //           <Form.Group className="mb-3" controlId="formBasicEmail">
    //             <Form.Control type="email" placeholder="Escribe tu email" />
    //           </Form.Group>
    //           <Form.Group className="mb-3" controlId="formBasicPassword">
    //             <Form.Control
    //               type="password"
    //               placeholder="Escribe tu contraseña"
    //             />
    //           </Form.Group>
    //           <span>¿No tienes cuenta?</span> <br />
    //           <Link to="/register">Registrate</Link> <br />
    //           <Button variant="primary" type="submit">
    //             Inicia sesión
    //           </Button>
    //         </Form>
    //       </Modal.Body>
    //       <Modal.Footer>
    //         <Button variant="secondary" onClick={handleClose}>
    //           Close
    //         </Button>
    //         <Button variant="primary" onClick={handleClose}>
    //           Save Changes
    //         </Button>
    //       </Modal.Footer>
    //     </Modal>
    //     <Navbar.Link href="/">Home</Navbar.Link>
    //     <Navbar.Link href="/contratistas">Contratistas</Navbar.Link>
    //     <Navbar.Link href="/loginAdmin">Admin</Navbar.Link>
    //     {isAutentication ? (
    //       <Button onClick={onCloseSession}>Cerrar sesión</Button>
    //     ) : (
    //       <></>
    //     )}
    //     <Button onClick={onCloseSession}>Cerrar sesión</Button>
    //   </Navbar.Item>
    // </Navbar>
  );
};

export default HeaderNav;