import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { actionLoginAsync } from "../../redux/actions/usersAction";
import "./style.scss";

const schema = yup.object({
  email: yup
    .string()
    .email("Debe ingresar un email")
    .required("Por favor ingresar su email"),
  password: yup.string().required("Por favor ingresar contraseña"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { error, errorMessage } = useSelector((store) => store.user);

  // const userSesion = sessionStorage.setItem("user", user);
  // console.log(userSesion)

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
  return (
    <div className="login">
      <h3>Inicia sesión</h3>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="Correo" {...register("email")} />
        <p>{errors.email?.message}</p>
        <input
          type="password"
          placeholder="Contraseña"
          {...register("password")}
        />
         <p>{errors.password?.message}</p>
        <button type="submit">Iniciar sesión</button>
      </form>

      <span>¿No tienes cuenta?</span>
      <Link to="/register">Registrate</Link>
    </div>
  );
};

export default Login;
