import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../redux/tasksSlice'
import { deleteTaskApi } from '../api/tasksApi'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Componente que representa una tarjeta individual con los datos de una tarea
const TaskCard = ({ task }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const currentUser = useSelector((state) => state.user.currentUser)

    // Verifica si el usuario actual es el dueño de la tarea o si es administrador
    const isOwner = currentUser?.id === task.userId
    const isAdmin = currentUser?.role === 'admin'
    const canEdit = isOwner || isAdmin

    // Elimina la tarea en API y Redux
    const handleDelete = async () => {
        try {
            await deleteTaskApi(task.id)
            dispatch(deleteTask(task.id))
        } catch (error) {
            console.error('Error al eliminar la tarea:', error)
        }
    }

    // Redirige a la página de edición
    const handleEdit = () => {
        navigate(`/edit/${task.id}`)
    }

    return (
        <motion.div
            className="task-card"                     // Clase para estilos definidos del index.css
            initial={{ opacity: 0, scale: 0.95 }}     // Animación de entrada
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            <h3>{task.title}</h3>
            <p>Estado: {task.completed ? '✅ Completada' : '❌ Pendiente'}</p>
            <p>Creada por usuario ID: {task.userId}</p>

            {/* Link para ir a la vista de detalles */}
            <Link to={`/task/${task.id}`}>Ver detalles</Link> <br />

            {/* Botones de edición y eliminación solo si tiene permiso */}
            {canEdit && (
                <>
                    <button onClick={handleEdit}>Editar</button>
                    <button onClick={handleDelete}>Eliminar</button>
                </>
            )}
        </motion.div>
    )
}

export default TaskCard