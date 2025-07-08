import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import TaskDetails from '../pages/TaskDetails'
import CreateTask from '../pages/CreateTask'
import EditTask from '../pages/EditTask'
import Login from '../pages/Login'
import Register from '../pages/Register'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task/:id" element={<TaskDetails />} />
      <Route path="/create" element={<CreateTask />} />
      <Route path="/edit/:id" element={<EditTask />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default AppRoutes