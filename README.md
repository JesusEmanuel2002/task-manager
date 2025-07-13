# 📋 Sistema de Gestión de Tareas

Este proyecto es una aplicación de gestión de tareas construida con **React**, **Redux** y una API simulada JSONPlaceholder. Permite a los usuarios registrados crear, editar, eliminar y visualizar tareas, con control de acceso basado en roles.

---

## 🚀 Instrucciones de instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo
````

2. **Instala las dependencias**

```bash
npm install
```

3. **Ejecuta el proyecto localmente**

```bash
npm run dev
```

4. Abre tu navegador en:

```
http://localhost:5173/
```

---

## 📂 Estructura del proyecto

```
src/
├── api/               # Comunicación con la API externa con JSONPlaceholder
│   └── tasksApi.js
├── components/        # Componentes reutilizables
│   ├── PageWrapper.jsx
│   └── TaskCard.jsx
├── pages/             # Páginas principales de la app
│   ├── Home.jsx
│   ├── CreateTask.jsx
│   ├── EditTask.jsx
│   ├── TaskDetails.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── AdminPanel.jsx
├── redux/             # Redux slices y store
│   ├── store.js
│   ├── tasksSlice.js
│   └── userSlice.js
├── routes/            # Rutas definidas de la app
│   └── AppRoutes.jsx
├── App.jsx
└── main.jsx
```

---

## 🧩 Funcionalidades implementadas

* **Rutas y navegación** entre páginas (inicio, creación, edición, detalles)
* **CRUD de tareas** usando una API externa simulada (JSONPlaceholder)
* **Redux** para manejo global de tareas y usuarios
* **Registro de usuarios** y autenticación básica
* **Alta y baja de usuarios** en Redux
* **Roles de usuario**:

* **Administrador**: puede ver y eliminar todos los usuarios y tareas
* **Usuario regular**: solo puede modificar sus propias tareas
* **Animaciones** con Framer Motion (páginas y tarjetas)
* **Protección de rutas** mediante validaciones en los componentes

---

## 👤 Roles y permisos

| Acción                           | Usuario Regular | Administrador |
| -------------------------------- | --------------- | ------------- |
| Crear tarea                      | ✅               | ✅             |
| Editar/Eliminar su tarea         | ✅               | ✅             |
| Editar/Eliminar todas las tareas | ❌               | ✅             |
| Ver/Eliminar usuarios            | ❌               | ✅             |

---

## ⚙️ Tecnologías utilizadas

* React
* Redux Toolkit
* React Router DOM
* Axios
* Framer Motion (animaciones)
* JSONPlaceholder (API simulada)
* Vite (entorno de desarrollo)