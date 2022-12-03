import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// "https://previews.123rf.com/images/dolgachov/dolgachov1610/dolgachov161012005/64860816-profesi%C3%B3n-carpinter%C3%ADa-ebanister%C3%ADa-y-el-concepto-de-la-gente-carpintero-con-tablones-de-madera-martil.jpg"

const DetalleContratista = () => {

  const { name } = useParams();

  useEffect(() => {
    getWorkerInfo()
  }, [])

  const [infoWorker, setInfoWorker] = useState()
  const  contratista  = useSelector((store) => store.contratistaStore);

  const getWorkerInfo = () => {
    const workerData = contratista.contratista.slice()
    const tempWorker = workerData.find(contratista => contratista.name === name)
    setInfoWorker(tempWorker)
  }

  return (
    <div className="details">
      {
        infoWorker ? (
          <article className="details__card">
            <img src={infoWorker.image} />
            <div className="info">
              <span>{infoWorker.name}</span>
              <span>
                Experiencia : {infoWorker.expertise}
              </span>
              <span>
                Contacto: {infoWorker.phone}
              </span>
            </div>
          </article>
        ) : (
          <div>no haz seleccionado un contratista</div>
        )
      }

      <div className="details__work">
        <Card style={{ width: '14rem' }}>
          <Card.Img variant="top" src="https://previews.123rf.com/images/dolgachov/dolgachov1610/dolgachov161012005/64860816-profesi%C3%B3n-carpinter%C3%ADa-ebanister%C3%ADa-y-el-concepto-de-la-gente-carpintero-con-tablones-de-madera-martil.jpg" />
        </Card>
        <Card style={{ width: '14rem' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DXA6KwknMvikl2tIpM8kUlfPSC1P67HCtA&usqp=CAU" />
        </Card>
        <Card style={{ width: '14rem' }}>
          <Card.Img variant="top" src="https://previews.123rf.com/images/dolgachov/dolgachov1610/dolgachov161012005/64860816-profesi%C3%B3n-carpinter%C3%ADa-ebanister%C3%ADa-y-el-concepto-de-la-gente-carpintero-con-tablones-de-madera-martil.jpg" />
        </Card>
      </div>
    </div>
  );
};

export default DetalleContratista;
