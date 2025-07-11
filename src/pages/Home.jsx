import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTasks } from '../redux/tasksSlice'
import { fetchTasks } from '../api/tasksApi'
import TaskCard from '../components/TaskCard'

const Home = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks.tasks)

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
    <div>
      <h1>Página principal: Lista de Tareas</h1>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}

export default Home