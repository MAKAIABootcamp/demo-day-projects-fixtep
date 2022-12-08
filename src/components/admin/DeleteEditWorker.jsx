import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { actionDeleteWorkerAsync, actionGetWorkerAsync } from '../../redux/actions/workerAction';
import "./style.scss";

const DeleteEditWorker = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { contratista } = useSelector((store) => store.contratistaStore);
    const userLogin = sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : false;

  if (userLogin.admin === true){
    console.log('es admin')
    // navigate('/agregarContratista')
  } else{
    console.log('no es admin');
    navigate('/contratistas')
  }
    useEffect(() => {
        dispatch(actionGetWorkerAsync());
      }, [])
  return (
    <div className="deleteEditCard">
    {
      contratista && contratista.length ? (
        contratista.map((contratista, index) => (
          <article  className="des"  key={index} >
            <img  src={contratista.image} />
              <h4>{contratista.profession}</h4>
              <div className='btn'>
              <button className='btnDelete' onClick={() => {
              dispatch(actionDeleteWorkerAsync(contratista))
              Swal.fire(
                "Se ha eliminado con exito",
                "success"
              )
            }} >
              Delete
            </button>
            <button className='btnEdit' onClick={() => {
                    navigate(`/editarContratista/${contratista.id}`);
                  }}>Editar</button>
            </div>
          </article>
          
        ))
      ) : (
        <div>no hay contratistas</div>
      )
    }
  </div>
  )
}

export default DeleteEditWorker