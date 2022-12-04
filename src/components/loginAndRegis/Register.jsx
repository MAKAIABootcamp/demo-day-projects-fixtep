import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Register = () => {
  return (
    <div className='login'>
      <h3>Registrate</h3>
      <form className='login__form'>
        <input type="text" placeholder='Name'/>
        <input type="email" placeholder='Correo'/>
        <input type="password" placeholder='Contraseña'/>
        <button type='submit'>Iniciar sesión</button>
      </form>
      <span>¿Ya tienes cuenta?</span>
      <Link to='/login'>Inicia sesión</Link>
    </div>
  )
}

export default Register
