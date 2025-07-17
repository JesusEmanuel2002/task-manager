import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './tasksSlice'
import userReducer from './userSlice'

// Crea el store principal con los reducers de tareas y usuarios
const store = configureStore({
    reducer: {
        tasks: tasksReducer, // Estado para tareas
        user: userReducer,   // Estado para usuarios y sesión
    },
})

export default store