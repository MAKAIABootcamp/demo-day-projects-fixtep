import React from "react";
import { Button, Carousel } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
//import { images } from "../../services/data";

import logo from "./assets/logoConLetrasGrande.svg";
import "./style.scss";

const images = require.context("./assets/img", true);

const Home = () => {
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
        <div className="litleTitle">
          <h6>
            <strong>
              Profesionales de confianza hacen posible la solución de tu
              problema
            </strong>
          </h6>

          <h1>
            Encuentra la <strong>persona ideal</strong> para <br /> tu necesidad
            actual
          </h1>
        </div>
        <button>
          Encuentra nuestros <br /> servicios
        </button>
      </div>
    </>
  );
};

export default Home;
