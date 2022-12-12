import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { actionRegisterAsync } from "../../redux/actions/usersAction";
import "./style.scss";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { error, errorMessage } = useSelector((store) => store.user);

  const onSubmit = async (data) => {
    console.log(data);
    const user = {
      name: data.name,
      email: data.email,
      admin: data.admin,
      password: data.password,
    };
    dispatch(actionRegisterAsync(user));
    console.log(error, errorMessage);

    if (error) {
      Swal.fire("Oops!", `Ha ocurrido un error: ${errorMessage}`, "error");
    } else {
      Swal.fire("Good job!", "Tu cuenta se ha creado exitosamente!", "success");
    }
  };

  return (
    <div className="login">
      <h3>Regístrate</h3>
      <Form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="text"
            placeholder="Escribe tu nombre"
            {...register("name")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Escribe tu email"
            {...register("email")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Escribe tu contraseña"
            {...register("password")}
          />
        </Form.Group>

        <Button type="submit">Registrarse</Button>
      </Form>
    </div>
  );
};

export default Register;
