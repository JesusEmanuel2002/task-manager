# 📋 Sistema de Gestión de Tareas

Este proyecto es una aplicación de gestión de tareas construida con **React**, **Redux** y una API simulada JSONPlaceholder. Permite a los usuarios registrados crear, editar, eliminar y visualizar tareas, con control de acceso basado en roles.

---

## 🚀 Instrucciones de instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/JesusEmanuel2002/task-manager.git
cd task-manager
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

## 🎨 Estilos y Animaciones

Se incorporaron estilos personalizados y animaciones para mejorar la presentación visual y la experiencia del usuario:

- Se creó un archivo central de estilos `index.css` que contiene las clases para tarjetas (`.task-card`),  formularios, botones, contenedores de página (`.page-wrapper`), y más.
- Se utilizaron clases CSS en lugar de estilos en línea para mantener el código más limpio y reutilizable.
- Se implementaron animaciones con `framer-motion`:
- En componentes individuales como `TaskCard`, para animaciones suaves al renderizarse.
- En el componente `PageWrapper`, que envuelve cada página, aplicando transiciones de entrada y salida.

Esto asegura una interfaz moderna, clara, con buena estructura visual y una experiencia de usuario fluida.


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