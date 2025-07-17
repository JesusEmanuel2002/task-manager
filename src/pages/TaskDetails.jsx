import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PageWrapper from '../components/PageWrapper'

// Página para mostrar los detalles completos de una tarea
const TaskDetails = () => {
  const { id } = useParams() // obtenemos el ID de la tarea desde la URL
  const taskId = parseInt(id)
  const tasks = useSelector((state) => state.tasks.tasks)

  const task = tasks.find((t) => t.id === taskId)

  if (!task) {
    return <PageWrapper><p>Tarea no encontrada.</p></PageWrapper>
  }

  return (
    <PageWrapper>
      <h2>Detalles de la Tarea</h2>

      <div className="task-details"> {/* clase para aplicar estilos */}
        <p><strong>Título:</strong> {task.title}</p>
        <p><strong>Estado:</strong> {task.completed ? '✅ Completada' : '❌ Pendiente'}</p>
        <p><strong>ID del Usuario:</strong> {task.userId}</p>
        <p><strong>ID de la Tarea:</strong> {task.id}</p>
      </div>

      {/* Enlace para regresar al Home */}
      <Link to="/" className="btn">Volver al inicio</Link>
    </PageWrapper>
  )
}

export default TaskDetails