import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: [], // Lista de tareas
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        },
        updateTask: (state, action) => {
            const updatedTask = action.payload
            const index = state.tasks.findIndex(task => task.id === updatedTask.id)
            if (index !== -1) {
                state.tasks[index] = updatedTask
            }
        },
        deleteTask: (state, action) => {
            const taskId = action.payload
            state.tasks = state.tasks.filter(task => task.id !== taskId)
        },
    },
})

export const { setTasks, addTask, updateTask, deleteTask } = tasksSlice.actions

export default tasksSlice.reducer