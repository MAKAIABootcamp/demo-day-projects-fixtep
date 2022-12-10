import React from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import logo from "./assets/logoConLetrasGrande.svg";
import "./style.scss";

const images = require.context("./assets/img", true);

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="carouselImg">
        <Carousel>
          <Carousel.Item>
            <img
              className="imgCarrusel d-block w-60"
              src={images(`./img1.jpg`)}
              alt="s"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgCarrusel d-block w-60"
              src={images(`./img2.jpg`)}
              alt="s"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgCarrusel d-block w-60"
              src={images(`./img3.jpg`)}
              alt="s"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgCarrusel d-block w-60"
              src={images(`./img4.jpg`)}
              alt="s"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgCarrusel d-block w-60"
              src={images(`./img5.jpg`)}
              alt="s"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgCarrusel d-block w-60"
              src={images(`./img6.jpg`)}
              alt="s"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgCarrusel d-block w-60"
              src={images(`./img7.jpg`)}
              alt="s"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="mainContainer">
        {/* <div className="logo">
          <img src={logo} alt="s" />
        </div> */}
        <div className="left">
          <h1>¿Qué servicio necesitas?‍</h1>
          <h3>
            <strong>
              ¡Encuentra tu profesional ideal para que resuelva tu problema
              tecnico!
            </strong>
          </h3>
          <button
            onClick={() => {
              navigate(`/contratistas`);
            }}
          >
            Registrate, encuentra nuestros <br /> servicios y agenda tu cita
          </button>
        </div>
        <div className="right">
          <h3>
            <strong>
              Profesionales de confianza hacen posible la solución de tu
              problema
            </strong>
          </h3>

          <h2>
            Encuentra la <strong>persona ideal</strong> para tu necesidad actual
          </h2>
          {/* <button>
            Encuentra nuestros <br /> servicios
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Home;
