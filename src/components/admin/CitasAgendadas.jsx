import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetCitaAsync } from '../../redux/actions/citasAction';

const CitasAgendadas = () => {
    const citasAgendadas = useSelector((store) => store.citaStore);
    console.log(citasAgendadas);
    const dispatch = useDispatch();

    const dataCitas = sessionStorage.getItem("citas")
        && JSON.parse(sessionStorage.getItem("citas"));
    useEffect(() => {
        dispatch(actionGetCitaAsync());
    }, [dispatch]);

    return (
        <div className='citasAgendadas'>
            <h2>Citas Agendadas</h2>
        <Table striped bordered hover>
            <thead className='thead'>
                <tr>
                    <th>Usuario</th>
                    <th>Teléfono</th>
                    <th>Dirección</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Servicio</th>
                    <th>Contratista</th>
                </tr>
            </thead>

            {dataCitas && dataCitas.length ? (dataCitas.map((item, index) => (
                <>
                    <tbody className='tbody'>
                        <tr key={index}>
                            <td>{item.userName}</td>
                            <td>{item.phone}</td>
                            <td>{item.address}</td>
                            <td>{item.date}</td>
                            <td>{item.time}</td>
                            <td>{item.profession}</td>
                            <td>{item.workerName}</td>
                        </tr>

                    </tbody>
                </>
            ))

            ) : (<></>)}
        </Table>
        </div>
    )
}

export default CitasAgendadas