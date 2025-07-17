import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTask } from '../redux/tasksSlice'
import { updateTaskApi } from '../api/tasksApi'
import { useNavigate, useParams, Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

// Página para editar una tarea específica por ID
const EditTask = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams() // ID extraído de la URL
  const taskId = parseInt(id)
  const tasks = useSelector((state) => state.tasks.tasks)

  // Buscar la tarea en la lista actual
  const taskToEdit = tasks.find((t) => t.id === taskId)

  // Estados locales del formulario
  const [title, setTitle] = useState('')
  const [completed, setCompleted] = useState(false)

  // Cargar datos iniciales al montar el componente
  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title)
      setCompleted(taskToEdit.completed)
    }
  }, [taskToEdit])

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault()

    const updated = {
      ...taskToEdit,
      title,
      completed,
    }

    try {
      await updateTaskApi(updated) // llamada a la API
      dispatch(updateTask(updated)) // actualizar Redux
      navigate('/') // volver al Home
    } catch (error) {
      console.error('Error al actualizar tarea:', error)
    }
  }

  // Si no se encontró la tarea, mostrar mensaje
  if (!taskToEdit) {
    return <PageWrapper><p>Tarea no encontrada.</p></PageWrapper>
  }

  return (
    <PageWrapper>
      <h2>Editar Tarea</h2>

      {/* Formulario prellenado con datos de la tarea */}
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

        <button type="submit">Guardar Cambios</button>
      </form>

      {/* Enlace para regresar al inicio */}
      <Link to="/" className="btn">Volver al inicio</Link>
    </PageWrapper>
  )
}

export default EditTask