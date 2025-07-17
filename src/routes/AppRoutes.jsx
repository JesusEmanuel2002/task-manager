import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import CreateTask from '../pages/CreateTask'
import EditTask from '../pages/EditTask'
import TaskDetails from '../pages/TaskDetails'
import Register from '../pages/Register'
import Login from '../pages/Login'
import AdminPanel from '../pages/AdminPanel'

// Manejador de rutas de la app
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateTask />} />
      <Route path="/edit/:id" element={<EditTask />} />
      <Route path="/task/:id" element={<TaskDetails />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  )
}

export default AppRoutes