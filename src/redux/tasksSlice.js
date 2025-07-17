import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [], // Lista de Tareas
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            // Reemplaza todas las tareas (usado al cargar desde API)
            state.tasks = action.payload
        },
        addTask: (state, action) => {
            // Agrega una nueva tarea
            state.tasks.push(action.payload)
        },
        updateTask: (state, action) => {
            // Modifica una tarea existente
            const updated = action.payload
            const index = state.tasks.findIndex((task) => task.id === updated.id)
            if (index !== -1) {
                state.tasks[index] = updated
            }
        },
        deleteTask: (state, action) => {
            // Elimina una tarea por ID
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        },
    },
})

export const { setTasks, addTask, updateTask, deleteTask } = tasksSlice.actions

export default tasksSlice.reducer