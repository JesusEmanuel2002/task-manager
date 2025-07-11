import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../redux/tasksSlice'
import { deleteTaskApi } from '../api/tasksApi'
import { useNavigate } from 'react-router-dom'

const TaskCard = ({ task }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = async () => {
        try {
            await deleteTaskApi(task.id)
            dispatch(deleteTask(task.id))
        } catch (error) {
            console.error('Error al eliminar la tarea:', error)
        }
    }

    const handleEdit = () => {
        navigate(`/edit/${task.id}`)
    }

    return (
        <div style={styles.card}>
            <h3>{task.title}</h3>
            <p>Estado: {task.completed ? '✅ Completada' : '❌ Pendiente'}</p>
            <button onClick={handleEdit}>Editar</button>
            <button onClick={handleDelete}>Eliminar</button>
        </div>
    )
}

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        margin: '10px 0',
        backgroundColor: '#f9f9f9',
    },
}

export default TaskCard