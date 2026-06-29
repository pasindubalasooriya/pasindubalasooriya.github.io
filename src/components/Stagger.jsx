import { motion, useReducedMotion } from 'framer-motion'

// Container + item pair for staggered reveals. Children rise in sequence
// when the group scrolls into view. Respects prefers-reduced-motion.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export function Stagger({ as = 'div', className = '', children }) {
  const reduce = useReducedMotion()
  const Comp = motion[as] ?? motion.div
  if (reduce) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }
  return (
    <Comp
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </Comp>
  )
}

export function StaggerItem({ as = 'div', className = '', children, ...rest }) {
  const reduce = useReducedMotion()
  const Comp = motion[as] ?? motion.div
  if (reduce) {
    const Plain = as
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    )
  }
  return (
    <Comp className={className} variants={item} {...rest}>
      {children}
    </Comp>
  )
}
