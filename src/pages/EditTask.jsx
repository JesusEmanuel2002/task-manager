import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { updateTask as updateTaskApi } from '../api/tasksApi'
import { updateTask } from '../redux/tasksSlice'

const EditTask = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const task = useSelector((state) =>
    state.tasks.tasks.find((t) => t.id === parseInt(id))
  )

  const [title, setTitle] = useState('')
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    if (task) {
      setTitle(task.title)
      setCompleted(task.completed)
    }
  }, [task])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const updated = {
      ...task,
      title,
      completed,
    }

    try {
      await updateTaskApi(updated)
      dispatch(updateTask(updated))
      navigate('/')
    } catch (error) {
      console.error('Error al actualizar tarea:', error)
    }
  }

  if (!task) {
    return (
      <div>
        <p>Tarea no encontrada</p>
        <Link to="/">Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div>
      <h1>Editar Tarea</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          Completada
        </label>
        <button type="submit">Guardar cambios</button>
      </form>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}

export default EditTask