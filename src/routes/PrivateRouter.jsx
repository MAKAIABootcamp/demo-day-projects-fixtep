import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginAdmin from '../components/LoginAdmin'

const PrivateRouter = () => {
  return (
    <Routes>
        <Route path="/loginAdmin" element={<LoginAdmin />} />
    </Routes>
  )
}

export default PrivateRouter