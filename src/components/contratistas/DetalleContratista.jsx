import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionGetTrabajosAsync } from "../../redux/actions/trabajosAction";
import store from "../../redux/store/store";
import { time } from "../../services/data";
import Cita from "./Cita";
const images = require.context("./assets/img", true);

// "https://previews.123rf.com/images/dolgachov/dolgachov1610/dolgachov161012005/64860816-profesi%C3%B3n-carpinter%C3%ADa-ebanister%C3%ADa-y-el-concepto-de-la-gente-carpintero-con-tablones-de-madera-martil.jpg"

const DetalleContratista = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    getWorkerInfo();
    getImgTrabajos();
  }, []);

  useEffect(() => {
    dispatch(actionGetTrabajosAsync());
  }, [dispatch]);

  const [infoWorker, setInfoWorker] = useState();
  const contratista = useSelector((store) => store.contratistaStore);
  const imgTrabajos = useSelector((store) => store.imagenes);
  console.log(imgTrabajos);

  const getWorkerInfo = () => {
    const workerData = contratista.contratista.slice();
    const tempWorker = workerData.find(
      (contratista) => contratista.name === name
    );
    setInfoWorker(tempWorker);
  };
  const [infoImg, setInfoImg] = useState();
  const getImgTrabajos = () => {
    const imgData = imgTrabajos.trabajo.slice();
    const img = imgData.find(
      (imgTrabajos) => imgTrabajos.name === name
    );
    setInfoImg(img);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="details">
        {infoWorker ? (
          <article className="details__card">
            <img src={infoWorker.image} />
            <div className="info">
              <h4>{infoWorker.profession}</h4>
              <span>{infoWorker.name}</span>
              <span>Experiencia : {infoWorker.expertise}</span>
              <span>Contacto: {infoWorker.phone}</span>
              <Button variant="primary" onClick={handleShow}>
                Agendar cita
              </Button>

              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Agendar cita</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <input type="date" />
                    <Form.Select aria-label="Default select example">
                      <option value="">Selecciona una hora</option>
                      {time.map((item) => (
                        <option
                          key={item.value}
                          value={item.label}
                          className="text-capitalize"
                        >
                          {item.label}
                        </option>
                      ))}
                    </Form.Select>
                    <input></input>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Guardar cambios
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </article>
        ) : (
          <div>no haz seleccionado un contratista</div>
        )}
        {infoImg ? (
            <div className="trabajos">
             <img src={infoImg.image1} />
             <img src={infoImg.image2} />
             <img src={infoImg.image3} />
             </div>
        ):(<></>)}
        {/* <div className="details__work">
          <Card style={{ width: "14rem", height: "50%" }}>
            <Card.Img variant="top" src={images(`./trabajo1.jpg`)} />
          </Card>
          <Card style={{ width: "14rem", height: "50%" }}>
            <Card.Img variant="top" src={images(`./trabajo2.jpg`)} />
          </Card>
          <Card style={{ width: "14rem", height: "50%" }}>
            <Card.Img variant="top" src={images(`./trabajo3.jpg`)} />
          </Card>
          <Card style={{ width: "14rem", height: "50%" }}>
            <Card.Img variant="top" src={images(`./trabajo4.jpg`)} />
          </Card>
        </div>
        <Cita /> */}
      </div>
    </>
  );
};

export default DetalleContratista;