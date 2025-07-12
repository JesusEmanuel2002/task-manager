import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser } from '../redux/userSlice'
import { Link, useNavigate } from 'react-router-dom'

const AdminPanel = () => {
    const users = useSelector((state) => state.user.users)
    const currentUser = useSelector((state) => state.user.currentUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // Verificar si es admin
    if (!currentUser || currentUser.role !== 'admin') {
        return (
            <div>
                <h2>Acceso denegado</h2>
                <Link to="/">Volver al inicio</Link>
            </div>
        )
    }

    const handleDelete = (id) => {
        if (id === currentUser.id) {
            alert('No puedes eliminarte a ti mismo')
            return
        }
        dispatch(deleteUser(id))
    }

    return (
        <div>
            <h1>Panel de Administración</h1>
            <p>Usuarios registrados:</p>
            <table border="1" cellPadding="6">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u) => (
                        <tr key={u.id}>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.role}</td>
                            <td>
                                {u.id !== currentUser.id && (
                                    <button onClick={() => handleDelete(u.id)}>Eliminar</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <Link to="/">Volver al inicio</Link>
        </div>
    )
}

export default AdminPanel