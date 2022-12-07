import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginAdmin = () => {

//   useEffect(() => {
//     userAdmin();
//    }, []);

  const navigate = useNavigate();
  const userLogin = sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : false;

  if (userLogin.admin === true){
    console.log('es admin')
  } else{
    console.log('no es admin');
    //navigate('/contratistas')
  }
   
  return (
    <div>
        <h1>Bienvenido admin </h1>
      
    </div>
  )
}

export default LoginAdmin
