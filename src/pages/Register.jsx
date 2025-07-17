import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../redux/userSlice'
import { useNavigate, Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

// Página de registro de nuevos usuarios
const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Estados del formulario
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Manejar envío de formulario de registro
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registerUser({ name, email, password }))
    navigate('/')
  }

  return (
    <PageWrapper>
      <h2>Registro</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

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

        <button type="submit">Registrarse</button>
      </form>

      {/* Enlace a la página de login */}
      <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
    </PageWrapper>
  )
}

export default Register