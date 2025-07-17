import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../redux/tasksSlice'
import { createTaskApi } from '../api/tasksApi'
import { useNavigate, Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

// Página para crear una nueva tarea (solo usuarios logueados)
const CreateTask = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentUser = useSelector((state) => state.user.currentUser)

  // Estados locales del formulario
  const [title, setTitle] = useState('')
  const [completed, setCompleted] = useState(false)

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault()

    const newTask = {
      title,
      completed,
      userId: currentUser.id, // asignar tarea al usuario logueado
    }

    try {
      const createdTask = await createTaskApi(newTask) // llamada a la API
      dispatch(addTask(createdTask)) // actualizar estado global
      navigate('/') // volver al inicio
    } catch (error) {
      console.error('Error al crear tarea:', error)
    }
  }

  return (
    <PageWrapper>
      <h2>Crear Nueva Tarea</h2>

      {/* Formulario controlado con estado */}
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          ¿Completada?
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </label>

        <button type="submit">Crear</button>
      </form>

      {/* Enlace para regresar a la lista de tareas */}
      <Link to="/" className="btn">Volver al inicio</Link>
    </PageWrapper>
  )
}

export default CreateTask