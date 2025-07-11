import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/todos'

// Obtiene todas las tareas (limitadas a 10 para prueba)
export const fetchTasks = async () => {
    const response = await axios.get(`${API_URL}?_limit=10`)
    return response.data
}

// Crear una tarea simulada
export const createTask = async (task) => {
    const response = await axios.post(API_URL, task)
    return response.data
}

// Actualizar una tarea simulada
export const updateTask = async (task) => {
    const response = await axios.put(`${API_URL}/${task.id}`, task)
    return response.data
}

// Eliminar una tarea simulada
export const deleteTaskApi = async (taskId) => {
    const response = await axios.delete(`${API_URL}/${taskId}`)
    return response.data
}