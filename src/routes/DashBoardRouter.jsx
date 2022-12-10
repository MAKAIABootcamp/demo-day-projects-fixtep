import React from 'react';
import { Route, Routes } from "react-router-dom";
import AddWorker from '../components/admin/AddWorker';
import CitasAgendadas from '../components/admin/CitasAgendadas';
import DeleteEditWorker from '../components/admin/DeleteEditWorker';
import Contratistas from '../components/contratistas/Contratistas';
import DetalleContratista from '../components/contratistas/DetalleContratista';
import LoginAdmin from '../components/LoginAdmin';


const DashBoardRouter = () => {

  return (
    <Routes> 
      <Route path="/contratistas" element={<Contratistas />} />
      <Route path="/agregarContratista" element={<AddWorker />} />
      <Route path="/editarContratista/:id" element={<AddWorker />} />
      <Route path="/eliminarEditarContratistas" element={<DeleteEditWorker />} />
      <Route path="/details/:name" element={<DetalleContratista />} />
      <Route path="/loginAdmin" element={<LoginAdmin />} />
      <Route path="/citasAgendadas" element={<CitasAgendadas />} />
    </Routes>
  )
}

export default DashBoardRouter