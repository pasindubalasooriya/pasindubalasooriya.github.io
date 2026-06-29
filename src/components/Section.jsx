import { motion, useReducedMotion } from 'framer-motion'

// Section wrapper that fades/slides its content in once on scroll.
// Respects prefers-reduced-motion: when reduced, content renders statically.
export default function Section({ id, className = '', children }) {
  const reduce = useReducedMotion()

  return (
    <motion.section
      id={id}
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.section>
  )
}
