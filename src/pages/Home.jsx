import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTasks } from '../redux/tasksSlice'
import { fetchTasks } from '../api/tasksApi'
import TaskCard from '../components/TaskCard'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

const Home = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks.tasks)
  const currentUser = useSelector((state) => state.user.currentUser)

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks()
        dispatch(setTasks(data))
      } catch (error) {
        console.error('Error al cargar las tareas:', error)
      }
    }

    loadTasks()
  }, [dispatch])

  return (
    <PageWrapper>
      <h1>Lista de Tareas</h1>

      {currentUser ? (
        <>
          <p>
            Sesión iniciada como: <strong>{currentUser.name}</strong> ({currentUser.role})
          </p>
          <Link to="/create">Crear nueva tarea</Link>
          {currentUser.role === 'admin' && (
            <>
              {' | '}
              <Link to="/admin">Ir al Panel de Administración</Link>
            </>
          )}
        </>
      ) : (
        <>
          <p>No has iniciado sesión</p>
          <Link to="/login">Iniciar sesión</Link> |{' '}
          <Link to="/register">Registrarse</Link>
        </>
      )}

      <hr />
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </PageWrapper>
  )
}

export default Home