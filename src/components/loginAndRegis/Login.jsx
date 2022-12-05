import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { actionLoginAsync } from '../../redux/actions/usersAction';
import './style.scss';

const Login = () => {
  const navigate = useNavigate()

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
  const { error, errorMessage, } = useSelector((store) => store.userStore);
  

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(actionLoginAsync(data));
    if (error) {
      Swal.fire("Oops!", `Ha ocurrido un error: ${errorMessage}`, "error");
    } else {
      Swal.fire("Good job!", "Bienvenido!", "success");
      navigate('/contratistas')
    }
  };
  return (
    <div className='login'>
      <h3>Inicia sesión</h3>
      <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder='Correo' {...register("email")}/>
        <input type="password" placeholder='Contraseña' {...register("password")}/>
        <button type='submit'>Iniciar sesión</button>
      </form>
      
      <span>¿No tienes cuenta?</span>
      <Link to='/register'>Registrate</Link>
    </div>
  )
}

export default Login
