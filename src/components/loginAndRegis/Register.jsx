import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { actionRegisterAsync } from '../../redux/actions/usersAction';
import './style.scss';

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
      password: data.password,
     
    }
    dispatch(actionRegisterAsync(user));
    console.log(error, errorMessage);
    
    if (error) {
      Swal.fire("Oops!", `Ha ocurrido un error: ${errorMessage}`, "error");
    } else {
      Swal.fire("Good job!", "Tu cuenta se ha creado exitosamente!", "success");
      
    }
  };

  return (
    <div className='login'>
      <h3>Registrate</h3>
      <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Name'  {...register("name")}/>
        <input type="email" placeholder='Correo'  {...register("email")}/>
        <input type="password" placeholder='Contraseña'  {...register("password")}/>
        <button type='submit'>Registrarse</button>
      </form>
      <span>¿Ya tienes cuenta?</span>
      <Link to='/login'>Inicia sesión</Link>

    </div>
  )
}

export default Register
