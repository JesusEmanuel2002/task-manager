import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { createTask } from '../api/tasksApi'
import { addTask } from '../redux/tasksSlice'

const CreateTask = () => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newTask = {
      title,
      completed: false,
      userId: 1,
    }

    try {
      const createdTask = await createTask(newTask)
      dispatch(addTask(createdTask))
      navigate('/')
    } catch (error) {
      console.error('Error al crear tarea:', error)
    }
  }

  return (
    <div>
      <h1>Crear Nueva Tarea</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título de la tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit">Guardar</button>
      </form>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}

export default CreateTask