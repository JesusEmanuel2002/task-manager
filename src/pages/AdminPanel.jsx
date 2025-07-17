import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, promoteToAdmin } from '../redux/userSlice'
import PageWrapper from '../components/PageWrapper'

// Página accesible solo para usuarios administradores permite ver, eliminar y promover usuarios registrados
const AdminPanel = () => {
  const dispatch = useDispatch()

  const users = useSelector((state) => state.user.users)
  const currentUser = useSelector((state) => state.user.currentUser)

  // Maneja la eliminación de un usuario
  const handleDelete = (userId) => {
    if (window.confirm('¿Estás seguro de eliminar este usuario?')) {
      dispatch(deleteUser(userId))
    }
  }

  // Maneja la promoción de un usuario a admin
  const handlePromote = (userId) => {
    dispatch(promoteToAdmin(userId))
  }

  return (
    <PageWrapper>
      <h2>Panel de Administración</h2>

      <div className="user-list"> {/* Clase para estilo en el index.css */}
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <p><strong>{user.name}</strong></p>
            <p>Email: {user.email}</p>
            <p>Rol: {user.role}</p>

            {/* Acciones evitar modificar al usuario actual */}
            {user.id !== currentUser.id && (
              <>
                <button onClick={() => handleDelete(user.id)}>Eliminar</button>
                {user.role !== 'admin' && (
                  <button onClick={() => handlePromote(user.id)}>Hacer Admin</button>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </PageWrapper>
  )
}

export default AdminPanel