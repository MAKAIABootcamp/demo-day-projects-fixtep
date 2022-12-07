import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { actionDeleteWorkerAsync, actionGetWorkerAsync } from '../../redux/actions/workerAction';
import "./style.scss";

const DeleteEditWorker = () => {
    const dispatch = useDispatch();
    const { contratista } = useSelector((store) => store.contratistaStore);
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
            <button className='btnEdit'>Editar</button>
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