import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/userSlice'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentUser = useSelector((state) => state.user.currentUser)

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(loginUser({ email, password }))

    // Verificar si el login fue exitoso
    setTimeout(() => {
      if (currentUser !== null) {
        navigate('/')
      } else {
        alert('Correo o contraseña incorrectos')
      }
    }, 100)
  }

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}

export default Login