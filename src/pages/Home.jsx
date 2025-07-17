import React from 'react'
import { useSelector } from 'react-redux'
import TaskCard from '../components/TaskCard'
import PageWrapper from '../components/PageWrapper'

// Página principal muestra la lista de todas las tareas disponibles
const Home = () => {
  // Obtenemos las tareas desde Redux
  const tasks = useSelector((state) => state.tasks.tasks)

  return (
    <PageWrapper>
      <h2>Lista de Tareas</h2>

      {/* Contenedor de las tarjetas de tareas*/}
      <div className="task-list">
        {/* Si no hay tareas, se mostrarar el siguente mensaje */}
        {tasks.length === 0 ? (
          <p>No hay tareas registradas.</p>
        ) : (
          // Mostrar cada tarea usando el componente TaskCard
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </div>
    </PageWrapper>
  )
}

export default Home