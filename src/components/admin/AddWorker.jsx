import React from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import * as yup from "yup";
import {categoryWorker, inputList} from '../../services/data';
import {fileUpLoad} from '../../services/fileUpload'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { actionAddWorkerAsync } from '../../redux/actions/adminAction';

const schema = yup.object({
    name: yup.string().required("Debe ingresar el nombre del contratista"),
    profession: yup.string().required("Debe incluir la profesión"),
    expertise: yup
        .string()
        .required("Debe ingresar los años de experiencia"),
    phone: yup.string().required("Debe ingresar el celular"),
});

const AddWorker = () => {

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
        const image = await fileUpLoad(data.image[0]);
        const newWorker = {
          name: data.name,
          expertise: data.expertise,
          phone: data.phone,
          profession: data.profession,
          image: image,
        };
        console.log(newWorker);
        dispatch(actionAddWorkerAsync(newWorker));
        Swal.fire(
            "Se ha agregado el contratista",
            "success"
          )      
        navigate("/contratistas");
            
      };

  return (
    <div className="p-5">
      <h1>Agregar nuevo contratista </h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {inputList.map((item, index) => {
          if (item.type === "select") {
            return (
              <FloatingLabel key={index} label={item.label} className="mb-3">
                <Form.Select
                  aria-label="Default select example"
                  {...register(item.name)}
                >
                  <option value="">Selecciona la profesión</option>
                  {categoryWorker.map((item) => (
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

          return (
            <FloatingLabel key={index} label={item.label} className="mb-3">
              <Form.Control
                type={item.type}
                size={item.type === "file" ? "sm" : ""}
                {...register(item.name)}
              />
              <p>{errors[item.name]?.message}</p>
            </FloatingLabel>
          );
        })}

        <Button variant="warning" type="submit" className="mb-3">
          Agregar Contratista
        </Button>
      </Form>
    </div>
  )
}

export default AddWorker
