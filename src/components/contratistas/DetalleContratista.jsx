import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Cita from "./Cita";
import { time } from "../../services/data";
import { Form } from "react-bootstrap";
const images = require.context("./assets/img", true);

// "https://previews.123rf.com/images/dolgachov/dolgachov1610/dolgachov161012005/64860816-profesi%C3%B3n-carpinter%C3%ADa-ebanister%C3%ADa-y-el-concepto-de-la-gente-carpintero-con-tablones-de-madera-martil.jpg"

const DetalleContratista = () => {
  const { name } = useParams();

  useEffect(() => {
    getWorkerInfo();
  }, []);

  const [infoWorker, setInfoWorker] = useState();
  const contratista = useSelector((store) => store.contratistaStore);

  const getWorkerInfo = () => {
    const workerData = contratista.contratista.slice();
    const tempWorker = workerData.find(
      (contratista) => contratista.name === name
    );
    setInfoWorker(tempWorker);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
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
          <input type="date" />
          <Form.Select
                  aria-label="Default select example"
                >
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
          </div>
        </article>
      ) : (
        <div>no haz seleccionado un contratista</div>
      )}

      <div className="details__work">
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
      <Cita />
    </div>
  );
};

export default DetalleContratista;
