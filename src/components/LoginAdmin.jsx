import React from "react";

import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const navigate = useNavigate();
  const userLogin = sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : false;

  if (userLogin.admin === true) {
    console.log("es admin");
  } else {
    console.log("no es admin");
    navigate("/contratistas");
  }

  return (
    <div className="admin">
      <h2>Bienvenido administrador </h2>
      <div className="admin__btn">
        <button
          onClick={() => {
            navigate("/agregarContratista");
          }}
        >
          Agregar contratista
        </button>
        <button
          onClick={() => {
            navigate("/eliminarEditarContratistas");
          }}
        >
          Ver todos los contratistas
        </button>
        <button
          onClick={() => {
            navigate("/citasAgendadas");
          }}
        >
          Ver citas agendadas
        </button>
      </div>
    </div>
  );
};

export default LoginAdmin;
