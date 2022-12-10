import React from 'react';
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';
import { time } from "../../services/data";

const Cita = ({ isShow, onClose }) => {
  return (
    <>
      <Modal show={isShow} onHide={onClose} animation={false}>
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
            <br />
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">Teléfono</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">Dirección</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cerrar
          </Button>
          <Button variant="primary" type='submit'>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default Cita
