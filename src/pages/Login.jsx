import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../redux/userSlice'
import { useNavigate, Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

// Página de inicio de sesión de usuarios
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Estados del formulario
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Manejar el envío del formulario de login
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUser({ email, password }))
    navigate('/')
  }

  return (
    <PageWrapper>
      <h2>Iniciar Sesión</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Correo:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit">Iniciar Sesión</button>
      </form>

      {/* Enlace a la página de registro */}
      <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
    </PageWrapper>
  )
}

export default Login