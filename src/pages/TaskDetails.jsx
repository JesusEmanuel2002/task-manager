import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const TaskDetails = () => {
  const { id } = useParams()
  const task = useSelector((state) =>
    state.tasks.tasks.find((t) => t.id === parseInt(id))
  )

  if (!task) {
    return (
      <div>
        <h2>Tarea no encontrada</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div>
      <h1>Detalles de la Tarea</h1>
      <p><strong>ID:</strong> {task.id}</p>
      <p><strong>Título:</strong> {task.title}</p>
      <p><strong>Estado:</strong> {task.completed ? '✅ Completada' : '❌ Pendiente'}</p>
      <p><strong>Creada por usuario ID:</strong> {task.userId}</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}

export default TaskDetails