import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetTrabajosAsync } from '../../redux/actions/trabajosAction';


const Trabajos = () => {
    const dispatch = useDispatch();
    const { trabajos } = useSelector((store) => store.imagenes);
    useEffect(() => {
        dispatch(actionGetTrabajosAsync());
      }, [dispatch]);
      
  return (
    <div>
         {trabajos && trabajos.length ? (
            trabajos.map((item, index) => (
              <article key={index}>
                <img src={item.image1} />
                <img src={item.image2} />
                <img src={item.image3} />
              </article>
              
            ))
          ) : (
            <div>no hay trabajos</div>
          )}
    </div>
  )
}

export default Trabajos