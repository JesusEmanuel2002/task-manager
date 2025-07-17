import { createSlice } from '@reduxjs/toolkit'

// Estado inicial con usuario actual y lista de usuarios
const initialState = {
    currentUser: null, // Usuario autenticado
    users: [],         // Todos los usuarios registrados
}

// Creación del slice para manejar el estado de usuarios
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Registra un nuevo usuario con el rol por defecto
        registerUser: (state, action) => {
            const newUser = {
                id: Date.now(),          // ID único simulado
                ...action.payload,       // Datos: email, password, name
                role: 'regular',         // Rol predeterminado
            }
            state.users.push(newUser)    // Se agrega a la lista
            state.currentUser = newUser  // Se inicia sesión automáticamente
        },

        // Inicia sesión si el email y password coinciden
        loginUser: (state, action) => {
            const { email, password } = action.payload
            const userFound = state.users.find(
                (user) => user.email === email && user.password === password
            )
            state.currentUser = userFound || null // Se asigna o se limpia si no coincide
        },

        // Cierra la sesión del usuario actual
        logoutUser: (state) => {
            state.currentUser = null
        },

        // Elimina un usuario por su ID
        deleteUser: (state, action) => {
            const userId = action.payload
            state.users = state.users.filter((user) => user.id !== userId)

            // Si era el usuario logueado, también se cierra sesión
            if (state.currentUser?.id === userId) {
                state.currentUser = null
            }
        },

        // Asigna rol de administrador a un usuario
        promoteToAdmin: (state, action) => {
            const userId = action.payload
            const user = state.users.find((u) => u.id === userId)
            if (user) {
                user.role = 'admin'
            }
        },
    },
})

export const {
    registerUser,
    loginUser,
    logoutUser,
    deleteUser,
    promoteToAdmin,
} = userSlice.actions

export default userSlice.reducer