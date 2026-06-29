import { motion, useScroll, useSpring } from 'framer-motion'

// Thin accent bar at the very top tracking page scroll progress.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 inset-x-0 z-[60] h-0.5 origin-left bg-accent"
    />
  )
}
