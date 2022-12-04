import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Login = () => {
  return (
    <div className='login'>
      <h3>Inicia sesión</h3>
      <form className='login__form'>
        <input type="email" placeholder='Correo'/>
        <input type="password" placeholder='Contraseña'/>
        <button type='submit'>Iniciar sesión</button>
      </form>
      
      <span>¿No tienes cuenta?</span>
      <Link to='/register'>Registrate</Link>
    </div>
  )
}

export default Login
