'use client'
import { motion } from 'framer-motion'

export const AnimationLeft = ({ children, className }: any) => {
  return (
    <motion.div
      initial={{ x: '-30px', opacity: '0' }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      viewport={{ once: true, amount: 0.3 }} // Ajusta `amount` a 0.5 para que el 50% del componente esté visible antes de activar la animación
      className={className}
    >
      {children}
    </motion.div>
  )
}
