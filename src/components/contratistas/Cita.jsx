import React from 'react';
import Modal from "react-bootstrap/Modal";
import { Form, FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';
import { citaList, time } from "../../services/data";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionAddCitaAsync } from '../../redux/actions/citasAction';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Cita = ({ isShow, onClose, isWorker }) => {
  const { contratista } = useSelector((store) => store.contratistaStore);
  console.log(contratista);
  const userLogin = sessionStorage.getItem("user")
    && JSON.parse(sessionStorage.getItem("user"));
  const schema = yup.object({
    //date: yup.date().required("Debe seleccionar una fecha"),
    time: yup
      .string()
      .required("Debe seleccionar una hora"),
    phone: yup.string().required("Debe ingresar su celular"),
    direction: yup.string().required("Debe ingresar su direccion"),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const newCita = {
      date: data.date,
      time: data.time,
      userName: userLogin.name,
      phone: data.phone,
      address: data.direction,
      workerName: isWorker.name,
      profession: isWorker.profession
    };
    console.log(newCita);
    dispatch(actionAddCitaAsync(newCita));
    Swal.fire(
        "Se ha agendado la cita",
        "success"
      )      
    navigate("/contratista");

  };

  return (
    <>
      <Modal show={isShow} onHide={onClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Agendar cita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <input className='date' type="date" name='date' {...register('date')}/>
            {citaList.map((item, index) => {
              if (item.type === "select") {
                return (
                  <FloatingLabel key={index} label={item.label} className="mb-3">
                    <Form.Select
                      aria-label="Default select example"
                      {...register(item.name)}
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
                    <p>{errors[item.name]?.message}</p>
                  </FloatingLabel>
                );
              }
              if (item.type === "textarea") {
                return (
                  <FloatingLabel key={index} label={item.label} className="mb-3">
                    <Form.Control as="textarea" {...register(item.name)} />
                    <p>{errors[item.name]?.message}</p>
                  </FloatingLabel>
                );
              }
            })}
            <Button variant="warning" type="submit" className="mb-3">
              Agendar cita
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Cita
