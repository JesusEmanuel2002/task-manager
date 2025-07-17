import React from 'react'
import { motion } from 'framer-motion'

// Envuelve una página con animaciones de entrada/salida
const PageWrapper = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}   // Animación de inicio
            animate={{ opacity: 1, y: 0 }}    // Animación al mostrarse
            exit={{ opacity: 0, y: -30 }}     // Animación al salir
            transition={{ duration: 0.4 }}    // Duración de la transición
        >
            {children}
        </motion.div>
    )
}

export default PageWrapper