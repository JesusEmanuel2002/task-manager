import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null, // usuario autenticado
    users: [],         // todos los usuarios registrados
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registerUser: (state, action) => {
            // nuevo usuario con rol por defecto: regular
            const newUser = {
                id: Date.now(), // ID simulado
                ...action.payload,
                role: 'regular',
            }
            state.users.push(newUser)
            state.currentUser = newUser
        },
        loginUser: (state, action) => {
            const { email, password } = action.payload
            const userFound = state.users.find(
                (user) => user.email === email && user.password === password
            )
            if (userFound) {
                state.currentUser = userFound
            } else {
                state.currentUser = null
            }
        },
        logoutUser: (state) => {
            state.currentUser = null
        },
        deleteUser: (state, action) => {
            const userId = action.payload
            state.users = state.users.filter((user) => user.id !== userId)
            if (state.currentUser?.id === userId) {
                state.currentUser = null
            }
        },
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